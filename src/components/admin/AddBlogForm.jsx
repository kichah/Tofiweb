'use client'

import { useState } from 'react'
import { upsertBlog } from '@/app/admin/actions'
import { useRouter } from 'next/navigation'
import SectionHeading from '@/components/SectionHeading'

export default function AddBlogForm({ initialData = null, onSuccess }) {
  const isEdit = !!initialData;
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    if (initialData?.id) formData.append('id', initialData.id);
    
    await upsertBlog(formData);
    setLoading(false);
    
    if (onSuccess) {
      onSuccess();
    } else {
      router.push('/admin/blogs');
    }
  }

  return (
    <div className="w-full">
      {!onSuccess && <div className="mb-8"><SectionHeading>{isEdit ? 'Edit Blog' : 'New Blog'}</SectionHeading></div>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-[#111] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Title</label>
            <input name="title" required defaultValue={initialData?.title} className="bg-black/30 border-2 border-white/5 rounded-xl p-4 outline-none focus:border-primary text-sm text-offwhite transition-colors" placeholder="Ex: Why UI Matters" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Author</label>
            <input name="author" required defaultValue={initialData?.author} className="bg-black/30 border-2 border-white/5 rounded-xl p-4 outline-none focus:border-primary text-sm text-offwhite transition-colors" placeholder="Tofi kichah" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Tag</label>
          <input name="tag" defaultValue={initialData?.tag} className="bg-black/30 border-2 border-white/5 rounded-xl p-4 outline-none focus:border-primary text-sm text-offwhite transition-colors" placeholder="Development" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Cover Image</label>
          {initialData?.img && <img src={initialData.img} alt="Current Cover" className="h-24 w-full object-cover rounded-lg border border-white/10" />}
          <input type="file" name="img" accept="image/*" className="bg-black/30 border-2 border-white/5 rounded-xl p-3 outline-none focus:border-primary text-sm text-offwhite file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-[10px] file:uppercase file:tracking-widest file:font-bold file:bg-[#1f1f1f] file:text-white hover:file:bg-primary hover:file:text-black transition-colors" />
          <input type="hidden" name="existing_img" value={initialData?.img || ''} />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Short Description</label>
          <textarea name="short_desc" required defaultValue={initialData?.short_desc} rows={2} className="bg-black/30 border-2 border-white/5 rounded-xl p-4 outline-none focus:border-primary text-sm text-offwhite resize-y transition-colors" placeholder="A comprehensive guide..."></textarea>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Full Description / Content</label>
          <textarea name="description" required defaultValue={initialData?.description} rows={12} className="bg-black/30 border-2 border-white/5 rounded-xl p-4 outline-none focus:border-primary text-sm text-offwhite resize-y transition-colors" placeholder="Detailed content..."></textarea>
        </div>

        <button type="submit" disabled={loading} className="mt-8 cursor-pointer bg-primary text-black font-bold uppercase tracking-widest py-5 rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(246,210,10,0.15)] focus:scale-95">
          {loading ? 'Saving...' : (isEdit ? 'Update Blog' : 'Publish Blog')}
        </button>
      </form>
    </div>
  )
}

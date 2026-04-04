'use client'

import { useState } from 'react'
import { upsertProject } from '@/app/admin/actions'
import { useRouter } from 'next/navigation'
import SectionHeading from '@/components/SectionHeading'

export default function AddProjectForm({ initialData = null, onSuccess }) {
  const isEdit = !!initialData;
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    if (initialData?.id) formData.append('id', initialData.id);
    
    await upsertProject(formData);
    setLoading(false);
    
    if (onSuccess) {
      onSuccess(); // Close modal logic
    } else {
      router.push('/admin'); // Fallback for independent route
    }
  }

  return (
    <div className="w-full">
      {!onSuccess && <div className="mb-8"><SectionHeading>{isEdit ? 'Edit Project' : 'New Project'}</SectionHeading></div>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-[#111] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Title</label>
            <input name="title" required defaultValue={initialData?.title} className="bg-black/30 border-2 border-white/5 rounded-xl p-4 outline-none focus:border-primary text-sm text-offwhite transition-colors" placeholder="Ex: Portfolio Website" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Category</label>
            <input name="category" required defaultValue={initialData?.category} className="bg-black/30 border-2 border-white/5 rounded-xl p-4 outline-none focus:border-primary text-sm text-offwhite transition-colors" placeholder="Ex: UI/UX Design" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Tags (Comma Separated)</label>
          <input name="tags" defaultValue={initialData?.tags?.join(', ')} className="bg-black/30 border-2 border-white/5 rounded-xl p-4 outline-none focus:border-primary text-sm text-offwhite transition-colors" placeholder="Next.js, Tailwind, Supabase" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Detail (Short)</label>
            <textarea name="detail" required defaultValue={initialData?.detail} rows={4} className="bg-black/30 border-2 border-white/5 rounded-xl p-4 outline-none focus:border-primary text-sm text-offwhite resize-y transition-colors" placeholder="Brief summary..."></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Description (Long)</label>
            <textarea name="description" required defaultValue={initialData?.description} rows={4} className="bg-black/30 border-2 border-white/5 rounded-xl p-4 outline-none focus:border-primary text-sm text-offwhite resize-y transition-colors" placeholder="Detailed description..."></textarea>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Card Image</label>
            {initialData?.img && <img src={initialData.img} alt="Current Card" className="h-16 w-24 object-cover rounded-lg border border-white/10" />}
            <input type="file" name="img" accept="image/*" className="bg-black/30 border-2 border-white/5 rounded-xl p-3 outline-none focus:border-primary text-sm text-offwhite file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-[10px] file:uppercase file:tracking-widest file:font-bold file:bg-[#1f1f1f] file:text-white hover:file:bg-primary hover:file:text-black transition-colors" />
            <input type="hidden" name="existing_img" value={initialData?.img || ''} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Full Web Image</label>
            {initialData?.fullimg && <img src={initialData.fullimg} alt="Current Web" className="h-16 w-24 object-cover rounded-lg border border-white/10" />}
            <input type="file" name="fullimg" accept="image/*" className="bg-black/30 border-2 border-white/5 rounded-xl p-3 outline-none focus:border-primary text-sm text-offwhite file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-[10px] file:uppercase file:tracking-widest file:font-bold file:bg-[#1f1f1f] file:text-white hover:file:bg-primary hover:file:text-black transition-colors" />
            <input type="hidden" name="existing_fullimg" value={initialData?.fullimg || ''} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Live Website Link</label>
            <input name="web_link" defaultValue={initialData?.web_link} className="bg-black/30 border-2 border-white/5 rounded-xl p-4 outline-none focus:border-primary text-sm text-offwhite transition-colors" placeholder="https://" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">GitHub Link</label>
            <input name="github_link" defaultValue={initialData?.github_link} className="bg-black/30 border-2 border-white/5 rounded-xl p-4 outline-none focus:border-primary text-sm text-offwhite transition-colors" placeholder="https://github.com/..." />
          </div>
        </div>

        <button type="submit" disabled={loading} className="mt-8 cursor-pointer bg-primary text-black font-bold uppercase tracking-widest py-5 rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(246,210,10,0.15)] focus:scale-95">
          {loading ? 'Saving...' : (isEdit ? 'Update Project' : 'Publish Project')}
        </button>
      </form>
    </div>
  )
}

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import SectionHeading from '@/components/SectionHeading';

export default function AdminBlogPage() {
  async function addBlog(formData) {
    'use server'
    const supabase = createClient()

    const blogData = {
      title: formData.get('title'),
      slug: formData.get('slug'),
      content: formData.get('content'),
      cover_img: formData.get('coverImg') || null
    }

    const { error } = await supabase.from('Blogs').insert([blogData])
    if (error) {
      console.error("Error inserting blog:", error)
    }

    revalidatePath('/blog') // Invalidating wherever blogs might render
  }

  return (
    <div className="p-8 md:p-12 max-w-4xl">
      <SectionHeading>New Blog Post</SectionHeading>

      <form action={addBlog} className="mt-8 flex flex-col gap-6 bg-[#111] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Title</label>
            <input name="title" required className="bg-black/30 border-2 border-white/5 rounded-xl p-4 outline-none focus:border-primary text-sm transition-colors" placeholder="Ex: Why UI Matters" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Slug / URL path</label>
            <input name="slug" required className="bg-black/30 border-2 border-white/5 rounded-xl p-4 outline-none focus:border-primary text-sm transition-colors" placeholder="why-ui-matters" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Cover Image URL</label>
          <input name="coverImg" className="bg-black/30 border-2 border-white/5 rounded-xl p-4 outline-none focus:border-primary text-sm transition-colors" placeholder="/img/cover.webp or https://" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Post Content (Markdown or Text)</label>
          <textarea name="content" required rows={12} className="bg-black/30 border-2 border-white/5 rounded-xl p-4 outline-none focus:border-primary text-sm resize-y transition-colors" placeholder="Write your thoughts..."></textarea>
        </div>

        <button type="submit" className="mt-8 cursor-pointer bg-primary text-black font-bold uppercase tracking-widest py-5 rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(246,210,10,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
          Publish Blog
        </button>
      </form>
    </div>
  )
}

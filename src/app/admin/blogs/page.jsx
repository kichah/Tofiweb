import BlogsView from '@/components/admin/BlogsView'
import { getAllBlogs } from '@/app/_lib/apiBlogs'

export default async function AdminBlogsPage() {
  const { Blogs } = await getAllBlogs()
  return (
    <div className="py-12">
      <BlogsView blogs={Blogs} />
    </div>
  )
}

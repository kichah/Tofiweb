'use client'

import { useState } from 'react'
import AdminDataTable from './AdminDataTable'
import AddBlogForm from './AddBlogForm'
import { X } from 'lucide-react'
import { deleteBlog } from '@/app/admin/actions'

export default function BlogsView({ blogs }) {
  const [editingRow, setEditingRow] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEdit = (row) => {
    setEditingRow(row)
    setIsModalOpen(true)
  }

  const handleDelete = async (id) => {
    await deleteBlog(id)
  }

  const columns = {
    template: '1fr 3fr 2fr 2fr 100px',
    headers: ['ID', 'Title', 'Author', 'Tag'],
    renderers: [
      ({ row }) => <span className="font-mono text-gray-500 text-xs">#{row.id}</span>,
      ({ row }) => <span className="font-bold text-white text-base">{row.title}</span>,
      ({ row }) => <span className="text-gray-300">{row.author}</span>,
      ({ row }) => <span className="text-gray-400 font-bold text-[11px] uppercase tracking-widest px-3 py-1.5 bg-white/5 rounded-full">{row.tag}</span>
    ]
  }

  return (
    <>
      <AdminDataTable
        title="All Blogs"
        newRoute="/admin/newblog"
        data={blogs || []}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-[2px] overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-[#0a0a0a] rounded-4xl p-2 border border-white/10 m-auto mt-20 md:mt-auto shadow-2xl">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 z-20 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors cursor-pointer border border-white/10">
              <X size={20} />
            </button>
            <div className="max-h-[85vh] overflow-y-auto custom-swiper-scroll p-6 md:p-8">
              <h3 className="text-2xl font-oswald uppercase tracking-widest text-[#f6d20a] mb-6">Edit Blog</h3>
              <AddBlogForm initialData={editingRow} onSuccess={() => setIsModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

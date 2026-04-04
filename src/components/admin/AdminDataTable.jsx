'use client'

import { Pencil, Trash2, Plus, X } from 'lucide-react'
import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'

export default function AdminDataTable({ 
  data, 
  columns, 
  title, 
  newRoute,
  onEdit,     // client-side callback passing the row object
  onDelete    // client-side callback passing the row id
}) {
  return (
    <div className="p-8 md:p-12 w-full max-w-7xl mx-auto font-inter text-offwhite overflow-x-auto relative">
      <div className="flex justify-between items-center mb-8">
         <SectionHeading>{title}</SectionHeading>
         <Link href={newRoute} className="flex items-center gap-2 bg-primary text-black font-bold px-5 py-3 rounded-xl uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_15px_rgba(246,210,10,0.15)]">
           <Plus size={18} /> Add New
         </Link>
      </div>

      <div className="bg-[#111111] border border-white/5 rounded-2xl overflow-hidden shadow-2xl min-w-[800px]">
        {/* Table Header */}
        <div className="grid border-b border-white/5 bg-black/40 text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] p-5"
             style={{ gridTemplateColumns: columns.template }}>
           {columns.headers.map((h, i) => <div key={i} className="px-2">{h}</div>)}
           <div className="px-2 text-right">Actions</div>
        </div>

        {/* Table Body */}
        {data.length === 0 ? (
          <div className="p-12 text-center text-gray-500 text-sm">No entries found.</div>
        ) : (
          <div className="flex flex-col">
            {data.map((row, i) => (
              <div key={row.id || i} className="grid items-center border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors p-5 group"
                   style={{ gridTemplateColumns: columns.template }}>
                
                {columns.renderers.map((Renderer, colIdx) => (
                   <div key={colIdx} className="px-2 overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-300">
                     <Renderer row={row} />
                   </div>
                ))}
                
                {/* Actions Column */}
                <div className="px-2 flex justify-end gap-3 opacity-100 md:opacity-50 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => onEdit(row)} className="p-2.5 bg-white/5 rounded-lg text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-colors cursor-pointer border border-white/5">
                     <Pencil size={16} />
                  </button>
                  <button onClick={() => {
                    if(window.confirm('Are you sure you want to delete this completely?')) onDelete(row.id)
                  }} className="p-2.5 bg-white/5 rounded-lg text-red-500 hover:bg-red-500/20 hover:text-red-400 transition-colors cursor-pointer border border-white/5">
                     <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

import Link from 'next/link'
import { LayoutDashboard, FileText, LogOut } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function AdminLayout({ children }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  async function signOut() {
    'use server'
    const supabaseAction = await createClient()
    await supabaseAction.auth.signOut()
    redirect('/login')
  }

  return (
    <div className="flex min-h-screen bg-[#050505] text-offwhite font-inter ">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#0a0a0a] flex flex-col pt-32">
        <div className="px-8 pb-8 border-b border-white/10">
          <h2 className="font-oswald text-2xl uppercase tracking-widest text-primary">Tofi Admin</h2>
          <p className="text-gray-500 text-xs mt-1 truncate">{user?.email}</p>
        </div>

        <nav className="flex-1 py-6 px-4 flex flex-col gap-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors text-sm font-bold text-gray-300 hover:text-white">
            <LayoutDashboard size={18} /> All Projects
          </Link>
          <Link href="/admin/blogs" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors text-sm font-bold text-gray-300 hover:text-white">
            <FileText size={18} /> All Blogs
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <form action={signOut}>
            <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg hover:bg-red-500/10 hover:text-red-400 transition-colors text-sm font-bold text-gray-400 cursor-pointer">
              <LogOut size={18} /> Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto py-32">
        {children}
      </main>
    </div>
  )
}

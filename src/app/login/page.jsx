import { login } from './actions'
import SectionHeading from '@/components/SectionHeading'

export default async function LoginPage(props) {
  // Awaiting searchParams to be compatible with Next.js 15+ API changes
  const searchParams = await props.searchParams;

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background px-4 relative">
        {/* Simple background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />

      <form className="flex-1 max-w-md flex flex-col w-full gap-8 text-offwhite bg-[#111111] p-10 md:p-14 rounded-4xl border border-white/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] relative z-10">
        <div className="text-center w-full flex justify-center mb-4">
           <SectionHeading>Tofi Access</SectionHeading>
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-inter text-sm font-bold text-gray-400 uppercase tracking-widest pl-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="bg-black/20 border-2 border-[#2a2a2a] rounded-xl focus:border-primary outline-none px-4 py-4 font-inter transition-all w-full placeholder:text-gray-600 focus:placeholder:text-gray-400 focus:shadow-[0_0_15px_rgba(246,210,10,0.1)]"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-inter text-sm font-bold text-gray-400 uppercase tracking-widest pl-1">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="bg-black/20 border-2 border-[#2a2a2a] rounded-xl focus:border-primary outline-none px-4 py-4 font-inter transition-all w-full placeholder:text-gray-600 focus:placeholder:text-gray-400 focus:shadow-[0_0_15px_rgba(246,210,10,0.1)]"
            placeholder="••••••••"
          />
        </div>

        {searchParams?.message && (
          <p className="mt-2 p-4 bg-red-500/10 text-red-500 font-bold border-l-4 border-red-500 text-sm font-inter">
            {searchParams.message}
          </p>
        )}

        <button
          formAction={login}
          className="mt-4 cursor-pointer bg-primary text-black font-inter font-bold text-base tracking-widest uppercase px-6 py-4 rounded-xl hover:bg-white hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(246,210,10,0.2)] w-full"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

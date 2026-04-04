export default function LoadingSpinner() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-24 min-h-[300px]">
      <div className="relative flex items-center justify-center">
        {/* Outer rotating track */}
        <div className="absolute w-16 h-16 border-2 border-white/5 rounded-full"></div>
        {/* Outer rotating ring */}
        <div className="absolute w-16 h-16 border-2 border-transparent border-t-primary border-r-primary rounded-full animate-spin" style={{ animationDuration: '1.2s' }}></div>
        
        {/* Inner rotating ring */}
        <div className="absolute w-10 h-10 border-2 border-transparent border-b-primary border-l-primary rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        
        {/* Core glowing dot */}
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(246,210,10,0.8)]"></div>
      </div>
      <p className="mt-8 text-xs font-oswald uppercase tracking-[0.2em] text-gray-500 animate-pulse">Loading data...</p>
    </div>
  )
}

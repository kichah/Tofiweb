export default function SectionHeading({ children, className = "" }) {
  // Default sizing if none provided in className
  const hasTextSize = className.includes('text-');
  const sizeClass = hasTextSize ? '' : 'text-4xl md:text-5xl';

  return (
    <h2 className={`font-oswald text-offwhite uppercase tracking-wider ${sizeClass} ${className}`}>
      {children}
    </h2>
  );
}

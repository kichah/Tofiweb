import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBlogBySlug } from "@/app/_lib/apiBlogs";
import { formatLocalDate } from "@/app/_lib/data";

export default async function SingleBlogPostPage({ params }) {
  const { slug } = await params
  const { blog } = await getBlogBySlug(slug);
  console.log(blog);

  const date = formatLocalDate(blog.created_at)
  if (!blog) notFound();

  return (
    <main className="min-h-screen relative bg-background text-white pb-32 pt-28">
      {/* Blog Article Container */}
      <article className="section-container max-w-4xl mx-auto relative z-10">

        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors font-inter text-sm mb-12 lg:mb-16 group uppercase tracking-widest font-bold">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Dev Logs
        </Link>

        {/* Header Metadata */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              {blog.tag}
            </span>
            <div className="flex items-center gap-2 text-gray-500 font-inter text-sm font-medium tracking-wide">
              <span>{blog.author}</span>
              <span className='text-tagOrange text-[10px]'>/</span>
              <span>{date}</span>
            </div>
          </div>

          <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl uppercase tracking-wider mb-8 leading-[1.1] text-offwhite drop-shadow-sm">
            {blog.title}
          </h1>

          <p className="font-inter text-xl md:text-2xl text-gray-400 leading-relaxed font-light mt-6">
            {blog.short_desc}
          </p>
        </header>

        {/* Massive Hero Graphic */}
        <div className="w-full aspect-video md:aspect-21/9 bg-[#111] border border-white/5 rounded-[32px] overflow-hidden relative mb-16 shadow-2xl">
          <img
            src={blog.img || "/img/hero.webp"}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Prose Content Area */}
        <div className="prose prose-invert prose-lg md:prose-xl font-inter max-w-none text-gray-300 leading-loose prose-p:mb-8 hover:prose-a:text-primary prose-a:transition-colors">
          <p>{blog.description}</p>

          <blockquote className="border-l-4 border-primary bg-white/5 p-6 rounded-r-2xl my-10 italic text-white font-medium shadow-inner">
            "We aren't just writing code, we are authoring technical infrastructure that scales emotionally with the user base."
          </blockquote>

        </div>

      </article>

      {/* Ambient Lighting Engine inside page background */}
      <div className="fixed top-20 left-1/2 w-[800px] h-[600px] bg-primary/5 blur-[150px] rounded-[100%] pointer-events-none -translate-x-1/2 -z-10 mix-blend-screen opacity-60"></div>

    </main>
  );
}

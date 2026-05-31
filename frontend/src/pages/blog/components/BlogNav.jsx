import { Link } from "react-router-dom";
import CategoryMenu from "./CategoryMenu";

const BlogNav = ({ readingProgress = null }) => (
  <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
    <div className="mx-auto flex h-auto max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:h-20 lg:flex-row lg:items-center lg:justify-between lg:py-0">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
        <Link to="/blog" className="text-2xl font-black tracking-tighter transition hover:text-emerald-700">
          Blog
        </Link>
        <CategoryMenu className="hidden lg:flex" />
      </div>
      <div className="hidden items-center gap-4 md:flex">
        <Link
          to="/"
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700"
        >
          Home
        </Link>
        <input
          type="text"
          placeholder="Search the blog"
          className="w-64 border border-transparent bg-gray-100 px-5 py-2.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <CategoryMenu className="lg:hidden" />
    </div>
    {readingProgress !== null && (
      <div className="h-1 bg-transparent" aria-hidden="true">
        <div
          className="h-full bg-emerald-500 transition-[width] duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>
    )}
  </nav>
);

export default BlogNav;

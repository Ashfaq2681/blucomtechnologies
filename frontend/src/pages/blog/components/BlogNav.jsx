import CategoryMenu from "./CategoryMenu";

const BlogNav = () => (
  <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
    <div className="mx-auto flex h-auto max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:h-20 lg:flex-row lg:items-center lg:justify-between lg:py-0">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
        <span className="text-2xl font-black tracking-tighter">Blog</span>
        <CategoryMenu className="hidden lg:flex" />
      </div>
      <div className="hidden md:block">
        <input
          type="text"
          placeholder="Search the blog"
          className="w-64 border border-transparent bg-gray-100 px-5 py-2.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <CategoryMenu className="lg:hidden" />
    </div>
  </nav>
);

export default BlogNav;

import EditorPick from "./EditorPick";
import PostImage from "./PostImage";
import { estimateReadTime, formatDate, getImageClass } from "../utils";

const BlogHero = ({ featuredPost, sidebarPosts, onPostClick }) => (
  <div className="mb-24 flex flex-col gap-16 lg:flex-row">
    <section className="lg:w-2/3">
      <h2 className="mb-8 inline-block border-b-2 border-black pb-1 text-xs font-black uppercase tracking-[0.2em]">
        Featured Research
      </h2>
      {featuredPost && (
        <>
          <button
            type="button"
            onClick={() => onPostClick(featuredPost.slug)}
            className="group relative flex aspect-[16/9] w-full cursor-pointer items-end justify-start overflow-hidden bg-zinc-900 text-left shadow-2xl"
          >
            <PostImage
              src={featuredPost.image}
              alt={featuredPost.title}
              className="absolute inset-0 h-full w-full"
              fallbackClass="bg-zinc-900"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/60 via-black/20 to-purple-900/40" />
            <div className="relative z-10 px-6 py-8 md:px-10 md:py-10">
              <span className="bg-white/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-white/80">
                {featuredPost.category}
              </span>
              <h1 className="mt-5 text-3xl font-black leading-[1.1] tracking-tight text-white md:text-6xl">
                {featuredPost.title}
              </h1>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-300 md:text-base">
                {formatDate(featuredPost.createdAt)} &bull;{" "}
                {estimateReadTime(featuredPost.content)}
              </p>
            </div>
          </button>
          <div className="mt-8">
            <span className="rounded-md bg-zinc-100 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-zinc-500">
              {featuredPost.category}
            </span>
            <button
              type="button"
              onClick={() => onPostClick(featuredPost.slug)}
              className="mt-6 block text-left text-4xl font-black leading-tight transition-colors hover:text-green-800 md:text-5xl"
            >
              {featuredPost.title}
            </button>
          </div>
        </>
      )}
    </section>

    <aside className="lg:w-1/3">
      <div className="mb-12 border border-blue-100 bg-blue-50 p-6">
        <p className="text-sm font-medium leading-relaxed text-blue-900">
          Blucomtechnologies offers a suite of{" "}
          <span className="font-bold text-blue-600 underline">
            social media solutions
          </span>{" "}
          that supports organizations and agencies.
        </p>
      </div>
      <h2 className="mb-8 inline-block border-b-2 border-black pb-1 text-xs font-black uppercase tracking-[0.2em]">
        Editor&apos;s Picks
      </h2>
      <div className="space-y-2">
        {sidebarPosts.map((post, index) => (
          <EditorPick
            key={post.id}
            post={post}
            imageClass={getImageClass(index)}
            onClick={onPostClick}
          />
        ))}
      </div>
    </aside>
  </div>
);

export default BlogHero;

import EditorPick from "./EditorPick";
import PostImage from "./PostImage";
import { getPostTitle } from "../../../utils/postDescriptions";
import { getImageClass } from "../utils";

const BlogHero = ({ featuredPost, sidebarPosts, onPostClick }) => (
  <div className="mb-24 flex flex-col gap-16 lg:flex-row">
    <section className="lg:w-2/3">
      <h2 className="mb-8 inline-block border-b-2 border-slate-200 pb-1 text-xs font-black uppercase tracking-[0.2em]">
        Featured Research
      </h2>
      {featuredPost && (
        <>
          <button
            type="button"
            onClick={() => onPostClick(featuredPost.slug)}
            className="group relative block aspect-[16/9] w-full cursor-pointer overflow-hidden bg-zinc-900"
            aria-label={`Open ${featuredPost.title}`}
          >
            <PostImage
              src={featuredPost.image}
              alt={featuredPost.title}
              className="absolute inset-0 h-full w-full"
              fallbackClass="bg-zinc-900"
            />
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
              {getPostTitle(featuredPost)}
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
      <h2 className="mb-8 inline-block border-b-2 border-slate-200 pb-1 text-xs font-black uppercase tracking-[0.2em]">
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

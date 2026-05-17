import PostImage from "./PostImage";
import { getPostTitle } from "../../../utils/postDescriptions";
import { estimateReadTime, formatDate } from "../utils";

const ArticleCard = ({ post, imageClass, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(post.slug)}
    className="group cursor-pointer text-left"
  >
    <div className="mb-4 aspect-[16/10] overflow-hidden border border-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
      <PostImage
        src={post.image}
        alt={post.title}
        className="h-full w-full"
        fallbackClass={imageClass}
      />
    </div>
    <span className="bg-gray-100 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-900">
      {post.category}
    </span>
    <h3 className="mt-3 text-lg font-bold leading-relaxed transition-colors group-hover:text-blue-700">
      {getPostTitle(post)}
    </h3>
    <div className="mt-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide text-gray-400">
      <span>{formatDate(post.createdAt)}</span>
      <span>&bull;</span>
      <span>{estimateReadTime(post.content)}</span>
    </div>
  </button>
);

export default ArticleCard;

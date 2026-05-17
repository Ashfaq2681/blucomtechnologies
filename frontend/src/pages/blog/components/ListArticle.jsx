import { getPostTitle } from "../../../utils/postDescriptions";
import { estimateReadTime, formatDate } from "../utils";

const ListArticle = ({ post, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(post.slug)}
    className="group w-full cursor-pointer border-b border-gray-100 py-6 text-left last:border-0"
  >
    <span className="bg-gray-100 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-900">
      {post.category}
    </span>
    <h4 className="mt-3 text-[15px] font-bold leading-relaxed transition-colors group-hover:text-blue-700">
      {getPostTitle(post)}
    </h4>
    <div className="mt-2 flex items-center gap-2 text-[11px] font-medium text-gray-400">
      <span>{formatDate(post.createdAt)}</span>
      <span>&bull;</span>
      <span>{estimateReadTime(post.content)}</span>
    </div>
  </button>
);

export default ListArticle;

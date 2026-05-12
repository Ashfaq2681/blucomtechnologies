import PostImage from "./PostImage";

const EditorPick = ({ post, imageClass, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(post.slug)}
    className="group mb-8 flex w-full cursor-pointer gap-4 text-left"
  >
    <div className="h-20 w-32 flex-shrink-0 overflow-hidden shadow-sm">
      <PostImage
        src={post.image}
        alt={post.title}
        className="h-full w-full"
        fallbackClass={imageClass}
      />
    </div>
    <div>
      <span className="bg-gray-100 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-900">
        {post.category}
      </span>
      <h4 className="mt-2 text-sm font-bold leading-tight transition-colors group-hover:text-green-700">
        {post.title}
      </h4>
    </div>
  </button>
);

export default EditorPick;

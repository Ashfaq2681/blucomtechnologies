import React from "react";
import ArticleCard from "./ArticleCard";
import ListArticle from "./ListArticle";
import { getImageClass } from "../utils";

const LatestPosts = ({ posts, sidebarPosts, onPostClick, onViewAll }) => (
  <>
    <div className="mb-10 flex items-end justify-between border-b-2 border-black pb-4">
      <h2 className="text-2xl font-black tracking-tight">The Latest</h2>
      <button
        type="button"
        onClick={onViewAll}
        className="flex items-center text-sm font-bold text-blue-700 hover:underline"
      >
        View all <span className="ml-1 text-lg">&rsaquo;</span>
      </button>
    </div>

    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
        {posts.map((post, index) => (
          <React.Fragment key={post.id}>
            <ArticleCard
              post={post}
              imageClass={getImageClass(index)}
              onClick={onPostClick}
            />
            {index === 1 && (
              <div className="flex flex-col items-center justify-between bg-[#001b3d] p-8 text-center text-white shadow-xl">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-4 w-4 rotate-45 bg-green-500" />
                  <span className="text-md font-bold">Blucomtechnologies</span>
                </div>
                <h3 className="mb-4 text-lg font-bold leading-tight">
                  Scale your success on social with the leading platform
                </h3>
                <button className="w-full bg-[#00a87e] py-3 text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-[#008f6b]">
                  Start My Free Trial Today
                </button>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="lg:col-span-3 lg:border-l lg:pl-10">
        {sidebarPosts.map((post) => (
          <ListArticle
            key={`sidebar-${post.id}`}
            post={post}
            onClick={onPostClick}
          />
        ))}
      </div>
    </div>
  </>
);

export default LatestPosts;

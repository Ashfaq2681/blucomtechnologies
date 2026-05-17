import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  FALLBACK_BLOG_POSTS,
  getPublishedPosts,
} from "../../api/blogs";
import Ads from "./components/Ads";
import BlogHero from "./components/BlogHero";
import BlogNav from "./components/BlogNav";
import LatestPosts from "./components/LatestPosts";
import MarketingInsightsSection from "./components/MarketingInsightsSection";
import SocialFollow from "./components/SocialFollow";
import SocialMediaAnalytics from "./components/SocialMediaAnalytics";
import TopicHubs from "./components/TopicHubs";

const postMatchesType = (post, contentType) => {
  const target = contentType.toLowerCase();
  const values = [post.category, post.subcategory, post.section, post.tags]
    .flat()
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return values.includes(target);
};

const Blog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingFallbackPosts, setUsingFallbackPosts] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getPublishedPosts();

        if (isMounted) {
          const blogPosts = data.filter(
            (post) => !postMatchesType(post, "Ideas") && !postMatchesType(post, "News"),
          );
          const nextPosts = blogPosts.length > 0 ? blogPosts : FALLBACK_BLOG_POSTS;
          setPosts(nextPosts);
          setUsingFallbackPosts(blogPosts.length === 0);
        }
      } catch (_fetchError) {
        if (isMounted) {
          setPosts(FALLBACK_BLOG_POSTS);
          setUsingFallbackPosts(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  const handlePostClick = (slug) => {
    if (usingFallbackPosts) {
      return;
    }

    if (slug) {
      navigate(`/blog/${slug}`);
    }
  };

  const featuredPost = posts.find((post) => post.featured) || posts[0] || null;
  const latestPosts = posts
    .filter((post) => post.slug !== featuredPost?.slug)
    .slice(0, 5);
  const sidebarPosts = posts.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Blucomtechnologies Blog | The Latest in Social Strategy</title>
        <meta
          name="description"
          content="Explore the latest in social media strategy, AI marketing, and data-driven insights."
        />
      </Helmet>

      <div className="min-h-screen bg-[#e9f1f8] font-sans text-slate-900">
        <BlogNav />

        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          {loading && (
            <div className="py-24 text-center text-sm font-semibold text-gray-900">
              Loading posts...
            </div>
          )}

          {!loading && posts.length > 0 && (
            <>
              {usingFallbackPosts && (
                <div className="mb-8 border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900">
                  Live blog posts are unavailable, so preview posts are shown to keep this page filled.
                </div>
              )}
              <BlogHero
                featuredPost={featuredPost}
                sidebarPosts={sidebarPosts}
                onPostClick={handlePostClick}
              />
              <LatestPosts
                posts={latestPosts}
                sidebarPosts={sidebarPosts}
                onPostClick={handlePostClick}
                onViewAll={() => navigate("/blog")}
              />
            </>
          )}

        </main>

        <SocialFollow />
        <SocialMediaAnalytics />
        <MarketingInsightsSection />
        <TopicHubs />
        <Ads />
      </div>
    </>
  );
};

export default Blog;

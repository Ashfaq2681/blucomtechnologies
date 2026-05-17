import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const formatDate = (value) => {
  if (!value) return "";
  const parsedDate = new Date(value);
  if (Number.isNaN(parsedDate.getTime())) return value;
  return parsedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
};

const getReadTime = (content = "") => {
  const plainText = String(content).replace(/<[^>]*>/g, " ").trim();
  const words = plainText ? plainText.split(/\s+/).length : 0;
  return `${Math.max(1, Math.ceil(words / 200))} min`;
};

const stripHtml = (value = "") => String(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const getImageSrc = (image) => {
  if (!image) return "";
  if (/^https?:\/\//i.test(image)) return image;
  return `http://localhost:5000/uploads/${String(image).replace(/^\/+/, "")}`;
};

const getSectionBlogs = (blogs, section, limit) => {
  const filtered = blogs.filter((blog) => blog.section === section);
  return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
};

const buildLatestGridItems = (blogs) => {
  const items = [];
  blogs.slice(0, 2).forEach((blog) => items.push({ type: "blog", blog }));
  items.push({ type: "cta" });
  blogs.slice(2).forEach((blog) => items.push({ type: "blog", blog }));
  return items;
};

const PostImage = ({ src, alt, wrapperClassName, fallbackClassName, innerClassName }) =>
  src ? (
    <img src={src} alt={alt} className={`${wrapperClassName} object-cover`} />
  ) : (
    <div className={`${wrapperClassName} ${fallbackClassName} flex items-center justify-center`}>
      <div className={innerClassName} />
    </div>
  );

const EditorPick = ({ blog, imageColor, onClick }) => (
  <div className="flex gap-4 mb-8 group cursor-pointer" onClick={() => onClick(blog.slug)}>
    <div className={`w-32 h-20 -lg flex-shrink-0 ${imageColor} flex items-center justify-center text-white overflow-hidden shadow-sm`}>
      <PostImage src={getImageSrc(blog.image)} alt={blog.title} wrapperClassName="w-full h-full" fallbackClassName="" innerClassName="w-10 h-10 bg-white/20  blur-sm" />
    </div>
    <div>
      <span className="text-[10px] font-bold bg-gray-100 px-2 py-1  text-gray-900 uppercase tracking-widest">{blog.category}</span>
      <h4 className="mt-2 text-sm font-bold leading-tight group-hover:text-green-700 transition-colors">{blog.title}</h4>
    </div>
  </div>
);

const ArticleCard = ({ blog, imageClass, onClick }) => (
  <div className="group cursor-pointer" onClick={() => onClick(blog.slug)}>
    <div className={`aspect-[16/10] -xl mb-4 overflow-hidden shadow-sm ${imageClass} border border-gray-100 transition-transform duration-300 group-hover:scale-[1.02] flex items-center justify-center`}>
      <PostImage src={getImageSrc(blog.image)} alt={blog.title} wrapperClassName="w-full h-full" fallbackClassName="" innerClassName="w-12 h-12 bg-white/30 -lg backdrop-blur-md" />
    </div>
    <span className="bg-gray-100 text-[10px] font-bold px-2 py-1  text-gray-900 uppercase tracking-widest">{blog.category}</span>
    <h3 className="text-lg font-bold mt-3 leading-tight group-hover:text-blue-700 transition-colors">{blog.title}</h3>
    <div className="flex items-center gap-2 mt-3 text-[11px] text-gray-400 font-medium uppercase tracking-tight">
      <span>{formatDate(blog.created_at)}</span> <span>&bull;</span> <span>{getReadTime(blog.content)}</span>
    </div>
  </div>
);

const ListArticle = ({ blog, onClick }) => (
  <div className="py-6 border-b border-gray-100 last:border-0 group cursor-pointer" onClick={() => onClick(blog.slug)}>
    <span className="bg-gray-100 text-[10px] font-bold px-2 py-1  text-gray-900 uppercase tracking-widest">{blog.category}</span>
    <h4 className="text-[15px] font-bold mt-3 leading-snug group-hover:text-blue-700 transition-colors">{blog.title}</h4>
    <div className="flex items-center gap-2 mt-2 text-[11px] text-gray-400 font-medium">
      <span>{formatDate(blog.created_at)}</span> <span>&bull;</span> <span>{getReadTime(blog.content)}</span>
    </div>
  </div>
);

const HelloPage = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/blogs");
        if (mounted) {
          setBlogs(Array.isArray(data) ? data.filter((blog) => blog.status === "published") : []);
          setError("");
        }
      } catch (_error) {
        if (mounted) setError("Unable to load blog posts right now.");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchBlogs();
    return () => {
      mounted = false;
    };
  }, []);

  const handleNavigate = (slug) => navigate(`/blogs/${slug}`);
  const featuredBlog = useMemo(() => blogs.find((blog) => blog.section === "featured") || blogs[0] || null, [blogs]);
  const editorBlogs = useMemo(() => getSectionBlogs(blogs, "editor", 3), [blogs]);
  const latestBlogs = useMemo(() => getSectionBlogs(blogs, "latest"), [blogs]);
  const latestGridItems = useMemo(() => buildLatestGridItems(latestBlogs.slice(0, 5)), [latestBlogs]);
  const latestListBlogs = useMemo(() => latestBlogs.slice(5, 8), [latestBlogs]);
  const analyticsBlogs = useMemo(() => getSectionBlogs(blogs, "analytics", 4), [blogs]);
  const guidesBlogs = useMemo(() => getSectionBlogs(blogs, "guides", 4), [blogs]);
  const reportsBlogs = useMemo(() => getSectionBlogs(blogs, "reports", 4), [blogs]);
  const insightsBlogs = useMemo(() => getSectionBlogs(blogs, "insights", 4), [blogs]);

  const imageClasses = ["bg-indigo-100", "bg-blue-50", "bg-pink-50", "bg-emerald-50", "bg-blue-900"];
  const editorImageColors = ["bg-orange-400", "bg-orange-400", "bg-indigo-950"];
  const insightsImageColors = ["bg-blue-100", "bg-emerald-100"];
  const analyticsImageClasses = ["bg-gradient-to-br from-blue-600 to-indigo-700", "bg-[#e9f1f8]", "bg-pink-50", "bg-indigo-900"];
  const guideImageClasses = ["bg-emerald-50", "bg-gray-900"];
  const reportImageClasses = ["bg-black", "bg-zinc-900"];

  return (
    <>
      <Helmet>
        <title>Blucomtechnologies Blog | The Latest in Social Strategy</title>
        <meta name="description" content="Explore the latest in social media strategy, AI marketing, and data-driven insights." />
      </Helmet>
      <div className="min-h-screen bg-[#e9f1f8] font-sans text-slate-900">
        <nav className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-10">
              <span className="font-black text-2xl tracking-tighter">Blog</span>
              <div className="hidden lg:flex space-x-8 text-[13px] font-bold uppercase tracking-wider text-gray-700">
                <button className="hover:text-green-600 transition-colors">Topics </button>
                <button className="hover:text-green-600 transition-colors">Networks </button>
                <button className="hover:text-green-600 transition-colors">Tools & Media </button>
                <button className="hover:text-green-600 transition-colors">Executive Insights </button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <input type="text" placeholder="Search the blog" className="bg-gray-100  py-2.5 px-12 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-64 border border-transparent focus:bg-white transition-all" />
              <span className="absolute left-4 top-3 text-gray-400 text-sm"></span>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {loading && <div className="py-24 text-center text-sm font-semibold text-gray-900">Loading posts...</div>}
          {!loading && error && <div className="py-24 text-center text-sm font-semibold text-red-600">{error}</div>}
          {!loading && !error && (
            <>
              <div className="flex flex-col lg:flex-row gap-16 mb-24">
                <section className="lg:w-2/3">
                  <h2 className="text-xs font-black border-b-2 border-black inline-block mb-8 pb-1 uppercase tracking-[0.2em]">Featured Research</h2>
                  {featuredBlog && (
                    <>
                      <div className="relative -3xl overflow-hidden bg-zinc-900 aspect-[16/9] flex items-center justify-center group cursor-pointer shadow-2xl" onClick={() => handleNavigate(featuredBlog.slug)}>
                        <PostImage src={getImageSrc(featuredBlog.image)} alt={featuredBlog.title} wrapperClassName="absolute inset-0 w-full h-full" fallbackClassName="" innerClassName="w-full h-full bg-zinc-900" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/60 via-transparent to-purple-900/40" />
                        <div className="relative z-10 text-center px-6">
                          <h1 className="text-white text-3xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight">{featuredBlog.title}</h1>
                          <p className="text-gray-300 text-lg md:text-xl font-medium italic">{stripHtml(featuredBlog.content).slice(0, 90)}</p>
                        </div>
                      </div>
                      <div className="mt-8">
                        <span className="bg-zinc-100 text-[11px] font-black px-3 py-1.5 -md uppercase tracking-widest text-zinc-500">{featuredBlog.category}</span>
                        <h3 className="text-4xl md:text-5xl font-black mt-6 leading-tight hover:text-green-800 transition-colors cursor-pointer" onClick={() => handleNavigate(featuredBlog.slug)}>{featuredBlog.title}</h3>
                      </div>
                    </>
                  )}
                </section>
                <aside className="lg:w-1/3">
                  <div className="bg-blue-50 p-6 -2xl mb-12 border border-blue-100">
                    <p className="text-sm text-blue-900 leading-relaxed font-medium">Blucomtechnologies offers a suite of <span className="text-blue-600 underline font-bold">social media solutions</span> that supports organizations and agencies.</p>
                  </div>
                  <h2 className="text-xs font-black border-b-2 border-black inline-block mb-8 pb-1 uppercase tracking-[0.2em]">Editor's Picks</h2>
                  <div className="space-y-2">
                    {editorBlogs.map((blog, index) => (
                      <React.Fragment key={blog.id}>
                        <EditorPick blog={blog} imageColor={editorImageColors[index] || editorImageColors[editorImageColors.length - 1]} onClick={handleNavigate} />
                        {index === 1 && <hr className="my-6 border-gray-100" />}
                      </React.Fragment>
                    ))}
                  </div>
                </aside>
              </div>
              <div className="flex justify-between items-end border-b-2 border-black pb-4 mb-10">
                <h2 className="text-2xl font-black tracking-tight">The Latest</h2>
                <button className="text-blue-700 font-bold text-sm flex items-center hover:underline">View all <span className="ml-1 text-lg"></span></button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                  {latestGridItems.map((item, index) => item.type === "cta" ? (
                    <div key="latest-cta" className="bg-[#001b3d] -2xl p-8 flex flex-col items-center text-center justify-between text-white shadow-xl">
                      <div className="flex items-center gap-2 mb-4"><div className="w-4 h-4 bg-green-500 -sm rotate-45" /><span className="font-bold text-md">Blucomtechnologies</span></div>
                      <h3 className="text-lg font-bold leading-tight mb-4">Scale your success on social with the leading platform</h3>
                      <button className="w-full bg-[#00a87e] hover:bg-[#008f6b] text-white font-black py-3 -lg transition-colors text-xs uppercase tracking-widest">Start My Free Trial Today</button>
                    </div>
                  ) : <ArticleCard key={item.blog.id} blog={item.blog} imageClass={imageClasses[index % imageClasses.length]} onClick={handleNavigate} />)}
                </div>
                <div className="lg:col-span-3 border-l-0 lg:border-l lg:pl-10">
                  {latestListBlogs.map((blog) => <ListArticle key={blog.id} blog={blog} onClick={handleNavigate} />)}
                </div>
              </div>
            </>
          )}
        </main>
        <section className="bg-black text-white pt-20 pb-10 px-4 sm:px-6 -t-[40px] mt-12 w-full">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-bold mb-12 tracking-tight">Learn more from Blucomtechnologies on social</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="relative aspect-[9/16] -3xl overflow-hidden cursor-pointer group bg-zinc-800">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20"><FaTiktok className="w-14 h-14 text-white drop-shadow-lg opacity-90 group-hover:scale-110 transition-transform" /></div>
                <div className="absolute bottom-6 left-0 right-0 px-4 text-center z-20"><p className="text-[10px] font-bold text-white uppercase tracking-wider">15 Years</p></div>
              </div>
              <div className="relative aspect-[9/16] -3xl overflow-hidden cursor-pointer group bg-zinc-700">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20"><FaYoutube className="w-14 h-14 text-red-600 drop-shadow-lg opacity-90 group-hover:scale-110 transition-transform" /></div>
                <div className="absolute bottom-6 left-0 right-0 px-4 text-center z-20"><p className="text-[10px] font-bold text-white uppercase tracking-wider">Brand or campaign right</p></div>
              </div>
              <div className="relative aspect-[9/16] -3xl overflow-hidden cursor-pointer group bg-zinc-800">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20"><div className="border-2 border-white -lg p-2"><FaInstagram className="w-10 h-10 text-white opacity-90 group-hover:scale-110 transition-transform" /></div></div>
                <div className="absolute bottom-6 left-0 right-0 px-4 text-center z-20"><p className="text-[10px] font-bold text-white uppercase tracking-wider">I found our dream influencers</p></div>
              </div>
              <div className="relative aspect-[9/16] -3xl overflow-hidden cursor-pointer bg-gradient-to-br from-purple-200 via-blue-200 to-emerald-200 p-6 flex flex-col justify-center gap-2">
                <span className="bg-purple-100 text-purple-900 font-bold px-4 py-1.5  text-[10px] self-start uppercase">Your 5-step</span>
                <span className="bg-green-100 text-green-900 font-bold px-4 py-1.5  text-[10px] self-start uppercase">formula for</span>
                <span className="bg-purple-100 text-purple-900 font-bold px-4 py-1.5  text-[10px] self-start uppercase">securing social</span>
                <span className="bg-green-100 text-green-900 font-bold px-4 py-1.5  text-[10px] self-start uppercase">resource in 2026</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-end gap-8 border-t border-zinc-800 pt-10">
              <span className="font-bold text-sm tracking-wide text-zinc-400">Follow us on social:</span>
              <div className="flex items-center gap-6 text-xl">
                <FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors" />
                <FaTiktok className="hover:text-cyan-400 cursor-pointer transition-colors" />
                <FaYoutube className="hover:text-red-600 cursor-pointer transition-colors" />
                <FaLinkedin className="hover:text-blue-600 cursor-pointer transition-colors" />
                <FaPinterest className="hover:text-red-500 cursor-pointer transition-colors" />
                <FaXTwitter className="hover:text-zinc-400 cursor-pointer transition-colors" />
                <FaFacebook className="hover:text-blue-500 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex justify-between items-end border-b-2 border-black pb-3 mb-10">
            <h2 className="text-xl font-black tracking-tight text-[#1d2d35]">Social Media Analytics</h2>
            <button className="text-blue-700 font-bold text-xs hover:underline flex items-center">View all </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsBlogs.map((blog, index) => (
              <div key={blog.id} className="group cursor-pointer" onClick={() => handleNavigate(blog.slug)}>
                <div className={`aspect-[16/10] -2xl ${analyticsImageClasses[index % analyticsImageClasses.length]} mb-5 overflow-hidden transition-transform group-hover:scale-[1.02] flex items-center justify-center p-8`}>
                  <PostImage src={getImageSrc(blog.image)} alt={blog.title} wrapperClassName="w-full h-full" fallbackClassName="" innerClassName="w-full h-full bg-white/10 -xl backdrop-blur-sm border border-white/20 flex items-center justify-center gap-2" />
                </div>
                <div className="flex gap-2 mb-3"><span className="bg-gray-100 text-[9px] font-bold px-2 py-1  text-gray-900 uppercase tracking-wider">{blog.category}</span></div>
                <h3 className="font-bold text-[15px] leading-snug group-hover:text-blue-700 transition-colors">{blog.title}</h3>
                <div className="flex items-center gap-2 mt-3 text-[10px] text-gray-400 font-bold uppercase">
                  <span>{formatDate(blog.created_at)}</span> <span>&bull;</span> <span>{getReadTime(blog.content)}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <div className="flex justify-between items-end border-b-2 border-black pb-3 mb-8">
                <h2 className="text-xl font-black tracking-tight">Guides</h2>
                <button className="text-blue-700 font-bold text-xs hover:underline flex items-center">View all </button>
              </div>
              <div className="space-y-10">
                {guidesBlogs.slice(0, 2).map((blog, index) => (
                  <div key={blog.id} className="group cursor-pointer" onClick={() => handleNavigate(blog.slug)}>
                    <div className={`aspect-video -xl ${guideImageClasses[index % guideImageClasses.length]} mb-4 overflow-hidden border border-gray-100 transition-transform group-hover:scale-[1.02]`}>
                      <PostImage src={getImageSrc(blog.image)} alt={blog.title} wrapperClassName="w-full h-full" fallbackClassName="" innerClassName={index === 0 ? "w-full h-full flex items-center justify-center bg-teal-500/20" : "w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black"} />
                    </div>
                    <div className="flex gap-2 mb-2">
                      <span className="bg-gray-100 text-[9px] font-bold px-2 py-0.5  text-gray-900 uppercase">Guide</span>
                      <span className="bg-gray-100 text-[9px] font-bold px-2 py-0.5  text-gray-900 uppercase">{blog.category}</span>
                    </div>
                    <h3 className="font-bold text-sm leading-snug group-hover:text-blue-700 transition-colors">{blog.title}</h3>
                  </div>
                ))}
                {guidesBlogs.slice(2, 4).map((blog) => <div key={blog.id} className="pt-4 border-t border-gray-100 cursor-pointer group" onClick={() => handleNavigate(blog.slug)}><h4 className="text-sm font-bold leading-relaxed group-hover:text-blue-700">{blog.title}</h4></div>)}
              </div>
            </div>
            <div>
              <div className="flex justify-between items-end border-b-2 border-black pb-3 mb-8">
                <h2 className="text-xl font-black tracking-tight">Data Reports</h2>
                <button className="text-blue-700 font-bold text-xs hover:underline flex items-center">View all </button>
              </div>
              <div className="space-y-10">
                {reportsBlogs.slice(0, 2).map((blog, index) => (
                  <div key={blog.id} className="group cursor-pointer" onClick={() => handleNavigate(blog.slug)}>
                    <div className={`aspect-video -xl ${reportImageClasses[index % reportImageClasses.length]} mb-4 overflow-hidden transition-transform group-hover:scale-[1.02]`}>
                      <PostImage src={getImageSrc(blog.image)} alt={blog.title} wrapperClassName="w-full h-full" fallbackClassName="" innerClassName={index === 0 ? "w-full h-full bg-emerald-950/40" : "w-full h-full bg-gradient-to-tr from-blue-900/20 to-emerald-900/20"} />
                    </div>
                    <div className="flex gap-2 mb-2">
                      <span className="bg-gray-100 text-[9px] font-bold px-2 py-0.5  text-gray-900 uppercase">Data Report</span>
                      {index === 0 && <span className="bg-gray-100 text-[9px] font-bold px-2 py-0.5  text-gray-900 uppercase">{blog.category}</span>}
                    </div>
                    <h3 className="font-bold text-sm leading-snug group-hover:text-blue-700">{blog.title}</h3>
                  </div>
                ))}
                {reportsBlogs.slice(2, 4).map((blog) => <div key={blog.id} className="pt-4 border-t border-gray-100 cursor-pointer group" onClick={() => handleNavigate(blog.slug)}><h4 className="text-sm font-bold leading-relaxed group-hover:text-blue-700">{blog.title}</h4></div>)}
              </div>
            </div>
            <div>
              <div className="flex justify-between items-end border-b-2 border-black pb-3 mb-8">
                <h2 className="text-xl font-black tracking-tight">All Marketing Insights</h2>
                <button className="text-blue-700 font-bold text-xs hover:underline flex items-center">View all </button>
              </div>
              <div className="space-y-8">
                {insightsBlogs.slice(0, 2).map((blog, index) => (
                  <div key={blog.id} className="flex gap-4 group cursor-pointer" onClick={() => handleNavigate(blog.slug)}>
                    <div className={`w-32 h-20 ${insightsImageColors[index % insightsImageColors.length]} -lg flex-shrink-0 group-hover:scale-105 transition-transform overflow-hidden`}>
                      <PostImage src={getImageSrc(blog.image)} alt={blog.title} wrapperClassName="w-full h-full" fallbackClassName="" innerClassName="w-full h-full" />
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-1 mb-1"><span className="text-[8px] font-bold bg-gray-100 px-1.5 py-0.5  text-gray-900 uppercase">{blog.category}</span></div>
                      <h3 className="font-bold text-xs leading-tight group-hover:text-blue-700">{blog.title}</h3>
                    </div>
                  </div>
                ))}
                {insightsBlogs.slice(2, 4).map((blog) => <div key={blog.id} className="pt-4 border-t border-gray-100 cursor-pointer group" onClick={() => handleNavigate(blog.slug)}><h4 className="text-sm font-bold leading-relaxed group-hover:text-blue-700">{blog.title}</h4></div>)}
              </div>
            </div>
          </div>
        </section>
        <div className="space-y-20 bg-white font-sans text-slate-900">
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="border-2 border-black -[40px] p-10 md:p-16">
              <h2 className="text-2xl font-black mb-12 tracking-tight">Topic Hubs</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-6">
                {["AI Marketing", "AI in Social Media", "Best Times to Post on Social Media", "Business Intelligence", "Competitive Analysis", "Crisis Communications", "Customer Care", "Employee Advocacy", "Facebook Analytics", "Facebook Marketing", "Hashtags", "Influencer Marketing", "Instagram Analytics Tools", "Instagram Marketing", "LinkedIn Marketing", "Reputation Management", "Sentiment Analysis", "Social Media Advertising", "Social Media Analytics", "Social Media Audit", "Social Media Content", "Social Media Customer Service", "Social Media Engagement", "Social Media Listening", "Social Media Management", "Social Media Marketing", "Social Media Planning", "Social Media ROI", "Social Media Reporting", "Social Media Scheduling", "Social Media Search", "Social Media Statistics", "Social Media for Healthcare", "TikTok Analytics", "TikTok Marketing", "UK Influencers", "X (Twitter) Analytics", "X (Twitter) Marketing", "YouTube Marketing"].map((topic) => (
                  <div key={topic} className="group cursor-pointer">
                    <span className="text-[13px] font-bold text-blue-700 border-b-2 border-blue-700/30 group-hover:border-blue-700 transition-all leading-relaxed">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <section className="bg-[#e9f1f8] py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="-2xl  overflow-hidden border border-white/50 bg-white group transition-transform hover:scale-[1.01]">
                <div className="aspect-[4/3] bg-zinc-100 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-tr from-gray-200 to-white relative">
                    <div className="absolute bottom-10 left-[-20px] bg-white -xl shadow-xl p-4 border border-gray-100 animate-bounce-slow">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 bg-purple-500 " />
                        <span className="text-[10px] font-bold text-gray-400 uppercase">Suggestions by AI Assist</span>
                      </div>
                      <div className="bg-purple-50 text-purple-700 text-xs font-bold py-2 px-4 -lg border border-purple-100">Create 3 posts options from text</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 text-left">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#00a87e] -lg rotate-45 flex items-center justify-center"><div className="w-4 h-4 bg-white -sm -rotate-45" /></div>
                <span className="text-2xl font-black tracking-tighter text-[#1d2d35]">Blucomtechnologies</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1d2d35] leading-[1.1] mb-6 tracking-tight">Build and grow stronger relationships on social</h2>
              <p className="text-lg text-gray-900 font-medium leading-relaxed mb-10 max-w-xl">Blucomtechnologies helps you understand and reach your audience, engage your community and measure performance with the only all-in-one social media management platform built for connection.</p>
              <button className="bg-[#005952] hover:bg-[#00423d] text-white font-bold py-5 px-10 -xl transition-all shadow-lg hover:shadow-xl active:scale-95 text-lg">Try Blucomtechnologies for free</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HelloPage;

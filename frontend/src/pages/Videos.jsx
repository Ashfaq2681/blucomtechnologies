import React, { useEffect, useMemo, useState } from "react";
import { MoreVertical, Play } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import PageSeo from "../Components/PageSeo";
import { getVideos } from "../api/videos";
import { channelVideoCards } from "../data/socialChannels";

const fallbackVideoGrid = [
  {
    id: "fallback-1",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    title: "Brand systems for better growth campaigns",
    description:
      "A focused session on using brand identity, campaign structure, and performance signals to build stronger digital outcomes.",
    category: "GOALKEEPING",
    folder: "Folder name 4",
    duration: "04:20",
  },
  {
    id: "fallback-2",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
    title: "Planning content workflows for modern teams",
    description:
      "How teams can move from scattered ideas to a repeatable content workflow with clear ownership and review points.",
    category: "DRILLS",
    folder: "Folder name 1",
    duration: "03:45",
  },
  {
    id: "fallback-3",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    title: "Turning analytics into creative decisions",
    description:
      "A practical look at which signals matter before scaling a campaign or changing a creative direction.",
    category: "ATTACK",
    folder: "Folder name 2",
    duration: "05:10",
  },
  {
    id: "fallback-4",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    title: "Responsive design systems in practice",
    description:
      "Build interface systems that keep campaign pages sharp across desktop, tablet, and mobile views.",
    category: "DEFENCE",
    folder: "Folder name 3",
    duration: "02:58",
  },
  {
    id: "fallback-5",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80",
    title: "Campaign launch checklist",
    description:
      "A concise checklist for reviewing content, tracking, conversion paths, and handoff notes before launch.",
    category: "MIDFIELD",
    folder: "Folder name 4",
    duration: "04:02",
  },
  {
    id: "fallback-6",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    title: "Video storytelling for service brands",
    description:
      "How service businesses can make short videos clearer, more useful, and easier to share.",
    category: "SET-PIECES",
    folder: "Folder name 4",
    duration: "03:32",
  },
  ...channelVideoCards,
];

const defaultCategories = [
  "DRILLS",
  "WORKOUTS",
  "DEFENCE",
  "MIDFIELD",
  "ATTACK",
  "GOALKEEPING",
  "SET-PIECES",
  "RECOVERY",
  "CONDITIONING",
];

const buildVideoUrl = (video) => {
  if (video.externalUrl) {
    return video.externalUrl;
  }

  const base =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}`
      : "https://blucomtechnologies.com/videos";
  return `${base}?video=${encodeURIComponent(video.id || video.title)}`;
};

const shareLinks = (video) => {
  const url = buildVideoUrl(video);
  const text = encodeURIComponent(video.title || "Blucom Technologies video");

  return [
    {
      label: "WhatsApp",
      Icon: FaWhatsapp,
      href: `https://wa.me/?text=${text}%20${encodeURIComponent(url)}`,
    },
    {
      label: "Facebook",
      Icon: FaFacebookF,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      label: "X",
      Icon: FaXTwitter,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${text}`,
    },
    {
      label: "LinkedIn",
      Icon: FaLinkedinIn,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
  ];
};

const VideoShareMenu = ({ video, variant = "card" }) => {
  const [open, setOpen] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(buildVideoUrl(video));
      setOpen(false);
    } catch (_error) {
      setOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={`transition-colors ${
          variant === "hero"
            ? "inline-flex items-center gap-2 border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:border-emerald-300 hover:text-emerald-600"
            : "rounded-full p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-700"
        }`}
        aria-label={`Share ${video.title}`}
        aria-expanded={open}
      >
        {variant === "hero" && <span>Share</span>}
        <MoreVertical className="h-4 w-4" />
      </button>

      {open && (
        <div className="absolute right-0 z-20 mt-2 w-52 border border-gray-100 bg-white p-2 shadow-xl">
          <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-400">
            Share video
          </p>
          {shareLinks(video).map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-600"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
          <button
            type="button"
            onClick={copyLink}
            className="flex w-full items-center px-3 py-2 text-left text-sm font-medium text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-600"
          >
            Copy link
          </button>
        </div>
      )}
    </div>
  );
};

export default function VideoDashboard() {
  const [activeCategory, setActiveCategory] = useState("GOALKEEPING");
  const [activeFolder, setActiveFolder] = useState("All");
  const [videos, setVideos] = useState(fallbackVideoGrid);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadVideos = async () => {
      try {
        const data = await getVideos();
        if (mounted && data.length) {
          setVideos(data);
          setActiveCategory(data[0]?.category || "All");
        }
      } catch (error) {
        console.error("[videos][public]", error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadVideos();

    return () => {
      mounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    const dynamicCategories = videos
      .map((video) => video.category)
      .filter(Boolean)
      .map((category) => String(category).toUpperCase());
    return Array.from(new Set([...defaultCategories, ...dynamicCategories]));
  }, [videos]);

  const categoryFilteredVideos = useMemo(
    () =>
      videos.filter(
        (video) =>
          !activeCategory ||
          String(video.category || "").toUpperCase() === activeCategory,
      ),
    [activeCategory, videos],
  );

  const folders = useMemo(() => {
    const counts = categoryFilteredVideos.reduce((accumulator, video) => {
      const name = video.folder || "All";
      accumulator[name] = (accumulator[name] || 0) + 1;
      return accumulator;
    }, {});

    return [
      { name: "All", count: categoryFilteredVideos.length },
      ...Object.entries(counts).map(([name, count]) => ({ name, count })),
    ];
  }, [categoryFilteredVideos]);

  const visibleVideos = useMemo(
    () =>
      activeFolder === "All"
        ? categoryFilteredVideos
        : categoryFilteredVideos.filter((video) => video.folder === activeFolder),
    [activeFolder, categoryFilteredVideos],
  );

  const heroVideo = visibleVideos[0] || videos[0] || fallbackVideoGrid[0];
  const gridVideos = visibleVideos.length > 1 ? visibleVideos.slice(1) : videos.slice(1);

  useEffect(() => {
    if (!folders.some((folder) => folder.name === activeFolder)) {
      setActiveFolder("All");
    }
  }, [activeFolder, folders]);

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      <PageSeo path="/videos" />

      <header className="mx-auto flex h-16 max-w-7xl items-center justify-end space-x-8 px-4 text-xs font-bold tracking-widest text-gray-900 sm:px-6 lg:px-8">
        <a href="#heading-a" className="transition-colors hover:text-emerald-500">
          HEADING A
        </a>
        <a href="#heading-b" className="transition-colors hover:text-emerald-500">
          HEADING B
        </a>
        <a href="#heading-c" className="transition-colors hover:text-emerald-500">
          HEADING C
        </a>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center space-x-2 overflow-x-auto pb-4">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-sm border px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-200 ${
                  isActive
                    ? "border-emerald-400 bg-emerald-50/30 text-emerald-500"
                    : "border-emerald-500 text-emerald-600 hover:bg-emerald-50/50"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <section aria-label="Featured video">
          <div className="group relative mb-5 aspect-video w-full cursor-pointer overflow-hidden rounded-2xl bg-black shadow-lg">
            {heroVideo.videoUrl ? (
              <video
                src={heroVideo.videoUrl}
                poster={heroVideo.image || heroVideo.thumbnail}
                controls
                className="h-full w-full object-cover"
              />
            ) : heroVideo.externalUrl ? (
              <a
                href={heroVideo.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-neutral-900 to-black"
                aria-label={`Open ${heroVideo.title}`}
              >
                {heroVideo.image && (
                  <img
                    src={heroVideo.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-40"
                  />
                )}
                <div className="absolute h-20 w-20 rounded-full bg-white/10 blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500/20" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/20 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-500">
                  <Play className="h-6 w-6 translate-x-0.5 fill-white text-white" />
                </div>
              </a>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-neutral-900 to-black">
                {heroVideo.image && (
                  <img
                    src={heroVideo.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-40"
                  />
                )}
                <div className="absolute h-20 w-20 rounded-full bg-white/10 blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500/20" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/20 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-500">
                  <Play className="h-6 w-6 translate-x-0.5 fill-white text-white" />
                </div>
              </div>
            )}
          </div>

          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-start">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-500">
                Main video
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                {heroVideo.title}
              </h1>
              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                {heroVideo.description ||
                  "Featured Blucom Technologies video with strategy, design, and growth insights for modern digital teams."}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {shareLinks(heroVideo).slice(0, 4).map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600"
                  aria-label={`Share main video on ${label}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <VideoShareMenu video={heroVideo} variant="hero" />
            </div>
          </div>
        </section>

        <div className="mb-8 flex overflow-x-auto border-b border-gray-200">
          <div className="flex min-w-max space-x-6 px-1 sm:space-x-10">
            {folders.map((folder) => {
              const isActive = folder.name === activeFolder;
              return (
                <button
                  key={folder.name}
                  onClick={() => setActiveFolder(folder.name)}
                  className={`relative flex items-center space-x-1.5 whitespace-nowrap pb-3 text-xs font-medium transition-all sm:text-sm ${
                    isActive
                      ? "font-semibold text-emerald-500"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <span>{folder.name}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold tracking-tight ${
                      isActive
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {folder.count}
                  </span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-emerald-500" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {loading && (
          <p className="mb-4 text-sm font-medium text-gray-400">Loading videos...</p>
        )}

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {gridVideos.map((video, index) => (
            <article key={video.id || index} className="group flex flex-col space-y-2">
              <a
                href={video.externalUrl || video.videoUrl || buildVideoUrl(video)}
                target={video.externalUrl ? "_blank" : undefined}
                rel={video.externalUrl ? "noreferrer" : undefined}
                className="relative aspect-[16/10] overflow-hidden rounded-lg border border-gray-100 bg-gray-100 shadow-sm"
                aria-label={`Open ${video.title}`}
              >
                <img
                  src={video.image || "/landing/news1.png"}
                  alt={video.title || "Video thumbnail"}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 shadow-md backdrop-blur-sm transition-all duration-200 group-hover:scale-110 group-hover:bg-emerald-500">
                    <Play className="h-4 w-4 translate-x-0.5 fill-white text-white" />
                  </div>
                </div>
                {video.duration && (
                  <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-[11px] font-bold text-white">
                    {video.duration}
                  </span>
                )}
              </a>

              <div className="flex items-start justify-between gap-3 px-1 pt-1">
                <div>
                  <p className="max-w-[24rem] text-[13px] font-medium leading-snug tracking-tight text-gray-700">
                    {video.title}
                  </p>
                  {video.description && (
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                      {video.description}
                    </p>
                  )}
                </div>
                <VideoShareMenu video={video} />
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

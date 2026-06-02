import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { createVideo, getVideos } from "../../api/videos";
import ComponentCard from "./common/ComponentCard";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";
import { VideoIcon } from "./icons";
import FourIsToThree from "./ui/videos/FourIsToThree";
import OneIsToOne from "./ui/videos/OneIsToOne";
import SixteenIsToNine from "./ui/videos/SixteenIsToNine";
import TwentyOneIsToNine from "./ui/videos/TwentyOneIsToNine";

type VideoDraft = {
  title: string;
  category: string;
  status: string;
  description: string;
  fileName: string;
  thumbnailName: string;
};

export default function Videos() {
  const [drafts, setDrafts] = useState<VideoDraft[]>([]);
  const [videoPreview, setVideoPreview] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "Brand Strategy",
    folder: "All",
    status: "draft",
    duration: "",
    description: "",
    video: null as File | null,
    thumbnail: null as File | null,
  });

  useEffect(() => {
    let mounted = true;

    const loadDrafts = async () => {
      try {
        const data = await getVideos({ includeDrafts: true });
        if (mounted) {
          setDrafts(
            data.slice(0, 6).map((video) => ({
              title: video.title,
              category: video.category,
              status: video.status,
              description: video.description,
              fileName: video.videoUrl ? "Uploaded video" : "No video uploaded",
              thumbnailName: video.thumbnail ? "Uploaded thumbnail" : "No thumbnail uploaded",
            })),
          );
        }
      } catch (_error) {
        if (mounted) {
          setDrafts([]);
        }
      }
    };

    void loadDrafts();

    return () => {
      mounted = false;
    };
  }, []);

  const completion = useMemo(() => {
    const checks = [
      form.title.trim(),
      form.description.trim(),
      form.video,
      form.thumbnail,
    ];
    return Math.round((checks.filter(Boolean).length / checks.length) * 100);
  }, [form]);

  const updateFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    const file = files?.[0] || null;

    setForm((current) => ({ ...current, [name]: file }));

    if (name === "video") {
      if (videoPreview) URL.revokeObjectURL(videoPreview);
      setVideoPreview(file ? URL.createObjectURL(file) : "");
    }

    if (name === "thumbnail") {
      if (thumbnailPreview) URL.revokeObjectURL(thumbnailPreview);
      setThumbnailPreview(file ? URL.createObjectURL(file) : "");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");
    setErrorMessage("");

    try {
      const savedVideo = await createVideo({
        title: form.title.trim(),
        category: form.category,
        folder: form.folder,
        status: form.status,
        duration: form.duration,
        description: form.description.trim(),
        video: form.video,
        thumbnail: form.thumbnail,
      });

      const nextDraft: VideoDraft = {
        title: savedVideo.title,
        category: savedVideo.category,
        status: savedVideo.status,
        description: savedVideo.description,
        fileName: form.video?.name || "Uploaded video",
        thumbnailName: form.thumbnail?.name || "Uploaded thumbnail",
      };
      setDrafts((current) => [nextDraft, ...current].slice(0, 6));
      setMessage("Video saved to the backend. Published videos will appear on the public videos page.");
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message ||
          "Unable to save this video. Check your dashboard session and backend server.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageMeta
        title="Videos | Blucom Technologies Dashboard"
        description="Manage video uploads, thumbnails, publishing status, previews, and reusable video layouts."
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="Videos" />
        <PageIntro
          eyebrow="Media"
          title="Videos"
          description="Upload videos, manage publishing details, preview media, and review reusable embed layouts from one page."
          actions={
            <Link
              to="/videos"
              className="inline-flex items-center justify-center border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
            >
              View public videos page
            </Link>
          }
        />

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
                  Media publishing
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                  Add or update a video
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Add the video file, thumbnail, display copy, and publishing status from this page.
                </p>
              </div>
              <span className="hidden h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 sm:inline-flex">
                <VideoIcon />
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Video title</span>
                <input
                  type="text"
                  value={form.title}
                  onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
                  className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Campaign launch recap"
                />
              </label>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Category</span>
                  <select
                    value={form.category}
                    onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}
                    className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  >
                    <option>Brand Strategy</option>
                    <option>Digital Marketing</option>
                    <option>Product Demo</option>
                    <option>Client Story</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Status</span>
                  <select
                    value={form.status}
                    onChange={(event) => setForm((current) => ({ ...current, status: event.target.value }))}
                    className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="draft">Draft</option>
                    <option value="review">Ready for review</option>
                    <option value="published">Published</option>
                  </select>
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Folder</span>
                  <input
                    type="text"
                    value={form.folder}
                    onChange={(event) => setForm((current) => ({ ...current, folder: event.target.value }))}
                    className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    placeholder="Folder name 4"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Duration</span>
                  <input
                    type="text"
                    value={form.duration}
                    onChange={(event) => setForm((current) => ({ ...current, duration: event.target.value }))}
                    className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    placeholder="04:20"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Description</span>
                <textarea
                  value={form.description}
                  onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
                  rows={5}
                  className="mt-2 w-full resize-none border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Write the short summary that appears on the videos page."
                />
              </label>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="flex min-h-36 cursor-pointer flex-col justify-center border border-dashed border-slate-300 bg-slate-50 p-4 text-center transition hover:border-emerald-400 hover:bg-emerald-50">
                  <span className="text-sm font-bold text-slate-800">Upload video</span>
                  <span className="mt-1 text-xs text-slate-500">MP4, WebM, or MOV</span>
                  <input name="video" type="file" accept="video/*" onChange={updateFile} className="sr-only" />
                  <span className="mt-3 break-words text-xs font-semibold text-emerald-700">
                    {form.video?.name || "Choose video file"}
                  </span>
                </label>
                <label className="flex min-h-36 cursor-pointer flex-col justify-center border border-dashed border-slate-300 bg-slate-50 p-4 text-center transition hover:border-emerald-400 hover:bg-emerald-50">
                  <span className="text-sm font-bold text-slate-800">Upload thumbnail</span>
                  <span className="mt-1 text-xs text-slate-500">PNG, JPG, or WebP</span>
                  <input name="thumbnail" type="file" accept="image/*" onChange={updateFile} className="sr-only" />
                  <span className="mt-3 break-words text-xs font-semibold text-emerald-700">
                    {form.thumbnail?.name || "Choose thumbnail"}
                  </span>
                </label>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-600">
                  <span>Upload readiness</span>
                  <span>{completion}%</span>
                </div>
                <div className="h-2 overflow-hidden bg-slate-100">
                  <div className="h-full bg-emerald-500 transition-all" style={{ width: `${completion}%` }} />
                </div>
              </div>

              {message && (
                <p className="border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
                  {message}
                </p>
              )}
              {errorMessage && (
                <p className="border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {submitting ? "Saving..." : "Save video"}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden border border-slate-200 bg-slate-950 shadow-sm">
              <div className="aspect-video bg-slate-900">
                {videoPreview ? (
                  <video src={videoPreview} controls className="h-full w-full object-contain" />
                ) : thumbnailPreview ? (
                  <img src={thumbnailPreview} alt="Selected video thumbnail" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold text-slate-400">
                    Video or thumbnail preview appears here.
                  </div>
                )}
              </div>
              <div className="bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                  Preview card
                </p>
                <h2 className="mt-2 text-xl font-semibold text-slate-950">
                  {form.title || "Your video title"}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {form.description || "Your video description will be shown here before publishing."}
                </p>
              </div>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-950">Recent video drafts</h2>
              <div className="mt-4 space-y-3">
                {drafts.length ? (
                  drafts.map((draft, index) => (
                    <div key={`${draft.title}-${index}`} className="border border-slate-100 bg-slate-50 p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-semibold text-slate-900">{draft.title}</h3>
                        <span className="bg-emerald-100 px-2.5 py-1 text-xs font-bold uppercase text-emerald-800">
                          {draft.status}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">
                        {draft.category} | {draft.fileName} | {draft.thumbnailName}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">No saved video drafts yet.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-2">
          <div className="space-y-5 sm:space-y-6">
            <ComponentCard title="Video Ratio 16:9" desc="Standard widescreen embeds for tutorials and product overviews.">
              <SixteenIsToNine />
            </ComponentCard>
            <ComponentCard title="Video Ratio 4:3" desc="Classic presentation sizing for legacy and educational media.">
              <FourIsToThree />
            </ComponentCard>
          </div>
          <div className="space-y-5 sm:space-y-6">
            <ComponentCard title="Video Ratio 21:9" desc="Cinema-style embeds for campaigns and brand storytelling.">
              <TwentyOneIsToNine />
            </ComponentCard>
            <ComponentCard title="Video Ratio 1:1" desc="Square layouts for social previews and compact tiles.">
              <OneIsToOne />
            </ComponentCard>
          </div>
        </section>
      </div>
    </>
  );
}

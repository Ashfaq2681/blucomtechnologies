import { useEffect, useMemo, useState } from "react";
import ComponentCard from "./common/ComponentCard";
import PageBreadcrumb from "./common/PageBreadCrumb";
import PageIntro from "./common/PageIntro";
import PageMeta from "./common/PageMeta";
import { getDashboardPosts, updatePost } from "../../api/blogs";
import { getContents, updateContent } from "../../api/content";
import { getPageSeoEntries, updatePageSeoEntry } from "../../api/pageSeo";
import { getPageSeo } from "../../Components/PageSeo";

type RouteCheck = {
  path: string;
  score: number;
  status: "Healthy" | "Needs Work";
  findings: string[];
};

type ContentCheck = {
  id: string;
  numericId: number;
  title: string;
  type: string;
  category: string;
  status: string;
  score: number;
  path?: string;
  editable: boolean;
  findings: string[];
};

type ContentFilter = "all" | "main" | "services" | "portfolio" | "page" | "blog" | "ideas" | "news";

type EditableSeoItem = {
  id: string;
  numericId: number;
  source: "post" | "page" | "content";
  type: string;
  title: string;
  slug: string;
  path?: string;
  category: string;
  subcategory?: string;
  content: string;
  tags: string[];
  status: string;
  scheduledAt?: string;
  featured?: boolean;
  section?: string;
  seoTitle?: string;
  seoDescription?: string;
  focusKeyword?: string;
  canonicalUrl?: string;
  metaRobots?: string;
  readabilityNotes?: string;
  schemaType?: string;
  schemaJson?: string;
  socialTitle?: string;
  socialDescription?: string;
  socialImage?: string;
  twitterCard?: string;
};

const manualPublicPaths = [
  "/",
  "/about",
  "/contact",
  "/portfolio",
  "/portfolio/hyundai",
  "/portfolio/toyota-motors",
  "/portfolio/codility-hub",
  "/portfolio/fantasy-rewind",
  "/portfolio/hassan-bukhari",
  "/careers",
  "/ideas",
  "/news",
  "/notfound",
  "/login",
  "/multistepform",
  "/testpage",
  "/blog",
  "/blog/blog-single-b",
  "/blog/blog-single-the-oportunity-code",
  "/ideas/ideas-single",
  "/work",
  "/admindashboard",
  "/admin",
  "/investors",
  "/for-startups",
  "/for-small-business",
  "/for-agencies",
  "/for-ecommerce",
  "/enterprise",
  "/documentation",
  "/guides",
  "/api-reference",
  "/community",
  "/press",
  "/partners",
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
  "/gdpr-compliance",
  "/security",
  "/blogsingle",
  "/overviewsingle",
  "/the-shift-towards-commerce-driven-marketing",
  "/services/analysis-measurement",
  "/services/analytics-implementation",
  "/services/brand-awareness",
  "/services/brand-strategy",
  "/services/campaign-optimization",
  "/services/content-marketing",
  "/services/content-strategy",
  "/services/customer-journey-mapping",
  "/services/data-visualization",
  "/services/identity",
  "/services/impact-measurement",
  "/services/interaction-assets-devs",
  "/services/interaction-design",
  "/services/lead-gen",
  "/services/media-planning-buying",
  "/services/messaging-positioning",
  "/services/nurture-strategies",
  "/services/omnichannel-campaign-management",
  "/services/persona-creation",
  "/services/product-mapping",
  "/services/prototyping-and-wireframing",
  "/services/reputation-management",
  "/services/search-marketing",
  "/services/strategic-communication",
  "/services/ui-designing",
  "/services/user-journey-mapping",
  "/services/web-development",
  "/services/web-maintenance",
  "/services/new-folder/buying",
  "/services/new-folder/omnichannel-campaign-management",
];

const metaRobotsOptions = ["index,follow", "noindex,follow", "index,nofollow", "noindex,nofollow"];
const schemaTypeOptions = ["Article", "BlogPosting", "NewsArticle", "WebPage", "FAQPage"];
const twitterCardOptions = ["summary", "summary_large_image"];

const allSeoPaths = Array.from(new Set(manualPublicPaths))
  .map((path) => (path === "/" ? "/" : path.toLowerCase().replace(/\/+$/, "")))
  .filter(Boolean)
  .sort((first, second) => first.localeCompare(second));

const getContentType = (item: any): "blog" | "ideas" | "news" => {
  const values = [item.category, item.subcategory, item.section, item.tags]
    .flat()
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (values.includes("ideas")) return "ideas";
  if (values.includes("news")) return "news";
  return "blog";
};

const formatRouteLabel = (path: string) => {
  if (path === "/") return "Home";

  return path
    .split("/")
    .filter(Boolean)
    .pop()
    ?.split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ") || path;
};

const getPageCategory = (path: string) => {
  const normalizedPath = path.toLowerCase();

  if (normalizedPath === "/") return "Main Pages";
  if (normalizedPath.startsWith("/services/")) return "Services";
  if (normalizedPath.startsWith("/portfolio/")) return "Portfolio Pages";
  if (normalizedPath === "/portfolio") return "Main Pages";
  if (normalizedPath.startsWith("/blog")) return "Blog";
  if (normalizedPath.startsWith("/ideas")) return "Ideas";
  if (normalizedPath.startsWith("/news")) return "News";
  if (
    normalizedPath.startsWith("/admin") ||
    normalizedPath.startsWith("/dashboard") ||
    normalizedPath === "/login" ||
    normalizedPath === "/testpage" ||
    normalizedPath === "/multistepform"
  ) {
    return "System";
  }

  return "Main Pages";
};

const getPageContentType = (path: string): ContentFilter => {
  const normalizedPath = path.toLowerCase();

  if (normalizedPath.startsWith("/services/")) return "services";
  if (normalizedPath.startsWith("/portfolio/")) return "portfolio";

  return "main";
};

const buildPageSeoItems = (storedEntries: any[] = []): EditableSeoItem[] => {
  const storedByPath = new Map(
    storedEntries.map((entry) => [String(entry.path || "").toLowerCase(), entry]),
  );

  return (
  allSeoPaths.map((path) => {
    const routeSeo = getRouteSeo(path);
    const normalizedPath = path.toLowerCase();
    const slug = path === "/" ? "home" : path.split("/").filter(Boolean).pop() || path;
    const storedSeo = storedByPath.get(normalizedPath) || {};

    return {
      id: `page-${normalizedPath === "/" ? "home" : normalizedPath.replace(/[^a-z0-9]+/g, "-")}`,
      numericId: 0,
      source: "page",
      type: getPageContentType(path),
      title: storedSeo.seoTitle || routeSeo.title || formatRouteLabel(path),
      slug,
      path,
      category: getPageCategory(path),
      subcategory: normalizedPath.startsWith("/services/")
        ? "Service Page"
        : normalizedPath.startsWith("/portfolio/")
        ? "Portfolio Single Page"
        : "Main Page",
      content: storedSeo.seoDescription || routeSeo.description || "",
      tags: [getPageCategory(path), getPageContentType(path), "page"],
      status: getPageCategory(path) === "System" ? "noindex" : "published",
      seoTitle: storedSeo.seoTitle || routeSeo.title,
      seoDescription: storedSeo.seoDescription || routeSeo.description,
      focusKeyword: storedSeo.focusKeyword || "",
      canonicalUrl:
        storedSeo.canonicalUrl || `https://www.blucomtechnologies.com${path === "/" ? "" : path}`,
      metaRobots:
        storedSeo.metaRobots || (getPageCategory(path) === "System" ? "noindex,nofollow" : "index,follow"),
      readabilityNotes: storedSeo.readabilityNotes || "",
      schemaType: storedSeo.schemaType || "WebPage",
      schemaJson: storedSeo.schemaJson || "",
      socialTitle: storedSeo.socialTitle || "",
      socialDescription: storedSeo.socialDescription || "",
      socialImage: storedSeo.socialImage || "",
      twitterCard: storedSeo.twitterCard || "summary_large_image",
    };
  })
  );
};

const getRouteSeo = (path: string) => getPageSeo(path);

const scoreRoute = (
  path: string,
  duplicateMap: Map<string, number>,
  sitemapPaths: Set<string>,
): RouteCheck => {
  const findings: string[] = [];
  let score = 100;
  const normalizedPath = path.toLowerCase();
  const routeSeo = getRouteSeo(path);
  const titleLength = routeSeo.title.trim().length;
  const descriptionLength = routeSeo.description.trim().length;

  if (/[A-Z]/.test(path)) {
    score -= 20;
    findings.push("Use lowercase URLs to avoid duplicate-indexing signals.");
  }

  if (!sitemapPaths.has(normalizedPath) && !normalizedPath.startsWith("/dashboard")) {
    score -= 20;
    findings.push("Route is not represented in the sitemap route registry.");
  }

  if ((duplicateMap.get(normalizedPath) || 0) > 1) {
    score -= 20;
    findings.push("Multiple path variants resolve to the same lowercase URL family.");
  }

  if (path.includes(" ")) {
    score -= 20;
    findings.push("URL contains spaces and should be slug-based.");
  }

  if (path.length > 70) {
    score -= 10;
    findings.push("Shorter URLs are usually easier to crawl and share.");
  }

  if (titleLength < 50 || titleLength > 65) {
    score -= 10;
    findings.push("SEO title should usually stay between 50 and 65 characters.");
  }

  if (descriptionLength < 140 || descriptionLength > 160) {
    score -= 10;
    findings.push("Meta description should usually stay between 140 and 160 characters.");
  }

  if (!routeSeo.title.includes("Blucom")) {
    score -= 10;
    findings.push("SEO title should include the brand name.");
  }

  if (normalizedPath.startsWith("/dashboard")) {
    score -= 10;
    findings.push("Dashboard routes should stay excluded from indexable SEO targets.");
  }

  return {
    path,
    score: Math.max(score, 0),
    status: score >= 80 ? "Healthy" : "Needs Work",
    findings: findings.length ? findings : ["No major route-level issues detected."],
  };
};

const scoreContent = (item: any, type: string): ContentCheck => {
  const findings: string[] = [];
  let score = 100;
  const titleLength = (item.title || "").trim().length;
  const description = (item.excerpt || item.description || "").trim();
  const descriptionLength = description.length;
  const slug = (item.slug || "").trim();

  if (titleLength < 20 || titleLength > 60) {
    score -= 20;
    findings.push("Title should usually stay within roughly 20 to 60 characters.");
  }

  if (descriptionLength < 120 || descriptionLength > 160) {
    score -= 20;
    findings.push("Meta-style summary is weak; target roughly 120 to 160 characters.");
  }

  if (!slug || slug !== slug.toLowerCase() || !/^[a-z0-9-]+$/.test(slug)) {
    score -= 20;
    findings.push("Slug should be lowercase and use hyphens only.");
  }

  if (slug.length < 8 || slug.length > 80) {
    score -= 10;
    findings.push("Slug length is outside a typical SEO-friendly range.");
  }

  if (!item.category) {
    score -= 10;
    findings.push("Missing category weakens content organization signals.");
  }

  if (item.source !== "page" && !item.image) {
    score -= 10;
    findings.push("Missing featured image reduces rich-result and social preview quality.");
  }

  if (item.status === "draft") {
    score -= 10;
    findings.push("Draft items are not indexable until published.");
  }

  return {
    id: `${type}-${item.id}`,
    numericId: Number(item.id),
    title: item.title || "Untitled",
    type,
    category: item.category || "Uncategorized",
    status: item.status || "draft",
    score: Math.max(score, 0),
    path: item.path,
    editable: item.source !== "page",
    findings: findings.length ? findings : ["No major content-level issues detected."],
  };
};

const SeoAnalysis = () => {
  const [contentChecks, setContentChecks] = useState<ContentCheck[]>([]);
  const [editableItems, setEditableItems] = useState<EditableSeoItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState("");
  const [contentFilter, setContentFilter] = useState<ContentFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [editorForm, setEditorForm] = useState({
    seoTitle: "",
    seoDescription: "",
    focusKeyword: "",
    canonicalUrl: "",
    metaRobots: "index,follow",
    readabilityNotes: "",
    schemaType: "Article",
    schemaJson: "",
    socialTitle: "",
    socialDescription: "",
    socialImage: "",
    twitterCard: "summary_large_image",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        setLoading(true);
        const [posts, pageSeoEntries, portfolioItems] = await Promise.all([
          getDashboardPosts(),
          getPageSeoEntries(),
          getContents({ type: "portfolio", includeDrafts: true }),
        ]);

        if (!mounted) {
          return;
        }

        const postItems = posts.map((item) => ({
          ...item,
          source: "post",
          type: getContentType(item),
        })) as EditableSeoItem[];
        const portfolioSeoItems = portfolioItems.map((item) => ({
          ...item,
          source: "content",
          type: "portfolio",
          path: item.slug ? `/portfolio/${item.slug}` : undefined,
        })) as EditableSeoItem[];
        const pageItems = buildPageSeoItems(pageSeoEntries);
        const editable = [...pageItems, ...portfolioSeoItems, ...postItems];

        setContentChecks(editable.map((item) => scoreContent(item, item.type)));
        setEditableItems(editable);
        if (editable.length) {
          const firstItem = editable[0];
          setSelectedItemId(`${firstItem.type}-${firstItem.id}`);
          setEditorForm({
            seoTitle: firstItem.seoTitle || "",
            seoDescription: firstItem.seoDescription || "",
            focusKeyword: firstItem.focusKeyword || "",
            canonicalUrl: firstItem.canonicalUrl || "",
            metaRobots: firstItem.metaRobots || "index,follow",
            readabilityNotes: firstItem.readabilityNotes || "",
            schemaType: firstItem.schemaType || "Article",
            schemaJson: firstItem.schemaJson || "",
            socialTitle: firstItem.socialTitle || "",
            socialDescription: firstItem.socialDescription || "",
            socialImage: firstItem.socialImage || "",
            twitterCard: firstItem.twitterCard || "summary_large_image",
          });
        }
      } catch (_error) {
        if (mounted) {
          setErrorMessage("Unable to load SEO analysis data.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  const selectedItem = useMemo(
    () => editableItems.find((item) => `${item.type}-${item.id}` === selectedItemId) || null,
    [editableItems, selectedItemId]
  );
  const selectedItemEditLabel =
    selectedItem?.source === "page"
      ? "Static page metadata can be reviewed and adjusted in this dashboard view."
      : selectedItem?.source === "content"
      ? "Portfolio SEO fields can be edited through the same content metadata workflow."
      : "SEO fields can be edited through the same blog, ideas, and news metadata workflow.";
  const selectedItemSaveLabel =
    selectedItem?.source === "page"
      ? "Update Static Metadata"
      : selectedItem?.source === "content"
      ? "Save Portfolio SEO Fields"
      : "Save SEO Fields";

  const handleSelectChange = (value: string) => {
    setSelectedItemId(value);
    setSaveMessage("");
    const nextItem = editableItems.find((item) => `${item.type}-${item.id}` === value);
    if (!nextItem) {
      return;
    }

    setEditorForm({
      seoTitle: nextItem.seoTitle || "",
      seoDescription: nextItem.seoDescription || "",
      focusKeyword: nextItem.focusKeyword || "",
      canonicalUrl: nextItem.canonicalUrl || "",
      metaRobots: nextItem.metaRobots || "index,follow",
      readabilityNotes: nextItem.readabilityNotes || "",
      schemaType: nextItem.schemaType || "Article",
      schemaJson: nextItem.schemaJson || "",
      socialTitle: nextItem.socialTitle || "",
      socialDescription: nextItem.socialDescription || "",
      socialImage: nextItem.socialImage || "",
      twitterCard: nextItem.twitterCard || "summary_large_image",
    });
  };

  const handleEditorChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setEditorForm((current) => ({ ...current, [name]: value }));
  };

  const handleSave = async () => {
    if (!selectedItem) {
      return;
    }

    try {
      setSaving(true);
      setSaveMessage("");
      setErrorMessage("");

      if (selectedItem.source === "page") {
        const updatedSeo = await updatePageSeoEntry({
          path: selectedItem.path,
          seoTitle: editorForm.seoTitle,
          seoDescription: editorForm.seoDescription,
          focusKeyword: editorForm.focusKeyword,
          canonicalUrl: editorForm.canonicalUrl,
          metaRobots: editorForm.metaRobots,
          readabilityNotes: editorForm.readabilityNotes,
          schemaType: editorForm.schemaType,
          schemaJson: editorForm.schemaJson,
          socialTitle: editorForm.socialTitle,
          socialDescription: editorForm.socialDescription,
          socialImage: editorForm.socialImage,
          twitterCard: editorForm.twitterCard,
        });
        const updatedItem = {
          ...selectedItem,
          ...updatedSeo,
          content: updatedSeo.seoDescription || editorForm.seoDescription,
        };

        setEditableItems((current) =>
          current.map((item) => (item.id === selectedItem.id ? updatedItem : item))
        );
        setContentChecks((current) =>
          current.map((item) =>
            item.id === `${selectedItem.type}-${selectedItem.id}`
              ? scoreContent(updatedItem, updatedItem.type)
              : item
          )
        );
        setSaveMessage("Page metadata updated successfully.");
        return;
      }

      const payload = {
        ...selectedItem,
        tags: Array.isArray(selectedItem.tags) ? selectedItem.tags.join(", ") : "",
        scheduledAt: selectedItem.scheduledAt || "",
        seoTitle: editorForm.seoTitle,
        seoDescription: editorForm.seoDescription,
        focusKeyword: editorForm.focusKeyword,
        canonicalUrl: editorForm.canonicalUrl,
        metaRobots: editorForm.metaRobots,
        readabilityNotes: editorForm.readabilityNotes,
        schemaType: editorForm.schemaType,
        schemaJson: editorForm.schemaJson,
        socialTitle: editorForm.socialTitle,
        socialDescription: editorForm.socialDescription,
        socialImage: editorForm.socialImage,
        twitterCard: editorForm.twitterCard,
      };

      if (selectedItem.source === "content") {
        const updated = await updateContent(selectedItem.numericId, {
          ...payload,
          type: "portfolio",
        });

        setEditableItems((current) =>
          current.map((item) =>
            item.numericId === selectedItem.numericId && item.source === "content"
              ? { ...item, ...updated, source: "content", type: "portfolio", path: `/portfolio/${updated.slug}` }
              : item
          )
        );
        setContentChecks((current) =>
          current.map((item) =>
            item.id === `${selectedItem.type}-${selectedItem.id}`
              ? scoreContent(
                  { ...selectedItem, ...updated, source: "content", type: "portfolio", path: `/portfolio/${updated.slug}` },
                  "portfolio"
                )
              : item
          )
        );
        setSaveMessage("Portfolio SEO fields updated successfully.");
        return;
      }

      const updated = await updatePost(selectedItem.numericId, payload);

      setEditableItems((current) =>
        current.map((item) =>
          item.numericId === selectedItem.numericId && item.type === selectedItem.type
            ? { ...item, ...updated, type: selectedItem.type }
            : item
        )
      );
      setSaveMessage("SEO fields updated successfully.");
    } catch (_error) {
      setErrorMessage("Unable to save SEO fields.");
    } finally {
      setSaving(false);
    }
  };

  const routeChecks = useMemo(() => {
    const sitemapPaths = new Set(allSeoPaths.map((path) => path.toLowerCase()));
    const duplicateMap = allSeoPaths.reduce((map, path) => {
      const key = path.toLowerCase();
      map.set(key, (map.get(key) || 0) + 1);
      return map;
    }, new Map<string, number>());

    return allSeoPaths
      .filter((path) => path.startsWith("/"))
      .map((path) => scoreRoute(path, duplicateMap, sitemapPaths))
      .sort((first, second) => first.score - second.score);
  }, []);

  const routeSummary = useMemo(() => {
    const average = routeChecks.length
      ? Math.round(routeChecks.reduce((total, item) => total + item.score, 0) / routeChecks.length)
      : 0;

    return {
      average,
      issues: routeChecks.filter((item) => item.status === "Needs Work").length,
    };
  }, [routeChecks]);

  const contentSummary = useMemo(() => {
    const average = contentChecks.length
      ? Math.round(contentChecks.reduce((total, item) => total + item.score, 0) / contentChecks.length)
      : 0;

    return {
      average,
      issues: contentChecks.filter((item) => item.score < 80).length,
    };
  }, [contentChecks]);

  const visibleContentChecks = useMemo(() => {
    const sortedItems = [...contentChecks].sort((first, second) => first.score - second.score);

    return sortedItems.filter((item) => {
      const isStaticPage = ["main", "services", "portfolio"].includes(item.type);
      const matchesType =
        contentFilter === "all" ||
        item.type === contentFilter ||
        (contentFilter === "page" && isStaticPage);
      const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;

      return matchesType && matchesCategory;
    });
  }, [categoryFilter, contentChecks, contentFilter]);

  const contentCategories = useMemo(
    () => Array.from(new Set(contentChecks.map((item) => item.category).filter(Boolean))).sort(),
    [contentChecks]
  );

  const handleEditContentSeo = (itemId: string) => {
    handleSelectChange(itemId);
    const editorSection = document.getElementById("seo-quick-editor");
    if (editorSection) {
      editorSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <PageMeta
        title="SEO Analysis Dashboard | Blucom Technologies"
        description="Analyze public pages and content items against Google-aligned SEO hygiene checks."
      />
      <div className="dashboard-page-stack">
        <PageBreadcrumb pageTitle="SEO Analysis" />
        <PageIntro
          eyebrow="SEO"
          title="Monitor route health and content SEO quality"
          description="This screen flags common Google-facing issues such as duplicate URL variants, missing sitemap coverage, weak titles, thin descriptions, and poor slug formatting."
        />

        <div className="grid gap-5 xl:grid-cols-2">
          <ComponentCard title="Route Health" desc="Public route analysis for indexability and URL hygiene.">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[6px] border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-slate-500">Average route score</p>
                <p className="mt-2 text-3xl font-semibold text-slate-950">{routeSummary.average}/100</p>
              </div>
              <div className="rounded-[6px] border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-slate-500">Routes needing work</p>
                <p className="mt-2 text-3xl font-semibold text-amber-600">{routeSummary.issues}</p>
              </div>
            </div>
          </ComponentCard>
          <ComponentCard title="Content Health" desc="Pages, blogs, ideas, and news scored against title, slug, description, category, and media checks.">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[6px] border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-slate-500">Average content score</p>
                <p className="mt-2 text-3xl font-semibold text-slate-950">{contentSummary.average}/100</p>
              </div>
              <div className="rounded-[6px] border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-slate-500">Items needing work</p>
                <p className="mt-2 text-3xl font-semibold text-amber-600">{contentSummary.issues}</p>
              </div>
            </div>
          </ComponentCard>
        </div>

        <ComponentCard
          title="SEO Quick Editor"
          desc="Edit search metadata, readability notes, schema markup, and social preview fields without leaving the SEO page."
        >
          <div id="seo-quick-editor">
          {editableItems.length ? (
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Content Item</label>
                <select
                  value={selectedItemId}
                  onChange={(event) => handleSelectChange(event.target.value)}
                  className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  {editableItems.map((item) => (
                    <option key={`${item.type}-${item.id}`} value={`${item.type}-${item.id}`}>
                      {item.title} ({item.type}{item.category ? `, ${item.category}` : ""})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">SEO Title</label>
                <input
                  name="seoTitle"
                  type="text"
                  value={editorForm.seoTitle}
                  onChange={handleEditorChange}
                  className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Focus Keyword</label>
                <input
                  name="focusKeyword"
                  type="text"
                  value={editorForm.focusKeyword}
                  onChange={handleEditorChange}
                  className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">SEO Description</label>
                <textarea
                  name="seoDescription"
                  rows={3}
                  value={editorForm.seoDescription}
                  onChange={handleEditorChange}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Canonical URL</label>
                <input
                  name="canonicalUrl"
                  type="url"
                  value={editorForm.canonicalUrl}
                  onChange={handleEditorChange}
                  className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Meta Robots</label>
                <select
                  name="metaRobots"
                  value={editorForm.metaRobots}
                  onChange={handleEditorChange}
                  className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  {metaRobotsOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lg:col-span-2 border-t border-slate-200 pt-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Readability</h4>
              </div>
              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Readability Notes</label>
                <textarea
                  name="readabilityNotes"
                  rows={3}
                  value={editorForm.readabilityNotes}
                  onChange={handleEditorChange}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="lg:col-span-2 border-t border-slate-200 pt-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Schema</h4>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Schema Type</label>
                <select
                  name="schemaType"
                  value={editorForm.schemaType}
                  onChange={handleEditorChange}
                  className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  {schemaTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Schema JSON-LD</label>
                <textarea
                  name="schemaJson"
                  rows={6}
                  value={editorForm.schemaJson}
                  onChange={handleEditorChange}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-mono text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="lg:col-span-2 border-t border-slate-200 pt-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Social</h4>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Social Title</label>
                <input
                  name="socialTitle"
                  type="text"
                  value={editorForm.socialTitle}
                  onChange={handleEditorChange}
                  className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Twitter Card</label>
                <select
                  name="twitterCard"
                  value={editorForm.twitterCard}
                  onChange={handleEditorChange}
                  className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  {twitterCardOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Social Description</label>
                <textarea
                  name="socialDescription"
                  rows={3}
                  value={editorForm.socialDescription}
                  onChange={handleEditorChange}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Social Image URL</label>
                <input
                  name="socialImage"
                  type="url"
                  value={editorForm.socialImage}
                  onChange={handleEditorChange}
                  className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {selectedItem ? (
                <div className="lg:col-span-2 rounded-[6px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
                  Editing <span className="font-semibold text-slate-900">{selectedItem.title}</span> as a{" "}
                  <span className="capitalize">{selectedItem.type}</span> item in{" "}
                  <span className="font-semibold text-slate-900">{selectedItem.category || "Uncategorized"}</span>.
                  {" "}{selectedItemEditLabel}
                </div>
              ) : null}

              {(saveMessage || errorMessage) ? (
                <div className="lg:col-span-2">
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                      errorMessage ? "bg-red-50 text-red-700" : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    {errorMessage || saveMessage}
                  </div>
                </div>
              ) : null}

              <div className="lg:col-span-2">
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={saving || !selectedItem}
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {saving ? "Saving..." : selectedItemSaveLabel}
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-[6px] border border-slate-200 bg-white px-4 py-8 text-sm font-medium text-slate-500">
              No content items are available for SEO editing yet.
            </div>
          )}
          </div>
        </ComponentCard>

        <ComponentCard title="Route-Level Checks" desc="Lowest scores appear first so the biggest SEO problems are easiest to fix.">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm text-slate-700">
              <thead className="bg-slate-100 text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                <tr>
                  <th className="px-4 py-3">Path</th>
                  <th className="px-4 py-3">Score</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Findings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {routeChecks.map((item) => (
                  <tr key={item.path}>
                    <td className="px-4 py-3 font-medium text-slate-900">{item.path}</td>
                    <td className="px-4 py-3">{item.score}/100</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.status === "Healthy" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{item.findings.join(" ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentCard>

        <ComponentCard title="Content-Level Checks" desc="Published, scheduled, and draft content with action-oriented SEO findings.">
          {loading ? (
            <div className="rounded-[6px] border border-slate-200 bg-white px-4 py-8 text-sm font-medium text-slate-500">
              Loading SEO content analysis...
            </div>
          ) : errorMessage ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm font-medium text-red-700">
              {errorMessage}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {(["all", "main", "services", "portfolio", "page", "blog", "ideas", "news"] as ContentFilter[]).map((filterValue) => (
                  <button
                    key={filterValue}
                    type="button"
                    onClick={() => setContentFilter(filterValue)}
                    className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition ${
                      contentFilter === filterValue
                        ? "bg-slate-950 text-white"
                        : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:text-slate-950"
                    }`}
                  >
                    {filterValue === "all"
                      ? "All content"
                      : filterValue === "main"
                      ? "Main pages"
                      : filterValue === "services"
                      ? "Services pages"
                      : filterValue === "portfolio"
                      ? "Portfolio pages"
                      : `${filterValue.charAt(0).toUpperCase()}${filterValue.slice(1)}`}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 rounded-[6px] border border-slate-200 bg-white px-4 py-3">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Category
                </label>
                <select
                  value={categoryFilter}
                  onChange={(event) => setCategoryFilter(event.target.value)}
                  className="h-10 min-w-[220px] rounded-[6px] border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="all">All categories</option>
                  {contentCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-sm text-slate-700">
                <thead className="bg-slate-100 text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Score</th>
                    <th className="px-4 py-3">Findings</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {visibleContentChecks.map((item) => (
                      <tr key={item.id}>
                        <td className="px-4 py-3 font-medium text-slate-900">
                          {item.title}
                          {item.path ? <span className="mt-1 block text-xs font-normal text-slate-500">{item.path}</span> : null}
                        </td>
                        <td className="px-4 py-3 capitalize">{item.type}</td>
                        <td className="px-4 py-3">{item.category}</td>
                        <td className="px-4 py-3 capitalize">{item.status}</td>
                        <td className="px-4 py-3">{item.score}/100</td>
                        <td className="px-4 py-3">{item.findings.join(" ")}</td>
                        <td className="px-4 py-3">
                          <button
                            type="button"
                            onClick={() => handleEditContentSeo(item.id)}
                            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                          >
                            {item.editable ? "Edit SEO" : "View SEO"}
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              </div>

              {!visibleContentChecks.length ? (
                <div className="rounded-[6px] border border-slate-200 bg-white px-4 py-8 text-sm font-medium text-slate-500">
                  No {contentFilter === "all" ? "" : `${contentFilter} `}items match the current filters.
                </div>
              ) : null}
            </div>
          )}
        </ComponentCard>
      </div>
    </>
  );
};

export default SeoAnalysis;

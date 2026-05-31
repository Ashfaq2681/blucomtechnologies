import { useId, useMemo, useRef } from "react";
import {
  Bold,
  Heading,
  Highlighter,
  ImagePlus,
  Italic,
  List,
  ListOrdered,
  Link2,
  MessageSquareQuote,
  RectangleHorizontal,
  SeparatorHorizontal,
  SquareDashedBottom,
  Table2,
  Underline,
  Video,
} from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const escapeHtml = (value = "") =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const toolbarButtonClassName =
  "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:bg-slate-50";
const toolbarTextButtonClassName =
  "inline-flex h-10 min-w-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50";

const ToolbarIcon = ({ icon: Icon }) => <Icon className="h-4 w-4" strokeWidth={2.2} />;

const blockStyleOptions = [
  {
    value: "h1",
    label: "H1",
    description: "Main heading",
    className: "text-lg font-black leading-none text-slate-950",
  },
  {
    value: "h2",
    label: "H2",
    description: "Section heading",
    className: "text-base font-extrabold leading-none text-slate-900",
  },
  {
    value: "h3",
    label: "H3",
    description: "Sub heading",
    className: "text-sm font-bold leading-none text-slate-800",
  },
  {
    value: "h4",
    label: "H4",
    description: "Detail heading",
    className: "text-xs font-bold uppercase leading-none text-slate-700",
  },
  {
    value: "paragraph",
    label: "Paragraph",
    description: "Large body text",
    className: "text-sm font-semibold leading-none text-slate-600",
  },
  {
    value: "normal",
    label: "Normal",
    description: "Standard body text",
    className: "text-xs font-medium leading-none text-slate-500",
  },
];

const RichTextEditor = ({ value, onChange }) => {
  const editorId = useId().replace(/:/g, "");
  const quillRef = useRef(null);

  const insertHtmlAtCursor = (html) => {
    const editor = quillRef.current?.getEditor();

    if (!editor) {
      return;
    }

    const range = editor.getSelection(true);
    const index = range?.index ?? editor.getLength();

    editor.clipboard.dangerouslyPasteHTML(index, html, "user");
    editor.setSelection(index + 1, 0, "silent");
  };

  const insertBlockFormat = (format) => {
    const blockTemplates = {
      normal: '<p class="article-normal-text">Add normal text here.</p>',
      paragraph: '<p class="article-paragraph-text">Add paragraph text here.</p>',
      h1: '<h1 class="article-heading-one">Add H1 main heading</h1><p class="article-paragraph-text">Add introduction text here.</p>',
      h2: '<h2 class="article-heading-two">Add H2 section heading</h2><p class="article-paragraph-text">Add section content here.</p>',
      h3: '<h3 class="article-heading-three">Add H3 subsection heading</h3><p class="article-paragraph-text">Add subsection content here.</p>',
      h4: '<h4 class="article-heading-four">Add H4 detail heading</h4><p class="article-paragraph-text">Add supporting detail here.</p>',
    };

    if (blockTemplates[format]) {
      insertHtmlAtCursor(blockTemplates[format]);
    }
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: `#${editorId}`,
        handlers: {
          insertImage: () => {
            const url = window.prompt("Enter image URL");

            if (!url) {
              return;
            }

            const alt = window.prompt("Enter image alt text (optional)") || "Image";
            insertHtmlAtCursor(
              `<figure class="article-image-section"><img src="${escapeHtml(url)}" alt="${escapeHtml(alt)}" /><figcaption>${escapeHtml(alt)}</figcaption></figure>`,
            );
          },
          insertVideo: () => {
            const url = window.prompt("Enter video URL");

            if (!url) {
              return;
            }

            const editor = quillRef.current?.getEditor();
            const range = editor?.getSelection(true);
            const index = range?.index ?? editor?.getLength() ?? 0;

            editor?.insertEmbed(index, "video", url, "user");
            editor?.setSelection(index + 1, 0, "silent");
          },
          insertTable: () => {
            insertHtmlAtCursor(`
              <div class="article-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Column</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              </div>
            `);
          },
          insertButton: () => {
            const label = window.prompt("Enter button text");
            const url = window.prompt("Enter button URL");

            if (!label || !url) {
              return;
            }

            insertHtmlAtCursor(
              `<p><a href="${escapeHtml(url)}" class="article-cta">${escapeHtml(label)}</a></p>`,
            );
          },
          insertDivider: () => {
            insertHtmlAtCursor('<hr class="article-divider" />');
          },
          insertCallout: () => {
            insertHtmlAtCursor(`
              <div class="article-callout">
                <p><strong>Key takeaway</strong></p>
                <p>Add a sharp insight, caution, or strategic note here.</p>
              </div>
            `);
          },
          insertQuoteSection: () => {
            insertHtmlAtCursor(`
              <blockquote class="article-quote-section">
                <p>Add a customer quote, expert note, or source excerpt here.</p>
                <cite>Source or author</cite>
              </blockquote>
            `);
          },
          insertHighlightText: () => {
            insertHtmlAtCursor(
              '<p><mark class="article-highlight-text">Add highlighted text here.</mark></p>',
            );
          },
          insertStats: () => {
            insertHtmlAtCursor(`
              <div class="article-stat-grid">
                <div class="article-stat-card">
                  <p class="article-stat-value">01</p>
                  <p class="article-stat-label">Add metric</p>
                </div>
                <div class="article-stat-card">
                  <p class="article-stat-value">02</p>
                  <p class="article-stat-label">Add metric</p>
                </div>
              </div>
            `);
          },
        },
      },
    }),
    [editorId],
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "list",
    "blockquote",
    "image",
    "video",
    "link",
  ];

  return (
    <div className="dashboard-rich-text-editor">
      <div
        id={editorId}
        className="flex flex-wrap items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3"
      >
        <ul
          className="flex min-h-10 flex-wrap items-stretch gap-1 rounded-xl border border-slate-200 bg-white p-1"
          aria-label="Block style"
        >
          {blockStyleOptions.map((option) => (
            <li key={option.value} className="flex">
              <button
                type="button"
                className="flex min-w-[104px] flex-col justify-center rounded-lg px-3 py-2 text-left transition hover:bg-slate-100 focus:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                onClick={() => insertBlockFormat(option.value)}
                aria-label={`Insert ${option.description}`}
                title={option.description}
              >
                <span className={option.className}>{option.label}</span>
                <span className="mt-1 text-[10px] font-medium leading-none text-slate-400">
                  {option.description}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <button type="button" className={`ql-bold ${toolbarButtonClassName}`} aria-label="Bold" title="Bold">
          <ToolbarIcon icon={Bold} />
        </button>
        <button type="button" className={`ql-italic ${toolbarButtonClassName}`} aria-label="Italic" title="Italic">
          <ToolbarIcon icon={Italic} />
        </button>
        <button type="button" className={`ql-underline ${toolbarButtonClassName}`} aria-label="Underline" title="Underline">
          <ToolbarIcon icon={Underline} />
        </button>
        <button
          type="button"
          className={`ql-list ${toolbarButtonClassName}`}
          value="bullet"
          aria-label="Bullet List"
          title="Bullet List"
        >
          <ToolbarIcon icon={List} />
        </button>
        <button
          type="button"
          className={`ql-list ${toolbarButtonClassName}`}
          value="ordered"
          aria-label="Numbered List"
          title="Numbered List"
        >
          <ToolbarIcon icon={ListOrdered} />
        </button>
        <button
          type="button"
          className={`ql-blockquote ${toolbarButtonClassName}`}
          aria-label="Quote"
          title="Quote"
        >
          <ToolbarIcon icon={MessageSquareQuote} />
        </button>
        <button
          type="button"
          className={`ql-link ${toolbarButtonClassName}`}
          aria-label="Link"
          title="Link"
        >
          <ToolbarIcon icon={Link2} />
        </button>
        <button
          type="button"
          className={`ql-insertTable ${toolbarButtonClassName}`}
          aria-label="Table"
          title="Table"
        >
          <ToolbarIcon icon={Table2} />
        </button>
        <button
          type="button"
          className={`ql-insertImage ${toolbarTextButtonClassName} gap-2`}
          aria-label="Add Image"
          title="Image"
        >
          <ToolbarIcon icon={ImagePlus} />
          Image
        </button>
        <button
          type="button"
          className={`ql-insertVideo ${toolbarButtonClassName}`}
          aria-label="Add Video"
          title="Video"
        >
          <ToolbarIcon icon={Video} />
        </button>
        <button
          type="button"
          className={`ql-insertButton ${toolbarButtonClassName}`}
          aria-label="Add Button"
          title="Button"
        >
          <ToolbarIcon icon={RectangleHorizontal} />
        </button>
        <button
          type="button"
          className={`ql-insertCallout ${toolbarButtonClassName}`}
          aria-label="Callout"
          title="Callout"
        >
          <ToolbarIcon icon={SquareDashedBottom} />
        </button>
        <button
          type="button"
          className={`ql-insertQuoteSection ${toolbarTextButtonClassName} gap-2`}
          aria-label="Add Quote Section"
          title="Quote Section"
        >
          <ToolbarIcon icon={MessageSquareQuote} />
          Quote
        </button>
        <button
          type="button"
          className={`ql-insertHighlightText ${toolbarTextButtonClassName} gap-2`}
          aria-label="Add Highlight Text"
          title="Highlight Text"
        >
          <ToolbarIcon icon={Highlighter} />
          Highlight
        </button>
        <button
          type="button"
          className={`ql-insertDivider ${toolbarButtonClassName}`}
          aria-label="Divider"
          title="Divider"
        >
          <ToolbarIcon icon={SeparatorHorizontal} />
        </button>
        <button
          type="button"
          className={`ql-insertStats ${toolbarButtonClassName}`}
          aria-label="Stats Grid"
          title="Stats Grid"
        >
          <ToolbarIcon icon={Heading} />
        </button>
      </div>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        className="bg-white"
      />
    </div>
  );
};

export default RichTextEditor;

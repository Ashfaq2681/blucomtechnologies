import { useId, useMemo, useRef } from "react";
import {
  Bold,
  Heading,
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

const ToolbarIcon = ({ icon: Icon }) => <Icon className="h-4 w-4" strokeWidth={2.2} />;

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
              `<img src="${escapeHtml(url)}" alt="${escapeHtml(alt)}" style="max-width:100%;height:auto;" />`,
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
        <select className="ql-header">
          <option value="">Normal</option>
          <option value="1">Heading 1</option>
          <option value="2">Heading 2</option>
          <option value="3">Heading 3</option>
          <option value="4">Heading 4</option>
          <option value="5">Heading 5</option>
          <option value="6">Heading 6</option>
        </select>
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
          className={`ql-insertImage ${toolbarButtonClassName}`}
          aria-label="Add Image"
          title="Image"
        >
          <ToolbarIcon icon={ImagePlus} />
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

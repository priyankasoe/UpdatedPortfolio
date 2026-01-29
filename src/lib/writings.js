import { parseCsv } from "./parseCsv";

const normalizeContent = (content) => {
  if (!content) return "";
  return content.replace(/\\n/g, "\n");
};

export const formatWritingDate = (dateString) => {
  if (!dateString) return "";
  const parsed = new Date(dateString);
  if (Number.isNaN(parsed.getTime())) return dateString;
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const getWritingExcerpt = (content, maxLength = 160) => {
  if (!content) return "";
  const normalized = content.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength - 1).trim()}…`;
};

export const parseWritings = (text) => {
  const rows = parseCsv(text);
  const dataRows = rows.slice(1);

  return dataRows
    .map((row) => {
      const [id, title, date, preview, content] = row;
      if (!id) return null;

      return {
        id: id.trim(),
        title: title ? title.trim() : "",
        date: date ? date.trim() : "",
        preview: preview ? preview.trim() : "",
        content: normalizeContent(content),
      };
    })
    .filter(Boolean);
};

export function assetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path) return path;
  if (/^https?:\/\//i.test(path) || path.startsWith("data:") || path.startsWith("mailto:")) return path;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

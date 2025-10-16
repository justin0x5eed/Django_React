const DEFAULT_API_BASE_URL = "http://localhost:8000";

function normalizeBaseUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export function getApiBaseUrl() {
  const envBaseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL ?? DEFAULT_API_BASE_URL;

  return normalizeBaseUrl(envBaseUrl);
}

export function getArticlesEndpoint() {
  return `${getApiBaseUrl()}/api/articles/`;
}

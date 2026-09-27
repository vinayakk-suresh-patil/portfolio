export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/**
 * Returns the proper absolute path for static assets, taking into account
 * the basePath when hosted on subpaths like GitHub Pages (/portfolio).
 */
export function getAssetPath(path: string): string {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  // Avoid double prefixing if path already starts with basePath
  if (basePath && cleanPath.startsWith(basePath)) {
    return cleanPath
  }
  return `${basePath}${cleanPath}`
}

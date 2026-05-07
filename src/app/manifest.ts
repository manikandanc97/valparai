import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Valparai Wanderer Tours',
    short_name: 'Valparai Wanderer',
    description: 'Authentic Local Tour Packages in Valparai',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a5d1a', // A forest green color matching the Valparai theme
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

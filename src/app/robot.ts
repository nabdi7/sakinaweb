import type { MetadataRoute } from 'next/types'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            //   disallow: ['/private/', '/admin/'],
        },
        sitemap: 'https://sakinaapp.com/sitemap.xml',
    }
}
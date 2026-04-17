import {defineLocations} from 'sanity/presentation'
import type {PresentationPluginOptions} from 'sanity/presentation'

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    homepage: defineLocations({
      select: {title: 'heroHeading'},
      resolve: () => ({
        locations: [{title: 'Homepage', href: '/'}],
      }),
    }),
    siteSettings: defineLocations({
      select: {title: 'companyName'},
      resolve: () => ({
        locations: [{title: 'Homepage', href: '/'}],
      }),
    }),
    servicePage: defineLocations({
      select: {title: 'title', slug: 'slug.current'},
      resolve: (doc) => ({
        locations: [
          {title: doc?.title || 'Palvelusivu', href: `/palvelut/${doc?.slug}`},
          {title: 'Homepage', href: '/'},
        ],
      }),
    }),
  },
}

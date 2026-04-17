import {defineType, defineField} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Etusivu',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Yläosa (Hero)'},
    {name: 'marquee', title: 'Liikkuva teksti'},
    {name: 'services', title: 'Palvelut'},
    {name: 'whyPreanta', title: 'Miksi Preanta'},
    {name: 'process', title: 'Prosessi'},
    {name: 'cta', title: 'Yhteydenotto'},
  ],

  fields: [
    // ── Hero ──
    defineField({
      name: 'heroTag',
      title: 'Tunniste',
      description: 'Pieni teksti otsikon yläpuolella, esim. "Tervetuloa"',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Pääotsikko',
      description: 'Kirjoita korostettava sana *tähtien* väliin, esim. "Rakennamme *tulevaisuutta*"',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Kuvaus',
      description: 'Lyhyt esittelyteksti pääotsikon alle',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Pääpainikkeen teksti',
      description: 'Esim. "Ota yhteyttä"',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaLink',
      title: 'Pääpainikkeen linkki',
      description: 'Esim. "#yhteystiedot" tai "https://..."',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSecondaryCtaText',
      title: 'Toisen painikkeen teksti',
      description: 'Esim. "Lue lisää"',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSecondaryCtaLink',
      title: 'Toisen painikkeen linkki',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Pääkuva',
      description: 'Yläosan taustakuva tai pääkuva',
      type: 'image',
      options: {hotspot: true},
      group: 'hero',
    }),
    defineField({
      name: 'heroStats',
      title: 'Tunnusluvut',
      description: 'Esim. "150+ asiakasta", "10v kokemusta"',
      type: 'array',
      group: 'hero',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'number', title: 'Luku', type: 'string'}),
            defineField({name: 'label', title: 'Selite', type: 'string'}),
          ],
          preview: {
            select: {title: 'number', subtitle: 'label'},
          },
        },
      ],
    }),

    // ── Marquee ──
    defineField({
      name: 'marqueeItems',
      title: 'Liikkuvan tekstin sanat',
      description: 'Lisää sanoja jotka pyörivät sivun poikki',
      type: 'array',
      group: 'marquee',
      of: [{type: 'string'}],
    }),

    // ── Services ──
    defineField({
      name: 'servicesTag',
      title: 'Tunniste',
      description: 'Pieni teksti osion yläpuolella',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'servicesTitle',
      title: 'Osion otsikko',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'servicesDescription',
      title: 'Osion kuvaus',
      type: 'text',
      rows: 2,
      group: 'services',
    }),
    defineField({
      name: 'serviceCards',
      title: 'Palvelukortit',
      description: 'Lisää palvelut korteiksi',
      type: 'array',
      group: 'services',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'num', title: 'Numero', type: 'string'}),
            defineField({name: 'title', title: 'Palvelun nimi', type: 'string'}),
            defineField({name: 'description', title: 'Kuvaus', type: 'text', rows: 2}),
            defineField({name: 'slug', title: 'Linkki palvelusivulle', description: 'URL-tunniste, esim. "brodeeraus"', type: 'string'}),
            defineField({name: 'image', title: 'Kuva', type: 'image', options: {hotspot: true}}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'num', media: 'image'},
          },
        },
      ],
    }),

    // ── Why Preanta ──
    defineField({
      name: 'whyTag',
      title: 'Tunniste',
      type: 'string',
      group: 'whyPreanta',
    }),
    defineField({
      name: 'whyTitle',
      title: 'Osion otsikko',
      type: 'string',
      group: 'whyPreanta',
    }),
    defineField({
      name: 'whyDescription',
      title: 'Osion kuvaus',
      type: 'text',
      rows: 2,
      group: 'whyPreanta',
    }),
    defineField({
      name: 'whyCards',
      title: 'Vahvuudet',
      description: 'Lisää Preantan vahvuudet korteiksi',
      type: 'array',
      group: 'whyPreanta',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Otsikko', type: 'string'}),
            defineField({name: 'description', title: 'Kuvaus', type: 'text', rows: 2}),
          ],
          preview: {
            select: {title: 'title'},
          },
        },
      ],
    }),

    // ── Process ──
    defineField({
      name: 'processTag',
      title: 'Tunniste',
      type: 'string',
      group: 'process',
    }),
    defineField({
      name: 'processTitle',
      title: 'Osion otsikko',
      type: 'string',
      group: 'process',
    }),
    defineField({
      name: 'processDescription',
      title: 'Osion kuvaus',
      type: 'text',
      rows: 2,
      group: 'process',
    }),
    defineField({
      name: 'processSteps',
      title: 'Vaiheet',
      description: 'Lisää prosessin vaiheet järjestyksessä',
      type: 'array',
      group: 'process',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'num', title: 'Numero', type: 'string'}),
            defineField({name: 'title', title: 'Vaiheen nimi', type: 'string'}),
            defineField({name: 'description', title: 'Kuvaus', type: 'text', rows: 2}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'num'},
          },
        },
      ],
    }),

    // ── CTA ──
    defineField({
      name: 'ctaTag',
      title: 'Tunniste',
      type: 'string',
      group: 'cta',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'Otsikko',
      description: 'Kirjoita korostettava sana *tähtien* väliin',
      type: 'string',
      group: 'cta',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'Kuvaus',
      type: 'text',
      rows: 2,
      group: 'cta',
    }),
    defineField({
      name: 'ctaEmailButtonText',
      title: 'Sähköpostipainikkeen teksti',
      description: 'Esim. "Lähetä sähköpostia"',
      type: 'string',
      group: 'cta',
    }),
    defineField({
      name: 'ctaAddress',
      title: 'Osoite',
      type: 'string',
      group: 'cta',
    }),
    defineField({
      name: 'ctaHours',
      title: 'Aukioloajat',
      type: 'string',
      group: 'cta',
    }),
  ],

  preview: {
    prepare() {
      return {title: 'Etusivu'}
    },
  },
})

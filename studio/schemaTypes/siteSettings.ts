import {defineType, defineField} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Sivuston asetukset',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Yrityksen nimi',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      description: 'Yrityksen logo (näkyy yläpalkissa ja alatunnisteessa)',
      type: 'image',
    }),
    defineField({
      name: 'phone',
      title: 'Puhelinnumero',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Sähköposti',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Osoite',
      type: 'string',
    }),
    defineField({
      name: 'businessHours',
      title: 'Aukioloajat',
      type: 'string',
    }),
    defineField({
      name: 'footerDescription',
      title: 'Alatunnisteen kuvaus',
      description: 'Lyhyt teksti yrityksen logon alle alatunnisteessa',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'copyrightText',
      title: 'Tekijänoikeusteksti',
      description: 'Esim. "2026 Preanta Oy · Y-tunnus 2720451-389"',
      type: 'string',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook-osoite',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram-osoite',
      type: 'url',
    }),
    defineField({
      name: 'navLinks',
      title: 'Valikon linkit',
      description: 'Yläpalkin navigointilinkit',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Teksti', type: 'string'}),
            defineField({name: 'href', title: 'Linkki', type: 'string'}),
          ],
          preview: {
            select: {title: 'label', subtitle: 'href'},
          },
        },
      ],
    }),
    defineField({
      name: 'navCtaText',
      title: 'Yläpalkin painikkeen teksti',
      description: 'Esim. "Ota yhteyttä"',
      type: 'string',
    }),
    defineField({
      name: 'navCtaLink',
      title: 'Yläpalkin painikkeen linkki',
      type: 'string',
    }),
    defineField({
      name: 'footerServiceLinks',
      title: 'Alatunnisteen palvelulinkit',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Teksti', type: 'string'}),
            defineField({name: 'href', title: 'Linkki', type: 'string'}),
          ],
          preview: {select: {title: 'label'}},
        },
      ],
    }),
    defineField({
      name: 'footerCompanyLinks',
      title: 'Alatunnisteen yrityslinkit',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Teksti', type: 'string'}),
            defineField({name: 'href', title: 'Linkki', type: 'string'}),
          ],
          preview: {select: {title: 'label'}},
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Sivuston asetukset'}
    },
  },
})

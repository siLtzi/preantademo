import {defineType, defineField} from 'sanity'

export const servicePage = defineType({
  name: 'servicePage',
  title: 'Palvelusivut',
  type: 'document',
  icon: () => '🛠️',
  groups: [
    {name: 'hero', title: '🏠 Yläosa', default: true},
    {name: 'content', title: '📝 Sisältö'},
    {name: 'features', title: '✅ Ominaisuudet'},
    {name: 'process', title: '📋 Työvaiheet'},
    {name: 'gallery', title: '📷 Kuvat'},
    {name: 'seo', title: '🔍 SEO'},
  ],
  fields: [
    // ── Hero group ──
    defineField({
      name: 'title',
      title: 'Palvelun nimi',
      description: 'Esim. "Brodeeraus" — näkyy sivun isona otsikkona',
      type: 'string',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Sivun osoite',
      description: 'Luodaan automaattisesti nimestä. Tämä on osa nettiosoitetta, esim. preanta.fi/palvelut/brodeeraus',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTagline',
      title: 'Tunnuslause',
      description: 'Lyhyt iskevä lause otsikon yläpuolelle, esim. "Laadukasta brodeerausta Oulusta"',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Yläosan kuva',
      description: 'Iso kuva sivun ylälaidassa tekstin vieressä. Suositeltu koko: 1200×900 pikseliä.',
      type: 'image',
      options: {hotspot: true},
      group: 'hero',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Esittelyteksti',
      description: 'Muutaman lauseen pituinen teksti joka kuvailee palvelua. Näkyy heti otsikon alla.',
      type: 'text',
      rows: 4,
      group: 'hero',
    }),
    defineField({
      name: 'ctaText',
      title: 'Painikkeen teksti',
      description: 'Yhteydenottopainikkeen teksti, esim. "Kysy tarjous brodeerauksesta"',
      type: 'string',
      group: 'hero',
    }),

    // ── Content group ──
    defineField({
      name: 'introHeading',
      title: 'Esittelyosion otsikko',
      description: 'Otsikko tarkemmalle palvelukuvaukselle, esim. "Miksi valita brodeeraus?"',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'introText',
      title: 'Esittelyosion teksti',
      description: 'Pidempi teksti joka kertoo palvelusta tarkemmin. Voi olla useita kappaleita.',
      type: 'text',
      rows: 6,
      group: 'content',
    }),
    defineField({
      name: 'introImage',
      title: 'Esittelyosion kuva',
      description: 'Kuva esittelytekstin vieressä. Suositeltu koko: 800×600 pikseliä.',
      type: 'image',
      options: {hotspot: true},
      group: 'content',
    }),
    defineField({
      name: 'highlightHeading',
      title: 'Nostokuva-osion otsikko',
      description: 'Otsikko suurelle kuvalliselle nostoalueelle, esim. "Brodeeraus kestää vuosia"',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'highlightText',
      title: 'Nostokuva-osion teksti',
      description: 'Lyhyt teksti ison kuvan päällä tai vieressä.',
      type: 'text',
      rows: 3,
      group: 'content',
    }),
    defineField({
      name: 'highlightImage',
      title: 'Nostokuva',
      description: 'Suuri kuva joka luo ammattimaisen vaikutelman. Suositeltu koko: 1400×600 pikseliä.',
      type: 'image',
      options: {hotspot: true},
      group: 'content',
    }),

    // ── Features group ──
    defineField({
      name: 'featuresHeading',
      title: 'Ominaisuuksien otsikko',
      description: 'Esim. "Mitä brodeerauspalvelumme sisältää" — jos jätetään tyhjäksi, näkyy "Mitä saat"',
      type: 'string',
      group: 'features',
    }),
    defineField({
      name: 'features',
      title: 'Ominaisuudet',
      description: 'Palvelun keskeiset ominaisuudet — näkyvät kauniina kortteina. Lisää 3–6 kappaletta.',
      type: 'array',
      group: 'features',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Otsikko', type: 'string', description: 'Esim. "Kestävä jälki"'}),
            defineField({name: 'description', title: 'Kuvaus', type: 'text', rows: 2, description: 'Lyhyt kuvaus, 1–2 lausetta.'}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        },
      ],
    }),

    // ── Process group ──
    defineField({
      name: 'process',
      title: 'Työvaiheet',
      description: 'Näin palvelu etenee tilauksesta toimitukseen. Lisää 3–5 vaihetta.',
      type: 'array',
      group: 'process',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Vaiheen nimi', type: 'string', description: 'Esim. "Lähetä logo"'}),
            defineField({name: 'description', title: 'Kuvaus', type: 'text', rows: 2, description: 'Mitä tässä vaiheessa tapahtuu.'}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        },
      ],
    }),

    // ── Gallery group ──
    defineField({
      name: 'gallery',
      title: 'Kuvagalleria',
      description: 'Työnäytteitä ja esimerkkejä. Lisää kuvia valmiista töistä — asiakas näkee osaamistasi!',
      type: 'array',
      group: 'gallery',
      of: [{type: 'image', options: {hotspot: true}}],
    }),

    // ── SEO group ──
    defineField({
      name: 'seoTitle',
      title: 'Sivun otsikko hakukoneille',
      description: 'Näkyy selaimen välilehdessä ja Googlen hakutuloksissa. Jätä tyhjäksi käyttääksesi palvelun nimeä.',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Sivun kuvaus hakukoneille',
      description: 'Lyhyt kuvaus joka näkyy Googlen hakutuloksissa. 140–160 merkkiä on ihanteellinen.',
      type: 'text',
      rows: 2,
      group: 'seo',
      validation: (Rule) => Rule.max(200).warning('Suositellaan alle 160 merkkiä hakukoneoptimoinnin vuoksi.'),
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'shortDescription', media: 'heroImage'},
  },
})

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './studio/schemaTypes'
import {resolve} from './studio/lib/resolve'

export default defineConfig({
  projectId: 'oaknpc0d',
  dataset: 'production',
  title: 'Preanta — Hallintapaneeli',
  plugins: [
    structureTool({
      title: 'Sisältö',
      structure: (S) =>
        S.list()
          .title('Sisältö')
          .items([
            S.listItem()
              .title('🏠 Etusivu')
              .id('homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),
            S.divider(),
            S.listItem()
              .title('🛠️ Palvelusivut')
              .id('servicePages')
              .child(
                S.documentTypeList('servicePage')
                  .title('Palvelusivut')
                  .defaultOrdering([{field: 'title', direction: 'asc'}])
              ),
            S.divider(),
            S.listItem()
              .title('⚙️ Sivuston asetukset')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
          ]),
    }),
    presentationTool({
      title: 'Esikatselu',
      resolve,
      previewUrl: {
        initial: 'http://localhost:4321',
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})

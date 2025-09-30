import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
   basePath: '/studio',
  name: 'default',
  title: 'promo',

  projectId: 'nnn9w8nx',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
     
  },
   useCdn: false,
})

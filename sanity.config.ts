import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
    name: 'default',
    title: 'SNAID Foundation',

    projectId: 'hppwja2l',
    dataset: 'production',

    basePath: '/studio',

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})

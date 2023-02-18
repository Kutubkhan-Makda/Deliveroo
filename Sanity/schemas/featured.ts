import {defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu Categories',
  type: 'document',
  fields: [
    {
      name:'name',
      type:'string',
      title:'Featured Category Name',
      validation:(rule) => rule.required(),
    },
    {
      name:'short_description',
      type:'string',
      title:'Short description',
      validation:(rule) => rule.max(200),
    },
    {
      name:'restaurants',
      type:'array',
      title:'Restaurants',
      of:[{type:'reference',to:[{type:'restaurant'}]}],
    },
  ]
})

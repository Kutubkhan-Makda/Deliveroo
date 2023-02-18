import {defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name:'name',
      type:'string',
      title:'category name',
      validation:(rule) => rule.required(),
    },
    {
      name:'image',
      type:'image',
      title:'Image of Category',
    },
  ],
})

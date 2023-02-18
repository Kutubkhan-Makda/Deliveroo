import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
        name:'name',
        type:'string',
        title:'Reastaurent name'
    }
  ],
})

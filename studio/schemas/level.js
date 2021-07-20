export default {
  name: 'level',
  title: 'Level',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image'
    },
    {
      name: 'characters',
      title: 'Character to Find',
      type: 'array',
      of: [
        {type: 'character'}
      ]
    }
  ]
}
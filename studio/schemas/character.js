export default {
  name: 'character',
  title: 'Character',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'previewImage',
      title: 'Preview Image',
      type: 'image'
    },
    {
      name: 'positionX',
      title: 'Position X',
      type: 'number'
    },
    {
      name: 'positionY',
      title: 'Position Y',
      type: 'number'
    }
  ]
}
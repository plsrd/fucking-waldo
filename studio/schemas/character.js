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
      type: 'object',
      fields: [
        {
          name: 'startX',
          title: 'Start X',
          type: 'number'
        },
        {
          name: 'endX',
          title: 'End X',
          type: 'number'
        }
      ]
    },
    {
      name: 'positionY',
      title: 'Position Y',
      type: 'object',
      fields: [
        {
          name: 'startY',
          title: 'Start Y',
          type: 'number'
        },
        {
          name: 'endY',
          title: 'End Y',
          type: 'number'
        }
      ]
    },
  ]
}
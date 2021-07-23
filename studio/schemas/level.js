export default {
  name: 'level',
  title: 'Level',
  type: 'document',
  fields: [
    {
      name: 'number',
      title: 'Level Number',
      type: 'number'
    },
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
    },
    {
      name: 'highScores',
      title: 'High Scores',
      type: 'levelScore'
    }
  ],
  preview: {
    select: {
      title: 'number'
    },
    prepare({ title }) {
      return {
        title: `Level ${title}`
      }
    }
  }
}
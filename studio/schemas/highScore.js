export default {
  name: 'highScore',
  title: 'High Scores',
  type: 'document',
  fields: [
    {
      name: 'levels',
      title: 'Levels',
      type: 'array',
      of: [
        { type: 'levelScore'}
      ]
    }
  ],
  preview: {
    prepare(){
      return {
        title: `High Scores`,
      }
    }
  }
}
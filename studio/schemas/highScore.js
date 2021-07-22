export default {
  name: 'highScore',
  title: 'High Scores',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
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
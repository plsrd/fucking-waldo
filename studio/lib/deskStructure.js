import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('High Scores')
        .child(
          S.document()
            .schemaType('highScore')
            .documentId('highScore')
        ),
      ...S.documentTypeListItems().filter(listItem => !['highScore'].includes(listItem.getId()))
    ])
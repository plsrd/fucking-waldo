export const levelQuery = `
  *[_type == 'level' && number == $number]{
    number,
    mainImage,
    characters[]{
      name,
      previewImage,
      positionX,
      positionY
    },
    highScores
  }[0]`

  export const allLevelsQuery = `
    *[_type == 'level']{
      number,
      mainImage
    }
  `

  export const highScoreQuery = `
    *[_type == 'level' number == $number]{
      playerName,
      time
    }[0]
  `

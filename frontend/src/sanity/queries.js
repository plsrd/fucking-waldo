export const levelQuery = `
  *[_type == 'level']{
    number,
    mainImage,
    characters[]{
      name,
      previewImage,
      positionX,
      positionY
    }
  }[0]`   

export const levelQuery = `
  *[_type == 'level' && number == $number]{
    number,
    mainImage,
    characters[]{
      name,
      previewImage,
      positionX,
      positionY
    }
  }[0]`   

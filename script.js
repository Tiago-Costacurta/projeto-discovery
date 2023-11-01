function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar tag image
  const img = document.querySelector("#profile img")

  //substituir a imagem

  if (html.classList.contains("light")) {
    // se tiver ligth mode adicionar a imagem light
    img.setAttribute("src", "./assets/foto.jpg")
    img.setAttribute(
      "alt",
      "Avatar"
    )
  } else {
    //se tiver sem light mode manter imagem normal
    img.setAttribute("src", "./assets/foto.jpg")
    img.setAttribute(
      "alt",
      "avatar"
    )
  }
}

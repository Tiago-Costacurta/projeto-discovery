function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar tag image
  const img = document.querySelector("#profile img")

  //substituir a imagem

  if (html.classList.contains("light")) {
    // se tiver ligth mode adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando oculos e camisa preta, sem barba e fundo colorido"
    )
  } else {
    //se tiver sem light mode manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando oculos e camisa preta, barba e fundo amarelo"
    )
  }
}

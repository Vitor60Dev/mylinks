function ToggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //pegar tag img
  const img = document.querySelector("#profile img");

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/assets/avatar-light.png");
  } else {
    //se tiver night mode, adicionar imagem night
    img.setAttribute("src", "./assets/assets/avatar.png");
  }
}

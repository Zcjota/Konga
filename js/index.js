// archivo: js/index.js
import KongaScene from './js/KongaScene.js'

class MainController {
  constructor(container) {
    this.container = container

    // — Opcional: si quieres seguir usando la escena, descomenta estas líneas
    // const scene = new KongaScene()
    // scene.element.style.display = "none"
    // container.appendChild(scene.element)
    // window.addEventListener("resize", this.handleResize.bind(this))
    // this.scene = scene
    // this.handleResize()

    // Crear botón “Trust me”
    const button = document.createElement("button")
    button.textContent = "Trust me"
    button.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 1em 2em;
      font-size: 1.2em;
      cursor: pointer;
    `
    button.addEventListener("click", () => {
      // Adiós botón
      button.remove()
      // Vuelo directo al video, instante 74s
      window.location.href = 'https://youtu.be/ibmrEMeCkSo?t=74'
    })

    container.appendChild(button)
  }

  handleResize() {
    // if (this.scene) {
    //   this.scene.size = {
    //     width: Math.floor(window.innerWidth),
    //     height: Math.floor(window.innerHeight)
    //   }
    // }
  }
}

function awake() {
  window.controller = new MainController(document.body)
}

document.addEventListener("DOMContentLoaded", awake)

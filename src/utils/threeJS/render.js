import { WebGLRenderer } from "three";


export default ({ sizes, canvas, scene, camera }) => {

  const renderer = new WebGLRenderer({ canvas })
  renderer.setSize(sizes.width, sizes.height)
  renderer.render(scene, camera)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  return renderer
}


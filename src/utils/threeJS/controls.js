import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default ({ canvas, camera }) => {
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true

  return controls
}

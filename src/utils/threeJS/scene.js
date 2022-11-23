import { Scene, AxesHelper } from 'three'
import { config } from './const'

export default ({ camera, mesh }) => {
  const scene = new Scene()

  if (config.useAxesHelper) {
    const { size } = config.useAxesHelper
    scene.add(new AxesHelper(size))
  }

  scene.add(camera)
  scene.add(mesh)

  return scene
}

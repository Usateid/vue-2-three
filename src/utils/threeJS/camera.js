/**
 *          FOV  - camera view's vertical amplitude angle in degrees - https://cdn.mos.cms.futurecdn.net/dLtSzUFN8o9unJa5rRKBL7.jpg
 * ASPECT RATIO  - width divided by the height.
 *         NEAR  - how close the camera can see - https://twitter.com/FreyaHolmer/status/799602767081848832
 *          FAR  - how far the camera can see - https://twitter.com/Snapman_I_Am/status/800567120765616128
 */

import { PerspectiveCamera } from 'three'

/**
 *
 * @param fov - field of view, use between 45 and 75
 * @param position - position of the camera - x, y, z
 * @param near - render value from the start of the camera
 * @param far - render value from the end of the camera
 * @returns {PerspectiveCamera}
 */
export default ({ sizes, fov = 75, position, near = 0.1, far= 100 }) => {
 let camera = new PerspectiveCamera(fov, sizes.width / sizes.height, near, far)

 if (position && (position.x || position.y || position.z)) {
  const { x,y,z } = position
  if (x) {  camera.position.x = x }
  if (y) {  camera.position.y = y }
  if (z) {  camera.position.z = z }
 }
 return camera
}


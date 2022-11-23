import gsap from 'gsap'

export default (mesh) => {
  gsap.to(mesh.position, { duration: 10, delay: 0, x: 2 })
}

<template>
  <canvas ref="three-canvas" class="webgl"/>
</template>

<script>
import generateScene from "@/utils/threeJS/scene";
import generateCamera from "@/utils/threeJS/camera";
import renderCanvas from "@/utils/threeJS/render";
import generateControls from "@/utils/threeJS/controls";
// import GSAP from "@/utils/threeJS/GSAP";

import * as THREE from 'three'
export default {
  name: 'three-js',
  data () {
    // Object
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    const mesh = new THREE.Mesh(geometry, material)


    mesh.scale.set(2, 0.25, 0.5)
    mesh.rotation.x = Math.PI * 0.25
    mesh.rotation.y = Math.PI * 0.25

    const sizes = { width: window.innerWidth, height: window.innerHeight }

    const camera = generateCamera({ sizes, position: { z : 3 }})
    const scene = generateScene({ mesh, camera })
    // GSAP(mesh)
    return {
      sizes,
      camera,
      scene,
      canvas: null,
      renderer: null,
      controls: null,
      clock: new THREE.Clock(),
    }
  },
  created() {
    window.addEventListener("resize", this.resizeHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  mounted() {
    this.canvas = this.$refs['three-canvas']
    this.renderer = renderCanvas({ sizes: this.sizes, canvas: this.canvas, scene: this.scene, camera: this.camera })
    this.controls = generateControls({ canvas: this.canvas, camera: this.camera })
    this.update()
  },
  methods: {
    resizeHandler () {
      this.sizes = { width: window.innerWidth, height: window.innerHeight }

      this.camera.aspect = this.sizes.width / this.sizes.height
      this.camera.updateProjectionMatrix()
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      this.renderer.setSize(this.sizes.width, this.sizes.height)
    },
    update () {
      this.controls.update()
      this.renderer.render(this.scene, this.camera)
      window.requestAnimationFrame(this.update)
    }
  },
}
</script>

<style scoped>
.webgl
{
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
  cursor: grab;
}
</style>

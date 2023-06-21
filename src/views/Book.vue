<script setup lang="ts">
import { onMounted } from 'vue';
import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const canvas = document.getElementById('container') as HTMLCanvasElement;
  const engine = new BABYLON.Engine(canvas, true);

  const createScene = () => {
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = BABYLON.Color4.FromHexString('#ed5d4d');

    BABYLON.SceneLoader.ImportMeshAsync('', '/', 'book.glb').then((meshes) => {
      const animationGroup = meshes.animationGroups[0]
      animationGroup.stop()

      const mesh = meshes.meshes[0];
      const camera = scene.cameras[0] as BABYLON.ArcRotateCamera;

      ScrollTrigger.create({
        trigger: canvas,
        start: 'top top',
        end: 'bottom top',
        onUpdate: self => {
          const progress = self.progress * animationGroup.to
          animationGroup.start(false, 1.0, progress, progress, true)

          camera.radius = 25 - 20 * self.progress;
        }
      })


      const transformNode = new BABYLON.TransformNode('transformNode', scene);
      transformNode.position = mesh.position;
      mesh.parent = transformNode;


      let lastX: null | number = null;
      let lastY: null | number = null;
      canvas.addEventListener('mousemove', (event) => {
        if (lastX === null || lastY === null) {
          lastX = event.clientX;
          lastY = event.clientY;
          return;
        }

        const deltaX = event.clientX - lastX;
        const deltaY = event.clientY - lastY;

        transformNode.rotation.y -= deltaX * 0.0002;
        transformNode.rotation.x += deltaY * 0.0002;

        lastX = event.clientX;
        lastY = event.clientY;
      })
    });

    new BABYLON.ArcRotateCamera(
      'camera',
      Math.PI / 2,
      Math.PI / 2,
      25,
      new BABYLON.Vector3(0, 1, 0)
    )

    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1, 1, 0), scene);
    light.intensity = 0.2;

    return scene;
  }

  const scene = createScene();

  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener('resize', () => {
    engine.resize();
  });
})

</script>

<template>
  <div class="container-box">
    <canvas id="container" touch-action="none" style="width: 100vw; height: 100vh;"></canvas>
  </div>
</template>

<style lang="scss" scoped>
.container-box {
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: start;
  position: sticky;
  top: 0;

  &>canvas {
    position: sticky;
    top: 0;
  }
}
</style>

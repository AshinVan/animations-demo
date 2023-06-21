<script setup lang="ts">
import { onMounted } from 'vue';
import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import gsap from 'gsap';
import GSDevTools from 'gsap/GSDevTools';
import sheep1 from '@/assets/animations/sheep1.json';
import sheep2 from '@/assets/animations/sheep2.json';

let scene: BABYLON.Scene;
let animationGroup1: BABYLON.AnimationGroup;
let animationGroup2: BABYLON.AnimationGroup;
let isAnimation1 = true;

gsap.registerPlugin(GSDevTools);

const t1 = gsap.timeline({ id: 'timeline' });
console.log('🚀 ~ t1:', t1);

const tools = GSDevTools.create({
  id: 'tools',
  animation: t1,
  css: 'width: 50%',
  loop: true,
  timeScale: 1,
});
console.log('🚀 ~ tools:', tools);

onMounted(() => {
  const canvas = document.getElementById('container') as HTMLCanvasElement;
  const engine = new BABYLON.Engine(canvas, true);

  const createScene = () => {
    const scene = new BABYLON.Scene(engine);

    BABYLON.SceneLoader.ImportMeshAsync('', '/', 'sheep-empty.glb').then((meshes) => {
      console.log('🚀 ~ meshes:', meshes);
      console.log('🚀 ~ scene:', scene);

      animationGroup1 = BABYLON.AnimationGroup.Parse(sheep1, scene);
      animationGroup2 = BABYLON.AnimationGroup.Parse(sheep2, scene);

      const mesh = meshes.meshes[1];
      const manager = new BABYLON.ActionManager(scene);
      const action = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnLeftPickTrigger, onClick)

      mesh.actionManager = manager;
      mesh.actionManager.registerAction(action);

      timelineTo(animationGroup1);
    });

    new BABYLON.ArcRotateCamera(
      'camera',
      Math.PI / 2,
      Math.PI / 2,
      5,
      new BABYLON.Vector3(0, 1, 0)
    );

    new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1, 1, 0), scene);
    return scene;
  };

  scene = createScene();

  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener('resize', () => {
    engine.resize();
  });
});

const timelineTo = (animation: BABYLON.AnimationGroup) => {
  t1.to(animation, {
    duration: 1.5,
    onUpdate: () => {
      const currntFrame = t1.progress() * animation.to;
      animation.start(false, 1.0, currntFrame, currntFrame);
    },
    onReverseComplete: () => {
      onChangeAnimetion();
    },
  });
  return t1;
};

const onChangeAnimetion = () => {
  t1.clear();
  t1.timeScale(1);

  if (isAnimation1)
    timelineTo(animationGroup2)
  else
    timelineTo(animationGroup1)

  isAnimation1 = !isAnimation1;
};

const onClick = () => {
  console.log('onClick');
  t1.timeScale(-5);
  t1.reverse();

  const camera = scene.cameras[0] as BABYLON.ArcRotateCamera;
  gsap.to(camera, {
    alpha: camera.alpha - 2 * Math.PI,
    duration: 0.3,
  });
};
</script>

<template>
  <canvas id="container" class="container" touch-action="none"></canvas>
</template>

<style scoped>
.container {
  width: 100%;
}
</style>

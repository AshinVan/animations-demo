<script setup lang="ts">
import { onMounted } from 'vue';
import * as BABYLON from '@babylonjs/core/Legacy/legacy';

import SheepHuman from '@/assets/animations/sheepHuman.json';
import SheepThree from '@/assets/animations/sheepThree.json';

import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { createAnimation, writeAnimationToGLB } from '@/utils/animationHelper';

let scene: BABYLON.Scene;

onMounted(() => {
  const canvas = document.getElementById('container') as HTMLCanvasElement;
  const engine = new BABYLON.Engine(canvas, true);

  const createScene = () => {
    const scene = new BABYLON.Scene(engine);

    BABYLON.SceneLoader.ImportMeshAsync('', '/', 'meebits.glb', scene)
      .then((meshes) => {
        const skeletons = meshes.skeletons;
        console.log("🚀 ~ skeletons:", skeletons);
        console.log("🚀 ~ meshes:", meshes);
        console.log("🚀 ~ scene:", scene)

        const animationGroup = BABYLON.AnimationGroup.Parse(SheepHuman, scene);
        animationGroup.start(true)

        // scene.createDefaultCameraOrLight(true, true, true);
        // scene.createDefaultEnvironment();
        // scene.beginAnimation(skeletons[0], 0, 100, true, 1.0);
      })

    const camera = new BABYLON.ArcRotateCamera(
      'camera',
      Math.PI / 2,
      Math.PI / 2,
      5,
      new BABYLON.Vector3(0, 1, 0)
    );
    camera.attachControl(canvas, true);

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

onMounted(async () => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xa0a0a0);
  scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d);
  hemiLight.position.set(0, 20, 0);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff);
  dirLight.position.set(3, 10, 10);
  dirLight.castShadow = true;
  dirLight.shadow.camera.top = 2;
  dirLight.shadow.camera.bottom = - 2;
  dirLight.shadow.camera.left = - 2;
  dirLight.shadow.camera.right = 2;
  dirLight.shadow.camera.near = 0.1;
  dirLight.shadow.camera.far = 40;
  scene.add(dirLight);

  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 3);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  document.getElementById('three_container')?.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.target.set(0, 1, 0);
  controls.update();

  const stats = new Stats();
  document.getElementById('three_container')?.appendChild(stats.dom);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const loader = new GLTFLoader();
  loader.load('/meebits.glb', async (gltf) => {
    const skeletons = new THREE.SkeletonHelper(gltf.scene)
    console.log("🚀 ~ skeletons:", skeletons)

    scene.add(skeletons);

    const bone = skeletons.bones.find((bone) => bone.name === 'HeadBone');

    const rotation = new THREE.Euler();
    rotation.copy(bone!.rotation);

    console.log("🚀 ~ bone:", bone)

    const container = document.getElementById('three_container')
    container?.addEventListener('mousemove', (event) => {
      const x = event.clientX / window.innerWidth * 2 - 1;
      rotation.y = x * Math.PI / 4;

      const y = event.clientY / window.innerHeight * 2 - 1;
      rotation.z = -(y * 0.75);

      bone!.rotation.copy(rotation);
    })

    scene.remove(skeletons);

    const animationClip = THREE.AnimationClip.parse(SheepThree)
    animationClip.tracks.splice(13, 1)

    gltf.animations.push(animationClip)

    const model = gltf.scene
    console.log("🚀 ~ gltf:", gltf)
    const animations = gltf.animations;
    const mixer = new THREE.AnimationMixer(model);
    console.log("🚀 ~ mixer:", mixer)

    for (let i = 0; i < animations.length; i++) {
      const animation = animations[i];
      const action = mixer.clipAction(animation);
      action.play();
    }
    scene.add(model);

    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      mixer.update(clock.getDelta());
      renderer.render(scene, camera);
    }
    animate();
  })

  // ====================

  // const glb = await writeAnimationToGLB()
  // const blob = new Blob([glb], { type: 'application/octet-stream' })
  // const url = URL.createObjectURL(blob)

  // loader.load(url, async (gltf) => {
  //   const skeletons = new THREE.SkeletonHelper(gltf.scene)
  //   console.log("🚀 ~ skeletons:", skeletons)
  //   console.log("🚀 ~ gltf:", gltf)
  //   const model = gltf.scene

  //   const animations = gltf.animations;
  //   const mixer = new THREE.AnimationMixer(model);

  //   for (let i = 0; i < animations.length; i++) {
  //     const animation = animations[i];
  //     const action = mixer.clipAction(animation);
  //     action.play();
  //   }

  //   scene.add(model);

  //   const clock = new THREE.Clock();
  //   function animate() {
  //     requestAnimationFrame(animate);
  //     mixer.update(clock.getDelta());
  //     renderer.render(scene, camera);
  //   }
  //   animate();
  // })
})
</script>

<template>
  <canvas id="container" class="container" touch-action="none"></canvas>
  <div id="three_container" style="cursor: pointer;"></div>
</template>

<style scoped>
.container {
  width: 100%;
}
</style>

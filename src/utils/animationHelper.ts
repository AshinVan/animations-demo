// import * as THREE from 'three';
// import Flying from '../../public/Flying_anims.json';
// import Sad from '../../public/Sad_Idle_anims.json';
// import { GLTFLoader, GLTFParser } from 'three/addons/loaders/GLTFLoader.js';

// import {JSONLoader} from '@loaders.gl/json';
// import {load} from '@loaders.gl/core';
// import {GLBLoader} from '@loaders.gl/gltf';

// import { WebIO, Accessor, BufferUtils } from '@gltf-transform/core';

// export async function createAnimation(type: 'Flying' | 'Sad') {
//   const animationArr = type === 'Flying' ? Flying.animations : Sad.animations;
//   const keyframeTrackArr: THREE.KeyframeTrack[] = []

//   for (const { target, animations } of animationArr) {
//     const { rotateX, rotateY, rotateZ, translate } = animations;

//     if (translate) {
//       const name = `${target}.position`;
//       const times = Object.values(translate.keyTime);
//       const values = Object.values(translate.inTangent);
//       const translateTrack = new THREE.VectorKeyframeTrack(name, times, values);
//       console.log("🚀 ~ translateTrack:", translateTrack)

//       keyframeTrackArr.push(translateTrack);
//     }

//     if (rotateX) {
//       const name = `${target}.quaternion`;
//       const times = Object.values(rotateX.keyTime);
//       const keys = Object.keys(rotateX.keyTime);
//       const quaternionArr = []
//       for (const key of keys) {
//         const quaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(rotateX.inTangent[key], rotateY.inTangent[key], rotateZ.inTangent[key], 'XYZ'));
//         quaternionArr.push(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
//       }
//       const rotateTrack = new THREE.QuaternionKeyframeTrack(name, times, quaternionArr);
//       keyframeTrackArr.push(rotateTrack);
//     }
//   }

//   const animationClip = new THREE.AnimationClip('Flying', -1, keyframeTrackArr);

//   return animationClip;
// }

// export async function writeAnimationToGLB() {
//   const io = new WebIO({credentials: 'include'})
//   const doc = await io.read('meebits.glb');

//   await getAnimationValue()
//   // =====================

//   const flyingAnimation: any = Flying.animations

//   const _times = Object.keys(flyingAnimation[0].animations.translate.keyTime)
//   const times = _times.map((time) => Number(time))
//   const input = doc.createAccessor()
//     .setArray(new Float32Array(times as number[]))
//     .setType(Accessor.Type.SCALAR)

//   const values = Object.values(flyingAnimation[0].animations.translate.inTangent)
//   const output = doc.createAccessor()
//     .setArray(new Float32Array(values as number[]))
//     .setType(Accessor.Type.VEC2)
//   console.log(new Float32Array(values as number[]));

//   const sampler = doc.createAnimationSampler()
//     .setInput(input)
//     .setOutput(output)
//     .setInterpolation('LINEAR')

//   console.log("🚀 ~ sampler:", sampler)

//   const node = doc.getRoot().listNodes().find((node) => node.getName() === 'HipsBone');
//   const channel = doc.createAnimationChannel()
//     .setTargetPath('translation')
//     .setTargetNode(node as any)
//     .setSampler(sampler)
  
//   console.log("🚀 ~ channel:", channel)

//   const animation =  doc.createAnimation('Flying')
//     .addChannel(channel)
//     .addSampler(sampler)
//   console.log("🚀 ~ animation:", animation)

//   // =====================

//   const glb = await io.writeBinary(doc)
//   const json = await io.binaryToJSON(glb)
//   console.log("🚀 ~ json:", json)

//   return glb
// }


// async function getAnimationValue() {
//   // const io = new WebIO({credentials: 'include'});
//   // const doc11 = await io.read('Fox.glb');
//   // console.log("🚀 ~ doc11:", doc11.getRoot().listAnimations())
// }

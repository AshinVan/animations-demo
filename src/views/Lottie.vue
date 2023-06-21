<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import lottie from 'lottie-web'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


const container = ref<HTMLDivElement | null>(null)

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const animation = lottie.loadAnimation({
    container: container.value as HTMLDivElement,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/bloom.json'
  })
  console.log("🚀 ~ animation:", animation)

  ScrollTrigger.create({
    trigger: container.value as HTMLDivElement,
    start: 'top top',
    end: 'bottom top',
    onUpdate: self => animation.goToAndStop(self.progress * animation.totalFrames, true)
  })
})
</script>

<template>
  <div class="container-box">
    <div ref="container"></div>
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

  &>div {
    position: sticky;
    top: 0;
  }
}
</style>

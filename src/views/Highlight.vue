<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const elements = document.querySelectorAll('.text')
  
  elements.forEach((el, index) => {
    const starts = [50, 150, 250, 400, 550, 700]
    const ends = [150, 250, 400, 550, 700, 850]
    ScrollTrigger.create({
      trigger: el,
      start: `top bottom-=${starts[index]}px`,
      end: `bottom bottom-=${ends[index]}`,
      onToggle: self => self.isActive ? el.classList.add('text-active') : el.classList.remove('text-active'),
    })
  })
})
</script>

<template>
  <div class="page1"></div>
  <div class="page2">
    <div class="page2-content">
      <div class="text-box">
        <p class="text">这个常伴你左右的好伙伴，超有能耐。 </p>
        <p class="text">体温感应功能，帮女性洞察自身的健康； </p>
        <p class="text">车祸检测待命，紧急时刻主动呼叫救援； </p>
        <span class="text">
          <span class="wrap">睡眠阶段跟测，让你更了解自己的睡眠</span>
          <span class="wrap">状况； </span>
        </span>
        <span class="text">还有进阶的体能训练 app，为锻炼加分。 </span>
        <span class="text">
          <span class="wrap">就让一个更健康的未来，</span>
          <span class="wrap">更漂亮地开始吧。</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page1 {
  height: 100vh;
  position: sticky;
  top: 0;
  background-color: #000;
}
.page2 {
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  margin-top: 100vh;
  position: sticky;
  top: 0;
  box-sizing: content-box;
  padding-bottom: 300px;

  .page2-content {
    width: 1120px;
    padding: 0 40px;
    margin: 0 auto;
    font-family: 'SF Pro SC';
    letter-spacing: 0em;
    line-height: 1.09375;
    color: #6e6e73;
    font-size: 64px;
    font-weight: 600;
    font-style: normal;;

    p {
      margin: 0;
    }
    
    span {
      white-space: pre-wrap;
    }

    .wrap {
      display: inline-block;
    }

    .text {
      color: #fff;
      opacity: 0.45;
      transition: opacity 200ms ease-in;
    }

    .text-active {
      opacity: 1;
    }
  }
}
</style>

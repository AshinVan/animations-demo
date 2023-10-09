<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const cards = ref([
  {
    src: 'https://img.alicdn.com/imgextra/i3/O1CN01TVWH501KYCEaUxPgv_!!6000000001175-0-tps-480-480.jpg',
    text: '即时沟通',
    x: 477,
    y: 115,
    scale: 0,
    opacity: 0
  },
  {
    src: 'https://img.alicdn.com/imgextra/i1/O1CN01vqBxIP1L5d98G9xJD_!!6000000001248-0-tps-480-480.jpg',
    text: '组织',
    x: 318,
    y: 115,
    scale: 0,
    opacity: 0
  },
  {
    src: 'https://img.alicdn.com/imgextra/i3/O1CN01AKJU3T1tSi2NAFHFP_!!6000000005901-0-tps-480-480.jpg',
    text: '智能人事',
    x: 159,
    y: 115,
    scale: 0,
    opacity: 0
  },
  {
    src: 'https://img.alicdn.com/imgextra/i1/O1CN01E0GR9h1ZXwFI8dRl1_!!6000000003205-0-tps-480-480.jpg',
    text: '组织大脑',
    x: 0,
    y: 115,
    scale: 0,
    opacity: 0
  },
  {
    src: 'https://img.alicdn.com/imgextra/i1/O1CN01sphiAp1Fj7bOKEppz_!!6000000000522-2-tps-480-480.png',
    text: 'OA审批',
    x: -159,
    y: 115,
    scale: 0,
    opacity: 0
  },
  {
    src: 'https://img.alicdn.com/imgextra/i2/O1CN015T9BdZ28Ns5n1A82W_!!6000000007921-0-tps-480-480.jpg',
    text: '邮箱',
    x: -318,
    y: 115,
    scale: 0,
    opacity: 0
  },
  {
    src: 'https://img.alicdn.com/imgextra/i3/O1CN01bc6FKX1OCuHkDC2J7_!!6000000001670-0-tps-480-480.jpg',
    text: 'Teambition',
    x: -477,
    y: 115,
    scale: 0,
    opacity: 0
  },
  {
    src: 'https://img.alicdn.com/imgextra/i1/O1CN01Y936lS1whluhvos2E_!!6000000006340-0-tps-480-480.jpg',
    text: '文档',
    x: 477,
    y: -115,
    scale: 0,
    opacity: 0
  },
  {
    src: 'https://img.alicdn.com/imgextra/i3/O1CN017Wk2Cp1lp8VaSd22U_!!6000000004867-0-tps-480-480.jpg',
    text: '音视频会议',
    x: 318,
    y: -115,
    scale: 0,
    opacity: 0
  },
  {
    src: 'https://img.alicdn.com/imgextra/i4/O1CN016JIoXg1lMHYbmErdR_!!6000000004804-0-tps-240-240.jpg',
    text: '开放平台',
    x: 159,
    y: -115,
    scale: 0,
    opacity: 0
  },
  {
    src: 'https://img.alicdn.com/imgextra/i3/O1CN011GyvMe1of0bAveV4u_!!6000000005251-0-tps-480-480.jpg',
    text: '宜搭',
    x: 0,
    y: -115,
    scale: 0,
    opacity: 0
  },
  {
    src: 'https://img.alicdn.com/imgextra/i2/O1CN01zFSNcP26wYrM09A4S_!!6000000007726-0-tps-480-480.jpg',
    text: '钉闪会',
    x: -159,
    y: -115,
    scale: 0,
    opacity: 0
  },
  {
    src: 'https://img.alicdn.com/imgextra/i2/O1CN0142F9wc23s261dItxf_!!6000000007310-0-tps-480-480.jpg',
    text: '连接器',
    x: -318,
    y: -115,
    scale: 0,
    opacity: 0
  },
  {
    src: 'https://img.alicdn.com/imgextra/i4/O1CN012wi8vZ1xt3HbO0ttd_!!6000000006500-0-tps-480-480.jpg',
    text: '酷应用',
    x: -477,
    y: -115,
    scale: 0,
    opacity: 0
  }
])

onMounted(async () => {
  // 控制彩色方块
  const blocks = document.getElementsByClassName('color_block')
  const blocksArr = Array.from(blocks)

  gsap.to(blocks[0], {
    scrollTrigger: {
      trigger: '.scroll',
      start: 'top bottom-=1200',
      end: 'bottom top',
      onUpdate: (e) => {
        (blocks[0] as HTMLDivElement).style.opacity = `${0.6 * e.progress + 0.4}`;
      }
    }
  })

  blocksArr.forEach((element, index) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: '.scroll',
        start: 'top bottom-=400',
        end: 'bottom top',
        onUpdate: (e) => {
          (element as HTMLDivElement).style.transform = `translate3d(1e-05px, 1e-05px, ${e.progress * 1000 - 200}px)`;
          if (index !== 0) (element as HTMLDivElement).style.opacity = `${0.9 * e.progress + 0.1}`;
        }
      }
    })
  })

  // 控制logo和title
  const logo = document.getElementsByClassName('scroll_animation_icon')[0]
  const title = document.getElementsByClassName('scroll_animation_title')[0]

  gsap.to([logo, title], {
    scrollTrigger: {
      trigger: '.scroll',
      start: 'top bottom-=400',
      end: 'top top+=200',
      onUpdate: (e) => {
        (logo as HTMLDivElement).style.opacity = `${0.1 + e.progress * 0.9}`;
        (title as HTMLDivElement).style.opacity = `${0.2 + e.progress * 0.8}`;
      }
    }
  })
  gsap.to([logo, title], {
    scrollTrigger: {
      trigger: '.scroll',
      start: 'top top+=100',
      end: 'top top-=200',
      onUpdate: (e) => {
        (logo as HTMLDivElement).style.opacity = `${1 - e.progress * 0.9}`;
        (title as HTMLDivElement).style.opacity = `${1 - e.progress * 0.8}`;
      }
    },
  })
  gsap.to([logo, title], {
    scrollTrigger: {
      trigger: '.scroll',
      start: 'top bottom-=400',
      end: 'bottom top',
      onUpdate: (e) => {
        (logo as HTMLDivElement).style.transform =
          `translate3d(1e-05px, ${e.progress * -1600 + 200}px, ${e.progress * 1600 - 800}px) scale(${0.1 + e.progress * 2.9})`;
        (title as HTMLDivElement).style.transform =
          `translate3d(1e-05px, ${e.progress * -1300 + 100}px, ${e.progress * 1600 - 800}px) scale(${0.2 + e.progress * 2.8})`;
      }
    }
  })

  // 控制title文字和背景
  const why = document.getElementsByClassName('scroll_animation_why')[0]
  const resolve = document.getElementsByClassName('scroll_animation_resolve')[0]
  const bg = document.getElementsByClassName('scroll_animation_bg')[0]

  gsap.to([why, resolve], {
    scrollTrigger: {
      trigger: '.scroll',
      start: 'top top',
      end: 'bottom top',
      onUpdate: (e) => {
        (why as HTMLDivElement).style.opacity = `${e.progress}`;
        (resolve as HTMLDivElement).style.opacity = `${e.progress}`;

        (why as HTMLDivElement).style.transform =
          `translate3d(1e-05px, ${364 - e.progress * 364}px, 10px) scale(${0.3 + e.progress * 0.7})`;
        (resolve as HTMLDivElement).style.transform =
          `translate3d(1e-05px, ${335 - e.progress * 335}px, 10px) scale(${0.3 + e.progress * 0.7})`;
      }
    }
  })

  gsap.to(bg, {
    scrollTrigger: {
      trigger: '.scroll',
      start: 'bottom top+=400',
      end: 'bottom top',
      onUpdate: (e) => {
        (bg as HTMLDivElement).style.opacity = `${e.progress}`;
      }
    }
  })

  // 控制功能方块
  ScrollTrigger.create({
    trigger: '.scroll',
    start: 'top top+=600',
    end: 'top top',
    onUpdate: (e) => {
      cards.value[0].y = 115 + e.progress * 13
      cards.value[6].y = 115 + e.progress * 13
      cards.value[7].y = -115 - e.progress * 13
      cards.value[13].y = -115 - e.progress * 13
    }
  })
  ScrollTrigger.create({
    trigger: '.scroll',
    start: 'top top',
    end: 'bottom top',
    onUpdate: (e) => {
      cards.value[0].x = 477 - e.progress * 477
      cards.value[7].x = 477 - e.progress * 477
      cards.value[6].x = e.progress * 477 - 477
      cards.value[13].x = e.progress * 477 - 477

      cards.value[0].y = 138 - e.progress * 138
      cards.value[6].y = 138 - e.progress * 138
      cards.value[7].y = -138 + e.progress * 138
      cards.value[13].y = -138 + e.progress * 138

      cards.value[0].opacity = e.progress
      cards.value[7].opacity = e.progress
      cards.value[6].opacity = e.progress
      cards.value[13].opacity = e.progress
    }
  })
  ScrollTrigger.create({
    trigger: '.scroll',
    start: 'top top+=600',
    end: 'bottom top',
    onUpdate: (e) => {
      cards.value[0].scale = e.progress;
      cards.value[6].scale = e.progress;
      cards.value[7].scale = e.progress;
      cards.value[13].scale = e.progress;
    }
  })


  ScrollTrigger.create({
    trigger: '.scroll',
    start: 'top top+=500',
    end: 'top top-=100',
    onUpdate: (e) => {
      cards.value[1].y = 115 + e.progress * 13
      cards.value[5].y = 115 + e.progress * 13
      cards.value[8].y = -115 - e.progress * 13
      cards.value[12].y = -115 - e.progress * 13
    }
  })
  ScrollTrigger.create({
    trigger: '.scroll',
    start: 'top top-=100',
    end: 'bottom top',
    onUpdate: (e) => {
      cards.value[1].x = 318 - e.progress * 318
      cards.value[8].x = 318 - e.progress * 318
      cards.value[5].x = e.progress * 318 - 318
      cards.value[12].x = e.progress * 318 - 318

      cards.value[1].y = 138 - e.progress * 138
      cards.value[5].y = 138 - e.progress * 138
      cards.value[8].y = -138 + e.progress * 138
      cards.value[12].y = -138 + e.progress * 138

      cards.value[1].opacity = e.progress
      cards.value[8].opacity = e.progress
      cards.value[5].opacity = e.progress
      cards.value[12].opacity = e.progress
    }
  })
  ScrollTrigger.create({
    trigger: '.scroll',
    start: 'top top+=500',
    end: 'bottom top',
    onUpdate: (e) => {
      cards.value[1].scale = e.progress;
      cards.value[5].scale = e.progress;
      cards.value[8].scale = e.progress;
      cards.value[12].scale = e.progress;
    }
  })

  ScrollTrigger.create({
    trigger: '.scroll',
    start: 'top top',
    end: 'top top-=400',
    onUpdate: (e) => {
      cards.value[2].y = 115 + e.progress * 13
      cards.value[4].y = 115 + e.progress * 13
      cards.value[9].y = -115 - e.progress * 13
      cards.value[11].y = -115 - e.progress * 13
    }
  })
  ScrollTrigger.create({
    trigger: '.scroll',
    start: 'top top-=400',
    end: 'bottom top',
    onUpdate: (e) => {
      cards.value[2].x = 159 - e.progress * 159
      cards.value[9].x = 159 - e.progress * 159
      cards.value[4].x = e.progress * 159 - 159
      cards.value[11].x = e.progress * 159 - 159

      cards.value[2].y = 138 - e.progress * 138
      cards.value[4].y = 138 - e.progress * 138
      cards.value[9].y = -138 + e.progress * 138
      cards.value[11].y = -138 + e.progress * 138

      cards.value[2].opacity = e.progress
      cards.value[9].opacity = e.progress
      cards.value[4].opacity = e.progress
      cards.value[11].opacity = e.progress
    }
  })
  ScrollTrigger.create({
    trigger: '.scroll',
    start: 'top top',
    end: 'bottom top',
    onUpdate: (e) => {
      cards.value[2].scale = e.progress;
      cards.value[4].scale = e.progress;
      cards.value[9].scale = e.progress;
      cards.value[11].scale = e.progress;
    }
  })

  ScrollTrigger.create({
    trigger: '.scroll',
    start: 'top top-=100',
    end: 'top top-=500',
    onUpdate: (e) => {
      cards.value[3].y = 115 + e.progress * 13
      cards.value[10].y = -115 - e.progress * 13
    }
  })
  ScrollTrigger.create({
    trigger: '.scroll',
    start: 'top top-=500',
    end: 'bottom top',
    onUpdate: (e) => {
      cards.value[3].y = 138 - e.progress * 138
      cards.value[10].y = -138 + e.progress * 138

      cards.value[3].opacity = e.progress
      cards.value[10].opacity = e.progress
    }
  })
  ScrollTrigger.create({
    trigger: '.scroll',
    start: 'top top-=100',
    end: 'bottom top',
    onUpdate: (e) => {
      cards.value[3].scale = e.progress;
      cards.value[10].scale = e.progress;
    }
  })

  // 控制卡片文字
  const cardText = document.getElementsByClassName('card_text')
  const cardTextArr = Array.from(cardText)
  const cardBg = document.getElementsByClassName('scroll_animation_cardBg')[0]
  ScrollTrigger.create({
    trigger: '.scroll',
    start: 'bottom top+=400',
    end: 'bottom top',
    onUpdate: (e) => {
      (cardBg as HTMLDivElement).style.opacity = e.progress.toString();
      (cardBg as HTMLDivElement).style.transform = `scale(${0.8 + e.progress * 0.2})`
      cardTextArr.forEach(item => {
        (item as HTMLDivElement).style.opacity = e.progress.toString();
        (item as HTMLDivElement).style.transform = `translate3d(1e-05px, ${20 - e.progress * 20}px, 10px)`
      })
    }
  })
})
</script>

<template>
  <div class="container">
    <div class="top"></div>
    <div class="animation_box">
      <div class="scroll_animation">
        <div class="scroll_box">
          <div class="scroll">
            <div class="scroll_animation_icon">
              <img src="https://gw.alicdn.com/imgextra/i2/O1CN01kEuOaQ1OQe6INmAUY_!!6000000001700-55-tps-180-180.svg"
                alt="">
            </div>
            <div class="scroll_animation_title">
              <img src="https://gw.alicdn.com/imgextra/i2/O1CN01rC0EJs1ZZJR2WHfdQ_!!6000000003208-2-tps-1880-272.png"
                alt="">
            </div>
            <div v-for="item of 22" :key="item" class="color_block" :class="`color${item}`"></div>
            <div class="scroll_animation_why">
              <span>为什么要数字化</span>
            </div>
            <div class="scroll_animation_resolve">
              <div>企业数字化一个钉钉就解决</div>
            </div>
            <div class="scroll_animation_bg"></div>
            <div class="scroll_animation_cardBox">
              <div class="scroll_animation_cardBg"></div>
              <div v-for="(item, index) of cards" :key="index" class="card_item" :class="`card_item${index + 1}`"
                style="opacity: 0"
                :style="`opacity: ${item.opacity}; transform: translate3d(${item.x}px, ${item.y}px, 10px) scale(${item.scale})`">
                <div class="card_icon">
                  <img :src="item.src" alt="">
                </div>
                <div class="card_text" style="opacity: 0; transform: translate3d(1e-05px, 20px, 10px);">
                  <span>{{ item.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  background-color: #040506;

  .top {
    width: 100vw;
    height: 860px;
  }

  .animation_box {
    background: #040506;
    background-image: radial-gradient(circle at 27% 100%, rgba(0, 127, 255, .15) 0, rgba(143, 53, 255, 0) 30%);
    width: 100%;

    .scroll_animation {
      height: 200vh;
      position: relative;
      z-index: 1;
    }

    .scroll_box {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      position: sticky;
      top: 0;
      color: #fff;
    }

    .scroll {
      width: 100%;
      height: 100%;
      overflow: hidden;
      perspective: 800px;
      position: relative;
      transform-style: preserve-3d;
    }

    .scroll_animation_icon {
      background-image: linear-gradient(159deg, #00b6ff, #007fff 67%, #0065ff 97%);
      border-radius: 0.3797em;
      box-shadow: 0 0 0.39em 0 rgba(0, 79, 255, .3), 0.26em 0.26em 0.77em 0 rgba(0, 79, 255, .3);
      height: 1.8em;
      left: 50%;
      margin-left: -0.9em;
      margin-top: -0.9em;
      position: absolute;
      top: 50%;
      transform-origin: 50% 50%;
      width: 1.8em;
      z-index: 10;
      opacity: 0.1;
      transform: translate3d(1e-5px, 200px, -800px) scale(0.1);
      font-size: 100px;

      img {
        width: 100%;
        height: 100%;
        border-style: none;
        vertical-align: middle;
      }
    }

    .scroll_animation_title {
      -webkit-box-pack: center;
      bottom: calc(50% - 2.25em);
      color: #fff;
      display: flex;
      height: 0.52em;
      justify-content: center;
      left: 0;
      line-height: .52em;
      position: absolute;
      transform-origin: 50% 50%;
      width: 100%;
      z-index: 10;
      opacity: 0.2;
      transform: translate3d(1e-5px, 100px, -800px) scale(0.2);
      font-size: 100px;

      img {
        height: 100%;
        border-style: none;
        vertical-align: middle;
      }
    }

    .color_block {
      position: absolute;
      font-size: 100px;
      transform: translate3d(1e-5px, 1e-5px, -200px);
      opacity: 0.1;
    }



    .color1 {
      background-color: #040506;
      background-image: linear-gradient(-33deg, #8f35ff, rgba(143, 53, 255, 0)), radial-gradient(circle at 62% -28%, rgba(0, 45, 156, .75) 0, #002d9c 68%, rgba(0, 45, 156, 0) 111%), linear-gradient(116deg, rgba(0, 137, 255, .2) 1%, rgba(0, 186, 255, .04) 38%, rgba(68, 149, 255, .08) 68%, rgba(3, 79, 255, .16) 88%);
      border-radius: 0.3333em;
      height: 1.6em;
      left: calc(50% - 7.56em);
      top: calc(50% - 4.21em);
      transform-origin: 50% 50%;
      width: 1.6em;
      opacity: 0.4;
    }

    .color2 {
      background-image: linear-gradient(133deg, rgba(255, 186, 0, 0), rgba(255, 207, 0, .6) 68%), linear-gradient(170deg, #ffc400, #ff9200), linear-gradient(170deg, #ffc400, #ff9200);
      border-radius: 0.1667em;
      height: 0.8em;
      left: calc(50% - 4.87em);
      top: calc(50% - 1.92em);
      transform-origin: 50% 50%;
      width: 0.8em;
    }

    .color3 {
      background-color: #cc7201;
      border-radius: 0.2em;
      height: 0.96em;
      left: calc(50% - 6.24em);
      top: calc(50% - 1.41em);
      transform-origin: 50% 50%;
      width: 0.96em;
    }

    .color4 {
      background-image: linear-gradient(170deg, #3e9eff, #0062ff);
      border-radius: 0.0833em;
      height: 0.4em;
      left: calc(50% - 3.16em);
      top: calc(50% - 0.67em);
      transform-origin: 50% 50%;
      width: 0.4em;
    }

    .color5 {
      background-image: radial-gradient(77deg, #ff8300 0, #ff9200 54%, rgba(255, 146, 0, 0) 128%), linear-gradient(77deg, #ffb400, #ff9200 25%, #ffdf2f 68%, #ff8e00);
      border-radius: 0.0958em;
      height: 0.46em;
      left: calc(50% - 2.59em);
      top: calc(50% - 0.28em);
      transform-origin: 50% 50%;
      width: 0.46em;
    }

    .color6 {
      background-image: linear-gradient(46deg, #ff5f00, #ff8d16);
      border-radius: 0.15em;
      bottom: calc(50% - 1.75em);
      height: 0.72em;
      left: calc(50% - 5.79em);
      position: absolute;
      transform-origin: 50% 50%;
      width: 0.72em;
    }

    .color7 {
      background-image: linear-gradient(220deg, #e58dff, #8f35ff 67%, rgba(143, 53, 255, 0)), radial-gradient(circle at 1.2222% -87%, rgba(0, 45, 156, .75) 0, #002d9c 171%, rgba(0, 45, 156, 0) 278%), linear-gradient(137deg, rgba(0, 137, 255, .3), rgba(3, 79, 255, .24));
      transform-origin: 50% 50%;
      background-color: #040506;
      border-radius: 0.3333em;
      bottom: calc(50% - 4.12em);
      height: 1.6em;
      left: calc(50% - 7.01em);
      width: 1.6em;
    }

    .color8 {
      border-radius: 0.05em;
      height: 0.24em;
      left: calc(50% - 2.43em);
      top: calc(50% - -130.97em);
      width: 0.24em;
      background-image: linear-gradient(220deg, #e58dff, #8f35ff 67%, rgba(143, 53, 255, 0)), radial-gradient(circle at 1.2222% -87%, rgba(0, 45, 156, .75) 0, #002d9c 171%, rgba(0, 45, 156, 0) 278%), linear-gradient(137deg, rgba(0, 137, 255, .3), rgba(3, 79, 255, .24));
      transform-origin: 50% 50%;
    }

    .color9 {
      background-image: linear-gradient(-27deg, rgba(143, 53, 255, .8) 11%, rgba(143, 53, 255, 0)), radial-gradient(circle at 62% -28%, rgba(0, 45, 156, .75) 0, #002d9c 68%, rgba(0, 45, 156, 0) 111%);
      border-radius: 0.2em;
      height: 0.96em;
      left: calc(50% - 1.54em);
      top: calc(50% - 4.73em);
      transform-origin: 50% 50%;
      width: 0.96em;
    }

    .color10 {
      background-color: #ffa800;
      border-radius: 0.0958em;
      bottom: calc(50% - 0.98em);
      height: 0.46em;
      left: calc(50% - 3.62em);
      transform-origin: 50% 50%;
      width: 0.46em;
    }

    .color11 {
      background-image: linear-gradient(180deg, #004fff, rgba(0, 45, 156, 0) 70%);
      border-radius: 0.2em;
      bottom: calc(50% - 4.98em);
      height: 0.96em;
      left: calc(50% - 1.65em);
      transform-origin: 50% 50%;
      width: 0.96em;
    }

    .color12 {
      background-color: #040506;
      background-image: -webkit-radial-gradient(top, rgba(0, 45, 156, .75) 0, #002d9c 92%, rgba(0, 45, 156, 0) 166%);
      background-image: radial-gradient(180deg, rgba(0, 45, 156, .75) 0, #002d9c 92%, rgba(0, 45, 156, 0) 166%);
      border-radius: 0.0833em;
      bottom: calc(50% - 3.52em);
      height: 0.4em;
      left: calc(50% - 0.26em);
      transform-origin: 50% 50%;
      width: 0.4em;
    }

    .color13 {
      background-color: #040506;
      background-image: -webkit-radial-gradient(top, rgba(0, 45, 156, .75) 0, #002d9c 92%, rgba(0, 45, 156, 0) 166%), -webkit-linear-gradient(334deg, rgba(0, 137, 255, .2) 1%, rgba(0, 186, 255, .04) 38%, rgba(68, 149, 255, .08) 68%, rgba(3, 79, 255, .16) 88%);
      background-image: radial-gradient(180deg, rgba(0, 45, 156, .75) 0, #002d9c 92%, rgba(0, 45, 156, 0) 166%), linear-gradient(116deg, rgba(0, 137, 255, .2) 1%, rgba(0, 186, 255, .04) 38%, rgba(68, 149, 255, .08) 68%, rgba(3, 79, 255, .16) 88%);
      -webkit-border-radius: 13.33px;
      border-radius: 13.33px;
      height: 64px;
      right: calc(50% - 1.02em);
      top: calc(50% - 3.95em);
      transform-origin: 50% 50%;
      width: 64px;
    }

    .color14 {
      background-image: linear-gradient(147deg, #004fff, #002d9c 82%), linear-gradient(153deg, #007fff 5%, #0063ff 95%);
      border-radius: 0.05em;
      height: 0.24em;
      right: calc(50% - 0.38em);
      top: calc(50% - 2.06em);
      transform-origin: 50% 50%;
      width: 0.24em;
    }

    .color15 {
      background-image: linear-gradient(39deg, rgba(0, 79, 255, 0), #004fff 72%), linear-gradient(153deg, #007fff 5%, #0063ff 95%);
      border-radius: 0.2708em;
      height: 1.3em;
      right: calc(50% - 7.04em);
      top: calc(50% - 3.63em);
      transform-origin: 50% 50%;
      width: 1.3em;
    }

    .color16 {
      background-color: #040506;
      background-image: linear-gradient(128deg, #00ebb6, #00ba46 69%);
      border-radius: 0.1333em;
      height: 0.64em;
      right: calc(50% - 5.05em);
      top: calc(50% - 2.26em);
      transform-origin: 50% 50%;
      width: 0.64em;
    }

    .color17 {
      background-color: #040506;
      border-radius: 0.05em;
      height: 0.24em;
      transform-origin: 50% 50%;
      width: 0.24em;
      background-image: linear-gradient(170deg, #ffc400, rgba(255, 207, 0, .6));
      right: calc(50% - 2.18em);
      top: calc(50% - 0.52em);
    }

    .color18 {
      background-image: linear-gradient(170deg, #00b6ff, #007fff);
      bottom: calc(50% - 0.49em);
      right: calc(50% - 3em);
      background-color: #040506;
      border-radius: 0.05em;
      height: 0.24em;
      transform-origin: 50% 50%;
      width: 0.24em;
    }

    .color19 {
      background-color: #040506;
      background-image: linear-gradient(148deg, #76d2ff, #09baff 99%);
      border-radius: 0.1333em;
      bottom: calc(50% - 1.7em);
      height: 0.64em;
      right: calc(50% - 4.53em);
      transform-origin: 50% 50%;
      width: 0.64em;
    }

    .color20 {
      background-image: linear-gradient(136deg, #3e9eff 19%, #0062ff);
      border-radius: 0.2em;
      bottom: calc(50% - 1.33em);
      height: 0.96em;
      right: calc(50% - 6.57em);
      transform-origin: 50% 50%;
      width: 0.96em;
    }

    .color21 {
      background-image: linear-gradient(147deg, rgba(0, 79, 255, .6), rgba(0, 45, 156, .6) 82%), linear-gradient(153deg, #007fff 5%, #0063ff 95%);
      border-radius: 0.3333em;
      bottom: calc(50% - 3.45em);
      height: 1.6em;
      right: calc(50% - 8em);
      transform-origin: 50% 50%;
      width: 1.6em;
    }

    .color22 {
      background-image: linear-gradient(-2deg, rgba(0, 45, 156, .75), #002d9c);
      border-radius: 0.2em;
      bottom: calc(50% - 5.32em);
      height: 0.96em;
      right: calc(50% - 2.13em);
      transform-origin: 50% 50%;
      width: 0.96em;
    }

    .scroll_animation_why {
      opacity: 0;
      transform: translate3d(1e-5px, 364px, 10px) scale(0.3);
      pointer-events: none;
      touch-action: none;
      -webkit-box-pack: center;
      -webkit-box-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      position: absolute;
      top: calc(50% - 2.84em);
      transform-origin: 50% 50%;
      width: 100%;
      z-index: 10;
      font-size: 100px;

      span {
        background: linear-gradient(90deg, #7ebeff, #1086ff);
        -webkit-background-clip: text;
        color: transparent;
        font-size: .2em;
        position: relative;
      }
    }

    .scroll_animation_resolve {
      opacity: 0;
      transform: translate3d(1e-5px, 335px, 10px) scale(0.3);
      color: #fff;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      height: 0.67em;
      letter-spacing: 0;
      line-height: .67em;
      position: absolute;
      text-align: center;
      top: calc(50% - 2.12em);
      transform-origin: 50% 50%;
      width: 100%;
      z-index: 10;
      font-size: 100px;

      div {
        font-size: .48em;
      }
    }

    .scroll_animation_bg {
      background: url(https://gw.alicdn.com/imgextra/i2/O1CN01DL98PU1o7ZcDBmNDk_!!6000000005178-2-tps-3840-920.png) no-repeat 50%;
      opacity: 0;
      transform: translate3d(1e-5px, 1e-5px, -1px);
      background-size: cover;
      height: 4.8em;
      left: 0;
      position: absolute;
      top: calc(50% - 5em);
      transform-origin: 50% 50%;
      width: 100vw;
      z-index: 1;
      font-size: 100px;
    }

    .scroll_animation_cardBox {
      align-content: space-between;
      display: flex;
      flex-wrap: wrap;
      height: 5.6em;
      left: 50%;
      line-height: 0;
      max-width: 1200px;
      padding: 0.83em 0.43em;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -0.89em);
      transform-origin: 50% 50%;
      width: 12em;
      z-index: 10;
      font-size: 100px;

      .scroll_animation_cardBg {
        opacity: 0;
        transform: translate3d(1e-5px, 1e-5px, 10px) scale(0.8);
        background-color: rgba(23, 26, 29, .9);
        border-radius: 0.16em;
        height: 100%;
        left: 0;
        max-width: 1200px;
        position: absolute;
        top: 0;
        width: 100%;
      }

      .card_item {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-box-align: center;
        -webkit-box-pack: start;
        align-items: center;
        display: flex;
        flex-direction: column;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        justify-content: flex-start;
        width: 14.28571%;
        cursor: pointer;
        // opacity: 1 !important;

        .card_icon {
          margin-bottom: 0.32em;

          img {
            border-radius: 0.1667em;
            height: 0.8em;
            width: 0.8em;
            border-style: none;
            vertical-align: middle;
          }
        }

        .card_text {
          font-size: .2em;
          line-height: 1;
        }
      }
    }
  }
}
</style>

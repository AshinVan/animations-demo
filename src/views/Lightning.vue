<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as PIXI from 'pixi.js'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const canvas = ref<HTMLElement>()

let app: PIXI.Application
let sprite: PIXI.Sprite

onMounted(() => {
  initCanvas()

  ScrollTrigger.create({
    trigger: document.querySelector('.container'),
    start: 'top top',
    end: 'bottom top',
    onUpdate: self => {
      sprite.scale.set(self.progress * 50)
    }
  })
})

function initCanvas() {
  app = new PIXI.Application({
    background: '#e4e5e8',
    resizeTo: canvas.value,
  });
  canvas.value?.appendChild(app.view as any)

  sprite = PIXI.Sprite.from('/web_1.svg');
  sprite.anchor.set(0.5);
  sprite.x = app.screen.width / 2;
  sprite.y = app.screen.height / 2;
  sprite.scale.set(0);

  app.stage.addChild(sprite);

  for (let i = 0; i <= 50; i++) {
    const svg = PIXI.Sprite.from('/web_2.svg');
    svg.anchor.set(0.5);
    svg.x = app.screen.width / 2;
    svg.y = app.screen.height / 2;
    svg.scale.set(1.5);
    svg.visible = false
    svg.tint = 0

    const animation = gsap.to(svg, {visible: true})
    ScrollTrigger.create({
      animation: animation,
      start: `top top-=${200 + i * 100}`,
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        console.log("🚀 ~ self:", self)
        svg.scale.set(40 * self.progress + 1.5)
      }
    })

    app.stage.addChild(svg);


    // const graphics = new PIXI.Graphics();
    // graphics.beginFill(0xb3fc7e);
    // graphics.drawCircle(75, 75, 50);
    // graphics.endFill();

    // const texture1 = app.renderer.generateTexture(graphics);
    // const sprite1 = new PIXI.Sprite(texture1);
    // sprite1.anchor.set(0.5);
    // sprite1.x = app.screen.width / 2;
    // sprite1.y = app.screen.height / 2;

    // app.stage.addChild(sprite1);
  }
}
</script>

<template>
  <div class="container">
    <div class="canvas" ref="canvas">
      <!-- <div class="green"></div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
html, body {
  width: 100%;
  height: 100%;
}
.container {
  width: 100vw;
  height: 500vh;
  position: sticky;
  top: 0;
  background-color: #e4e5e8;

  .canvas {
    width: 100vw;
    height: 100vh;
    position: sticky;
    top: 0;

    // .green { 
    //   width: 75px;
    //   height: 75px;
    //   background-color: #b3fc7e;
    //   border-radius: 50%;
    //   box-shadow: 0px 0px 50px 2px #b3fc7e;
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   transform: translate(-50%, -50%);

    //   &.hide {
    //     display: none;
    //   }
    // }
  }
}
</style>

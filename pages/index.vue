<template>
  <section class="container">

    <div class="section--block" :style="{ width: windowWidth + 'px' , height: windowHeight + 'px', background: block.bgColor }" @click="nextSlide($event, index, block)" v-for="(block, index) in blocks" :key="index" :id="index">
      <div class="block--wrapper">

        <div class="block--inner">
          <h1 class="title">
            Section :: {{index}}
          </h1>
          <h2 class="subtitle">
            Width: {{windowWidth}} | Height: {{windowHeight}}
          </h2>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  },
  data() {
    return {
      msg: 'Hello World! This is a Event listener test.',
      windowWidth: 0,
      windowHeight: 0,
      blocks: [
        {
          title: 'some tests.....',
          subtitle: 'more tests....',
          bgColor: '#00bcd4'
        },
        {
          title: 'some tests.....',
          subtitle: 'more tests....',
          bgColor: '#e91e63'
        },
        {
          title: 'some tests.....',
          subtitle: 'more tests....',
          bgColor: '#cddc39'
        },
        {
          title: 'some tests.....',
          subtitle: 'more tests....',
          bgColor: '#3f51b5'
        },
        {
          title: 'some tests.....',
          subtitle: 'more tests....',
          bgColor: '#607d8b'
        },
        {
          title: 'some tests.....',
          subtitle: 'more tests....',
          bgColor: '#ffc107'
        },
        {
          title: 'some tests.....',
          subtitle: 'more tests....',
          bgColor: '#009688'
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(x => {
      window.addEventListener('resize', this.getWindowWidth);
      window.addEventListener('resize', this.getWindowHeight);
      //Init
      this.getWindowWidth();
      this.getWindowHeight();
    });
  },
  methods: {
    scrollTo(element, to, duration) {
      if (duration <= 0) return;
      var difference = to - element.scrollTop;
      var perTick = difference / duration * 10;
      setTimeout(x => {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
      }, 10);
    },
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight;
    },
    nextSlide(event, index, block) {
      let currentElement = event.target;
      let currentIndex = index;
      let nextIndex = currentIndex + 1;
      let totalBlocks = this.blocks.length;
      let nextElement = document.getElementById('0');
      if (nextIndex < totalBlocks) {
        let nextElement = document.getElementById(nextIndex);
        this.scrollTo(document.body, nextElement.offsetTop, 600);
      }
      console.log(nextIndex);
      if (nextIndex === totalBlocks) {
        console.log('hmmmm');
        this.scrollTo(document.body, document.getElementById('0'), 600);
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
    window.removeEventListener('resize', this.getWindowHeight);
  }
};
</script>

<style>

body {
  margin: 0;
  color: white;
}

.section--block {
  border: 1px solid red;
  cursor: s-resize;
}

.section--block:last-child {
  cursor: n-resize;
}

.block--wrapper {
  pointer-events: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
}

.block--inner {
  padding: 2%;
  border: 1px solid white;
}

.container {
  /*min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;*/
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: white;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: white;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

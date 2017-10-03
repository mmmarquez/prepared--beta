<template>
  <section class="section">

    <div class="section--block" :style="{ width: windowWidth + 'px' , height: windowHeight + 'px', background: block.bgColor }" @click="nextSlide($event, index, block)"
    v-for="(block, index) in blocks" :key="index" :id="index"
    >

      <div class="block--wrapper">

        <div class="block--inner" id="block">


          <div class="grid">
            <div class="row">
              <div class="col-xs-12 col-lg-6">
                <div  class="box" :style="{ height: blockHeight/2 + 'px' }">
                  <img src="https://unsplash.it/1600/900?image=164" alt="">
                </div>
              </div>
              <div class="col-xs-12 col-lg-6">
                <div class="box" :style="{ height: blockHeight/2 + 'px' }">
                  <img src="https://unsplash.it/1600/900?image=254" alt="">
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="grid--block">
            <div class="grid--item" @mouseenter="block.active = !block.active" @mouseleave="block.active = false" :class="{shadow: block.active}">
              <h1 class="title">
                :: {{index}}
              </h1>
              <transition name="zoom">
              <div class="bg--image" v-if="onM">
              </div>
            </transition>
            </div>
            <div class="grid--item">
              <h2 class="subtitle">
              </h2>
            </div>
          </div> -->

        </div>

      </div>
    </div>

  </section>
</template>

<script>
import Logo from '~/components/Logo.vue';

if (process.browser) {
  var viewport = require('viewport-event').default;
  console.log(viewport);
}

// import viewport from 'viewport-event';
// let data = viewport.getViewport();

var VueScrollTo;

// let easings = {
//     'ease': [0.25, 0.1, 0.25, 1.0],
//     'linear': [0.00, 0.0, 1.00, 1.0],
//     'ease-in': [0.42, 0.0, 1.00, 1.0],
//     'ease-out': [0.00, 0.0, 0.58, 1.0],
//     'ease-in-out': [0.42, 0.0, 0.58, 1.0]
// }

var options = {
  easing: 'ease-in-out',
  offset: 0,
  cancelable: true,
  onDone: function() {
    // scrolling is done
  },
  onCancel: function() {
    // scrolling has been interrupted
  },
  x: false,
  y: true
};

export default {
  components: {
    Logo
  },
  data() {
    return {
      msg: 'Hello World! This is a Event listener test.',
      windowWidth: 0,
      windowHeight: 0,
      blockHeight: 0,
      onM: false,
      overM: true,
      viewportData: {},
      blocks: [
        {
          title: 'some tests.....',
          subtitle: 'more tests....',
          bgColor: '#00bcd4',
          active: false
        },
        {
          title: 'some tests.....',
          subtitle: 'more tests....',
          bgColor: '#e91e63',
          active: false
        },
        {
          title: 'some tests.....',
          subtitle: 'more tests....',
          bgColor: '#cddc39',
          active: false
        },
        {
          title: 'some tests.....',
          subtitle: 'more tests....',
          bgColor: '#3f51b5',
          active: false
        },
        {
          title: 'some tests.....',
          subtitle: 'more tests....',
          bgColor: '#607d8b',
          active: false
        },
        {
          title: 'some tests.....',
          subtitle: 'more tests....',
          bgColor: '#ffc107',
          active: false
        },
        {
          title: 'some tests.....',
          subtitle: 'more tests....',
          bgColor: '#009688',
          active: false
        }
      ]
    };
  },
  mounted() {
    let vm = this;
    this.$nextTick(x => {
      this.getWindowWidth();
      this.getWindowHeight();
      // if (process.browser) {
      //   viewport.on('viewport', function(data) {
      //     console.log(data);
      //     vm.viewportData = data;
      //   });
      // }
      window.addEventListener('resize', this.getWindowWidth);
      window.addEventListener('resize', this.getWindowHeight);
    });
  },
  methods: {
    onMouse(event) {
      console.log(event.target);
      console.log('in');
      // setTimeout(x => {
      this.onM = !this.onM;
      // this.overM = false;
      // }, 1000);
    },
    overMouse(event) {
      console.log(event.target);
      console.log('out');
      // setTimeout(x => {
      this.onM = false;
      // this.overM = !this.overM
      // }, 200);
    },
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight;
      this.blockHeight = document.getElementById('block').offsetHeight;
    },
    nextSlide(event, index, block) {
      let currentElement = event.target;
      let currentIndex = index;
      let nextIndex = currentIndex + 1;
      let totalBlocks = this.blocks.length;
      let nextElement = document.getElementById('0');
      if (nextIndex < totalBlocks) {
        let nextElement = document.getElementById(nextIndex);
        this.$scrollTo(nextElement, 600, options);
      }
      if (nextIndex === totalBlocks) {
        this.$scrollTo(document.getElementById('0'), 600, options);
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

.bg--image {
  background-image: url('https://unsplash.it/600/600');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  display: none;
}


.grid--block {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-flow: row;
  flex-basis: 50%;
  position: relative;
}

.grid--item {
  margin: 2%;
  position: relative;
  border: 1px solid white;
padding: 1%;
  width: 100%;
  height: 100%;
  max-height: 50%;
  transition: 1s all ease;
  box-shadow: inset 0px 0px 0px 0px transparent;

}

.grid--item img {
  width: 100%;
  max-width: 100%;
  max-width: 50vh;
  display: block;
  height: 35vh;

}

.grid--item.shadow {
  box-shadow: inset 3px 3px 15px 3px rgba(0,0,0,0.3) !important;
  transition: 1s all ease;
}

.section--block {
  /*border: 1px solid red;*/
  cursor: s-resize;
  transition: 1s all ease;
}

.grid {
  width: 100%;
  max-width: 100%;
}

.box {
  border: 1px solid white;
  display: block;
}

img {
  width: auto;
  display: block;
  height: 100%;
  /*max-width: 100%;*/
}


/*Section One*/
.section--block:nth-child(1) .grid--block {
/*align-items: flex-start;*/
}
.section--block:nth-child(1) .grid--block .grid--item:nth-child(1) {
align-self: flex-end;
}
.section--block:nth-child(1) .grid--block .grid--item:nth-child(2) {
  align-self: flex-start;
}

/*Section One*/
.section--block:nth-child(2) .grid--block {
/*align-items: flex-start;*/
}
.section--block:nth-child(2) .grid--block .grid--item:nth-child(1) {
align-self: flex-start;
}
.section--block:nth-child(2) .grid--block .grid--item:nth-child(2) {
  align-self: flex-end;
}

/*Section One*/
.section--block:nth-child(3) .grid--block .grid--item.shadow {
  /*box-shadow: inset 3px 3px 15px 3px black !important;*/

/*align-items: flex-start;*/
}
.section--block:nth-child(3) .grid--block .grid--item:nth-child(1){
align-self: center;
}
.section--block:nth-child(3) .grid--block .grid--item:nth-child(2) {
  align-self: center;
}

/*Section One*/
.section--block:nth-child(4) .grid--block {
/*align-items: flex-start;*/
flex-flow: column;
}
.section--block:nth-child(4) .grid--block .grid--item:nth-child(1) {
align-self: flex-end;
width: 50%;
}
.section--block:nth-child(4) .grid--block .grid--item:nth-child(2) {
  align-self: center;
}

/*Section One*/
.section--block:nth-child(5) .grid--block {
align-items: flex-start;
}
.section--block:nth-child(5) .grid--block .grid--item:nth-child(1) {
align-self: flex-end;
}
.section--block:nth-child(5) .grid--block .grid--item:nth-child(1) img {
align-self: flex-end;
max-height: 35vh;
}
.section--block:nth-child(5) .grid--block .grid--item:nth-child(2) {
  align-self: center;
}

/*Section One*/
.section--block:nth-child(6) .grid--block {
/*align-items: flex-start;*/
}
.section--block:nth-child(6) .grid--block .grid--item:nth-child(1) {
align-self: stretch;
}
.section--block:nth-child(6) .grid--block .grid--item:nth-child(2) {
  align-self: center;
}

/*Section One*/
.section--block:nth-child(7) .grid--block {
/*align-items: flex-start;*/
}
.section--block:nth-child(7) .grid--block .grid--item:nth-child(1) {
align-self: stretch;
}
.section--block:nth-child(7) .grid--block .grid--item:nth-child(2) {
  align-self: flex-start;
}


.section--block .grid--block .grid--item:nth-child(1) {
align-self: flex-end;
border: 0px;
}


.section--block:last-child {
  cursor: n-resize;
}

.block--wrapper {
  /*pointer-events: none;*/
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
  max-width: 90%;
  width: 100%;
  height: 100%;
  max-height: 90%;
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

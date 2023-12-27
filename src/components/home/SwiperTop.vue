<script>
import {onMounted, reactive} from "vue";
import {getBanner} from "@/request/api/home";

export default {
  setup() {
    const state = reactive({
      images: [],
    });
    onMounted(async () => {
      let res = await getBanner();
      let banners = res.data.banners;
      for (let i in banners) {
        state.images.push(banners[i].pic);
      }
    })
    return {state};
  },
};

</script>
<template>
  <!--  轮播图  -->
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image" alt="一张图片"/>
      </van-swipe-item>
    </van-swipe>
  </div>

</template>

<style>
.van-swiper {
  width: 100%;
  height: 3rem;
  padding: 0.2rem;
}

.van-swipe-item {
  padding: 0 0.2rem;
}

img {
  width: 100%;
  height: 3rem;
  border-radius: 0.2rem;
}

.van-swipe__indicator--active {
  background-color: #ce4848;
}
</style>

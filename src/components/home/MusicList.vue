<script setup>

</script>

<template>
  <!--  推荐歌单  -->
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe :loop="false" class="my-swiper" :show-indicators="false">
        <van-swipe-item v-for="item in musicList" :key="item" class="swipe-item">
          <div class="totalImage">
            <img :src="item.picUrl" alt="图片"/>
            <span class="playCount">
             <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wyyshengdanwazi"></use>
             </svg>
            <span class="playCount-text">
              {{ changeCount(item.playCount) }}
            </span>
          </span>
          </div>

          <span class="name">
            {{ item.name }}
          </span>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import {getFoundMusicList} from "@/request/api/home";

export default {
  data() {
    return {
      musicList: []
    }
  },
  methods: {
    async getGeDan() {
      let res = await getFoundMusicList();
      this.musicList = res.data.result;
      console.log(this.musicList);
    },
    changeCount: function (num) {
      if (num >= 1e8) {
        return (num / 1e8).toFixed(1) + "亿";
      } else if (num >= 1e4) {
        return (num / 1e4).toFixed(1) + "万";
      }
    }
  },
  mounted() {
    this.getGeDan();
  }
}
</script>
<style scoped>

.musicList {
  width: 100%;
  height: 6rem;
  padding: 0.2rem;
}


.musicTop {
  width: 100%;
  height: 0.6rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
}

.title {
  font-size: 0.4rem;
  font-weight: 900;
}

.more {
  border: 1px solid #ccc;
  text-align: center;
  line-height: 0.6rem;
  padding: 0 0.2rem;
  border-radius: 0.4rem;
}

.musicContent {
  width: 100%;
}

.my-swiper {
  width: 100%;
}

.swipe-item {
  width: 3rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  margin-right: 0.3rem;
}

.totalImage {
  width: 3rem;
  position: relative;
}

.playCount::before {
  position: absolute;
}

.playCount {
  position: absolute;
  color: #fff;
  top: 0.1rem;
  right: 0.1rem;
}

.name {
  width: 3rem;
  height: 2rem;
}
</style>

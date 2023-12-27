<script setup>

</script>

<template>
<!--  图标列表  -->
  <div class="iconList">
    <div class="iconItem">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wyyshengdanlihe"></use>
        </svg>
      </div>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wyyshengdanwu"></use>
        </svg>
      </div>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wyyshengdanqiqiu"></use>
        </svg>
      </div>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wyyshengdanxuehua"></use>
        </svg>
      </div>
      <span>排行榜</span>
    </div>
  </div>
</template>

<style scoped>
.iconList {
  width: 100%;
  height: 2rem;
  display: flex;
  margin-top: 0.3rem;
  justify-content: space-around;
  align-items: center;
}

.iconItem {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  width: 0.9rem;
  height: 0.9rem;
}
</style>

<script setup>

</script>

<template>
  <!--  顶部导航栏  -->
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-wyyshengdanwanou"></use>
      </svg>
    </div>
    <div class="topCenter">
      <span>我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-wyyshengdanmilu"></use>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.topNav {
  width: 100%;
  height: 1rem;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
}

.topCenter {
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 0.34rem;
}

.active {
  font-weight: 900;
}
</style>

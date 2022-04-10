<template>
  <div class="not-found">
    <div class="error-page-text">
      <div class="error-title">404</div>
      <div class="error-contain">你似乎来到了没有知识存在的荒原</div>
      <button class="go-home" @click="$router.back()">返回上一步</button>
    </div>
    <img class="error-page-img" src="~@/assets/image/liukanshan_wire.svg" />
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 600px;
  height: 100%;

  .error-page-text {
    margin-right: 13%;
    .error-title {
      font-size: 40px;
      font-synthesis: style;
      font-weight: 600;
      color: #646464;
      line-height: 1.4;
    }
    .error-contain {
      font-size: 18px;
      margin-top: 10px;
      color: #646464;
      line-height: 1.4;
    }
    .go-home {
      padding: 0 16px;
      margin-top: 20px;
      line-height: 32px;
      background-color: #0084ff;
      border-color: #0084ff;
      border: 1px solid;
      border-radius: 5px;
      line-height: 32px;
      padding: 0 16px;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>

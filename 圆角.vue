<template>
  <div class="cart">
    <ul class="situation-tabs">
      <li
        v-for="(item, index) in tabs"
        :key="index"
        :class="{ 'tab-active': index == num }"
        @click="tab(index)"
      >
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "cart",
  data() {
    return {
      tabs: ["标题一", "标题二"],
      num: 0
    };
  },
  methods: {
    tab(index) {
      this.num = index;
    }
  }
}
</script>

<style scoped lang="less">
  .cart{
    background: rgba(0, 0, 0, 0.36);
    width: 100%;
    height: 100%;
  }
  .situation-tabs {
    padding: 30px 0;
    position: sticky;
    top: 0;
    z-index: 6;
    display: flex;
    text-align: center;
    li {
      position: relative;
      flex: 1;
      display: flex;
      align-content: center;
      justify-content: center;
      flex-direction: column;
      cursor: pointer;
      height: 44px;
      span {
        display: inline-block;
        color: #333;
        font-size: 14px;
        line-height: 44px;
      }
      &.tab-active {
        span {
          background: #00f;
          color: yellow;
          border-top-left-radius: px2vw(8);
          border-top-right-radius: px2vw(8);
        }
      }

      &:first-child.tab-active{
        background: #fff;
        border-top-left-radius: px2vw(8);
      }
      /*最后一个非选中li*/
      &:not(.tab-active):not(:first-child){
        background: #00f;
        border-top-right-radius: px2vw(8);
        span{
          background: #fff;
          border-bottom-left-radius: px2vw(8);
          border-top-right-radius: px2vw(8);
        }
      }


      &:last-child.tab-active{
        background: #fff;
        border-top-right-radius: px2vw(8);
      }
      /*第一个非选中li*/
      &:not(.tab-active):not(:last-child){
        background: #00f;
        border-top-left-radius: px2vw(8);
        span{
          background: #fff;
          border-top-left-radius: px2vw(8);
          border-bottom-right-radius: px2vw(8);
        }
      }
    }
  }
</style>

<template>
  <div class="my-footer">
    <van-tabbar
      v-model="active"
      active-color="#FF6347"
      inactive-color="#666666"
      @change="onTabChangeFn">

      <van-tabbar-item v-for="(item,index) in footNav" :key="index" :to="'/'+item.pathUrl">
        <span>{{item.text}}</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? item.icon.active : item.icon.inactive"
        >
      </van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script type='text/ecmascript-6'>

  import { mapGetters } from "vuex";
  export default {
    name: "my-footer",
    data(){
      return{
        active:0,
        footNav:[
          {
            text: "首页",
            pathUrl:"home",
            icon: {
              active: require('../../assets/images/tab/homeopen.png'),
              inactive: require('../../assets/images/tab/home.png')
            }
          },
          {
            text: "全部分类",
            pathUrl:"classify",
            icon: {
              active: require('../../assets/images/tab/flopen.png'),
              inactive: require('../../assets/images/tab/fl.png')
            }
          },
          {
            text: "购物车",
            pathUrl:"cart",
            icon: {
              active: require('../../assets/images/tab/gwcopen.png'),
              inactive: require('../../assets/images/tab/gwc.png')
            }
          },
          {
            text: "个人中心",
            pathUrl:"mine",
            icon: {
              active: require('../../assets/images/tab/meopen.png'),
              inactive: require('../../assets/images/tab/me.png')
            }
          },
        ],
      }
    },
    computed:mapGetters({
      act_footer:"getFooter",
      n:"getNum",
    }),

    created() {
      let path = this.$route.path;
      this.handleCurrActiveFn(path);
    },

    methods: {
      handleCurrActiveFn(path){
        //根据path获取index
        for(let i in this.footNav){
          if(path == '/'+this.footNav[i].pathUrl){
            // console.log(this.footNav[i].text);
            this.$store.dispatch("CHANGEFOOTER", i);
            this.$store.dispatch("CHANGENAME", this.footNav[i].text);
          }
        }

        this.active = this.act_footer;
        // console.log(this.act_footer);
      },
      onTabChangeFn(index) {
        this.$store.dispatch("CHANGEFOOTER", index);
        //根据index获取path
        for(let i in this.footNav){
          if(i == index){
            // console.log(this.footNav[i].text);
            this.$store.dispatch("CHANGENAME", this.footNav[i].text);

          }
        }
      },

    },
  }
</script>

<style scoped lang="less">

  .my-footer{
    height: 5rem;
    overflow: hidden;
    border-top: 1px solid #d0d0d0;
  }
</style>

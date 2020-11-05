<template>
  <div>

    <div @click="showPopup">展示弹出层</div>
    <van-popup v-model="show" position="bottom">
      <van-picker
        ref="pickerbox"
        show-toolbar
        title="标题"
        :columns="columns"
        @cancel="cancleFn"
        @change="changeFn"
        @confirm="onIncomeConfirmFn"/>
    </van-popup>




  </div>
</template>
<script type='text/ecmascript-6'>
  export default {
    name: "cart",
    data() {
      return {

        currentSelect:0,
        show: false,

        columns: [
          {
            text: '全部',
            children: [{
              text: '全部',
              children: [
                {
                  text: '全部',
                }
              ]
            }],
          },
          {
            text: '浙江',
            children: [
              { text: '全部',
                children: [{ text: '全部' }],
              },
              {
                text: '杭州',
                children: [{ text: '全部' }, { text: '西湖区' }, { text: '余杭区' }],
              },
              {
                text: '温州',
                children: [{ text: '全部' },{ text: '鹿城区' }, { text: '瓯海区' }],
              },
            ],
          },
          {
            text: '福建',
            children: [
              { text: '全部',
                children: [{ text: '全部' }],
              },

              {
                text: '福州',
                children: [{ text: '全部' },{ text: '鼓楼区' }, { text: '台江区' }],
              },
              {
                text: '厦门',
                children: [{ text: '全部' },{ text: '思明区' }, { text: '海沧区' }],
              },
            ],
          },
        ],
      };
    },
    methods: {
      showPopup() {
        this.show = true;
      },
      cancleFn(){
        this.show = false;
      },
      changeFn(pickerbox,value,index){
        this.currentSelect = index;
      },
      onIncomeConfirmFn(value,index) {
        console.log(this.$refs.pickerbox.getColumnValue(this.currentSelect));

        console.log(value);
        for(let item=0; item<=this.currentSelect;item++){
          console.log(value[item]);
        }

        // console.log(index);
      },

    },
  }
</script>


<style scoped lang="less">



</style>

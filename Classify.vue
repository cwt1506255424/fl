<template>
  <div>
    <van-checkbox v-model="showChina" @change="toggleChinaFn" checked-color="#07c160">显示中国</van-checkbox>
    <br>
    <div @click="showPopup">展示弹出层</div>
    <h3>{{value}}</h3>
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
        showChina: false,

        value: '',
        currentSelect:0,
        show: false,

        columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
      };
    },
    created(){

      this.toMoneyPrice(1234.1);
    },
    methods: {
      // 为金额添加千分位分割符，不处理小数部分
      toMoneyPrice(num) {
        console.log(num);
        let source = num.toString().split(".");
        let cents = source[1];
        let zheng = source[0];
        let t = "";
        for (let i = 0; i < zheng.length; i++) {
          t += zheng[i] + ((i + 1) % 3 === 0 && (i + 1) !== zheng.length ? "," : "");
        }
        console.log(`${t}.${cents}`);
        return `${t}.${cents}`;
      },
      toggleChinaFn(val) {
        console.log(val);
      },
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
        this.value = value;
        this.show = false;
        console.log(this.$refs.pickerbox.getValues());
        console.log(this.$refs.pickerbox.getColumnValue(this.currentSelect));

        console.log(value);
        // for(let item=0; item<=this.currentSelect;item++){
        //   console.log(value[item]);
        // }

      },

      numToWanOrYiYuan(num,tp){
        // 把一个数变成百万/亿
        let num_million = 1000000 ;//百万
        let num_billion = 100000000;//亿
        let numberValue = "";
        let divisor;
        let multiplier;
        let decimalPoint = 1;
        //  获取10的保留位数次方
        let type = tp || "million";
        multiplier= Math.pow(10,decimalPoint);
        //  如果是数字
        if(typeof num === "number" && !isNaN(num)){
          //  确定位数

          if(type === "million"){
            divisor = num_million;
          }else if(type === "billion"){
            divisor = num_billion;
          }else {
            return num;
          }
        }else {
          //如果不是数字
          return "-";

        }

        numberValue = num/divisor;
        //  保留小数点后位数
        numberValue = (
          Math.round(numberValue*multiplier)/multiplier
        ).toFixed(decimalPoint);
        return numberValue;
      },

    },
  }
</script>


<style scoped lang="less">



</style>

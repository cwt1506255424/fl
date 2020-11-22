import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    num: 0,
    act_footer: 0,//底部当前index
    act_name: '',//头部当前name
  },
  mutations: {
    "ADD":state=>{
      return state.num++;
    },
    setFooter(state,act_footer) {
      // console.log("step2:收到actions的CHANGEENTRANCEINFO命令:改变State中的entranceInfo值");
      // console.log('改------'+act_footer);
      state.act_footer = Number(act_footer);

    },
    setName(state,act_name) {
      state.act_name = act_name;
    },

  },
  actions: {
    "ADDNUM":store=>{
      // 交给mutations处理
      store.commit("ADD",{});
    },

    "CHANGEFOOTER":(store,pageOpened)=>{
      // console.log("step1:接收到处理的命令: CHANGEENTRANCEINFO");
      store.commit("setFooter",pageOpened);
    },
    "CHANGENAME":(store,pageOpened)=>{
      store.commit("setName",pageOpened);
    },
  },
  getters:{
    getNum:state=> {
      return state.num;
    },
    getFooter:state=>{
      // console.log("获取state中的act_footer值");
      return state.act_footer;
    },
    getName:state=>{
      return state.act_name;
    },
  }
})

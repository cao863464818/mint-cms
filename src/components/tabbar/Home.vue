<template>
    <div class="home">
            <!-- 轮播图区域 -->
                <!-- 在组件中, 使用v-for循环的话, 一定要使用 key -->
            
            <!-- 图片在demo > cms-server > public > home > lunbo > 1.jpg -->
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in lunbotulist" :key="item.img">
                    <img :src="item.img">                    
                </mt-swipe-item>
            </mt-swipe>

            <!-- 中间的 路由 router-view 区域 -->
            <!-- <transition>
                <router-view></router-view>
            </transition> -->


            <!-- 九宫格 到 六宫格 的改造工程 -->
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <img src="../../images/menu1(1).png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
            </ul> 
    </div>
</template>

<script>
// 1. 根据api文档使用vue-resource 发送 ajax
// 2. 获取到数据之后给data里面的lunbotulist 重新赋值

// 使用 Toast 做信息提示
// 3.通过v-for 渲染数据
import { Toast } from "mint-ui";
export default {
  data: () => ({
    lunbotulist: [] // 保存轮播图的数组
  }),
  created() {
    this.getlunbotu();
  },
  methods: {
    getlunbotu() {
      this.$http.get("api/getlunbo").then(result => {
        console.log(result.body);
        if (result.body.status === 0) {
          this.lunbotulist = result.body.message;
        } else {
          Toast("加载轮播图数据失败");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: skyblue;
    }
    &:nth-child(2) {
      background-color: pink;
    }
    &:nth-child(3) {
      background-color: yellow;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
    img {
        width: 60px;
        height: 60px;
    }
    .mui-media-body {
        font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0
}

</style>
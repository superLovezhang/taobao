<template>
    <div class="tabbar-wrap">
        <router-link to="/home" tag="div" class="bar-item">
            <span class="iconfont icon-home"></span>
            <p>首页</p>
        </router-link>
        <router-link to="/collection" tag="div"  class="bar-item">
            <span class="iconfont icon-shoucang"></span>
            <p>收藏</p>
        </router-link>
        <router-link to="/shopcar" tag="div"  class="bar-item">
            <span class="iconfont icon-gouwuche"></span>
            <p>购物车</p>
        </router-link>
        <router-link to="/mine" tag="div"  class="bar-item">
            <span class="iconfont icon-geren"></span>
            <p>我的淘宝</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HomeTabBar'
}
</script>

<style lang="scss" scoped>
$rem: 469/16rem;
.tabbar-wrap {
    width: 469/$rem;
    height: 55/$rem;
    position: fixed;
    bottom: 0;
    font-size: 16/$rem;
    display: flex;
    color: #696d77;
    z-index: 80;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    .bar-item {
        text-align: center;
        span {
            margin-bottom: 5/$rem;
        }
        &.router-link-active {
            color: #ff5000;
        }
    }
}
</style>
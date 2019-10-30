<template>
    <div class="collection-wrap">
        <div class="collection-header-wrap">
            <span class="iconfont icon-552cc14536532" @click="$router.go(-1)"></span>
            <div class="collection-wrap">
                <router-link to="/collection" exact tag="div">宝贝</router-link>
                <router-link to="/collection/shop" exact tag="div">店铺</router-link>
            </div>
        </div>
        <router-view></router-view>
        <div class="collection-bottom">已经到最底部啦</div>
        <HomeTabBar />
    </div>
</template>

<script>
import HomeTabBar from '../components/home/homeTabBar';
export default {
    components: {
        HomeTabBar
    }
}
</script>

<style lang="scss" scoped>
$rem:469/16rem;
.collection-wrap {
    margin-bottom: 55/$rem;
    .collection-header-wrap {
        width: 469/$rem;
        height: 60/$rem;
        display: flex;
        position: fixed;
        top: 0;
        align-items: center;
        background-color: #fff;
        >span {
            left: 15/$rem;
            top: 15/$rem;
            color: #767a82;
            font-weight: 700;
            font-size: 35/$rem;
            position: absolute;
        }
        .collection-wrap {
            width: 230/$rem;
            height: 35/$rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            border: 1px solid #ffa780;
            div {
                width: 50%;
                height: 36/$rem;
                font-size: 18/$rem;
                color: #ff5000;;
                text-align: center;
                line-height: 35/$rem;
                &.router-link-active {
                    color: #fff;
                    background-color: #ff5000;
                }
            }
        }
    }
    .collection-bottom {
        width: 469/$rem;
        height: 50/$rem;
        line-height: 50/$rem;
        font-size: 13/$rem;
        color: #999999;
        text-align: center;
    }
}
</style>
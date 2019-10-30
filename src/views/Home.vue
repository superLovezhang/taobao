<template>
    <div class="home-wrap">
        <HomeHeader />
        <HomeCarousel />
        <div class="separate"></div>
        <HomeClassification />
        <div class="separate"></div>
        <div class="container">
            <HomeRecommed />
            <div class="separate"></div>
            <HomeExplosion />
        </div>
        <div class="container">
            <HomeRefresh />
        </div>
        <HomePendant />
        <HomeSearch />
        <HomeTabBar />
    </div>
</template>
<script>
import HomeHeader from '../components/home/homeHeader';
import HomeCarousel from '../components/home/homeCarousel';
import HomeClassification from '../components/home/homeClassification';
import HomeRecommed from '../components/home/homeRecommed';
import HomeTabBar from '../components/home/homeTabBar';
import HomeExplosion from '../components/home/homeExplosion';
import HomeRefresh from '../components/home/homeRefresh';
import HomePendant from '../components/home/homePendant';
import HomeSearch from '../components/home/homeSearch';
export default {
    data() {
        return {
        }
    },
    created() {
        window.console.log(this.$route.matched)
    },
    components: {
        HomeHeader,
        HomeCarousel,
        HomeClassification,
        HomeRecommed,
        HomeTabBar,
        HomeExplosion,
        HomeRefresh,
        HomePendant,
        HomeSearch
    }
}
</script>

<style lang="scss" scoped>
$rem: 469/16rem;
.home-wrap {
    padding-bottom: 55/$rem;
    .container {
        width: 440/$rem;
        margin: 0 auto;
    }
}
.separate {
    height: 1px;
    margin-bottom: 30/$rem;
}
</style>
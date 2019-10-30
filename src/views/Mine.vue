<template>
    <div>
        <MineHeader />
        <MineOrder />
        <div class="container">
            <HomeRefresh />
        </div>
        <HomeTabBar />
    </div>
</template>

<script>
import HomeTabBar from '../components/home/homeTabBar';
import MineHeader from '../components/mine/mineHeader';
import MineOrder from '../components/mine/mineOrder';
import HomeRefresh from '../components/home/homeRefresh';
export default {
    components: {
        HomeTabBar,
        MineHeader,
        MineOrder,
        HomeRefresh
    }
}
</script>

<style lang="scss" scoped>
$rem: 750/16rem;
.container {
    margin: 0 20/$rem;
}
</style>
<template>
    <div class="home-header">
        <div class="home-logo"></div>
        <div class="home-mock-input" @click="$store.commit('changeSearch', true);">
            <span class="iconfont icon-sousuo"></span>
            <i>连衣裙</i>
        </div>
        <a href="/goods" class="logo-wrap">
            <span class="iconfont icon-Windows"></span>
        </a>
    </div>
</template>
<script>

export default {
    name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
$rem: 469/16rem;
.home-header {
    width: 469/$rem;
    height: 173/$rem;
    position: relative;
    box-sizing: border-box;
    padding-top: 10px;
    border-radius: 100%/0 0 20% 20%;
    background-image: linear-gradient(122deg,#ff8b58 0,#ff3e3e 41%,#ff203c 100%);
    .home-logo {
        height: 30/$rem;
        margin-bottom: 15px;
        background: url(//gw.alicdn.com/tfs/TB1erFJbgHqK1RjSZJnXXbNLpXa-139-42.png) no-repeat center;
        background-size: contain;
    }
    .home-mock-input {
        color: #fff;
        width: 440/$rem;
        height: 45/$rem;
        margin: 0 auto;
        line-height: 45/$rem;
        text-align: center;
        font-size: 14/$rem;
        background: rgba(255,255,255,.21);
        border: 1/$rem solid #ffa9a7;
        border-radius: 28/$rem;
    }
    .logo-wrap {
        position: absolute;
        top: 10/$rem;
        left: 20/$rem;
        color: #fff;
        font-weight: 700;
    }
}
</style>
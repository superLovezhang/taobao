<template>
    <div class="mine-header-wrap">
        <div class="mine-setting">
            <img :src="pic" alt="">
            <div class="mine-user-info">
                <h3>请设置淘宝昵称</h3>
                <div class="user-set">
                    <span class="iconfont icon-gerenziliao"></span>
                    <span class="iconfont icon-shezhi2"></span>
                </div>
            </div>
        </div>
        <div class="mine-block">
            <div class="block-item">
                <p>24</p>
                <p>收藏夹</p>
            </div>
            <div class="block-item">
                <p>24</p>
                <p>关注店铺</p>
            </div>
            <div class="block-item">
                <p>24</p>
                <p>足迹</p>
            </div>
            <div class="block-item">
                <p>24</p>
                <p>红包卡券</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MineHeader',
    data() {
        return {
            block: null,
            userInfo: null,
            pic: null
        }
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            this.axios('http://127.0.0.1:3000/api/getUserInfo')
                .then(res => {
                    this.userInfo = res.data.data.simpleInfo;
                    this.block = res.data.data.block;
                    this.pic = res.data.data.simpleInfo.userLogo;
                })
        }
    }
}
</script>

<style lang="scss" scoped>
$rem: 750/16rem;
.mine-header-wrap {
    width: 750/$rem;
    height: 338/$rem;
    padding: 74/$rem 22/$rem 33/$rem 35/$rem;
    margin-bottom: 20/$rem;
    box-sizing: border-box;
    background-color: #fe6b10;
    .mine-setting {
        display: flex;
        align-items: center;
        margin-bottom: 13/$rem;
        >img {
            width: 100/$rem;
            height: 100/$rem;
            border-radius: 50%;
            margin-right: 19/$rem;
        }
        .mine-user-info {
            display: flex;
            font-size: 38/$rem;
            color: #fff;
            >h3 {
                margin-right: 180/$rem;
            }
            .user-set {
                span {
                    font-size: 40/$rem;
                }
                .icon-gerenziliao {
                    margin-right: 40/$rem;
                }
            }
        }
    }
    .mine-block {
        width: 693/$rem;
        height: 118/$rem;
        display: flex;
        color: #fff;
        align-items: center;
        text-align: center;
        font-size: 24/$rem;
        justify-content: space-around;
        p:nth-of-type(1) {
            margin-bottom: 25/$rem;
        }
    }
}
</style>
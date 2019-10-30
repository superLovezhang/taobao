<template>
    <div class="refresh-wrap clearfix">
        <a href="javascript:;" class="like-wrap">猜你喜欢</a>
        <div class="refresh-item" v-for="(item, index) in goodsList" :key="index" ref="lastDom">
            <img :src="item.pic | picFilter" alt="" @click="toShopPage(index)">
            <p class="descript">
                <span>{{item.itemName}}</span>
            </p>
            <p class="sale-price">新手约 <span>￥{{item.priceAfterCoupon}}</span></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeRefresh',
    data() {
        return {
            goodsList: []
        }
    },
    mounted() {
        this.getGoodsList();
        this.getGoodsDoms();
    },
    methods: {
        getGoodsList() {
            this.axios('http://127.0.0.1:3000/api/getRecommedGoods')
                .then(res => {
                    window.console.log(res);
                    this.goodsList = res.data.data.recommend.resultList;
                })
        },
        getGoodsDoms() {
            let doms;
            let domTop;
            let domH;
            let scrollTop;
            let clientH = document.documentElement.clientHeight;
            setTimeout(() => {
                let arr = this.goodsList;
                window.onscroll = () => {
                    scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                    if (!doms) {
                        doms = this.$refs.lastDom;
                        let lastDom = doms[doms.length - 1];
                        domH = lastDom.clientHeight;
                        domTop = lastDom.offsetTop;
                    }
                    if (scrollTop > (domTop - (clientH - domH))) {
                        this.goodsList = this.goodsList.concat(arr);
                        this.$nextTick(() => {
                            doms = this.$refs.lastDom;
                            let lastDom = doms[doms.length - 1];
                            domH = lastDom.clientHeight;
                            domTop = lastDom.offsetTop;
                        })
                    }
                }
            },1000)
        },
        toShopPage(index) {
            this.$router.push('/shop/' + index);
        }
    },
    filters: {
        picFilter: function (value) {
            return value.replace('.jpg', '.jpg_200x200q75.jpg_.webp');
        }
    }
}
</script>

<style lang="scss" scoped>
$rem: 469/16rem;
.refresh-wrap {
    .like-wrap {
        width: 100%;
        height: 55/$rem;
        font-weight: 700;
        line-height: 55/$rem;
        font-size: 22/$rem;
        color: rgba(208, 2, 27, 1);
        text-align: center;
        display: block;
        background: url(https://gw.alicdn.com/tfs/TB1xGICsxnaK1RjSZFtXXbC2VXa-750-100.png_q75.jpg_.webp) no-repeat center;
        background-size: contain;
    }
    .refresh-item {
        width: 215/$rem;
        height: 352/$rem;
        float: left;
        margin-bottom: 10/$rem;
        margin-right: 10/$rem;
        font-size: 12px;
        background-color: #fff;
        border-radius: 10/$rem;
        img {
            width: 100%;
            height: 215/$rem;
            margin-bottom: 10/$rem;
            border-radius: 10/$rem 10/$rem 0 0;
        }
        .descript {
            width: 185/$rem;
            height: 40/$rem;
            line-height: 22/$rem;
            margin: 0 auto;
            color: #333;
            overflow: hidden;
            text-align: left;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 35/$rem;
            span {
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .sale-price {
            width: 185/$rem;
            margin: 0 auto;
            font-size: 12/$rem;
            color: #999999;
            span {
                font-weight: 700;
                font-size: 20/$rem;
                color: #ff0033;
            }
        }
        &:nth-of-type(2n) {
            margin-right: 0;
        }
    }
}
</style>
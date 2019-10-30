<template>
    <div class="home-explosion-wrap">
        <img src="https://gw.alicdn.com/tfs/TB1cE6hXv1H3KVjSZFBXXbSMXXa-171-31.png" alt="">
        <div class="swiper-container swiper-container2" ref="swiper2">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(items, indexs) in 6" :key="indexs">
                    <div class="goods-item"  v-for="(item, index) in goodsList.slice(3 * indexs, 3 * (indexs + 1))" :key="index">
                        <img :src="item.pic | picFilter" alt="">
                        <h3 class="descript">{{item.itemName}}</h3>
                        <p class="price">券后价 <span>￥ {{item.promotionPrice}}</span></p>
                    </div>
                </div>
            </div>
            <div class="swiper-scrollbar"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    name: 'homeExplosion',
    data() {
        return {
            goodsList: []
        }
    },
    created() {
        this.$nextTick(() => {
            let mySwiper = new Swiper(this.$refs.swiper2,{
                // loop:true,
                autoplay: {
                    disableOnInteraction: false
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                }
            })
            mySwiper.scrollbar.$el.css('height','2px');
            mySwiper.scrollbar.$dragEl.css('background','#ff004b');
        });
        this.axios('http://127.0.0.1:3000/api/getHotGoods')
                .then(res => {
                    window.console.log(res);
                    this.goodsList = res.data.data.recommend.resultList;
            })
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
.home-explosion-wrap {
    width: 100%;
    height: 325/$rem;
    font-size: 16/$rem;
    color: #333;
    padding: 18/$rem 20/$rem;
    box-sizing: border-box;
    border-radius: 15/$rem;
    background-color: #fff;
    >img {
        width: 108/$rem;
        height: 20/$rem;
    }
    .swiper-container2 {
        width: 406/$rem;
        height: 238/$rem;
        margin-top: 25/$rem;
        .swiper-wrapper {
            .swiper-slide {
                width: 406/$rem;
                height: 238/$rem;
                .goods-item {
                    float: left;
                    margin-right: 10/$rem;
                    &:nth-of-type(3) {
                        margin-right: 0;
                    }
                    >img {
                    width: 126/$rem;
                    height: 126/$rem;
                    border-radius: 10/$rem;
                    margin-bottom: 12/$rem;
                    }
                    >h3 {
                        width: 126/$rem;
                        overflow: hidden;
                        margin-bottom: 38/$rem;
                        white-space:nowrap;
                        text-overflow:ellipsis;
                    }
                    >p {
                        color: #4a4a4a;
                        span {
                            font-weight: 700;
                            font-size: 18/$rem;
                            color: #ff004b;
                        }
                    }
                }
                
            }
        }
    }
}
</style>
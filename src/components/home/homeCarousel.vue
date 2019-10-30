<template>
    <div class="home-carousel">
        <div class="swiper-container swiper-carousel-container" ref="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img style="width: 100%;" src="https://img.alicdn.com/tfs/TB1Pb_7kkT2gK0jSZPcXXcKkpXa-640-200.jpg" alt="">
                </div>
                <div  class="swiper-slide">
                    <img style="width: 100%;" src="https://img.alicdn.com/tfs/TB1HO1CdBiE3KVjSZFMXXbQhVXa-640-200.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img style="width: 100%;" src="https://img.alicdn.com/simba/img/TB1UsFrcubviK0jSZFNSuuApXXa.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img style="width: 100%;" src="https://img.alicdn.com/simba/img/TB1uJ29cKL2gK0jSZFmSuw7iXXa.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img style="width: 100%;" src="https://img.alicdn.com/tfs/TB1Unbjj1H2gK0jSZJnXXaT1FXa-640-200.jpg" alt="">
                </div>
            </div>
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
            <!-- 如果需要分页器 -->
        <div class="swiper-pagination" ref="pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    name: 'Carousel',
    mounted() {
        this.$nextTick(() => {
            new Swiper(this.$refs.swiper ,{
                loop:true,
                autoplay: {
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                },
                // scrollbar: {
                //     el: '.swiper-scrollbar'
                // }
            })
        }) 
    }
}
</script>

<style lang="scss" scoped>
$rem: 469/16rem;
.home-carousel {
    width: 469/$rem;
    height: 140/$rem;
    margin-top: -55/$rem;
    .swiper-container {
        width: 95%;
        height: 100%; 
        img {
            border-radius: 10/$rem;
        }
    } 
}
</style>
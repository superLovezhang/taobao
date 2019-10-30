<template>
    <div class="classification-wrap">
        <div class="clficon" v-for="(item, index) in resData" :key="index">
            <img :src=item.picUrl alt="">
            <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homeClassification',
    data() {
        return {
            resData: null
        }
    },
    created() {
        this.axios.get('http://127.0.0.1:3000/api/getCategory')
        .then(res => {
            this.resData = res.data.data;
            window.console.log(this.resData)
        })
    },
}
</script>

<style lang="scss" scoped>
$rem: 469/16rem;
.classification-wrap {
    width: 469/$rem;
    height: 170/$rem;
    padding: 0 28/$rem;
    box-sizing: border-box;
    // background-color: #000;
    .clficon {
        width: 60/$rem;
        height: 80/$rem;
        float: left;
        color: #333;
        margin-right: 28/$rem;
        font-size: 14/$rem;
        &:nth-of-type(5n) {
            margin-right: 0;
        }
        &:nth-of-type(n + 6) {
            margin-top: 10/$rem;
        }
        img {
            height: 55/$rem;
            border-radius: 50%;
            margin-bottom: 5/$rem;
        }
        >p {
            text-align: center;
        }
    }
}
</style>
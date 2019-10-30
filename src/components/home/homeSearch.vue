<template>
    <div class="home-search-wrap" ref="searchWrap" v-show="this.$store.state.searchTag">
        <div class="container">
            <div class="search-box">
                <input type="text" placeholder="连衣裙">
                <span class="iconfont icon-sousuo"></span>
                <p @click="$store.commit('changeSearch', false)">取消</p>
            </div>
            <div class="hot-search-wrap">
                <h3>热门搜索</h3>
                <div class="hot-search-item" v-for="(item, index) in tagsList" :key="index">{{item.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeSearch',
    data() {
        return {
            tagsList: []
        }
    },
    mounted() {
        this.getTags();
    },
    methods: {
        toHidePage() {
            this.$refs.searchWrap.style.display = 'none';
        },
        getTags() {
            this.axios('http://127.0.0.1:3000/api/getTags')
                .then(res => {
                    this.tagsList = res.data.data.resultList;
                    window.console.log(res.data.data.resultList);
                })
        }
    },
}
</script>

<style lang="scss" scoped>
$rem:469/16rem;
.home-search-wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: #fff;
    .container {
        width: 440/$rem;
        margin: 0 auto;
        .search-box {
            width: 469/$rem;
            height: 78/$rem;
            display: flex;
            position: relative;
            font-size: 18/$rem;
            align-items: center;
            input {
                width: 355/$rem;
                height: 40/$rem;
                outline: none;
                box-sizing: border-box;
                padding-left: 45/$rem;
                margin-right: 30/$rem;
                border-radius: 3/$rem;
                border: 1/$rem solid #e1e4e5;
            }
            span {
                position: absolute;
                color: #e5e5e5;
                left: 13/$rem;
                font-size: 25/$rem;
            }
        }
        .hot-search-wrap {
            h3 {
                margin-left: 15/$rem;
                color: #9999b3;
                font-size: 20/$rem;
                font-weight: 700;
                margin-bottom: 18/$rem;
            }
            .hot-search-item {
                display: inline-block;
                font-size: 16/$rem;
                margin-right: 15/$rem;
                margin-bottom: 20/$rem;
                padding: 15/$rem 10/$rem;
                border: 1/$rem solid #e1e4e5;
                border-radius: 6/$rem;  
            }
        }
    }
}
</style>
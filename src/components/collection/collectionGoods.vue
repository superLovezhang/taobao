<template>
    <div class="collection-goods-wrap">
        <div class="goods-header">
            <a href="javascript:;" class="bar active" @click="handleClickMethod($event)">
                全部分类({{sortList[0].count}}) 
                <span class="iconfont icon-down" @click.stop="isExpand = !isExpand"></span> 
            </a>
            <a href="javascript:;" class="bar"  @click="handleClickMethod($event)">失效</a>
        </div>
        <div class="goods-header-mask" v-show="isExpand">
            <div class="sort-tag">
                <ul>
                    <li v-for="(item, index) in sortList" :key="index" :class="index === 0 ? 'sort-item active' : 'sort-item'">{{item.value}}({{item.count}})</li>
                </ul>
            </div>
        </div>
        <div class="goods-item" v-for="(item, index) in goodsList" :key="index">
            <img :src="item.img | picFilter" alt="">
            <div class="goods-descri">
                <p>{{item.title}}</p>
                <span>￥{{item.price}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isAll: true,
            isExpand: false,
            sortList: [0],
            goodsList: null
        }
    },
    created() {
        this.getSortList();
        this.getGoodsList('http://127.0.0.1:3000/api/getCollection');
    },
    methods: {
        handleClickMethod(e) {
            let bars = document.getElementsByClassName('bar');
            if (e.target.children[0]) {
                if (!this.isAll) {
                    this.$options.methods.getGoodsList.bind(this)('http://127.0.0.1:3000/api/getCollection');
                    this.isAll= true;
                }
            } else {
                if (this.isAll) {
                    this.$options.methods.getGoodsList.bind(this)('http://127.0.0.1:3000/api/getInvalid');
                    this.isAll = false;
                }
            }
            
            for (let i = 0; i < bars.length; i++) {
                bars[i].className = 'bar';
            }
            e.target.className += ' active';
        },
        getGoodsList(url) {
            this.axios(url)
                .then(res => {
                    this.goodsList = res.data.data.result.resultList;
                })
        },
        getSortList() {
            this.axios('http://127.0.0.1:3000/api/getSort')
                .then(res => {
                    this.sortList = res.data.data.result;
                    window.console.log(this.sortList);
                })
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
$rem:469/16rem;
.collection-goods-wrap {
    margin-top: 112/$rem;
    .goods-header {
        width: 469/$rem;
        height: 52/$rem;
        position: fixed;
        top: 60/$rem;
        line-height: 52/$rem;
        font-size: 18/$rem;
        display: flex;
        text-align: center;
        border: {
            top: 1px solid #efefef;
            bottom: 1px solid #efefef;
        }
        justify-content: space-around;
        background-color: #fff;
        a {
            color: #3d3f45;
            &.active {
                color: #ff5507;
            }
        }

    }
    .goods-header-mask {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: .3);
        .sort-tag {
            background-color: #fff;
            li {
                width: 469/$rem;
                height: 55/$rem;
                color: #3d3f45;
                font-size: 18/$rem;
                padding-left: 15/$rem;
                box-sizing: border-box;
                line-height: 55/$rem;
                border: {
                    bottom: 1px solid #fbfbfbe7;
                }
                &.active {
                    color: #ff5507;
                }
            }
        }
    }
    .goods-item {
        width: 469/$rem;
        height: 155/$rem;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        img {
            width: 155/$rem;
            height: 150/$rem;
        }
        .goods-descri {
            padding-left: 15/$rem;
            padding-top: 5/$rem;
            box-sizing: border-box;
            color: #3d3f45;
            border: {
                bottom: 1px solid #f3f3f3;
            }
            font-size: 18/$rem;
            line-height: 25/$rem;
            p {
                height: 95/$rem;
            }
            span {
                color: #ff5000;
                font-size: 22/$rem;
            }
        }
    }
}
</style>
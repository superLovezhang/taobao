<template>
    <div class="home-recommed-wrap">
        <div class="recommed-header">
            <img src="https://gw.alicdn.com/tfs/TB1NDj0jSf2gK0jSZFPXXXsopXa-702-120.jpg" alt="">
        </div>
        <div class="recommed-sale">
            <img src="https://ilce.alicdn.com/montage/79871-35d4675ed5dc71a708a5371c006a287a.jpg?content=%7B%2214%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22papercut%22%3Atrue%2C%22value%22%3A%22https%3A%5C%2F%5C%2Fimg.alicdn.com%5C%2Fbao%5C%2Fuploaded%5C%2FTB1MFGFdxTpK1RjSZFKwu12wXXa.png%22%7D%7D%2C%2222%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22papercut%22%3Atrue%2C%22value%22%3A%22https%3A%5C%2F%5C%2Fimg.alicdn.com%5C%2Fbao%5C%2Fuploaded%5C%2FO1CN01Ven2g21Nua4oaWeyS_%21%212-item_pic.png%22%7D%7D%2C%223%22%3A%7B%22attrs%22%3A%7B%22value%22%3A%22%5Cu5929%5Cu732b%5Cu5fc5%5Cu62a2%22%7D%7D%2C%225%22%3A%7B%22attrs%22%3A%7B%22value%22%3A%22%5Cu52b2%5Cu7206%5Cu5355%5Cu54c1%5Cu699c%22%7D%7D%7D&pid=42126&getAvatar=avatar&img_path2=https%3A%2F%2Fgw.alicdn.com%2Ftfs%2FTB1tkZ5X4GYBuNjy0FnXXX5lpXa-375-226.jpg" alt="">
            <img src="https://ilce.alicdn.com/montage/79872-10a460af6e9d7e9c2af6f8c2d0bce56f.jpg?content=%7B%2214%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22papercut%22%3Atrue%2C%22value%22%3A%22https%3A%5C%2F%5C%2Fimg.alicdn.com%5C%2Fbao%5C%2Fuploaded%5C%2FTB1VjkyjxjaK1RjSZKzXXXVwXXa.png%22%7D%7D%2C%2222%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22papercut%22%3Atrue%2C%22value%22%3A%22https%3A%5C%2F%5C%2Fimg.alicdn.com%5C%2Fbao%5C%2Fuploaded%5C%2FTB1WAuCm9zqK1RjSZPcXXbTepXa.png%22%7D%7D%2C%223%22%3A%7B%22attrs%22%3A%7B%22value%22%3A%22%5Cu5929%5Cu5929%5Cu7279%5Cu4ef7%22%7D%7D%2C%225%22%3A%7B%22attrs%22%3A%7B%22value%22%3A%22%5Cu62a2%5Cu8d2d%5Cu8fdb%5Cu884c%5Cu4e2d%22%7D%7D%7D&pid=42026&getAvatar=avatar&img_path2=https%3A%2F%2Fossgw.alicdn.com%2Fcreatives-assets%2Fscreenshots%2Ftemplates%2F2018%2F01%2F30%2Fdf4b2974-fa05-4ad7-9d04-8ab82b998533-4671.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommed'
}
</script>

<style lang="scss" scoped>
$rem: 469/16rem;
.home-recommed-wrap {
    width: 440/$rem;
    height: 232/$rem;
    .recommed-header {
        width: 100%;
        height: 75/$rem;
        img {
            width: 100%;
            border-radius: 15/$rem 15/$rem 0 0;
        }
    }
    .recommed-sale {
        width: 440/$rem;
        height: 158/$rem;
        img {
            width: 49.8%;
            height: 158/$rem;
            margin-right: 1/$rem;
            border-bottom-left-radius: 15/$rem;
            &:nth-of-type(2) {
                margin-right: 0;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 15/$rem;
            }
        }
    }
}
</style>
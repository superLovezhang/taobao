<template>
    <div class="home-pendant-wrap">
        <a href="javascript:;" class="active-bought">
            <img src="https://gw.alicdn.com/tfs/TB1138sjebviK0jSZFNXXaApXXa-240-240.png" alt="">
        </a>
        <div class="toTop" @click="toBack" ref="toBack"></div>
    </div>
</template>

<script>
export default {
    name: 'HomePendant',
    methods: {
        toBack() {
            window.scrollTo({ 
                top: 0, 
                behavior: "smooth" 
            });
        },
        setTime(clientH) {
            let heightTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (heightTop >= clientH / 2) {
                this.$refs.toBack.style.display = 'block';
            } else if (heightTop <= clientH / 2) {
                this.$refs.toBack.style.display = 'none';
            }
        }
    },   
}
</script>

<style lang="scss" scoped>
$rem: 469/16rem;
.home-pendant-wrap {
    .active-bought {
        display: block;
        width: 90/$rem;
        height: 90/$rem;
        position: fixed;
        z-index: 122;
        right: 0;
        bottom: 132/$rem;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .toTop {
        width: 55/$rem;
        height: 55/$rem;
        position: fixed;
        z-index: 99;
        right: 15/$rem;
        bottom: 85/$rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAADI2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNURFQ0ZGMDAxRDQxMUU5OTVCMjk3ODU4QUU3MEFEOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNURFQ0ZFRjAxRDQxMUU5OTVCMjk3ODU4QUU3MEFEOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QUE0RDE1RUU4RUMxMUU3OEVDQUIwMzJEQ0MyNDQ4MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QUE0RDE1RkU4RUMxMUU3OEVDQUIwMzJEQ0MyNDQ4MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk7J5KQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAV1BMVEUAAAAAAAAAAAChoaHj4+MAAADW1tZHcEy8vLyCgoIAAADu7u4AAAAAAAAAAAAAAAA3NzcAAAAAAADGxsacnJwAAACysrJVVVX4+PgpKSlubm7R0dH///9eFoqxAAAAHHRSTlOZdzfN5gHlAM20hvGQUGQEohcd175Gzaj5pK7a+Y0PAQAAA3NJREFUWMPN2evSsioUAOAFQYGJ59KM+7/ODShmioC9wzd7/alGeyJOwgJuwaA1FgXK8hwgzxAqBK5p+FsQQJsHUuA2cvRo6B/gWmRwGJmof4MpRhAIhOlpuMQZRESGy1MwjWMnmsbDDYITgZpIuBRwMkQZA9cITgeqwzDO4YfIcQCmAn4MQX0wLeDnKOgxXO7ctzyOdiuXR7CjvIMHHrxlBn899Jfj6L21sYIF/DmEC8bh772Cd+A9XIf7L9u1174/11u4DI+31tET9mOw3MAiyo2QxTfcRNSDjJObNUyDFfGU8k4kIVKyUGXQFYxj3NdVXl9Kfkb1DAOXWYwLCobXPShn5QI/olwDG/niv/1h4VCBL5M7wRGyKTKEa1i7FSwwVEEZz7C/S3DrWtjInbdjTHATKvDsLjBUajblgb4M4UE32rlngbXcBoYf3Gj02uQDQ3XxznQZVXADP8DhcQ3BTvwT/FAwSgGjG9A8BZxTqCEFrFicBsYg0sACijRwASgNjCBLA2eQp4HzdPCJ6AYO/4PIU7FZKhilgbNUMIIiDVzAIw38ODNtzs9R1kbchd0TPWdz9GwV80Uiq6+buHuidz6a7Cpb8vXGTmMqWsn0S2VvYu5H0+2o9Yj8LLKW765+hjOzGmrl6Go7z+PfCa8qpp/g+/3o8V974V796bd86v8+/cjUcs93DwYe3Wut2rPEmmD2VcX6s1ln6nIauHWuDs0S62hRaGFTWl3seTlIbOUY2F0TwreMtTCHivf6jU00qA9kqKZLnbsmGt/C+wPP5dNTPSF3tS0jciCk05euzj6BvFsFF7yqccn0pVG+PVsF9+bGBW9GEV8a0725cXflOFi1XnW4HXMX2QmPxEY3w92uyKsNJMVeuNN70QnmuumIbkI2w7BbE+DAJv0Dm+nAwmwZ5RYmnk26qy9/4GGAY7jawk0oEbJMQkwhLf+ej2a4Y+y+2bOLYOrGwp3aQI7D3ERbWPXntz91s082zbPbVQ6qhsf7JG8ar+I8lGzajD813+rprLtKSfp5//ycNtbLc4M5JjYcSuipbbiG1PrSfrky85ijVwQTeq4UZLUaVaN+bya6+bXnVVwK8k9JXl/S1JXmPeWW/z4xnS6Vni75n/C4It0BS7ojoYSHWEpOdOyW8KAw4dFmysPY/fFxnsUeH/8HKeZr3Y9CtnsAAAAASUVORK5CYII=) no-repeat center;
        background-size: contain;
    }
}
</style>
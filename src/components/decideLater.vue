<template>
    <div>
        <article v-for="item in decideArticleList" :key="item.id">{{item.info}}</article>
        <ul class="ikea-decide__list">
            <li v-for="(item,index) in decideItemList" :key="item.id" class="ikea-decide__list-item small-text light-text__fontweight">
                <span>{{Number(index) +1}}</span>
                <span>{{item.info}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "IkeaDecideLater",
        props: {
            decideArticleList: Array,
            decideItemList: Array
        },
        data() {
            return {
            }
        },
        computed: {

        },
        methods: {

        }
    };
</script>

<style lang="scss">
article {
    font-weight: 500;
    letter-spacing: 0.0125rem;
    line-height: 1.75rem;
    font-size: 1.1875rem;
    color: #424242;
}
.ikea-decide__list {
    margin-top: 1rem;
    .ikea-decide__list-item {
        display: flex;
        span {
            margin-right:2px;
        }
    }
}
</style>
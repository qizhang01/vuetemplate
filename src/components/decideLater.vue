<template>
    <div>
        <article v-for="item in decideArticleList" :key="item.id">{{item.title}}</article>
        <ul class="ikea-decide__list">
            <li v-for="(item,index) in decideItemList" :key="item.id" class="base-text light-text__fontweight">
                <span>{{Number(index) +1}}</span>
                <span>{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "DecideLater",
        props: {
            decideArticleList: Array,
            decideItemList: Array
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
    margin-bottom: 1rem;
}
</style>
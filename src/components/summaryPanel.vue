<template>
    <div class="ikea-summary-panel">
        <img class ="summary-panel-img" v-if="url" :src='url'/>
        <div class = "summary-panel-text">
           <div>{{name}}</div>
           <slot></slot>
           <div><span></span></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "IkeaSummaryPanel",
        props: {
            url: String,
            text: String,
            ifActive: Boolean,
            name: String
        },
        computed: {
        },
        methods: {

        }
    };
</script>

<style lang="scss">
    .ikea-summary-panel {
        width: 100%;
        .summary-panel-img {
            width: 90%;
            height: 200px;
        }
        .summary-panel-text {
            padding: 30px 20px 0px 30px;
        }
    }
</style>
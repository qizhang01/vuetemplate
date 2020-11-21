<template>
    <div class="ikea-summary-panel">
        <img class ="summary-panel-img" :src='url'/>
        <div class = "summary-panel-text">
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
            ifActive: Boolean
        },
        computed: {
        },
        methods: {

        }
    };
</script>

<style lang="scss">

</style>
<template>
    <div class="ikea-type-switch">
        <img class ="orient-mode" :src='url'/>
        <div class = "orient-text">{{text}}</div>
        <img src='static/img/selected.svg' v-if='ifActive' class="selected-tick"/>
    </div>
</template>
<script>
    export default {
        name: "IkeaTypeSwitch",
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
 .ikea-type-switch {
    position: relative;
    max-width: 142px;
    min-width: 142px;
    cursor: pointer;
    border-radius: 4px;
    padding: 1px;
    margin: 0 0.75rem 0.75rem 0;
    border: 1px solid #e5e5e5;
    display: flex;
    height: 58px;
    justify-content: flex-start;
    &:hover{
        border: 1px solid #8d8d8d
    }
    .orient-mode {
        width: 44px;
        height: 44px;
        margin: 8px;
    }
    .orient-text{
        font-size: 0.8125rem;
        line-height: 1.3125rem;
        letter-spacing: .0187rem;
        display: flex;
        align-items: center;
        margin-left: 0.75rem;
        margin-right: 0.5rem;
    }
 }
 .selected-tick {
    position: absolute;
    background-color: #1e1e1e;
    height: 16px;
    width: 16px;
    right: 0px;
 }
</style>
<template>
    <div class="ikea-picture-thumb" :style="bgroundStl" @click="handleClick" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <img class ="ikea-picture-thumb__item" v-if="type=='img'" :src='imgUrl' :style="styles"/>
        <span v-if="type=='text'" class ="ikea-picture-thumb__item base-text">+{{text}}</span>
        <img src='static/img/selected.svg' v-if='isActived' class="thumb-selected-tick"/>
    </div>
</template>
<script>
    import { oneOf } from '@/utils/tools'
    export default {
        name: "IkeaPictureThumb",
        props: {
            isActived: Boolean,
            borderRedius: {
                type: [String, Function],
                default: "4"
            },

            imgUrl: String,
            type: {
                validator(value) {
                    return oneOf(value, ['img', 'text','bg'])
                },
                default: 'img'
            },
            text: String,
            bground: String
        },
        computed: {
            styles() {
                const style = {};
                if (this.borderRedius) {
                    style["border-radius"] = `${this.borderRedius}px`;
                }
                return style;
            },
            bgroundStl() {
                const style = {};
                if (this.bground) {
                    style.background = this.bground
                }
                return style;
            }
        },
        methods: {
            handleClick(e) {
                this.$emit('click', e)
            },
            mouseOver(e) {
                this.$emit('mouseOver', e)
            },
            mouseLeave(e) {
                this.$emit('mouseLeave', e)
            },
        }
    };
</script>
<style lang='scss'>
    .ikea-picture-thumb {
        display: inline-block;
        cursor: pointer;
        border: 1px solid #f1f1f1;
        width: 44px;
        height: 38px;
        margin-right: 5px;
        line-height: 38px;
        text-align: center;
        border-radius: 4px;
        position: relative;
        &:hover {
            border: 1px solid #107c8c;
        }
    }
    .ikea-picture-thumb__item {
        width: 44px;
        height: 38px;
    }
    .thumb-selected-tick {
        position: absolute;
        top: 6px;
        right: 8px;
    }
</style>
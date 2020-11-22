<template>
    <div class="ikea-picture-container">
        <div class="ikea-picture-thumb" :style="bgroundStl" @click="handleClick" @mouseover="mouseOver" @mouseleave="mouseLeave">
            <img class ="ikea-picture-thumb__item" v-if="type=='img'" :src='imgUrl' :style="styles"/>
            <span v-if="type=='text'" class ="ikea-picture-thumb__item base-text">+{{text}}</span>
            <img src='static/img/selected.svg' v-if='isActived' class="thumb-selected-tick"/>
        </div>
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
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 38px;
        border-radius: 4px;
        position: relative;
        .base-text {
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
    }
    .ikea-picture-thumb__item {
        width: 44px;
        margin: 4px;
        height: 38px;
    }
    .thumb-selected-tick {
        position: absolute;
        top: 7px;
        right: 10px;
    }
    .ikea-picture-container {
        padding: 1px;
        border: 1px solid #f1f1f1;
        cursor: pointer;
        display: inline-block;
        margin-right: 2px;
        border-radius: 4px;
        &:hover {
            border: 1px solid #107c8c;
        }
    }
</style>
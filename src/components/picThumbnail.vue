<template>
    <div class="ikea-picture-thumb">
        <img class ="ikea-picture-thumb__item" v-if="type=='img'" :src='imgUrl' :style="styles"/>
        <span v-else class ="ikea-picture-thumb__item base-text">+{{text}}</span>
    </div>
</template>
<script>
    import { oneOf } from '@/utils/tools'
    export default {
        name: "IkeaPictureThumb",
        props: {
            borderRedius: {
                type: [String, Function],
                default: "4"
            },

            imgUrl: String,
            type: {
                validator(value) {
                    return oneOf(value, ['img', 'text'])
                },
                default: 'img'
            },
            text: String
        },
        computed: {
            styles() {
                const style = {};
                if (this.borderRedius) {
                    style["border-radius"] = `${this.borderRedius}px`;
                }
                return style;
            },
        },
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
        &:hover {
            border: 1px solid #107c8c;
        }
    }
    .ikea-picture-thumb__item {
        width: 44px;
        height: 38px;
    }
</style>
<template>
    <i :class="classes" :style="styles" @click="handleClick"></i>
</template>
<script>
    const prefixCls = "ikea-icon";
    export default {
        name: "Icon",
        props: {
            type: {
                type: String,
                default: ""
            },
            size: [Number, String],
            color: String
        },
        computed: {
            classes() {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: this.type !== ""
                    }
                ];
            },
            styles() {
                const style = {};
                if (this.size) {
                    style["font-size"] = `${this.size}px`;
                }
                if (this.color) {
                    style.color = this.color;
                }
                return style;
            }
        },
        methods: {
            handleClick(event) {
                this.$emit("click", event);
            }
        }
    };
</script>
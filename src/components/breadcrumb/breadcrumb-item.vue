<template>
    <span class="ikea-breadcrumb-item base-text light-text__fontweight" :style="styles">
        <a
            v-if="to"
            :href="linkUrl"
            :target="target"
            :class="linkClasses"
            @click.exact="handleCheckClick($event, false)"
            @click.ctrl="handleCheckClick($event, true)"
            @click.meta="handleCheckClick($event, true)"
        >
            <slot></slot>
        </a>
        <span v-else :class="linkClasses">
            <slot></slot>
        </span>
        <span :class="separatorClasses" v-html="separator" v-if="!showSeparator"></span>
        <span :class="separatorClasses" v-else>
            <slot name="separator"></slot>
        </span>
    </span>
</template>
<script>
    import mixinsLink from "../../mixins/urlLink";
    const prefixCls = "ikea-breadcrumb-item";
    export default {
        name: "BreadcrumbItem",
        mixins: [mixinsLink],
        props: {
            fontSize: [Number, String],
            marginValue: [Number, String],
        },
        data() {
            return {
                separator: "",
                showSeparator: false
            };
        },
        computed: {
            linkClasses() {
                return `${prefixCls}-link`;
            },
            separatorClasses() {
                return `${prefixCls}-separator`;
            },
            styles() {
                const style = {};
                if (this.fontSize) {
                    style["font-size"] = `${this.fontSize}px`;
                }
                if (this.marginValue) {
                    style.margin = `0px ${this.margin}px`;
                }
                return style;
            }
        },
        mounted() {
            this.showSeparator = this.$slots.separator !== undefined;
        }
    };
</script>
<style lang='scss'>
.ikea-breadcrumb-item {
    .ikea-breadcrumb-item-link {
        &:hover{
            color: #107c8c;
            text-decoration: underline;
        }
    }
    .ikea-breadcrumb-item-separator {
        margin: 0 4px;
    }
}
</style>
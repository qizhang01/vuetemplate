<template>
    <ul class="ikea-bar__list" :style="styles">
        <li v-for="item in tabbarList" :key="item.key" :class="{ 'ikea-bar__list-item': true, isActived: item.isActived}"  @click="handleClick(item)">
            <span class="ikea-bar__list__anchor" :style="{ color: item.color }">{{item.name}}</span>
        </li>
    </ul>
</template>
<script>
    const prefixCls = 'ikea-bar__list-item'
    export default {
        name: "IkeaTabsBar",
        props: {
            height: [Number, String],
            tabbarList: Array,
        },
        computed: {
            styles() {
                const style = {};
                if (this.height) {
                    style.height = `${this.height}px`;
                }
                return style;
            },
            classes() {
                return [
                    `${prefixCls}`,
                    {
                        isActived: this.ifActive
                    }
                ]
            },
        },
        methods: {
            handleClick(e) {
                this.$emit('click', e.key)
            }
        }
    };
</script>

<style lang="scss">
    .ikea-bar__list {
        display: flex;
        list-style-type: none;
        margin: 0;
        align-items: center;
        height: 100%;
        .ikea-bar__list-item {
            padding-right: 1.4rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 100%;
            &.isActived {
                color :#107c8c;
                box-shadow: 0 1px 0 0 #107c8c;
            }
            .ikea-bar__list__anchor {
                padding: 2px 0;
                font-size: 0.875rem;
                letter-spacing: .0187rem;
                line-height: 14px;
                font-weight: 500;
            }
        }
    }
</style>
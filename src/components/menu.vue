<template>
    <ul class="ikea-menu__list" :style="styles">
        <li  v-for="(item, key) in menuList" :class="{'ikea-menu__list-item': true, 'anchor-color': item.color!=='#424242'}" :key="key" @mouseover="mouseOver(key)" @mouseleave="mouseLeave(key)">
            <a class="ikea-menu__list__anchor" :href="item.href" :style="{ color: item.color }">{{item.name}}</a>
            <embed :src="item.imgurl" type="image/svg+xml" v-if ="item.imgurl" class="ikea-menu__list-img" />
        </li>
    </ul>
</template>
<script>
    export default {
        name: "Menu",
        props: {
            size: [Number, String],
            menuList: Array
        },
        computed: {
            styles() {
                const style = {};
                if (this.size) {
                    style["font-size"] = `${this.size}px`;
                }
                return style;
            },
        },
        methods: {
            mouseOver(key) {
                console.log(key)
                this.$emit('mouseOver', key)
            },
            mouseLeave(key) {
                console.log(key)
                this.$emit('mouseLeave', key)
            }
        }
    };
</script>

<style lang="scss">
    .ikea-menu__list {
        display: flex;
        list-style-type: none;
        margin: 0;
        align-items: center;
        height: 100%;
        .ikea-menu__list-item {
            padding-right: 1.4rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 100%;
            .ikea-menu__list-img {
                position: relative;
                top:5px;
            }
            &:hover{
                color :#107c8c;
                box-shadow: 0 1px 0 0 #107c8c;
            }
            &.anchor-color:hover {
                color :#be5a5b;
                box-shadow: 0 1px 0 0 #be5a5b;
            }
            .ikea-menu__list__anchor {
                padding: 2px 0;
                font-size: 0.875rem;
                letter-spacing: .0187rem;
                line-height: 14px;
                font-weight: 500;
            }
        }
    }
</style>
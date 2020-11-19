<template>
    <ul class="ikea-menu__list" :style="styles">
        <li class="ikea-menu__list-item" v-for="(item, key) in menuList" :key="key">
            <a class="ikea-menu__list__anchor" :href="item.href" :style="{ color: item.color }">{{item.name}}</a>
            <image v-if ="item.imgurl" class="ikea-menu__list-img" :src="item.imgurl"></image>
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
            height: 100%;
            &:hover{
                color :#107c8c;
                box-shadow: 0 1px 0 0 #107c8c;
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
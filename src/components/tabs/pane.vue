<template>
    <div class="ikea-tabs-tabpane" v-show="show" :style="contentStyle">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "TabPane",
        props: {
            name: {
                type: String
            },
            label: {
                type: [String, Function],
                default: ""
            },

            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                show: true,
                currentName: this.name
            };
        },
        computed: {
            contentStyle() {
                return {
                    visibility:
                        this.TabsInstance.activeKey !== this.currentName
                            ? "hidden"
                            : "visible"
                };
            }
        },
        methods: {
            updateNav() {}
        },
        watch: {
            name(val) {
                this.currentName = val;
                this.updateNav();
            },
            label() {
                this.updateNav();
            },

            disabled() {
                this.updateNav();
            }
        },
        mounted() {
            this.updateNav();
        },
        destroyed() {
            this.updateNav();
        }
    };
</script>
<template>
    <div class="ikea-breadcrumb">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "Breadcrumb",
        props: {
            separator: {
                type: String,
                default: ">"
            }
        },
        computed: {},
        mounted() {
            this.updateChildren();
        },
        updated() {
            this.$nextTick(() => {
                this.updateChildren();
            });
        },
        methods: {
            updateChildren() {
                this.$children.forEach(child => {
                    child.separator = this.separator;
                });
            }
        },
        watch: {
            separator() {
                this.updateChildren();
            }
        }
    };
</script>
<template>
    <component :is="tagName"
               :class="classes"
               :disabled="disabled"
               @click="handleClickLink"
               v-bind="tagProps">
        <Icon :type="icon"
              v-if="icon"></Icon>
        <span ref="slot">
            <slot></slot>
        </span>
    </component>
</template>
<script>
    import Icon from './icon'
    import { oneOf } from '@/utils/tools'
    const prefixCls = 'ikea-btn'

    export default {
        name: 'Button',
        components: { Icon },
        props: {
            type: {
                validator(value) {
                    return oneOf(value, ['default', 'primary'])
                },
                default: 'default'
            },
            shape: {
                validator(value) {
                    return oneOf(value, ['circle', 'circle-outline'])
                }
            },
            size: {
                validator(value) {
                    return oneOf(value, ['small', 'large', 'default'])
                },
                default() {
                    return !this.$IVIEW || this.$IVIEW.size === ''
                        ? 'default'
                        : this.$IVIEW.size
                }
            },
            disabled: Boolean,

            icon: {
                type: String,
                default: ''
            },

            long: {
                type: Boolean,
                default: false
            },
            ghost: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {}
        },
        computed: {
            classes() {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.type}`,
                    {
                        [`${prefixCls}-long`]: this.long,
                        [`${prefixCls}-${this.shape}`]: !!this.shape,
                        [`${prefixCls}-${this.size}`]: this.size !== 'default',
                        [`${prefixCls}-ghost`]: this.ghost
                    }
                ]
            },

            isHrefPattern() {
                const { to } = this
                return !!to
            },

            tagName() {
                const { isHrefPattern } = this
                return isHrefPattern ? 'a' : 'button'
            },

            tagProps() {
                const { isHrefPattern } = this
                if (isHrefPattern) {
                    const { linkUrl, target } = this
                    return { href: linkUrl, target }
                }
                return {}
            }
        },
        methods: {
            handleClickLink(event) {
                this.$emit('click', event)
                const openInNewWindow = event.ctrlKey || event.metaKey
                this.handleCheckClick(event, openInNewWindow)
            }
        },
        mounted() {
            this.showSlot = this.$slots.default !== undefined
        }
    }
</script>

<style>

</style>
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
        name: 'IkeaButton',
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
            bgcolor: String,
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
            return {
                isClicked: false
            }
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
                        [`${prefixCls}-ghost`]: this.ghost,
                        [`${prefixCls}-${this.bgcolor}`]: this.bgcolor,
                        isClicked: this.isClicked
                    }
                ]
            },

            isHrefPattern() {
                const { to } = this
                return !!to
            },

            tagName() {
                const { isHrefPattern } = this
                return isHrefPattern ? 'a' : 'div'
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
                this.isClicked = true
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
    .ikea-btn {
        background: #fff;
        font-size: 0.72rem;
        font-weight: 500;
        line-height: 1.1rem;
        letter-spacing: 0.025rem;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        padding: 8px 12px;
        transition: all 75ms ease;
        cursor: pointer;
        display: inline-block;
    }
   .ikea-btn-long {
       width: 408px;
       height: 54px;
   }
   .ikea-btn-black {
       color: #fff;
       background-color: #262626;
   }
</style>
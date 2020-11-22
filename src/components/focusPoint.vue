<template>
    <div class="ikea-focus-point">
        <i class="article-star_icon"></i>
        <span class='base-text medium-text__fontweight'>{{fraction}}</span>
        <span class='base-text light-text__fontweight'>{{reviews}}</span>
    </div>
</template>
<script>
    export default {
        name: "IkeaFocusPoint",
        props: {
            denominator: [Number,String],
            numerator: [Number,String],
            totalNumber: [Number,String]
        },
        computed: {
            fraction() {
                return `${this.denominator}/${this.numerator}`
            },
            reviews() {
                return `(${this.totalNumber}reviews)`
            }
        }
    };
</script>

<style lang="scss">
.ikea-focus-point {

}
.article-star_icon {
     &:before {
        content: '';
        background-image: url('../../static/img/star.svg');
        display: inline-block;
        height: 16px;
        width: 16px;
        transform: scale(0.7);
        position: relative;
        top: 1px;
    }
}
</style>
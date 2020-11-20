<template>
    <div >
        <div class="customize-button__group">
            <IkeaButton>Popular</IkeaButton>
            <IkeaButton>All</IkeaButton>
            <IkeaButton>Velvets</IkeaButton>
            <IkeaButton>Pet-friendly</IkeaButton>
            <IkeaButton>Safeguard</IkeaButton>
        </div>
        <div class="customize-content">
            <div class="customize-content__image"></div>
            <span class="customize-content__topic medium-text">Taylor Felt Grey</span>
            <svg width="11" height="11" viewBox="0 0 16 16" class="customize-content__icon"><g fill="#8d8d8d" fill-rule="nonzero"><path d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 15.015A7.023 7.023 0 01.985 8 7.023 7.023 0 018 .985 7.023 7.023 0 0115.015 8 7.023 7.023 0 018 15.015z"></path><circle cx="8.128" cy="4.81" r="1"></circle><path d="M7.91 6.976a.492.492 0 00-.492.493v4.184a.492.492 0 00.985 0V7.47a.492.492 0 00-.492-.493z"></path></g></svg>
        </div>
        <div class="customize-create">
            <div class="customize-create__button">Create your style</div>
            <div><span class="customize-create__book color-tag-a base-text">Get a free swatch kit</span></div>
        </div>
        <div class="customize-notice__panel">
           <div>
               <div>Buy Now,Decide Later</div>
               <div>(Sale ends 11/17)</div>
           </div>
           <IkeaButton  bgcolor ='black'>Lock in 25% off now</IkeaButton>
           <button class="close-button" type="button"><svg width="9" height="9" viewBox="0 0 14 14"><path d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7z" fill="#5a5a5a" fill-rule="nonzero"></path></svg></button>
        </div>
    </div>
</template>

<script>
    import IkeaButton from '@/components/button'
    export default {
        data() {
            return {
            };
        },
        methods: {

        },
        components: { IkeaButton }
    };
</script>

<style lang='scss' scoped>
    .customize-create {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    }
    .customize-notice__panel {
        padding: 16px;
        background-color: #f7f2e8;
        display: flex;
        justify-content: space-between;
        border-radius: 5px;
        margin-top: 10px;
        position: relative;
        .ikea-btn {
            margin-right: 26px;
        }
        .close-button {
             position: absolute;
             top:0px;
             right: 0px;
             transform: scale(0.6)
        }
    }

    .customize-create__button {
        padding: 0.6rem 1.1rem;
        border-radius: 20px;
        position: relative;
        // &:before {
        //     z-index: 0;
        //     width: 100%;
        //     height: 100%;
        //     content: '';
        //     display: block;
        //     position: absolute;
        //     background: linear-gradient(90deg,#fdde5c,#f8ab5e 16.66667%,#f56a62 33.33333%,#a176c8 50%,#759beb 66.66667%,#65beb3 83.33333%,#70db96)
        // }
        // &:after {
        //     z-index: 1;
        //     width: calc(100% - 4px);
        //     height: calc(100% - 4px);
        //     content: '';
        //     display: block;
        //     position: absolute;
        //     background: #fff;
        // }
    }
    .ikea-btn:hover{
        border: 1px solid #8d8d8d;
    }
    .ikea-btn.isClicked{
        border: 1px solid #016a78;
    }
    .customize-content__image {
        height: 12px;
        width: 12px;
        display: inline-block;
        border-radius:50%;
        background: url("https://joybird2.imgix.net/static-v1/sprites/swatch-1605600587952.png?auto=compress,format&w=1550") -390px -325px / 775px no-repeat;
    }
    .customize-content__topic {
        margin-left: 5px;
    }
    .customize-button__group {
        margin-bottom: 1.625rem;
    }
    .customize-create__book {
        &:before {
            content: '';
            display: inline-block;
            height: 15px;
            width: 22px;
            background-image: url('../../static/img/book.svg');
            margin-right: 5px;
        }
    }
    .customize-content__icon {
        &:hover{
            path {
                cursor: pointer;
                stroke: #107c8c;
            }
        }
    }
</style>
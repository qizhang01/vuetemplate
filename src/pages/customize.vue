<template>
    <div >
        <div class="customize-button__group">
            <IkeaButton v-for="item in buttonGroup" :isActived="item.isActived" :key="item.id" @click="handleButtonClick(item.id)">{{item.name}}</IkeaButton>
        </div>
        <div class="customize-content">
            <div class="customize-content__image"></div>
            <span class="customize-content__topic medium-text">Taylor Felt Grey</span>
            <svg width="11" height="11" viewBox="0 0 16 16" class="customize-content__icon"><g fill="#8d8d8d" fill-rule="nonzero"><path d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 15.015A7.023 7.023 0 01.985 8 7.023 7.023 0 018 .985 7.023 7.023 0 0115.015 8 7.023 7.023 0 018 15.015z"></path><circle cx="8.128" cy="4.81" r="1"></circle><path d="M7.91 6.976a.492.492 0 00-.492.493v4.184a.492.492 0 00.985 0V7.47a.492.492 0 00-.492-.493z"></path></g></svg>
        </div>
        <div class="customize-picture__wall">
            <IkeaPictureThumb v-for="item in selectBgPicture" :type="item.type" :imgUrl="item.imgUrl" :text="item.text" :bground="item.bground" :isActived ="item.isActived" @click="handlePicWallClick(item.id)" @mouseOver="handleMouseOver(item.id)" @mouseLeave="handleMouseLeave(item.id)" :key="item.id" />
            <div class="customize-picture__wall-card" v-show="isShowCard">
            </div>
        </div>
        <div class="customize-create">
            <div class="customize-create__button">Create your style</div>
            <div><span class="customize-create__book color-tag-a base-text">Get a free swatch kit</span></div>
        </div>
        <div class="customize-notice__panel" v-if="isShowBuyNow">
           <div>
               <div>Buy Now,Decide Later</div>
               <div>(Sale ends 11/17)</div>
           </div>
           <IkeaButton  bgcolor ='black'>Lock in 25% off now</IkeaButton>
           <button class="close-button" @click="handleCloseButton" type="button"><svg width="9" height="9" viewBox="0 0 14 14"><path d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7z" fill="#5a5a5a" fill-rule="nonzero"></path></svg></button>
        </div>
    </div>
</template>

<script>
    import IkeaButton from '@/components/button'
    import IkeaPictureThumb from '@/components/picThumbnail'
    import { selectBgPicture } from '@/config/index.js'
    const buttonGroup = [
        { id: 1, name: 'Popular', isActived: true },
        { id: 2, name: 'All', isActived: false },
        { id: 3, name: 'Velvets', isActived: false },
        { id: 4, name: 'Pet-friendly', isActived: false },
        { id: 5, name: 'Safeguard', isActived: false },
    ]
    export default {
        data() {
            return {
                selectBgPicture,
                isShowCard: false,
                buttonGroup,
                isShowBuyNow: true
            };
        },
        methods: {
            handleButtonClick(id) {
                const filterItem = this.buttonGroup.filter(item => item.id === id)
                if (filterItem[0].isActived) return
                this.buttonGroup.map(item => {
                    if (item.id === id) {
                        item.isActived = !item.isActived
                    } else {
                        item.isActived = false
                    }
                })
            },

            handlePicWallClick(id) {
                const filterItem = this.selectBgPicture.filter(item => item.id === id)
                if (filterItem[0].isActived) return
                this.selectBgPicture.map(item => {
                    if (item.id === id) {
                        item.isActived = !item.isActived
                    } else {
                        item.isActived = false
                    }
                })
            },

            handleMouseOver(id) {
                this.isShowCard = true
                console.log(id)
            },
            handleMouseLeave(id) {
                this.isShowCard = false
            },
            handleCloseButton() {
                this.isShowBuyNow = false;
            }
        },
        components: { IkeaButton, IkeaPictureThumb }
    };
</script>

<style lang='scss' scoped>
    .customize-create {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .customize-notice__panel {
        padding: 16px;
        background-color: #f7f2e8;
        display: flex;
        justify-content: space-between;
        border-radius: 5px;
        margin-top: 30px;
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
        color: #424242;
        font-size: 15px;
        padding: 0.6rem 1.1rem;
        background: #fff;
        border: 1px transparent solid;
        border-radius: 30px;
        position: relative;
        &:hover {
            text-decoration: underline;
        }
        &:after {
            content: "";
            z-index: -1;
            border-radius: 30px;
            top: -4px;
            bottom: -4px;
            left: -4px;
            right: -4px;
            position: absolute;
            background: linear-gradient(90deg,#fdde5c,#f8ab5e 16.66667%,#f56a62 33.33333%,#a176c8 50%,#759beb 66.66667%,#65beb3 83.33333%,#70db96);
        }
    }
    .ikea-btn:hover{
        border: 1px solid #8d8d8d;
    }
    .ikea-btn.ikea-btn-isActived{
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
        .ikea-btn {
            margin-right: 6px;
        }
    }
    .customize-create__book {
        &:hover {
            text-decoration: underline;
        }
        &:before {
            content: '';
            display: inline-block;
            height: 16px;
            width: 22px;
            transform: scale(1.1);
            background-image: url('../../static/img/book.svg');
            margin-right: 10px;
            position: relative;
            top: 4px;
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
    .customize-picture__wall{
        position: relative;
        margin: 20px 0px;
        .customize-picture__wall-card {
            position: absolute;
            height: 400px;
            width: 420px;
            top: 0px;
            left: -425px;
            background: #fff;
        }
    }
</style>
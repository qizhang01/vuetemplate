<template>
<div>
    <div>
        <article>
            <i class="article-star_icon"></i>
            <span class='RatingAndReviews__rating base-text medium-text__fontweight'>4.8/5</span>
            <span class='RatingAndReviews__review base-text light-text__fontweight'>(114reviews)</span>
        </article>
        <h1>Eliot Sleeper Sectional</h1>
        <div><span class="Currency big-text">$3,850</span></div>
        <div class="summary">
            <p class="base-text light-text__fontweight">
                From $214/mo for 18 months at 0% APR
                <a>Learn More</a>
            </p>
        </div>
    </div>
    <div>
        <Customize />
    </div>
    <div class="PDPChooseYourOptionsUI__section marginTop">
        <div class="content-title">Select Orientation</div>
        <div class="ImageAndTextOptionDisplay__container">
           <div v-for="( item ) in orientList" :key="item.id" @click='handleOrientClick(item)'>
                <IkeaTypeSwitch :text="item.text"  :ifActive="item.ifActive" :url="item.url" />
           </div>
        </div>
    </div>

    <div class="PDPProtectionPlanSelectorUI marginTop">
        <div class="content-title">
            Protect Your Investment
        </div>
        <div class="ProtectionPlan__container">
            <div class="cart-item-protection">
                <div>
                    <span>Add 5-year Protection Plan from</span>&nbsp;<span>$327</span>
                    <div class='cart-item-protection__notice base-text'>What's covered?</div>
                </div>
            </div>
        </div>
    </div>
    <div class="PDPAddToBagSectionUI marginTop">
        <div class="PDPAddToBagSectionUI__addtoCartRow">
            <IkeaButton long bgcolor="black">Add to Bag</IkeaButton>
            <div class= 'FavoriteButtonUI__img-heart-wrapper btnFavorite'>
                <svg width="24" height="22"><path d="M14.433 1.448a5.068 5.068 0 00-3.717 2.241 5.068 5.068 0 10-7.808 6.385l7.806 7.808 7.807-7.808a5.068 5.068 0 00-4.088-8.626z" stroke="#585858" stroke-width="1.5" fill="none"></path></svg>
            </div>
        </div>
        <div class="PDPLeadTimeUI__container medium-text">
            <span class="ships-in-text">Ships in</span>
            <span> 6 weeks</span>
            <span class="color-tag-a">Add ZIP</span>
        </div>
    </div>
</div>
</template>

<script>
    import IkeaTypeSwitch from '@/components/typeSwitch'
    import IkeaButton from '@/components/button'
    import Customize from './customize'
    export default {
        data() {
            return {
                orientList: [{
                    id: 1,
                    url: 'static/img/left.svg',
                    text: 'left',
                    ifActive: true
                },{
                    id: 2,
                    url: 'static/img/right.svg',
                    text: 'right',
                    ifActive: false
                }]
            };
        },
        methods: {
            handleOrientClick(item) {
                console.log(item)
            }
        },
        components: { IkeaTypeSwitch, IkeaButton , Customize }
    };
</script>

<style lang='scss' scoped>
$marginTop: 32px;
.marginTop {
    margin-top: $marginTop
}
.summary {
    a{
        color: #107c8c;
    }
}
.content-title {
    font-size: 0.875rem;
line-height: 1.5rem;
font-weight: 500;
letter-spacing: .0187rem;
margin-bottom: 0.375rem;
}
.ProtectionPlan__container {
   .cart-item-protection {
       font-size:0.8125rem;
       font-weight:500;
       line-height: 1.3125rem;
       color: #424242;
       min-height: 3rem;
       padding: 12px;
       cursor: pointer;
       border-radius: 4px;
       border: 1px solid #e5e5e5;
        display: flex;
        align-items: center;
       &:hover{
           border: 1px solid #8d8d8d;
       }
       .cart-item-protection__notice {
           color:#107c8c;
       }
        &:before {
           content: '';
           background-image: url('../../static/img/notice.svg');
           height:48px;
           display: block;
           width: 48px;
           margin-right: 0.8rem;
       }
   }
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
.ImageAndTextOptionDisplay__container {
   display: flex;
   justify-content: flex-start;
}
.PDPAddToBagSectionUI__addtoCartRow {
    display: flex;
    align-items: center;
    justify-content:space-between;
    .ikea-btn {
        cursor: pointer;
    }
    .btnFavorite {
        width: 48px;
        height: 48px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            background-color: #f6f6f6;
            border-radius: 50%;
        }
    }
}
.PDPLeadTimeUI__container{
    text-align: center;
    margin-top: 1rem;
}
.PDPChooseYourOptionsUI__section {
    overflow-x: scroll;
}
</style>
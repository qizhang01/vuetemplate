<template>
    <div >
        <div>
            <div class="mainContent-content">
                <img class="RatioContainer " :src="showPictureUrl"/>
                <span class="mainContent-content__new  base-text medium-text__fontweight">New</span>
            </div>
            <div class="mainContent-content__select">
                <section class="mainContent-content__select-item">
                   <IkeaPictureThumb v-for="item in thumbSectionList1" :type="item.type" :imgUrl="item.imgUrl" :text="item.text" :key="item.id" @click="handleClick(item)" />
                </section>
                <section class="mainContent-content__select-item">
                    <IkeaPictureThumb v-for="item in thumbSectionList2" :type="item.type" :imgUrl="item.imgUrl" :text="item.text" :key="item.id" @click="handleClick(item)"/>
                </section>
                <section class="mainContent-content__select-item">
                    <span class="base-text light-text__fontweight" v-show="ifShowRightText"> Shown in</span>&nbsp;
                    <span class="color-tag-a base-text medium-text__fontweight" v-show="ifShowRightText"> Key Largo Zenith Teal</span>
                </section>
            </div>
        </div>
       <div class="PDPKeySellingPointsUI" v-once>
            <IkeaSellingPoint v-for="item in sellingPointList" :imgUrl="item.imgUrl" :text = "item.text" :key="item.id"></IkeaSellingPoint>
        </div>
    </div>
</template>

<script>
    import IkeaSellingPoint from '@/components/sellingPoint'
    import { thumbSectionList1, thumbSectionList2 } from '@/config/index.js'
    import IkeaPictureThumb from '@/components/picThumbnail'
    import { mapState, mapActions } from 'vuex'

    export default {
        data() {
            return {
                sellingPointList: [{
                    id: 1,
                    imgUrl: 'static/img/sellingPoint1.svg',
                    text: 'Unlimited flat rate shipping'
                },{
                    id: 2,
                    imgUrl: 'static/img/sellingPoint2.svg',
                    text: '90-day returns'
                }],

                thumbSectionList1,
                thumbSectionList2
            };
        },
        computed: {
            ...mapState('user',{
                showPictureUrl: state => state.showPictureUrl,
                ifShowRightText: state => state.ifShowRightText
            })
        },
        methods: {
            handleClick(item) {
                this.changePictureUrl(item)
            },
            ...mapActions('user', ['changePictureUrl'])
        },
        components: { IkeaPictureThumb,IkeaSellingPoint }
    };
</script>

<style lang='scss' scoped>
.mainContent-content {
    position: relative;
    margin-bottom: 1rem;
    .mainContent-content__new {
        position: absolute;
        top: 20px;
        left: 15px;
        background-color: #f7f2e8;
        padding: 0px 0.75rem;
        height: 25px;
        line-height: 25px;
    }
    .RatioContainer{
        max-width: calc(100% - 100px);
    }
}
.mainContent-content__select {
    display: flex;
    max-width: calc(100% - 100px);
    align-items: center;
    padding: 2px 0px;
    justify-content: space-between;
    .mainContent-content__select-item {
        display: flex;
        align-items: center;
        width: 250px;
        justify-content: center;
        .ikea-picture-container {
            margin-right: 4px;
        }
        .bsae-text{
            cursor: pointer;
        }
        &:last-child {
            justify-content:flex-end;
        }
    }
}
.PDPKeySellingPointsUI {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    max-width: calc(100% - 100px);
}

</style>
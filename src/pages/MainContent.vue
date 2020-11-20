<template>
    <div >
        <div>
            <div class="mainContent-content">
                <img class="RatioContainer " src="static/img/1.jpg"/>
                <span class="mainContent-content__new  base-text medium-text__fontweight">New</span>
            </div>
            <div class="mainContent-content__select">
                <section class="mainContent-content__select-item">
                   <IkeaPictureThumb v-for="item in thumbSectionList1" :type="item.type" :imgUrl="item.imgUrl" :text="item.text" :key="item.id" />
                </section>
                <section class="mainContent-content__select-item">
                    <IkeaPictureThumb v-for="item in thumbSectionList2" :type="item.type" :imgUrl="item.imgUrl" :text="item.text" :key="item.id" />
                </section>
                <section class="mainContent-content__select-item">
                    <span class="base-text light-text__fontweight"> Shown in</span>
                    <span class="color-tag-a base-text medium-text__fontweight"> Key Largo Zenith Teal</span>
                </section>
            </div>
        </div>
       <div class="PDPKeySellingPointsUI">
            <IkeaSellingPoint v-for="item in sellingPointList" :imgUrl="item.imgUrl" :text = "item.text" :key="item.id"></IkeaSellingPoint>
        </div>
    </div>
</template>

<script>
    import IkeaSellingPoint from '@/components/sellingPoint'
    import { thumbSectionList1, thumbSectionList2 } from '@/config/index.js'
    import IkeaPictureThumb from '@/components/picThumbnail'

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
        methods: {

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
    justify-content: space-between;
    .mainContent-content__select-item {
        display: flex;
        align-items: center;
        .bsae-text{
            cursor: pointer;
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
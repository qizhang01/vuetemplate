<template>
    <div class="ikea-selling-point">
        <img class ="selling-icon" :src='imgUrl'/>
        <div class = "selling-text base-text light-text__fontweight">{{text}}</div>
    </div>
</template>
<script>
    export default {
        name: "IkeaSellingPoint",
        props: {
            imgUrl: String,
            text: String,
        }
    };
</script>

<style lang="scss">
.ikea-selling-point {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 0.5rem;
    margin: 0 1.25rem;
    max-width: 33vw;
    .selling-icon {
        margin-bottom: 1rem;
    }
}
</style>
<template>
    <div class="pd-10 main-page">
        <h3>
            <i class="primay-color my-icon-success"></i> Home22 Page
        </h3>
        <hr />
        <Button @click="getAndGo" disabled>stage1</Button>
        <Button @click="getAndGo2">stage2</Button>
        <Button @click="getAndGo3">stage3</Button>
        <a href="./" class="right">
            <Button>Logout</Button>
        </a>
        <router-view></router-view>
    </div>
</template>

<script>
    import { Button } from "@/components/button";
    export default {
        data() {
            return {
                data: null,
                dataList: [],
                total: 0,
                pageIndex: 1,
                pageSize: 6,
                loading: false
            };
        },
        methods: {
            callMockApi() {},
            callLoading() {},
            callUnmockedApi() {},
            callOtherApi() {},
            getAndGo() {},
            getAndGo2() {},
            getAndGo3() {}
        },
        components: { Button }
    };
</script>

<style>
</style>
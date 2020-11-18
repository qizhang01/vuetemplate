<template>
    <div class="pd-10 main-page">
        <h3>
            <i class="primay-color my-icon-success"></i> Home Page
        </h3>

        <div style="padding: 20px 0;">
            <el-button
                @click="callMockApi"
                :loading="loading"
                size="small"
                type="primary"
            >call mocked api</el-button>
            <el-button @click="callLoading" size="small" type="primary">call base api</el-button>
            <el-button @click="callUnmockedApi" size="small">call base api(not mocked)</el-button>
            <el-button @click="callOtherApi" size="small">call other api servers by {xxx} prefix</el-button>
        </div>

        <header>Ajax Result: {{data}}</header>
        <hr />
        <el-table :data="dataList">
            <el-table-column prop="id" label="id"></el-table-column>
            <el-table-column prop="name" label="name"></el-table-column>
            <el-table-column label="operation">
                <template>
                    <el-button type="text" size="small">Edit</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            :total="total"
            :page-size="pageSize"
            :current-page.sync="pageIndex"
            @current-change="callLoading"
        ></el-pagination>
        <hr />

        <button @click="getAndGo">stage1</button>
        <button @click="getAndGo2">stage2</button>
        <button @click="getAndGo3">stage3</button>

        <a href="./" class="right">
            <button>Logout</button>
        </a>

        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
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
    components: {}
};
</script>

<style scoped lang="scss">
</style>
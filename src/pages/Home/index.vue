<template>
    <div>
        <header class="header-container">
            <span>Save 35% sitewide - our BIGGEST savings of the year</span>
        </header>
        <nav class="navbar-container">
            <div class="consumer__btn-container">
                <div class="consumer-navbar__list-item">
                    <a class="consumer-navbar__list__anchor" href="/customer-photos/">Get Inspired</a>
                </div>
                <div class="consumer-navbar__list-item shop-by" @mouseover="mouseOver" @mouseleave="mouseLeave">
                    <a class="consumer-navbar__list__anchor">
                        Shop By
                    </a>
                    <svg width="9" height="5" viewBox="0 0 9 5" class="consumer-navbar__list__anchor-more">
                        <path fill="#000" fill-rule="nonzero" d="M4.462 5L0 .672.692 0 4.46 3.732 8.309 0 9 .672z"></path>
                    </svg>
                </div>
                <div class="consumer-navbar__important-update">
                    <div>
                        <p>
                            Joybird's Updates Regarding COVID-19.
                            <a href="/update/">Learn More</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="consumer__btn-container consumer__btn-container--right">
                <div class="consumer-navbar__list-item">
                    <div class="consumer-navbar__list__anchor consumer-navbar__sign-in-link">
                        <span class="consumer-navbar__my-joybird">My </span>
                        <svg width="16" height="11" viewBox="0 0 16 11">
                            <g fill="#585858" fill-rule="nonzero">
                                <path d="M10.45 4.4c-1.46 2.334-4.36 2.057-8.283-.248-.981-.575-1.796.113-2.04.945-.552-2.282.797-2.939 2.225-2.136 3.267 1.836 5.747 3.77 8.097 1.44z"></path>
                                <path d="M8.56 8.304c3.846-.486 5.04-3.667 6.035-7.286l1.12-.22-.997-.229C14.143 0 13.556-.1 13.048.085c-.542.199-.926.685-1.184 1.169-.97 1.813-.845 4.7-3.762 5.09-2.016.27-4.031-.641-6.138-1.89-.81-.478-2.209.656-.956 1.64 1.634 1.285 3.99 2.393 6.824 2.27h.003c.067.21.266.941.034 1.676-.992.456-3.526.45-3.908.908h8.453c-.383-.458-2.915-.452-3.907-.908-.275-.869.054-1.736.054-1.736zm5.212-7.96c.115 0 .21.092.21.204a.206.206 0 01-.21.204.207.207 0 01-.21-.204c0-.112.094-.203.21-.203z"></path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="consumer-navbar__list-item">
                    <a class="consumer-navbar__list__anchor" href="/blog">Blog</a>
                </div>
                <div class="consumer-navbar__list-item">
                    <a class="consumer-navbar__list__anchor" href="https://help.joybird.com">Help</a>
                </div>
                <div class="consumer-navbar__list-item about" @mouseover="mouseOver" @mouseleave="mouseLeave">
                    <a class="consumer-navbar__list__anchor ">About
                    </a>
                    <svg width="9" height="5" viewBox="0 0 9 5" class="consumer-navbar__list__anchor-more">
                        <path fill="#000" fill-rule="nonzero" d="M4.462 5L0 .672.692 0 4.46 3.732 8.309 0 9 .672z"></path>
                    </svg>
                </div>
            </div>
            <div class="navbar-container__list" v-show="ifShowMenuList">
                <div class="nav-list">这里是菜单内容</div>
            </div>
        </nav>
        <div class = "tabs-container">
            <section class="logo-section">
                <img src='static/img/log.png' />
            </section>
            <section class="menu-section">
                <IkeaMenuBar :menuList='menuList' @mouseOver="mouseOverMenu" @mouseLeave="mouseLeaveMenu"></IkeaMenuBar>
            </section>
            <section class = "tool-section">
                <div class="tool-section-item" key="search" >
                    <svg xmlns="http://www.w3.org/2000/svg"  width="17" height="19">
                        <path d="M7.563 14.125A6.563 6.563 0 117.563 1a6.563 6.563 0 010 13.125zm4.375-1.094l4.374 5.469-4.375-5.469z"
                            stroke="#484848" stroke-width="1.5" fill="none" fill-rule="evenodd">
                        </path>
                    </svg>
                </div>
                <div class="tool-section-item" key="focus" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19">
                        <path d="M14.433 1.448a5.068 5.068 0 00-3.717 2.241 5.068 5.068 0 10-7.808 6.385l7.806 7.808 7.807-7.808a5.068 5.068 0 00-4.088-8.626z" stroke="#484848" stroke-width="1.5" fill="none" fill-rule="evenodd"></path>
                    </svg>
                </div>
                <div class="tool-section-item" key="lock" >
                    <svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                        <g id="Symbols" fill="none" fill-rule="evenodd">
                            <g id="icon-/-24px-/-cart" transform="translate(-3 -2)" stroke="#484848" stroke-width="1.5">
                                <g id="Cart-Icon" transform="translate(3 3)">
                                    <g id="Cart">
                                        <path d="M13.5,4.42285714 C13.5,1.98018059 11.4852814,0 9,0 C6.51471863,0 4.5,1.98018059 4.5,4.42285714" id="Oval-2">
                                        </path>
                                        <rect id="Rectangle-4" x="0.75" y="4.125" width="16.5" height="13.125" rx="2"></rect>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </section>
            <div class="navbar-container__list" v-show="ifShowNavList">
                <div class="nav-list">{{navContent}}</div>
            </div>
        </div>
        <main class="content-container">
            <div class="content-container__breadcrumb">
                <Breadcrumb separator=">" >
                    <BreadcrumbItem v-for="item in breadcrumbList" :key="item.id" :to="item.to">{{item.name}}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div class= "content-container__panel">
                <div class='content-container-panel__main'><MainContent /></div>
                <div class='content-container-panel__side'>
                    <AsideContent />
                </div>
            </div>
        </main>
        <router-view></router-view>
    </div>
</template>

<script>
    // import Button from "@/components/button";
    import IkeaMenuBar from '@/components/menuBar'
    import Breadcrumb from '@/components/breadcrumb/breadcrumb'
    import BreadcrumbItem from '@/components/breadcrumb/breadcrumb-item'
    import AsideContent from './AsideContent'
    import MainContent from './MainContent'


    const defaultColor = "#424242"
    const menuList = [{
        key: 1,
        name: 'Living Room',
        imgurl: '',
        href: '',
        color: defaultColor,
    },{
        key: 2,
        name: 'Dining Room',
        imgurl: '',
        color: defaultColor,
    },{
        key: 3,
        name: 'Breadroom',
        imgurl: '',
        color: defaultColor,
    },{
        key: 4,
        name: 'Office',
        imgurl: '',
        color: defaultColor,
    },{
        key: 5,
        name: 'Outdoor',
        imgurl: '',
        color: defaultColor,
    },{
        key: 6,
        name: 'Decor',
        imgurl: '',
        color: defaultColor,
    },{
        key: 7,
        name: 'sale',
        imgurl: '',
        color: "#be5a5b",
    },{
        key: 8,
        name: 'inspiration',
        imgurl: '../../static/img/underline.svg',
        color: defaultColor,
    }]
    const breadcrumbList = [{
        id: 1,
        to: '/',
        name: 'Home'
    },{
        id: 2,
        to: '/',
        name: 'Living Room Furniture'
    },{
        id: 3,
        to: '/',
        name: 'Sofas, Sectionals & Loveseats'
    },{
        id: 4,
        to: '/',
        name: 'Sectionals'
    },{
        id: 5,
        to: '',
        name: 'Eliot Sleeper Sectional'
    }]
    export default {
        data() {
            return {
                ifShowMenuList: false,
                ifShowNavList: false,
                navContent: '',
                loading: false,
                menuList,
                breadcrumbList,
            };
        },
        methods: {
            mouseOver(e) {
                this.ifShowMenuList = true
            },
            mouseLeave(e) {
                this.ifShowMenuList = false
            },
            handleClickTool(item) {
                console.log(item)
            },
            mouseOverMenu(e) {
                this.navContent = `${menuList[e].name}的内容`
                this.ifShowNavList = true
            },
            mouseLeaveMenu(e) {
                this.ifShowNavList = false
            }
        },
        components: { IkeaMenuBar, AsideContent, Breadcrumb, BreadcrumbItem, MainContent }
    };
</script>

<style lang="scss">
    $padding: 3.33vw;
    $margin: 6vw;

    .navbar-container {
        position: relative;
        border-color: #f1f1f1;
        border-bottom: 1px solid #f1f1f1;
        background-color: #f6f6f6!important;
        font-size:  0.72rem;
        font-weight: 400;
        line-height: 1.1rem;
        height:40px;
        letter-spacing: .025rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .consumer__btn-container {
            display: flex;
            align-items: center;
            width: 100%;
            color: #424242;
            margin-left : $padding;
            .consumer-navbar__list-item{
                padding: 0 1rem;
                &:first-child{
                    padding-left: 0
                }
            }
            .consumer-navbar__important-update{
                display: flex;
                flex: 1 1;
                justify-content: center;
                a {
                    color: #107c8c;
                    margin-left: 5px;
                }
            }
            &.consumer__btn-container--right {
                width: auto;
                flex-shrink: 0;
                margin-right: 3.33vw;
            }
        }
    }
    .tabs-container {
        position: relative;
        height: 3.75rem;
        border-bottom: 1px solid #f1f1f1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo-section {
            padding-left: $padding;
        }
        .tool-section{
            display: flex;
            align-items: center;
            padding-right: $padding;
            .tool-section-item {
                margin: 0 16px;
                &:hover{
                    cursor: pointer;
                    svg path {
                        cursor: pointer;
                        stroke: #107c8c;
                    }
                }
            }
        }
        .navbar-container__list{
            top: 64px;
        }
    }
    .menu-section {
        display: flex;
        width: 68.5%;
        align-items: center;
        height: 100%;
    }
    .content-container {
        margin: 0px $margin;
        .content-container__panel {
            padding: 10px 0px;
            display: flex;
            justify-content: space-between;
        }
        .content-container__breadcrumb {
            min-height: 45px;
            line-height: 45px;
        }
    }
    .content-container-panel__side {
        width: 460px;
        min-width: 460px;
        flex: 0 1;
    }
    .content-container-panel__main {
        flex: 1 1;
        margin-right: 3rem;
    }
    .navbar-container__list {
        position: absolute;
        // min-height: 300px;
        height: calc(100vh - 100px);
        background: rgba(0,0,0,0.3);
        width: 100%;
        z-index: 9000;
        top: 40px;
        .nav-list {
            min-height: 300px;
            height: 300px;
            background: #fff;
            opacity: 1;
        }
    }
    .consumer-navbar__sign-in-link {
        svg {
            position: relative;
            top: 1px;
        }
        svg path {
            stroke: #107c8c;
        }
        &:hover {
            cursor: pointer;
            color: #107c8c;
        }
    }
    .consumer-navbar__list-item{
        &.shop-by:hover,
        &.about:hover
        {
            svg {
                transform: rotate(180deg)
            }
        }
    }
    .header-container {
        color: #dbeded;
        min-height: 50px;
        height: 50px;
        font-weight: 500;
        font-size: 0.875rem;
        background: rgb(1, 106, 120);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
<template>
    <title>All Notifications - Buyer Dashboard | Produce Mart</title>
    <dash-sidebar/>

    <section class="main_content dashboard_part large_header_bg">
        <dash-navbar/>
        <!--Main Content-->
        <div class="main_content_iner ">
            <div class="container-fluid p-0">
                <div class="row justify-content-center">
                    <!--Breadcrumb-->
                    <div class="col-12">
                        <div class="dashboard_header mb_50">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="dashboard_header_title">
                                    <h3>Notifications</h3>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashboard_breadcam text-right">
                                        <p>
                                            <router-link to="/buyer-dashboard/home"><a>Dashboard</a></router-link> 
                                            <i class="fas fa-caret-right"></i> 
                                            Notifications
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Main-->
                    <div class="col-md-12">
                        <div class="white_box QA_section mb_30">
                            <div class="recentDiv">
                                <h5>10 most recent <i class="bi bi-alarm"></i></h5>
                            </div>
                            <div class="row notificationDiv">
                                <div class="col-md-4">
                                    <span class="iconNotify">
                                        <i class="bi bi-three-dots-vertical"></i>
                                        <div class="actionDiv" id="actionDiv">
                                            <a><i class="bi bi-envelope-paper"></i> Mark as read</a>
                                            <a><i class="bi bi-trash3"></i> Delete notification</a>
                                        </div>
                                    </span>
                                    <span class="titleNotify">
                                        <a class="firstTxt">Buyer</a> <a class="statusTxt">NEW</a>
                                    </span>
                                </div>
                                <div class="col-md-8">
                                    <span class="detailNotify">
                                        <a class="mainTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                        <a class="timeTxt">7:28</a>
                                    </span>
                                </div>
                            </div>
                            <div class="row notificationDiv">
                                <div class="col-md-4">
                                    <span class="iconNotify">
                                        <i class="bi bi-three-dots-vertical"></i>
                                        <div class="actionDiv" id="actionDiv">
                                            <a><i class="bi bi-envelope-paper"></i> Mark as read</a>
                                            <a><i class="bi bi-trash3"></i> Delete notification</a>
                                        </div>
                                    </span>
                                    <span class="titleNotify">
                                        <a class="firstTxt">Admin</a> <a class="statusTxt">NEW</a>
                                    </span>
                                </div>
                                <div class="col-md-8">
                                    <span class="detailNotify">
                                        <a class="mainTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                        <a class="timeTxt">5:22</a>
                                    </span>
                                </div>
                            </div>
                            <div class="row notificationDiv">
                                <div class="col-md-4">
                                    <span class="iconNotify">
                                        <i class="bi bi-three-dots-vertical"></i>
                                        <div class="actionDiv" id="actionDiv">
                                            <a><i class="bi bi-envelope-paper"></i> Mark as read</a>
                                            <a><i class="bi bi-trash3"></i> Delete notification</a>
                                        </div>
                                    </span>
                                    <span class="titleNotify">
                                        <a class="firstTxt">Supplier</a> <a class="statusTxt">NEW</a>
                                    </span>
                                </div>
                                <div class="col-md-8">
                                    <span class="detailNotify">
                                        <a class="mainTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                        <a class="timeTxt">3:55</a>
                                    </span>
                                </div>
                            </div>
                            <div class="row notificationDiv dormatNotification">
                                <div class="col-md-4">
                                    <span class="iconNotify">
                                        <i class="bi bi-three-dots-vertical"></i>
                                        <div class="actionDiv" id="actionDiv">
                                            <a><i class="bi bi-envelope-paper"></i> Mark as unread</a>
                                            <a><i class="bi bi-trash3"></i> Delete notification</a>
                                        </div>
                                    </span>
                                    <span class="titleNotify">
                                        <a class="firstTxt">Buyer</a>
                                    </span>
                                </div>
                                <div class="col-md-8">
                                    <span class="detailNotify">
                                        <a class="mainTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                        <a class="timeTxt">Jun 22</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <dash-footer/>
    </section>
</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<style scoped src="@/assets/css/styleSupport.css"></style>
<script>
    import DashSidebar from './dash-sidebar.vue'
    import DashNavbar from './dash-navbar.vue'
    import DashFooter from './dash-footer.vue'
    export default {
      name: "Produce Mart",
      components:{
      'dash-sidebar': DashSidebar,
      'dash-navbar': DashNavbar,
      'dash-footer': DashFooter,
      },
      mounted(){
        window.scrollTo(0,0)

        let externalScriptCustom = document.createElement('script')
        externalScriptCustom.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js')
        document.head.appendChild(externalScriptCustom)
      },
    }
</script>
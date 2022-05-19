<template>
    <title>Order Report - Super Admin Dashboard | Produce Mart</title>
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
                                    <h3>Order Report</h3>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashboard_breadcam text-right">
                                        <p>
                                            <router-link to="/dashboard/home"><a>Dashboard</a></router-link> <i class="fas fa-caret-right"></i> Order Report
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Main-->
                    <div class="col-md-12">
                        <div class="row justify-content-end">
                            <div class="col-lg-4 mb-3">
                                <form class="filterSearchDate">
                                    <div class="row">
                                        <div class="col-lg-12 text-right mb-1">
                                            <h5>Filter by Date</h5>
                                        </div>
                                        <div class="col-lg-6 mb-2">
                                            <label>Start Date</label>
                                            <input type="date" class="input" min="2022-01-01" value="2022-03-20">
                                        </div>
                                        <div class="col-lg-6 mb-2">
                                            <label>End Date</label>
                                            <input type="date" class="input" min="2022-01-01" value="2022-03-20">
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <!--Top 4 Boxes-->
                            <div class="col-xl-12">
                                <div class="white_card card_height_100 mb_30 user_crm_wrapper">
                                    <div class="row reportsRow">
                                        <div class="col-lg-6">
                                            <div class="crm_box">
                                                <h4>801,000</h4>
                                                <p>Total Orders</p>
                                                <img src="@/assets/img/dashboard-img/dash-quote.png" ondragstart="return false;">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="crm_box">
                                                <h4>20,000</h4>
                                                <p>Active Orders</p>
                                                <img src="@/assets/img/dashboard-img/dash-quote.png" ondragstart="return false;">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="crm_box">
                                                <h4>780,000</h4>
                                                <p>Completed Orders</p>
                                                <img src="@/assets/img/dashboard-img/dash-quote.png" ondragstart="return false;">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="crm_box">
                                                <h4>10,000</h4>
                                                <p>Cancelled Orders</p>
                                                <img src="@/assets/img/dashboard-img/dash-quote.png" ondragstart="return false;">
                                            </div>
                                        </div>
                                    </div>
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
      }
    }
</script>
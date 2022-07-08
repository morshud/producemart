<template>
    <title>Deleted Notifications - Supplier Dashboard | Produce Mart</title>
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
                                    <h3>Deleted Notifications</h3>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashboard_breadcam text-right">
                                        <p>
                                            <router-link to="/supplier-dashboard/home"><a>Dashboard</a></router-link> 
                                            <i class="fas fa-caret-right"></i> 
                                            Deleted Notifications
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Main-->
                    <div class="col-md-12">
                        <div class="white_box QA_section mb_30">
                            <div class="QA_table ">
                                <table class="table lms_table_active">
                                    <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Notification</th>
                                        <th scope="col">Date Deleted</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>2022-04-01 | 12:22 PM</td>
                                        <td class="notifyText">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</td>
                                        <td>2022-01-01 | 05:20 PM</td>
                                    </tr>
                                    </tbody>
                                </table>
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
      }
    }
</script>
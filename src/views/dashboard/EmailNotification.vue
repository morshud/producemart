<template>
    <title>Email Notification Settings - Super Admin Dashboard | Produce Mart</title>
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
                                    <h3>Email Notification Settings</h3>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashboard_breadcam text-right">
                                        <p>
                                            <router-link to="/dashboard/home"><a>Dashboard</a></router-link> <i class="fas fa-caret-right"></i> Email Notification Settings
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Mail Sidebar-->
                    <div class="col-md-7 white_box editProfileDetail">
                        <div class="row">
                            <form>
                                <div class="row mb-3">
                                    <div class="col-sm-5">
                                        <label>Recieve Email Alert</label>
                                    </div>
                                    <div class="col-sm-7">
                                        <input type="checkbox" checked> <span>Changes made to your account</span> <br>
                                        <input type="checkbox" checked> <span>Information on new products and services</span> <br>
                                        <input type="checkbox"> <span>Marketing and promo offers</span> <br>
                                        <input type="checkbox" checked> <span>Security alerts</span> <br>
                                    </div>
                                </div>
                                <div class="row mb-3 mt-2 justify-content-center">
                                    <div class="col-sm-4">
                                        <input type="submit" value="Save Changes" class="saveChanges">
                                    </div>
                                </div>
                            </form>
                            <div>

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
<template>
    <title>Edit Blog - Super Admin Dashboard | Produce Mart</title>
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
                                    <h3>Edit Blog</h3>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashboard_breadcam text-right">
                                        <p>
                                            <router-link to="/dashboard/home"><a>Dashboard</a></router-link> <i class="fas fa-caret-right"></i> Edit Blog
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Main-->
                    <div class="col-md-12">
                        <div class="white_card card_height_100 mb_30">
                            <div class="white_card_header">
                                <div class="box_header m-0">
                                    <div class="main-title">
                                        <h3 class="m-0">Edit Blog Content</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="white_card_body">
                                <form>
                                    <div class="row">
                                        <div class="col-lg-12">
                                        <div class="common_input mb_15">
                                            <input type="text" placeholder="Blog Title" value="New Blog">
                                        </div>
                                        </div>
                                        <div class="col-lg-12">
                                        <div class="common_input mb_15">
                                            <textarea name="" id="" cols="30" rows="7" placeholder="Blog Contents Here..."></textarea>
                                        </div>
                                        </div>
                                        <div class="col-lg-12">
                                        <div class="common_input mb_15">
                                            <input type="file" accept=".jpg, .jpeg, .png, .webp">
                                        </div>
                                        </div>
                                        <div class="col-12">
                                        <div class="create_report_btn mt_30">
                                            <button type="submit" class="btn_1 radius_btn d-block text-center">Create Blog Post</button>
                                        </div>
                                        </div>
                                    </div>
                                </form>
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
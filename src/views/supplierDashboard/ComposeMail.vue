<template>
    <title>Compose Box - Supplier Dashboard | Produce Mart</title>
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
                                    <h3>Compose Mail</h3>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashboard_breadcam text-right">
                                        <p>
                                            <router-link to="/supplier-dashboard/home"><a>Dashboard</a></router-link> <i class="fas fa-caret-right"></i> <router-link to="/supplier-dashboard/mail-box"><a>Mail Box</a></router-link> <i class="fas fa-caret-right"></i> Compose Mail
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Mail Sidebar-->
                    <div class="col-md-3">
                        <div class="email-sidebar white_box">
                            <router-link to="/supplier-dashboard/mail-box"><button class="btn_1 w-100 mb-2 btn-lg email-gradient gradient-9-hover email__btn waves-effect">INBOX</button></router-link>
                            <ul class="text-left mt-2">
                                <li>
                                    <router-link to="/buyer-dashboard/mail-box"><a><i class="bi bi-envelope"></i> <span> <span>Inbox</span> <span class="round_badge">1</span> </span> </a></router-link>
                                </li>
                                <li>
                                    <router-link to="/buyer-dashboard/sent-mail"><a><i class="bi bi-envelope-check"></i> <span> <span>Sent Mails</span> <span class="round_badge">1</span> </span> </a></router-link>
                                </li>
                                <li>
                                    <router-link to="/buyer-dashboard/draft-mail"><a><i class="ti-pin2"></i> <span> <span>Drafts</span> <span class="round_badge">3</span> </span> </a></router-link>
                                </li>
                                <li>
                                    <router-link to="/buyer-dashboard/trash-mail"><a><i class="ti-trash"></i> <span> <span>Trash</span> </span> </a></router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--Main Mail-->
                    <div class="col-md-9">
                        <div class="white_box QA_section mb_30">
                            <div class="QA_compose">
                                <h3>Compose New Message</h3>
                                <form>
                                    <!--To-->
                                    <div class="row mb-4">
                                        <div class="col-sm-2">
                                            <label>To</label>
                                        </div>
                                        <div class="col-sm-10">
                                            <input type="email" class="input">
                                        </div>
                                    </div>
                                    <!--CC-->
                                    <div class="row mb-4">
                                        <div class="col-sm-2">
                                            <label>CC</label>
                                        </div>
                                        <div class="col-sm-10">
                                            <input type="email" class="input">
                                        </div>
                                    </div>
                                    <!--Subject-->
                                    <div class="row mb-4">
                                        <div class="col-sm-2">
                                            <label>Subject</label>
                                        </div>
                                        <div class="col-sm-10">
                                            <input type="text" class="input">
                                        </div>
                                    </div>
                                    <!--Message-->
                                    <div class="row mb-4">
                                        <div class="col-sm-2">
                                            <label>Message</label>
                                        </div>
                                        <div class="col-sm-10">
                                            <textarea class="input" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>

                                    <div class="row mb-1">
                                        <div class="col-sm-2">
                                            <label class="custom-file-upload" title="Attach File">
                                                <input type="file"/>
                                                <i class="bi bi-paperclip"></i>
                                            </label>
                                        </div>
                                        <div class="col-sm-10">
                                            <button type="submit">Send Message</button>
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
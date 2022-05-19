<template>
    <title>Draft Mail - Buyer Dashboard | Produce Mart</title>
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
                                    <h3>Draft Mails</h3>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashboard_breadcam text-right">
                                        <p>
                                            <router-link to="/buyer-dashboard/home"><a>Dashboard</a></router-link> <i class="fas fa-caret-right"></i> <router-link to="/buyer-dashboard/mail-box"><a>Mail Box</a></router-link> <i class="fas fa-caret-right"></i> Draft Mails
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Mail Sidebar-->
                    <div class="col-md-3">
                        <div class="email-sidebar white_box">
                            <router-link to="/buyer-dashboard/compose-mail"><button class="btn_1 w-100 mb-2 btn-lg email-gradient gradient-9-hover email__btn waves-effect"><i class="ti-plus"></i>COMPOSE</button></router-link>
                            <ul class="text-left mt-2">
                                <li>
                                    <router-link to="/buyer-dashboard/mail-box"><a><i class="bi bi-envelope"></i> <span> <span>Inbox</span> <span class="round_badge">1</span> </span> </a></router-link>
                                </li>
                                <li>
                                    <router-link to="/buyer-dashboard/sent-mail"><a><i class="bi bi-envelope-check"></i> <span> <span>Sent Mails</span> <span class="round_badge">1</span> </span> </a></router-link>
                                </li>
                                <li class="active">
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
                            <div class="white_box_tittle list_header">
                                <div class="box_right d-flex lms_block">
                                    <div class="serach_field_2">
                                    <div class="search_inner">
                                        <form Active="#">
                                            <div class="search_field">
                                                <input type="text" placeholder="Search content here...">
                                            </div>
                                            <button type="submit"> <i class="bi bi-search"></i> </button>
                                        </form>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="QA_table ">
                                <table class="table lms_table_active">
                                    <thead>
                                    <tr>
                                        <th scope="col">
                                            <label class="primary_checkbox d-flex mr-12 ">
                                            <input type="checkbox">
                                            <span class="checkmark"></span>
                                            </label>
                                        </th>
                                        <th scope="col">name</th>
                                        <th scope="col">status</th>
                                        <th scope="col">details</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">
                                            <label class="primary_checkbox d-flex mr-12 ">
                                            <input type="checkbox">
                                            <span class="checkmark"></span>
                                            </label>
                                        </th>
                                        <td>
                                            <div class="media align-items-center">
                                                <div class="media-body">
                                                    <p>Mark Wiyns</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p> Money Receipt</p>
                                        </td>
                                        <td>
                                            <p class="nowrap">Lorem ipsum dolor sit amet, consectetur adipsicing elit, se... </p>
                                        </td>
                                        <td>
                                            2022-04-01 | 12:22 PM
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label class="primary_checkbox d-flex mr-12 ">
                                            <input type="checkbox">
                                            <span class="checkmark"></span>
                                            </label>
                                        </th>
                                        <td>
                                            <div class="media align-items-center">
                                                <div class="media-body">
                                                    <p>Mark Wiyns</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p> Money Receipt</p>
                                        </td>
                                        <td>
                                            <p class="nowrap">Lorem ipsum dolor sit amet, consectetur adipsicing elit, se... </p>
                                        </td>
                                        <td>
                                            2022-04-01 | 12:22 PM
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label class="primary_checkbox d-flex mr-12 ">
                                            <input type="checkbox">
                                            <span class="checkmark"></span>
                                            </label>
                                        </th>
                                        <td>
                                            <div class="media align-items-center">
                                                <div class="media-body">
                                                    <p>Mark Wiyns</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p> Money Receipt</p>
                                        </td>
                                        <td>
                                            <p class="nowrap">Lorem ipsum dolor sit amet, consectetur adipsicing elit, se... </p>
                                        </td>
                                        <td>
                                            2022-04-01 | 12:22 PM
                                        </td>
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
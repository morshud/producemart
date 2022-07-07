<template>
    <title>Quotes - Super Admin Dashboard | Produce Mart</title>
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
                                        <h3>View Quotes</h3>
                                        <span><strong>Quote Title Here</strong></span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashboard_breadcam text-right">
                                        <p>
                                            <router-link to="/dashboard/home"><a>Dashboard</a></router-link> <i class="fas fa-caret-right"></i> <router-link to="/dashboard/view-quotes"><a>View Quotes</a></router-link> <i class="fas fa-caret-right"></i> Quotes
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Main-->
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-12 QA_section mb-4">
                                <div class="fileDownloadOption mb-3">
                                    <button type="button" title="Download as CSV file">CSV</button>
                                    <button type="button" title="Download as PDF file">PDF</button>
                                </div>
                                <div class="card QA_table">
                                    <div class="card-header">
                                        #345444 - Quotation From Supplier Tobilola
                                    </div>
                                    <div class="card-body">
                                        <div class="row mb-4">
                                            <div class="col-sm-6">
                                                <h6 class="mb-3">From:</h6>
                                                <div>
                                                    <strong>Supplier: Tobiloba Justice</strong>
                                                </div>
                                                <div>Nigeria</div>
                                                <div>Street Address, Lagos.</div>
                                                <div>Email: <a href="#">myemail@email.com</a></div>
                                                <div>Phone: +2348012345678</div>
                                            </div>
                                            <div class="col-sm-6">
                                                <h6 class="mb-3">TO:</h6>
                                                <div>
                                                    <strong>Buyer: Goriola Ayomide</strong>
                                                </div>
                                                <div>Nigeria</div>
                                                <div>Street Address, Lagos.</div>
                                                <div>Email: <a href="#">myemail@email.com</a></div>
                                                <div>Phone: +2348012345678</div>
                                            </div>
                                        </div>
                                        <div class="table-responsive-sm">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th class="center">#</th>
                                                    <th class="center">Quote ID</th>
                                                    <th class="center">Product Name</th>
                                                    <th class="center">Product ID</th>
                                                    <th>Product <br> Specification</th>
                                                    <th>Shipping Details</th>
                                                    <th class="center">Quantity <br> Ordered</th>
                                                    <th class="right">Price of Product ($)</th>
                                                    <th class="right">Product Details</th>
                                                    <th class="right">Total ($)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="center">1</td>
                                                    <td class="left strong">#345444</td>
                                                    <td class="left strong">Orange</td>
                                                    <td class="right">orange123RQ3</td>
                                                    <td class="center"></td>
                                                    <td class="center">Road</td>
                                                    <td class="center">3 bags</td>
                                                    <td class="right">20</td>
                                                    <td class="right">120kg</td>
                                                    <td class="right">60</td>
                                                </tr>
                                                <tr>
                                                    <td class="center">2</td>
                                                    <td class="left strong">#345444</td>
                                                    <td class="left strong">Cocoa</td>
                                                    <td class="right">cocoa39GGF</td>
                                                    <td class="center"></td>
                                                    <td class="center">Road</td>
                                                    <td class="center">6 bags</td>
                                                    <td class="right">60</td>
                                                    <td class="right">200kg</td>
                                                    <td class="right">360</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </div>
                                        <div class="row justify-content-end">
                                                <div class="col-lg-6 ml-auto QA_section">
                                                    <table class="table table-clear QA_table">
                                                        <tbody>
                                                            <tr>
                                                                <td class="left">
                                                                    <strong>Total Weight</strong>
                                                                </td>
                                                                <td class="right">320kg</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="left">
                                                                    <strong>Shipping Price ($)</strong>
                                                                </td>
                                                                <td class="right">80</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="left">
                                                                    <strong>Total Price ($)</strong>
                                                                </td>
                                                                <td class="right">420</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="left">
                                                                    <strong>Overall Cost ($)</strong>
                                                                </td>
                                                                <td class="right">
                                                                    <strong>500</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="left">
                                                                    <strong>Status</strong>
                                                                </td>
                                                                <td class="right">
                                                                    <strong><a href="#" class="status_btn">Active</a></strong>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 text-right">
                                <router-link to="/dashboard/view-quotes" class="backBtn"><i class="bi bi-arrow-left-short"></i> Back to all quotes</router-link>
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
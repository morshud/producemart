<template>
    <title>Shipping Price - Super Admin Dashboard | Produce Mart</title>
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
                                    <h3>Shipping Price</h3>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashboard_breadcam text-right">
                                        <p>
                                            <router-link to="/dashboard/home"><a>Dashboard</a></router-link> <i class="fas fa-caret-right"></i> <router-link to="/dashboard/view-quotes"><a>View Quotes</a></router-link> <i class="fas fa-caret-right"></i>  Shipping Price
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Main-->
                    <div class="col-md-12">
                        <div class="white_card card_height_100 mb_30 pt-4">
                            <div class="white_card_body">
                                <div class="QA_section">
                                    <div class="white_box_tittle list_header">
                                        <h4>Shippers List </h4>
                                    </div>
                                    <div class="QA_table mb_30">
                                        <table class="table lms_table_active ">
                                            <thead>
                                            <tr>
                                                <th scope="col">S/N</th>
                                                <th scope="col">Company Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Enter Details</th>
                                                <th scope="col">View Details</th>
                                                <th scope="col">Choose Preferred<br>Shipper</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Taiwo Tawio Limited</td>
                                                <td>tsquare@me.com</td>
                                                <td><a class="enterPricesBtn" data-bs-toggle="modal" data-bs-target="#shipperModal">Input Details</a></td>
                                                <td><a class="viewBoxBtn" data-bs-toggle="modal" data-bs-target="#viewModal">View</a></td>
                                                <td>
                                                    <label class="lblCheck">
                                                        <input class="iptCheck" type="radio" name="shipper"/>
                                                        <span class="checkboxSpan"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Mat & Nit Dual Logistics Limited</td>
                                                <td>mndual@me.com</td>
                                                <td><a class="enterPricesBtn">Input Details</a></td>
                                                <td><a class="viewBoxBtn">View</a></td>
                                                <td>
                                                    <label class="lblCheck">
                                                        <input class="iptCheck" type="radio" name="shipper"/>
                                                        <span class="checkboxSpan"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="col-lg-12 text-right">
                                    <router-link to="#" class="backBtn"><i class="bi bi-arrow-left-short"></i> Back to quotes summary</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Shipper Modal Input -->
        <div class="modal fade" id="shipperModal" tabindex="-1" aria-labelledby="shipperModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="shipperModalLabel">Enter Info For Taiwo Taiwo Limited</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body modalShipper">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active tabs-button" id="sendAir-tab" data-bs-toggle="tab" data-bs-target="#sendAir" type="button" role="tab" aria-controls="sendAir" aria-selected="true">Send By Air</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tabs-button" id="sendSea-tab" data-bs-toggle="tab" data-bs-target="#sendSea" type="button" role="tab" aria-controls="sendSea" aria-selected="false">Send By Sea</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tabs-button" id="sendLand-tab" data-bs-toggle="tab" data-bs-target="#sendLand" type="button" role="tab" aria-controls="sendLand" aria-selected="false">Send By Land</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="sendAir" role="tabpanel" aria-labelledby="sendAir-tab">
                                <form class="priForm">
                                    <div class="row">
                                        <div class="col-lg-12 mt-2">
                                            <h4>Send By Air</h4>
                                        </div>
                                        <div class="col-lg-6 mb-2">
                                            <label>shipping cost ($)</label>
                                            <input type="number" class="input">
                                        </div>
                                        <div class="col-lg-6 mb-2">
                                            <label>initial deposit ($)</label>
                                            <input type="number" class="input">
                                        </div>
                                        <div class="col-lg-6 mb-2">
                                            <label>insurance ($)</label>
                                            <input type="number" class="input">
                                        </div>
                                        <div class="col-lg-6 mb-2">
                                            <label>estimated duration</label>
                                            <input type="number" class="input customInput">
                                            <select class="custSlt">
                                                <option>hours</option>
                                                <option>days</option>
                                                <option>weeks</option>
                                                <option>months</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="tab-pane fade" id="sendSea" role="tabpanel" aria-labelledby="sendSea-tab">
                                <form class="priForm">
                                    <div class="row">
                                        <div class="col-lg-12 mt-2">
                                            <h4>Send By Sea</h4>
                                        </div>
                                        <div class="col-lg-6 mb-2">
                                            <label>shipping cost ($)</label>
                                            <input type="number" class="input">
                                        </div>
                                        <div class="col-lg-6 mb-2">
                                            <label>initial deposit ($)</label>
                                            <input type="number" class="input">
                                        </div>
                                        <div class="col-lg-6 mb-2">
                                            <label>insurance ($)</label>
                                            <input type="number" class="input">
                                        </div>
                                        <div class="col-lg-6 mb-2">
                                            <label>estimated duration</label>
                                            <input type="number" class="input customInput">
                                            <select class="custSlt">
                                                <option>hours</option>
                                                <option>days</option>
                                                <option>weeks</option>
                                                <option>months</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="tab-pane fade" id="sendLand" role="tabpanel" aria-labelledby="sendLand-tab">
                                <form class="priForm">
                                    <div class="row">
                                        <div class="col-lg-12 mt-2">
                                            <h4>Send By Land</h4>
                                        </div>
                                        <div class="col-lg-6 mb-2">
                                            <label>shipping cost ($)</label>
                                            <input type="number" class="input">
                                        </div>
                                        <div class="col-lg-6 mb-2">
                                            <label>initial deposit ($)</label>
                                            <input type="number" class="input">
                                        </div>
                                        <div class="col-lg-6 mb-2">
                                            <label>insurance ($)</label>
                                            <input type="number" class="input">
                                        </div>
                                        <div class="col-lg-6 mb-2">
                                            <label>estimated duration</label>
                                            <input type="number" class="input customInput">
                                            <select class="custSlt">
                                                <option>hours</option>
                                                <option>days</option>
                                                <option>weeks</option>
                                                <option>months</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer modalFooter">
                        <button type="button" data-bs-dismiss="modal">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Shipper Modal View -->
        <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="viewModalLabel">Details of Taiwo Taiwo Limited</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body modalShipper">
                        <div class="summaryTable">
                            <h1 class="summaryHead">View Quote</h1>
                            <div class="byRoad">
                                <p class="summaryHeadSub">by road</p>
                                <table>
                                    <tr class="bodyRow">
                                        <td class="tdMain">Shipping Cost</td>
                                        <td class="tdBody">$3000</td>
                                    </tr>
                                    <tr class="bodyRow">
                                        <td class="tdMain">Initial Deposit</td>
                                        <td class="tdBody">$2000</td>
                                    </tr>
                                    <tr class="bodyRow">
                                        <td class="tdMain">Insurance</td>
                                        <td class="tdBody">$50</td>
                                    </tr>
                                    <tr class="bodyRow">
                                        <td class="tdMain">Estimated Duration</td>
                                        <td class="tdBody">3 weeks</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="bySea">
                                <p class="summaryHeadSub">by sea</p>
                                <table>
                                    <tr class="bodyRow">
                                        <td class="tdMain">Shipping Cost</td>
                                        <td class="tdBody">$2000</td>
                                    </tr>
                                    <tr class="bodyRow">
                                        <td class="tdMain">Initial Deposit</td>
                                        <td class="tdBody">$1000</td>
                                    </tr>
                                    <tr class="bodyRow">
                                        <td class="tdMain">Insurance</td>
                                        <td class="tdBody">$50</td>
                                    </tr>
                                    <tr class="bodyRow">
                                        <td class="tdMain">Estimated Duration</td>
                                        <td class="tdBody">10 weeks</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="byAir">
                                <p class="summaryHeadSub">by air</p>
                                <table>
                                    <tr class="bodyRow">
                                        <td class="tdMain">Shipping Cost</td>
                                        <td class="tdBody">$4000</td>
                                    </tr>
                                    <tr class="bodyRow">
                                        <td class="tdMain">Initial Deposit</td>
                                        <td class="tdBody">$2500</td>
                                    </tr>
                                    <tr class="bodyRow">
                                        <td class="tdMain">Insurance</td>
                                        <td class="tdBody">$50</td>
                                    </tr>
                                    <tr class="bodyRow">
                                        <td class="tdMain">Estimated Duration</td>
                                        <td class="tdBody">1 week</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer modalFooter">
                        <button type="button" data-bs-dismiss="modal">Ok</button>
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
<style scoped src="@/assets/css/slider.css"></style>
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
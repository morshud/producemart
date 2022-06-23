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
                                        <span><strong>{{product.name}}</strong></span>
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
                                        #{{quote._id}} - Quotation From Supplier {{supplier.firstname}}
                                    </div>
                                    <div class="card-body">
                                        <div class="row mb-4">
                                            <div class="col-sm-6">
                                                <h6 class="mb-3">From:</h6>
                                                <div>
                                                    <strong>Supplier: {{supplier.firstname}} {{supplier.lastname}}</strong>
                                                </div>
                                                <div>Email: <a>{{supplier.email}}</a></div>
                                                <div>Phone: {{supplier.phone_no}}</div>
                                            </div>
                                            <div class="col-sm-6">
                                                <h6 class="mb-3">TO:</h6>
                                                <div>
                                                    <strong>Buyer: {{buyer.firstname}} {{buyer.lastname}}</strong>
                                                </div>
                                                <!-- <div>Nigeria</div>
                                                <div>Street Address, Lagos.</div> -->
                                                <div>Email: <a>{{buyer.email}}</a></div>
                                                <div>Phone: {{buyer.phone_no}}</div>
                                            </div>
                                        </div>
                                        <div class="table-responsive-sm">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th class="center">#</th>
                                                    <th class="center">Quote ID</th>
                                                    <th class="center">Product Name</th>
                                                    <th class="center">Product Variety</th>
                                                    <th class="center">Quantity <br> Ordered</th>
                                                    <th class="right">Price of Product ($)</th>
                                                    <th class="right">Total ($)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="center">#</td>
                                                    <td class="left strong">#{{quote._id}}</td>
                                                    <td class="left strong">{{product.name}}</td>
                                                    <td class="right">{{product.variety}}</td>
                                                    <td class="center">{{quote.quantity}}{{product.order.qty_unit}}</td>
                                                    <td class="right">{{product.package.price}}</td>
                                                    <td class="right">${{quote.quantity * product.package.price.slice(1)}}</td>
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
                                                                <td class="right">{{quote.quantity * product.package.weight}} {{product.package.unit}}</td>
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
                                                            <tr>
                                                                <td class="left">
                                                                    <strong>Shipper Price</strong>
                                                                </td>
                                                                <td class="right">
                                                                    <a class="enterPricesBtn" data-bs-toggle="modal" data-bs-target="#shipperModal">Enter Price</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="left">
                                                                    <strong>Inspector Price</strong>
                                                                </td>
                                                                <td class="right">
                                                                    <a class="enterPricesBtn" data-bs-toggle="modal" data-bs-target="#inspectorModal">Enter Price</a>
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

        <!-- Shipper Modal -->
        <div class="modal fade" id="shipperModal" tabindex="-1" aria-labelledby="shipperModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="shipperModalLabel">Set Shippers Price & Select Preferred Shipper</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="white_card_body">
                                    <div class="QA_section">
                                        <div class="QA_table">
                                            <table class="table lms_table_active tableSetPrice">
                                                <thead>
                                                <tr>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Set Price</th>
                                                    <th scope="col">Set Quantity</th>
                                                    <th scope="col">Choose Shipper</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <form>
                                                        <td>mufusa@me.com</td>
                                                        <td>
                                                            <input type="text" placeholder="Enter price">
                                                        </td>
                                                        <td>
                                                            <input type="text" placeholder="Enter quantity">
                                                        </td>
                                                        <td scope="row">
                                                            <label for="radioShp1" class="primary_checkbox d-flex mr-12 ">
                                                            <input type="radio" id="radioShp1" name="shipper">
                                                            <span class="checkmark"></span>
                                                            </label>
                                                        </td>
                                                    </form>
                                                </tr>
                                                <tr>
                                                    <form>
                                                        <td>taju@tawakalitu.com</td>
                                                        <td>
                                                            <input type="text" placeholder="Enter price">
                                                        </td>
                                                        <td>
                                                            <input type="text" placeholder="Enter quantity">
                                                        </td>
                                                        <td scope="row">
                                                            <label for="radioShp2" class="primary_checkbox d-flex mr-12 ">
                                                            <input type="radio" id="radioShp2" name="shipper">
                                                            <span class="checkmark"></span>
                                                            </label>
                                                        </td>
                                                    </form>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btnSaveChange" data-bs-dismiss="modal">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Inspector Modal -->
        <div class="modal fade" id="inspectorModal" tabindex="-1" aria-labelledby="inspectorModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="inspectorModalLabel">Set Inspectors Price & Select Preferred Inspector</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="white_card_body">
                                    <div class="QA_section">
                                        <div class="QA_table">
                                            <table class="table lms_table_active tableSetPrice">
                                                <thead>
                                                <tr>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Set Price</th>
                                                    <th scope="col">Set Quantity</th>
                                                    <th scope="col">Choose Inspector</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <form>
                                                        <td>mufusa@me.com</td>
                                                        <td>
                                                            <input type="text" placeholder="Enter price">
                                                        </td>
                                                        <td>
                                                            <input type="text" placeholder="Enter quantity">
                                                        </td>
                                                        <td scope="row">
                                                            <label for="radioIns1" class="primary_checkbox d-flex mr-12 ">
                                                            <input type="radio" id="radioIns1" name="inspector">
                                                            <span class="checkmark"></span>
                                                            </label>
                                                        </td>
                                                    </form>
                                                </tr>
                                                <tr>
                                                    <form>
                                                        <td>taju@tawakalitu.com</td>
                                                        <td>
                                                            <input type="text" placeholder="Enter price">
                                                        </td>
                                                        <td>
                                                            <input type="text" placeholder="Enter quantity">
                                                        </td>
                                                        <td scope="row">
                                                            <label for="radioIns2" class="primary_checkbox d-flex mr-12 ">
                                                            <input type="radio" id="radioIns2" name="inspector">
                                                            <span class="checkmark"></span>
                                                            </label>
                                                        </td>
                                                    </form>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btnSaveChange" data-bs-dismiss="modal">Save Changes</button>
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
    import QUOTE from '../../service/quote-service'
    export default {
      name: "Produce Mart",
      components:{
        'dash-sidebar': DashSidebar,
        'dash-navbar': DashNavbar,
        'dash-footer': DashFooter,
      },
      data(){
          return{
            quoteId: this.$route.params.id,
            buyer: {

            },
            destination: {

            },
            supplier: {},
            product:{
                order: '',
                package: ''
            },
            quote: ''
          }
      },
      created(){
          this.getSingleQuote()
      },
      methods: {
        getSingleQuote(){
            QUOTE.getSingleQuote(this.quoteId).then(res => {
                let result = res.data.data
                this.product = result.product
                this.supplier = result.supplier
                this.buyer = result.buyer
                this.destination = result.destination
                this.quote = result
                console.log(result);
            })
        }
      },
      mounted(){
        window.scrollTo(0,0)

        let externalScriptCustom = document.createElement('script')
        externalScriptCustom.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js')
        document.head.appendChild(externalScriptCustom)
      }
    }
</script>
<template>
    <title>Closed Orders - Supplier Dashboard | Produce Mart</title>
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
                                    <h3>Closed Orders</h3>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashboard_breadcam text-right">
                                        <p>
                                            <router-link to="/supplier-dashboard/home"><a>Dashboard</a></router-link> <i class="fas fa-caret-right"></i> Closed Orders
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
                                        <h4>All Closed Orders </h4>
                                        <div class="box_right d-flex lms_block">
                                            <div class="serach_field_2">
                                                <div class="search_inner">
                                                    <form Active="#">
                                                        <div class="search_field">
                                                            <input type="text" placeholder="Search by order id or product name...">
                                                        </div>
                                                        <button type="submit"> <i class="bi bi-search"></i> </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="fileDownloadOption mb-3">
                                        <button type="button" title="Download as CSV file">CSV</button>
                                        <button type="button" title="Download as PDF file">PDF</button>
                                    </div>
                                    <div class="QA_table mb_30">
                                        <table class="table lms_table_active ">
                                            <thead>
                                            <tr>
                                                <th scope="col">Order ID</th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                                <th scope="col">Rate Order</th>
                                            </tr>
                                            </thead>
                                            <tbody v-for="(item, i) in items" :key='item._id'>
                                            <tr>
                                                <th scope="row">{{item._id}}</th>
                                                <td>{{item.quote.product.name}}</td>
                                                <td>{{getDate(item.createdAt)}}</td>
                                                <td><a class="btn-closed">{{item.status}}</a></td>
                                                <td><router-link :to="'/buyer-dashboard/view-open-order/' + item.quote._id" class="viewOrder">View Order</router-link></td>
                                                <td><a href="#" class="viewOrder">Your Review</a></td>
                                            </tr>
                                            <!-- <tr>
                                                <th scope="row">Q60077</th>
                                                <td>Cocoa - QBL1878</td>
                                                <td>01-05-2022</td>
                                                <td><a class="btn-cancelled">Cancelled</a></td>
                                                <td><a href="#" class="viewOrder">View Order</a></td>
                                                <td><a href="/buyer-dashboard/order-review/review" class="viewOrder">Your Review</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Q60077</th>
                                                <td>Cocoa - QBL1878</td>
                                                <td>01-05-2022</td>
                                                <td><a class="btn-cancelled">Cancelled</a></td>
                                                <td><a href="#" class="viewOrder">View Order</a></td>
                                                <td><a href="/buyer-dashboard/order-review/review" class="viewOrder">Your Review</a></td>
                                            </tr> -->
                                            </tbody>
                                        </table>
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
<style scoped src="@/assets/css/styleSupport.css"></style>
<script>
    import DashSidebar from './dash-sidebar.vue'
    import DashNavbar from './dash-navbar.vue'
    import DashFooter from './dash-footer.vue'
    import axios from 'axios'
    export default {
      name: "Produce Mart",
      components:{
      'dash-sidebar': DashSidebar,
      'dash-navbar': DashNavbar,
      'dash-footer': DashFooter,
      },
      data(){
        return{
            user: JSON.parse(localStorage.getItem('user')) || '',
            items: '',
            buyerId: '',
        }
      },
      methods: {
        getUser(){
            if (this.user.role == 'supplier'){
                this.supplierId = this.user._id
                this.getClosedOrder()
            }
        },
        getDate(value){
          return new Date(value).toLocaleDateString()
        },
        getClosedOrder(){
            axios.get(`https://producemart.herokuapp.com/getSupplierOrders/${this.supplierId}`, {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: this.user.token,
                },
            }).then(res => {
                //console.log(res.data.data)
                let response = res.data.data.filter((el) => {
                    return el.status == 'closed'
                })

                this.items = response
                //console.log(this.items)
            })
        }
      }, 
      mounted(){
        window.scrollTo(0,0)
        this.getUser()
        let externalScriptCustom = document.createElement('script')
        externalScriptCustom.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js')
        document.head.appendChild(externalScriptCustom)
      }
    }
</script>
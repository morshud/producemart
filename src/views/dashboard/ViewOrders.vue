<template>
    <title>View Orders - Super Admin Dashboard | Produce Mart</title>
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
                                    <h3>View Orders</h3>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashboard_breadcam text-right">
                                        <p>
                                            <router-link to="/dashboard/home"><a>Dashboard</a></router-link> <i class="fas fa-caret-right"></i> View Orders
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
                                        <h4>All Orders </h4>
                                        <div class="box_right d-flex lms_block">
                                            <div class="serach_field_2">
                                                <div class="search_inner">
                                                    <form Active="#">
                                                        <div class="search_field">
                                                            <input type="text" placeholder="Search by order id, order no, status here...">
                                                        </div>
                                                        <button type="submit"> <i class="bi bi-search"></i> </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="fileDownloadOption mb-3">
                                        <button type="button" title="Download as CSV file">CSV</button>
                                        <button type="button" title="Download as PDF file">PDF</button>
                                    </div> -->
                                    <div class="QA_table mb_30">
                                        <table class="table lms_table_active ">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Order Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Buyer Name</th>
                                                <th scope="col">Supplier Name</th>
                                                <th scope="col">Freight Type</th>
                                                <!-- <th scope="col">Destination</th> -->
                                                <th scope="col">Shipper <br>Name</th>
                                                <th scope="col">Order <br>Amount</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="(item, i) in orders" :key="i">
                                                <th scope="row">{{i+1}}</th>
                                                <td>{{getDate(item.createdAt)}}</td>
                                                <td>{{item.status}}</td>
                                                <td>{{item.buyer.username}}</td>
                                                <td>{{item.supplier.username}}</td>
                                                <td style="text-transform: capitalize">{{item.shipment_type}}</td>
                                                <!-- <td>{{item.shipping_address.country ?? ''}}</td> -->
                                                <td>{{item.shipper.companyName}}</td>
                                                <!-- <td>{{item.estimate.shipping_price}}</td> -->
                                                <td>{{item.estimate.total_price}}</td>
                                                <td>
                                                    <router-link :to="'/dashboard/view-order/' + item._id"
                                                      ><button class="status_view">
                                                        View
                                                      </button></router-link
                                                    >
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
    import axios from 'axios'
    export default {
      name: "Produce Mart",
      components:{
      'dash-sidebar': DashSidebar,
      'dash-navbar': DashNavbar,
      'dash-footer': DashFooter,
      },
      data(){
        return {
            token: JSON.parse(localStorage.getItem("user")).token,
            orders: []
        }
      },
      methods: {
        async getAllOrder() {
        //this.inspectors = null;
          const res = await fetch(
            "https://producemart.herokuapp.com/getAllOrders",
            {
              method: "GET",
              headers: {
                "Content-Type": "applicaiton/json",
                Authorization: this.token,
              },
            }
          );
          const { data } = await res.json();
          this.orders = data;
        },
        getDate(value){
          return new Date(value).toLocaleDateString()
        },
      },
      mounted(){
        window.scrollTo(0,0)
        this.getAllOrder()
        let externalScriptCustom = document.createElement('script')
        externalScriptCustom.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js')
        document.head.appendChild(externalScriptCustom)
      }
    }
</script>
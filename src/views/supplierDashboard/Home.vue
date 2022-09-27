<template>
<div>

    <title>Supplier Dashboard | Produce Mart</title>
    <dash-sidebar/>
    <!--Main Content-->
    <section class="main_content dashboard_part large_header_bg">
        <dash-navbar/>

        <div class="main_content_iner overly_inner ">
            <div class="container-fluid p-0">
                <!--Breadcrumb-->
                <div class="row">
                    <div class="col-12">
                        <div class="dashboard_header mb_50">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="dashboard_header_title">
                                        <h3>Supplier Dashboard</h3>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashboard_breadcam text-right">
                                        <p>
                                            Dashboard
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12 text-center alertDashMessage mb-4" v-if="supplierAudit == 'incomplete'">
                        <p><i class="bi bi-info-circle-fill"></i> <router-link to="/supplier-dashboard/certification">Complete your audit so you can upload your products.</router-link></p>
                    </div>  
                    <!--Top 4 Boxes-->
                    <div class="col-xl-12">
                        <div class="white_card card_height_100 mb_30 user_crm_wrapper">
                            <div class="row">
                                <div class="col-lg-3">
                                    <router-link to="/supplier-dashboard/certification" v-if="supplierAudit == 'pending'">
                                        <div class="crm_box crmBoxDanger">
                                            <h4>Audit</h4>
                                            <p>Certifications</p>
                                            <img src="@/assets/img/dashboard-img/dash-certificate.png" ondragstart="return false;">
                                        </div>
                                    </router-link>
                                    <div class="crm_box" v-else>
                                        <h4>Audit</h4>
                                        <p>Certifications</p>
                                        <img src="@/assets/img/dashboard-img/dash-certificate.png" ondragstart="return false;">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="crm_box">
                                        <h4>{{item.num_of_order}}</h4>
                                        <p>Total Orders</p>
                                        <img src="@/assets/img/dashboard-img/totalOrder.png" ondragstart="return false;">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="crm_box">
                                        <h4>{{item.total_sales}}</h4>
                                        <p>Total Sales</p>
                                        <img src="@/assets/img/dashboard-img/totalSales.png" ondragstart="return false;">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="crm_box">
                                        <h4>{{item.num_of_product}}</h4>
                                        <p>Total Products</p>
                                        <img src="@/assets/img/dashboard-img/totalProduct.png" ondragstart="return false;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Table-->
                    <div class="col-lg-12">
                        <div class="white_card card_height_100 mb_30">
                            <div class="white_card_header">
                                <div class="box_header m-0">
                                </div>
                            </div>
                            <div class="white_card_body">
                                <div class="QA_section">
                                    <div class="white_box_tittle list_header">
                                    <h4>Recent Orders</h4>
                                    <div class="box_right d-flex lms_block">
                                        <div class="serach_field_2">
                                            <div class="search_inner">
                                                <form Active="#">
                                                <div class="search_field">
                                                    <input type="text" placeholder="Search content here...">
                                                </div>
                                                <button type="submit"><i class="bi bi-search"></i> </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="QA_table mb_30">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Order ID</th>
                                                <th scope="col">Product Name</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Order Status</th>
                                            </tr>
                                        </thead>
                                        <tbody v-for="(item, i) in orderList" :key='item._id'>
                                            <tr>
                                                <th scope="row">{{i + 1}}</th>
                                                <td>{{item._id}}</td>
                                                <td>{{item.quote.product.name}}</td>
                                                <td>{{item.quote.quantity}} {{item.quote.product.order.qty_unit}}</td>
                                                <td>{{getDate(item.createdAt)}}</td>
                                                <td>
                                                    <span v-if="item.status == 'open'">
                                                        <a href="#" class="status_await">Open</a>
                                                    </span>
                                                    <span v-if="item.status == 'closed'">
                                                        <a href="#" class="status_btn">Closed</a>
                                                    </span>
                                                </td>
                                            </tr>
                                            <!-- <tr>
                                                <th scope="row">2</th>
                                                <td>Banana-BNL-324LL</td>
                                                <td>Banana</td>
                                                <td>250 bags</td>
                                                <td>2022--03-25</td>
                                                <td><a href="#" class="status_await">Awaiting Shipping</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Oil-RBL-2029G</td>
                                                <td>Oil</td>
                                                <td>1200 ltrs</td>
                                                <td>2022--03-20</td>
                                                <td><a href="#" class="status_btn-pending">Awaiting Delivery</a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Beans-WER-G29G</td>
                                                <td>Beans</td>
                                                <td>50 bags</td>
                                                <td>2022--03-10</td>
                                                <td><a href="#" class="status_btn">Delivered</a></td>
                                            </tr> -->
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Chart Bar-->
                    <div class="col-xl-7">
                        <div class="white_card mb_30 card_height_100">
                            <div class="white_card_header">
                                <div class="row align-items-center justify-content-between flex-wrap">
                                    <div class="col-lg-4">
                                    <div class="main-title">
                                        <h3 class="m-0">Sales Analysis</h3>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="white_card_body">
                                <apexchart width="500" type="area" :options="options" :series="series"></apexchart>
                            </div>
                        </div>
                    </div>

                    <!--Chart Circle-->
                    <div class="col-xl-5">
                        <div class="white_card card_height_100 mb_30">
                        <div class="white_card_header">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <h3 class="m-0">Order Analysis</h3>
                                </div>
                            </div>
                        </div>
                        <div class="white_card_body">
                            <div id="chartCircle"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <dash-footer/>
    </section>
        
</div>
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
        return{
            user: JSON.parse(localStorage.getItem("user")) || '',
            supplierId: '',
            item: '',
            options: {
                chart: {
                  id: 'vuechart-example'
                },
                xaxis: {
                  categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }],
            orderList: '',
            orderSales: {
                quote: {
                    product: {
                        order: ''
                    }
                }
            },
            supplierAudit: null,
        }
      },
      methods: {
        getUser(){
            if (this.user.role == 'supplier'){
                this.supplierId = this.user._id
                this.getDashboard()
                this.getUserDetails()
            }
        },
        getUserDetails(){
            axios.get(`https://producemart.herokuapp.com/user/${this.supplierId}`, {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: this.user.token,
                }, 
            })
            .then(res => {
                //console.log(res.data.data)
                let supplierAudit = res.data.data.status
                //console.log(res.data.data)
                this.supplierAudit = supplierAudit

            })
        },
        getDate(value){
          return new Date(value).toLocaleDateString()
        },
        getDashboard(){
            axios.get(`https://producemart.herokuapp.com/supplierDashboard/${this.supplierId}?length=5`, {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: this.user.token,
                },
            })
            .then(res => {
                //
                let dashData = res.data
                //console.log(dashData)
                this.item = dashData
                this.orderList = dashData.orderlist
                this.orderSales = dashData.order_sales
                let sales_analysis = dashData.sales_analysis
                //console.log(dates)
                
                var options = {
                chart: {
                    type: "donut",
                     "toolbar": {
                        "show": true,
                        "tools": {
                            "download": true,
                        },
                        "autoSelected": "zoom"
                    },
                },
                dataLabels: {
                    enabled: false
                },
                series: Object.values(this.orderSales),
                "labels": Object.keys(this.orderSales),
                responsive: [
                    {
                    breakpoint: 480,
                    options: {
                        chart: {
                        width: 300
                        },
                        legend: {
                        show: false
                        }
                    }
                    }
                ],
                legend: {
                    position: "right",
                    offsetX: -40,
                    offsetY: 0,
                    height: 250
                }
            };
            var chart = new ApexCharts(document.querySelector("#chartCircle"), options);
            chart.render();
            })
        }
      },
      mounted(){
            this.getUser();
          ////chartBar
          

            ////chartCircle
            

            ////Scroll To Top
            window.scrollTo(0,0)
      }
    }
</script>
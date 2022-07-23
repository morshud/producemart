<template>
  <div>
  <title>Transaction Details - Super Admin Dashboard | Produce Mart</title>
  <dash-sidebar />

  <section class="main_content dashboard_part large_header_bg">
    <dash-navbar />
    <!--Main Content-->
    <div class="main_content_iner">
      <div class="container-fluid p-0">
        <div class="row">
          <!--Breadcrumb-->
          <div class="col-12">
            <div class="dashboard_header mb_50">
              <div class="row">
                <div class="col-lg-8">
                  <div class="dashboard_header_title">
                    <h3>Transaction Details</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 QA_section mb-4">
            <div class="white_card card_height_100 mb_30 pt-4">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="white_box_tittle list_header">
                    <h4>Transaction Summary</h4>
                    <div class="lineHr" style="margin: 0px; background-color: rgb(128, 233, 137); width: 80px; height: 2px;position: absolute;margin-top: 26px;"></div>
                  </div>
                  <div class="row mb-4">
                    <div class="col-sm-6">
                      <h2 class="span">User : <strong v-if="item.user != null">{{item.user.firstname}} {{item.user.lastname}}</strong>
                      </h2>
                      
                      <h2 class="span">Transaction Id : <strong>{{item._id}}</strong></h2>
                      <h2 class="span">Reference No. :  <strong>{{item.ref_no}}</strong></h2>
                      <h2 class="span">Order Id. :  <strong>{{orderId}}</strong></h2>
                      <h2 class="span">Status : 
                          <span v-if="item.status == 'awaiting_funds'" style="background: #ff8d14" class="status_btn">
                            Awaiting Fund
                          </span>
                          <span v-else-if="item.status == 'Success'" class="status_btn">
                            Success
                          </span>
                          <span v-else style="background: #000;" class="status_btn">
                            {{item.status}}
                          </span>
                      </h2>
                    </div>
                    <div class="col-sm-6">
                      <div class="float-end">
                        <h2 class="span">Gateway Type: 
                              <span v-if="item.gateway == 'trust_share'">
                                <strong>Trust Share</strong>
                              </span>
                              <span v-if="item.gateway == 'paypal'">
                                <strong>Paypal</strong>
                              </span>
                        </h2>
                        <!-- <div>Nigeria</div>
                                                <div>Street Address, Lagos.</div> -->
                        <h2 class="span">
                          Transaction Type :  
                              <span v-if="item.type == 'release funds'">
                                <strong>Release Fund</strong>
                              </span>
                              <span v-else-if="item.type == 'escrow'">
                                <strong>Escrow</strong>
                              </span>
                              <span v-else-if="item.type == 'adminfee'">
                                <strong>Admin Fee</strong>
                              </span>
                              <span v-else>
                                <dtrong>{{item.type}}</dtrong>
                              </span>
                        </h2>
                        <h2 class="span">Payment Date :  <strong>{{getDate(item.createdAt)}}</strong></h2>
                          <h2 class="span">Status : <strong>${{item.amount}}</strong></h2>
                      </div>
                    </div>

                    <div class="text-center">
                      <button class="btn btn-mart" @click="$router.push('/dashboard/transaction')" type="button">Back to Transactions</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div class="row summaryBox" style="text-left">
              <div class="col-lg-12">
                <h1 style="text-align: left;">Quote Summary</h1>
                <div class="lineHr" style="margin: 0;margin-bottom: 30px;"></div>
              </div>
              <div class="col-lg-3">
                <div class="productImgDiv">
                  <img :src="product" />
                  <!-- <img src="@/assets/img/products/product1.png" /> -->
                </div>
              </div>
              <div class="col-lg-4">
                <table>
                  <tr>
                    <td class="mainText">Product Name:</td>
                    <td class="contentText">
                      <span class="statustable">{{order.quote.product.name}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="mainText">Quote ID:</td>
                    <td class="contentText">
                      <span class="statustable">{{order.quote._id}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="mainText">Product Availability:</td>
                    <td class="contentText">
                      <span class="statustable" style="text-transform: capitalize">{{order.available}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="mainText">Quantity requested:</td>
                    <td class="contentText">{{order.estimate.quantity}}</td>
                  </tr>
                </table>
              </div>
              <div class="col-lg-4">
                <table>
                  <tr>
                    <td class="mainText">estimated weight:</td>
                    <td class="contentText">{{order.estimate.weight}}</td>
                  </tr>
                  <tr>
                    <td class="mainText">time of request:</td>
                    <td class="contentText">{{getTime(order.createdAt)}}</td>
                  </tr>
                  <tr>
                    <td class="mainText">date of request:</td>
                    <td class="contentText">{{getDate(order.createdAt)}}</td>
                  </tr>
                  <tr>
                    <td class="mainText">estimated cost:</td>
                    <td class="contentText">${{order.estimate.total_price}}</td>
                  </tr>
                </table>
              </div>
            </div>
          
          <!--Main-->
        </div>
      </div>
    </div>

    <dash-footer />
  </section>
  </div>

</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<style scoped src="@/assets/css/styleSupport.css"></style>
<script>
import DashSidebar from "./dash-sidebar.vue";
import DashNavbar from "./dash-navbar.vue";
import DashFooter from "./dash-footer.vue";
import axios from 'axios'
import Swal from 'sweetalert2';
export default {
  name: "View Audit",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  mounted() {
    window.scrollTo(0, 0);

    let externalScriptCustom = document.createElement("script");
    externalScriptCustom.setAttribute(
      "src",
      "https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js"
    );
    document.head.appendChild(externalScriptCustom);
    this.fetchTrans();
  },
  data() {
    return {
      audit: {
        validityPeriod:''
      },
      token: JSON.parse(localStorage.getItem("user")).token,
      transId: this.$route.params.id,
      item: [],
      orderId: '',
      order: {
        estimate: '',
        quote: {
          product: [],
        }
      },
      product: []
    };
  },
  methods: {
    async fetchTrans() {
      const res = await fetch(
        `https://producemart.herokuapp.com/getTransactionById/${this.transId}`,
        {
          method: "GET",
          headers: {
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      this.item = data
      this.orderId = data.order._id
      this.order = data.order
      this.product = data.order.quote.product.img_url[0]
    },
    getDate(value){
      return new Date(value).toLocaleDateString()
    },
    getTime(value){
      return new Date(value).toLocaleTimeString()
    },
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap');

h2.span{
  font-family: 'Montserrat', sans-serif;
  line-height: 25px;
  font-size: 14px !important;
  font-weight: 500 !important;
}
.btn-mart{
  background: #000;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-size: 12px !important;
  padding: 10px 35px;
}
</style> 
<template>
<div>
  <title>View Order - Supplier Dashboard | Produce Mart</title>
  <dash-sidebar />

  <section class="main_content dashboard_part large_header_bg">
    <dash-navbar />
    <!--Main Content-->
    <div class="main_content_iner">
      <div class="container-fluid p-0">
        <div class="row justify-content-center">
          <!--Breadcrumb-->
          <div class="col-12">
            <div class="dashboard_header mb_50">
              <div class="row">
                <div class="col-lg-8">
                  <div class="dashboard_header_title">
                    <h3>{{product.name}}</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i>
                      <router-link to="/dashboard/view-orders"
                        ><a>View Orders</a></router-link
                      >
                      <i class="fas fa-caret-right"></i>
                      {{product.name}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Main-->
          <div class="col-md-12">
            <div class="mb-3">
              <router-link
                to="/dashboard/view-orders"
                class="backToPage"
                ><i class="bi bi-arrow-bar-left"></i> Back to
                Orders</router-link
              >
            </div>
            <div class="row justify-content-center summaryBox" v-if="order.shipment_type != ''">
              <div class="col-lg-12">
                <h1>Quote Summary</h1>
                <div class="lineHr"></div>
              </div>
              <div class="col-lg-3">
                <div class="productImgDiv">
                  <img :src="product.img_url[0]" />
                </div>
              </div>
              <div class="col-lg-4">
                <table>
                  <tr>
                    <td class="mainText">Product Name:</td>
                    <td class="contentText">
                      <span class="statustable">{{product.name}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="mainText">Order ID:</td>
                    <td class="contentText">
                      <span class="statustable">{{order._id}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="mainText">Product Availability:</td>
                    <td class="contentText">
                      <span class="statustable">{{order.available}}</span>
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
                    <td class="contentText">{{getTime(quote.createdAt)}}</td>
                  </tr>
                  <tr>
                    <td class="mainText">date of request:</td>
                    <td class="contentText">{{getDate(quote.createdAt)}}</td>
                  </tr>
                  <tr>
                    <td class="mainText">estimated cost:</td>
                    <td class="contentText">${{order.estimate.total_price}}</td>
                  </tr>
                </table>
              </div>
              <div class="col-lg-12 text-center mt-4">
                <button class="btnCancel" id="btn_modal">
                  <i class="bi bi-x-circle-fill"></i> Cancel Order
                </button>
              </div>
              <!-- Modal -->
              <div id="modal" class="modal-container">
                <div class="modal-box">
                  <div class="modal-header-order">
                    <h2>Cancel Order</h2>
                    <div class="btn_close-order">X</div>
                  </div>
                  <div class="modal-content-order">
                    <form>
                      <div class="row">
                        <div class="col-lg-12 text-center mb-4">
                          <h3>
                            Can we know why you want to cancel your order?
                          </h3>
                        </div>
                        <div class="col-lg-12 mb-3">
                          <input type="radio" name="cancel" id="one" />
                          <label for="one"
                            >Transaction is taking too long?</label
                          >
                        </div>
                        <div class="col-lg-12 mb-3">
                          <input type="radio" name="cancel" id="two" />
                          <label for="two">Alternative supplier?</label>
                        </div>
                        <div class="col-lg-12 mb-3">
                          <label>Other</label>
                          <textarea
                            cols="30"
                            rows="3"
                            placeholder="Leave feedback..."
                          ></textarea>
                        </div>
                        <div class="col-lg-12 text-center">
                          <button type="submit">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center summaryBox" v-else>
              <div class="col-lg-12">
                <h1>Quote Summary</h1>
                <div class="lineHr"></div>
              </div>
              <div class="col-lg-3">
                <div class="productImgDiv">
                  <img :src="product.img_url[0]" />
                </div>
              </div>
              <div class="col-lg-4">
                <table>
                  <tr>
                    <td class="mainText">Product Name:</td>
                    <td class="contentText">
                      <span class="statustable">{{product.name}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="mainText">Package weight:</td>
                    <td class="contentText">{{product.package.weight}}{{product.package.weight_unit}}</td>
                  </tr>
                  <tr>
                    <td class="mainText">time of request:</td>
                    <td class="contentText">{{getTime(quote.createdAt)}}</td>
                  </tr>
                </table>
              </div>
              <div class="col-lg-4">
                <table>
                  <tr>
                    <td class="mainText">date of request:</td>
                    <td class="contentText">{{getDate(quote.createdAt)}}</td>
                  </tr>
                  <tr>
                    <td class="mainText">estimated cost:</td>
                    <td class="contentText">${{product.package.price}}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>

          <div class="container-fluid orderProcessSteps" id="orderProgress">
            <div class="row">
              <div class="col-lg-12 p-0 mt-3 mb-2">
                <div class="px-0 pt-4 pb-0 mt-3 mb-3">
                  <form>
                    <!-- progressbar -->
                    <!-- <ul id="progressbar">
                      <li class="active" id="account">
                        <strong>Quote</strong>
                      </li>
                      <li id="personal" :class="{active: !order_status}"><strong>Order</strong></li>
                      <li id="payment" :class="{active: summary}"><strong>Shipping</strong></li>
                      <li id="confirm"><strong>Release Fund</strong></li>
                    </ul>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div> -->

                    <!-- fieldsets -->
                    <fieldset v-if="!admin_fee">
                      <div class="col-12 QA_section mb-4">
                        <div class="white_card card_height_100 mb_30 pt-4">
                          <div class="white_card_body">
                            <div class="QA_section">
                              <div class="white_box_tittle list_header">
                                <h4>Shipping Details</h4>
                              </div>
                              <div class="row mb-4">
                                <div class="col-sm-6">
                                  <h2 class="span">Shipping Type : <strong>Air Frieght</strong>
                                  </h2>
                                  
                                  <h2 class="span">Port : <strong>Lagos</strong></h2>
                                  <h2 class="span">Country :  <strong>Nigeria</strong></h2>
                                  <h2 class="span">Incoterms : <strong>BBB</strong></h2>
                                </div>
                                <div class="col-sm-6">
                                  <div class="float-end">
                                    <!-- <div v-if="shipping.type == 'road'"> -->
                                      <h2 class="span">Destinamtion: <strong>Idiagbalumo</strong></h2>
                                    <!-- </div> -->
                                    <h2 class="span">Shipping Date :  <strong>01/01/2022</strong></h2>
                                    <h2 class="span">Delivery Date :  <strong>04/05/2022</strong></h2>
                                    <h2 class="span">Time of Shipping :  <strong>10:02</strong></h2>
                                  </div>
                                </div>
                                <div class="text-center" v-if="!admin_fee">
                                  <button class="btn btn-mart" disabled type="button">Awaiting Supplier Payment</button>
                                </div>
                                <!-- <div class="text-center" v-if="audit.progress == 'pending' || audit.progress == 'declined'">
                                  <button class="btn btn-mart" @click="approveAudit('approved')" type="button">Approve Audit Certificate</button>
                                </div>

                                <div v-else class="text-center">
                                  <button class="btn btn-mart" @click="$router.push('/dashboard/home')" type="button">Back to Dashboard</button>
                                </div> -->
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset v-if="admin_fee">
                      <div class="form-card">
                        <div class="row justify-content-center">
                          <div class="col-lg-12 mb-n1 text-decoration-underline text-left">
                            <h5 class="fw-normal">Shipping Summary</h5>
                          </div>
                          <div class="col-lg-12 paymentSumDiv">
                            <div class="row justify-content-center">
                              <!--shipping details-->
                              <div class="col-lg-5 paymentBox">
                                <button class="title">Shipping Details</button>
                                <table>
                                  <tr>
                                    <td>shipping type:</td>
                                    <td>{{order.shipment_type}} freight</td>
                                  </tr>
                                  <tr>
                                    <td>insurance:</td>
                                    <td>${{order.estimate.insurance_price}}</td>
                                  </tr>
                                  <tr>
                                    <td>estimated cost:</td>
                                    <td>${{order.estimate.total_price}}</td>
                                  </tr>
                                  <tr>
                                    <td>duration:</td>
                                    <td>{{order.estimate.duration}}</td>
                                  </tr>
                                  <tr>
                                    <td>Pick up date:</td>
                                    <td>
                                      <span class="alert"
                                        >Awaiting Response</span
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>status:</td>
                                    <td>
                                      <span class="alert"
                                        >Awaiting Pick up</span
                                      >
                                    </td>
                                  </tr>
                                  <!-- <tr>
                                    <td>Destinations:</td>
                                    <td>{{Yes}}</td>
                                  </tr> -->
                                  <tr>
                                    <td>Port:</td>
                                    <td>{{order.shipping_address.port}}</td>
                                  </tr>
                                  <tr>
                                    <td>Country:</td>
                                    <td>{{order.shipping_address.country}}</td>
                                  </tr>
                                  <tr>
                                    <td>Incoterm:</td>
                                    <td>{{order.shipping_address.incoterm}}</td>
                                  </tr>
                                  <tr>
                                    <td>PAYMENT STATUS:</td>
                                    <td><a class="completed">COMPLETE</a></td>
                                  </tr>
                                </table>
                              </div>
                              <!--recipients details-->
                              <div class="col-lg-5 paymentBox paymentBoxBorder">
                                <button class="title">Recipient Details</button>
                                <table>
                                  <tr>
                                    <td>first name:</td>
                                    <td>{{order.buyer.firstname}}</td>
                                  </tr>
                                  <tr>
                                    <td>last name:</td>
                                    <td>{{order.buyer.lastname}}</td>
                                  </tr>
                                  <tr>
                                    <td>Company Name:</td>
                                    <td>{{order.buyer.company_name}}</td>
                                  </tr>
                                  <tr>
                                    <td>Email:</td>
                                    <td>{{order.buyer.email}}</td>
                                  </tr>
                                  <tr>
                                    <td>Phone No:</td>
                                    <td>{{order.buyer.phone_no}}</td>
                                  </tr>
                                </table>
                                <button class="title">Shippers Details</button>
                                <table>
                                  <tr>
                                    <td>shipping company:</td>
                                    <td>{{order.shipper.companyName}}</td>
                                  </tr>
                                  <tr>
                                    <td>first name:</td>
                                    <td>{{order.shipper.firstName}}</td>
                                  </tr>
                                  <tr>
                                    <td>last name:</td>
                                    <td>{{order.shipper.lastName}}</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                            <div class="text-center" v-if="delivered">
                              <button class="btn btn-mart" disabled type="button">Awaiting Delivery Confirmation</button>
                            </div>
                            <div class="text-center" v-if="delivered && order.payment_refund == true">
                              <button class="btn btn-mart" @click="refundBuyer" type="button">Refund Buyer</button>
                            </div>
                            <div v-if="!delivered && order.payment_refund == false">
                              <div class="row">
                                <div class="col d-grid gap-2">
                                  <button class="btn btn-outline-dark" @click="releaseFund()" type="button">Release Fund</button>
                                </div>
                                <div class="col d-grid gap-2">
                                  <button class="btn btn-mart" @click="releaseShipperBalance()" type="button">Release Shipper Balance</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <input
                        type="button"
                        name="next"
                        class="next action-button"
                        value="Next"
                      />
                      <input
                        type="button"
                        name="previous"
                        class="previous action-button-previous"
                        value="Previous"
                      /> -->
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
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
import axios from "axios";
import Swal from 'sweetalert2';
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  mounted() {
    window.scrollTo(0, 0);
    //this.checkRouteQuery();
    /*$(document).ready(function () {
      var current_fs, next_fs, previous_fs; //fieldsets
      var opacity;
      var current = 1;
      var steps = $("fieldset").length;

      setProgressBar(current);

      $(".next").click(function () {
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li")
          .eq($("fieldset").index(next_fs))
          .addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate(
          { opacity: 0 },
          {
            step: function (now) {
              // for making fielset appear animation
              opacity = 1 - now;

              current_fs.css({
                display: "none",
                position: "relative",
              });
              next_fs.css({ opacity: opacity });
            },
            duration: 500,
          }
        );
        setProgressBar(++current);
      });

      $(".previous").click(function () {
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li")
          .eq($("fieldset").index(current_fs))
          .removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate(
          { opacity: 0 },
          {
            step: function (now) {
              // for making fielset appear animation
              opacity = 1 - now;

              current_fs.css({
                display: "none",
                position: "relative",
              });
              previous_fs.css({ opacity: opacity });
            },
            duration: 500,
          }
        );
        setProgressBar(--current);
      });

      function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar").css("width", percent + "%");
      }
    });*/

    $(document).ready(function () {
      var mediaquery = window.matchMedia("(max-width: 300px)");

      $("#btn_modal").click(function () {
        $("#modal").fadeIn("slow");

        if (mediaquery.matches) {
          //responsive
          $(".modal-box").animate({ left: "5%" });
        } else {
          $(".modal-box").animate({ left: "25%" });
        }
      });

      $(".btn_close").click(function () {
        $("#modal").fadeOut(500);
        $(".modal-box").animate({ left: "-75%" });
      });
    });

    let externalScriptCustom = document.createElement("script");
    externalScriptCustom.setAttribute(
      "src",
      "https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js"
    );
    document.head.appendChild(externalScriptCustom);
    this.getOrder();
  },
  data() {
    return {
      order: {
        estimate: ''
      },
      quoteId: '',
      orderId: this.$route.params.id,
      token: JSON.parse(localStorage.getItem("user")).token,
      termsAndConditions: false,
      response: false,
      admin_fee: false,
      delivered: false,
      buyerRequest: true,
      hold_product: '',
      pay_inspection: '',
      product_available: '',
      pay_admin:'',
      available_no: '',
      product: {
        package: '',
        img_url: ''
      },
      quote: [],
      hasSupply: '',
    };
  },
  computed:{
    isDisabled(){
      if (this.hasSupply == '') {
        return true
      } else {
        return false
      }
    },
    isDisableSumit(){
      if (this.hold_product == '' || this.pay_admin == '' || this.pay_inspection == '' || this.product_available == '') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    doneOrderProgress() {
      document.getElementById("orderProgress").style.display = "none";
    },
    refundBuyer(){
      Swal.fire({
        title: `Are you sure you want to Refund Buyer?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Proceed!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.get(`https://producemart.herokuapp.com/refundBuyerFund/${this.orderId}`, {
            headers: {
              Authorization: this.token,
            },
          })
          .then(res => {
            Swal.fire(
              'Released!',
              'Buyer successfully refunded.',
              'success'
            )
            this.getOrder();
          })
        }
      })
    },
    releaseShipperBalance(){
      Swal.fire({
        title: `Are you sure you want to Release Shipper Balance?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Proceed!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.get(`https://producemart.herokuapp.com/releaseSupplierFund/${this.orderId}`, {
            headers: {
              Authorization: this.token,
            },
          })
          .then(res => {
            Swal.fire(
              'Released!',
              'Balance has been successfully released to shipper.',
              'success'
            )
            this.getOrder();
          })
        }
      })
    },
    releaseFund(){
      Swal.fire({
        title: `Are you sure you want to Release Supplier Fund?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Proceed!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.get(`https://producemart.herokuapp.com/refundBuyerFund/${this.orderId}`, {
            headers: {
              Authorization: this.token,
            },
          })
          .then(res => {
            Swal.fire(
              'Released!',
              'Fund has been successfully released to Buyer.',
              'success'
            )
            this.getOrder();
          })
        }
      })
    },
    getDate(value){
      return new Date(value).toLocaleDateString()
    },
    getTime(value){
      return new Date(value).toLocaleTimeString()
    },
    //Is produce available all year round?
    nextAction() {
      /*if (this.hasSupply == 'yes') {
        this.buyerRequest = false;
        this.termsAndConditions = true
      }
      else if (this.hasSupply == 'no') {
        
      }
      else if (this.hasSupply == 'less') {
        this.buyerRequest = false;
        this.termsAndConditions = true
      }
      else{
        console.log('nothing');
      }*/
    },
    getOrder() {
      axios.get(`https://producemart.herokuapp.com/getAllOrder/${this.orderId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token,
        },
      })
      .then(res => {
        let datas = res.data.data
        let question = datas.questions.pay_admin
        this.orderId = res.data.data._id
        let escrowpay = res.data.data.escrow_paid
        let admin_fee = res.data.data.admin_fee
        this.product = datas.quote.product
        this.quote = datas.quote
        let product_delivered = datas.product_delivered
        this.order = datas/*
        if (question == true) {
          this.buyerRequest = false;
          this.termsAndConditions = false
          this.response = true
        }
        if(escrowpay == true){
          this.buyerRequest = false;
          this.termsAndConditions = false
          this.response = false
          this.order_status = true
        }
        if(admin_fee == true){
          this.buyerRequest = false;
          this.termsAndConditions = false
          this.response = false
          this.order_status = false
          this.summary = true
        }*/
        if(admin_fee == true){
          this.admin_fee = true;
        }else {
          this.admin_fee = true;
        }
        if(product_delivered == true){
          this.delivered = true
        }
        else{
          this.delivered = false
        }
      })
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

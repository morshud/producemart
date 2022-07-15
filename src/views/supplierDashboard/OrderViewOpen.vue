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
                      <router-link to="/supplier-dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i>
                      <router-link to="/supplier-dashboard/open-orders"
                        ><a>Open Orders</a></router-link
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
                to="/supplier-dashboard/open-orders"
                class="backToPage"
                ><i class="bi bi-arrow-bar-left"></i> Back to Open
                Orders</router-link
              >
            </div>
            <div class="row justify-content-center summaryBox">
              <div class="col-lg-12">
                <h1>Quote Summary</h1>
                <div class="lineHr"></div>
              </div>
              <div class="col-lg-3">
                <div class="productImgDiv">
                  <img src="@/assets/img/products/product1.png" />
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
            <div class="row justify-content-center">
              <div class="col-lg-12 text-center p-0 mt-3 mb-2">
                <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                  <form id="msform">
                    <!-- progressbar -->
                    <ul id="progressbar">
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
                    </div>

                    <!-- fieldsets -->
                    <fieldset v-if="buyerRequest">
                      <div class="form-card">
                        <div class="row">
                          <div class="col-12 mb-2">
                            <h2 class="fs-title">Buyers Request</h2>
                          </div>
                          <div class="col-12 boxWhite">
                            <h5>Do you have 10 bags of Bana-QBL-18L40?</h5>
                            <div class="row mt-4 text-center">
                              <div class="col-lg-4 mb-3">
                                <input
                                  type="radio"
                                  name="let"
                                  class="mr-3"
                                  value="yes"
                                  v-model="hasSupply"
                                />
                                <label for="yesSupply">Yes, I have</label>
                              </div>
                              <div class="col-lg-4 mb-3">
                                <input
                                  type="radio"
                                  name="let"
                                  class="mr-3"
                                  value="no"
                                  v-model="hasSupply"
                                />
                                <label for="noSupply">No, I don't have</label>
                              </div>
                              <div class="col-lg-4 mb-3">
                                <input
                                  type="radio"
                                  name="let"
                                  value="less"
                                  class="mr-3"
                                  v-model="hasSupply"
                                />
                                <label for="lessSupply">I have less</label>
                                <div class="row">
                                  <div class="col-lg-12 mb-3" v-if="hasSupply == 'less'">
                                    <input type="number" class="form-control" v-model="available_no" id="">
                                  </div>
                                </div>
                              </div>
                              
                              <div class="col-lg-12 mt-3 text-center">
                                <button @click="nextAction" :disabled="isDisabled" type="button">Next</button>
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
                      /> -->
                    </fieldset>

                    <fieldset v-if="termsAndConditions">
                      <div class="form-card">
                        <div class="row">
                          <div class="col-12 mb-2">
                            <h4 class="" style="font-size: 16px;font-weight: 400;text-decoration: underline;">Terms & Conditions</h4>
                          </div>
                          <div class="col-12 boxWhite text-left">
                            <h5>Tick the following boxes to agree with the Supplier terms & condition</h5>
                            <div class="row mt-4 text-left">
                              <div class="col-md-12 mb-3">
                                <input
                                  type="radio"
                                  value="true"
                                  v-model="hold_product"
                                />
                                <label for="yesSupply">I will hold the product for at least 15 working days after the Buyer pays into escrow </label>
                              </div>
                              <div class="col-md-12 mb-3">
                                <input
                                  type="radio"
                                  value="true"
                                  v-model="pay_inspection"
                                />
                                <label for="noSupply">I will pay for the inspection of the order (which has to happen before handover to a shipper)</label>
                              </div>
                              <div class="col-md-12 mb-3">
                                <input
                                  type="radio"
                                  value="true"
                                  v-model="product_available"
                                />
                                <label for="lessSupply">If I am unable to make the product available after the buyer pays into escrow, I will have to pay a penalty fee<!--  ($ 30) -->.</label>
                              </div>
                              <div class="col-md-12 mb-3">
                                <input
                                  type="radio"
                                  value="true"
                                  v-model="pay_admin"
                                />
                                <label for="lessSupply">I will pay an admin fee of $50 charged to proceed with this transaction</label>
                              </div>
                              <div class="col-lg-12 mt-3 text-center">
                                <button @click="submitTerms" :disabled="isDisableSumit" type="button">Submit</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset v-if="response">
                      <div class="form-card">
                        <div class="row">
                          <div class="col-12 mb-2">
                            <h4 class="" style="font-size: 16px;font-weight: 400;text-decoration: underline;">Response Status</h4>
                          </div>
                          <div class="col-12 boxWhite text-left">
                            <div class="row mt-4 text-center">
                              <img src="@/assets/img/response.png" alt="" srcset="">
                              <h5 style="font-weight: 400;font-size: 16px;">Thanks for Submitting your response, the admin will have a look <br> and get back to you</h5>
                              <div class="col-lg-12 mt-3 text-center">
                                <button style="width: 26%;font-weight: 600;font-size: 13px;" @click="$router.push('/suplier-dashboard/home')" type="button">Back to Dashboard</button>
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
                      /> -->
                    </fieldset>

                    <fieldset v-if="order_status">
                      <div class="form-card">
                        <div class="row justify-content-center">
                          <div class="col-12 mb-2">
                            <h2 class="fs-title">Orders Status</h2>
                          </div>
                          <div class="col-12 boxWhite">
                            <div class="row justify-content-center">
                              <div class="col-lg-8 text-center">
                                <img
                                  src="@/assets/img/dashboard-img/dashOrderStatus.png"
                                />
                                <h6>
                                  The buyers has paid for your produce into
                                  escrow and money will be released once the
                                  produce is picked up
                                </h6>
                                <span>Proceed to know the pick up date. </span>
                                <button type="button" @click="proceedPayment">Proceed</button>
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

                    <fieldset v-if="summary">
                      <div class="form-card">
                        <div class="row justify-content-center">
                          <div class="col-12 mb-2">
                            <h2 class="fs-title">Shipping Summary</h2>
                          </div>
                          <div class="col-lg-12 paymentSumDiv">
                            <div class="row justify-content-center">
                              <!--shipping details-->
                              <div class="col-lg-5 paymentBox">
                                <button class="title">Product Details</button>
                                <table>
                                  <tr>
                                    <td>shipping type:</td>
                                    <td>sea freight</td>
                                  </tr>
                                  <tr>
                                    <td>Pick up date:</td>
                                    <td>22-Jan-2022</td>
                                  </tr>
                                  <tr>
                                    <td>pick up time:</td>
                                    <td>10:30am</td>
                                  </tr>
                                  <tr>
                                    <td>Pick up address:</td>
                                    <td>No 2 Faniyi Street</td>
                                  </tr>
                                  <tr>
                                    <td>Country:</td>
                                    <td>Nigeria</td>
                                  </tr>
                                  <tr>
                                    <td>status:</td>
                                    <td><span class="alert">Pick up</span></td>
                                  </tr>
                                  <tr>
                                    <td>Port:</td>
                                    <td>Apapa Port</td>
                                  </tr>
                                </table>
                              </div>
                              <!--recipients details-->
                              <div class="col-lg-5 paymentBox paymentBoxBorder">
                                <button class="title">Shipping Details</button>
                                <table>
                                  <tr>
                                    <td>shipping company:</td>
                                    <td>DHL</td>
                                  </tr>
                                  <tr>
                                    <td>invoice no:</td>
                                    <td>II234Q4</td>
                                  </tr>
                                  <tr>
                                    <td>date of invoice:</td>
                                    <td>22-Jan-2022</td>
                                  </tr>
                                  <tr>
                                    <td>Custom entry no:</td>
                                    <td>2233457899</td>
                                  </tr>
                                  <tr>
                                    <td>DHL bill of landing no:</td>
                                    <td>234567</td>
                                  </tr>
                                  <tr>
                                    <td>customer no:</td>
                                    <td>123456</td>
                                  </tr>
                                </table>
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

                    <fieldset>
                      <div class="form-card">
                        <div class="row justify-content-center">
                          <div class="col-12 mb-2">
                            <h2 class="fs-title">Release Funds</h2>
                          </div>
                          <div class="col-lg-12 paymentCom">
                            <div
                              class="row justify-content-center pendingPayment"
                            >
                              <div class="col-lg-8 text-center">
                                <img
                                  src="@/assets/img/dashboard-img/pendingFund.png"
                                />
                                <p>
                                  Your payment is yet to be released by escrow,
                                  once it is relesed you would be notified
                                  immediately
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="row completedPayment">
                            <div class="col-lg-12 text-center mb-3">
                              <h3>
                                🎉 Congratulations! You have successfully
                                completed this transaction 🎉
                              </h3>
                            </div>
                            <div class="row justify-content-center">
                              <!--payment summary-->
                              <div class="col-lg-5 paymentBox">
                                <button class="title">Payment Summary</button>
                                <table>
                                  <tr>
                                    <td>Product Name:</td>
                                    <td>Banana</td>
                                  </tr>
                                  <tr>
                                    <td>Quantity Requested:</td>
                                    <td>10 Bags</td>
                                  </tr>
                                  <tr>
                                    <td>Fund release date:</td>
                                    <td>01 May 2022</td>
                                  </tr>
                                  <tr>
                                    <td>Amount:</td>
                                    <td>$100,000</td>
                                  </tr>
                                  <tr>
                                    <td>Status:</td>
                                    <td>
                                      <span class="completed"
                                        >Fund Released</span
                                      >
                                    </td>
                                  </tr>
                                </table>
                              </div>
                              <!--recipients details-->
                              <div class="col-lg-5 paymentBox paymentBoxBorder">
                                <button class="title">Reviews</button>
                                <h6>
                                  Would you like to leave a review about this
                                  service?
                                </h6>
                                <textarea cols="30" rows="3"></textarea>
                                <button class="submitReview">Submit</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <input
                        type="button"
                        name="next"
                        class="next action-button"
                        value="Done"
                        @click="doneOrderProgress()"
                      />
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
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  mounted() {
    window.scrollTo(0, 0);
    this.checkRouteQuery();
    $(document).ready(function () {
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
    });

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
      order: [],
      quoteId: this.$route.params.id,
      orderId: '',
      token: JSON.parse(localStorage.getItem("user")).token,
      termsAndConditions: false,
      response: false,
      order_status: false,
      summary: false,
      buyerRequest: true,
      hold_product: '',
      pay_inspection: '',
      product_available: '',
      pay_admin:'',
      available_no: '',
      product: {
        package: '',
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
    getDate(value){
      return new Date(value).toLocaleDateString()
    },
    getTime(value){
      return new Date(value).toLocaleTimeString()
    },
    //Is produce available all year round?
    nextAction() {
      if (this.hasSupply == 'yes') {
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
      }
    },
    proceedPayment(){
      axios.get(`https://producemart.herokuapp.com/admin-fee/pay/${this.orderId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token,
        },
      })
      .then(res => {
        //console.log(res.data.checkoutUrl)
        window.location.href = res.data.checkoutUrl
      })
    },
    checkRouteQuery(){
      let query = this.$route.query
      if (query.status) {
        axios.get(`https://producemart.herokuapp.com/admin-fee/success`, {
          params: {
            status: query.status,
            userId: query.userId,
            orderId: query.orderId,
            paymentId: query.paymentId,
            token: query.token,
            PayerID: query.PayerID,
          }
        }).then(res => {
          this.$router.push('/supplier-dashboard/view-open-order/' + this.quoteId)
          this.getOrder();
        })
      } else {
        console.log('not found')
      }
    },
    submitTerms(){
      this.buyerRequest = false;
      this.termsAndConditions = false
      this.response = true
      let data = {
        "available": this.hasSupply,
        "available_no": this.available_no,
        "hold_product": true,
        "pay_inspection": true,
        "product_available": true,
        "pay_admin": true
      }
      console.log(data);
      axios.put(`https://producemart.herokuapp.com/orderAvailable/${this.orderId}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token,
        },
      })
      .then(res => {
        this.getOrder()
      })
    },
    getOrder() {
      axios.get(`https://producemart.herokuapp.com/getOrder/${this.quoteId}`, {
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
        console.log(question)
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
        }
      })
    },
  },
};
</script>

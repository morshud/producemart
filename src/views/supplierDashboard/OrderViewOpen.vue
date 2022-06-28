<template>
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
                    <h3>Order Product Name Here</h3>
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
                      <i class="fas fa-caret-right"></i> Order Product Name Here
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
                      <span class="statustable">Bana- 197621</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="mainText">estimated weight:</td>
                    <td class="contentText">200kg</td>
                  </tr>
                  <tr>
                    <td class="mainText">time of request:</td>
                    <td class="contentText">10:00am</td>
                  </tr>
                </table>
              </div>
              <div class="col-lg-4">
                <table>
                  <tr>
                    <td class="mainText">date of request:</td>
                    <td class="contentText">25-May-2022</td>
                  </tr>
                  <tr>
                    <td class="mainText">estimated cost:</td>
                    <td class="contentText">$100,000</td>
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
                      <li id="personal"><strong>Order</strong></li>
                      <li id="payment"><strong>Shipping</strong></li>
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
                    <fieldset>
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
                                  @click="quantityRequested()"
                                  name="quantity"
                                  id="yesSupply"
                                />
                                <label for="yesSupply">Yes, I have</label>
                              </div>
                              <div class="col-lg-4 mb-3">
                                <input
                                  type="radio"
                                  @click="quantityRequested()"
                                  name="quantity"
                                  id="noSupply"
                                />
                                <label for="noSupply">No, I don't have</label>
                              </div>
                              <div class="col-lg-4 mb-3">
                                <input
                                  type="radio"
                                  @click="quantityRequested()"
                                  name="quantity"
                                  id="lessSupply"
                                />
                                <label for="lessSupply">I have less</label>
                              </div>
                              <div class="col-lg-12 mb-3" id="iflessSupply">
                                <textarea
                                  cols="30"
                                  rows="3"
                                  class="inputTextArea"
                                ></textarea>
                              </div>
                              <div class="col-lg-12 mt-3 text-center">
                                <button type="submit">Submit</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <input
                        type="button"
                        name="next"
                        class="next action-button"
                        value="Next"
                      />
                    </fieldset>

                    <fieldset>
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
                                <button>Proceed</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <input
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
                      />
                    </fieldset>

                    <fieldset>
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
                      <input
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
                      />
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
</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<style scoped src="@/assets/css/styleSupport.css"></style>
<script>
import DashSidebar from "./dash-sidebar.vue";
import DashNavbar from "./dash-navbar.vue";
import DashFooter from "./dash-footer.vue";
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  mounted() {
    window.scrollTo(0, 0);

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
      order: null,
      token: JSON.parse(localStorage.getItem("user")).token,
    };
  },
  methods: {
    doneOrderProgress() {
      document.getElementById("orderProgress").style.display = "none";
    },
    //Is produce available all year round?
    quantityRequested() {
      if (document.getElementById("lessSupply").checked) {
        document.getElementById("iflessSupply").style.display = "block";
      } else document.getElementById("iflessSupply").style.display = "none";
    },
    async getOrder() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getOrder/" + this.id,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.token,
          },
        }
      );
      //   const data = await res;

      //   console.log(data);
    },
  },
};
</script>

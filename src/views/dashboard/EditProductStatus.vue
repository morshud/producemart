<template>
  <title>Edit Product Status | Produce Mart</title>
  <dash-sidebar />

  <section class="main_content dashboard_part large_header_bg">
    <dash-navbar />

    <!--Main Content-->
    <div class="main_content_iner">
        <div class="container mt-1">
            <div class="row justify-content-center">
            <!--Breadcrumb-->
            <div class="col-12">
                <div class="dashboard_header">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="dashboard_header_title">
                            <h3>Product Status</h3>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="dashboard_breadcam text-right">
                            <p>
                                <router-link to="/dashboard/home"><a>Dashboard</a></router-link>
                                <i class="fas fa-caret-right"></i> Product Status
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <main class="productInnerMain">
            <div class="container mt-5">
            <div class="row">
                <div class="col-lg-6">
                <swiper :style="{'--swiper-navigation-color': '#78c97f','--swiper-pagination-color': '#78c97f',}" :effect="'flip'" :grabCursor="true" :pagination="true" :navigation="true" :modules="modules" class="mySwiper">
                    <swiper-slide>
                        <img src="@/assets/img/products/product1.png" />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/img/products/product11.png" />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/img/products/product111.png" />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/img/products/product1111.png" />
                    </swiper-slide>
                </swiper>
                </div>
                <div class="col-lg-6">
                <div class="row productIntroText justify-content-center">
                    <div class="col-lg-12 detailsDiv">
                    <span>Product Name</span>
                    <p>{{ product && product.name }} - CODE-1976</p>
                    <small
                        ><img src="@/assets/img/dashboard-img/medalGold.png" /> Gold
                        Rated Supplier | <a href="#">See Audit Report</a></small
                    >
                    </div>
                    <div class="col-lg-12 detailsDiv">
                    <span>Price</span>
                    <p>${{ Math.floor(Math.random() * 100) }} per 100kg</p>
                    <p>${{ Math.floor(Math.random() * 1000) }} per bag</p>
                    </div>
                    <div class="col-lg-4 detailsDivBelow">
                    <h5>Crop Year</h5>
                    <h6>2022</h6>
                    </div>
                    <div class="col-lg-4 detailsDivBelow">
                    <h5>Produce Variety</h5>
                    <h6>{{ product && product.variety }}</h6>
                    </div>
                    <div class="col-lg-4 detailsDivBelow">
                    <h5>Supply Ability</h5>
                    <h6>10,000 bags per week</h6>
                    </div>
                    <div class="col-lg-4 detailsDivBelow">
                    <h5>Available</h5>
                    <h6>
                        From: 02-Jan-2022 <br />
                        To: 02-Nov-2022
                    </h6>
                    </div>
                    <div class="col-lg-4 detailsDivBelow">
                    <h5>Grade, Style & Quality</h5>
                    <h6>Fresh</h6>
                    </div>
                    <div class="col-lg-4 detailsDivBelow">
                    <h5>Minimum Order</h5>
                    <h6>1000 bags</h6>
                    </div>
                    <div class="col-lg-4 detailsDivBelow">
                    <h5>Incoterms</h5>
                    <h6>EXW - EX Works</h6>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div class="container mt-5">
            <div class="row">
                <div class="col-lg-12">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                    <button
                        class="nav-link active tabs-button"
                        id="pills-product-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-product"
                        type="button"
                        role="tab"
                        aria-controls="pills-product"
                        aria-selected="true"
                    >
                        Product Details
                    </button>
                    </li>
                    <li class="nav-item" role="presentation">
                    <button
                        class="nav-link tabs-button"
                        id="pills-characteristics-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-characteristics"
                        type="button"
                        role="tab"
                        aria-controls="pills-characteristics"
                        aria-selected="false"
                    >
                        Characteristics
                    </button>
                    </li>
                    <li class="nav-item" role="presentation">
                    <button
                        class="nav-link tabs-button"
                        id="pills-packaging-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-packaging"
                        type="button"
                        role="tab"
                        aria-controls="pills-packaging"
                        aria-selected="false"
                    >
                        Packaging
                    </button>
                    </li>
                    <li class="nav-item" role="presentation">
                    <button
                        class="nav-link tabs-button"
                        id="pills-certification-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-certification"
                        type="button"
                        role="tab"
                        aria-controls="pills-certification"
                        aria-selected="false"
                    >
                        Certification
                    </button>
                    </li>
                    <li class="nav-item" role="presentation">
                    <button
                        class="nav-link tabs-button"
                        id="pills-review-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-review"
                        type="button"
                        role="tab"
                        aria-controls="pills-review"
                        aria-selected="false"
                    >
                        Review
                    </button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <!--Product Details-->
                    <div
                    class="tab-pane fade show active"
                    id="pills-product"
                    role="tabpanel"
                    aria-labelledby="pills-product-tab"
                    >
                    <div class="row detailsMore">
                        <div class="col-lg-12">
                        <h1>Product Details</h1>
                        <p>
                            {{ product && product.description }}
                        </p>
                        <h1>More Details</h1>
                        <table>
                            <tr>
                            <td class="thead">Product Category</td>
                            <td class="tbody">{{ product && product.category }}</td>
                            </tr>
                            <tr>
                            <td class="thead">Farming Method</td>
                            <td class="tbody">{{ product && product.farmMethod }}</td>
                            </tr>
                            <tr>
                            <td class="thead">Country of Origin</td>
                            <td class="tbody">{{ product && product.country }}</td>
                            </tr>
                            <tr>
                            <td class="thead">Location of Produce</td>
                            <td class="tbody">{{ product && product.location }}</td>
                            </tr>
                            <tr>
                            <td class="thead">GMO (Genetically Modified Organism)</td>
                            <td class="tbody">{{ product && product.GMO }}</td>
                            </tr>
                            <tr>
                            <td class="thead">Crop Year</td>
                            <td class="tbody">16-02-2022</td>
                            </tr>
                            <tr>
                            <td class="thead">Is Produce Available Year Round?</td>
                            <td class="tbody">
                                {{
                                product &&
                                (product.yearRoundAvailable
                                    ? product.yearRoundAvailable.status
                                    : "No details available")
                                }}
                            </td>
                            </tr>
                            <tr>
                            <td class="thead">Special Storage Condition</td>
                            <td class="tbody">
                                {{
                                product &&
                                (product.specialStorageCondition
                                    ? product.specialStorageCondition.status
                                    : "No details available")
                                }}
                            </td>
                            </tr>
                            <tr>
                            <td class="thead">
                                Is Temperature Controlled Equipment Required For
                                Transportation?
                            </td>
                            <td class="tbody">
                                {{
                                product &&
                                (product.temperatureControlled
                                    ? product.temperatureControlled.status
                                    : "No details available")
                                }}
                            </td>
                            </tr>
                        </table>
                        </div>
                    </div>
                    </div>
                    <!--Characteristics-->
                    <div
                    class="tab-pane fade"
                    id="pills-characteristics"
                    role="tabpanel"
                    aria-labelledby="pills-characteristics-tab"
                    >
                    <div class="row detailsMore">
                        <div class="col-lg-12" v-if="product">
                        <h1>Product Characteristics</h1>
                        <table v-if="product.character">
                            <tr v-for="(xter, val, i) in product.character" :key="i">
                            <td class="thead">
                                {{ val == "comment" ? "Additional Comments" : val }}
                            </td>
                            <td class="tbody">{{ product.character[val] }}</td>
                            </tr>
                        </table>
                        </div>
                    </div>
                    </div>
                    <!--Packaging-->
                    <div
                    class="tab-pane fade"
                    id="pills-packaging"
                    role="tabpanel"
                    aria-labelledby="pills-packaging-tab"
                    >
                    <div class="row detailsMore">
                        <div class="col-lg-12">
                        <h1>Packaging & Minimum Order</h1>
                        <th class="headerTable">Individual Packages (1 unit)</th>
                        <table>
                            <tr>
                            <td class="thead">Package Unit</td>
                            <td class="tbody"></td>
                            </tr>
                            <tr>
                            <td class="thead">Volume of Packaging</td>
                            <td class="tbody"></td>
                            </tr>
                            <tr>
                            <td class="thead">Weight of Packaging</td>
                            <td class="tbody"></td>
                            </tr>
                            <tr>
                            <td class="thead">Price of Packaging</td>
                            <td class="tbody"></td>
                            </tr>
                        </table>
                        <th class="headerTable">Bulk Packages</th>
                        <table>
                            <tr>
                            <td class="thead">Shipment Packaging</td>
                            <td class="tbody"></td>
                            </tr>
                            <tr>
                            <td class="thead">Weight of Shipment Package</td>
                            <td class="tbody"></td>
                            </tr>
                            <tr>
                            <td class="thead">Dimension of Shipment Package</td>
                            <td class="tbody"></td>
                            </tr>
                            <tr>
                            <td class="thead">Price of Shipment</td>
                            <td class="tbody"></td>
                            </tr>
                            <tr>
                            <td class="thead">Number of Unit Per Shipment Package</td>
                            <td class="tbody"></td>
                            </tr>
                            <tr>
                            <td class="thead">Shipping in Container</td>
                            <td class="tbody"></td>
                            </tr>
                            <tr>
                            <td class="thead">Supplier Ability</td>
                            <td class="tbody"></td>
                            </tr>
                            <tr>
                            <td class="thead">Minimum Order Quantity</td>
                            <td class="tbody"></td>
                            </tr>
                        </table>
                        </div>
                    </div>
                    </div>
                    <!--Certification-->
                    <div
                    class="tab-pane fade"
                    id="pills-certification"
                    role="tabpanel"
                    aria-labelledby="pills-certification-tab"
                    >
                    <div class="row detailsMore" v-if="product">
                        <div class="col-lg-12">
                        <h1>Certifications</h1>
                        <table v-if="product.certification">
                            <tr v-for="(cert, i) in product.certification" :key="i">
                            <td class="thead certi">{{ cert.name }}</td>
                            <td class="tbody certi">
                                <a :href="cert.file_url" target="_blank"
                                >View Certification</a
                                >
                            </td>
                            </tr>
                        </table>
                        </div>
                    </div>
                    </div>
                    <!--Review-->
                    <div
                    class="tab-pane fade"
                    id="pills-review"
                    role="tabpanel"
                    aria-labelledby="pills-review-tab"
                    >
                        <div class="row justify-content-center productStatusAdmin">
                            <div class="col-lg-6 text-center mt-3">
                                <h3>Current Status: <span>Incomplete</span></h3>
                                <form>
                                    <div class="row">
                                        <div class="col-lg-12 mb-3">
                                            <label>Change Status</label>
                                            <select>
                                                <option>Choose Status</option>
                                                <option>Active</option>
                                                <option>Pending</option>
                                                <option>Incomplete</option>
                                                <option>Disable</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-12">
                                            <button type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>
    </div>

    <dash-footer />
  </section>

</template>
<style scoped src="@/assets/css/slider.css"></style>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<style scoped src="@/assets/css/styleSupport.css"></style>
<script>
import DashSidebar from "./dash-sidebar.vue";
import DashNavbar from "./dash-navbar.vue";
import DashFooter from "./dash-footer.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper";
import $ from "jquery";
require("jquery.easing");
import { countries } from "@/assets/countries";

export default {
  name: "Produce Mart",
  components: {
    Swiper,
    SwiperSlide,
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  setup() {
    return {
      modules: [EffectFlip, Pagination, Navigation],
    };
  },
  mounted() {
    window.scrollTo(0, 0);

    let externalScriptJquery = document.createElement('script')
    let externalScriptMetisMenu = document.createElement('script')
    let externalScriptCustom = document.createElement('script')

    externalScriptJquery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
    externalScriptMetisMenu.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/Mart-script/main/metisMenu.js')
    externalScriptCustom.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js')

    document.head.appendChild(externalScriptJquery)
    document.head.appendChild(externalScriptMetisMenu)
    document.head.appendChild(externalScriptCustom)

    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    $(".next").click(function () {
      if (animating) return false;
      animating = true;

      current_fs = $(this).parent();
      next_fs = $(this).parent().next();

      //activate next step on progressbar using the index of next_fs
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = now * 50 + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
              transform: "scale(" + scale + ")",
              position: "absolute",
            });
            next_fs.css({ left: left, opacity: opacity });
          },
          duration: 800,
          complete: function () {
            current_fs.hide();
            animating = false;
          },
          //this comes from the custom easing plugin
          easing: "easeInOutBack",
        }
      );
    });

    $(".previous").click(function () {
      if (animating) return false;
      animating = false;

      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();

      //de-activate current step on progressbar
      $("#progressbar li")
        .eq($("fieldset").index(current_fs))
        .removeClass("active");

      //show the previous fieldset
      previous_fs.show();
      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = (1 - now) * 50 + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({ left: left });
            previous_fs.css({
              transform: "scale(" + scale + ")",
              opacity: opacity,
            });
          },
          duration: 800,
          complete: function () {
            current_fs.hide();
            animating = false;
          },
          //this comes from the custom easing plugin
          easing: "easeInOutBack",
        }
      );
    });
    this.getProduct();
  },
  data() {
    return {
      product: null,
      id: this.$route.params.id,
      countries: countries,
    };
  },
  methods: {
    async getProduct() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getProductById/" + this.id
      );
      const { data } = await res.json();

      this.product = data;
      console.log(this.product);
    },
    sendAir() {
      var x = document.getElementById("ifSendAir");
      if (!x.style.display || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    sendSea() {
      var x = document.getElementById("ifSendSea");
      if (!x.style.display || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    sendRoad() {
      var x = document.getElementById("ifSendRoad");
      if (!x.style.display || x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
  },
};
</script>

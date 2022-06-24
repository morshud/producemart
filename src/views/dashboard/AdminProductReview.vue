<template>
  <title>Prdoduct review | Produce Mart</title>
  <!-- <mainHeader />
  <searchHeader /> -->

  <!--Page Breadcrumb-->
  <section class="pageProductBreadcrumb">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="textHead">
            <p>
              <!-- <router-link to="/dashboard" class="routeLink">Home</router-link>
              <span>></span> -->
              <router-link to="/dashboard/home" class="routeLink"
                >Product Review</router-link
              >
            </p>
            <h2>{{ product && product.name }}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Page Breadcrumb Ends-->

  <main class="productInnerMain">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-6" v-if="product">
          <swiper
            :style="{
              '--swiper-navigation-color': '#78c97f',
              '--swiper-pagination-color': '#78c97f',
            }"
            :effect="'flip'"
            :grabCursor="true"
            :pagination="true"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="(img, i) in product.img_url" :key="i">
              <img :src="img" />
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
            <div class="col-lg-12 detailsDiv" v-if="product">
              <span>Price</span>
              <p>{{ product.package.price }} per {{ product.package.unit }}</p>
              <p v-if="product.package?.per_unit">
                {{ product.package.per_unit }} {{ product.name }} are in a
                {{ product.package.unit }}
              </p>
              <p>
                1 {{ product.package.unit }} weighs {{ product.package.weight
                }}{{ product.package.weight_unit }}
              </p>
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
              <h6 v-if="product">
                {{ product.supply_ability.quantity }}
                {{ product.supply_ability.qty_unit }}
                {{ product.supply_ability.frequency }}
              </h6>
            </div>
            <div class="col-lg-4 detailsDivBelow" v-if="product">
              <h5>Available</h5>
              <h6 v-if="product.available">Throughout the year</h6>
              <h6 v-else>
                From: 02-Jan-2022 <br />
                To: 02-Nov-2022
              </h6>
            </div>
            <div class="col-lg-4 detailsDivBelow">
              <h5>Grade, Style & Quality</h5>
              <h6>{{ product && product.character.grade }}</h6>
            </div>
            <div class="col-lg-4 detailsDivBelow">
              <h5>Minimum Order Quantity</h5>
              <h6 v-if="product">
                {{ product.order.min_quantity }} {{ product.order.qty_unit }}
              </h6>
            </div>
            <!-- <div class="col-lg-4 detailsDivBelow">
              <h5>Incoterms</h5>
              <h6>EXW - EX Works</h6>
            </div> -->
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
                Feedback
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
                      <td class="tbody">16-Jun-2022</td>
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
                <div class="col-lg-12" v-if="product">
                  <h1>Packaging & Minimum Order</h1>
                  <th class="headerTable">Individual Packages (1 unit)</th>
                  <table v-if="product.package">
                    <tr v-for="(xter, val, i) in product.package" :key="i">
                      <td class="thead">
                        {{ val.replace(/_/g, " ") }}
                      </td>
                      <td class="tbody">{{ product.package[val] }}</td>
                    </tr>
                  </table>
                  <th class="headerTable">Bulk Packages</th>
                  <table v-if="product.shipment">
                    <tr v-for="(xter, val, i) in product.shipment" :key="i">
                      <td class="thead">
                        {{ val.replace(/_/g, " ") }}
                      </td>
                      <td class="tbody">{{ product.shipment[val] }}</td>
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
                      <td class="thead certi">
                        <strong>Name: </strong>{{ cert.cert_name }}
                      </td>

                      <td class="thead certi">
                        <strong>No: </strong>{{ cert.cert_number }}
                      </td>
                      <td class="thead certi">
                        <strong>Issuing Body: </strong>{{ cert.issuingBody }}
                      </td>
                      <td class="thead certi">
                        <strong>Issue: </strong
                        >{{ dateFormat(cert.dateOfIssue) }}
                      </td>
                      <td class="thead certi">
                        <strong>ValidFrom: </strong
                        >{{ dateFormat(cert.validityPeriod.from) }}
                        <strong>ValidTo: </strong
                        >{{ dateFormat(cert.validityPeriod.to) }}
                      </td>
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
              <div class="row detailsMore detailsMoreFeedback">
                <div class="col-lg-12">
                  <h1>Previous Feedback on this product</h1>
                  <table v-if="product">
                    <thead class="theadFeedback">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Feedback Message</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody class="tbodyFeedback">
                      <tr v-for="(fdbck, i) in product.feedback" :key="i">
                        <td>{{ i + 1 }}</td>
                        <!-- <td class="thead">
                          {{
                            fdbck.read
                              ? "It has been edited"
                              : "It has not been edited"
                          }}
                        </td> -->
                        <td>{{ fdbck.comment }}</td>
                        <td>
                          <span
                            title="Edit Feedback"
                            class="action_btn mr_10"
                            @click="getFeedback(fdbck._id)"
                          >
                            <i class="far fa-edit"></i>
                          </span>
                          <span
                            @click="deleteFeedback(fdbck._id)"
                            title="Delete Feedback"
                            class="action_btn"
                          >
                            <i class="fas fa-trash"></i>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="row justify-content-center mt-5">
                <div class="col-lg-12 feedBackBox" v-if="!updateId">
                  <form @submit.prevent="AddFeedback">
                    <label for="feedback"
                      >Give Supplier feedback why this product can't be activated
                      and listed.</label
                    ><br />
                    <textarea
                      name="feedback"
                      id=""
                      cols="30"
                      rows="4"
                      v-model="comment"
                    ></textarea
                    ><br />
                    <input type="submit" value="Feedback" class="feedBackBtn" />
                  </form>
                </div>
                <div class="col-lg-12 feedBackBox" v-else>
                  <form @submit.prevent="updateFeedback">
                    <label for="feedback">Update feedback field.</label><br />
                    <textarea
                      name="feedback"
                      id=""
                      cols="30"
                      rows="4"
                      v-model="comment"
                    ></textarea
                    ><br />
                    <input type="submit" value="Feedback" class="feedBackBtn" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <mainFooter />
</template>
<style scoped src="@/assets/css/slider.css"></style>
<style scoped src="@/assets/css/styleFrontend.css"></style>
<style scoped src="@/assets/css/bootstrap.css"></style>

<script>
// import MainHeader from "../mainHeader.vue";
// import SearchHeader from "../searchHeader.vue";
// import { ref } from "vue";
// import MainFooter from "./mainFooter.vue";

// import QUOTE from "./../service/quote-service";
import MainFooter from "../mainFooter.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper";
import $ from "jquery";
require("jquery.easing");
import { countries } from "../../assets/countries";
import { month } from "@/assets/months";
import Swal from "sweetalert2";

export default {
  name: "Produce Mart",
  components: {
    Swiper,
    SwiperSlide,
    // mainHeader: MainHeader,
    // searchHeader: SearchHeader,
    mainFooter: MainFooter,
  },
  setup() {
    return {
      modules: [EffectFlip, Pagination, Navigation],
    };
  },
  mounted() {
    window.scrollTo(0, 0);

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
      updateId: null,
      comment: "",
      token: JSON.parse(localStorage.getItem("user")).token,
      id: this.$route.params.id,
      countries: countries,
      shipping: {
        air: false,
        sea: false,
        road: false,
      },
    };
  },
  methods: {
    dateFormat(date) {
      let d = new Date(date);
      return d.getDay() + "-" + month[d.getMonth()] + "-" + d.getFullYear();
    },
    async getProduct() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getProductById/" + this.id
      );
      const { data } = await res.json();

      this.product = data;
      console.log(this.product);
    },

    async AddFeedback() {
      const res = await fetch(
        "https://producemart.herokuapp.com/addFeedback/" + this.id,
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
            Authorization: this.token,
          },
          body: JSON.stringify({ comment: this.comment }),
        }
      );
      if (res.ok) {
        Swal.fire("Done!", "Feedback sent to supplier!", "success");
        this.getProduct();
      }
    },
    async getFeedback(id) {
      const res = await fetch(
        "https://producemart.herokuapp.com/getFeedbackById/" + id,
        {
          headers: {
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      this.comment = data.comment;
      this.updateId = data._id;
      console.log("feedback", data);
    },

    async updateFeedback() {
      console.log(this.updateId);
      console.log(this.comment);
      const res = await fetch(
        "https://producemart.herokuapp.com/updateFeedback/" + this.updateId,
        {
          method: "PUT",
          headers: {
            Authorization: this.token,
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({ comment: this.comment }),
        }
      );
      const { data } = await res.json();
      if (res.ok) {
        this.updateId = null;
        this.comment = "";
        Swal.fire("Updated!", "Feedback successfully Updated!", "success");
        this.getProduct();
      }
    },

    async deleteFeedback(id) {
      const res = await fetch(
        "https://producemart.herokuapp.com/deleteFeedback/" + id,
        {
          method: "DELETE",
          headers: {
            Authorization: this.token,
          },
        }
      );
      if (res.ok) {
        Swal.fire("Deleted!", "Feedback has been removed!", "success");
        this.getProduct();
      }
    },
  },
};
</script>

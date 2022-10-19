<template>
  <title>
    Produce Mart - The global online business to business market place for
    buying and selling wholesale agricultural produce and ingredients
  </title>
  <mainHeader />
  <!-- <searchHeader /> -->

  <!--Welcome Slider-->
  <section class="welcomeSlider">
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" :style="sliderImage1">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h1>No 1. Agriculture E-Commerce Platform</h1>
              <router-link to="/request-a-product"
                ><a>Request a product <i class="bi bi-arrow-right"></i></a
              ></router-link>
            </div>
          </div>
        </div>
        <div class="carousel-item" :style="sliderImage2">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h1>
                A Reliable and Convenient Marketplace for Agricultural Products
              </h1>
              <router-link to="/request-a-product"
                ><a>Request a product <i class="bi bi-arrow-right"></i></a
              ></router-link>
            </div>
          </div>
        </div>
        <div class="carousel-item" :style="sliderImage3">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h1>
                Making Sales and Purchase of Agricultural Products Digital
              </h1>
              <router-link to="/request-a-product"
                ><a>Request a product <i class="bi bi-arrow-right"></i></a
              ></router-link>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  <!--Welcome Slider Ends-->

  <!--Our Stats-->
  <section class="ourStats">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center justify-content-between allStatBox">
          <!--Products Sold-->
          <div class="statBox">
            <div class="iconArea">
              <img src="@/assets/img/icon-product.png" draggable="false" />
            </div>
            <div class="contentArea">
              <h5>Products Sold</h5>
              <p>1M<span>+</span></p>
            </div>
            <div class="clear"></div>
          </div>
          <!--Buyers-->
          <div class="statBox">
            <div class="iconArea">
              <img src="@/assets/img/icon-buyer.png" draggable="false" />
            </div>
            <div class="contentArea">
              <h5>Buyers</h5>
              <p>2100K<span>+</span></p>
            </div>
            <div class="clear"></div>
          </div>
          <!--Supplier-->
          <div class="statBox">
            <div class="iconArea">
              <img src="@/assets/img/icon-supplier.png" draggable="false" />
            </div>
            <div class="contentArea">
              <h5>Suppliers</h5>
              <p>1201K<span>+</span></p>
            </div>
            <div class="clear"></div>
          </div>
          <!--Shippers-->
          <div class="statBox">
            <div class="iconArea">
              <img src="@/assets/img/icon-shipper.png" draggable="false" />
            </div>
            <div class="contentArea">
              <h5>Shippers</h5>
              <p>129<span>+</span></p>
            </div>
            <div class="clear"></div>
          </div>
          <!--Inspectors-->
          <div class="statBox">
            <div class="iconArea">
              <img src="@/assets/img/icon-inspector.png" draggable="false" />
            </div>
            <div class="contentArea">
              <h5>Inspectors</h5>
              <p>190<span>+</span></p>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Our Stats Ends-->

  <!--About Section-->
  <section class="aboutSect">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="textArea">
            <div class="headText">
              <div class="iconHead">
                <img src="@/assets/img/main-logo.png" draggable="false" />
              </div>
              <div class="textHead">
                <p class="subhead">ProduceMart</p>
                <h2>Who is ProduceMart?</h2>
              </div>
              <div class="clear"></div>
            </div>
            <div class="bodyText">
              <p class="content">
                <a href="https://www.producemart.com/">Producemart.com</a> is an online B2B marketplace for wholesale agricultural produce and ingredients. Producemart makes it simpler than ever to list and source produce at a local, regional or international level. Acting as a platform for both suppliers and buyers, Producemart.com allows more efficient connections and assists with overcoming challenges such as language barriers, potential security concerns around engaging with new buyers and suppliers and cross-border purchases. 
              </p>
              <router-link to="/about" class="route-link"
                ><a class="learnMore"
                  >Learn More <i class="bi bi-arrow-right"></i></a
              ></router-link>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <div class="imgArea">
            <img src="@/assets/img/aboutImg.png" draggable="false" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--About Section Ends-->

  <!--How It Works-->
  <section class="howItWork">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 text-center mb-5">
          <div class="textHead">
            <p class="subhead">ProduceMart</p>
            <h2>How It Works</h2>
            <p class="belowHead">
              Find out how you can start supplying or buying on Producemart in 9 easy steps.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-3">
          <div class="circleBox boxLineRight boxLineBelow">
            <div class="number">1</div>
            <img src="@/assets/img/icon-howItWork1.png" draggable="false" />
            <h4>Supplier undergoes Audit process to become a verified supplier</h4>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <div class="circleBox boxLineRight boxLineBelow">
            <div class="number">2</div>
            <img src="@/assets/img/icon-howItWork2.png" draggable="false" />
            <h4>Supplier uploads product to ProduceMart</h4>
          </div>
        </div>
        
        <div class="col-md-3 text-center">
          <div class="circleBox boxLineBelow">
            <div class="number">3</div>
            <img src="@/assets/img/icon-howItWork3.png" draggable="false" />
            <h4>Buyer finds product and request a quote</h4>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-3 text-center">
          <div class="circleBox boxLineRight boxLineBelow">
            <div class="number">4</div>
            <img src="@/assets/img/icon-howItWork4.png" draggable="false" />
            <h4>Supplier & Shipper confirm product availability and respond with a quote</h4>
          </div>
        </div>
        
        <div class="col-md-3 text-center">
          <div class="circleBox boxLineRight boxLineBelow">
            <div class="number">5</div>
            <img src="@/assets/img/icon-howItWork5.png" draggable="false" />
            <h4>If a Buyer is happy to proceed, they pay into escrow to show supplier they are commited to the transaction</h4>
          </div>
        </div>
        
        <div class="col-md-3 text-center">
          <div class="circleBox">
            <div class="number">6</div>
            <img src="@/assets/img/icon-howItWork2.png" draggable="false" />
            <h4>All orders are inspected by our 3rd party inpector partners - SGS and if the quantity and quality of the product are verified, the order is released to the shipper for forwarding</h4>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-3 text-center">
          <div class="circleBox boxLineRight boxLineBelow">
            <div class="number">7</div>
            <img src="@/assets/img/icon-howItWork4.png" draggable="false" />
            <h4>Shipper confirms receipt of order and releases airway bill or Bill of laden</h4>
          </div>
        </div>
        
        <div class="col-md-3 text-center">
          <div class="circleBox boxLineRight boxLineBelow">
            <div class="number">8</div>
            <img src="@/assets/img/icon-howItWork5.png" draggable="false" />
            <h4>ProduceMart releases payment to supplier</h4>
          </div>
        </div>
        
        <div class="col-md-3 text-center">
          <div class="circleBox">
            <div class="number">9</div>
            <img src="@/assets/img/icon-howItWork1.png" draggable="false" />
            <h4>Order received by buyer</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--How It Works Ends-->

  <!--Our Products-->
  <section class="ourProduct">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 text-center mb-4">
          <div class="textHead">
            <p class="subhead">ProduceMart</p>
            <h2>Our Products</h2>
          </div>
        </div>
        <div class="col-md-12">
          <ul
            class="nav nav-pills mb-5 justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active tabs-button"
                id="pills-allProducts-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-allProducts"
                type="button"
                role="tab"
                aria-controls="pills-allProducts"
                aria-selected="true"
              >
                All Products
              </button>
            </li>
            <li class="nav-item" role="presentation" v-if="firstProductCategory">
              <button
                class="nav-link tabs-button"
                id="pills-oil-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-oil"
                type="button"
                role="tab"
                aria-controls="pills-oil"
                aria-selected="false"
              >
                Oil
              </button>
            </li>
            <li class="nav-item" role="presentation" v-if="secondProductCategory">
              <button
                class="nav-link tabs-button"
                id="pills-fruits-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-fruits"
                type="button"
                role="tab"
                aria-controls="pills-fruits"
                aria-selected="false"
              >
                Fruits
              </button>
            </li>
            <li class="nav-item" role="presentation" v-if="thirdProductCategory">
              <button
                class="nav-link tabs-button"
                id="pills-vegetable-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-vegetable"
                type="button"
                role="tab"
                aria-controls="pills-vegetable"
                aria-selected="false"
              >
                Vegetable
              </button>
            </li>
          </ul>
          <div class="tab-content mt-2" id="pills-tabContent">
            <!--all products-->
            <div
              class="tab-pane fade show active"
              id="pills-allProducts"
              role="tabpanel"
              aria-labelledby="pills-allProducts-tab"
            >
              <div class="container contProduct">
                <div class="row">
                  <!-- <div class="itemProduct">
                    <router-link to="/products/inner-product">
                      <div class="imgArea">
                        <img
                          src="@/assets/img/products/product1.png"
                          draggable="false"
                        />
                      </div>
                    </router-link>
                    <div class="detailArea">
                      <h5>Ripe Banana</h5>
                      <p>$10 per 100kg</p>
                      <router-link to="#" class="route-link"
                        ><a>View Product <i class="bi bi-arrow-right"></i></a
                      ></router-link>
                    </div>
                  </div> -->
                  <div
                    class="itemProduct"
                    v-for="(product, i) in products"
                    :key="i"
                  >
                    <router-link to="#">
                      <div class="imgArea">
                        <img :src="product.img_url[0]" draggable="false" />
                      </div>
                    </router-link>
                    <div class="detailArea">
                      <h5>{{ product.name }}</h5>
                      <p>
                        {{ product.package.price }} per
                        {{ product.package.weight }}{{ product.package.weight_unit }}
                      </p>
                      <router-link
                        :to="'/products/inner-product/' + product._id"
                        class="route-link"
                        ><a>View Product <i class="bi bi-arrow-right"></i></a
                      ></router-link>
                    </div>
                  </div>

                  <div class="col-lg-12 text-right viewMoreDiv">
                    <router-link to="/products" class="route-link"
                      ><a>View More</a></router-link
                    >
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="pills-oil"
              role="tabpanel"
              aria-labelledby="pills-oil-tab"
            >
              <div class="container contProduct" v-if="firstProductCategory.length > 0">
                <div class="row">
                  <div
                    class="itemProduct"
                    v-for="(product, i) in firstProductCategory"
                    :key="i"
                  >
                    <router-link to="#">
                      <div class="imgArea">
                        <img :src="product.img_url[0]" draggable="false" />
                      </div>
                    </router-link>
                    <div class="detailArea">
                      <h5>{{ product.name }}</h5>
                      <p>
                        {{ product.package.price }} per
                        {{ product.package.weight }}{{ product.package.weight_unit }}
                      </p>
                      <router-link
                        :to="'/products/inner-product/' + product._id"
                        class="route-link"
                        ><a>View Product <i class="bi bi-arrow-right"></i></a
                      ></router-link>
                    </div>
                  </div>

                  <div class="col-lg-12 text-right viewMoreDiv">
                    <router-link to="/products" class="route-link"
                      ><a>View More</a></router-link
                    >
                  </div>
                </div>
              </div>
              <div class="container contProd" v-else>
                <p style="text-align: center">There's no data yet in this category.</p>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="pills-fruits"
              role="tabpanel"
              aria-labelledby="pills-fruits-tab"
            >
              <div class="container contProduct" v-if="secondProductCategory.length > 0">
                <div class="row">
                  <div
                    class="itemProduct"
                    v-for="(product, i) in secondProductCategory"
                    :key="i"
                  >
                    <router-link to="#">
                      <div class="imgArea">
                        <img :src="product.img_url[0]" draggable="false" />
                      </div>
                    </router-link>
                    <div class="detailArea">
                      <h5>{{ product.name }}</h5>
                      <p>
                        {{ product.package.price }} per
                        {{ product.package.weight }}{{ product.package.weight_unit }}
                      </p>
                      <router-link
                        :to="'/products/inner-product/' + product._id"
                        class="route-link"
                        ><a>View Product <i class="bi bi-arrow-right"></i></a
                      ></router-link>
                    </div>
                  </div>

                  <div class="col-lg-12 text-right viewMoreDiv">
                    <router-link to="/products" class="route-link"
                      ><a>View More</a></router-link
                    >
                  </div>
                </div>
              </div>
              <div class="container contProd" v-else>
                <p style="text-align: center">There's no data yet in this category.</p>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="pills-vegetable"
              role="tabpanel"
              aria-labelledby="pills-vegetable-tab"
            >
              <div class="container contProduct" v-if="thirdProductCategory.length > 0">
                <div class="row">
                  <div
                    class="itemProduct"
                    v-for="(product, i) in thirdProductCategory"
                    :key="i"
                  >
                    <router-link to="#">
                      <div class="imgArea">
                        <img :src="product.img_url[0]" draggable="false" />
                      </div>
                    </router-link>
                    <div class="detailArea">
                      <h5>{{ product.name }}</h5>
                      <p>
                        {{ product.package.price }} per
                        {{ product.package.weight
                      }}{{ product.package.weight_unit }}
                      </p>
                      <router-link
                        :to="'/products/inner-product/' + product._id"
                        class="route-link"
                        ><a>View Product <i class="bi bi-arrow-right"></i></a
                      ></router-link>
                    </div>
                  </div>

                  <div class="col-lg-12 text-right viewMoreDiv">
                    <router-link to="/products" class="route-link"
                      ><a>View More</a></router-link
                    >
                  </div>
                </div>
              </div>
              <div class="container contProd" v-else>
                <p style="text-align: center">There's no data yet in this category.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Our Products Ends-->

  <!--Video Section-->
  <section class="videoSection">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center mb-4">
          <div class="textHead">
            <p class="subhead">Produce Mart</p>
            <h4 style="font-weight: 600;text-transform: uppercase; color: #000">buyer explainer video</h4>
          </div>
          <div class="text-center video">
            <iframe
              style="width: 80%"
              height="380"
              src="https://www.youtube.com/embed/SCpdXPkxUaY"
            >
            </iframe>
          </div>
        </div>
        <div class="col-md-6 text-center mb-4">
          <div class="textHead">
            <p class="subhead">Produce Mart</p>
            <h4 style="font-weight: 600;text-transform: uppercase; color: #000;">Supplier explainer video</h4>
          </div>
          <div class="text-center video">
            <iframe
              style="width: 80%"
              height="380"
              src="https://www.youtube.com/embed/tMlX2B_Un9w"
            >
            </iframe>
          </div>
        </div>
        <!-- <div class="col-lg-8 text-center">
          <video class="video" controls controlsList="nodownload">
            <source src="" type="video/mp4" />
          </video>
        </div>  -->

      </div>
    </div>
  </section>

  <!--Testimonial-->
  <section class="testimonial">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 text-center mb-4">
          <div class="textHead">
            <p class="subhead">Testimonials</p>
            <h2>Words From Our Clients</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div
            id="carouselExampleIndicators"
            class="carousel slide testimonialSlider"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row justify-content-center testimonialDiv">
                  <div class="col-md-1">
                    <div class="testimonialImg">
                      <img
                        src="@/assets/img/testimonial1.png"
                        draggable="false"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="testimonialBox">
                      <div class="mainShape">
                        <img
                          class="quote"
                          src="@/assets/img/quote.png"
                          draggable="false"
                        />
                        <p>
                          “Produce Mart plays a very important role in the
                          agricultural sector and to my business personally. Im
                          glad to be one of the beneficiaries of this. Purchase
                          and sales have been made very easy and smooth ”
                        </p>
                        <h5>Chukka Uzo</h5>
                        <span>Exporter</span>
                      </div>
                      <div class="shape1"></div>
                      <div class="shape2"></div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div class="carousel-item">
                <div class="row justify-content-center testimonialDiv">
                  <div class="col-md-1">
                    <div class="testimonialImg">
                      <img
                        src="@/assets/img/testimonial1.png"
                        draggable="false"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="testimonialBox">
                      <div class="mainShape">
                        <img
                          class="quote"
                          src="@/assets/img/quote.png"
                          draggable="false"
                        />
                        <p>
                          “Produce Mart plays a very important role in the
                          agricultural sector and to my business personally. Im
                          glad to be one of the beneficiaries of this. Purchase
                          and sales have been made very easy and smooth ”
                        </p>
                        <h5>Chukka Uzo</h5>
                        <span>Exporter</span>
                      </div>
                      <div class="shape1"></div>
                      <div class="shape2"></div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <i class="bi bi-arrow-left"></i>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <i class="bi bi-arrow-right"></i>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Testimonial Ends-->

  <!-- <subscribeNewsletter/> -->
  <subscribe-newsletter />
  <main-footer />
  <!-- <mainFooter /> -->
</template>
<style scoped src="@/assets/css/styleFrontend.css"></style>
<style scoped src="@/assets/css/bootstrap.css"></style>
<script>
import MainHeader from "./mainHeader.vue";
import SearchHeader from "./searchHeader.vue";
import SubscribeNewsletter from "./subscribeNewsletter.vue";
import MainFooter from "./mainFooter.vue";
import SearchInner from "./searchInner.vue";
import axios from 'axios'
export default {
  name: "Produce Mart",
  components: {
    mainHeader: MainHeader,
    searchHeader: SearchHeader,
    subscribeNewsletter: SubscribeNewsletter,
    mainFooter: MainFooter,
    searchInner: SearchInner,
  },
  data() {
    return {
      sliderImage1: {
        backgroundImage: `url(${require("@/assets/img/sliderImg1.jpg")})`,
      },
      sliderImage2: {
        backgroundImage: `url(${require("@/assets/img/sliderImg2.jpg")})`,
      },
      sliderImage3: {
        backgroundImage: `url(${require("@/assets/img/sliderImg3.jpg")})`,
      },
      products: [],
      firstProductCategory: [],
      secondProductCategory: [],
      thirdProductCategory: [],
      categories: [],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.getAllproducts();
  },
  methods: {
    async getAllproducts() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getAllProducts"
      );
      const { data } = await res.json();

      this.products = data.filter((val) => val.status == "active");
      this.products.map((prod) => {
        if (prod.category != this.categories[this.categories.length])
          this.categories.push(prod.category);
      });

      this.firstProductCategory = this.products.filter(
        (prd) => prd.category == 'oil'
      );
      //console.log(this.firstProductCategory);
      this.secondProductCategory = this.products.filter(
        (prd) => prd.category == 'fruit'
      );
      //console.log(this.secondProductCategory);
      this.thirdProductCategory = this.products.filter(
        (prd) => prd.category == 'vegetable'
      );
      //console.log(this.thirdProductCategory);
      //console.log(this.products);

      // this.products = data;
      // console.log(this.products);
    },
  },
};
</script>

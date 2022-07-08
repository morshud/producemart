<template>
  <title>
    Produce Mart - The global online business to business market place for
    buying and selling wholesale agricultural produce and ingredients
  </title>
  <header class="mainHeader">
    <nav class="navbar navbar-expand-lg navbar-light navbar-color">
      <div class="container-fluid">
        <div class="authDiv mobileAuthDiv">
          <router-link to="/login"><a class="authLogin">Login</a></router-link>
        </div>
        <a class="navbar-brand" href="/">
          <img src="@/assets/img/logo.png" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <i class="bi bi-text-right"></i>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <div class="offcanvasImg">
              <a class="navbar-brand" href="/">
                <img src="@/assets/img/logo.png" />
              </a>
            </div>
            <button
              type="button"
              class="btn-offcanvas-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="route-link"
                  ><a class="nav-link activeLink">Home</a></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/about" class="route-link"
                  ><a class="nav-link">About Us</a></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/products" class="route-link"
                  ><a class="nav-link">View Products</a></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/blog" class="route-link"
                  ><a class="nav-link">Blog</a></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/request-a-product" class="route-link"
                  ><a class="nav-link">Request a Product</a></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/faq" class="route-link"
                  ><a class="nav-link">FAQs</a></router-link
                >
              </li>
            </ul>
            <searchInner />
            <div class="authDiv desktopAuthDiv">
              <router-link to="/login"
                ><a class="authLogin">Login</a></router-link
              >
              <router-link to="buyer-registration"
                ><a class="authSignup">Sign Up</a></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <searchHeader />

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
              <h1>No 1. Agriculture E-Commerce Platform in Africa</h1>
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
                <img src="@/assets/img/abtIcon.png" draggable="false" />
              </div>
              <div class="textHead">
                <p class="subhead">Produce Mart</p>
                <h2>Who is ProduceMart?</h2>
              </div>
              <div class="clear"></div>
            </div>
            <div class="bodyText">
              <p class="content">
                <a href="https://www.producemart.com/">Producemart.com</a> is a
                brand new online B2B marketplace for wholesale agricultural
                produce and ingredients. It aims to make it simpler than ever to
                list and source produce at a local, regional or international
                level.
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
            <p class="subhead">Produce Mart</p>
            <h2>How It Works</h2>
            <p class="belowHead">
              Find out how you can start earning or buying in just six steps
              with an easy process.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-1"></div>
        <div class="col-md-3">
          <div class="circleBox boxLineRight boxLineBelow">
            <div class="number">1</div>
            <img src="@/assets/img/icon-howItWork1.png" draggable="false" />
            <h4>Supplier uploads product</h4>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <div class="circleBox boxLineRight boxLineBelow">
            <div class="number">2</div>
            <img src="@/assets/img/icon-howItWork2.png" draggable="false" />
            <h4>Buyer finds product and pays Produce Mart</h4>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <div class="circleBox boxLineBelow">
            <div class="number">3</div>
            <img src="@/assets/img/icon-howItWork3.png" draggable="false" />
            <h4>Inspector confirms the product</h4>
          </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-3 text-center">
          <div class="circleBox boxLineRight boxLineBelow">
            <div class="number">4</div>
            <img src="@/assets/img/icon-howItWork4.png" draggable="false" />
            <h4>Shipper is contacted to ship product</h4>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <div class="circleBox boxLineRight boxLineBelow">
            <div class="number">5</div>
            <img src="@/assets/img/icon-howItWork5.png" draggable="false" />
            <h4>Product is recieved by buyer & confirmed</h4>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <div class="circleBox">
            <div class="number">6</div>
            <img src="@/assets/img/icon-howItWork6.png" draggable="false" />
            <h4>Produce Mart pays the supplier</h4>
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
            <p class="subhead">Produce Mart</p>
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
            <li class="nav-item" role="presentation" v-if="categories[0]">
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
                {{ categories[0] }}
              </button>
            </li>
            <li class="nav-item" role="presentation" v-if="categories[1]">
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
                {{ categories[1] }}
              </button>
            </li>
            <li class="nav-item" role="presentation" v-if="categories[2]">
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
                {{ categories[2] }}
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
                  <div class="itemProduct">
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
                        ><a>View Products <i class="bi bi-arrow-right"></i></a
                      ></router-link>
                    </div>
                  </div>
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
                        {{ product.package.weight }}{{ product.package.unit }}
                      </p>
                      <router-link
                        :to="'/products/inner-product/' + product._id"
                        class="route-link"
                        ><a>View Products <i class="bi bi-arrow-right"></i></a
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
              id="pills-fruits"
              role="tabpanel"
              aria-labelledby="pills-fruits-tab"
            >
              <div class="container contProduct" v-if="firstProductCategory">
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
                        {{ product.package.weight }}{{ product.package.unit }}
                      </p>
                      <router-link
                        :to="'/products/inner-product/' + product._id"
                        class="route-link"
                        ><a>View Products <i class="bi bi-arrow-right"></i></a
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
                <p>No product in the category Fruit.</p>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="pills-vegetable"
              role="tabpanel"
              aria-labelledby="pills-vegetable-tab"
            >
              <div class="container contProduct" v-if="secondProductCategory">
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
                        {{ product.package.weight }}{{ product.package.unit }}
                      </p>
                      <router-link
                        :to="'/products/inner-product/' + product._id"
                        class="route-link"
                        ><a>View Products <i class="bi bi-arrow-right"></i></a
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
                <p>No product in the category Vegetable.</p>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="pills-oil"
              role="tabpanel"
              aria-labelledby="pills-oil-tab"
            >
              <div class="container contProduct" v-if="thirdProductCategory">
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
                        {{ product.package.weight }}{{ product.package.unit }}
                      </p>
                      <router-link
                        :to="'/products/inner-product/' + product._id"
                        class="route-link"
                        ><a>View Products <i class="bi bi-arrow-right"></i></a
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
                <p>No product in the category Vegetable.</p>
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
        <div class="col-md-10 text-center mb-4">
          <div class="textHead">
            <p class="subhead">Produce Mart</p>
            <h2>explainer video</h2>
          </div>
        </div>
        <!-- <div class="col-lg-8 text-center">
          <video class="video" controls controlsList="nodownload">
            <source src="@/assets/videos/video.mp4" type="video/mp4" />
          </video>
        </div> -->
        <!-- <div class="col-lg-8 text-center video">
          <iframe
            width="600"
            height="380"
            src="https://www.youtube.com/embed/dVsuCUrHtNI"
          >
          </iframe>
        </div> -->
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
                  <div class="col-md-1"></div>
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
                  <div class="col-md-1"></div>
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
      products: null,
      firstProductCategory: null,
      secondProductCategory: null,
      thirdProductCategory: null,
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
      console.log(this.categories[0]);

      this.firstProductCategory = this.products.filter(
        (prd) => prd.category == this.categories[0]
      );
      console.log(this.firstProductCategory);
      this.secondProductCategory = this.products.filter(
        (prd) => prd.category == this.categories[1]
      );
      this.thirdProductCategory = this.products.filter(
        (prd) => prd.category == this.categories[2]
      );
      console.log(this.products);

      // this.products = data;
      // console.log(this.products);
    },
  },
};
</script>

<template>
  <title>Products | Produce Mart</title>
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
                  ><a class="nav-link">Home</a></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/about" class="route-link"
                  ><a class="nav-link">About Us</a></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/products" class="route-link"
                  ><a class="nav-link activeLink">View Products</a></router-link
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

  <!--Page Breadcrumb-->
  <section class="pageProductBreadcrumb">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="textHead">
            <h2>All Products</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Page Breadcrumb Ends-->

  <main class="productMain">
    <div class="container searchForm">
      <div class="row">
        <div class="col-lg-12">
          <form @submit.prevent="">
            <div class="row justify-content-center">
              <div class="col-lg-7 mb-2">
                <input
                  type="text"
                  placeholder="Search here..."
                  class="inputSearch"
                  v-model="search"
                />
                <button type="submit" class="button">
                  <i class="bi bi-search"></i>
                </button>
              </div>
              <div class="col-lg-1"></div>
              <div class="col-lg-2 mb-2">
                <select class="input">
                  <option hidden>Category:</option>
                  <option>Oil</option>
                  <option>Fruits</option>
                  <option>Vegetable</option>
                  <option>Grains/Beans/Pulses</option>
                  <option>Nuts/Seeds</option>
                  <option>Coffee</option>
                  <option>Flower</option>
                  <option>Animal Feeds</option>
                  <option>Others</option>
                </select>
              </div>
              <div class="col-lg-2 mb-2">
                <select class="input">
                  <option hidden>Filter By:</option>
                  <option>Recently Added</option>
                  <option>Lowest Price</option>
                  <option>Highest Price</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <section class="ourProduct">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="container contProduct">
              <div class="row">
                <div
                  class="itemProduct"
                  v-for="(product, i) in filteredProducts"
                  :key="i"
                >
                  <router-link :to="'/products/inner-product/' + product._id">
                    <div class="imgArea">
                      <img :src="product.img_url[0]" draggable="false" />
                    </div>
                  </router-link>
                  <div class="detailArea">
                    <h5>{{ product.name }}</h5>
                    <p>${{ Math.floor(Math.random() * 25) }} per 100kg</p>
                    <router-link
                      :to="'/products/inner-product/' + product._id"
                      class="route-link"
                      ><a>View Products <i class="bi bi-arrow-right"></i></a
                    ></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <mainFooter />
</template>
<script>
import MainHeader from "./mainHeader.vue";
import SearchHeader from "./searchHeader.vue";
import MainFooter from "./mainFooter.vue";
import SearchInner from "./searchInner.vue";
export default {
  name: "Produce Mart",
  components: {
    mainHeader: MainHeader,
    searchHeader: SearchHeader,
    mainFooter: MainFooter,
    searchInner: SearchInner,
  },
  mounted() {
    window.scrollTo(0, 0);
    this.getAllproducts();
  },
  data() {
    return {
      products: null,
      search: "",
    };
  },
  methods: {
    async getAllproducts() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getAllProducts"
      );
      const { data } = await res.json();

      this.products = data.filter((product) => product.status != "incomplete");
      console.log(this.products);
    },
  },
  computed: {
    filteredProducts() {
      if (this.products) {
        return this.products.filter((product) =>
          product.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    },
  },
};
</script>

<template>
  <title>Search Result | Produce Mart</title>
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
            <div class="authDiv desktopAuthDiv">
              <div v-if="user.role == 'buyer'">
                  <div class="profile_info" style="margin-left: 50px;">
                    <img :src="user.img_url" alt="#" v-if="user.img_url" /> 
                    <img src="@/assets/img/client_img.png" alt="#" v-else />
                    Hi, <span style="text-transform: capitalize;">{{ user.firstname }}</span> <i class="bi bi-caret-down"></i>
                    <div class="profile_info_iner">
                      <div class="profile_author_name">
                        <p style="font-size: 15px;">Buyer Account</p>
                        <h5>{{ user.firstname }} {{ user.lastname[0] }}.</h5>
                        <p style="margin-top:0;font-size: 12px;font-weight: 500;">GreenMOuse</p>
                      </div>
                      <div class="profile_info_details">
                        
                        <router-link to="/buyer-dashboard/home">
                          <img src="@/assets/img/menu-icon/dashboard.png" style="border: 0;border-radius: 0;margin-right: 10px;"> Dashboard
                        </router-link>
                        <router-link to="/buyer-dashboard/profile" style="margin-left: -17px !important;"
                          ><i style="margin-right: 8px;font-size: 20px;" class="bi bi-person-circle"></i> My Profile</router-link
                        >
                        <a @click.prevent="logOut">
                          <img src="@/assets/img/menu-icon/logout.png" style="border: 0;border-radius: 0;margin-right: 10px; width: 15px;"  /> Log Out
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- <a style="cursor: pointer" @click="logOut" class="authSignup">Logout</a> -->
              </div>
              <div v-else-if="user.role == 'supplier'">
                  <div class="profile_info" style="margin-left: 50px;">
                    <img :src="user.img_url" alt="#" v-if="user.img_url" /> 
                    <img src="@/assets/img/client_img.png" alt="#" v-else />
                    Hi, <span style="text-transform: capitalize;">{{ user.firstname }}</span> <i class="bi bi-caret-down"></i>
                    <div class="profile_info_iner">
                      <div class="profile_author_name">
                        <p style="font-size: 15px;">Supplier Account</p>
                        <h5>{{ user.firstname }} {{ user.lastname[0] }}.</h5>
                        <p style="margin-top:0;font-size: 12px;font-weight: 500;">GreenMOuse</p>
                      </div>
                      <div class="profile_info_details">
                        
                        <router-link to="/supplier-dashboard/home">
                          <img src="@/assets/img/menu-icon/dashboard.png" style="border: 0;border-radius: 0;margin-right: 10px;"> Dashboard
                        </router-link>
                        <router-link to="/supplier-dashboard/profile" style="margin-left: -17px !important;"
                          ><i style="margin-right: 8px;font-size: 20px;" class="bi bi-person-circle"></i> My Profile</router-link
                        >
                        <a @click.prevent="logOut">
                          <img src="@/assets/img/menu-icon/logout.png" style="border: 0;border-radius: 0;margin-right: 10px; width: 15px;"  /> Log Out
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- <a style="cursor: pointer" @click="logOut" class="authSignup">Logout</a> -->
              </div>
              <div v-else>
                  <router-link to="/login"><a class="authLogin">Login</a></router-link>
                  <router-link to="buyer-registration"><a class="authSignup">Sign Up</a></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!--Page Breadcrumb-->
  <section class="pageProductBreadcrumb">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="textHead">
            <h2>Search Result: {{productSearch}}</h2>
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
             <!--  <div class="col-lg-7 mb-2">
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
              </div> -->
            </div>
          </form>
        </div>
      </div>
    </div>

    <section class="ourProduct">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 mb-4 mt-2 text-center signuas" v-if="searchQuery.length >= 1">
            <!-- <span class="spinner-border spinner-border-sm"></span> -->
            <div class="container contProduct">
              <div class="row">
                <div
                  class="itemProduct"
                  v-for="(product, i) in searchQuery"
                  :key="i"
                >
                  <router-link :to="'/products/inner-product/' + product._id">
                    <div class="imgArea">
                      <img :src="product.img_url[0]" draggable="false" />
                    </div>
                  </router-link>
                  <div class="detailArea">
                    <h5>{{ product.name }}</h5>
                    <p>
                      {{ product.package.price }} per {{ product.package.weight
                      }}{{ product.package.weight_unit }}
                    </p>
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
          <div class="col-md-12" v-else-if="searchQuery.length == 0">
            <div class="container contProduct">
              <div class="row">
                <h3>No result Found for {{dumpSearch(productSearch)}}</h3>
              </div>
            </div>
          </div>
          <div class="col-md-12" v-else>
            <span class="spinner-border spinner-border-sm"></span>
          </div>
        </div>
      </div>
    </section>
  </main>

  <mainFooter />
</template>
<style scoped src="@/assets/css/styleFrontend.css"></style>
<style scoped src="@/assets/css/bootstrap.css"></style>
<script>
import MainHeader from "./mainHeader.vue";
import SearchHeader from "./searchHeader.vue";
import MainFooter from "./mainFooter.vue";
import SearchInner from "./searchInner.vue";
import axios from 'axios'
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
      productSearch: this.$route.query.keyword || '',
      user: JSON.parse(localStorage.getItem("user")) || '',
    };
  },
  methods: {
    async getAllproducts() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getAllProducts"
      );
      const { data } = await res.json();

      this.products = data.filter((product) => product.status != "incomplete");
      //console.log(this.products);
    },
    dumpSearch(value){
      //console.log(value)
      axios.post(`https://producemart.herokuapp.com/searchDump`, {name: this.productSearch}).then(res => {
        //console.log(res);
      }).catch(err => {
        //console.log(err)
      })
      return value
    }
  },
  computed: {
    /*filteredProducts() {
      if (this.products) {
        return this.products.filter((product) =>
          product.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    },*/
    searchQuery(){
      if (this.productSearch != '') {
        if (this.products) {
          return this.products.filter((items) => {
            return this.productSearch
              .toLowerCase()
              .split(" ")
              .every((v) => items.name.toLowerCase().includes(v));
          });
        }
        else{
          return false
        }
      }
    }
  },
};
</script>

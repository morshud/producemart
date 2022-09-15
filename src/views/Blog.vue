<template>
  <title>Blog | Produce Mart</title>
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
                  ><a class="nav-link activeLink">Blog</a></router-link
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
                                <router-link to="buyer-registration"><a class="authSignup">Sign Up Free</a></router-link>
                            </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <searchHeader />

  <!--Page Breadcrumb-->
  <section class="pageBreadcrumb blogPageBread">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10 text-center">
          <div class="textHead">
            <p class="subhead">Produce Mart</p>
            <h2>Blogs</h2>
            <p class="belowHead">Read our latest news and updates</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Page Breadcrumb Ends-->

  <!--Blog Content-->
  <main class="blogContent">
    <section class="blogs">
      <div class="container">
        <div class="row" v-if="blogs">
          <div class="col-md-6 mb-1" v-for="(blog, i) in blogs" :key="i">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-lg-5">
                  <div class="imgHouse">
                    <img
                      :src="blog.img_url"
                      class="img-fluid rounded-start"
                      draggable="false"
                    />
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="card-body">
                    <h5 class="card-title">{{ blog.title }}</h5>
                    <p
                      class="card-text"
                      v-html="blog.description.slice(0, 150) + '...'"
                    ></p>
                    <router-link
                      :to="'/blog-content/' + blog.title"
                      class="linkRead"
                      >Read More <i class="bi bi-arrow-right-short"></i
                    ></router-link>
                    <p class="card-text">
                      <small class="text-muted">{{
                        blog.createdAt.slice(0, 10)
                      }}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 mb-4 mt-2 text-center signuas" v-else>
          <span class="spinner-border spinner-border-sm"></span>
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
import { month } from "../assets/months";
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
    this.getAllBlogs();
  },
  data() {
    return {
      blogs: null,
      user: JSON.parse(localStorage.getItem("user")) || '',
    }
  },
  methods: {
    async getAllBlogs() {
      this.blogs = null;
      const res = await fetch("https://producemart.herokuapp.com/getAllBlog");
      const data = await res.json();
      if (data.status == true) {
        this.blogs = data.data;
        this.blogs = this.blogs.map((val) => {
          let d = new Date(val.createdAt);
          val.createdAt =
            d.getDay() + "-" + month[d.getMonth()] + "-" + d.getFullYear();
          return val;
        });
      }

      // console.log(this.blogs);
    },
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>

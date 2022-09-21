<template>
  <title>Blog | Produce Mart</title>
  <mainHeader />


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

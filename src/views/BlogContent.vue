<template>
  <title>Blog Title Goes Here - Blog | Produce Mart</title>
  <mainHeader />
  <searchHeader />

  <section class="blog-details">
    <div class="container">
      <div class="row justify-content-center" v-if="blog">
        <div class="col-lg-11 details">
          <div class="blog-title text-center">
            <h1>{{ blog && blog.title }}</h1>
            <p>{{ blog && blog.createdAt.slice(0, 10) }} | By Produce Mart</p>
          </div>
          <div class="blog-image">
            <img :src="blog && blog.img_url" ondragstart="return false;" />
          </div>
          <div v-if="blog">
            <div class="note" v-html="blog.description"></div>
          </div>
          <div class="share-post text-center">
            <h4>Share Article</h4>
            <a
              href="https://web.facebook.com/greenmousetech"
              target="_blank"
              title="Share on Facebook"
              ><i class="fab fa-facebook"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/greenmouse/"
              target="_blank"
              title="Share on LinkedIn"
              ><i class="fab fa-linkedin"></i
            ></a>
            <a
              href="https://www.instagram.com/greenmouseonline/"
              target="_blank"
              title="Share on Instagram"
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
          <div class="goback">
            <router-link to="/blog" class="routers"
              ><a
                ><i class="bi bi-arrow-left-circle-fill"></i> Back to blog
                page</a
              ></router-link
            >
          </div>
        </div>
      </div>
      <div class="col-lg-12 mb-4 mt-2 text-center signuas" v-else>
        <span class="spinner-border spinner-border-sm"></span>
      </div>
    </div>
  </section>

  <mainFooter />
</template>
<script>
import MainHeader from "./mainHeader.vue";
import SearchHeader from "./searchHeader.vue";
import MainFooter from "./mainFooter.vue";
export default {
  name: "Produce Mart",
  components: {
    mainHeader: MainHeader,
    searchHeader: SearchHeader,
    mainFooter: MainFooter,
  },
  mounted() {
    window.scrollTo(0, 0);
    this.getBlog();
    console.log(this.blog);
  },
  data() {
    return {
      blog: null,
    };
  },
  methods: {
    async getBlog() {
      const title = this.$route.params.title;
      (this.blog = null), console.log(title);
      const res = await fetch(
        "https://producemart.herokuapp.com/getBlogByTitle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: title }),
        }
      );
      const data = await res.json();
      //   console.log(data.data[0]);
      this.blog = data.data[0];
      //   console.log(this.blog.description);
    },
  },
};
</script>

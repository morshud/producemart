<template>
  <title>Products | Produce Mart</title>

  <mainHeader />

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
                <select class="input" v-model="productCategory">
                  <option value="">Category:</option>
                  <option value="vegetable">Vegetable</option>
                  <option value="fruit">Fruits</option>
                  <option value="oil">Oil</option>
                  <option value="grain">Grain</option>
                  <option value="nut">Nut</option>
                  <option value="coffee">Coffee</option>
                  <option value="flower">Flower</option>
                  <option value="feed">Feed</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div class="col-lg-2 mb-2">
                <select class="input" v-model="supplyFrequency">
                  <option value="">Filter By:</option>
                  <option value="ascending">Oldest</option>
                  <option value="descending">Newest</option>
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
          <div class="col-md-12" v-if="filteredProducts">
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
                    <p>
                      {{ product.package.price }} per {{ product.package.weight
                      }}{{ product.package.weight_unit }}
                    </p>
                    <router-link
                      :to="'/products/inner-product/' + product._id"
                      class="route-link"
                      ><a>View Product<i class="bi bi-arrow-right"></i></a
                    ></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 mb-4 mt-2 text-center signuas" v-else>
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
      products: [],
      search: "",
      supplyFrequency: "",
      user: JSON.parse(localStorage.getItem("user")) || '',
      productCategory: '',
    };
  },
  methods: {
    async getAllproducts() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getAllProducts"
      );
      const { data } = await res.json();

      this.products = data.filter((val) => val.status == "active");;
      //console.log(this.products);
    },
  },
  computed: {
    filteredProducts() {
      if (this.products.length > 0) {
        if (this.search != '') {
          return this.products.filter((product) =>
            product.name.toLowerCase().includes(this.search.toLowerCase())
          );
        }
        else if (this.search != '' && this.productCategory != '') {
          return this.products.filter((product) =>
            product.name.toLowerCase().includes(this.search.toLowerCase())
          ) && this.products.filter(item => this.productCategory.includes(item.category));
        }
        else if (this.productCategory != '') {
          return this.products.filter(item => this.productCategory.includes(item.category));
        }
        else if (this.supplyFrequency != '') {
          if (this.supplyFrequency == 'ascending') {
            return this.products.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
          }
          if (this.supplyFrequency == 'descending') {
            return this.products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          } 
        }
        
        else {
          return this.products
        }
        
      }
      
    },
  },
};
</script>

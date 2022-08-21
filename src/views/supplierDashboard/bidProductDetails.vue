<template>
  <div>
  <title>Bid Product Details - Supplier Admin Dashboard | Produce Mart</title>
  <dash-sidebar />

  <section class="main_content dashboard_part large_header_bg">
    <dash-navbar />
    <!--Main Content-->
    <div class="main_content_iner">
      <div class="container-fluid p-0">
        <div class="row justify-content-center">
          <!--Breadcrumb-->
          <div class="col-12">
            <div class="dashboard_header mb_50">
              <div class="row">
                <div class="col-lg-8">
                  <div class="dashboard_header_title">
                    <h3>Bid Product Details</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Bid Product Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 QA_section mb-4">
            <div class="white_card card_height_100 mb_30 pt-4">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="white_box_tittle list_header">
                    <h4>Bid Product Details</h4>
                  </div>
                  <div class="row mb-4">
                    <div class="col-sm-4">
                      <h2 class="span">Product Name :  {{request.name}}
                      </h2>
                      
                      <h2 class="span">Destination Country :  {{request.country}}</h2>
                      <h2 class="span">Supply Frequency :  {{request.supplyFrequency}}</h2>
                      <div class="" v-if="request.status == 'pending' && item.status == 'pending'">
                        <h2 class="span">Status: <span class="status_btn" style="background: orange;">Waiting</span></h2>
                      </div>
                      <div class="" v-if="request.status == 'Awaiting Url' && item.status == 'Awaiting Url'">
                        <h2 class="span">Status: <span class="status_btn" style="background: orange;">Awaiting Url</span></h2>
                      </div>
                      <div class="" v-if="request.status == 'pending' && item.status == 'Awaiting Url'">
                        <h2 class="span">Status: <span class="status_btn" style="background: red;">Not Selected</span></h2>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div >
                        <h2 class="span">Product Price :  ${{request.price}}</h2>
                        <!-- <div>Nigeria</div>
                                                <div>Street Address, Lagos.</div> -->
                        <h2 class="span">
                          Weight :  {{request.weight}}
                        </h2>
                        <h2 class="span">Quantity :  {{request.quantity}}</h2>
                        
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div>
                        <h2 class="span">Category:  {{request.category}}</h2>
                        <!-- <div>Nigeria</div>
                                                <div>Street Address, Lagos.</div> -->
                        <h2 class="span">
                          Crop Year (Start) :  {{getDate(request.cropYear.start_date)}}
                        </h2>
                        <h2 class="span">
                          Crop Year (End) :  {{getDate(request.cropYear.end_date)}}
                        </h2>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <h2 class="span">
                        Product Description: <span v-if="request.readMore == 'false'">{{request.description.substring(0, 100) }}</span> <a class="" v-if="request.readMore == 'false' && request.description.length >= 100" @click="request.readMore = 'true'" type="button" style="color: #73D97C;text-decoration: none;text-transform: full-size-kana;font-weight: 500;">Read more...</a>
                        <span v-if="request.readMore == 'true'">{{request.description}} </span> <a class="" v-if="request.readMore == 'true'" @click="request.readMore = 'false'" type="button" style="color: #73D97C;text-decoration: none;text-transform: full-size-kana;font-weight: 500;">Read less...</a>
                      </h2>
                    </div>
                    <div class="row mt-4">
                      <div class="text-center" v-if="request.status == 'pending' && item.status == 'pending'">
                        <button class="btn btn-mart" type="button">Awaiting</button>
                      </div>
                      <div class="text-center" v-if="request.status == 'Awaiting Url' && item.status == 'Awaiting Url'">
                        <button class="btn btn-mart" @click="uploadProduct(request._id)" type="button">Upload Product</button>
                      </div>
                      <div class="text-center" v-if="request.status == 'pending' && item.status == 'Awaiting Url'">
                        <button class="btn btn-mart" @click="approveBuyer" type="button">Not Selected</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <dash-footer />
  </section>
  </div>

</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<style scoped src="@/assets/css/styleSupport.css"></style>
<script>
import DashSidebar from "./dash-sidebar.vue";
import DashNavbar from "./dash-navbar.vue";
import DashFooter from "./dash-footer.vue";
import axios from 'axios'
import Swal from 'sweetalert2';
import QUOTE from './../../service/quote-service'
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      bidId: this.$route.params.id,
      item: '',
      request: ''
    };
  },
  created(){
    this.getSingleBid()
  },
  methods: {
    getDate(value){
      return new Date(value).toLocaleDateString()
    },
    getSingleBid(){
      QUOTE.GetSingleBid(this.bidId).then((res) => {
        //console.log(res)
        this.item = res.data.Bid
        let obj = res.data.Bid.requestId
        //console.log(obj)
        const data = { ...obj, readMore: 'false' }
        //console.log(data)
        this.request = data
      })
    },
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap');

h2.span{
  font-family: 'Montserrat', sans-serif;
  line-height: 25px;
  font-size: 14px !important;
  font-weight: 500 !important;
}
.btn-mart{
  background: #000;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-size: 12px !important;
  padding: 10px 35px;
}
</style> 
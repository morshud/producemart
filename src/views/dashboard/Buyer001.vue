<template>
    <title>Buyer Report - Super Admin Dashboard | Produce Mart</title>
    <dash-sidebar/>

    <section class="main_content dashboard_part large_header_bg">
        <dash-navbar/>
        <!--Main Content-->
        <div class="main_content_iner ">
            <div class="container-fluid p-0">
                <div class="row justify-content-center">
                    <!--Breadcrumb-->
                    <div class="col-12">
                        <div class="dashboard_header mb_50">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="dashboard_header_title">
                                    <h3>{{ buyer.firstname }} {{ buyer.lastname }}</h3>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashboard_breadcam text-right">
                                        <p>
                                            <router-link to="/dashboard/home"><a>Dashboard</a></router-link> <i class="fas fa-caret-right"></i> <router-link to="/dashboard/buyer-reports"><a>Buyer Report</a></router-link> <i class="fas fa-caret-right"></i> {{buyer.username}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Main-->
                    <div class="col-md-10 white_box myProfile">
                        <div class="row">
                            <div class="card custom-card">
                                <div class="card-profile">
                                    <img v-if="buyer.img_url == ''" class="rounded-circle" src="@/assets/img/dashboard-img/default-dp.jpg">
                                    <img else class="rounded-circle" :src="buyer.img_url">
                                </div>
                                <div class="profile-details">
                                    <h4>{{ buyer.firstname }} {{ buyer.lastname }} ({{buyer.username}})</h4>
                                    <h6><span>Type:</span> Buyer</h6>
                                    <h6><span>Email:</span> {{buyer.email}}</h6>
                                    <h6><span>Phone No:</span> {{buyer.phone_no}}</h6>
                                    <h6><span>Company Name:</span> {{buyer.company_name}}</h6>
                                    <h6 v-if="buyer.address.length > 0"><span>Address:</span> {{buyer.address[0].street}}, {{buyer.address[0].city}}, {{buyer.address[0].state}}, {{buyer.address[0].country}}</h6>
                                    <h6 v-if="buyer.status == 'active'"><span>Status:</span> Verified <i class="bi bi-check-circle"></i></h6>
                                    <h6 v-else-if="buyer.status == 'incomplete'"><span>Status:</span> Disabled <i class="bi bi-cancel-circle"></i></h6>
                                </div>
                                <div class="card-footer buyer-footer row mt-3">
                                    <div class="col-4 col-sm-4">
                                        <h6>Quotes</h6>
                                        <h3>{{quoteCount}}</h3>
                                    </div>
                                    <div class="col-4 col-sm-4">
                                        <h6>Orders</h6>
                                        <h3>{{orderCount}}</h3>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-12 mt-4">
                                <router-link class="route-link" to="/dashboard/buyer-reports">Back to Buyer Reports</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <dash-footer/>
    </section>
</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<script>
    import DashSidebar from './dash-sidebar.vue'
    import DashNavbar from './dash-navbar.vue'
    import DashFooter from './dash-footer.vue'
    import QUOTE from "../../service/quote-service"
    export default {
      name: "Produce Mart",
      components:{
      'dash-sidebar': DashSidebar,
      'dash-navbar': DashNavbar,
      'dash-footer': DashFooter,
      },
      data() {
        return {
          buyer: '',
          token: JSON.parse(localStorage.getItem("user")).token,
          buyerId: this.$route.params.id,
          quoteCount: 0,
          orderCount: 0,
        };
      },
      created() {
        this.fetchBuyer()
        this.getQuotes()
        this.getOrders()
      },
      methods: {
        async fetchBuyer() {
          const res = await fetch(
            `https://producemart.herokuapp.com/user/${this.buyerId}`,
            {
              method: "GET",
              headers: {
                Authorization: this.token,
              },
            }
          );
          const { data } = await res.json();
          //console.log(data)
          this.buyer = data
          //this.audits = data.audit
          //console.log(this.audits)
          /*const pending = data.filter(
            (user) => user.status == "pending"
          );*/
        },
        getQuotes() {
          QUOTE.getQuotes().then((res) => {
            const quoteCount = res.data.data.filter((item) => item.userId == this.buyerId);
            this.quoteCount = quoteCount.length
          });
        },
        async getOrders() {
        //this.inspectors = null;
        //console.log(this.user.token)
          const res = await fetch(
            "https://producemart.herokuapp.com/getAllOrders",
            {
              method: "GET",
              headers: {
                "Content-Type": "applicaiton/json",
                Authorization: this.token,
              },
            }
          );
          const { data } = await res.json();
          const orderCount = data.filter((item) => item.buyer == this.buyerId)
          this.orderCount = orderCount.length
        },
      },
      mounted(){
        window.scrollTo(0,0)

        let externalScriptCustom = document.createElement('script')
        externalScriptCustom.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js')
        document.head.appendChild(externalScriptCustom)
      }
    }
</script>
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
                    <h3>Request Product Details</h3>
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
                    <h4>Request Product Details</h4>
                  </div>
                  <div class="row mb-4">
                    <div class="col-sm-4">
                      <h2 class="span">Product Name :  {{item.name}}
                      </h2>
                      
                      <h2 class="span">Destination Country :  {{item.country}}</h2>
                      <h2 class="span">Supply Frequency :  {{item.supplyFrequency}}</h2>
                      <h2 class="span">Variety :  {{item.variety}}</h2>
                      <h2 class="span">Characteristics: 
                        <a class="" v-if="item.readChar == 'false'" @click="item.readChar = 'true'" type="button" style="color: #73D97C;text-decoration: none;text-transform: full-size-kana;font-weight: 500;">View...</a>
                        <span v-if="item.readChar == 'true'">{{item.characteristics}} </span> <a class="" v-if="item.readChar == 'true'" @click="item.readChar = 'false'" type="button" style="color: #73D97C;text-decoration: none;text-transform: full-size-kana;font-weight: 500;">Close...</a>
                      </h2>
                    </div>
                    <div class="col-sm-4">
                      <div class="">
                        <h2 class="span">Product Price :  ${{item.price}}</h2>
                        <!-- <div>Nigeria</div>
                                                <div>Street Address, Lagos.</div> -->
                        <h2 class="span">
                          Weight :  {{item.weight}}
                        </h2>
                        <h2 class="span">Quantity :  {{item.quantity}}</h2>

                        <div class="" v-if="item.status == 'pending'">
                          <h2 class="span">Status: <span class="status_btn" style="background: orange;">Waiting</span></h2>
                        </div>
                        <div class="" v-if="item.status == 'Awaiting Url'">
                          <h2 class="span">Status: <span class="status_btn" style="background: orange;">Awaiting Url</span></h2>
                        </div>
                        <div class="" v-if="item.status == 'uploaded'">
                          <h2 class="span">Status: <span class="status_btn" style="background: green;">Uploaded</span></h2>
                        </div>
                        
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="">
                        <h2 class="span">Location:  {{item.location}}</h2>
                        <h2 class="span">Category:  {{item.category}}</h2>
                        <!-- <div>Nigeria</div>
                                                <div>Street Address, Lagos.</div> -->
                        <h2 class="span">
                          Crop Year (Start) :  {{getDate(item.cropYear.start_date)}}
                        </h2>
                        <h2 class="span">
                          Crop Year (End) :  {{getDate(item.cropYear.end_date)}}
                        </h2>
                        <h2 class="span">Aditional Info: 
                          <a class="" v-if="item.readAddInfo == 'false'" @click="item.readAddInfo = 'true'" type="button" style="color: #73D97C;text-decoration: none;text-transform: full-size-kana;font-weight: 500;">View...</a>
                          <span v-if="item.readAddInfo == 'true'">{{item.additional_info}} </span> <a class="" v-if="item.readAddInfo == 'true'" @click="item.readAddInfo = 'false'" type="button" style="color: #73D97C;text-decoration: none;text-transform: full-size-kana;font-weight: 500;">Close...</a>
                        </h2>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <h2 class="span">
                        Product Description: <span v-if="item.readMore == 'false'">{{item.description.substring(0, 100) }}</span> <a class="" v-if="item.readMore == 'false' && item.description.length >= 100" @click="item.readMore = 'true'" type="button" style="color: #73D97C;text-decoration: none;text-transform: full-size-kana;font-weight: 500;">Read more...</a>
                        <span v-if="item.readMore == 'true'">{{item.description}} </span> <a class="" v-if="item.readMore == 'true'" @click="item.readMore = 'false'" type="button" style="color: #73D97C;text-decoration: none;text-transform: full-size-kana;font-weight: 500;">Read less...</a>
                      </h2>
                    </div>
                    <div class="row mt-4">
                      <div class="text-center" v-if="item.status == 'pending'">
                        <button class="btn btn-mart" type="button">Awaiting</button>
                      </div>
                      <div class="text-center" v-if="item.status == 'Awaiting Url'">
                        <button class="btn btn-mart" @click="$router.push('/request-a-product')" type="button">Request More Product</button>
                      </div>
                      <div class="text-center" v-if="item.status == 'uploaded'">
                        <button class="btn btn-mart" target="_blank" @click="$router.push('/products/inner-product/'+productId)" type="button">View Product</button>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
          <!--Main-->
          <div class="col-md-12">
            <div class="white_card card_height_100 mb_30 pt-4">
              <div class="white_card_body">
                <div class="QA_section">
                  <div class="white_box_tittle list_header">
                    <h4>Bidding Supplier List(s)</h4>
                  </div>
                  <!-- <div class="fileDownloadOption mb-3">
                    <button type="button" title="Download as CSV file">
                      CSV
                    </button>
                    <button type="button" title="Download as PDF file">
                      PDF
                    </button>
                  </div> -->
                  <div class="QA_table mb_30">
                    <table class="table green_mouse">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Supplier Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Status</th>

                          <th scope="col">Joined <br> Date</th>
                          <th scope="col">Total <br> Order</th>

                          <th scope="col">Total <br> Product</th>

                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-for="(item, id) in bidderList" :key="item._id">
                        <tr>
                          <td>#</td>
                          <td>{{item.userId.firstname}} {{item.userId.lastname}}</td>
                          <td>
                            {{item.userId.email}}
                          </td>
                          <td>
                            <div v-if="item.userId.status == 'incomplete'">
                              <span class="status_btn" style="background: #000;">Inactive</span>
                            </div>
                            <div v-if="item.userId.status == 'active'">
                              <span class="status_btn">{{ item.userId.status }}</span>
                            </div>
                            <div v-if="item.userId.status == 'disabled'">
                              <span class="status_btn" style="background: #000;">{{ item.userId.status }} </span>
                            </div>
                          </td>
                          <td>{{getDate(item.userId.createdAt)}}</td>
                          <td>
                            <a type="button" @click="checkTotalOrder(item.userId, item.userId._id)" style="font-size: 13px;color: #000000;font-weight: 600;">Check</a>
                          </td>

                          <td>
                            <a type="button" @click="checkTotalProduct(item.userId, item.userId._id)" style="font-size: 13px;color: #000000;font-weight: 600;">Check</a>
                          </td>

                          <td>
                            <div class="action_btns d-flex">
                              <div v-if="item.status === 'pending'">
                                <a type="button" @click="acceptBid(item.status, item.userId)" style="font-size: 13px;color: #009f00;font-weight: 600;">Accept Bid</a>
                              </div>
                              <div v-if="item.status === 'Awaiting Url'">
                                <span style="font-size: 13px;color: rgb(240, 135, 0);font-weight: 600;">{{ item.status }}</span>
                              </div>
                              <div v-if="item.status === 'uploaded'">
                                <span style="font-size: 13px;color: rgb(1, 100, 44);font-weight: 600;">Uploaded</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  </section>
  <dash-footer />
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
import QUOTE from './../../service/quote-service'
import axios from 'axios'
import Swal from 'sweetalert2';
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  mounted() {
    window.scrollTo(0, 0);
    //this.fetchSupplier();
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      requestId: this.$route.params.id,
      item: {
        cropYear: '',
      },
      bidderList: {
        userId: [],
      },
      totalProduct: '',
      productId: '',
    }
  },
  created(){
    this.getSingleRequest()
    this.getBiddingList()
  },
  methods: {
    getDate(value){
      return new Date(value).toLocaleDateString()
    },
    acceptBid(status, user){
      if (this.item.status == 'pending') {
        Swal.fire({
              title: `Are you sure you want to accept ${user.firstname} ${user.lastname} bid?`,
              showDenyButton: true,
              //showCancelButton: true,
              confirmButtonText: 'Accept Bid',
              confirmButtonColor: '#000000',
              denyButtonText: `No, I don't`,
              denyButtonColor: '#ffffff',
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                const sendData = {
                  requestId: this.requestId,
                  userId: user._id
                }
                QUOTE.AcceptBid(this.requestId, sendData).then(() => {
                  this.getSingleRequest()
                  this.getBiddingList()
                  Swal.fire(`Congratulation, you have accepted ${user.firstname} ${user.lastname} bid, await product!`, '', 'success')
                })
                
              } else if (result.isDenied) {
                Swal.fire('Sorry your accept a bid!', '', 'error')
              }
            })
      }
      if (this.item.status == 'Awaiting Url'){
        Swal.fire('oOps! You have already accepted one supplier bid!', '', 'warning')
      }
      if (this.item.status == 'uploaded'){
        Swal.fire('oOps! You can\'t accept bid again, product already uploaded by your selected supplier!', '', 'warning')
      }
    },
    getSingleRequest(){
      //console.log(this.requestId)
      QUOTE.GetSingleRequest(this.requestId)
      .then((res) => {
        //console.log(res.data.data)
        if (res.data.data.productId != undefined) {
          this.productId = res.data.data.productId._id
        } else {
          this.productId = ''
        }
        
        let obj = res.data.data
        const data = { ...obj, readMore: 'false', readChar: 'false', readAddInfo: 'false' }
        this.item = data
        //console.log(data)
      })
    },
    checkTotalProduct(arr, id){
      axios.get(`https://producemart.herokuapp.com/supplierDashboard/${id}?length=5`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: this.user.token,
          },
      })
      .then(res => {
        //console.log(res.data)
        let timerInterval
          Swal.fire({
            title: `${arr.firstname} ${arr.lastname} Total Product`,
            html: `(${res.data.num_of_product})`,
            timer: 5000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              //const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                //b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              //console.log('I was closed by the timer')
            }
          })
      })
    },
    checkTotalOrder(arr, id){
      axios.get(`https://producemart.herokuapp.com/supplierDashboard/${id}?length=5`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: this.user.token,
          },
      })
      .then(res => {
        //console.log(res.data)
        let timerInterval
          Swal.fire({
            title: `${arr.firstname} ${arr.lastname} Total Order`,
            html: `(${res.data.num_of_order})`,
            timer: 5000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              //const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                //b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              //console.log('I was closed by the timer')
            }
          })
      })
    },
    getBiddingList(){
      QUOTE.GetRequestBidderList(this.requestId)
      .then(res => {
        //console.log(res.data)
        this.bidderList = res.data.data
      })
    }
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
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

 .swal2-popup {
    font-size: 16px !important;
    font-family: 'Montserrat', sans-serif !important;
    width: 555px !important;
  }

  .swal2-title{
    font-size: 16px !important;
    margin-top: 20px !important;
  }

  .swal2-deny{
    background: #FFFFFF !important;
    border: 1px solid #000000 !important;
    border-radius: 15px !important;
    color: #000000 !important;
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 600 !important;
    font-size: 14px !important;
  }

  .swal2-confirm{
    background: #000 !important;
    border: 0 !important;
    outline: none !important;
    border-radius: 15px !important;
    color: #ffffff !important;
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 600 !important;
    font-size: 14px !important;
  }

  .swal2-styled.swal2-default-outline:focus{
    box-shadow: none !important;
  }
  .swal2-html-container{
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 700 !important;
    font-size: 24px !important;
    margin-top: 16px !important
  }


</style> 
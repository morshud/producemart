<template>
<div>
  <title>Transactions - Super Admin Dashboard | Produce Mart</title>
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
                    <h3>Transaction History</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> Transaction History
                    </p>
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
                    <h4>Latest Transaction(s)</h4>
                    <div class="box_right d-flex lms_block">
                      <div class="serach_field_2">
                        <div class="search_inner">
                          <form Active="#">
                            <div class="search_field">
                              <input type="text" placeholder="Search here..." />
                            </div>
                            <button type="submit">
                              <i class="bi bi-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
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
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">S/N</th>
                          <th scope="col">User</th>
                          <!-- <th scope="col">Trans ID</th>
                          <th scope="col">Ref No</th> -->
                          <th scope="col">Status</th>
                          <th scope="col">Gateway Type</th>
                          <th scope="col">Trans Type</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, i) in sortedCats" :key="i">
                          
                          <td>#</td>
                          <td>
                            <div v-if="item.user != null">
                              <span>
                                {{item.user.firstname}} {{item.user.lastname}}
                              </span>
                            </div>
                          </td>
                          <td>
                            <div v-if="item.status == 'awaiting_funds'">
                              <span style="background: #ff8d14" class="status_btn">
                                Awaiting Fund
                              </span>
                            </div>
                            <div v-else-if="item.status == 'Success'">
                              <span class="status_btn">
                                Success
                              </span>
                            </div>
                            <div v-else>
                              <span style="background: #000;" class="status_btn">
                                {{item.status}}
                              </span>
                            </div>
                          </td>
                          <td>
                            <div v-if="item.gateway == 'trust_share'">
                              <span >
                                Trust Share
                              </span>
                            </div>
                            <div v-if="item.gateway == 'paypal'">
                              <span >
                                Paypal
                              </span>
                            </div>
                          </td>
                          <td>
                            <div v-if="item.type == 'release funds'">
                              <span >
                                Release Fund
                              </span>
                            </div>
                            <div v-else-if="item.type == 'escrow'">
                              <span >
                                Escrow
                              </span>
                            </div>
                            <div v-else-if="item.type == 'adminfee'">
                              <span >
                                Admin Fee
                              </span>
                            </div>
                            <div v-else>
                              <span >
                                {{item.type}}
                              </span>
                            </div>
                          </td>
                          <td>${{ item.amount }}</td>
                          <td>
                            <div class="action_btns d-flex justify-content-center">
                              <router-link :to="'/dashboard/transactionDetails/'+item._id" title="View Supplier" class="action_btn mr_10">
                                <i class="far fa-eye"></i>
                              </router-link>
                              <!-- <a href="#" title="Delete" class="action_btn">
                                <i class="fas fa-trash"></i>
                              </a> -->
                            </div>
                          </td>
                          <!-- <td>
                            <div class="action_btns d-flex">
                              <router-link to="/dashboard/edit-supplier-content"
                                ><a title="Edit" class="action_btn mr_10">
                                  <i class="far fa-edit"></i> </a
                              ></router-link>
                              <a href="#" title="Delete" class="action_btn">
                                <i class="fas fa-trash"></i>
                              </a>
                            </div>
                          </td> -->
                        </tr>
                      </tbody>
                    </table>
                  <p style="float: right;margin-top: 20px;"> 
                    <button @click="prevPage" style="background: #97f29f;border: 0;padding: 5px 30px; margin-right: 25px;">Previous</button> 
                    <button @click="nextPage" style="background: #97f29f;border: 0;padding: 5px 41px;">Next</button>
                  </p>
                    <!-- <nav aria-label="Page navigation example" class="m-2">
                      <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                          <a
                            class="page-link"
                            href="#"
                            tabindex="-1"
                            aria-disabled="true"
                            >Previous</a
                          >
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">Next</a>
                        </li>
                      </ul>
                    </nav> -->
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
<script>
import DashSidebar from "./dash-sidebar.vue";
import DashNavbar from "./dash-navbar.vue";
import DashFooter from "./dash-footer.vue";
import axios from 'axios'
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  mounted() {
    window.scrollTo(0, 0);

    
    this.fetchTransactions();
  },

  data() {
    return {
      transactions: [],
      token: JSON.parse(localStorage.getItem("user")).token,
      size: 10,
      current_page: 1,
      currentSort:'status',
      transData: '',
      currentSortDir: 'desc'
    };
  },
  computed:{
    sortedCats() {
      return this.transactions.sort((a,b) => {
        let modifier = 1;
        if(this.currentSortDir === 'desc') modifier = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      }).filter((row, index) => {
        let start = (this.current_page-1)*this.size;
        let end = this.current_page*this.size;
        if(index >= start && index < end) return true;
      });
    }
  },
  methods: {
    fetchTransactions() {
      axios.get(`https://producemart.herokuapp.com/getAlltransactions`, {
        headers: {
          Authorization: this.token,
        },
      })
      .then(res => {
        console.log(res.data)
        this.transData = res.data
        this.transactions = res.data.data
      })
    },
    onClickHandler(page){
      console.log(page)
      this.current_page = page
      this.fetchTransactions()
    },
    sort(s) {
      //if s == current sort, reverse
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      }
      this.currentSort = s;
    },
    nextPage() {
      if((this.current_page*this.size) < this.transactions.length) this.current_page++;
    },
    prevPage() {
      if(this.current_page > 1) this.current_page--;
    }
  },

};
</script>
<style>
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #97f29f !important;
  }
  .active-page {
    background-color: #97f29f !important;
    border: 1px solid #97f29f !important;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>

<template>
<div>
  <title>View Shipper - Super Admin Dashboard | Produce Mart</title>
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
                    <h3>View Shipper</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> View Shipper
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
                    <h4>All Shippers</h4>
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
                          <!-- <th scope="col">Shipper ID</th> -->
                          <th scope="col">Company Name</th>
                          <th scope="col">First Name</th>
                          <th scope="col">Last Name</th>
                          <th scope="col">Emails</th>
                          <th scope="col">Phone No</th>
                          <th scope="col">Address</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(shipper, i) in shippers"
                          :key="i"
                          v-show="shippers"
                        >
                          <td>{{ shipper.companyName }}</td>
                          <td>{{ shipper.firstName }}</td>
                          <td>{{ shipper.lastName }}</td>
                          <td>
                            <div v-for="item in shipper.email" :key="item">
                            <span>{{item.email}}</span></div>
                          </td>
                          <td>{{ shipper.phone_no }}</td>
                          <td>{{ shipper.address }}</td>
                          <td><a href="#" class="status_btn">Active</a></td>
                          <td>
                            <div class="action_btns d-flex">
                              <router-link
                                :to="
                                  '/dashboard/edit-shipper-content/' +
                                  shipper._id
                                "
                                ><a title="Edit" class="action_btn mr_10">
                                  <i class="far fa-edit"></i> </a
                              ></router-link>
                              <span
                                @click="deleteShipper(shipper._id)"
                                title="Delete"
                                class="action_btn"
                              >
                                <i class="fas fa-trash"></i>
                              </span>
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
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  mounted() {
    window.scrollTo(0, 0);

    
    this.fetchShippers();
  },
  data() {
    return {
      shippers: null,
      token: JSON.parse(localStorage.getItem("user")).token,
    };
  },

  methods: {
    async fetchShippers() {
      this.shippers = null;
      const res = await fetch(
        "https://producemart.herokuapp.com/getAllShipper",
        {
          method: "GET",
          headers: {
            "Content-Type": "applicaiton/json",
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      this.shippers = data;
    },
    async deleteShipper(id) {
      const res = await fetch(
        "https://producemart.herokuapp.com/deleteShipper/" + id,
        {
          method: "DELETE",
          headers: {
            Authorization: this.token,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      this.fetchShippers();
    },
  },
};
</script>

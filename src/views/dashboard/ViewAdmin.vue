<template>
  <title>View Admin - Super Admin Dashboard | Produce Mart</title>
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
                    <h3>View Admin</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i> View Admin
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
                    <h4>Admin List</h4>
                    <div class="box_right d-flex lms_block">
                      <div class="serach_field_2">
                        <div class="search_inner">
                          <form Active="#">
                            <div class="search_field">
                              <input
                                type="text"
                                placeholder="Search content here..."
                                v-model="search"
                              />
                            </div>
                            <button type="submit">
                              <i class="bi bi-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">Admin <br />Unique ID</th>
                          <th scope="col">Username</th>
                          <th scope="col">First Name</th>
                          <th scope="col">Last Name</th>
                          <th scope="col">Email Address</th>

                          <th scope="col">Role</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody v-if="admins">
                        <tr v-for="(admin, i) in filterAdmins" :key="i">
                          <th scope="row">{{ admin._id }}</th>
                          <td>{{ admin.username }}</td>
                          <td>{{ admin.firstname }}</td>
                          <td>{{ admin.lastname }}</td>
                          <td>{{ admin.email }}</td>

                          <td>
                            {{
                              admin.role
                                .replace(
                                  admin.role[0],
                                  admin.role[0].toUpperCase()
                                )
                                .replace("admin", " Admin")
                            }}
                          </td>
                          <td>
                            <div class="action_btns d-flex">
                              <router-link
                                :to="'/dashboard/manage-admin/' + admin._id"
                              >
                                <a title="View & Edit" class="action_btn mr_10">
                                  <i class="far fa-edit"></i>
                                </a>
                              </router-link>
                              <a
                                title="Delete"
                                class="action_btn"
                                data-toggle="modal"
                                :data-target="'#exampleModalCenter' + i"
                              >
                                <i class="fas fa-trash"></i>
                              </a>
                            </div>
                          </td>
                          <div
                            class="modal fade"
                            :id="'exampleModalCenter' + i"
                            tabindex="-10"
                            role="dialog"
                            aria-labelledby="exampleModalCenterTitle"
                            aria-hidden="true"
                          >
                            <div
                              class="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <div class="modal-content">
                                <div class="modal-body modal-body-box">
                                  <i class="bi bi-exclamation-triangle"></i>
                                  <h2>
                                    Delete {{ admin.role }}
                                    {{ admin.firstname }}?
                                  </h2>
                                  <p>You won't be able to revert this.</p>
                                  <a
                                    class="popBtnCancel popBtn popup-close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    >No, Cancel</a
                                  >
                                  <a
                                    @click="deleteAdmin(admin._id)"
                                    class="popBtnDelete popBtn"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    >Yes, Delete!</a
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </tr>
                      </tbody>
                      <div
                        class="col-lg-12 mb-4 mt-2 text-center signuas"
                        v-else
                      >
                        <span class="spinner-border spinner-border-sm"></span>
                      </div>
                    </table>
                    <!-- Popup Box Delete -->
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
</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<style scoped src="@/assets/css/styleSupport.css"></style>
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

    
    this.getAllAdmins();
  },
  data() {
    return {
      admins: null,
      search: "",
      token: JSON.parse(localStorage.getItem("user")).token,
    };
  },
  computed: {
    filterAdmins() {
      return this.admins.filter((admin) =>
        admin.firstname.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    async getAllAdmins() {
      // console.log(this.token);
      const res = await fetch("https://producemart.herokuapp.com/getAdmin", {
        method: "GET",
        headers: {
          Authorization: this.token,
        },
      });
      const { data } = await res.json();
      this.admins = data;
    },
    async deleteAdmin(id) {
      const res = await fetch(
        "https://producemart.herokuapp.com/" + id + "/delete",
        {
          method: "DELETE",
          headers: {
            Authorization: this.token,
          },
        }
      );
      const data = await res.json();
      if (data.status == true) {
        this.getAllAdmins();
      }
    },
  },
};
</script>

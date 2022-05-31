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
                          <th scope="col">Password</th>
                          <th scope="col">Role</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">110GRT</th>
                          <td>Hayden1123</td>
                          <td>Hayden</td>
                          <td>Felix</td>
                          <td>myemail@email.com</td>
                          <td>1234567890</td>
                          <td>Reporting Admin</td>
                          <td>
                            <div class="action_btns d-flex">
                              <a title="View & Edit" class="action_btn mr_10">
                                <i class="far fa-edit"></i>
                              </a>
                              <a title="Delete" class="action_btn popup-btn">
                                <i class="fas fa-trash"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- Popup Box Delete -->
                    <div class="popup-wrap">
                      <div class="popup-box">
                        <i class="bi bi-exclamation-triangle"></i>
                        <h2>Are You Sure?</h2>
                        <p>You won't be able to revert this.</p>
                        <a class="popBtnCancel popBtn popup-close"
                          >No, Cancel</a
                        >
                        <a class="popBtnDelete popBtn">Yes, Delete!</a>
                        <a class="close-btn popup-close" href="#">x</a>
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
    $(document).ready(function () {
      $(".popup-btn").click(function (e) {
        $(".popup-wrap").fadeIn(500);
        $(".popup-box").removeClass("transform-out").addClass("transform-in");

        e.preventDefault();
      });

      $(".popup-close").click(function (e) {
        $(".popup-wrap").fadeOut(500);
        $(".popup-box").removeClass("transform-in").addClass("transform-out");

        e.preventDefault();
      });
    });

    window.scrollTo(0, 0);

    let externalScriptCustom = document.createElement("script");
    externalScriptCustom.setAttribute(
      "src",
      "https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js"
    );
    document.head.appendChild(externalScriptCustom);
  },
};
</script>

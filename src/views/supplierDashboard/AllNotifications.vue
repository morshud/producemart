<template>
  <title>All Notifications - Supplier Dashboard | Produce Mart</title>
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
                    <h3>Notifications</h3>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="dashboard_breadcam text-right">
                    <p>
                      <router-link to="/supplier-dashboard/home"
                        ><a>Dashboard</a></router-link
                      >
                      <i class="fas fa-caret-right"></i>
                      Notifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Main-->
          <div class="col-md-12">
            <div class="white_box QA_section mb_30" v-if="notifications">
              <div class="recentDiv">
                <h5>10 most recent <i class="bi bi-alarm"></i></h5>
              </div>
              <div v-for="(notification, i) in displayNotification" :key="i">
                <div
                  :class="
                    notification.read
                      ? 'row notificationDiv dormatNotification'
                      : 'row notificationDiv '
                  "
                >
                  <div class="col-md-4">
                    <span class="iconNotify" :disabled="loading">
                      <i class="bi bi-three-dots-vertical"></i>
                      <div class="actionDiv" id="actionDiv">
                        <a @click="markReceipt(notification._id, i)"
                          ><i class="bi bi-envelope-paper"></i> Mark as read</a
                        >
                        <a @click="deleteNotification(notification._id, i)"
                          ><i class="bi bi-trash3"></i> Delete notification</a
                        >
                      </div>
                    </span>
                    <span
                      class="titleNotify"
                      @click="goToPage(notification.type)"
                    >
                      <a class="firstTxt">{{ notification.type }}</a>
                      <a class="statusTxt" v-if="!notification.read">NEW</a>
                    </span>
                  </div>
                  <div class="col-md-8" @click="goToPage(notification.type)">
                    <span class="detailNotify">
                      <a class="mainTxt">{{ notification.message }}</a>
                      <a class="timeTxt">{{
                        dateFormat(notification.createdAt)
                      }}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example" class="m-2">
            <ul class="pagination justify-content-end">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
                  >Previous</a
                >
              </li>
              <li class="page-item" v-for="(a, i) in arr" :key="a">
                <a class="page-link" href="#" @click="pos = i">{{ i + 1 }}</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
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
import { month } from "@/assets/months";
export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  mounted() {
    window.scrollTo(0, 0);

    let externalScriptCustom = document.createElement("script");
    externalScriptCustom.setAttribute(
      "src",
      "https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js"
    );
    document.head.appendChild(externalScriptCustom);
    this.getAllNotifications();
  },
  data() {
    return {
      notifications: null,
      displayNotification: null,
      arr: null,
      loading: false,
      token: JSON.parse(localStorage.getItem("user")).token,
      pos: 0,
    };
  },
  watch: {
    pos(val) {
      console.log(val);
      this.selectNotification(val);
    },
  },
  methods: {
    async getAllNotifications() {
      const res = await fetch(
        "https://producemart.herokuapp.com/getUserNotifications",
        {
          method: "GET",
          headers: {
            Authorization: this.token,
          },
        }
      );
      const { data } = await res.json();
      let len =
        data.length % 10 != 0 ? Math.floor(data.length / 10 + 1) : data.length;
      // console.log(len);
      this.arr = new Array(len).fill(10);
      // console.log(this.arr);
      this.notifications = data;
      this.displayNotification = this.notifications.slice(0, 10);
      //   console.log(this.notifications);
    },
    selectNotification(val) {
      this.displayNotification = this.notifications.slice(
        val * 10,
        (val + 1) * 10
      );
    },
    async markReceipt(id, index) {
      this.notifications[index].read = !this.notifications[index].read;
      console.log(this.notifications[index].read);
      this.loading = true;
      const res = await fetch(
        "https://producemart.herokuapp.com/toggleRead/" + id,
        {
          method: "PATCH",
          headers: {
            Authorization: this.token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ read: this.notifications[index].read }),
        }
      );
      const data = await res.json();
      //   console.log(data);
      this.loading = false;
    },
    async deleteNotification(id, index) {
      this.notifications.splice(index, 1);
      const res = await fetch(
        "https://producemart.herokuapp.com/deleteNotification/" + id,
        {
          method: "DELETE",
          headers: {
            Authorization: this.token,
          },
        }
      );
      const data = await res.json();
      //   console.log(data);
      //   this.loading = false;
    },
    dateFormat(date) {
      let d = new Date(date);
      let now = new Date();
      //   const date1 = new Date('7/13/2010');
      //     const date2 = new Date('12/15/2010');
      const diffTime = Math.abs(now - d);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      // console.log(diffDays);
      // console.log(d);
      if (
        now.getFullYear == d.getFullYear &&
        now.getMonth == d.getMonth &&
        now.getDay == d.getDay
      ) {
        let h = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
        let m = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
        let time = h + ":" + m;
        return time;
      } else if (diffDays >= 1 && diffDays < 2) {
        return "Yest.";
      } else {
        return month[d.getMonth()] + " " + d.getDay();
      }
    },
    goToPage(page) {
      if (page == "product upload") {
        this.$router.push("/supplier-dashboard/pending-products");
      } else if (page == "unavailable product") {
        this.$router.push("/supplier-dashboard/disable-products");
      } else if (page == "rejected product") {
        this.$router.push("/supplier-dashboard/rejected-products");
      } else if (page == "order request") {
        this.$router.push("/supplier-dashboard/open-orders");
      } else if (page == "available product") {
        this.$router.push("/supplier-dashboard/published-products");
      }
    },
  },
};
</script>

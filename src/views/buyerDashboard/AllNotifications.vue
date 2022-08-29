<template>
  <title>All Notifications - Buyer Dashboard | Produce Mart</title>
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
                      <router-link to="/buyer-dashboard/home"
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
            <div class="white_box QA_section mb_30" v-if="notifications" style="padding-bottom: 80px;">
              <div class="recentDiv">
                <h5>10 most recent <i class="bi bi-alarm"></i></h5>
              </div>
              <div v-for="(notification, i) in notifications" :key="i">
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
                        <a v-if="notification.read == false" @click="markReceipt(notification._id, i)"
                          ><i class="bi bi-envelope-paper"></i> Mark as read</a
                        >
                        <a v-if="notification.read == true" @click="markReceipt(notification._id, i)"
                          ><i class="bi bi-envelope-paper"></i> Mark as unread</a
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
                        dayDiff(notification.createdAt)
                      }}</a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="recentDiv">
                <p style="float: right;margin-top: 20px;"> 
                  <button @click="prevPage" style="background: #97f29f;border: 0;padding: 5px 30px; margin-right: 25px;">Previous</button> 
                  <button @click="nextPage" style="background: #97f29f;border: 0;padding: 5px 41px;">Next</button>
                </p>
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
import { month } from "@/assets/months";
import moment from 'moment'

export default {
  name: "Produce Mart",
  components: {
    "dash-sidebar": DashSidebar,
    "dash-navbar": DashNavbar,
    "dash-footer": DashFooter,
  },
  mounted() {
    window.scrollTo(0, 0);

    
    this.getAllNotifications();
  },
  data() {
    return {
      notifications: [],
      loading: false,
      token: JSON.parse(localStorage.getItem("user")).token,
      size: 10,
      current_page: 1,
    };
  },
  computed:{
    sortedNotification() {
      return this.notifications.filter((row, index) => {
        let start = (this.current_page-1)*this.size;
        let end = this.current_page*this.size;
        if(index >= start && index < end) return true;
      });
    }
  },
  methods: {
    dayDiff(value) {
      return moment(value).fromNow();
    },
    nextPage() {
      //console.log('helo')
      if((this.current_page*this.size) < this.notifications.length) this.current_page++;
    },
    prevPage() {
      if(this.current_page > 1) this.current_page--;
    },
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
      this.notifications = data.splice(0, 10);
      //   console.log(this.notifications);
    },
    async markReceipt(id, index) {
      this.notifications[index].read = !this.notifications[index].read;
      //console.log(this.notifications[index].read);
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
      //console.log(diffDays);
      //console.log(d);
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
      /*if (page == "quote") {
        this.$router.push("/dashboard/view-quotes");
      } else if (page == "product upload") {
        this.$router.push("/dashboard/pending-products");
      } else if (page == "active product") {
        this.$router.push("/dashboard/active-products");
      }*/
    },
  },
};
</script>

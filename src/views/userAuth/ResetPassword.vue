<template>
  <title>Reset Password | Produce Mart</title>
  <main class="forgotMain">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="loginDiv">
            <div class="headLogin">
              <h3>
                <a href="/">
                  <img src="@/assets/img/adminImg/logo.png" />
                </a>
                <span>Reset Password</span>
              </h3>
            </div>
            <div v-if="!message">
              <form @submit.prevent="updatePassword">
                <div class="row justify-content-center">
                  <!--Email-->
                  <div class="col-lg-12 mb-2">
                    <label>Enter new Password</label>
                    <div class="row">
                      <div class="col-lg-12">
                        <i class="bi bi-key"></i>
                        <input
                          type="password"
                          placeholder="Enter new password"
                          class="input"
                          v-model="newPassword"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 mb-2">
                    <label>Re-Enter new Password</label>
                    <div class="row">
                      <div class="col-lg-12">
                        <i class="bi bi-key"></i>
                        <input
                          type="password"
                          placeholder="Re-Enter new password"
                          class="input"
                          v-model="confirmPassword"
                        />
                      </div>
                    </div>
                  </div>

                  <!--Reset password-->
                  <div class="col-lg-12 mb-4 mt-2">
                    <input
                      type="submit"
                      value="Reset Password"
                      class="submit"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div v-else>
              <p>{{ message }}</p>
              <div class="col-lg-12 text-center optionBelow2 mb-4">
                <router-link to="/login"><a>Login</a></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped src="@/assets/css/authStyle.css"></style>
<style scoped src="@/assets/css/bootstrap.min.css"></style>
<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      newPassword: "",
      confirmPassword: "",
      message: "",
    };
  },
  methods: {
    async updatePassword() {
      let id = this.$route.query.id;
      let token = this.$route.query.token;
      const res = await fetch(
        `https://producemart.herokuapp.com/reset-password?id=${id}&token=${token}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            new_password: this.newPassword,
            confirm_password: this.confirmPassword,
          }),
        }
      );
      const data = await res.json();
      data.message ? (this.message = data.message) : (this.message = "");
    },
  },
};
</script>

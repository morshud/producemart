<template>
  <title>Admin Login | Produce Mart</title>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <img
          class="snippet"
          ondragstart="return false;"
          src="@/assets/img/adminImg/snippet.png"
        />
        <div class="col-lg-7">
          <div class="loginDiv">
            <div class="headLogin">
              <h3>
                <router-link to="#">
                  <img src="@/assets/img/adminImg/logo.png" />
                </router-link>
                <span>Admin Login</span>
              </h3>
            </div>
            <form @submit.prevent="handleLogin">
              <div v-if="message" class="alert alert-danger" role="alert">
                {{ message }}
              </div>
              <div class="row">
                <div class="col-lg-12 mb-4">
                  <label>Email address</label>
                  <i class="bi bi-envelope"></i>
                  <input
                    v-model="email"
                    type="email"
                    placeholder="Enter your email"
                    class="input"
                  />
                </div>
                <div class="col-lg-12 mb-4">
                  <label>Password</label>
                  <i class="bi bi-lock"></i>
                  <input
                    v-model="password"
                    type="password"
                    placeholder="Enter your password"
                    class="input"
                  />
                </div>
                <div class="col-lg-12 mb-4 mt-2">
                  <input
                    type="submit"
                    value="Login"
                    class="submit"
                    :disabled="loading"
                  />
                  <div
                    class="col-lg-12 mb-4 mt-2 text-center signuas"
                    v-show="loading"
                  >
                    <span class="spinner-border spinner-border-sm"></span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <img
          class="snippet2"
          ondragstart="return false;"
          ondr
          src="@/assets/img/adminImg/snippet2.png"
        />
      </div>
    </div>
  </main>
</template>
<style scoped src="@/assets/css/adminStyle.css"></style>
<style scoped src="@/assets/css/bootstrap.min.css"></style>
<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      loading: false,
      message: "",
      /* userData: this.$store.state.auth.user */
    };
  },

  methods: {
    async handleLogin() {
      this.loading = true;
      const res = await fetch(
        "https://producemart.herokuapp.com/signin-admin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: this.email, password: this.password }),
        }
      );
      const data = await res.json();
      if (data.status == false) {
        this.loading = false;
        this.message = data.message;
        return;
      }
      console.log(data);
      {
        data.user && localStorage.setItem("user", JSON.stringify(data.user));
      }
      if (
        data.user.role == "superadmin" ||
        data.user.role == "operatingadmin" ||
        data.user.role == "reportingadmin"
      ) {
        this.$router.push("/dashboard/home");
      } else {
        this.loading = false;
        this.message = "You're not authorized to signin as an admin, check ";
      }
    },
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

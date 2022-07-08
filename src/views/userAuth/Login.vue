<template>
  <title>Login | Produce Mart</title>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="loginDiv">
            <div class="headLogin">
              <h3>
                <a href="/">
                  <img src="@/assets/img/adminImg/logo.png" />
                </a>
                <span>Welcome Back!</span>
              </h3>
            </div>
            <form @submit.prevent="handleLogin">
              <div
                v-if="message"
                class="alert"
                :class="successful ? 'alert-success' : 'alert-danger'"
              >
                {{ message }}
              </div>
              <div class="row justify-content-center">
                <!--Email-->
                <div class="col-lg-12 mb-4">
                  <label>Username or Email Address</label>
                  <div class="row">
                    <div class="col-lg-12">
                      <i class="bi bi-envelope"></i>
                      <input
                        v-model="email"
                        name="email"
                        type="text"
                        placeholder="Enter username or email"
                        class="input"
                        required
                      />
                    </div>
                  </div>
                </div>
                <!--Password-->
                <div class="col-lg-12 mb-4">
                  <label>Password</label>
                  <div class="row">
                    <div class="col-lg-12">
                      <i class="bi bi-lock"></i>
                      <input
                        type="password"
                        v-model="password"
                        name="password"
                        placeholder="Enter your password"
                        class="input"
                      />
                      <span class="forgot"
                        ><router-link to="/forgot-password" class="route-link"
                          >Forgot Password?</router-link
                        ></span
                      >
                    </div>
                  </div>
                </div>
                <!--Kepp me logged in-->
                <div class="col-lg-12 mb-1">
                  <label class="checkbox">
                    <input type="checkbox" /> Keep me logged In
                    <svg viewBox="0 0 21 18">
                      <symbol
                        id="tick-path"
                        viewBox="0 0 21 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69"
                          fill="none"
                          stroke-width="2.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </symbol>
                      <defs>
                        <mask id="tick">
                          <use class="tick mask" href="#tick-path" />
                        </mask>
                      </defs>
                      <use
                        class="tick"
                        href="#tick-path"
                        stroke="currentColor"
                      />
                      <path
                        fill="white"
                        mask="url(#tick)"
                        d="M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z"
                      />
                    </svg>
                  </label>
                </div>
                <!--Login-->
                <div class="col-lg-12 mb-4 mt-2">
                  <input type="submit" value="Login" class="submit" required />
                </div>
                <div
                  class="col-lg-12 mb-4 mt-2 text-center signuas"
                  v-show="loading"
                >
                  <span class="spinner-border spinner-border-sm"></span>
                </div>
                <!--Sign up as-->
                <div class="col-lg-12 text-center mb-4 optionBelow">
                  <p>Don't have an account? <span>Sign Up As:</span></p>
                </div>
                <div class="col-lg-12 text-center optionBelow2 mb-4">
                  <router-link to="/supplier-registration" class="route-link"
                    ><a>A Supplier</a></router-link
                  >
                  <router-link to="/buyer-registration" class="route-link"
                    ><a>A Buyer</a></router-link
                  >
                </div>
              </div>
            </form>
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
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      message: "",
      /* userData: this.$store.state.auth.user */
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    userData() {
      return this.$store.state.auth.user;
    },
  },

  methods: {
    async handleLogin() {
      this.loading = true;
      const res = await fetch("https://producemart.herokuapp.com/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: this.email, password: this.password }),
      });
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
      if (data.user.role == "buyer") {
        this.$router.push("/buyer-dashboard/home");
      } else if (data.user.role == "supplier") {
        this.$router.push("/supplier-dashboard/home");
      } else {
        this.loading = false;
        this.message = "Please check your details and try again";
      }

      // if (this.user.email && this.user.password) {
      //   this.$store.dispatch("auth/login", this.user).then(
      //     () => {
      //       console.log("Samuel", this.$store.state.auth.user.id);
      //       let data = this.$store.state.auth.user;
      //       localStorage.setItem("user", JSON.stringify(data));

      //       if (data.role == "admin") {
      //         this.$router.push("/dashboard/home");
      //       } else if (data.role == "buyer") {
      //         this.$router.push("/buyer-dashboard/home");
      //       } else if (data.role == "supplier") {
      //         this.$router.push("/supplier-dashboard/home");
      //       }
      //       //this.$router.push('/user/dashboard');
      //     },
      //     (error) => {
      //       this.loading = false;
      //       this.message =
      //         (error.response &&
      //           error.response.data &&
      //           error.response.data.message) ||
      //         error.message ||
      //         error.toString();
      //     }
      //   );
      // }
    },
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

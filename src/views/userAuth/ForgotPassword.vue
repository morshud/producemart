<template>
<title>Forgot Password | Produce Mart</title>
    <main class="forgotMain">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="loginDiv">
                        <div class="headLogin">
                            <h3>
                                <a href="/">
                                    <img src="@/assets/img/adminImg/logo.png">
                                </a>
                                <span>Forgot Password</span>
                            </h3>
                        </div>
                        <form>
                            <div class="row justify-content-center">
                                <!--Email-->
                                <div class="col-lg-12 mb-2">
                                    <label>Enter your registered email address</label>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <i class="bi bi-envelope"></i>
                                            <input type="email" placeholder="Enter your email" class="input">
                                        </div>
                                    </div>
                                </div>
                                <!--Agreement-->
                                <div class="col-lg-12 agreement">
                                    <p>A link to reset your password will be sent to your email address.</p>
                                </div>
                                <!--Reset password-->
                                <div class="col-lg-12 mb-4 mt-2">
                                    <input type="submit" value="Reset Password" class="submit">
                                </div>
                                <div class="col-lg-12 text-center mb-2 optionBelow">
                                    <p>Remember Password?</p>
                                </div>
                                <div class="col-lg-12 text-center optionBelow2 mb-4">
                                    <router-link to="/login"><a>Login</a></router-link>
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
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>
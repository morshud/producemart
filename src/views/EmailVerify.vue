<template>
<title>Verifeid Email | Produce Mart</title>
    <div class="erroe_page_wrapper">
        <div class="errow_wrap">
            <div class="container text-center">
                <img class="mainLogo" src="@/assets/img/main-logo.png">
                <div class="col-md-8 offset-md-2 text-center">
                    <p>Your email has been verified successfully. Login to your account to access your dashboard.</p>
                </div>
                <div class="error_btn  text-center mt-3">
                    <router-link to="/login">
                        <a class="default_btn theme_bg_6">Login</a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<script>
    export default {
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>
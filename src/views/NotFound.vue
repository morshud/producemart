<template>
<title>404 Error - Not Found | Produce Mart</title>
    <div class="erroe_page_wrapper">
        <div class="errow_wrap">
            <div class="container text-center">
                <img class="mainLogo" src="@/assets/img/main-logo.png">
                <div class="error_heading  text-center">
                    <h3 class="headline font-danger theme_color_6">404</h3>
                </div>
                <div class="col-md-8 offset-md-2 text-center">
                    <p>The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.</p>
                </div>
                <div class="error_btn  text-center mt-3">
                    <router-link to="/">
                        <a class="default_btn theme_bg_6">Back Home</a>
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
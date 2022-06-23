<template>
    <header class="mainHeader">
        <nav class="navbar navbar-expand-lg navbar-light navbar-color">
            <div class="container-fluid">
                <div class="authDiv mobileAuthDiv">
                    <router-link to="/login"><a class="authLogin">Login</a></router-link>
                </div>
                <a class="navbar-brand" href="/">   
                    <img src="@/assets/img/logo.png">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <i class="bi bi-text-right"></i>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <div class="offcanvasImg">
                            <a class="navbar-brand" href="/">   
                                <img src="@/assets/img/logo.png">
                            </a>
                        </div>
                        <button type="button" class="btn-offcanvas-close" data-bs-dismiss="offcanvas" aria-label="Close">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link to="/" class="route-link"><a class="nav-link">Home</a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about" class="route-link"><a class="nav-link">About Us</a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/products" class="route-link"><a class="nav-link">View Products</a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/blog" class="route-link"><a class="nav-link">Blog</a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/request-a-product" class="route-link"><a class="nav-link">Request a Product</a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/faq" class="route-link"><a class="nav-link">FAQs</a></router-link>
                            </li>
                        </ul>
                        <searchInner/>
                        <div class="authDiv desktopAuthDiv">
                            <router-link to="/login"><a class="authLogin">Login</a></router-link>
                            <router-link to="buyer-registration"><a class="authSignup">Sign Up</a></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<style scoped src="@/assets/css/styleFrontend.css"></style>
<style scoped src="@/assets/css/bootstrap.css"></style>
<script>
    import SearchInner from './searchInner.vue'
    export default {
      name: "Produce Mart",
      components:{
      'searchInner': SearchInner,
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>
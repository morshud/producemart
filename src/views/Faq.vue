<template>
  <title>FAQs - Frequently Asked Questions | Produce Mart</title>
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
                              <router-link to="/faq" class="route-link"><a class="nav-link activeLink">FAQs</a></router-link>
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
  <searchHeader/>
  
  <!--Page Breadcrumb-->
  <section class="pageBreadcrumb faqPageBread">
      <div class="container">
          <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                    <div class="textHead">
                        <p class="subhead">Produce Mart</p>
                        <h2>Frequently Asked Questions (FAQs)</h2>
                        <p class="belowHead">Find answers to all questions you you need here!</p>
                    </div>
                </div>
          </div>
      </div>
  </section><!--Page Breadcrumb Ends-->

  <!--FAQ Content-->
  <main class="faqContent">
    <section class="questions faq-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="faq-box">
                        <details>
                            <summary>FAQ 1</summary>
                            <div class="faq-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quis dignissimos suscipit voluptate dolorum tempora temporibus modi iure? Accusantium, odit. Accusantium error temporibus commodi distinctio incidunt velit minima, iste deserunt explicabo architecto a libero repellat quae quam dicta. Voluptatibus eos facilis error natus itaque. Ratione blanditiis exercitationem quos. Perferendis, veniam.</p>
                            </div>
                        </details>
                        <details>
                            <summary>FAQ 2</summary>
                            <div class="faq-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quis dignissimos suscipit voluptate dolorum tempora temporibus modi iure? Accusantium, odit.</p>
                            </div>
                        </details>
                        <details>
                            <summary>FAQ 3</summary>
                            <div class="faq-content">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam aliquam nihil ab officia dolorem assumenda, a soluta sapiente nam, quo, voluptate voluptates praesentium voluptas possimus expedita perspiciatis distinctio. Porro, architecto!</p>
                            </div>
                        </details>
                        <details>
                            <summary>FAQ 4</summary>
                            <div class="faq-content">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam aliquam nihil ab officia dolorem assumenda, a soluta sapiente nam, quo, voluptate voluptates praesentium voluptas possimus expedita perspiciatis distinctio. Porro, architecto!</p>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </main>

  <mainFooter/>
</template>
<script>
    import MainHeader from './mainHeader.vue'
    import SearchHeader from './searchHeader.vue'
    import MainFooter from './mainFooter.vue'
    import SearchInner from './searchInner.vue'
    export default {
      name: "Produce Mart",
      components:{
      'mainHeader': MainHeader,
      'searchHeader': SearchHeader,
      'mainFooter': MainFooter,
      'searchInner': SearchInner,
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>
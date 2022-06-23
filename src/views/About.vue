<template>
  <title>About Us | Produce Mart</title>
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
                              <router-link to="/about" class="route-link"><a class="nav-link activeLink">About Us</a></router-link>
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
  <searchHeader/>
  
  <!--Page Breadcrumb-->
  <section class="pageBreadcrumb aboutPageBread">
      <div class="container">
          <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                    <div class="textHead">
                        <p class="subhead">Produce Mart</p>
                        <h2>About Us</h2>
                        <p class="belowHead">Get to know more about us.</p>
                    </div>
                </div>
          </div>
      </div>
  </section><!--Page Breadcrumb Ends-->

  <!--About Content-->
  <main class="aboutContent">

      <!--About - Explore-->
      <section class="aboutExplore">
          <div class="container">
              <div class="row">
                  <div class="col-md-5">
                      <div class="imgSec">
                          <img src="@/assets/img/abtImg1.png" draggable="false">
                      </div>
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-6">
                      <div class="textSec">
                          <div class="textHead">
                            <p class="subhead">Who is ProduceMart?</p>
                            <h2>Wholesale Hero’s</h2>
                          </div>
                          <p class="note">Producemart.com is a brand new online B2B marketplace for wholesale agricultural produce and ingredients. It aims to make it simpler than ever to list and source produce at a local, regional or international level. Acting as an intermediary platform for both suppliers and buyers, producemart.com allows them to connect more efficiently, overcoming challenges such as language barriers or potential security concerns around engaging with new buyers and suppliers and cross-border purchases. </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!--Our Goals-->
      <section class="ourGoal">
          <div class="container">
              <div class="row">
                  <div class="col-md-6">
                      <div class="textSec">
                          <div class="textHead">
                            <p class="subhead">Mission</p>
                            <h2>Our Mission Statement</h2>
                          </div>
                          <p class="note">"Our organization exists to provide a simple and secure way to connect buyers and sellers of wholesale agricultural produce and ingredients both locally and globally by removing barriers to trade through our unique selling and purchasing process built into our online platform."</p>
                      </div>
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-5">
                      <div class="imgSec">
                          <img src="@/assets/img/abtImg2.png" draggable="false">
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!--Our Story-->
      <section class="ourStory">
          <div class="container">
              <div class="row">
                  <div class="col-md-6">
                      <div class="textSec">
                          <div class="textHead">
                            <p class="subhead">History</p>
                            <h2>Our Story</h2>
                          </div>
                          <p class="note">Everyone loves a good ‘how did you get here story’. It would be rude not to share.</p>
                          <p class="note">Like all good stories start, Sola our founder, was having a conversation with a friend who is a farmer and commodities supplier. It was during this conversation Sola realised some of the pains of small and medium scale buyers and suppliers of agricultural produce. Their challenges and realities with finding new markets, trusting new (and sometimes old) clients to pay in full and on time, lead times for the supply of orders, sourcing high quality products to mention a few. With a background in product development and management, Sola knew with challenges come opportunities and he set to work trying to understand and validate these challenges with as many buyers and suppliers of agricultural produce as he could.</p>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="imgSec">
                          <img src="@/assets/img/abtImg3.png" draggable="false">
                      </div>
                  </div>
                  <div class="col-md-12">
                      <div class="textSec">
                          <p class="note">Months after that initial conversation with his farmer friend, and after speaking to agricultural suppliers and buyers at trade shows, meet-ups, both online and in person, questioning and trying to understand the concerns and issues of both sides of the Agri world….ProduceMart was born.</p>
                          <p class="note">“Farmers, suppliers and producers, both here in the UK and around the world, have all kinds of wonderful produce and ingredients for sale, but it can be a real challenge to reach out to potential customers who might be interested in sourcing produce just like theirs.</p>
                          <p class="note">“Similarly, we know that many businesses – from food manufacturers to wholesalers – would benefit hugely from having access to all kinds of produce and ingredients both locally and from around the world, but don’t know where to start. Producemart.com aims to simplify the process for both buyers and sellers, by enabling a remote, secure way to connect with each other.</p>
                          <p class="note">As consumers, we’re used to shopping for all kinds of products online and we want to make it just as simple and intuitive to buy and sell agricultural produce.” Sola Erogbogbo, Founder | ProduceMart</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </main>

  <subscribeNewsletter/>
  <mainFooter/>
</template>
<style scoped src="@/assets/css/styleFrontend.css"></style>
<style scoped src="@/assets/css/bootstrap.css"></style>
<script>
    import MainHeader from './mainHeader.vue'
    import SearchHeader from './searchHeader.vue'
    import SubscribeNewsletter from './subscribeNewsletter.vue'
    import MainFooter from './mainFooter.vue'
    import SearchInner from './searchInner.vue'
    export default {
      name: "Produce Mart",
      components:{
      'mainHeader': MainHeader,
      'searchHeader': SearchHeader,
      'subscribeNewsletter': SubscribeNewsletter,
      'mainFooter': MainFooter,
      'searchInner': SearchInner,
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>
<template>
  <title>About Us | Produce Mart</title>
  <mainHeader />
  
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

      <section class="videoSection">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10 text-center mb-4">
              <div class="textHead">
                <p class="subhead">Produce Mart</p>
                <h2>Why Choose Us?</h2>
              </div>
            </div>
            <!-- <div class="col-lg-8 text-center">
              <video class="video" controls controlsList="nodownload">
                <source src="" type="video/mp4" />
              </video>
            </div>  -->
            <div class="col-lg-8 text-center video">
              <iframe
                style="width: 100%"
                height="380"
                src="https://www.youtube.com/embed/6jDxjTub-eE"
              >
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <!--Our Goals-->
      <section class="aboutExplore">
          <div class="container">
              <div class="row">
                  <div class="col-md-5">
                      <div class="imgSec">
                          <img src="@/assets/img/abtImg2.png" draggable="false">
                      </div>
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-6">
                      <div class="textSec">
                          <div class="textHead">
                            <p class="subhead">Mission Statement</p>
                            <h2>Our Mission Statement</h2>
                          </div>
                          <p class="note">"Our organization exists to provide a simple and secure way to connect buyers and sellers of wholesale agricultural produce and ingredients both locally and globally by removing barriers to trade through our unique selling and purchasing process built into our online platform."</p>
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
      data(){
        return{
          user: JSON.parse(localStorage.getItem("user")) || '',
        }
      },
      methods: {
        logOut() {
          this.$store.dispatch("auth/logout");
          this.$router.push("/login");
        },
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>
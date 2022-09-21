<template>
  <title>FAQs - Frequently Asked Questions | Produce Mart</title>
  <mainHeader/>
  
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
<style scoped src="@/assets/css/styleFrontend.css"></style>
<style scoped src="@/assets/css/bootstrap.css"></style>
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
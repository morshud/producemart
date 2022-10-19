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
                        <!-- <p class="belowHead">Find answers to all questions you you need here!</p> -->
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
                            <summary> How much does it cost to register on producemart.com?</summary>
                            <div class="faq-content">
                                <p> It’s absolutely free to register as either a Buyer or Supplier. As a buyer, you can browse products and only pay for what you buy although this might include a service charge and or processing fee. As a supplier, it’s free to list all your products but you are responsible for paying the fees for the audit of your premises and the inspection costs </p>
                            </div>
                        </details>
                        <!-- <details>
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
                        </details> -->
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
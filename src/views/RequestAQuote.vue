<template>
  <title>Request a Quote | Produce Mart</title>
  <mainHeader/>
  <socialIcon/>
  
  <!--Page Breadcrumb-->
  <section class="pageBreadcrumb requestPageBread">
      <div class="container">
          <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                    <div class="textHead">
                        <p class="subhead">Produce Mart</p>
                        <h2>Request A Quote</h2>
                        <p class="belowHead">Fill in all required info below to submit a quote.</p>
                    </div>
                </div>
          </div>
      </div>
  </section><!--Page Breadcrumb Ends-->

  <!--Request Quote Content-->
  <main class="requestQuoteContent">
    <section class="formSec">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <form>
              <div class="row">
                <div class="col-lg-6 mb-4">
                  <label>First Name</label>
                  <input type="text" placeholder="Enter your first name" class="input">
                </div>
                <div class="col-lg-6 mb-4">
                  <label>Last Name</label>
                  <input type="text" placeholder="Enter your last name" class="input">
                </div>
                <div class="col-lg-6 mb-4">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Enter your phone number" class="input">
                </div>
                <div class="col-lg-6 mb-4">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email" class="input">
                </div>
                <div class="col-lg-6 mb-4">
                  <label>Product Category</label>
                  <select class="input">
                    <option hidden>Choose Category</option>
                    <option>Vegetable</option>
                    <option>Fruits</option>
                    <option>Oil</option>
                  </select>
                </div>
                <div class="col-lg-6 mb-4">
                  <label>Product Name</label>
                  <input type="text" placeholder="Enter product name" class="input">
                </div>
                <div class="col-lg-6 mb-4">
                  <label>Product Quantity</label>
                  <input type="number" placeholder="Enter quantity" class="input">
                </div>
                <div class="col-lg-6 mb-4">
                  <label>Country</label>
                  <input type="text" placeholder="Enter your country" class="input">
                </div>
                <div class="col-lg-12 mb-4">
                  <label>Additional Info</label>
                  <textarea cols="30" rows="4" placeholder="Start typinig..." class="input"></textarea>
                </div>
                <div class="col-lg-12">
                  <button type="submit">Request Quote</button>
                </div>
              </div>
            </form>
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
    import SocialIcon from './socialIcon.vue'
    import MainFooter from './mainFooter.vue'
    export default {
      name: "Produce Mart",
      components:{
      'mainHeader': MainHeader,
      'searchHeader': SearchHeader,
      'socialIcon': SocialIcon,
      'mainFooter': MainFooter,
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>
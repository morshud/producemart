<template>
    <!--Subscribe Newsletter-->
  <section class="subscribeNewsletter">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10 subscribeBox">
          <h1>Stay up to date with our latest news and product updates</h1>
          <p>Join our mailing list today and stay updated!</p>
          <form>
            <i class="bi bi-envelope"></i>
            <input type="email" placeholder="Your email address">
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </section><!--Subscribe Newsletter Ends-->
</template>
<script>
export default {
  mounted(){
    window.scrollTo(0,0)
  }
}
</script>
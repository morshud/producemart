<template>
    <!--Footer-->
    <div class="footer_part border_footer">
      <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
                <div class="footer_iner text-center">
                  <p>Copyright ©<span id="autodate"></span>Produce Mart. All Right Reserved</p>
                </div>
            </div>
          </div>
      </div>
    </div>

    <!--Back to top-->
    <div id="back-top" style="display: none;">
      <a title="Go to Top" href="#">
      <i class="bi bi-caret-up-fill"></i>
      </a>
    </div>
</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<script>
export default {
  mounted(){
    window.scrollTo(0,0)

    //Copyright Date
    function newDate() {
      return new Date().getFullYear();
    }
    document.onload = document.getElementById("autodate").innerHTML = newDate();
  }
}
</script>
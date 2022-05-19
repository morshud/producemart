<template>
    <title>Add Products - Super Admin Dashboard | Produce Mart</title>
    <dash-sidebar/>

    <section class="main_content dashboard_part large_header_bg">
        <dash-navbar/>
        <!--Main Content-->
        <div class="main_content_iner ">
            <div class="container-fluid p-0">
                <div class="row justify-content-center">
                    <!--Breadcrumb-->
                    <div class="col-12">
                        <div class="dashboard_header mb_50">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="dashboard_header_title">
                                    <h3>Add Products</h3>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashboard_breadcam text-right">
                                        <p>
                                            <router-link to="/dashboard/home"><a>Dashboard</a></router-link> <i class="fas fa-caret-right"></i> Add Products
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Main-->
                    <div class="col-md-10 white_box productSection">
                        <form>
                            <div class="row">
                                <div class="col-lg-6 mb-4">
                                    <label>Product Name</label>
                                    <input type="text" class="input">
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <label>Product Image</label>
                                    <input type="file" class="input" accept=".jpg, .jpeg, .png, .jfif">
                                </div>
                                <div class="col-lg-12 mb-4">
                                    <label>Product Description</label>
                                    <textarea cols="30" rows="4" class="input"></textarea>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <label>Product Price (NGN)</label>
                                    <input type="number" class="input">
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <label>Product Discounted Price (NGN)</label>
                                    <input type="number" class="input">
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <label>Product Category</label>
                                    <select class="input">
                                        <option hidden>Select Category</option>
                                        <option>New Arrival</option>
                                        <option>Most Popular</option>
                                        <option>Trending</option>
                                    </select>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <label>Unit In Stock</label>
                                    <input type="number" class="input">
                                </div>
                                <div class="col-lg-12 text-center">
                                    <button>Add Product</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <dash-footer/>
    </section>
</template>
<style scoped src="@/assets/vendors/themefy_icon/themify-icons.css"></style>
<style scoped src="@/assets/vendors/niceselect/css/nice-select.css"></style>
<style scoped src="@/assets/css/style.css"></style>
<script>
    import DashSidebar from './dash-sidebar.vue'
    import DashNavbar from './dash-navbar.vue'
    import DashFooter from './dash-footer.vue'
    export default {
      name: "Produce Mart",
      components:{
      'dash-sidebar': DashSidebar,
      'dash-navbar': DashNavbar,
      'dash-footer': DashFooter,
      },
      mounted(){
        window.scrollTo(0,0)

        let externalScriptCustom = document.createElement('script')
        externalScriptCustom.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/Mart-script/main/custom.js')
        document.head.appendChild(externalScriptCustom)
      }
    }
</script>
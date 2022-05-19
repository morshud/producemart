<template>
    <header class="mainHeader">
        <section class="sectionHeadSearch">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <form>
                            <input type="search" placeholder="Search for products, brands and categories.">
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </header>
</template>
<script>
export default {
  mounted(){
    window.scrollTo(0,0)
  }
}
</script>
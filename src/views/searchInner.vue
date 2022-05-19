<template>
    <header class="mainHeader">
        <form class="searchHeader">
            <input type="search" placeholder="Search for products, brands and categories.">
            <button type="submit"><i class="bi bi-search"></i></button>
        </form>
    </header>
</template>
<script>
export default {
  mounted(){
    window.scrollTo(0,0)
  }
}
</script>
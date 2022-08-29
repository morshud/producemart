<template>
    <header class="mainHeader">
        <form class="searchHeader" @submit.prevent="searchQuery">
            <input type="search" v-model="searchProduct" placeholder="Search for products">
            <button type="submit"><i class="bi bi-search"></i></button>
        </form>
    </header>
</template>
<style scoped src="@/assets/css/styleFrontend.css"></style>
<style scoped src="@/assets/css/bootstrap.css"></style>
<script>
export default {
  mounted(){
    window.scrollTo(0,0)
  },
  data(){
    return{
        searchProduct: "",
    }
  },
  methods: {
    searchQuery(){
        //console.log(this.searchProduct)
        this.$router.replace({
            name:'SearchResult',
            query:{
              keyword:this.searchProduct,
            }
        })
    }
  }
}
</script>
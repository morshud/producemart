<template>
  <div id="nav"></div>
  <router-view/>
  <ScrollTopArrow></ScrollTopArrow>
</template>
<script>
import ScrollTopArrow from '@/components/scrollArrow'
export default {
  components: {
    ScrollTopArrow
  }
}
</script>
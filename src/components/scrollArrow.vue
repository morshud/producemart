<template>
  <ScrollTopComponent>
      <a class="btn" href="#" style="font-size: 30px;">
        <i class="bi bi-file-arrow-up" style="color: green;font-size: 35px;"></i>
      </a>
  </ScrollTopComponent>
</template>

<script>
import ScrollTopComponent from './scrollTop'
export default {
  components: {
    ScrollTopComponent
  }
}
</script>

<style>
.btn {
    border-radius: 8px;
    background: #fff;
}
.btn:focus{
  outline: none !important;
  border: none !important;
}
</style>


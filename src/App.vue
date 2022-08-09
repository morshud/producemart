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
  },
  mounted(){
    let externalScriptCustom = document.createElement("script");
    externalScriptCustom.setAttribute(
      "src",
      "https://cdn.cookie-script.com/s/8fac723ac1e06ddd05614da6e047f113.js"
    );
    document.head.appendChild(externalScriptCustom);
  }
}
</script>
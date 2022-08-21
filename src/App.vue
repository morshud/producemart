<template>
  <div id="nav"></div>
  <router-view/>
  

</template>
<script>

export default {
  components: {
    
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
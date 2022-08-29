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
      "https://cdn.cookie-script.com/s/465e467041df20efd1029aa787374d5f.js"
    );
    document.head.appendChild(externalScriptCustom);
  }
}
</script>



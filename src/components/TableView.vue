<template>
  <div class="header-container" :style="{ width: width + '%' }">
    <HeaderUser />
    <InfoSection />
  </div>

  
</template>

<script setup>

import HeaderUser from './HeaderUser.vue';
import InfoSection from './InfoSection .vue';


const props = defineProps({
  width: { type: Number, default: 50 }
});

</script>
<style lang="scss" scoped>
  
</style>

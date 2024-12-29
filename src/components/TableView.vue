<template>
  <div id="tableView"
    class="header-container col-6 d-flex flex-column gap-2"
    :style="{ width: width + '%' }"
  >
    <HeaderUser />
    <div
      class="col-12 infosections overflow-auto flex-grow-1 d-flex flex-wrap justify-content-start gap-1 row-gap-2 p-2"
      style="height: 1px"   
      dir="rtl"   
    >
      <InfoSection />
      <Total/>
    </div>
  </div>
</template>

<script setup>
import HeaderUser from "./HeaderUser.vue";
import InfoSection from "./InfoSection .vue";
import Total from "./Total.vue";

const props = defineProps({
  width: { type: Number, default: 50 },
});
</script>
<style lang="scss" scoped>
#tableView {
  transition: ease all 400ms;
  background-color: #ffffff !important;
  .infosections{
    background-color: #e9e9e9;
    float: right;
  }
}
</style>

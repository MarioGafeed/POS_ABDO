<template>
  <div class="col-12 d-flex h-100 overflow-hidden">
    <Loader v-if="loaderStore.loaderIndex" />
    <!-- <Reziser /> -->
    <ProductsViews :width="ratioStore.ratioview.pwidth" class="bg-black" />
    <TableView :width="ratioStore.ratioview.twidth" />
    <SetteingsBtn />
  </div>
</template>

<script setup>
import Loader from "./components/Loader.vue";
import ProductsViews from "./components/ProductsViews.vue";

import SetteingsBtn from "./components/SetteingsBtn.vue";
import TableView from "./components/TableView.vue";
import { useloaderIndex } from "./stores/loaderIndex";
import { useRatioStore } from "./stores/ratio";

const loaderStore = useloaderIndex();

const ratioStore = useRatioStore();

setTimeout(() => {
  loaderStore.toggleLoader();
}, 500);
</script>

<style scoped lang="css">
.selectView {
  position: fixed;
  right: 0;
  top: 40vh;
  height: 200px;
}
</style>

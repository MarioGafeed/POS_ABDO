<template>
  <div class="col-12 d-flex flex-wrap h-100 overflow-hidden">
    <Loader v-if="loaderStore.loaderIndex" />
    <!-- <Reziser /> -->
    <ProductsViews
      :width="
        isPhoneStore.isPhone == true ? '100' : ratioStore.ratioview.pwidth
      "
    />
    <TableView
      :width="
        isPhoneStore.isPhone == true ? '100' : ratioStore.ratioview.twidth
      "
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Loader from "./components/Loader.vue";
import ProductsViews from "./components/ProductsViews.vue";

import TableView from "./components/TableView.vue";
import { useloaderIndex } from "./stores/loaderIndex";
import { useRatioStore } from "./stores/ratio";
import { useisPhoneStore } from "./stores/isPhone";

const loaderStore = useloaderIndex();

const ratioStore = useRatioStore();
const isPhoneStore = useisPhoneStore();

setTimeout(() => {
  loaderStore.toggleLoader();
}, 500);

window.addEventListener("resize", () => {
  if (window.innerWidth < 800) {
    isPhoneStore.changeIsPhone(true);
  } else {
    isPhoneStore.changeIsPhone(false);
  }
});
</script>

<style scoped lang="css">
.selectView {
  position: fixed;
  right: 0;
  top: 40vh;
  height: 200px;
}
</style>

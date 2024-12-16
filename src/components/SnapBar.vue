<template>
  <div
    class="snapHeader col-12 d-flex justify-content-center p-2 text-white"
    :onmouseenter="showContent"
  >
    <FontAwesomeIcon :icon="faAngleDown" />
  </div>
  <div
    class="col-12 d-flex align-items-start slide"
    :onmouseleave="showContent"
    style="height: 0"
  >
  
    <div v-if="slideIndex" class="filters col-12 d-flex flex-wrap justify-content-between p-3 row-gap-2">
      <button class="col-12 col-md-5 btn filter-btn text-white">الفئات</button>
      <button class="col-12 col-md-5 btn filter-btn text-white">المجموعات</button>
    </div>
  </div>
</template>
<script setup>
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";

const slideIndex = ref(false);

const showContent = () => {
  if (slideIndex.value == false) {
    document.querySelector(".slide").style.height = "70px";
    slideIndex.value = true;
  } else {
    document.querySelector(".slide").style.height = "0";
    slideIndex.value = false;
  }
};
</script>
<style lang="css" scoped>
.slide {
  transition: all ease 400ms;
}
.snapHeader{
  height: 1rem;
  background-color: #15372c !important;
}
.filters{
  background-color:#15372c !important;
}
.filter-btn{
  background-color: #008561;
  border-radius: 1rem;
  
}
</style>

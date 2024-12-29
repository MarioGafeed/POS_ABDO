<template>
  <div class="selectView animate__animated animate__fadeInUp">
    <button @click="ratioStore.changeView(50, 50)">50:50</button>
    <button @click="ratioStore.changeView(70, 30)">70:30</button>
    <button @click="ratioStore.changeView(30, 70)">30:70</button>
    <button @click="ratioStore.changeView(40, 60)">40:60</button>
  </div>
</template>
<script setup>
import { useRatioStore } from "../stores/ratio";
const ratioStore = useRatioStore();
</script>
<style scoped></style>

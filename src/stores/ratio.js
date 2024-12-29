import { defineStore } from "pinia";
import { ref } from "vue";

export const useRatioStore = defineStore("ratio", () => {
  const rationIndex = ref(false);
  const ratioview = ref({
    pwidth: 60,
    twidth: 40,
  });
  const openResizer = () => {
    rationIndex.value = true;
  };
  const closeResizer = () => {
    rationIndex.value = false;
  };
  const changeView = (pwidth, twidth) => {
    ratioview.value = { pwidth, twidth };
    rationIndex.value = false;
  };

  return {
    ratioview,
    changeView,
    openResizer,
    closeResizer,
    rationIndex,
  };
});

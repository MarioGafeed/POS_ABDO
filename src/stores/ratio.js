import { defineStore } from "pinia";
import { ref } from "vue";

export const useRatioStore = defineStore('ratio', () => {
    const ratioview = ref({
        pwidth: 60,
        twidth: 40,
    });

    const changeView = (pwidth, twidth) => {
        // ratioview.value = { pwidth: pwidth, twidth: twidth };
        ratioview.value = { pwidth, twidth };
    };

    return {
        ratioview,
        changeView,
    }
});
import { defineStore } from "pinia";
import { ref } from "vue";

export const useloaderIndex = defineStore("loaderIndex", () => {
    const loaderIndex = ref(true);
    const toggleLoader = () => {
        console.log("true");
        
        loaderIndex.value = !loaderIndex.value;
    }
    return {
        loaderIndex,
        toggleLoader,
    }
});
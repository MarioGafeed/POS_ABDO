import { defineStore } from "pinia";
import { ref } from "vue";

export const useisPhoneStore = defineStore('isPhone', ()=>{

 const isPhone = ref(false);

 const changeIsPhone = (newVal)=>{
    isPhone.value = newVal;
 }

 return {
    isPhone,
    changeIsPhone
 }
});
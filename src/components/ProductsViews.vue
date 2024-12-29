<template>
  <div
    id="productsView"
    class="col-6 d-flex flex-column gap-2 position-relative"
    :style="{ width: width + '%' }"
  >
    <SnapBar />
    <SetteingsBtn v-if="!isPhoneStore.isPhone" />

    <div class="col-12 gap-3 row-gap-3 p-3 mt-2">
      <input
        v-model="searchVal"
        class="search col-12"
        placeholder="بحث عن الصنف بالأسم أو الباركود"
      />
    </div>
    <div
      class="col-12 overflow-auto flex-grow-1 d-flex flex-wrap justify-content-end gap-3 row-gap-3 p-3"
      style="height: 1px"
      dir="rtl"
    >
      <ProductBtn
        v-for="product in filteredProducts"
        :key="product"
        :currency="'$'"
        :statusColor="'#f776a8'"
        :stockAvaialable="5000"
        :price="product.price"
        :name="product.name"
        imgUrl="https://btech.com/media/catalog/product/i/p/iphone_x_silver_front.jpg?width=560&height=560&store=en&image-type=image"
      />
    </div>
    <div class="col-12  ">
      <Pagination
        :total-pages="10"
        :max-visible-pages="4"
        @page-change="handlePageChange"
      />
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import ProductBtn from "./ProductBtn.vue";
import SnapBar from "./SnapBar.vue";
import SetteingsBtn from "./SetteingsBtn.vue";
import { useisPhoneStore } from "../stores/isPhone";
import Pagination from "./Pagination.vue";
const searchVal = ref();

const data = ref([
  { id: 1, name: " اعظم من التاريخ اعظم من التاريخ اعظم من التاريخ اعظم من التاريخ ", category: "laptop", price: 15000 },
  { id: 2, name: "hp zbook g6", category: "laptop", price: 12000 },
  { id: 3, name: "hp zbook g4", category: "laptop", price: 14000 },
  { id: 4, name: "dell precision", category: "workstation", price: 13000 },
  { id: 1, name: "hp zbook g5", category: "laptop", price: 15000 },
  { id: 2, name: "hp zbook g6", category: "laptop", price: 16000 },
  { id: 3, name: "hp zbook g4", category: "laptop", price: 18000 },
  { id: 4, name: "dell precision", category: "workstation", price: 20000 },
]);

const view = ref([]);
view.value = data.value;

const isPhoneStore = useisPhoneStore();

const filteredProducts = computed(() => {
  const searchTerm = (searchVal.value ?? "").trim().toLowerCase();
  if (searchTerm === "") return view.value;

  return view.value.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
  );
});

const props = defineProps({
  width: Number,
});
</script>
<style scope>
#productsView {
  transition: ease all 400ms;
  background-color: #15372c !important;
  padding-left: 1rem;
}

.search {
  border-radius: 5rem;
  background-color: #ffffff;
  text-align-last: right;
}

input {
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
}

/* width */
::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin: 10px !important;
}

/* Track */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 10px !important;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #898f8f;
  padding: 10px !important;
  margin: 10px !important;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #616a6b;
}
</style>

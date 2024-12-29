<template>
  <div class="col-12 table-container">
    <table class="table table-bordered text-center align-middle">
      <thead>
        <tr>
          <th
            v-for="(column, index) in fieldsToView.filter(
              (el) => el.index == true
            )"
            :key="column.name"
          >
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu">
                <div
                  class="col-12 d-flex gap-2"
                  @click="stopPro(index)"
                  v-for="(col, index) in fieldsToView"
                >
                  <label for="input1">{{ col.arName }}</label>
                  <input id="input1" type="checkbox" :checked="col.index" />
                </div>
              </ul>
            </div>
            {{ column.arName }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="col-12 d-flex gap-2 align-items-center">
              <FontAwesomeIcon :icon="faXmark" />
              <p class="m-0">1</p>
            </div>
          </td>

          <td>
            <div class="col-12 d-flex gap-2 align-items-center">
              <p class="m-0 col-12 text-center">Product 1</p>
            </div>
          </td>

          <td>
            <div class="d-flex gap-2 align-items-center" style="width: 150px">
              <input
                class="m-0 col-12 text-center"
                placeholder="price"
                value="125"
              />
            </div>
          </td>
          <td>
            <div class="col-12 d-flex gap-2 align-items-center">
              <button class="btn btn-success">+</button>
              <input class="text-center" placeholder="qty" value="125" />
              <button class="btn btn-danger">-</button>
            </div>
          </td>
          <td
            v-if="fieldsToView.find((el) => el.name == 'productDiscount').index"
          >
            <div class="col-12 d-flex gap-2 align-items-center">
              <p class="text-center m-0">2 %</p>
            </div>
          </td>
          <td v-if="fieldsToView.find((el) => el.name == 'productTotal').index">
            <div class="col-12 d-flex gap-2 align-items-center">
              <p class="text-center m-0">2 %</p>
            </div>
          </td>
          <td
            v-if="fieldsToView.find((el) => el.name == 'productActions').index"
          >
            <div class="col-12 d-flex gap-2 align-items-center">
              <p class="text-center m-0">2 %</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";
library.add(faXmark);

const stopPro = (index) => {
  fieldsToView.value[index].index = !fieldsToView.value[index].index;
};
const fieldsToView = ref([
  { name: "no", arName: "م", index: true },
  { name: "productName", arName: "اسم المنتج", index: true },
  { name: "productPrice", arName: "السعر", index: true },
  { name: "productQty", arName: "الكمية", index: true },
  { name: "productDiscount", arName: "الخصم", index: true },
  { name: "productTotal", arName: "الكلي", index: true },
  { name: "productActions", arName: "الإجراءات", index: true },
]);
</script>

<style scoped>
.table-container {
  width: 100%;
  height: 10vh;
  flex-grow: 1;
  overflow: auto;
  th,
  td,
  td {
    min-width: max-content;
    white-space: nowrap;
  }
}
</style>

<template>
  <div
    class="infoSectionBtn d-flex flex-column align-items-center rounded-3 bg-danger"
  >
    <div class="infoTitle p-2 d-flex justify-content-center align-items-center">
      <p class="m-0">العميل</p>
    </div>
    <div class="d-flex col-12 flex-wrap p-2 lowerPart">
      <select class="form-select form-select-sm" aria-label=".form-select-sm ">
        <option selected>اختر عميل</option>
        <option value="1">احمد نبيه</option>
      </select>
    </div>
    <div
      class="d-flex col-12 align-items-center justify-content-between"
    >
      <button id="infoBtn" class="btn btn-custom">إضافة عميل جديد +</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgUrl: String,
  name: String,
  stockAvaialable: Number,
  price: Number,
  currency: String,
  statusColor: String,
});
</script>

<style lang="scss" scoped>
$greenlight: #008560;
.infoSectionBtn {
  direction: rtl;
  width: calc((100% - 3rem) / 6);
  min-width: 150px;
  .infoTitle{
    color: #bdbdbd;
  }
  #infoBtn {
    &.btn-custom {
      width: 100%;
      background-color: $greenlight;
      color: white;
      border-radius: 0 0 0.0.5rem 0.5rem;
      border: none;
      outline: none;
      box-shadow: none !important;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: darken($greenlight, 10%);
      }

      &:focus {
        outline: none;
        box-shadow: none !important;
      }

      &:active {
        background-color: darken($greenlight, 15%);
        box-shadow: none !important;
      }
    }
  }
}
</style>
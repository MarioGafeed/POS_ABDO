<template>
  <div class="productBtn d-flex flex-column align-items-center rounded-3">
    <div
      class="imageContainer p-2 d-flex justify-content-center align-items-center"
    >
      <img :src="imgUrl" alt="" />
    </div>
    <div class="d-flex col-12 flex-wrap bg-white p-2 lowerPart">
      <p class="col-12 text-end">{{ name }}</p>
      <p class="col-12 text-end" id="available">
        المتاح: <span>{{ stockAvaialable }}</span>
      </p>
      <div class="d-flex col-12 align-items-center justify-content-between">
        <p class="m-0">السعر: {{ price }} | {{ currency }}</p>
        <span class="status" :style="{ backgroundColor: statusColor }"></span>
      </div>
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
.productBtn {
  min-width: 150px;
  width: calc((100% - 3rem) / 4);

  @media screen and (max-width: 767px) {
    width: calc((100% - 3rem) / 2);
  }

  @media screen and (min-width: 767px) and (max-width: 992px) {
    width: calc((100% - 3rem) / 3);
  }

  .imageContainer {
    background-color: $greenlight;
    border-radius: 0.5rem 0.5rem 0 0;
    height: 125px;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .lowerPart {
    border-radius: 0 0 0.5rem 0.5rem;
  }
  .status {
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
  }
  #available {
    background-color: #008560;
    border-radius: 0.5rem;
    color: white;
    padding: 0.5rem;
  }
}
</style>

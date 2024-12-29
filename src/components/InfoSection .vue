<template>
  <div class="infoSection d-flex flex-column align-items-center rounded-3">
    <div
      class="infoTitle col-12 p-2 d-flex justify-content-center align-items-center"
    >
      <p class="m-0 text-end">الحساب</p>
    </div>
    <div class="middlePart d-flex col-12 flex-wrap p-2 text-end">
      <select
        class="select text-center form-select form-select-sm"
        aria-label=".form-select-sm"
      >
        <option selected>اسم او فون</option>
        <option value="1">احمد نبيه</option>
      </select>
    </div>
    <div class="col-12 p-0">
      <button id="infoBtn" class="btn btn-custom action-event">
        <font-awesome-icon :icon="['fas', 'plus']" />
      </button>
    </div>
  </div>

  <div class="infoSection d-flex flex-column align-items-center rounded-3">
    <div
      class="infoTitle col-12 p-2 d-flex justify-content-center align-items-center"
    >
      <p class="m-0 text-end">الخزينة</p>
    </div>
    <div class="middlePart d-flex col-12 flex-wrap p-2 text-end">
      <select
        class="select text-center form-select form-select-sm"
        aria-label=".form-select-sm"
      >
        <option selected>الرئيسية</option>
        <option value="1">خزينة1</option>
      </select>
    </div>
    <div class="snapFooter col-12 p-0">
      <button class="pin-btn action-event">
        <font-awesome-icon :icon="['fas', 'thumbtack']" />
      </button>
    </div>
  </div>

  <div class="infoSection rounded-3">
    <div
      class="infoTitle col-12 p-2 d-flex justify-content-center align-items-center m-0"
    >
      <div class="d-flex align-items-center gap-1">
        <p class="m-0 text-end">فاتورة</p>
        <button class="print-btn border-0 bg-transparent p-0">
          <font-awesome-icon :icon="['fas', 'print']" class="receipt-icon" />
        </button>
      </div>
    </div>
    <div class="middlePart d-flex col-12 flex-wrap p-2 justify-content: center">
      <p class="receipt text-center">52</p>
    </div>
    <div
      class="snapFooter col-12 p-0 d-flex justify-content-center align-items-center"
    >
      <button class="receiptpin-btn action-event" id="left-round">&lt;</button>
      <button class="receiptpin-btn middle-round action-event">
        <font-awesome-icon :icon="['fas', 'search']" />
      </button>
      <button class="receiptpin-btn middle-round action-event">&lt;&lt;</button>
      <button class="receiptpin-btn action-event" id="right-round">
        &gt;&gt;
      </button>
    </div>
  </div>

  <div class="infoSection d-flex flex-column align-items-center rounded-3">
    <div
      class="infoTitle col-12 p-2 d-flex justify-content-center align-items-center"
    >
      <p class="m-0 text-end">المخزن</p>
    </div>
    <div class="middlePart d-flex col-12 flex-wrap p-2 text-end">
      <select
        class="select text-center form-select form-select-sm"
        aria-label=".form-select-sm"
      >
        <option selected>الرئيسي</option>
        <option value="1">مخزن1</option>
      </select>
    </div>
    <div class="snapFooter col-12 p-0">
      <button class="pin-btn action-event">
        <font-awesome-icon :icon="['fas', 'thumbtack']" />
      </button>
    </div>
  </div>

  <div class="infoSection d-flex flex-column align-items-center rounded-3">
    <div
      class="infoTitle col-12 p-2 d-flex justify-content-center align-items-center"
    >
      <p class="m-0 text-end">السداد</p>
    </div>
    <div class="middlePart d-flex col-12 flex-wrap p-2 text-end">
      <select
        class="select text-center form-select form-select-sm"
        aria-label=".form-select-sm"
      >
        <option selected>نقدي</option>
        <option value="1">اجل</option>
      </select>
    </div>
    <div class="snapFooter col-12 p-0">
      <button class="pin-btn action-event">
        <font-awesome-icon :icon="['fas', 'thumbtack']" />
      </button>
    </div>
  </div>

  <div class="infoSection d-flex flex-column align-items-center rounded-3">
    <div
      class="infoTitle col-12 p-2 d-flex justify-content-center align-items-center"
    >
      <p class="m-0 text-end">مندوب</p>
    </div>
    <div class="middlePart d-flex col-12 flex-wrap p-2 text-end">
      <select
        class="select text-center form-select form-select-sm"
        aria-label=".form-select-sm"
      >
        <option selected>مندوب1</option>
        <option value="1">مندوب2</option>
      </select>
    </div>
    <div class="snapFooter col-12 p-0">
      <button class="pin-btn action-event">
        <font-awesome-icon :icon="['fas', 'thumbtack']" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faThumbtack,
  faPlus,
  faSearch,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

library.add(faThumbtack, faPlus, faSearch, faPrint);
</script>

<style lang="scss" scoped>
$greenlight: #008560;
.infoSection {
  direction: ltr;
  height: 7.087rem;
  width: calc((100% - 3rem) / 6);
  min-width: 2.724rem;

  .print-btn {
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      transform: scale(1.25);
    }

    .receipt-icon {
      color: #bdbdbd;
      font-size: 1rem;
    }
  }

  .infoTitle {
    color: #bdbdbd;
    font-weight: bold;
    background-color: white;
    border-radius: 0.5rem 0.5rem 0 0;
    padding: 1rem;
  }
  .middlePart {
    background-color: white;
    justify-content: center;
  }
  .select {
    color: black;
    background-color: #efefef !important;
  }
  .receipt {
    font-weight: bold;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.25rem;
  }
  .snapFooter {
    background-color: white;
    border-radius: 0 0 0.5rem 0.5rem !important;
    display: flex;
    justify-content: flex-start !important;
    padding: 0 !important;

    .pin-btn {
      width: 30px;
      height: 30px;
      background-color: $greenlight;
      color: white;
      border: none;
      border-radius: 0 0.5rem 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .receiptpin-btn {
      width: 25%;
      height: 30px;
      background-color: $greenlight;
      color: white;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .middle-round {
      border-left: 1px solid #ebebeb;
    }
    #right-round {
      border-radius: 0 0 0.5rem 0;
      border-left: 1px solid #ebebeb;
    }
    #left-round {
      border-radius: 0 0 0 0.5rem;
      border-right: 1px solid #ebebeb;
    }
    .action-event {
      svg {
        font-size: 14px;
      }
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
  #infoBtn {
    &.btn-custom {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $greenlight;
      color: white;
      border-radius: 0 0 0.5rem 0.5rem;
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
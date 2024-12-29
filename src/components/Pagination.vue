<template>
    <div class="pagination-container">
      <div class="flex items-center gap-2">

        <button id="btn-prev"
          @click="handlePrevious"
          class="btn-pagination px-3 py-2 rounded-lg bg-emerald-600 disabled:opacity-50"
          :disabled="currentPage === 1"          
        >
          <span>&lt;</span>
        </button>
  
        <!-- Mario Page numbers -->
        <template v-for="page in displayedPages" :key="page">
          <button
            @click="handlePageChange(page)"
            :class="[
              'pageN px-4 py-2 rounded-lg',
              currentPage === page 
                ? 'bg-success text-light' 
                : 'border border-2 border-secondary'
            ]"
          >
            {{ page }}
          </button>
        </template>
  
        <!-- Next button -->
        <button id="btn-next"
          @click="handleNext"
          class="btn-pagination px-3 py-2 rounded-lg bg-emerald-600 text-white disabled:opacity-50"
          :disabled="currentPage === totalPages"
        >
          <span>&gt;</span>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue'
  
  const props = defineProps({
    totalPages: {
      type: Number,
      required: true,
      default: 1
    },
    maxVisiblePages: {
      type: Number,
      default: 4
    }
  })
  
  const emit = defineEmits(['page-change'])
  
  const currentPage = ref(1)
  
  const displayedPages = computed(() => {
    const pages = []
    const halfVisible = Math.floor(props.maxVisiblePages / 2)
    let start = Math.max(currentPage.value - halfVisible, 1)
    let end = Math.min(start + props.maxVisiblePages - 1, props.totalPages)
  
    if (end - start + 1 < props.maxVisiblePages) {
      start = Math.max(end - props.maxVisiblePages + 1, 1)
    }
  
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
  
    return pages
  })
  
  const handlePageChange = (page) => {
    currentPage.value = page
    emit('page-change', page)
  }
  
  const handlePrevious = () => {
    if (currentPage.value > 1) {
      handlePageChange(currentPage.value - 1)
    }
  }
  
  const handleNext = () => {
    if (currentPage.value < props.totalPages) {
      handlePageChange(currentPage.value + 1)
    }
  }
  </script>
  
  <style scoped>
  .pagination-container {
    display: flex;
    justify-content: center;
    padding: 1rem;
    border: none;
    
  }
  .btn-pagination{
    background-color: #008561;
    color: white;  
    border: none;
  }
  #btn-prev{
    border-radius: 0.5rem 0 0 0.5rem;
  }
  #btn-next{
    border-radius: 0 0.5rem 0.5rem 0 ;
  }
  .pageN{
    color: #008560;  
    
  }
  </style>
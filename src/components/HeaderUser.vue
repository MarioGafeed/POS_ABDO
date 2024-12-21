<template>
  <div class="header-content">
    <div class="header-icons">
      <button class="icon-button">
        <img
          :src="userProfileImage"
          alt="User Profile"
          class="user-profile-image"
        />
      </button>
      <div class="header-icons divider">|</div>
      <button class="icon-button">
        <img
          src="https://flagcdn.com/w320/eg.png"
          alt="Egyptian Flag"
          class="flag-icon"
        />
      </button>
      <div class="header-icons divider">|</div>
    </div>

    <div class="d-flex align-items-center flex-grow-1">
      <button class="icon-button flex-grow-1">
        <font-awesome-icon :icon="faPlus" class="interaction-icon" />
      </button>

      <button class="icon-button flex-grow-1">
        <font-awesome-icon :icon="faRectangleXmark" class="close-icon" />
      </button>
      <span class="time-text">{{ formattedData }} | {{ currentTime }}</span>
      <div class="header-icons divider">|</div>
    </div>

    <div class="d-flex align-items-center">
      <button class="icon-button">
        <FontAwesomeIcon :icon="faEnvelope" class="interaction-icon" />
      </button>
      <button class="header-icons icon-button">
        <FontAwesomeIcon :icon="faBell" class="interaction-icon" />
      </button>
      <div class="header-icons divider">|</div>
      <button class="header-icons icon-button">
        <FontAwesomeIcon :icon="faSignal" class="interaction-icon" />
      </button>
      <button class="header-icons icon-button" @click="toggleFullScreen">
        <FontAwesomeIcon :icon="faExpand" class="interaction-icon" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowDown,
  faEnvelope,
  faBell,
  faRectangleXmark,
  faSignal,
  faExpand,
  faCompress,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  userProfileImage: {
    type: String,
    default: "https://i.postimg.cc/TYXCLqMS/Mario-Icon.png",
  },
});

const currentTime = ref("");
const formattedData = ref();
const isMobileMenu = ref(false);
const isFullScreen = ref(false);

const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  // formattedData.value = now.toLocaleDateString();
  formattedData.value = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(now).replace(/\//g, ' ');
};

const toggleMobileMenu = () => {
  isMobileMenu.value = !isMobileMenu.value;
};

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
      isFullScreen.value = true;
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
      isFullScreen.value = true;
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
      isFullScreen.value = true;
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
      isFullScreen.value = true;
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      isFullScreen.value = false;
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
      isFullScreen.value = false;
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
      isFullScreen.value = false;
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
      isFullScreen.value = false;
    }
  }
};

onMounted(() => {
  updateTime();
  const timeInterval = setInterval(updateTime, 1000);

  document.addEventListener("fullscreenchange", () => {
    isFullScreen.value = !!document.fullscreenElement;
  });
  document.addEventListener("webkitfullscreenchange", () => {
    isFullScreen.value = !!document.webkitFullscreenElement;
  });
  document.addEventListener("mozfullscreenchange", () => {
    isFullScreen.value = !!document.mozFullScreenElement;
  });
  document.addEventListener("MSFullscreenChange", () => {
    isFullScreen.value = !!document.msFullscreenElement;
  });

  return () => {
    clearInterval(timeInterval);
    document.removeEventListener("fullscreenchange", () => {});
    document.removeEventListener("webkitfullscreenchange", () => {});
    document.removeEventListener("mozfullscreenchange", () => {});
    document.removeEventListener("MSFullscreenChange", () => {});
  };
});
</script>

<style lang="scss" scoped>
.header-content {
  display: flex;
  justify-content: space-between;
  padding: 5px 1rem;
}



.user-profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
}

.header-icons {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.flag-icon {
  width: 20px;
  height: 15px;
}
.interaction-icon,
.close-icon {
  margin: 0 0.25rem;
  color: red;
  widows: 60px;
  height: 25px;
}
.interaction-icon{
  color: black;
}

.time-text {
  white-space: nowrap;
  margin-left: auto;
  background-color: #efefef;
  border-radius: 0.75rem;
  flex-grow: 1;
  text-align: center;
  padding: 5px;
  @media (max-width: 700px) {
    display: none; 
  }
}

.divider {
  color: #ccc;
  margin: 0 0.5rem;
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;  
}

@media (max-width: 480px) {
  .header-icons {
    display: none;
  }

  .mobile-menu {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>


import { createApp } from "vue";

import "animate.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";

const pinia = createPinia();
createApp(App).use(pinia).mount("#app");

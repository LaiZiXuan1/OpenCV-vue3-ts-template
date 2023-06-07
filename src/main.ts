import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import OpenCVPlugin from "./plugins/opencv";

const app = createApp(App);

app.use(OpenCVPlugin);
app.use(router);

app.mount("#app");

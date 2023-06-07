import { App } from "vue";

let cv = undefined;
export default {
  install: async (app: App) => {
    const loadOpenCV = new Promise<void>((resolve) => {
      const script = document.createElement("script");
      script.async = true;
      script.src = "/opencv.js"; // 根据实际情况调整路径
      script.onload = () => {
        resolve();
      };
      document.head.appendChild(script);
    });

    await loadOpenCV;
    // app.provide("cv", window.cv);
    cv = window.cv;
  },
};
export { cv };

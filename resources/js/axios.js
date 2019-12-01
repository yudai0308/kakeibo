import axiosBase from "axios"

const host = window.location.hostname;
const url = (host === "localhosto") ? "http://localhost:8000" : "http://kakeibosharing-env.mdnhj7hqvm.ap-northeast-1.elasticbeanstalk.com/";
export const axios = axiosBase.create({
  // baseURL: process.env.MIX_APP_URL,
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
  },
  responseType: "json",
})

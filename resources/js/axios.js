import axiosBase from "axios"

export const axios = axiosBase.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
  },
  responseType: "json",
})

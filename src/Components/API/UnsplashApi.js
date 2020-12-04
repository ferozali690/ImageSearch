import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID CQWe6gHWSFA9Q9rg1_gNRHcNFu_dZx5VOB6J-PtyRqg"
  }
});

import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '96ed260db6c44822abcb35a853b5f2d0'
  }
})
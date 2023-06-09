import { reactive } from "vue";

export const store = reactive({
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=d9271e7d4a27420eb7f324c1840b0ffe&query=",
    filmList: [],
    searchText: "",

    apiSerieUrl: "https://api.themoviedb.org/3/search/tv?api_key=d9271e7d4a27420eb7f324c1840b0ffe&query=",
    serieList: [],

    apiImgUrl: "https://image.tmdb.org/t/p/w300/",
})
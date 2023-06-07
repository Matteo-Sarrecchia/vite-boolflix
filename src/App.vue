<script>
import { store } from "./store"
import axios from "axios"
import AppSearch from './components/AppSearch.vue'
import AppCardFilm from './components/AppCardFilm.vue'


export default {
  components: {
    AppSearch,
    AppCardFilm
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCardsFilm() {

      let myUrl = store.apiURL;

      if (store.searchText !== "") {
        myUrl += store.searchText
        console.log(myUrl)
        console.log(store.searchText);
      }

      axios.get(myUrl)
        .then(res => {
          store.filmList = res.data.results
          console.log(res.data.results);
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  created() {
    this.getCardsFilm();
  }
}
</script>

<template>
  <AppSearch @search="getCardsFilm" />
  <AppCardFilm />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>

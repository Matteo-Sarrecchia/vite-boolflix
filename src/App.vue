<script>
import { store } from "./store"
import axios from "axios"
import AppSearch from './components/AppSearch.vue'
import AppCardFilm from './components/AppCardFilm.vue'
import AppCardSerie from './components/AppCardSerie.vue'



export default {
  components: {
    AppSearch,
    AppCardFilm,
    AppCardSerie
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCards() {

      //FILM
      // DEFINISCO VARIABILE ASSOCIATA A API FILM
      let myUrl = store.apiURL;

      // CONDIZIONE
      if (store.searchText !== "") {
        myUrl += store.searchText
      }

      // CHIAMATA AXIOS API FILM
      axios.get(myUrl)
        .then(res => {
          store.filmList = res.data.results
        })
        .catch(err => {
          console.log(err)
        })


      // SERIE
      // DEFINISCO VARIABILE ASSOCIATA A API SERIE
      let myUrlSerie = store.apiSerieUrl;

      // CONDIZIONE
      if (store.searchText !== "") {
        myUrlSerie += store.searchText
      }

      // CHIAMATA AXIOS API SERIE
      axios.get(myUrlSerie)
        .then(res => {
          store.serieList = res.data.results
        })
        .catch(err => {
          console.log(err)
        })
    },

  },
  created() {
    this.getCards();
  }
}
</script>

<template>
  <AppSearch @search="getCards" />
  <AppCardFilm />
  <AppCardSerie />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>

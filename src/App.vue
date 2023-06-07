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

      axios.get(store.apiURL)
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
  <AppSearch />
  <AppCardFilm />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>

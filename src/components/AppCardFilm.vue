<script>
import { store } from '../store';
import AppCardFilm from './AppCardFilm.vue'
export default {
    name: "AppCardFilm",
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <section class="cardFilm">
        <div class="card" v-for="elm in store.filmList">
            <img :src="elm.poster_path" alt="">
        </div>
        <!-- {{ store.filmList }} -->
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.cardFilm {
    min-height: 50px;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;

    .card {
        width: 300px;
        height: 300px;
        border: 1px solid black;
        margin: 20px;
    }
}
</style>

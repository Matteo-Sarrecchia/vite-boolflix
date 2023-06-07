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
        <div class="card" v-for="(elm, index) in store.filmList">
            <!-- <img :src="elm.poster_path" alt=""> -->
            <div>{{ elm.title }}</div>
            <div >{{ elm.original_title }}</div>
            <div>{{ elm.original_language }}</div>
            <div>{{ elm.vote_average }}</div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.cardFilm {
    min-height: 50px;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .card {
        width: 250px;
        height: 250px;
        border: 1px solid black;
        margin: 20px;
        background-color: black;
        color: white;
        text-align: center;

        div {
            padding: 10px;
        }
    }
}
</style>

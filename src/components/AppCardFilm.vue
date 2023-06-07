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
    <section v-if="store.filmList.length > 0" class="section-cardFilm">
        <div class="film">
            FILM LIST
        </div>

        <!-- contenitore cards -->
        <div class="container-cards">
            <div class="card" v-for="(elm, index) in store.filmList">
                <!-- <img :src="elm.poster_path" alt=""> -->
                <div>{{ elm.title }}</div>
                <div>{{ elm.original_title }}</div>
                <div v-if="elm.original_language == 'en'">
                    <img src="../../public/engl.jpg" alt="">
                </div>
                <div v-else-if="elm.original_language == 'it'">
                    <img src="../../public/ita.svg" alt="">
                </div>
                <div v-else-if="elm.original_language == 'es'">
                    <img src="../../public/spain.jpg" alt="">
                </div>
                <div v-else-if="elm.original_language == 'fr'">
                    <img src="../../public/france.png" alt="">
                </div>
                <div v-else>
                    {{ elm.original_language }}
                </div>
                <div>{{ elm.vote_average }}</div>
                <div class="text">
                    {{ elm.overview }}
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.film {
    width: 90%;
    margin: 20px auto;
    text-align: center;
    background-color: black;
    color: white;
    border: 1px solid white;
    border-radius: 20px;
    font-size: 25px;
}

.container-cards {
    min-height: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .card {
        width: 250px;
        height: 300px;
        border: 1px solid black;
        margin: 20px;
        background-color: black;
        color: white;
        text-align: center;
        font-size: 14px;
        border-radius: 20px;

        div {
            padding: 5px 10px;

            img {
                width: 35px;
            }
        }

        .text {
            border: 1px solid white;
            padding: 10px;
            margin: 10px;
            border-radius: 20px;
            overflow: auto;
            height: 100%;
        }
    }
}
</style>

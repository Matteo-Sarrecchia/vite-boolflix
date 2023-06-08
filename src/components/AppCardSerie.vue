<script>
import { store } from '../store';
import AppCardSerie from './AppCardSerie.vue'
export default {
    name: "AppCardSerie",
    data() {
        return {
            store
        }
    },
    methods: {
        numberExcess(n) {
            const star = Math.ceil(n / 2)
            return star
        }
    }
}

</script>

<template>
    <section v-if="store.serieList.length > 0" class="section-cardFilm">
        <div class="serie">
            SERIE LIST
        </div>

        <!-- contenitore cards -->
        <div class="container-cards">
            <!-- v-for per generare le card -->

            <div class="card" v-for="(elm, index) in store.serieList">
                <img class="fotoCopertina" :src="store.apiImgUrl + elm.poster_path" alt="">

                <!-- testo card -->
                <div class="cardText">
                    <div>{{ elm.name }}</div>
                    <div>{{ elm.original_name }}</div>
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
                    <i v-for="count in 5" class="fa-solid fa-star"
                        :class="numberExcess(elm.vote_average) >= count ? 'active' : ''">
                    </i>

                    <!-- trama -->
                    <div class="description">
                        {{ elm.overview }}
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.active {
    color: orange;
}

.serie {
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
        width: 300px;
        min-height: 350px;
        border: 1px solid black;
        margin: 20px;
        background-color: black;
        color: white;
        text-align: center;
        font-size: 14px;
        border-radius: 20px;

        .fotoCopertina {
            border-radius: 20px;
        }

        .cardText {
            // display: none;

            div {
                padding: 5px 10px;

                img {
                    width: 35px;
                }
            }

            .description {
                border: 1px solid white;
                padding: 10px;
                margin: 10px;
                border-radius: 20px;
                overflow: auto;
                height: 200px;
            }
        }
    }
}
</style>

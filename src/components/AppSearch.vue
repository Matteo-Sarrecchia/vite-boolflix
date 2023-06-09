<script>
import { store } from '../store';

export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <section class="search">
        <!-- logo -->
        <div id="logo"> BOOLFLIX</div>

        <!-- search input -->
        <div id="search-input">
            <input v-model="store.searchText" @keyup.enter="$emit('search')" type="text" placeholder="Search film">
            <button @click="$emit('search')" class="btn btn-primary">
                Search
            </button>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.search {
    background-color: #000000;
    min-height: 50px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        width: 30%;
    }

    #logo {
        color: red;
        font-size: 30px;
        border: 1px solid red;
        width: 15%;
        text-align: center;
    }

    #search-input {
        display: flex;
        align-items: center;
        justify-content: end;

        input {
            margin-right: 30px;
        }
    }

}
</style>

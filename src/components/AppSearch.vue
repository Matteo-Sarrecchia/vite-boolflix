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
        <input v-model="store.searchText" @keyup.enter="$emit('search')" type="text" placeholder="Search film">
        <button @click="$emit('search')" class="btn btn-primary">
            Search
        </button>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.search {
    background-color: #D48F38;
    border: 1px solid black;
    min-height: 50px;
    padding: 20px;
    display: flex;

    button {
        margin-left: 20px;
    }
}
</style>

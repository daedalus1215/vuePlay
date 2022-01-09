<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters and Mixins</h1>
        <p>{{ text | toUppercase }}</p>
        <hr />
        <input v-model="filterText" />
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
      </div>
    </div>
    <List />
  </div>
</template>

<script>
import { fruitMixin } from './fruitMixin';
import List from "./List.vue";

export default {
  components: { List },
  mixins: [fruitMixin]
};
</script>

<style>
</style>

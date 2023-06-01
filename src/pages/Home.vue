<template>
  <div class="card_product_wrapp">
    <h1>Список товара</h1>
    <ul class="card_product_list">
      <li v-for="(entry, index) in products" :key="index">
        <p>{{ entry.name }}</p>
        <img :src="entry.image" alt="">
        <span>{{ entry.price }}</span>
         <button><a href="https://naturepro.net/simplecheckout/">В корзину</a></button>

      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get('https://opt.naturepro.net/index.php?route=api/app/getListProduct')
        .then(response => {
          this.products = response.data.products;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
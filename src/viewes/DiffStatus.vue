<template>
  <div>
    <div class="symbol-type">Валюта = {{ currentSymbol }}</div>
    <div class="wrapper">
      <select class="select" v-model="currentSymbol">
        <option
            v-for="(item, index) in options"
            :key="index"
            class="select__option"
        >{{ item }}</option>
      </select>
      <ul class="list">
        <li class="list__content"></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "DiffStatus",
  data: () => ({
    options: ["BTCUSDT", "BNBBTC", "ETHBTC"],
    currentSymbol: "BTCUSDT"
  }),
  watch: {
    currentSymbol: function (symbol) {
      this.$bus.$emit('symbol', symbol);
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0 0 0 0;
}
.list {
  list-style-type: none;
}
.select {
  width: 300px;
  height: 50px;
  margin: 0 auto;
  background-color: #021a0e;
  color: #ffffff;
  text-align: center;
}
.select__option {
  width: 150px;
  min-height: 3em !important;
  background-color: #021a0e;
  color: #ffffff;
  text-align: center;
}
.symbol-type {
  text-align: center;
  width: 100%;
  background-color: #021a0e;
  color: #ffffff;
}
</style>

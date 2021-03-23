<template>
  <div>
    <div class="symbol-type">Валюта = {{ symbol }}</div>
    <div class="wrapper">
      <tableComp :items="stack.bids">Bids</tableComp>
      <tableComp :items="stack.asks">Asks</tableComp>
    </div>
  </div>
</template>

<script>
import tableComp from "./TableComp.vue";


export default {
  name: "stackState",
  components: { tableComp },
  data: () => ({
    stack: {
      bids: [],
      asks: []
    },
    symbol: "BTCUSDT",
    ws : null
  }),
  async created() {
    this.snapshot();
    this.wsSubscribe();
    this.$bus.$on('symbol', symbol => {
      this.symbol = symbol;
      this.ws.close();
      this.wsSubscribe();
    });

  },
  methods : {
    async snapshot () {
      let stack = await this.$sdk.get(this.symbol);
      stack.bids = stack.bids.reverse();
      stack.asks = stack.asks.reverse();
      this.stack = stack;
    },
    wsSubscribe () {
      this.ws = this.$sdk.subscribe(this.symbol);
      this.ws.onmessage = async event => {
        let data = JSON.parse(event.data);
        let [asksAdd, bidsAdd] = [
          data.a.filter(item => item[1] != 0),
          data.b.filter(item => item[1] != 0)
        ];
        asksAdd.reverse();
        bidsAdd.reverse();
        this.stack.asks.splice(this.stack.asks.length - asksAdd.length, asksAdd.length);
        this.stack.bids.splice(this.stack.bids.length - bidsAdd.length, bidsAdd.length);
        this.stack.asks = [...asksAdd, ...this.stack.asks, ];
        this.stack.bids = [...bidsAdd, ...this.stack.bids, ];
      };
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin: 0;
  /*padding: 10px 0 0 0;*/
}
.symbol-type {
  text-align: center;
  width: 100%;
  background-color: #021a0e;
  color: #ffffff;
}


</style>

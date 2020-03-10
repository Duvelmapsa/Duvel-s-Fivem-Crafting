<template>
  <div id="app">
    <div class="craftingWrapper">

      <div class="left-column">
        <CraftingEQ />
        <UsedIngredients />
      </div>

      <div class="right-column">
        <KnownRecipes />
        <Queue />
      </div>
      
    </div>
  </div>
</template>

<script>
import CraftingEQ from "./components/CraftingEQ";
import UsedIngredients from "./components/UsedIngredients";
import KnownRecipes from "./components/KnownRecipes";
import Queue from "./components/Queue";

import store from './store/main.js'

export default {
  name: "App",
  store,
  components: {
    CraftingEQ,
    UsedIngredients,
    KnownRecipes,
    Queue
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
}

ul li {
  cursor: pointer;
}

.left-column {
  width: 650px;
  margin: 0 15px;
}

.right-column {
  width: 350px;
  margin: 0 15px;
}

.craftingWrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-family: Arial;
  display: flex;
}
</style>

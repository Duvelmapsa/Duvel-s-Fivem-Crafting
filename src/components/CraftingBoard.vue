<template>
  <div class="craftingWrapper__board">
    <ul v-if="eq.length">
      <CraftingItem v-for="item in eq" :key="item.name" :name="item.name" :count="item.count" />
    </ul>
    <div v-else class="noIngredients">Nie posiadasz składników do tworzenia.</div>
  </div>
</template>

<script>

import CraftingItem from './CraftingItem'

export default {
  name: "CraftingBoard",
  props: ['eq'],
  components: {
    CraftingItem
  }
};
</script>

<style scoped>
.craftingWrapper__board {
  color: #fff;
}

.craftingWrapper__board ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  margin: 0 -5px;
}

.noIngredients {
  color: #fff;
  background: rgba(0,0,0,0.5);
  padding: 10px;
  /* text-transform: uppercase; */
  font-weight: 600;
}

</style>
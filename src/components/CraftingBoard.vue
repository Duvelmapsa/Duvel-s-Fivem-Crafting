<template>
  <div class="craftingWrapper__board">
    <draggable
      class="eq_drag_list"
      :group="{name: 'people', pull:'clone', put: false}"
      :list='eq'

    >
      <CraftingItem v-for="item in eq" :key="item.name" :name="item.name" :count="item.count" />
    </draggable>
  </div>
</template>

<script>
import CraftingItem from "./CraftingItem";
import draggable from "vuedraggable";

export default {
  name: "CraftingBoard",
  props: ["eq"],
  components: {
    CraftingItem,
    draggable
  }
};
</script>

<style scoped>
.craftingWrapper__board {
  color: #fff;
  background: rgba(0,0,0, 0.2)
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
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  /* text-transform: uppercase; */
  font-weight: 600;
}

.eq_drag_list {
  display: flex;
  margin: 0 -5px;
  min-height: 300px;
  flex-flow: row wrap;
}
</style>
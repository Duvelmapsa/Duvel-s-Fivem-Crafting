<template>
  <li>
    <div class="craftingWrapper__name">{{name}}</div>
    <div class="craftingWrapper__count">x{{count}}</div>
  </li>
</template>

<script>
export default {
  name: 'CraftingItem',
  props: ['name', 'count']
};
</script>

<style scoped>

.craftingWrapper__board ul li {
  display: block;
  justify-content: space-between;
  padding: 10px;
  height: 100px;
  width: 100px;
  background: rgba(0, 0, 0, 0.5);
  margin: 0 5px;
}

</style>
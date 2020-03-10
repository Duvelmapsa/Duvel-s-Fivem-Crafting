<template>
  <div class="testBlock" v-if="count > 0">
    <div class="craftingWrapper__name">{{name}}</div>
    <div class="craftingWrapper__count">x{{count}}</div>
  </div>
</template>

<script>
export default {
  name: 'CraftingItem',
  props: ['name', 'count'],
  components: {
  }
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

.testBlock {
    display: flex;
    background: rgba(0,0,0,0.5);
    width: 100px;
    height: 100px;
    flex-flow: column;
    justify-content: center;
    margin: 0 5px;
}

</style>
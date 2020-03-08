<template>
  <li>
    <div class="craftingWrapper__name">{{name}}</div>
    <div class="craftingWrapper__ingredients">{{ingredients}}</div>
  </li>
</template>

<script>
export default {
  name: "KnownRecipe",
  props: ["name", "ingredients"]
};
</script>

<style scoped>
.craftingWrapper__knownList ul li {
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: left;
}

.craftingWrapper__ingredients {
  font-size: 10px;
  font-style: italic;
}
</style>
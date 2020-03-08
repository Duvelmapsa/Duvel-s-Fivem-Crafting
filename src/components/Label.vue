<template>
  <div class="craftingWrapper__label">{{text}}</div>
</template>

<script>
export default {
  name: "Label",
  props: ["text"]
};
</script>

<style scoped>
.craftingWrapper__label {
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  margin-bottom: 10px;
}
</style>
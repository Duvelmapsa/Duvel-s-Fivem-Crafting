<template>
  <div class="craftingWrapper__eq">
    <Label text="Dostępne materiały" />
    <CraftingBoard :eq="eq"/>
  </div>
</template>

<script>

import Label from './Label.vue'
import CraftingBoard from './CraftingBoard'

const DUMMY_EQ = [
  {name: 'Test', count: '2'}
]

export default {
  name: "CraftingEQ",
  components: {
    Label,
    CraftingBoard
  },
  data: function () {
    return {
      eq: DUMMY_EQ
    }
  }
};
</script>

<style scoped>
.craftingWrapper__eq {
  min-width: 100%;
  display: inline-block;
  margin-bottom: 20px;
}
</style>
<template>
  <div class="craftingWrapper__eq">
    <Label text="Dostępne materiały" />
    <CraftingBoard :eq="eq"/>
  </div>
</template>

<script>

import Label from './Label.vue'
import CraftingBoard from './CraftingBoard'
import { mapState } from 'vuex'

// const DUMMY_EQ = [
//   {name: 'Test', count: '2'},
//   {name: 'Test2', count: '3'},
//   {name: 'Test3', count: '4'}
// ]

export default {
  name: "CraftingEQ",
  components: {
    Label,
    CraftingBoard
  },
  computed: {
    ...mapState([
      'eq'
    ])
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
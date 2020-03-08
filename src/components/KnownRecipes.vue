<template>
  <div class="craftingWrapper__knownRecipes">
    <!-- <div class="craftingWrapper__label">Poznane przepisy</div> -->
    <Label text="Poznane przepisy" />
    <div class="craftingWrapper__knownList">
      <ul v-if="known_recipes.length">
        <KnownRecipe
          v-for="item in known_recipes"
          :key="item.name"
          :name="item.name"
          :ingredients="item.ingredients"
        />
      </ul>
      <div class="noRecipesKnown" v-else>Nie znasz żadnych przepisów</div>
    </div>
  </div>
</template>

<script>
import Label from "./Label";
import KnownRecipe from "./KnownRecipe";

const DUMMY_DATA = [{ name: "Nasiona Marihuany", ingredients: "Topy itp." }];

export default {
  name: "KnownRecipes",
  components: {
    Label,
    KnownRecipe
  },
  data: function() {
    return {
      known_recipes: DUMMY_DATA
    };
  }
};
</script>

<style scoped>
.craftingWrapper__knownRecipes {
  display: block;
}
</style>
<template>
  <div class="craftingWrapper__craftBox">
    <Label text="Użyte składniki" />
    <div class="craftingWrapper__usedIngr">
      <div class="craftingWrapper__usedIngr_subwrapper">
        <draggable class="used_drag_list" group="people" @change="log"></draggable>
      </div>
      <div class="craftingWrapper__button">
        <a href="#" class="craftButton">Wytwórz</a>
      </div>
    </div>
  </div>
</template>

<script>
import Label from "./Label";
import draggable from "vuedraggable";

export default {
  name: "UsedIngredients",
  components: {
    Label,
    draggable
  }
};
</script>

<style scoped>
.craftingWrapper__usedIngr ul li {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px;
  display: inline-flex;
  margin: 0 5px;
  min-width: 100px;
  height: 100px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.craftingWrapper__usedIngr_subwrapper {
  background: rgba(0,0,0,0.2);
  color: #fff;
}

.craftingWrapper__usedIngr ul {
  display: flex;
  margin: 0 -5px;
}

a.craftButton {
  padding: 10px;
  width: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.5);
  margin-top: 10px;
}

.testBlock {
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  width: 100px;
  height: 100px;
  flex-flow: column;
  justify-content: center;
  margin: 0 5px;
  color: #fff;
}

.used_drag_list {
  display: flex;
  margin: 0 -5px;
  min-height: 100px;
}
</style>
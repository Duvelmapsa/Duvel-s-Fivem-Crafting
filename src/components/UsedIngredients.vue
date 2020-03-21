<template>
  <div class="craftingWrapper__craftBox">
    <Label text="Użyte składniki" />
    <div class="craftingWrapper__usedIngr">
      <div class="craftingWrapper__usedIngr_subwrapper">
        <draggable class="used_drag_list" :list='ingredients' group="people">
          <div class="testBlock" @click="removeIngredient(index)" v-for="(item, index) in ingredients" :key="index">
            <div class="craftingWrapper__name">{{item.name}}</div>
            <div class="craftingWrapper__count">x{{item.count}}</div>
          </div>
        </draggable>
      </div>
      <div class="craftingWrapper__button">
        <a href="#" class="craftButton" @click.prevent="craft">Wytwórz</a>
      </div>
    </div>
  </div>
</template>

<script>
import Label from "./Label";
import draggable from "vuedraggable";
import { mapState, mapGetters, mapMutations } from 'vuex'

const patterns = {
  'mlotek': ['wood', 'metal', 'plastic'],
  'bezpiecznik': ['metal', 'ceramika', 'piasek']
}

export default {
  name: "UsedIngredients",
  components: {
    Label,
    draggable
  },
  data() {
    return {
      used: [],
      canBeCreated: ''
    }
  },
  computed: {
    ...mapState([
      'ingredients'
    ]),
    ...mapGetters([
      'newIngredients'
    ])
  },
  watch: {
    newIngredients: function (e) {
      this.used = [...e]
    },
    used: function (e) {
      console.log('used sie zmienilo')
      let found = null;
      const test = [];
      e.map(item => {
        test.push(item.item);
      })

      Object.keys(patterns).forEach((key) => {
        found = test.filter((elem) => {
          return patterns[key].indexOf(elem) > -1;
        }).length == patterns[key].length

        if (found === true && test.length === patterns[key].length) {
          console.log('możliwy do wytworzenia:', key)
          this.canBeCreated = key
          this.addItem();
        } else {
          this.removeItem();
        }
      })
      console.log(found);
    }
  },
  methods: {
    ...mapMutations({
      setCanBeCreated: 'CAN_BE_CREATED_ITEM',
      setQueue: 'QUEUE_ADD',
      resetIngredients: 'RESET_INGREDIENTS',
      remove: 'REMOVE_INGREDIENTS'
    }),
    addItem: function () {
      this.setCanBeCreated(this.canBeCreated);
    },
    removeItem: function () {
      this.setCanBeCreated('');
    },
    queueAdd: function (item) {
      this.setQueue(item)
    },
    craft: function () {
      if (this.canBeCreated != '') {
        this.queueAdd(this.canBeCreated);
        this.resetIngredients(this.used)
        this.used = [];
      } else {
        console.log('Nie można nic wytworzyć');
      }
    },
    removeIngredient: function (index) {
      this.remove(index)
    }
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
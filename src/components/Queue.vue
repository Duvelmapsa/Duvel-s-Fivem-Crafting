<template>
  <div class="craftingWrapper__queue">
    <Label text="Kolejka" />
    <div class="craftingWrapper__queueList">
      <QueueList :list="queue"/>
    </div>
  </div>
</template>

<script>

// const DUMMY_QUEUE = [
//   {'name' : 'Testowe'}
// ]

import { mapState } from 'vuex'

import QueueList from './QueueList'
import Label from './Label'
export default {
  name: "Queue",
  components: {
    Label,
    QueueList
  },
  // data: function () {
  //   return {
  //     queue_items: DUMMY_QUEUE
  //   }
  // }
  computed: {
    ...mapState(['queue'])
  }
};
</script>

<style scoped>
</style>
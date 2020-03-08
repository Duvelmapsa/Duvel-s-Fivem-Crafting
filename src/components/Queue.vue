<template>
  <div class="craftingWrapper__queue">
    <Label text="Kolejka" />
    <div class="craftingWrapper__queueList">
      <QueueList v-bind:list="queue_items"/>
    </div>
  </div>
</template>

<script>

const DUMMY_QUEUE = [
  {'name' : 'Testowe'}
]

import QueueList from './QueueList'
import Label from './Label'
export default {
  name: "Queue",
  components: {
    Label,
    QueueList
  },
  data: function () {
    return {
      queue_items: DUMMY_QUEUE
    }
  }
};
</script>

<style scoped>
</style>
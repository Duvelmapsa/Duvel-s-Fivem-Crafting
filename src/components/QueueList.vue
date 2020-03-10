<template>
  <ul v-if="list.length > 0">
      <QueueItem v-for="item in list" :key="item.name" :name="item"/>
  </ul>
  <ul v-else>
    <QueueItem name='Pusta'/>
  </ul>
</template>

<script>
import QueueItem from './QueueItem'
export default {
name: 'QueueList',
props: ['list'],
components: {
  QueueItem
},
beforeMount: function () {
  console.log(this.list);
  console.log(this.list.length)
} 
}
</script>

<style scoped>

</style>
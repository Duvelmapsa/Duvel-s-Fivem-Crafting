<template>
  <ul v-if="list.length">
      <QueueItem v-for="item in list" :key="item.name" :name="item.name"/>
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
} 
}
</script>

<style scoped>

</style>
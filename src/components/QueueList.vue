<template>
  <ul v-if="list.length > 0">
      <QueueItem v-for="(item, index) in list" :index="index" :key="item.name" :name="item"/>
  </ul>
</template>

<script>
import QueueItem from './QueueItem'
export default {
name: 'QueueList',
props: ['list'],
components: {
  QueueItem
}
}
</script>

<style scoped>

</style>
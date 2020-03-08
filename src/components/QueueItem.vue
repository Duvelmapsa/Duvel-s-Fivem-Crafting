<template>
  <li>{{name}}</li>
</template>

<script>
export default {
  name: 'QueueItem',
  props: ['name']
};
</script>

<style scoped>

.craftingWrapper__queueList ul li{
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    background: rgba(0,0,0,0.5);
    color: #fff;
}

</style>
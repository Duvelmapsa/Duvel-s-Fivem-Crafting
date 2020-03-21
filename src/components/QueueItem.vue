<template>
  <li>{{name}} <span></span></li>
</template>

<script>

const timers = {
  mlotek: 10,
  bezpiecznik: 25,
}

console.log(timers); 

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
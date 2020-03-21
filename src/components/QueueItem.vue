<template>
  <li v-if="visible">{{name}} {{index}} <span>{{timeToCraft}}</span></li>
</template>

<script>

const timers = {
  mlotek: 10,
  bezpiecznik: 25,
}

let cnt = [];

console.log(timers); 

export default {
  name: 'QueueItem',
  props: ['name', 'index'],
  data: function () {
    return {
      visible: true,
      timeToCraft: null
    }
  },
  created: function () {
    this.timer(this.name, this.index);
  },
  methods: {
    timer: function (name, index){ 
      let timer = timers[name];
      this.timeToCraft = timer;
      cnt[index] = setInterval(() => {
        timer--;
        if (timer < 0) {
          console.log('wytworzono', name, index);
          this.visible = false;
          clearInterval(cnt[index]);
        } else {
          console.log(name, ':', timer);
          this.timeToCraft = timer;
        }
      }, 1000);
    }
  }
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
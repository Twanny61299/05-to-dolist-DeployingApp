<template>
    <div class="card" style="width: 24rem; margin:auto;">
    <div class="card-header">
      Tasks
    </div>
   <TaskCard v-for="task in tasks" :key="task.id" :task="task"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskCard from '@/components/TaskCard.vue'
import TasksService from '@/services/TasksService.js'

export default {
  name: 'Home',
  components: {
    TaskCard
  },
  data () {
    return {
      tasks: null
    }
  },
  created () {
    TasksService.getTasks()
      .then(response => {
        this.tasks = response.data
      })
      .catch(error => {
        console.log('ERRORS' + error)
      })
  }
}
</script>
<style scoped>
</style>

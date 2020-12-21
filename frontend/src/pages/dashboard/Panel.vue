<template>
  <div class="app">
		<h1> {{users.nome}} Suas Tarefas</h1>
		<TaskGrid :tasks="tasks" 
			@taskStateChanged="toggleTaskState" 
			@taskDeleted="deleteTask"/>
  </div>
</template>

<script>
import TaskGrid from '@/components/TaskGrid.vue';
import tasksApi from '@/services/tasksApi';



export default {
	components:{TaskGrid},

	data(){
		return{
			tasks: [], 
			users: {
				nome:''
			}
		}
	},
	watch:{
		tasks:{
			deep: true,
			handler(){
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
				this.tasksList();
			}
		},
		
	},

	methods:{
		tasksList(){
			tasksApi.list().then(response =>{
      (response.data.pending === !this.tasks.pending) ? this.tasks = response.data : [];
			})
    },
    
		deleteTask(i){
			const name = this.tasks[i].name;
			const pending = this.tasks[i].pending = !this.tasks[i].pending;
			const id = this.tasks[i].id;
			const user_id = this.tasks[i].user_id;
			this.tasks.splice(i,1);
			tasksApi.delete(id, {
					id,
					name,
					pending,
					user_id
				})
		},
		toggleTaskState(i){
			const name = this.tasks[i].name;
			const pending = this.tasks[i].pending = !this.tasks[i].pending;
			const id = this.tasks[i].id;
			const user_id = this.tasks[i].user_id;
				tasksApi.update(id, {
					id,
					name,
					pending,
					user_id
				})
			}
		
	},
	created(){
		const json = localStorage.getItem('tasks');
		const array = JSON.parse(json)
		this.tasks = Array.isArray(array) ? array : [];
		
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	.app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
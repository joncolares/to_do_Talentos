import {api} from './api';

export default {
    list: () => {
        return api.get('tasks');
    },
    save: (tasks) =>{
        return api.post('tasks', tasks)
    },
    update: (id, tasks) =>{
        return api.put(`tasks/${id}`, tasks)
    },
    delete:(id, tasks) => {
        return api.delete(`tasks/${id}`, { data: tasks })
    }
}
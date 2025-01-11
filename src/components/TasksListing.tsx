import React from 'react';
import taskType, { iconType, statusType } from '@/types/taskType';
import axios from 'axios';

const TasksListing = ({ tasks, addToTasks }: any) => {

    React.useEffect(() => {
        const getAllTasks = async (user_id: string) => {
            await axios.post("/api/get_all_tasks", { user_id })
                .then(response => {
                    addToTasks(response.data.tasks);
                    console.log(response.data.tasks);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        const getUser = async () => {
            await axios.get("/api/me")
                .then(response => {
                    getAllTasks(response.data.data.id);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        getUser();
    }, []);

    return (
        <div>
            {
                tasks.map((task: taskType, index: number) => (
                    <div key={index} className="">
                        {task.task_name}
                    </div>
                ))
            }
        </div>
    );
}

export default TasksListing;
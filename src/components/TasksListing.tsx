import React from 'react';
import taskType, { iconType, statusType } from '@/types/taskType';
import axios from 'axios';
import Image from 'next/image';

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
        <div className='flex flex-col gap-3'>
            {
                tasks.map((task: taskType, index: number) => (
                    <div key={index} onClick={() => console.log("double clicked!")} className={`individual-task-container w-full h-20 rounded-xl flex items-center justify-between ${task.status as unknown as string === "Completed" ? "dark-green-bg" : task.status as unknown as string === "In Progress" ? "medium-yellow-bg" : "light-red-bg"}`}>
                        <div className="flex items-center">
                            <div className={`task-icon-container p-3 w-20`}>
                                <Image src={`/assets/task icons/${task.icon}.gif`} alt='computer' height={900} width={900} className="w-full h-full rounded-lg" />
                            </div>

                            <div className="text-[17px] font-medium capitalize">{task.task_name}</div>
                        </div>

                        <div className="task-icon-container p-7 w-20">
                            <Image src={`/assets/Edit_duotone.svg`} alt='computer' height={900} width={900} className="w-full h-full rounded-lg" />
                        </div>

                    </div>
                ))
            }

            {/* iconType[task.icon as unknown as keyof typeof iconType] === iconType["boy_computer"] */}
        </div>
    );
}

export default TasksListing;
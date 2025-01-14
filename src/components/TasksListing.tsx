import React from 'react';
import taskType from '@/types/taskType';
import axios from 'axios';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';

const TasksListing = ({ tasks, addToTasks, deleteTask }: any) => {

    const [toBeDeleted, setToBeDeleted] = React.useState<taskType>();
    const [deleteTaskWindow, setDeleteTaskWindow] = React.useState(false);

    const deleteTaskHandler = (event: any) => {
        event.preventDefault();
        deleteTask(toBeDeleted);
        setDeleteTaskWindow(false);
    }

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

                            <div className="text-[17px] lg:text-[20px] font-medium capitalize">{task.task_name}</div>
                        </div>

                        <div onClick={() => {
                            setToBeDeleted(task);
                            setDeleteTaskWindow(true);
                        }} className="task-icon-container p-7 w-20">
                            <DeleteIcon />
                        </div>

                    </div>
                ))
            }

            {/* delete task popup */}
            {deleteTaskWindow && (
                <div className="delete-task-window w-3/4 backdrop-blur-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 border shadow-md shadow-black rounded-lg flex flex-col items-center gap-3">
                    <h1 className="font-bold text-[23px] text-white">Are you sure?</h1>
                    <div className="flex gap-3">
                        <button onClick={deleteTaskHandler} className="bg-blue-500 text-white text-[20px] px-5 py-2 rounded-lg cursor-pointer">Yes, Delete!</button>
                        <button onClick={() => setDeleteTaskWindow(false)} className="bg-slate-500 text-white text-[20px] px-5 py-2 rounded-lg cursor-pointer">Cancle</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TasksListing;
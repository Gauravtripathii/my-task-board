import React from 'react';
import Image from 'next/image';
import taskType, { iconType, statusType } from '@/types/taskType';

const AddTaskWindow = ({ addTaskWindowActive, toggleAddTaskWindow }: any) => {

    const [task, setTask] = React.useState<taskType>({
        task_name: "",
        description: "",
        icon: iconType[""],
        status: statusType[""],
    });

    const saveTask = (event: any) => {
        event.preventDefault();
    }

    const deleteTask = (event: any) => {
        event.preventDefault();
    }

    return (
        <div className={addTaskWindowActive ? "w-full h-full bg-white absolute top-0 left-0 p-10" : "hidden"}>
            <div onClick={toggleAddTaskWindow} className="close-btn border rounded-xl w-10 absolute top-10 right-10 cursor-pointer">
                <Image src="/assets/close_ring_duotone-1.svg" width={900} height={900} alt='logo' className="w-full h-full" />
            </div>

            <form className="w-full h-full flex flex-col gap-5">
                <h1 className="text-[25px] font-medium">Task details</h1>

                <p className="flex flex-col">
                    <label className="text-[17px] gray-2-text">Task name</label>
                    <input
                        type="text"
                        value={task.task_name}
                        onChange={event => setTask({ ...task, task_name: event.target.value })}
                        className="border gray-2-border px-3 py-2 rounded-lg text-[20px] outline-blue-700"
                    />
                </p>

                <p className="flex flex-col">
                    <label className="text-[17px] gray-2-text">Description</label>
                    <textarea
                        value={task.description}
                        onChange={event => setTask({ ...task, description: event.target.value })}
                        className="border gray-2-border px-3 py-2 rounded-lg text-[20px] h-44 outline-blue-700">
                    </textarea>
                </p>

                <p className="flex flex-col">
                    <span className="text-[17px] gray-2-text">Icon</span>
                    <span className="flex flex-wrap gap-1">
                        <span onClick={() => setTask({ ...task, icon: iconType["boy_computer"] })} className={task.icon === 0 ? "w-14 border rounded-lg overflow-hidden border-blue-700" : "w-14 border rounded-lg overflow-hidden"}>
                            <Image src="/assets/task icons/boy_computer.gif" width={900} height={900} alt='logo' className="w-full h-full" />
                        </span>
                        <span onClick={() => setTask({ ...task, icon: iconType["girl_computer"] })} className={task.icon === 1 ? "w-14 border rounded-lg overflow-hidden border-blue-700" : "w-14 border rounded-lg overflow-hidden"}>
                            <Image src="/assets/task icons/girl_computer.gif" width={900} height={900} alt='logo' className="w-full h-full" />
                        </span>
                        <span onClick={() => setTask({ ...task, icon: iconType["read"] })} className={task.icon === 2 ? "w-14 border rounded-lg overflow-hidden border-blue-700" : "w-14 border rounded-lg overflow-hidden"}>
                            <Image src="/assets/task icons/read.gif" width={900} height={900} alt='logo' className="w-full h-full" />
                        </span>
                        <span onClick={() => setTask({ ...task, icon: iconType["running"] })} className={task.icon === 3 ? "w-14 border rounded-lg overflow-hidden border-blue-700" : "w-14 border rounded-lg overflow-hidden"}>
                            <Image src="/assets/task icons/running.gif" width={900} height={900} alt='logo' className="w-full h-full" />
                        </span>
                        <span onClick={() => setTask({ ...task, icon: iconType["speech-bubble"] })} className={task.icon === 4 ? "w-14 border rounded-lg overflow-hidden border-blue-700" : "w-14 border rounded-lg overflow-hidden"}>
                            <Image src="/assets/task icons/speech-bubble.gif" width={900} height={900} alt='logo' className="w-full h-full" />
                        </span>
                        <span onClick={() => setTask({ ...task, icon: iconType["sports-ball"] })} className={task.icon === 5 ? "w-14 border rounded-lg overflow-hidden border-blue-700" : "w-14 border rounded-lg overflow-hidden"}>
                            <Image src="/assets/task icons/sports-ball.gif" width={900} height={900} alt='logo' className="w-full h-full" />
                        </span>
                        <span onClick={() => setTask({ ...task, icon: iconType["tea-cup"] })} className={task.icon === 6 ? "w-14 border rounded-lg overflow-hidden border-blue-700" : "w-14 border rounded-lg overflow-hidden"}>
                            <Image src="/assets/task icons/tea-cup.gif" width={900} height={900} alt='logo' className="w-full h-full" />
                        </span>
                        <span onClick={() => setTask({ ...task, icon: iconType["weight-lifting"] })} className={task.icon === 7 ? "w-14 border rounded-lg overflow-hidden border-blue-700" : "w-14 border rounded-lg overflow-hidden"}>
                            <Image src="/assets/task icons/weight-lifting.gif" width={900} height={900} alt='logo' className="w-full h-full" />
                        </span>
                    </span>
                </p>

                <p className="flex flex-wrap gap-2">
                    <span className="w-full text-[17px] gray-2-text">Status</span>

                    <span onClick={() => setTask({ ...task, status: statusType["In Progress"] })} className={task.status === 0 ? "w-full flex items-center gap-4 p-2 rounded-lg border border-blue-700" : "w-full flex items-center gap-4 p-2 rounded-lg border gray-1-border"}>
                        <span className="dark-yellow-bg w-14 rounded-md p-3">
                            <Image src="/assets/Time_atack_duotone.svg" width={900} height={900} alt='logo' className="w-full h-full" />
                        </span>
                        <span className="text-[17px] font-medium">In Progress</span>
                    </span>

                    <span onClick={() => setTask({ ...task, status: statusType["Completed"] })} className={task.status === 1 ? "w-full flex items-center gap-4 p-2 rounded-lg border border-blue-700" : "w-full flex items-center gap-4 p-2 rounded-lg border gray-1-border"}>
                        <span className="dark-green-bg w-14 rounded-md p-3">
                            <Image src="/assets/Done_round_duotone.svg" width={900} height={900} alt='logo' className="w-full h-full" />
                        </span>
                        <span className="text-[17px] font-medium">Completed</span>
                    </span>

                    <span onClick={() => setTask({ ...task, status: statusType["Won't do"] })} className={task.status === 2 ? "w-full flex items-center gap-4 p-2 rounded-lg border border-blue-700" : "w-full flex items-center gap-4 p-2 rounded-lg border gray-1-border"}>
                        <span className="red-bg w-14 rounded-md p-3">
                            <Image src="/assets/Close_ring_duotone.svg" width={900} height={900} alt='logo' className="w-full h-full" />
                        </span>
                        <span className="text-[17px] font-medium">Won't do</span>
                    </span>
                </p>

                <p className="flex justify-end gap-5">
                    <button onClick={deleteTask} className="gray-2-bg text-white font-medium flex items-center justify-center border rounded-full gray-2-border px-5 py-3">Delete <Image src="/assets/Trash.svg" width={900} height={900} alt='logo' className="w-full h-full" /></button>
                    <button onClick={saveTask} className="bg-blue-700 text-white font-medium flex items-center justify-center border rounded-full border-blue-700 px-5 py-3">Save <Image src="/assets/Done_round.svg" width={900} height={900} alt='logo' className="w-full h-full" /></button>
                </p>
            </form>
        </div>
    )
}

export default AddTaskWindow;
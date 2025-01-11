"use client";

import React from "react";
import axios from "axios";
import Head from "@/components/Head";
import AddTask from "@/components/AddTask";
import AddTaskWindow from "@/components/AddTaskWindow";
import Auth from "@/components/Auth";
import TasksListing from "@/components/TasksListing";

import taskType, { iconType, statusType } from "@/types/taskType";

export default function Home() {

  // states
  const [addTaskWindowActive, setAddTaskWindowActive] = React.useState<boolean>(false);
  const [authActive, setAuthActive] = React.useState(true);
  const [tasks, setTasks] = React.useState<taskType[]>([{
    task_name: "",
    description: "",
    icon: iconType[""],
    status: statusType[""],
  }]);

  // utils
  const toggleAddTaskWindow = () => {
    setAddTaskWindowActive(!addTaskWindowActive);
  }
  const toggleAuthActive = () => {
    setAuthActive(!authActive);
  }
  const addToTasks = (tasksx: taskType[]) => {
    setTasks(tasksx);
  }

  // on load
  React.useEffect(() => {
    const getLoggedInUser = async () => {
      await axios.get("/api/me")
        .then(response => {
          if (response.status === 200) {
            setAuthActive(false);
          }
        })
        .catch(error => {
          console.log(error);
          setAuthActive(true);
        });
    }
    getLoggedInUser();
  }, [])

  React.useEffect(() => {
    console.log("Tasks edited : \n");
    console.log(tasks);
  }, [tasks])

  return (
    <div className="w-full h-[100svh] p-10 flex flex-col gap-5 relative">
      <Auth authActive={authActive} toggleAuthActive={toggleAuthActive} />
      <Head />
      <TasksListing tasks={tasks} addToTasks={addToTasks} />
      <AddTask toggleAddTaskWindow={toggleAddTaskWindow} addToTasks={addToTasks} tasks={tasks} />
      <AddTaskWindow addTaskWindowActive={addTaskWindowActive} toggleAddTaskWindow={toggleAddTaskWindow} addToTasks={addToTasks} tasks={tasks} />

    </div>
  );
}

"use client";

import React from "react";
import Head from "@/components/Head";
import AddTask from "@/components/AddTask";
import AddTaskWindow from "@/components/AddTaskWindow";

export default function Home() {

  // states
  const [addTaskWindowActive, setAddTaskWindowActive] = React.useState<boolean>(false);

  // utils
  const toggleAddTaskWindow = () => {
    setAddTaskWindowActive(!addTaskWindowActive);
  }

  return (
    <div className="w-full h-[100svh] p-10 flex flex-col gap-5 relative">
      <Head />
      <AddTask toggleAddTaskWindow={toggleAddTaskWindow} />
      <AddTaskWindow addTaskWindowActive={addTaskWindowActive} toggleAddTaskWindow={toggleAddTaskWindow} />

    </div>
  );
}

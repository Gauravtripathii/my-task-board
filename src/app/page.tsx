"use client";

import React from "react";
import axios from "axios";
import Head from "@/components/Head";
import AddTask from "@/components/AddTask";
import AddTaskWindow from "@/components/AddTaskWindow";
import Auth from "@/components/Auth";

export default function Home() {

  // states
  const [addTaskWindowActive, setAddTaskWindowActive] = React.useState<boolean>(false);
  const [authActive, setAuthActive] = React.useState(true);

  // utils
  const toggleAddTaskWindow = () => {
    setAddTaskWindowActive(!addTaskWindowActive);
  }
  const toggleAuthActive = () => {
    setAuthActive(!authActive);
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

  return (
    <div className="w-full h-[100svh] p-10 flex flex-col gap-5 relative">
      <Auth authActive={authActive} toggleAuthActive={toggleAuthActive} />
      <Head />
      <AddTask toggleAddTaskWindow={toggleAddTaskWindow} />
      <AddTaskWindow addTaskWindowActive={addTaskWindowActive} toggleAddTaskWindow={toggleAddTaskWindow} />

    </div>
  );
}

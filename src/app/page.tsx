"use client";

import Head from "@/components/Head";
import AddTask from "@/components/AddTask";

export default function Home() {
  return (
    <div className="p-10 flex flex-col gap-5">
      <Head />
      <AddTask />

    </div>
  );
}

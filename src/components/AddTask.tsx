import React from 'react';
import Image from 'next/image';

const AddTask = () => {
    return (
        <div className="light-yellow-bg rounded-xl p-3 h-20 flex items-center gap-3 cursor-pointer">
            <div className="h-full w-fit dark-yellow-bg rounded-lg">
                <Image src="/assets/Add_round_duotone.svg" width={900} height={900} alt='logo' className="w-full h-full" />
            </div>
            <h1 className="font-semibold text-[20px]">Add new task</h1>
        </div>
    )
}

export default AddTask;
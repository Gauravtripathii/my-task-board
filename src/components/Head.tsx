import React from 'react';
import Image from 'next/image';

const Head = () => {

    const [taskBoardName, setTaskBoardName] = React.useState<string>("My Task Board");
    const [taskBoardDescription, setTaskBoardDescription] = React.useState<string>("Tasks to keep organised");

    return (
        <div>
            <div className="flex gap-3">
                <div className="">
                    <Image src="/assets/Logo.svg" width={900} height={900} alt='logo' className="w-full h-full" />
                </div>
                <div className="text-[40px]">{taskBoardName}</div>
                <div className="">
                    <Image src="/assets/Edit_duotone.svg" width={900} height={900} alt='logo' className="w-full h-full" />
                </div>
            </div>

            <div className="text-[20px]">{taskBoardDescription}</div>
        </div>
    )
}

export default Head;
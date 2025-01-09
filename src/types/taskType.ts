export enum iconType {
    "boy_computer", "girl_computer", "read", "running", "speech-bubble", "sports-ball", "tea-cup", "weight-lifting", ""
};

export enum statusType {
    "In Progress", "Completed", "Won't do", ""
};

export default interface taskType {
    task_name: string,
    description: string,
    icon: iconType,
    status: statusType,
};
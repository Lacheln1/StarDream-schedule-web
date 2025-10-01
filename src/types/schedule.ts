//방송 컨텐츠 및 시간
export interface TodoItem {
    todo: string;
    time?: string;
}

export interface DaySchedule {
    mon?: TodoItem[];
    tue?: TodoItem[];
    wed?: TodoItem[];
    thu?: TodoItem[];
    fri?: TodoItem[];
    sat?: TodoItem[];
    sun?: TodoItem[];
}

export interface StreamerLinks {
    profileImg: string;
    chzzUrl: string;
    youtubeUrl: string;
    xUrl: string;
    personalColor: string;
}

export interface StreamerSchedule extends DaySchedule, StreamerLinks {}

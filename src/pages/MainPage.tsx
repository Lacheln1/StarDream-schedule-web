import Card from "../components/Card";
import { UreiSchedule, OnhayanSchedule, HanabinSchedule, IruneSchedule } from "../data/schedules";

const MainPage = () => {
    const days = [
        { key: "mon", label: "월" },
        { key: "tue", label: "화" },
        { key: "wed", label: "수" },
        { key: "thu", label: "목" },
        { key: "fri", label: "금" },
        { key: "sat", label: "토" },
        { key: "sun", label: "일" },
    ] as const;

    const streamers = [
        { schedule: UreiSchedule, name: "유레이" },
        { schedule: HanabinSchedule, name: "하나빈" },
        { schedule: OnhayanSchedule, name: "온하얀" },
        { schedule: IruneSchedule, name: "이루네" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-[1800px] mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">
                    스타드림 9.29~10.05 통합시간표
                </h1>

                <div className="grid grid-cols-8 gap-4 mb-4">
                    <div className="w-32"></div>
                    {days.map((day) => (
                        <div key={day.key} className="text-center font-bold text-2xl">
                            {day.label}
                        </div>
                    ))}
                </div>

                {streamers.map((streamer) => (
                    <div key={streamer.name} className="grid grid-cols-8 gap-4 mb-4">
                        <div className="flex items-center justify-center">
                            <div className="font-bold text-xl">{streamer.name}</div>
                        </div>

                        {days.map((day) => (
                            <Card
                                key={`${streamer.name}-${day.key}`}
                                schedule={streamer.schedule}
                                day={day.key}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainPage;

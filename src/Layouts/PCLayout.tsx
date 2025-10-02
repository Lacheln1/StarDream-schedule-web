import Card from "../components/Card";
import { StreamerSchedule } from "../types/schedule";

interface Day {
    key: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
    label: string;
}

interface Streamer {
    schedule: StreamerSchedule;
    name: string;
}

interface PCLayoutProps {
    days: readonly Day[];
    streamers: Streamer[];
    weeklyDate: string;
}

const PCLayout = ({ days, streamers, weeklyDate }: PCLayoutProps) => {
    return (
        <div className="min-h-screen bg-[#feffef] p-8 ">
            <div className="max-w-[1800px] mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">
                    스타드림 {weeklyDate} 통합시간표
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

export default PCLayout;

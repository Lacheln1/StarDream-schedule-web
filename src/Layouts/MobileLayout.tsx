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

interface MobileLayoutProps {
    days: readonly Day[];
    streamers: Streamer[];
    weeklyDate: string;
}

const MobileLayout = ({ days, streamers, weeklyDate }: MobileLayoutProps) => {
    return (
        <div className="min-h-screen bg-[#feffef] p-4">
            <div className="max-w-full mx-auto">
                <h1 className="text-2xl font-bold text-center mb-6">
                    스타드림 {weeklyDate} 통합시간표
                </h1>

                <div className="grid grid-cols-5 gap-2 mb-4">
                    {/* 그리드 열 개수 맞추기 위한 태그 */}
                    <div aria-hidden="true"></div>
                    {streamers.map((streamer) => (
                        <div key={streamer.name} className="text-center font-bold text-sm">
                            {streamer.name}
                        </div>
                    ))}
                </div>

                {days.map((day) => (
                    <div key={day.key} className="grid grid-cols-5 gap-2 mb-4">
                        <div className="flex items-center justify-center ">
                            <div className="font-bold text-lg">{day.label}</div>
                        </div>

                        {streamers.map((streamer) => (
                            <Card
                                key={`${day.key}-${streamer.name}`}
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

export default MobileLayout;

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

                <div
                    className="grid gap-2 mb-4"
                    style={{ gridTemplateColumns: "30px repeat(3, 1fr)" }}
                >
                    {/* 그리드 열 개수 맞추기 위한 태그 */}

                    {streamers.map((streamer) => (
                        <div key={streamer.name} className="text-center font-bold text-sm">
                            {streamer.name}
                        </div>
                    ))}
                </div>

                {days.map((day) => (
                    <div
                        key={day.key}
                        className="grid gap-2 mb-4"
                        style={{ gridTemplateColumns: "30px repeat(4, 1fr)" }}
                    >
                        {streamers.map((streamer) => (
                            <div>
                                {/* <div className="flex items-center justify-center">
                                    <div className="font-bold text-lg">{day.label}</div>
                                </div> */}
                                <Card
                                    key={`${day.key}-${streamer.name}`}
                                    schedule={streamer.schedule}
                                    day={day.key}
                                    daylabel={day.label}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileLayout;

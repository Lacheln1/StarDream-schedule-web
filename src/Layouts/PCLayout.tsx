import Card from "../components/Card";
import { StreamerSchedule } from "../types/schedule";
import StarDreamLogo from "/STARDREAM_.png";
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
                <div className="flex justify-center text-center items-center gap-3 mb-8">
                    <a href="https://cafe.naver.com/stardreamco">
                        <img
                            src={StarDreamLogo}
                            alt="스타드림로고"
                            title="네이버 카페로 이동합니다."
                            className="w-[30px] h-[30px] xl:w-[36px] xl:h-[36px]"
                        />
                    </a>
                    <div className="text-3xl xl:text-4xl font-bold text-center">
                        스타드림 {weeklyDate} 통합시간표
                    </div>
                </div>

                <div className="grid grid-cols-8 gap-4 mb-4">
                    <div className="w-32"></div>
                    {days.map((day) => (
                        <div key={day.key} className="text-center font-bold md:text-xl lg:text-2xl">
                            {day.label}
                        </div>
                    ))}
                </div>

                {streamers.map((streamer) => (
                    <div key={streamer.name} className="grid grid-cols-8 gap-4 mb-4">
                        <div className="flex items-center justify-center">
                            <div className="font-bold  md:text-xl  lg:text-2xl">
                                {streamer.name}
                            </div>
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

import { useEffect, useState } from "react";
import { UreiSchedule, OnhayanSchedule, HanabinSchedule, IruneSchedule } from "../data/schedules";
import PCLayout from "./../Layouts/PCLayout";
import MobileLayout from "../Layouts/MobileLayout";

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

const weeklyDate = "9.29 ~ 10.05";

const MainPage = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <>
            {isMobile ? (
                <MobileLayout days={days} streamers={streamers} weeklyDate={weeklyDate} />
            ) : (
                <PCLayout days={days} streamers={streamers} weeklyDate={weeklyDate} />
            )}
        </>
    );
};

export default MainPage;

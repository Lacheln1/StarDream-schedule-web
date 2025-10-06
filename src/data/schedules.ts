import { StreamerSchedule } from "../types/schedule";
import UreiProfileImg from "../images/urei2.png";
import OnhayanProfileImg from "../images/onhayan2.png";
import HanabinProfileImg from "../images/hanavin2.png";
import IruneProfileImg from "../images/irune2.png";

// 유레이
export const UreiSchedule: StreamerSchedule = {
    mon: [{ todo: "리나메1", time: "19:00" }],
    tue: [{ todo: "스타드림 추석연휴합방 in 유레이 방송", time: "21:00" }],
    wed: [{ todo: "리나메2", time: "19:00" }],
    thu: [{ todo: "휴식중...zZ", time: "" }],
    fri: [{ todo: "리나메3 오픈런", time: "19:00" }],
    sat: [{ todo: "정지 디펜스 그림뱅", time: "19:00" }],
    sun: [{ todo: "고레잡기 + 노래", time: "19:00" }],
    profileImg: UreiProfileImg,
    chzzUrl: "https://chzzk.naver.com/4f650f02bc4ab38a998d74e3abb1b68b",
    youtubeUrl: "https://www.youtube.com/@Urei0w0",
    xUrl: "https://x.com/Urei0w0",
    personalColor: "#f4e8fe",
};

// 온하얀
export const OnhayanSchedule: StreamerSchedule = {
    mon: [{ todo: "게릴라", time: "미정" }],
    tue: [{ todo: "스타드림 추석연휴합방 in 유레이 방송", time: "21:00" }],
    wed: [{ todo: "OFFLINE", time: "" }],
    thu: [{ todo: "언더테일", time: "20:00" }],
    fri: [{ todo: "테마 저챗", time: "14:00" }],
    sat: [{ todo: "OFFLINE", time: "" }],
    sun: [{ todo: "언더테일, 시간표 작성", time: "21:00" }],
    profileImg: OnhayanProfileImg,
    chzzUrl: "https://chzzk.naver.com/91caa53fc6cf5ee3cdbc802bd23bf155",
    youtubeUrl: "https://www.youtube.com/@ONHAYAN090",
    xUrl: "https://x.com/onwhite090",
    personalColor: "#f0ffec",
};

// 하나빈
export const HanavinSchedule: StreamerSchedule = {
    mon: [{ todo: "OFFLINE", time: "" }],
    tue: [{ todo: "스타드림 추석연휴합방 in 유레이 방송", time: "21:00" }],
    wed: [{ todo: "그림 그려드립니다 + 영도 한글작 1부", time: "21:00" }],
    thu: [{ todo: "영도 한글작 2부", time: "12:00" }],
    fri: [{ todo: "OFFLINE", time: "" }],
    sat: [{ todo: "분내 저챗 + 나빈이에게 입히고 싶은 옷", time: "21:00" }],
    sun: [{ todo: "5천팔 공약 매도월드컵 + 링피트테스트", time: "14:00" }],
    profileImg: HanabinProfileImg,
    chzzUrl: "https://chzzk.naver.com/7ca6c5f45a9b16f75970f54c309623c0",
    youtubeUrl: "https://www.youtube.com/@Hanavin007",
    xUrl: "https://x.com/hanavin007",
    personalColor: "#e8edff",
};

// 이루네
export const IruneSchedule: StreamerSchedule = {
    mon: [{ todo: "OFFLINE", time: "" }],
    tue: [{ todo: "스타드림 추석연휴합방 in 유레이 방송", time: "21:00" }],
    wed: [{ todo: "한국 사투리고사 모음, 오목대전", time: "16:00" }],
    thu: [{ todo: "카에리미치 공포게임", time: "16:00" }],
    fri: [{ todo: "뽀찌들의 악질분탕력 디펜스", time: "16:00" }],
    sat: [{ todo: "OFFLINE", time: "" }],
    sun: [{ todo: "안아조요 폴가이즈 팬미팅", time: "16:00" }],
    profileImg: IruneProfileImg,
    chzzUrl: "https://chzzk.naver.com/e984779fd445e71bfd8c99106e432bf1",
    youtubeUrl: "https://www.youtube.com/@IRUNE030",
    xUrl: "https://x.com/irune030",
    personalColor: "#ffe8ee",
};

import MainPage from "./pages/MainPage";
import { Analytics } from "@vercel/analytics/next";
const App = () => {
    return (
        <div>
            <MainPage />
            <Analytics />
        </div>
    );
};

export default App;

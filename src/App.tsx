import MainPage from "./pages/MainPage";
import { Analytics } from "@vercel/analytics/react";
const App = () => {
    return (
        <div>
            <MainPage />
            <Analytics />
        </div>
    );
};

export default App;


import { BottomWeatherList } from "../../components/Weather/BottomWeatherList";
import { Weather } from "../../components/Weather/CurrentDayWeather";
import { ErrorBoundary } from "../../components/Weather/ErrorBoundary"

export const HomePage = () => {

    return (
        <div>
            <Weather />
            <BottomWeatherList />
        </div>
    );
}
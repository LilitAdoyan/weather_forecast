import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCurrentDayWeather } from "../../slices/weather";

export const Weather = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getCurrentDayWeather())
    }, [])
    const weatherData = useAppSelector((state) => state.weather.currentDaydata)
    return (
        <div className="current-day-temp-wrapper">
            <span>{weatherData?.name}</span>
            <span>{weatherData?.main ? Math.floor(weatherData.main.temp - 273.15) : ''}&#176;C</span>
            <img src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}.png`} />
            <span>{weatherData?.weather[0].main}</span>
        </div>
    );
}
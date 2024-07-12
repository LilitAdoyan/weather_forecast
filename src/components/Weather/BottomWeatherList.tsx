import { useEffect, useMemo } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { getFullDaysWeather } from "../../slices/weather"

export const BottomWeatherList = () => {
    const dispatch = useAppDispatch()
    const fullDays = useAppSelector((state) => state.weather.fullDaysdata)
    useEffect(() => {
        dispatch(getFullDaysWeather())
    }, [dispatch])


    const groupByDays = useMemo(() => {
        return (fullDays?.list?.reduce((days: any, row) => {
            const date = row.dt_txt.split(' ')[0];
            days[date] = [...(days[date] ? days[date] : []), row];
            return days;
        }, {}));
    }, [])


    return (
        <div className="cards-wrapper">
            <div className="card-item">{Object.keys(groupByDays).map((el) => el)}</div>
        </div>
    )
}
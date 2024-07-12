// types declartion for currnet day weather

interface CurrentDayWeatherData {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

interface Clouds {
    all: number;
}

interface Coord {
    lon: number;
    lat: number;
}

interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Wind {
    speed: number;
    deg: number;
}


// types declartion for full days weather


interface FullDaysWeatherData {
    cod: string;
    message: number;
    cnt: number;
    list: List[];
    city: City;
}

interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

interface Coord {
    lat: number;
    lon: number;
}

interface List {
    dt: number;
    main: MainClass;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    sys: Sys;
    dt_txt: string;
    rain?: Rain;
}

interface Clouds {
    all: number;
}

interface MainClass {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

interface Rain {
    "3h": number;
}

interface Sys {
    pod: Pod;
}

enum Pod {
    D = "d",
    N = "n",
}

interface Weather {
    id: number;
    main: MainEnum;
    description: Description;
    icon: string;
}

enum Description {
    BrokenClouds = "broken clouds",
    ClearSky = "clear sky",
    FewClouds = "few clouds",
    LightRain = "light rain",
    ScatteredClouds = "scattered clouds",
}

enum MainEnum {
    Clear = "Clear",
    Clouds = "Clouds",
    Rain = "Rain",
}

interface Wind {
    speed: number;
    deg: number;
    gust: number;
}

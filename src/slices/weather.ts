import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface InitialState {
    currentDaydata: CurrentDayWeatherData | null
    fullDaysdata: FullDaysWeatherData | null
    loading: boolean
    error?: string
}
const initialState: InitialState = {
    currentDaydata: null,
    fullDaysdata: null,
    loading: false,
    error: ''
}
export const getCurrentDayWeather = createAsyncThunk('weather/getCurrentDayWeather', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/weather?q=Yerevan&appid=${process.env.REACT_APP_API_KEY}`)
        return data
    } catch (e) {
        return rejectWithValue(e);
    }
});

export const getFullDaysWeather = createAsyncThunk('weather/getFullDaysWeather', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/forecast?q=Yerevan&appid=${process.env.REACT_APP_API_KEY}`)
        return data
    } catch (e) {
        return rejectWithValue(e);
    }
});

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCurrentDayWeather.pending, (state) => {
            state.error = undefined;
            state.loading = true;
        })
        builder.addCase(getCurrentDayWeather.fulfilled, (state, action: any) => {
            state.loading = false;
            state.currentDaydata = action.payload;
        })
        builder.addCase(getCurrentDayWeather.rejected, (state, action: any) => {
            const { message } = action.payload;
            state.error = message;
            state.loading = false;
        })
        builder.addCase(getFullDaysWeather.pending, (state) => {
            state.error = undefined;
            state.loading = true;
        })
        builder.addCase(getFullDaysWeather.fulfilled, (state, action: any) => {
            state.loading = false;
            state.fullDaysdata = action.payload;
        })
        builder.addCase(getFullDaysWeather.rejected, (state, action: any) => {
            const { message } = action.payload;
            state.error = message;
            state.loading = false;
        })
    }
})

export default weatherSlice.reducer
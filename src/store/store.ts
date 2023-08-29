import { combineReducers, configureStore } from "@reduxjs/toolkit";
import PlayerSlice from "./reducers/PlayerSlice";


const rootReducer = combineReducers({
    PlayerSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

// Типизация редусеров
export type RootState =  ReturnType<typeof rootReducer>

// Тип стора
export type AppStore =  ReturnType<typeof setupStore>

// Использование только определенных типов
export type AppDispatch =  AppStore['dispatch']
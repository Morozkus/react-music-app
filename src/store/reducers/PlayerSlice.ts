import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IPlayer {
    isPlaying: boolean,
    duration: any,
    sound: any
}

interface IMusic {
    duration: any,
}

const initialState: IPlayer = {
    isPlaying: false,
    duration: null,
    sound: null
}

export const PlayerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setMusic(state, action: PayloadAction<IMusic>) {
            state.duration = action.payload.duration
        },
        setPause(state) {
            state.isPlaying = false
        },
        setResume(state) {
            state.isPlaying = true
        }
    }
})

export default PlayerSlice.reducer
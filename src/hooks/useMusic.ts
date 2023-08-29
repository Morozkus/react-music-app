import useSound from "use-sound"; //для работы со звуком
import { useEffect } from 'react';
import { PlayerSlice } from "../store/reducers/PlayerSlice";
import { useAppDispatch } from "./redux";

export const useMusic = (sounds: any) => {
    const { setMusic } = PlayerSlice.actions
    const dispatch = useAppDispatch()

    const [play, { pause, duration, sound }] = useSound(sounds)
    useEffect(() => {
        dispatch(setMusic({ duration }))
    }, [duration, sound])


    return { play, pause, duration, sound }
}
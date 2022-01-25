import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '_state/features/counter/counterSlice'
import layoutReducer from '_state/features/layout/layoutSlice'
export type State = {
    counter: {
        value: number;
    },
    layout: {
        fancyBG: boolean,
        fontFamily: string,
        theme: string,
    };
}
export default configureStore({
    reducer: {
        layout: layoutReducer,
        counter: counterReducer,
    }
})

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '_state/features/counter/counterSlice'

export type State = {
    counter: {
        value: number;
    };
}
export default configureStore({
    reducer: {
        counter: counterReducer
    }
})

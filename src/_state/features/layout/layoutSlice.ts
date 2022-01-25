import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        fancyBG: false,
        fontFamily: "Didact Gothic",
        theme: "omstillingNU",
    },
    reducers: {
        toggleFancyBG: state => {
            state.fancyBG = !state.fancyBG
        },
        setFancyBG: (state, action: PayloadAction<boolean> ) => {
            state.fancyBG = action.payload
        },
        setTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload
        },
        setFontFamily: (state, action: PayloadAction<string>) => {
            state.fontFamily = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { toggleFancyBG, setFancyBG, setTheme, setFontFamily } = layoutSlice.actions

export default layoutSlice.reducer
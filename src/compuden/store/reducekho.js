import { configureStore, createSlice } from "@reduxjs/toolkit"
const ProducstState = createSlice({
    name: "redux-tolkist",
    initialState: {
        producst: [
            {
                name: "piza",
                price: 20000,
                id: Math.floor(Math.random() * 99999999),
                img: "https://tse3.mm.bing.net/th?id=OIP.eqQ7OE5ZU9t15EyJNrZcBwHaE7&pid=Api&P=0&h=220",
                quantity: 1
            },
            {
                name: "hamperger",
                price: 40000,
                id: Math.floor(Math.random() * 99999999),
                img: "https://tse4.mm.bing.net/th?id=OIP.BhuwAfReplxdhwbuk--wgwHaFR&pid=Api&P=0&h=220",
                quantity: 1
            },
            {
                name: "hot dog",
                price: 10000,
                id: Math.floor(Math.random() * 99999999),
                img: "https://tse3.mm.bing.net/th?id=OIP.-SQl_G7RcB51DITJy4ANWwHaE8&pid=Api&P=0&h=220",
                quantity: 1
            },
            {
                name: "Chicken",
                price: 40000,
                id: Math.floor(Math.random() * 99999999),
                img: "https://demoda.vn/wp-content/uploads/2022/01/anh-mon-ga-ran.jpeg",
                quantity: 1
            }
        ],
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const check = state.cart.findIndex((item) => {
                return item.id == action.payload.id
            })
            if (check == -1) {
                state.cart.push(action.payload)
            } else {
                state.cart[check].quantity += 1
            }
        },
        Increase: (state, action) => {
           
            console.log(action.payload.quantity);
            const checkQuantity = state.cart.findIndex((item) => {
                return item.id == action.payload.id
            })
            if (checkQuantity != -1) {
                state.cart[checkQuantity].quantity += 1
            }
        },
        Decrease: (state, action) => {
            const DELETE = state.cart.filter((item) => {
                return item.id != action.payload.id
            })
            console.log(action.payload.quantity);
            const checkQuantity = state.cart.findIndex((item) => {
                return item.id == action.payload.id
            })
            if (checkQuantity != -1) {
                if (state.cart[checkQuantity].quantity > 1) {
                    state.cart[checkQuantity].quantity -= 1
                } else {
                    let confirsm = confirm("ban co muon xoa khong")
                    if (confirsm) {
                         state.cart = DELETE
                    }
                   
                }
               
            }
        },
        DELETE: (state, action) => {
            const DELETE = state.cart.filter((item) => {
                return item.id != action.payload.id
            })
            let confim = confirm("ban co muon xoa khong")
            if (confim) {
                state.cart = DELETE
            }
        }
    }
})
export const { addToCart, Increase, Decrease,DELETE } = ProducstState.actions

const productReducer = ProducstState.reducer

const store = configureStore({
    reducer: {
        productReducer,
    }
})
export default store

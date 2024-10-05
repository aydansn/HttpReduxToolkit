import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
};

export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //http requesti olmasa istf edirik
  },
  extraReducers: (builder) => {
    //http requestimizi istf etmek istedikde
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      //return response.data (donen deyer action-dir)
      state.users = action.payload; //payload=> icerisindeki dataya elimiz catir  (userdeki datalari al, state-min ichindeki usere set-le)
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;

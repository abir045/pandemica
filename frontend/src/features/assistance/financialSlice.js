import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import requestService from "./financialService";

const initialState = {
  requests: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//create new request

export const createRequest = createAsyncThunk(
  "requests/create",
  async (requestData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      console.log(token);
      return await requestService.createRequest(requestData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//get user requests

export const getRequests = createAsyncThunk(
  "requests/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await requestService.getRequests(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // add request to the requests array from the api
        state.requests.push(action.payload);
      })
      .addCase(createRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // rejects with a message
        state.message = action.payload;
      })
      .addCase(getRequests.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRequests.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // add request to the requests array from the api
        state.requests = action.payload;
      })
      .addCase(getRequests.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // rejects with a message
        state.message = action.payload;
      });
  },
});

//reducer functions have to be exported with actions

export const { reset } = requestSlice.actions;

export default requestSlice.reducer;

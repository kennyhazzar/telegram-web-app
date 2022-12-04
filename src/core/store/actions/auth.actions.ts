import { createAsyncThunk } from "@reduxjs/toolkit";
import { botApi } from "../../api";
import { TgUser, tg, GetCustomerByIdDto } from "../../types";

export const authorize = createAsyncThunk('auth/authorize',
  async (id: number, thunkApi) => {
    if (localStorage.getItem('accessToken')) {
      return;
    }

    if (id !== Number(process.env.REACT_APP_TEST_ID) && typeof tg?.initDataUnsafe?.user?.id === 'undefined') {
      localStorage.removeItem('accessToken');
      return thunkApi.rejectWithValue('tg-not-found');
    }

    try {
      console.log(id);

      const { data } = await botApi.get<GetCustomerByIdDto>('telegram/user', {
        params: {
          id: id || tg?.initDataUnsafe?.user?.id,
        }
      })

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue('internal');
    }
  }
)

export const logout = createAsyncThunk('auth/logout', 
  async (user: TgUser, thunkApi) => {
    localStorage.removeItem('accessToken')
  }
)
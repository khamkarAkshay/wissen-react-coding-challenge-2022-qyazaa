import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSessionStorage } from "../../utils/storage.utils";
const API_URL = process.env.REACT_APP_API_URL;

export const getUserListService = createAsyncThunk(
  "/getUsers",
  async (body) => {
    const authT = getSessionStorage("token");
    const response = await fetch(
      `${API_URL}/api/users?page=${body?.pageNumber}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${authT?.token || ""}`,
        },
      }
    );
    if (!response?.ok) {
      const responseJson = await response?.json();
      if (responseJson?.error) {
        throw new Error(responseJson?.error);
      }
    }
    return response.json();
  }
);

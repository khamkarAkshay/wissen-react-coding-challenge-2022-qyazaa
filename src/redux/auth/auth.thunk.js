import { createAsyncThunk } from "@reduxjs/toolkit";
const API_URL = process.env.REACT_APP_API_URL;

export const loginService = createAsyncThunk("/login", async (body) => {
  const response = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...body }),
  });
  if (!response?.ok) {
    const responseJson = await response?.json();
    if (responseJson?.error) {
      throw new Error(responseJson?.error);
    }
  }
  return response.json();
});

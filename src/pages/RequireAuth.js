import React from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

export default function RequireAuth() {
  const [cookies, setCookie] = useCookies(["token"]);
  const auth = cookies.token;
  console.log({ auth: auth });

  return auth ? <Outlet /> : <Navigate to="/" />;
}

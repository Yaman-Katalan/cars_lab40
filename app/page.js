"use client";
import { useState } from "react";
import { AuthContext } from "./context/auth";
import LoginForm from "./components/loginForm";
import { useContext } from "react";
import CarsList from "./components/CarList";
import AddCarForm from "./components/AddCarForm";
export default function Home() {
  const { tokens } = useContext(AuthContext)
  return (
    <>
      {!tokens ? (
        <LoginForm />
      ) : (
        <>
          <CarsList />
          <AddCarForm />
        </>
      )}
    </>
  );
}
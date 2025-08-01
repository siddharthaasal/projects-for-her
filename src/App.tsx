import "./App.css";
import "./index.css"
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import GirlfriendDay from "./pages/GirlfriendDay";

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/a-day-for-you" element={<GirlfriendDay />} />
    </Routes>
  );
}


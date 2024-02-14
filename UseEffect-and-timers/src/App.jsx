import { useEffect, useState } from "react";
import "./App.css";
import TimerDirty from "./components/TimerDirty";
import TimerClean from "./components/TimerClean";

export default function App() {
  return (
    <div>
      <TimerDirty />
      <TimerClean />
    </div>
  );
}

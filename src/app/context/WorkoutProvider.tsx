"use client";

import { createContext, ReactNode, useState } from "react";

export const WorkoutContext = createContext({});

function WorkoutProvider({ children }:{children:ReactNode}) {
  const [todayWorkouts, setTodayWorkouts] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  return (
    <WorkoutContext.Provider value={{ todayWorkouts, setTodayWorkouts,savedWorkouts,setSavedWorkouts }}>
      {children}
    </WorkoutContext.Provider>
  );
}

export default WorkoutProvider;
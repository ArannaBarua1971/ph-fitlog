"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { WorkoutTypes } from "../types";
export interface WorkoutContextType {
  todayWorkouts: WorkoutTypes[];
  setTodayWorkouts: Dispatch<SetStateAction<WorkoutTypes[]>>;
  savedWorkouts: WorkoutTypes[];
  setSavedWorkouts: Dispatch<SetStateAction<WorkoutTypes[]>>;
}
export const WorkoutContext = createContext<WorkoutContextType>({
  todayWorkouts: [],
  setTodayWorkouts: () => {},
  savedWorkouts: [],
  setSavedWorkouts: () => {},
});

function WorkoutProvider({ children }:{children:ReactNode}) {
  const [todayWorkouts, setTodayWorkouts] = useState<WorkoutTypes[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<WorkoutTypes[]>([]);

  return (
    <WorkoutContext.Provider value={{ todayWorkouts, setTodayWorkouts,savedWorkouts,setSavedWorkouts }}>
      {children}
    </WorkoutContext.Provider>
  );
}

export default WorkoutProvider;
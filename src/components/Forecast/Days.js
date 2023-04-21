import React, { useMemo } from "react";

export default function Days() {
  const today = useMemo(() => new Date(), []);
  const options = useMemo(() => ({ weekday: "long" }), []);
  const days = useMemo(() => {
    const result = [];
    for (let i = 1; i < 5; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() + i);
      result.push(day.toLocaleDateString("en-US", options));
    }
    return result;
  }, [options, today]);

  return (
    <div className="grid grid-flow-col text-center grid-cols-4 font-bold">
      {days.map((day, index) => {
        return <div key={index}>{day}</div>;
      })}
    </div>
  );
}

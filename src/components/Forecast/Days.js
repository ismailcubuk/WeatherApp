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
    <div className="grid grid-flow-col grid-cols-4 gap-2 text-center text-xs font-black uppercase tracking-[0.06em] text-slate-700 mbl:text-sm">
      {days.map((day, index) => {
        return <div className="truncate" key={index}>{day}</div>;
      })}
    </div>
  );
}

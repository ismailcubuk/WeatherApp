import React, { useEffect, useState } from "react";

export default function Time() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      const localTime = date.toLocaleTimeString([], options);
      setLocalTime(localTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{localTime}</div>;
}

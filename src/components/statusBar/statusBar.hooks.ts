import { useEffect, useState } from "react";

const UseStatusBarHooks = () => {
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const handleRefresh = (): void => {
    const now = new Date();
    setLastUpdated(now);
    localStorage.setItem("lastUpdated", now.toISOString());
  };

  useEffect(() => {
    const storedDate = localStorage.getItem("lastUpdated");
    if (storedDate) {
      const parsedDate = new Date(storedDate);
      if (!isNaN(parsedDate.getTime())) {
        setLastUpdated(parsedDate);
      }
    }
  }, []);

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return date.toLocaleString("en-US", options);
  };

  return {
    handleRefresh,
    formatDate,
    lastUpdated,
  };
};

export default UseStatusBarHooks;

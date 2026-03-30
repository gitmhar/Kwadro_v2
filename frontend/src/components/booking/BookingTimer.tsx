import { useEffect, useState } from "react";

export default function BookingTimer({
  createdAt,
  onExpire,
}: {
  createdAt: string;
  onExpire: () => void;
}) {
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    const startTime = new Date(createdAt).getTime();
    const expiryTime = startTime + 10 * 60 * 1000;

    const updateTimer = () => {
      const now = Date.now();
      const distance = Math.floor((expiryTime - now) / 1000);

      if (distance <= 0) {
        setTimeLeft(0);
        onExpire();
        return;
      }
      setTimeLeft(distance);
    };

    const timerId = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(timerId);
  }, [createdAt]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={`timer-box ${timeLeft < 60 ? "warning" : ""}`}>
      <span>Time remaining to pay: </span>
      <strong>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </strong>
    </div>
  );
}

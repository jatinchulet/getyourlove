import { useState, useEffect } from "react";

interface CountdownTimerProps {
  className?: string;
}

export default function CountdownTimer({ className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`flex justify-center gap-4 ${className}`}>
      <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-xl text-center">
        <div className="text-4xl font-black text-white mb-2">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-sm text-gray-200">Hours</div>
      </div>
      <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-xl text-center">
        <div className="text-4xl font-black text-white mb-2">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-sm text-gray-200">Minutes</div>
      </div>
      <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-xl text-center">
        <div className="text-4xl font-black text-white mb-2">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-sm text-gray-200">Seconds</div>
      </div>
    </div>
  );
}

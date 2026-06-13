import { DAYS, HOURS } from "./constants";

export function formatHeatmapTooltip(params: any) {
  const [hourIdx, dayIdx, value] = params.data;
  const dayLabel = DAYS[DAYS.length - 1 - dayIdx];
  const realHour = HOURS[hourIdx];

  let timeLabel = "";
  if (realHour === 12) {
    timeLabel = "12:00 PM";
  } else if (realHour === 24 || realHour === 0) {
    timeLabel = "12:00 AM";
  } else if (realHour > 12) {
    timeLabel = `${realHour - 12}:00 PM`;
  } else {
    timeLabel = `${realHour}:00 AM`;
  }

  const loadPercent = Math.round(value * 100);

  return `Day: ${dayLabel}<br/>Time: ${timeLabel}<br/>Density: ${loadPercent}%`;
}

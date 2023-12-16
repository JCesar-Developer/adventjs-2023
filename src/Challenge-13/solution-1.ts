function calculateTime(deliveries: string[]) {
  const maxTime = 7 * 3600 * 1000;
  const totalTime: number = deliveries.reduce((prev, timeString) => {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return prev + ((hours * 3600) + (minutes * 60) + seconds) * 1000;
  }, 0);
  
  const timeLeft = Math.abs(maxTime - totalTime);
  const dateObject = new Date(timeLeft);

  const hh = dateObject.getUTCHours();
  const mm = dateObject.getUTCMinutes();
  const ss = dateObject.getUTCSeconds();

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`;
  }

  const formattedTime = `${formatTime(hh)}:${formatTime(mm)}:${formatTime(ss)}`;
  return (maxTime > totalTime) ? `-${formattedTime}`: formattedTime;
}

export default calculateTime;
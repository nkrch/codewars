function videoPart(part, total) {
  //coding and coding..
  let partTime = part.split(":");
  let partTimeSec = (partTime[0] * 60 + partTime[1]) * 60 + partTime[2];
  let totalTime = total.split(":");
  let totalTimeSec = (totalTime[0] * 60 + totalTime[1]) * 60 + totalTime[2];

  return [Math.round(totalTimeSec / partTimeSec)];
}
console.log(videoPart("02:20:00", "07:00:00"));
console.log(videoPart("25:26:20", "25:26:20"));
console.log(videoPart("00:02:20", "00:10:00"));

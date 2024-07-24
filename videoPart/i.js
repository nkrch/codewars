function videoPart(part, total) {
  //coding and coding..
  let partTime = part.split(":");
  console.log(partTime);
  let partTimeSec =
    (partTime[0] * 60 + partTime[1]) * 60 + parseInt(partTime[2]);
  let totalTime = total.split(":");
  console.log(totalTime);
  let totalTimeSec =
    (totalTime[0] * 60 + totalTime[1]) * 60 + parseInt(totalTime[2]);

  let upPart = partTimeSec,
    downPart = totalTimeSec;

  console.log(upPart, downPart);
  for (let u = partTimeSec / 2; u >= 2; u--) {
    if (upPart % u < 0.001 * upPart && downPart % u < 0.001 * downPart) {
      upPart = Math.round(upPart / u);
      downPart = Math.round(downPart / u);
      u++;
    }
  }

  return [upPart, downPart];
}
console.log(videoPart("02:20:00", "07:00:00")); //1/3
console.log(videoPart("25:26:20", "25:26:20")); //1/1
console.log(videoPart("00:02:20", "00:10:00")); //7/30

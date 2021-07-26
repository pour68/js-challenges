let startDate = new Date("2020-01-01");
let endDate = new Date("2022-01-01");

let totalSeconds = Math.floor((endDate - startDate) / 1000);

const totalDays = () => Math.floor(totalSeconds / 86400);

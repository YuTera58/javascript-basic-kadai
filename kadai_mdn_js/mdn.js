const date_time = new Date();
const year = date_time.getFullYear().toString() + "年";
const month = (date_time.getMonth() + 1).toString() + "月";
const date = date_time.getDate().toString() + "日";

//年月日
console.log(year + month + date);
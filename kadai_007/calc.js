const ZERO = 0;

//num に値を代入
let num = 20;
console.log("num の値を確認：" + num);

//剰余計算
let multipleOf_3 = num % 3;
let multipleOf_5 = num % 5;

//条件分岐
if(multipleOf_3 === ZERO && multipleOf_5 === ZERO)
{
  console.log("3と5の倍数です");
}
else if(multipleOf_3 === ZERO)
{
  console.log("3の倍数です");
}
else if(multipleOf_5 === ZERO)
{
  console.log("5の倍数です");
}
else
{
  console.log("3と5の倍数ではありません：" + num);
}
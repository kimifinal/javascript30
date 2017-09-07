const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hour = now.getHours();

  let secondsDegrees = ((seconds / 60) * 360);  //秒針角度計算
  let minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6);  //分針角度計算
  let hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30);  //時針角度計算
  
  let degree = [secondsDegrees, minsDegrees, hourDegrees];  //指針角度以陣列儲存

  //取出degree陣列裡的指針角度，並設定transform的角度
  secondHand.style.transform = setRotate(degree[0]);
  minsHand.style.transform = setRotate(degree[1]);
  hourHand.style.transform = setRotate(degree[2]);

  setRotate(degree);  //將指針角度陣列傳入function運算
  // console.log(degree);
}

//若傳入角度為0，則不顯示動畫效果避免354~0的rotate反彈跳
function setRotate(deg) {
  // console.log(deg);
  if (deg[0] === 0) {  //秒針角度為0
    secondHand.style.transition = 'all 0s';  //設定transition動畫時間為0
  } else if (deg[1] === 0) {  //分針角度為0
    minsHand.style.transition = 'all 0s';
  } else if (deg[2] === 0) {  //時針角度為0
    hourHand.style.transition = 'all 0s';
  } else {
    secondHand.style.transition = 'all 0.05s';  //設定transition動畫時間為0.05s
    minsHand.style.transition = 'all 0.05s';
    hourHand.style.transition = 'all 0.05s';
  }
  return `rotate(${deg}deg)`;  //傳回transform的角度陣列
}

setInterval(setDate, 1000);  //每秒執行function setDate()
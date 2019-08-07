//TASK 1

function printTimeout(str, n) {
  setTimeout(() => {
    console.log(str)
  }, n*1000);
};

//TASK 2

function sumAll(n) {
  if(n != 0){
    return n+sumAll(n-1);
  } return 0;
}

//TASK 3

function bombTimer(str, time){
  let t = time;
  let s = setInterval(()=>{
    if(t>0){
      console.log(t);
      t--;
    }else{
      console.log(str)
    clearInterval(s);
  }
  }, t* 1000);
}

//TASK 4

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

//TASK 5

function bombTimer(str, time){
  let t = time;
  let s = setTimeout(() =>{
    if(t===0){
      console.log(str);
    }else{
      console.log(t);
      return bombTimer(str, time-1);
    }
  },1000);
}


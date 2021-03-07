module.exports = function toReadable (number) {
  
  let arr_1_9=['one', 'two', 'three',  'four', 'five', 'six', 'seven', 'eight', 'nine']
  let arr_10_19=['ten','eleven', 'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
  let arr_20_90=['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
  let units=number%10;
  let tens=Math.floor(number/10)%10;
  let hundreds=Math.floor(number/100);
  let newArray=[]
  if(number==0){return'zero'}
  if(hundreds !=0){newArray.push(arr_1_9[hundreds-1],"hundred")}
  if(tens ==1){newArray.push(arr_10_19[units])}
  else{newArray.push(arr_20_90[tens-2],arr_1_9[units-1])}
  return String(newArray.join(' ')).replace(/ +/g, ' ').trim()
  }


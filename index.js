
const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numOfPeople = document.getElementById('numberOfPeople');
const personTotal = document.getElementById('perPersonTotal');



let numberOfPeople = Number(numOfPeople.innerText);


const calculateBill = () => {

  const convert = Number(billInput.value);

  const tipPercent = Number(tipInput.value) / 100;

  const totalTip = convert * tipPercent;

  const total = totalTip + convert;

  const perPersonTotal = total / numberOfPeople;

  personTotal.innerText = `$${perPersonTotal.toFixed(2)}`;
}

const increasePeople = () => {
  
  numberOfPeople += 1;

  numOfPeople.innerText = numberOfPeople;

  calculateBill();
}

const decreasePeople = () => {

  if(numberOfPeople > 1) {
    numberOfPeople --;
  }
  
  numOfPeople.innerText = numberOfPeople;

  calculateBill();
}

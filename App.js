const baseURL = "http://127.0.0.1:5000/api/currconv/";
let staticCurrency = [];
const staticCurrency1 = [
  "INR",
  "INR",
  "INR",
  "PHP",
  "DKK",
  "HUF",
  "CZK",
  "AUD",
  "RON",
  "SEK",
  "IDR",
  "INR",
  "BRL",
  "RUB",
  "HRK",
  "JPY",
  "THB",
  "CHF",
  "SGD",
  "PLN",
  "BGN",
  "TRY",
  "CNY",
  "NOK",
  "NZD",
  "ZAR",
  "USD",
  "MXN",
  "ILS",
  "GBP",
  "KRW",
  "MYR",
  "EUR",
];


const getList =async () => {
let response=  await  fetch(`${baseURL}getcurrencylist`,
{
    headers: { Accept: "application/json" },
  }).catch(function(err) {
    loadScroll(staticCurrency1)
    AddEvtListener(
        "from-scroll-element",
        "from-scroll",
        "selected-abbr",
        "selected-curr"
      );
      AddEvtListener(
        "to-scroll-element",
        "to-scroll",
        "to-selected-abbr",
        "to-selected-curr"
      );
 });
 const json=await response.json().then((res) => {; 
 loadScroll(res.list);
 AddEvtListener(
    "from-scroll-element",
    "from-scroll",
    "selected-abbr",
    "selected-curr",
    'to-scroll'
  );
  AddEvtListener(
    "to-scroll-element",
    "to-scroll",
    "to-selected-abbr",
    "to-selected-curr",
    'from-scroll'
  );
 return res.list;})
return json;
};


 getList();
const currencyNames = {
  CAD: "Canadian Dollar",
  HKD: "Hong Kong Dollar",
  ISK: "Ice landic Krona",
  PHP: "Philippines",
  DKK: "Danish Krone",
  HUF: "Hungarian forint",
  CZK: "Czech Koruna",
  AUD: "Australian Dollar",
  RON: "Romanian Leu",
  SEL: "Swedish Krona",
  IDR: "Indonesian Rupiah",
  INR: "INDIAN RUPEES",
  BRL: "Brazilian Real",
  RUB: "Russian Ruble",
  HRK: "Corotian Kuna",
  JPY: "Japanese Yen",
  THB: "Thai Baht",
  CHF: "Swiss Franc",
  SGD: "Singapore Dollar",
  PLN: "Poland Zloty",
  BGN: "Bulgarian Lev",
  TRY: "Turkish Iira",
  CNY: "Chinese Yuan",
  NOK: "Nowweigan Krone",
  NZD: "New Zealand Dollar",
  ZAR: "South African Rand",
  USD: "US Dollar",
  MXN: "Mexico Peso",
  ILS: "Israeli New Shakei",
  GBP: "Pound Sterling",
  KRW: "South Korean Won",
  MYR: "Malaysian Ringgit",
  EUR: "European Euro",
};



function loadScroll(list){

    document.getElementsByClassName('selected-abbr')[0].innerText='INR';
    document.getElementsByClassName('selected-curr')[0].innerText=currencyNames['INR'];
    document.getElementsByClassName('to-selected-abbr')[0].innerText='INR';
 document.getElementsByClassName('to-selected-curr')[0].innerText=currencyNames['INR'];

list.forEach((country) => {
  let scrollbar = document.createElement("div");
  scrollbar.className = "from-scroll-element";
  let countryName = document.createElement("div");
  countryName.className = "country-name";
  countryName.innerText = currencyNames[country];
  scrollbar.appendChild(countryName);
  let countABBR = document.createElement("div");
  countABBR.className = "count-abbr";
  countABBR.innerText = country;
  scrollbar.appendChild(countABBR);
  document.getElementsByClassName("from-scroll")[0].appendChild(scrollbar);

  let scrollbar1 = document.createElement("div");
  scrollbar1.className = "to-scroll-element";
  let countryName1 = document.createElement("div");
  countryName1.className = "country-name";
  countryName1.innerText = currencyNames[country];
  scrollbar1.appendChild(countryName1);
  let countABBR1 = document.createElement("div");
  countABBR1.className = "count-abbr";
  countABBR1.innerText = country;
  scrollbar1.appendChild(countABBR1);
  document.getElementsByClassName("to-scroll")[0].appendChild(scrollbar1);
});
}

let fromSelect = document.getElementsByClassName("from-scroll-element");

function  AddEvtListener(classname, to, abbr, curr,scroll){
  for (let i = 0; i < fromSelect.length; i++) {
    let element = document.getElementsByClassName(classname)[i];

    document
      .getElementsByClassName(classname)
      [i].addEventListener("click", function () {
        let selectedabbr = element.firstElementChild.textContent;
        let selectedCurr = element.firstElementChild.nextSibling.textContent;

        document.getElementsByClassName(abbr)[0].textContent = selectedCurr;
        document.getElementsByClassName(curr)[0].textContent = selectedabbr;
        callFrom();
        let fromScroll = (document.getElementsByClassName(to)[0].style.display =
          "none");
          document.getElementsByClassName(scroll)[0].style.display='none'
      });
  }
};

// AddEvtListener(
//   "from-scroll-element",
//   "from-scroll",
//   "selected-abbr",
//   "selected-curr"
// );
// AddEvtListener(
//   "to-scroll-element",
//   "to-scroll",
//   "to-selected-abbr",
//   "to-selected-curr"
// );
document
  .getElementsByClassName("from-input-field")[0]
  .addEventListener("click", function () {
    toggleScroll("from-scroll");
    document.getElementsByClassName('to-scroll')[0].style.display='none'
  });
// document
//   .getElementsByClassName("from-toggle")[0]
//   .addEventListener("click", function () {
//     let fromScroll = document.getElementsByClassName("from-scroll")[0];
//     if (
//       fromScroll.style.display === "" ||
//       fromScroll.style.display === "none"
//     ) {
//       fromScroll.style.className = "fas fa-caret-down from-toggle";
//     } else {
//       fromScroll.style.className = "fas fa-sort-up from-toggle";
//     }
//   });

document
  .getElementsByClassName("to-input-field")[0]
  .addEventListener("click", function () {
    toggleScroll("to-scroll");
    document.getElementsByClassName('from-scroll')[0].style.display='none'
  });

// document
//   .getElementsByClassName("to-toggle")[0]
//   .addEventListener("click", function () {
//     let fromScroll = document.getElementsByClassName("from-scroll")[0];
//     if (
//       fromScroll.style.display === "" ||
//       fromScroll.style.display === "none"
//     ) {
//       fromScroll.style.className = "fas fa-caret-down to-toggle";
//     } else {
//       fromScroll.style.className = "fas fa-sort-up to-toggle";
//     }
//   });

const toggleScroll = (classname) => {
  let fromScroll = document.getElementsByClassName(classname)[0];
  if (fromScroll.style.display === "" || fromScroll.style.display === "none") {
    fromScroll.style.display = "flex";
  } else {
    fromScroll.style.display = "none";
  }
};

document.getElementsByClassName('enter-input-from')[0].addEventListener('change', function(){
callFrom();
})

function callFrom(){
    let fromm=  document.getElementsByClassName('selected-abbr')[0].innerText
    let to= document.getElementsByClassName('to-selected-abbr')[0].innerText
 let value=document.getElementsByClassName('enter-input-from')[0].value
 fetchCallForConversion(fromm,value,to,'enter-input-to');
}

document.getElementsByClassName('enter-input-to')[0].addEventListener('change', function(){
    let to=  document.getElementsByClassName('selected-abbr')[0].innerText
     let fromm= document.getElementsByClassName('to-selected-abbr')[0].innerText
  let value=document.getElementsByClassName('enter-input-to')[0].value
  fetchCallForConversion(fromm,value,to,'enter-input-from');
  })

  document.getElementsByClassName('selected-abbr')[0].addEventListener('change',function(){
      let triggerChange=new Event('change')
      document.getElementsByClassName('enter-input-from')[0].dispatchEvent(triggerChange)
  })

  document.getElementsByClassName('to-selected-abbr')[0].addEventListener('change',function(){
    let triggerChange=new Event('change')
    document.getElementsByClassName('enter-input-from')[0].dispatchEvent(triggerChange)
})

function fetchCallForConversion(fromm,value,to,classname){
    fetch(`${baseURL}${fromm}/${value}/${to}`).then(
        res=>{
            res.json().then(result=>{
                document.getElementsByClassName(classname)[0].value=result.value;
            })
        }
    ).catch(err=>{
        console.log(err)
    })
}

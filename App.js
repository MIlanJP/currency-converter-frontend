const baseURL="http://127.0.0.1:5000/api/currconv/"
const staticCurrency=["CAD","HKD","ISK","PHP","DKK","HUF","CZK","AUD","RON","SEK","IDR","INR","BRL","RUB","HRK","JPY","THB","CHF","SGD","PLN","BGN","TRY","CNY","NOK","NZD","ZAR","USD","MXN","ILS","GBP","KRW","MYR","EUR"]
const currencyNames={
    CAD:"Canadian Dollar",
    HKD:"Hong Kong Dollar",
    ISK:"Ice landic Krona",
    PHP:"Philippines",
    DKK:"Danish Krone",
    HUF:"Hungarian forint",
    CZK:"Czech Koruna",
    AUD:"Australian Dollar",
    RON:"Romanian Leu",
    SEL:"Swedish Krona",
    IDR:"Indonesian Rupiah",
    INR:"INDIAN RUPEES",
    BRL:"Brazilian Real",
    RUB:"Russian Ruble",
    HRK:"Corotian Kuna",
    JPY:"Japanese Yen",
    THB:"Thai Baht",
    CHF:"Swiss Franc",
    SGD:"Singapore Dollar",
    PLN:"Poland Zloty",
    BGN:"Bulgarian Lev",
    TRY:"Turkish Iira",
    CNY:"Chinese Yuan",
    NOK:"Nowweigan Krone",
    NZD:"New Zealand Dollar",
    ZAR:"South African Rand",
    USD:"US Dollar",
    MXN:"Mexico Peso",
    ILS:"Israeli New Shakei",
    GBP:"Pound Sterling",
    KRW:"South Korean Won",
    MYR:"Malaysian Ringgit",
    EUR:"European Euro"
}

console.log(currencyNames)
console.log(staticCurrency.length)


// 
// console.log(fromSelect.namedItem);


staticCurrency.forEach(country=>{
    let scrollbar = document.createElement('div');
    scrollbar.className='from-scroll-element'
  let countryName=document.createElement('div');
  countryName.className="country-name"
  countryName.innerText=currencyNames[country]
  scrollbar.appendChild(countryName)
  let countABBR=document.createElement('div');
  countABBR.className="count-abbr"
  countABBR.innerText=country;
  scrollbar.appendChild(countABBR)
    document.getElementsByClassName("from-scroll")[0].appendChild(scrollbar)
}
)
// console.log( document.getElementsByClassName("from-scroll")[0])

let fromSelect=document.getElementsByClassName('from-scroll-element')
// console.log(fromSelect.length);


// document.querySelectorAll(".from-scroll-element").forEach(item=>{
//     item.addEventListener("click",event=>{
        
//     })
// })

for(let i=0;i<fromSelect.length;i++){
    let element=document.getElementsByClassName("from-scroll-element")[i]
    
    // console.log(document.getElementsByClassName("from-scroll-element")[i].innerText)
   document.getElementsByClassName('from-scroll-element')[i].addEventListener("click", function (){
       let selectedabbr=element.firstElementChild.textContent;
       let selectedCurr=element.firstElementChild.nextSibling.textContent;

        document.getElementsByClassName("selected-abbr")[0].textContent=selectedCurr
        document.getElementsByClassName("selected-curr")[0].textContent= selectedabbr
        let fromScroll = document.getElementsByClassName('from-scroll')[0].style.display="none";
   })
}

document.getElementsByClassName('from-input-field')[0].addEventListener("click", function(){
    toggleScroll('from-scroll')
})
document.getElementsByClassName('from-toggle')[0].addEventListener("click", function(){
    let fromScroll = document.getElementsByClassName('from-scroll')[0];
    if(fromScroll.style.display===""||fromScroll.style.display==="none"){
        fromScroll.style.display="flex";
    }else{
        fromScroll.style.display="none";
    }
})

const toggleScroll=(classname)=>{
    let fromScroll = document.getElementsByClassName(classname)[0];
    if(fromScroll.style.display===""||fromScroll.style.display==="none"){
        fromScroll.style.display="flex";
    }else{
        fromScroll.style.display="none";
    }
}


// fetch(`${baseURL}getcurrencylist`).then(data=>{
//     console.log(data.json())
// })

// const currencyList=JSON.parse(staticCurrency)
// console.log(currencyList)

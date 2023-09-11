let currencyRatio = {
    USD: {
        KRW: 1327.50,
        USD: 1,
        VND: 24085.00,
        unit: "달러"
    },
    KRW: {
        KRW: 1,
        USD: 0.00075,
        VND: 18.14,
        unit: "원"
    },
    VND: {
        KRW: 0.055,
        USD: 0.000042,
        VND: 1,
        unit: "동"
    }
};
var unitWords = ["", "만", "억", "조", "경"];
var splitUnit = 10000;
let toButton = document.getElementById("to-button");
let fromButton = document.getElementById("from-button");
let fromCurrency = 'USD';
let toCurrency = 'USD';

// let currentUnit = document.getElementById("to-unit").textContent;
// console.log(currencyRatio[fromCurrency].unit);



// console.log(document.getElementById("to-unit").textContent);
// 1.console.log(currencyRatio.VND.unit);

// console.log(currencyRatio['VND']['unit'])


document.querySelectorAll("#from-cur-list a").forEach((menu) => menu.addEventListener("click", function () {
    //1. 버튼을 가져온다
    //2. 버튼에 값을 바꾼다
    document.getElementById("from-button").textContent = this.textContent;
    //3. 선택된 currency 값을 변수에 저장해준다
    fromCurrency = this.textContent;
    // console.log(currencyRatio[fromCurrency].unit);
    document.getElementById("from-unit").textContent = currencyRatio[fromCurrency].unit;
    
    // console.log("fromCurrency는", fromCurrency);
    convert()
})
);


document.querySelectorAll("#to-cur-list a").forEach((menu) => menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
    document.getElementById("to-unit").textContent = currencyRatio[toCurrency].unit;
    // console.log("toCurrency는", toCurrency);
    reverseConvert()
}))

function convert(type) {
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    // console.log("환전결과", convertedAmount)

    document.getElementById("to-input").value = convertedAmount;
}

function reverseConvert(){
    let reverseAmount = document.getElementById("to-input").value;
    let reverseConvertedAmount = reverseAmount * currencyRatio[toCurrency][fromCurrency];

    document.getElementById("from-input").value = reverseConvertedAmount;
}

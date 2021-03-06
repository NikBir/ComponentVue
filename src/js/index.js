window.onload = function() {
    // ======================================================================
    var https = require('https');

    function convertCurrency(amount, fromCurrency, toCurrency, cb) {
    var apiKey = '770aceaed9776cd5edbb';

    fromCurrency = encodeURIComponent(fromCurrency);
    toCurrency = encodeURIComponent(toCurrency);
    var query = fromCurrency + '_' + toCurrency;

    var url = 'https://free.currconv.com/api/v7/convert?q='
                + query + '&compact=ultra&apiKey=' + apiKey;

    https.get(url, function(res){
        var body = '';

        res.on('data', function(chunk){
            body += chunk;
        });

        res.on('end', function(){
            try {
                var jsonObj = JSON.parse(body);

                var val = jsonObj[query];
                if (val) {
                var total = val * amount;
                cb(null, Math.round(total * 1000) / 1000);
                } else {
                var err = new Error("Value not found for " + query);
                console.log(err);
                cb(err);
                }
            } catch(e) {
                console.log("Parse error: ", e);
                cb(e);
            }
        });
    }).on('error', function(e){
            console.log("Got an error: ", e);
            cb(e);
    });
    }

    //uncomment to test

    // convertCurrency(1, 'RUB', 'USD', function(err, amount) {
    //   console.log(amount);
    // });
    // ======================================================================

    let arrayCurrency = [
        "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD",
        "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF",
        "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP",
        "BYN", "BYR", "BZD", "CAD", "CDF", "CHF", "CLF", "CLP",
        "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF",
        "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD",
        "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF",
        "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR",
        "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD",
        "JOD", "JRY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW",
        "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL",
        "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT",
        "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN",
        "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB",
        "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON",
        "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK",
        "SGD", "SHP", "SLL", "SOS", "SRD", "STD", "SVC", "SYP",
        "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD",
        "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF",
        "VND", "VUV", "WST", "XAF", "XAG", "XCD", "XDR", "XOF",
        "XPF", "YER", "ZAR", "ZMK", "ZMW", "ZWL"
    ];

    let selectTo = document.getElementsByName("selectTo");
    let option = document.createElement('option');
    let selectFrom = document.getElementsByName("selectFrom");
    for(let i = 0; i < arrayCurrency.length; i++){
        option.innerHTML = arrayCurrency[i];
        option.value = arrayCurrency[i];
        option.id = "input_" + arrayCurrency[i];
        selectFrom[0].appendChild(option.cloneNode(true));
        option.id = "output_" + arrayCurrency[i];
        selectTo[0].appendChild(option.cloneNode(true));
    }

    function SelectDefault() {
        selectFrom[0].options[148].selected = true;
        selectTo[0].options[121].selected = true;
    }
    SelectDefault();

    let inInput = this.document.getElementById("curr_input");
    inInput.addEventListener('keydown', checkText, false);
    inInput.addEventListener('keyup', checkText, false);
    let outInput = this.document.getElementById("curr_output");
    let btnConvert = this.document.getElementById("text-convert-to");
    btnConvert.onclick = () => {
        convertCurrency(inInput.value, arrayCurrency[selectFrom[0].options.selectedIndex], arrayCurrency[selectTo[0].options.selectedIndex], function(err, amount) {
            // console.log(amount);
            outInput.value = amount;
        });
    }

    function checkText() {
        let yourText = /[-;":',a-zA-Zа-яА-Я\\=`ё/\*++!@#$%\^++!@#$%\^&_№?><]/;
        if (yourText.test(inInput.value)) {
            inInput.value = "1";
        }
    }
}
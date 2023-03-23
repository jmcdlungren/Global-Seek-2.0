

var searchHistory = JSON.parse(localStorage.getItem("travel")) || []

$(".btn").on("click", function() {
    showNews();
    getWeather();
    clickDisplay();
    $("input").val("")
});



function clickDisplay() {
    rDisplay = $(".rDisplay");
    rDisplay.removeClass("rDisplay");
}

function showNews(cityInput) {
    var city = $("input").val() || cityInput
    saveCity()



    var newsAPI = "ab3780e4108e48e2bdecf81068c21a51";
    var newsURL = "https://gnews.io/api/v4/search?q=" + city + "&lang=en" + "&max=5" + "&apikey=" + newsAPI;
    fetch(newsURL).then(function (response) {
        return response.json();
    })
        .then(function (data) {
            console.log(data)

            var events = $(".events");


            events.removeClass("events");

            var titleOne = $(".event-title-1");
            var linkOne = $(".event-link-1");
            var infoOne = $(".event-info-1");

            titleOne.text(data.articles[0].title)
            linkOne.attr('href', data.articles[0].url)
            infoOne.text(data.articles[0].description)

            var titleTwo = $(".event-title-2");
            var linkTwo = $(".event-link-2");
            var infoTwo = $(".event-info-2");

            titleTwo.text(data.articles[1].title)
            infoTwo.text(data.articles[1].description)
            linkTwo.attr('href', data.articles[1].url)

            var titleThree = $(".event-title-3");
            var linkThree = $(".event-link-3");
            var infoThree = $(".event-info-3");

            titleThree.text(data.articles[2].title)
            infoThree.text(data.articles[2].description)
            linkThree.attr('href', data.articles[2].url)

            var titleFour = $(".event-title-4");
            var linkFour = $(".event-link-4");
            var infoFour = $(".event-info-4");

            titleFour.text(data.articles[3].title)
            infoFour.text(data.articles[3].description)
            linkFour.attr('href', data.articles[3].url)

            var titleFive = $(".event-title-5");
            var linkFive = $(".event-link-5");
            var infoFive = $(".event-info-5");

            titleFive.text(data.articles[4].title)
            infoFive.text(data.articles[4].description)
            linkFive.attr('href', data.articles[4].url)


            renderHistory();
            
        })

    


}

// enter currency function here
//list of currencies 
let country_list = {
    "AED" : "AE",
    "AFN" : "AF",
    "XCD" : "AG",
    "ALL" : "AL",
    "AMD" : "AM",
    "ANG" : "AN",
    "AOA" : "AO",
    "AQD" : "AQ",
    "ARS" : "AR",
    "AUD" : "AU",
    "AZN" : "AZ",
    "BAM" : "BA",
    "BBD" : "BB",
    "BDT" : "BD",
    "XOF" : "BE",
    "BGN" : "BG",
    "BHD" : "BH",
    "BIF" : "BI",
    "BMD" : "BM",
    "BND" : "BN",
    "BOB" : "BO",
    "BRL" : "BR",
    "BSD" : "BS",
    "NOK" : "BV",
    "BWP" : "BW",
    "BYR" : "BY",
    "BZD" : "BZ",
    "CAD" : "CA",
    "CDF" : "CD",
    "XAF" : "CF",
    "CHF" : "CH",
    "CLP" : "CL",
    "CNY" : "CN",
    "COP" : "CO",
    "CRC" : "CR",
    "CUP" : "CU",
    "CVE" : "CV",
    "CYP" : "CY",
    "CZK" : "CZ",
    "DJF" : "DJ",
    "DKK" : "DK",
    "DOP" : "DO",
    "DZD" : "DZ",
    "ECS" : "EC",
    "EEK" : "EE",
    "EGP" : "EG",
    "ETB" : "ET",
    "EUR" : "FR",
    "FJD" : "FJ",
    "FKP" : "FK",
    "GBP" : "GB",
    "GEL" : "GE",
    "GGP" : "GG",
    "GHS" : "GH",
    "GIP" : "GI",
    "GMD" : "GM",
    "GNF" : "GN",
    "GTQ" : "GT",
    "GYD" : "GY",
    "HKD" : "HK",
    "HNL" : "HN",
    "HRK" : "HR",
    "HTG" : "HT",
    "HUF" : "HU",
    "IDR" : "ID",
    "ILS" : "IL",
    "INR" : "IN",
    "IQD" : "IQ",
    "IRR" : "IR",
    "ISK" : "IS",
    "JMD" : "JM",
    "JOD" : "JO",
    "JPY" : "JP",
    "KES" : "KE",
    "KGS" : "KG",
    "KHR" : "KH",
    "KMF" : "KM",
    "KPW" : "KP",
    "KRW" : "KR",
    "KWD" : "KW",
    "KYD" : "KY",
    "KZT" : "KZ",
    "LAK" : "LA",
    "LBP" : "LB",
    "LKR" : "LK",
    "LRD" : "LR",
    "LSL" : "LS",
    "LTL" : "LT",
    "LVL" : "LV",
    "LYD" : "LY",
    "MAD" : "MA",
    "MDL" : "MD",
    "MGA" : "MG",
    "MKD" : "MK",
    "MMK" : "MM",
    "MNT" : "MN",
    "MOP" : "MO",
    "MRO" : "MR",
    "MTL" : "MT",
    "MUR" : "MU",
    "MVR" : "MV",
    "MWK" : "MW",
    "MXN" : "MX",
    "MYR" : "MY",
    "MZN" : "MZ",
    "NAD" : "NA",
    "XPF" : "NC",
    "NGN" : "NG",
    "NIO" : "NI",
    "NPR" : "NP",
    "NZD" : "NZ",
    "OMR" : "OM",
    "PAB" : "PA",
    "PEN" : "PE",
    "PGK" : "PG",
    "PHP" : "PH",
    "PKR" : "PK",
    "PLN" : "PL",
    "PYG" : "PY",
    "QAR" : "QA",
    "RON" : "RO",
    "RSD" : "RS",
    "RUB" : "RU",
    "RWF" : "RW",
    "SAR" : "SA",
    "SBD" : "SB",
    "SCR" : "SC",
    "SDG" : "SD",
    "SEK" : "SE",
    "SGD" : "SG",
    "SKK" : "SK",
    "SLL" : "SL",
    "SOS" : "SO",
    "SRD" : "SR",
    "STD" : "ST",
    "SVC" : "SV",
    "SYP" : "SY",
    "SZL" : "SZ",
    "THB" : "TH",
    "TJS" : "TJ",
    "TMT" : "TM",
    "TND" : "TN",
    "TOP" : "TO",
    "TRY" : "TR",
    "TTD" : "TT",
    "TWD" : "TW",
    "TZS" : "TZ",
    "UAH" : "UA",
    "UGX" : "UG",
    "USD" : "US",
    "UYU" : "UY",
    "UZS" : "UZ",
    "VEF" : "VE",
    "VND" : "VN",
    "VUV" : "VU",
    "YER" : "YE",
    "ZAR" : "ZA",
    "ZMK" : "ZM",
    "ZWD" : "ZW"
}

const dropList = document.querySelectorAll("form select"),
from = document.querySelector(".from select"),
to = document.querySelector(".to select"),
btn = document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
    for(let currency_code in country_list){
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "CAD" ? "selected" : "";
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e =>{
        loadFlag(e.target); 
    });
}

function loadFlag(element){
    for(let code in country_list){
        if(code == element.value){
            let imgTag = element.parentElement.querySelector("img"); 
            imgTag.src = `Assets/Images/Flags/${country_list[code]}.png`;
        }
    }
}

window.addEventListener("load", ()=>{
    getExchangeRate();
});

btn.addEventListener("click", e =>{
    e.preventDefault(); 
    getExchangeRate();
});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", ()=>{
    let tempCode = from.value;
    from.value = to.value;
    to.value = tempCode; 
    loadFlag(from); 
    loadFlag(to); 
    getExchangeRate();
})

function getExchangeRate(){
    const amount = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Getting exchange rate...";
	let url = `https://v6.exchangerate-api.com/v6/b4d442d82ab28cd26e06f67d/latest/${from.value}`;
    fetch(url).then(response => response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[to.value]; 
        let totalExRate = (amountVal * exchangeRate).toFixed(2);
        exchangeRateTxt.innerText = `${amountVal} ${from.value} = ${totalExRate} ${to.value}`;
    }).catch(() =>{
        exchangeRateTxt.innerText = "Something went wrong";
    });
}

function getWeather(cityInput) {
    var city = $("input").val() || cityInput
    saveCity()
    var weather = $(".weather");




    var WeatherAPI = "1453cb68cafdfe7161851616395bc88b";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + WeatherAPI + "&units=" + "imperial";
    fetch(queryURL).then(res => {
        return res.json()
    })
        .then(data => {
            console.log(data)




            weather.removeClass("weather");

            var lat = (data.coord.lat);
            var lon = (data.coord.lon);
            var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?" + "lat=" + lat + "&lon=" + lon + "&appid=" + WeatherAPI + "&units=" + "imperial";

            return fetch(fiveDay).then(res => {
                return res.json()
            })
                .then(data => {
                    console.log(data);

                    var baseDay = dayjs().format('D')
                    var startDay = Number(baseDay);



                    var dayOne = $("#date-1");
                    var iconOne = $("#emoji-1");
                    var iconOneSrc = "http://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png"
                    var tempOne = $("#current-temp-1");
                    var windOne = $("#wind-1");
                    var humidityOne = $("#humidity-1");

                    var dayOneBase = startDay
                    dayOne.text(dayjs().format('M/' + dayOneBase + '/YYYY'));
                    iconOne.text("")
                    iconOne.append('<img src=' + iconOneSrc + '>')
                    tempOne.text(data.list[3].main.temp + "°F")
                    windOne.text(data.list[3].wind.speed + " mph")
                    humidityOne.text(data.list[3].main.humidity + "%")

                    var dayTwo = $("#date-2");
                    var iconTwo = $("#emoji-2");
                    var iconTwoSrc = "http://openweathermap.org/img/wn/" + data.list[11].weather[0].icon + ".png"
                    var tempTwo = $("#current-temp-2");
                    var windTwo = $("#wind-2");
                    var humidityTwo = $("#humidity-2");

                    var dayTwoBase = dayOneBase + 1
                    dayTwo.text(dayjs().format('M/' + dayTwoBase + '/YYYY'));
                    iconTwo.text("")
                    iconTwo.append('<img src=' + iconTwoSrc + '>')
                    tempTwo.text(data.list[11].main.temp + "°F")
                    windTwo.text(data.list[11].wind.speed + " mph")
                    humidityTwo.text(data.list[11].main.humidity + "%")

                    var dayThree = $("#date-3");
                    var iconThree = $("#emoji-3");
                    var iconThreeSrc = "http://openweathermap.org/img/wn/" + data.list[19].weather[0].icon + ".png"
                    var tempThree = $("#current-temp-3");
                    var windThree = $("#wind-3");
                    var humidityThree = $("#humidity-3");

                    var dayThreeBase = dayTwoBase + 1
                    dayThree.text(dayjs().format('M/' + dayThreeBase + '/YYYY'));
                    iconThree.text("")
                    iconThree.append('<img src=' + iconThreeSrc + '>')
                    tempThree.text(data.list[19].main.temp + "°F")
                    windThree.text(data.list[19].wind.speed + " mph")
                    humidityThree.text(data.list[19].main.humidity + "%")

                    var dayFour = $("#date-4");
                    var iconFour = $("#emoji-4");
                    var iconFourSrc = "http://openweathermap.org/img/wn/" + data.list[27].weather[0].icon + ".png"
                    var tempFour = $("#current-temp-4");
                    var windFour = $("#wind-4");
                    var humidityFour = $("#humidity-4");

                    var dayFourBase = dayThreeBase + 1
                    dayFour.text(dayjs().format('M/' + dayFourBase + '/YYYY'));
                    iconFour.text("")
                    iconFour.append('<img src=' + iconFourSrc + '>')
                    tempFour.text(data.list[27].main.temp + "°F")
                    windFour.text(data.list[27].wind.speed + " mph")
                    humidityFour.text(data.list[27].main.humidity + "%")

                    var dayFive = $("#date-5");
                    var iconFive = $("#emoji-5");
                    var iconFiveSrc = "http://openweathermap.org/img/wn/" + data.list[35].weather[0].icon + ".png"
                    var tempFive = $("#current-temp-5");
                    var windFive = $("#wind-5");
                    var humidityFive = $("#humidity-5");

                    var dayFiveBase = dayFourBase + 1
                    dayFive.text(dayjs().format('M/' + dayFiveBase + '/YYYY'));
                    iconFive.text("")
                    iconFive.append('<img src=' + iconFiveSrc + '>')
                    tempFive.text(data.list[35].main.temp + "°F")
                    windFive.text(data.list[35].wind.speed + " mph")
                    humidityFive.text(data.list[35].main.humidity + "%")


                    
                })

        })
        .catch(error => console.log('ERROR'))
}


function saveCity() {
    
    searchHistory.push($("input").val())
    localStorage.setItem("travel", JSON.stringify(searchHistory))
}

function historySearch() {
    console.log(this.dataset.city)
    showNews(this.dataset.city)
    getWeather(this.dataset.city)
    clickDisplay();
}

function renderHistory() {
    var favorites = $(".favorites");
    var modifiedHistory = [...new Set(searchHistory)]
    favorites.text("")
    for (i = 0; i < searchHistory.length; i++) {
        var recentSearch = document.createElement('button');
        recentSearch.classList.add('fav-btn')
        recentSearch.setAttribute('data-city', modifiedHistory[i])
        
        
        
        recentSearch.addEventListener("click", historySearch)

        if(recentSearch.textContent = modifiedHistory[i]) {
            favorites.append(recentSearch);
            recentSearch.addEventListener("click", historySearch)
        }
    }
}

renderHistory();


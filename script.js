let cardsContainerEl = document.querySelector("#cards-container");
let showsCardsEl = document.querySelector("#show-cards");

const API_KEY = "3TYMUVGXW5H8UT63TFPZ3XWZ4"
let dtmFirstDate = new Date();
let dtmSecondDate = new Date();
dtmSecondDate.setDate(dtmSecondDate.getDate() + 7);

function getForeCast() {
    let searchInputEl = document.querySelector("#txtSearchCity").value;
    if (searchInputEl != "") {
        let year = dtmFirstDate.getFullYear();
        let month = String(dtmFirstDate.getMonth() + 1).padStart(2, '0');
        let day = String(dtmFirstDate.getDate()).padStart(2, '0');
        let formattedDate1 = year + '-' + month + '-' + day;
        // console.log(formattedDate1);
    
        year = dtmSecondDate.getFullYear();
        month = String(dtmSecondDate.getMonth() + 1).padStart(2, '0');
        day = String(dtmSecondDate.getDate()).padStart(2, '0');
        let formattedDate2 = year + '-' + month + '-' + day;
        // console.log(formattedDate2);
    
    
        console.log(searchInputEl);
        let API_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + searchInputEl + "/" + formattedDate1 + "/" + formattedDate2 + "?key=" + API_KEY;
        console.log(API_URL);
    
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // document.querySelector("#input-text").value = "";
                // console.log(data);
                let cityTitle = document.createElement("h1");
                cityTitle.innerHTML = data.resolvedAddress;
                cardsContainerEl.append(cityTitle);
            // let showPoster = document.createElement("img");
    
            // showPoster.setAttribute("src", show.show.image.medium);
    
    
            let days = data.days.map((days) => {
                // render tv shows
                // showsContainerEl.append(showPoster);
    
                // let hr = document.createElement("hr");
                // showsContainerEl.append(hr);
    
                console.log(days.icon);
                console.log(days.conditions);
                console.log(days.description);
                console.log(days.datetime);
            });
        });
    }
}

//getForeCast();

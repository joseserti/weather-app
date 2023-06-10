let placeNameContainerEl = document.querySelector("#placeName-container");
let colCard = document.querySelector("#col-card");

const API_KEY = "3TYMUVGXW5H8UT63TFPZ3XWZ4"
let dtmFirstDate = new Date();
let dtmSecondDate = new Date();
dtmSecondDate.setDate(dtmSecondDate.getDate() + 7);

function getForeCast() {
    let searchInputEl = document.querySelector("#txtSearchCity").value;
    if (searchInputEl != "") {

        placeNameContainerEl.innerHTML = "";
        colCard.innerHTML = "";

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
    
        let API_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + searchInputEl + "/" + formattedDate1 + "/" + formattedDate2 + "?key=" + API_KEY;
        //console.log(API_URL);
    
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                
                let cityTitle = document.createElement("h1");
                cityTitle.innerHTML = data.resolvedAddress;
                placeNameContainerEl.append(cityTitle);

                let days = data.days.map((days) => {
                    let cards = document.createElement("div");
                    cards.className="col-12 col-md-6 col-lg-4 p-3";

                    // Create the Card
                    let card = document.createElement("div");
                    card.className="card text-center";

                    // Create and set Card Header with the date of weather
                    let cardDate = document.createElement("div");
                    cardDate.className="card-header";
                    cardDate.innerHTML = days.datetime;
                    card.append(cardDate);

                    // Create and set Card Icon with respective image
                    let showIcon = document.createElement("img");

                    showIcon.className="card-img-top";
                    showIcon.setAttribute("size", "small");
                    showIcon.setAttribute("src", "./assets/icons/" + days.icon + ".svg");
                    card.appendChild(showIcon);

                    // Create Card Body
                    let cardBody = document.createElement("div")
                    cardBody.className="card-body";

                    // Create and set Card Title with weather conditions
                    let cardConditions = document.createElement("h5");
                    cardConditions.className="card-title";
                    cardConditions.innerHTML = days.conditions;
                    cardBody.appendChild(cardConditions);

                    // Create and set Card Text with weather description
                    let cardDescription = document.createElement("p");
                    cardDescription.className="card-title";
                    cardDescription.innerHTML = days.description;
                    cardBody.appendChild(cardDescription);
                    
                    // Create ans set Card Footer with the Min and Max Temp
                    let cardMinMax = document.createElement("div");
                    cardMinMax.className="card-footer";
                    cardMinMax.innerHTML = "Min: " + days.tempmin + " -/-  Max: " + days.tempmax
                    
                    // Add Card Body to Card
                    card.append(cardBody);
                    // Add Card Footer to Card
                    card.appendChild(cardMinMax);

                    cards.append(card);
                    // Add Card to Page
                    colCard.append(cards);

                    // console.log(days.icon);
                    // console.log(days.conditions);
                    // console.log(days.description);
                    // console.log(days.datetime);
            });
        });
    }
}

//getForeCast();

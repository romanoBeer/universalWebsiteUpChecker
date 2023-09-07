let sites = ["https://n-8.co.za/", "https://romanobeer.github.io/", "https://mahindrafarmequipment.co.za/", "https://mahindrajhbsouth.co.za/", "https://ipopcars.co.za/", "https://pegc.co.za/"];
console.log(sites);

let siteCount = sites.length;
let up = 0,
    down = 0,
    customDown = "0",
    customUp = 0;
let websites = document.getElementById("websites");
let siteName = document.getElementById("searchTerm");
let websitesCount = document.getElementById("websitesCount").innerHTML = siteCount;

//open modal
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

//Display Custom Site Status
siteName.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        let customSite = [siteName.value];
        console.log(customSite);
        checkCustom(customSite);
        checkCustomAvailability();
        console.log(isValidUrl(customSite));
    }else{
        console.log("not enter");
    }
});

//URL Validation
const isValidUrl = urlString=> {
    try { 
        return Boolean(new URL(urlString)); 
    }
    catch(e){ 
        return false; 
    }
}

//Check custom website for up or down status
function checkCustom(customSite) {
    customSite.forEach(url => {
        checkCustomAvailability(url);
    });
}

function checkCustomAvailability(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                customDown++;
                return;
            } else {
                customUp++;
                return;
            }
        })
        .catch(error => {
            document.getElementById("customStatus").innerHTML = customDown;
            return `${url} is down (Error: ${error.message}).`;
        })
        .then(result => {
            const listItem = document.createElement("li");
            listItem.textContent = result;
        });
}

//Display all websites
sites.map((item) => {
    websites.innerHTML += `<div style="color:#818181">${item}</div>`
});

document.getElementById("customStatus").innerHTML = down;

//Check all websites for up or down status
function checkAllWebsites() {
    sites.forEach(url => {
        checkWebsiteAvailability(url);
    });
}

function checkWebsiteAvailability(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                down++;
                return;
            } else {
                up++;
                document.getElementById("websiteUp").innerHTML = up;
                return;
            }
        })
        .catch(error => {
            down++;
            document.getElementById("websiteDown").innerHTML = down;
            return `${url} is down (Error: ${error.message}).`;
        })
        .then(result => {
            const listItem = document.createElement("li");
            listItem.textContent = result;
        });
}

checkAllWebsites();



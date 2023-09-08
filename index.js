let sites = ["https://mahindrafarmequipment.co.za/", "https://mitsubishimotorsumhlanga.co.za/home/", "https://nmidsmhavalumhlanga.co.za/",
    "https://mahindrajhbsouth.co.za/", "https://ipopcars.co.za/", "https://pegc.co.za/", "https://xneelo.co.za/", "https://cherybloemfontein.co.za/",
    "https://cherydurbancentral.co.za/", "https://cheryjhbsouth.co.za/", "https://cherykimberley.co.za/", "https://gwmmbombela.co.za/", "https://havalbloemfontein.co.za/",
    "https://havalmbombela.co.za/", "https://havalpretorianorth.co.za/", "https://havaltheglen.co.za/", "https://havaltoti.co.za/", "https://islandwayvilla.co.za/",
    "https://kleosscapital.com/", "https://mycherywelkom.co.za/", "https://nmichery.co.za/", "http://sacnaspevent.co.za/", "https://havalballito.co.za/",
    "https://bayresurgence.co.za/", "https://havaltheglen.co.za/", "https://havaltoti.co.za/", "https://ipatc.joburg/"
];
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
            return `${url} is down (Error: ${error.message}).`;
        })
        .then(result => {
            document.getElementById("websiteDown").innerHTML = down;

            const listItem = document.createElement("li");
            listItem.textContent = result;
        });
}

checkAllWebsites();

let displayCustom = document.getElementById("displayCustom");

let customSite = [];

//Display Custom Site Status
siteName.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        pushData(customSite);
        console.log(customSite);

        if (isValidUrl(customSite) == true) {
            checkCustom(customSite);
            
        } else {
            console.log("this is not a valid site");
        };
    } else {
        return;
    };

    document.getElementById("noCustomSites").style.display = "none";
    customSite.map((item) => {
        displayCustom.innerHTML += `<div style="color:#818181">${item}</div>`;
    });
});

function pushData(customSite) {

    const data = document.getElementById('searchTerm').value;
    customSite.push(data);
}


//URL Validation
const isValidUrl = urlString => {
    try {
        return Boolean(new URL(urlString));
    } catch (e) {
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
            } else {
                customUp++;
                document.getElementById("customUp").innerHTML = customUp;
            }
        })
        .catch(error => {
            document.getElementById("customDown").innerHTML = customDown;
            return;
        })
        .then(result => {
            const listItem = document.createElement("li");
            listItem.textContent = result;
        });
}
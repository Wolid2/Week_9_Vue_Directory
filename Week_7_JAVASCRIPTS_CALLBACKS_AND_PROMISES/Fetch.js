// creating a url of the API for the current location
let url = 'https://api.wheretheiss.at/v1/satellites/25544'

// creating a HTML elements to display iss
let issLat = document.querySelector('#iss_lat')
let issLong = document.querySelector('#iss_long')
let timeIssLocationFetched = document.querySelector('#time')

// updating a ISS location
let update = 10000
let maxTimeAttempts = 3

// creating a marker for ISS on the map
let issMarker
//  creating an icon for the ISS
let icon = L.icon({
    iconUrl: 'iss_icon.png',
    iconSize: [50, 50],
    iconAnchor: [15,15]
})


// creating a Leaflet map
let map = L.map('iss-map').setView([0,0],1)
//  adding a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


iss(maxTimeAttempts)
//  creating a function to fetch ISS location
// setInterval (iss, update)
function iss(attempts) {
    if (attempts <= 0) {
        alert("Attempted to contact server, failed after several attempts.");
        return
    }

    fetch(url).then(res => {
        return res.json()
    }).then((issData) => {
        console.log(issData)
        let lat = issData.latitude
        let long = issData.longitude
        //  updating a HTML elements with new coordinators
        issLat.innerHTML = lat
        issLong.innerHTML = long
        // if it doesn't exist then it will update it
        if(!issMarker){
            issMarker = L.marker([lat, long], {icon: icon}).addTo(map)
        }else{
            issMarker.setLatLng ([lat, long])
        }
        //  creating a  fetched time for the date
        let now = Date()
        timeIssLocationFetched.innerHTML = `This data was fetched at ${now}`
    // if there is an error then it will try to attempts
    }).catch((err) => {
        attempts = attempts-1
        console.log('Error!', err)
    }).finally(()=>{
        setTimeout(iss, update,attempts)
    })
}
//api key = dZvFSDlqyjb3S5prOv06EbmfM5splAc1vjL0hUIq

document.querySelector('#dateBtn').addEventListener('click', getFetch);



function getFetch(){
    let datum = document.querySelector('#startDate').value; // deze werkt niet waarom?
    //console.log(datumpie);
    //let datum = '2015-09-07';
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${datum}&end_date=${datum}&api_key=dZvFSDlqyjb3S5prOv06EbmfM5splAc1vjL0hUIq`; //hier de url 
fetch(url)
.then(res => res.json())
.then(data => {
    const elementCount = data.element_count;
    const aboluteMagnitude = data['near_earth_objects'][datum][0]['absolute_magnitude_h'];
    const earthDistKil = data['near_earth_objects'][datum][0]['close_approach_data'][0]['miss_distance']['kilometers'];
    const celBody = data['near_earth_objects'][datum][0]['close_approach_data'][0]['orbiting_body'];
    const velocityKmPerHour = data['near_earth_objects'][datum][0]['close_approach_data'][0]['relative_velocity']['kilometers_per_hour'];
    const diameterKilMin = data['near_earth_objects'][datum][0]['estimated_diameter']['kilometers']['estimated_diameter_min'];
    const diameterKilMax = data['near_earth_objects'][datum][0]['estimated_diameter']['kilometers']['estimated_diameter_max'];
    const objectName = data['near_earth_objects'][datum][0]['name'];
    console.log(data);
    //console.log(data['near_earth_objects']['2015-09-07'][0]['absolute_magnitude_h']);
    //console.log(data.near_earth_objects.2015-09-07);
    //document.querySelector('#test').innerHTML = data.near_earth_objects[0].absolute_magnitude_h;

    document.querySelector('#elCount').innerHTML = `We have detected ${elementCount} nearby objects for this search`;
    //gebruiker moet een object selecteren en dan is het de data hieronder die daar betrekking op heeft
    document.querySelector('#objectName').innerHTML = `This object was named: ${objectName}`;
    document.querySelector('#orbit').innerHTML = `And it was orbitting ${celBody}`;
    document.querySelector('#earthDist').innerHTML = `The distance from earth was ${earthDistKil} kilometers`;
    document.querySelector('#velocity').innerHTML = `It was traveling at a velocity of ${velocityKmPerHour} kilometers per hour`;
    document.querySelector('#diameter').innerHTML = `It has a minimum diameter of ${diameterKilMin} Kilometers and a maximum diameter of ${diameterKilMax}`;
    document.querySelector('#abMag').innerHTML = `The absolute magnitude of this object was ${aboluteMagnitude}`;
    //document.querySelector('').innerHTML = ;
    //document.querySelector('').innerHTML = ;
    
})
.catch(err => {
    console.log(`err ${err}`)
})
}

//Oke selectere op datum werkt, nu nog toevoegen dat je door alle objecten heen kan klikken.
//next en previous button toevoegen, plus selecteren op getal. 
//en dan opmaak even mooi maken

//ow en picture of the day toevoegen! met zoeken op datum en omschrijving... dudeeee accessing data van nasa hoe cool is dat!
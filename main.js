//api key = dZvFSDlqyjb3S5prOv06EbmfM5splAc1vjL0hUIq
const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-07&api_key=dZvFSDlqyjb3S5prOv06EbmfM5splAc1vjL0hUIq`; //hier de url 
fetch(url)
.then(res => res.json())
.then(data => {
    let datum = '2015-09-07';
    let elementCount = data.element_count;
    let aboluteMagnitude = data['near_earth_objects'][datum][0]['absolute_magnitude_h'];
    let earthDistKil = data['near_earth_objects'][datum][0]['close_approach_data'][0]['miss_distance']['kilometers'];
    let celBody = data['near_earth_objects'][datum][0]['close_approach_data'][0]['orbiting_body'];
    let velocityKmPerHour = data['near_earth_objects'][datum][0]['close_approach_data'][0]['relative_velocity']['kilometers_per_hour'];
    let diameterKilMin = data['near_earth_objects'][datum][0]['estimated_diameter']['kilometers']['estimated_diameter_min'];
    let diameterKilMax = data['near_earth_objects'][datum][0]['estimated_diameter']['kilometers']['estimated_diameter_max'];
    let objectName = data['near_earth_objects'][datum][0]['name'];
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

//als je m wilt gebruiken op de click dan moet ie in een functie staan. En die functie aanroepen in eventlistener parameter. 
//gewoon aanroepen ipv. hele code erin scrhijven.
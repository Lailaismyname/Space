//api key = dZvFSDlqyjb3S5prOv06EbmfM5splAc1vjL0hUIq

let asteroidIndex = 0;

document.querySelector('#dateBtn').addEventListener('click', getFetch);


function getFetch(){
    let datum = document.querySelector('#startDate').value; 
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${datum}&end_date=${datum}&api_key=dZvFSDlqyjb3S5prOv06EbmfM5splAc1vjL0hUIq`; 
        
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            const outputData = document.querySelector('#outputData');
            
            const elementCount = data.element_count;
            const aboluteMagnitude = data['near_earth_objects'][datum][asteroidIndex]['absolute_magnitude_h'];
            const earthDistKil = data['near_earth_objects'][datum][asteroidIndex]['close_approach_data'][0]['miss_distance']['kilometers'];
            const celBody = data['near_earth_objects'][datum][asteroidIndex]['close_approach_data'][0]['orbiting_body'];
            const velocityKmPerHour = data['near_earth_objects'][datum][asteroidIndex]['close_approach_data'][0]['relative_velocity']['kilometers_per_hour'];
            const diameterKilMin = data['near_earth_objects'][datum][asteroidIndex]['estimated_diameter']['kilometers']['estimated_diameter_min'];
            const diameterKilMax = data['near_earth_objects'][datum][asteroidIndex]['estimated_diameter']['kilometers']['estimated_diameter_max'];
            const objectName = data['near_earth_objects'][datum][asteroidIndex]['name'];
            
            document.querySelector('#numAst').max= elementCount;
            document.querySelector('#elCount').innerHTML = `We have detected ${elementCount} nearby asteroids for this search. Select which asteroid data you wish to view`;
            //gebruiker moet een object selecteren en dan is het de data hieronder die daar betrekking op heeft

            outputData.innerHTML = `We have detected ${objectName}. It was orbitting ${celBody}. The distance from earth was ${earthDistKil} kilometers. It was traveling at a velocity of ${velocityKmPerHour} kilometers per hour. It has a minimum diameter of ${diameterKilMin} Kilometers and a maximum diameter of ${diameterKilMax}. The absolute magnitude of this object was ${aboluteMagnitude}`

            
        })
        .catch(err => {
            console.log(`err ${err}`)
        })
}

let showButton = document.querySelector('#showOtherAsteroid');
            showButton.addEventListener('click',()=>{
                asteroidIndex = document.querySelector('#numAst').value - 1;
                getFetch(asteroidIndex);
                console.log(asteroidIndex);
            })
//picture of the day toevoegen met ander api. 
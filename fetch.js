const url = `https://api.nasa.gov/planetary/apod?api_key=dZvFSDlqyjb3S5prOv06EbmfM5splAc1vjL0hUIq`; //hier de url 
fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(`err ${err}`)
})

//als je m wilt gebruiken op de click dan moet ie in een functie staan. En die functie aanroepen in eventlistener parameter. 
//gewoon aanroepen ipv. hele code erin scrhijven.
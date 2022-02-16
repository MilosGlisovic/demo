window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [

    

    {
     name: 'Ivana Knežević, TOK, 100x300 cm',
     logo: '1.png',
     width: "1.5",
     height: "0.5",
     location: {
         lat: 43.89185, 
         lng: 20.34950,
     }
  
 },

   
 {
     name: 'Ivana Knežević, GRAD, 70x130 cm',
     logo: '2.png',
     width: "1.1",
     height: "0.6",
     location: {
         lat: 43.89178,
         lng: 20.34963,
     }
 },

 {
     name: 'Ivana Knežević, ŠUMA SVETLOSTI, 15x15x15 cm',
     logo: '3.png',
     width: "1",
     height: "1",
     location: {
         lat: 43.89169,
         lng: 20.34973,
     }
 },

 {
     name: 'Ivana Knežević, ŠUMA TAME, 15x15x15 cm',
     logo: '4.png',
     width: "1",
     height: "1",
     location: {
         lat: 43.89171,
         lng: 20.34994,
     }
 },
 





 {
    name: 'Ivana Knežević, GALAKSIJA VATROMET, 30x35 cm',
    logo: '5.png',
    width: "1",
    height: "0.9",
    location: {
        lat: 43.89178,
        lng: 20.34980,
    }
 
},


{
    name: 'Ivana Knežević, GRAD, 60x60 cm',
    logo: '6.png',
    width: "1",
    height: "1",
    location: {
        lat: 43.89186, 
        lng: 20.34968,
    }
},


{
    name: 'Ivana Knežević, PORODICA, 53x91 cm',
    logo: '7.png',
    width: "1",
    height: "0.6",
    location: {
        lat: 43.89184,
        lng: 20.34989,
    }
},

{
    name: 'Ivana Knežević, ROTACIJE, 50x40 cm',
    logo: '8.png',
    width: "0.8",
    height: "1",
    location: {
        lat: 43.89177,
        lng: 20.35006,
    }
},
{
    name: 'Ivana Knežević, ŠUMA, 50x100 cm',
    logo: '9.png',
    width: "1",
    height: "0.5",
    location: {
        lat: 43.89184,
        lng: 20.35015,
    }
},
{
    name: 'Ivana Knežević, PLIMA, 40x60 cm',
    logo: '10.png',
    width: "1",
    height: "0.7",
    location: {
        lat: 43.89173,
        lng: 20.35020,
    }
},

{
    name: 'Ivana Knežević, TOK, 100x300 cm',
    logo: '1.png',
    width: "1.5",
    height: "0.5",
    location: {
        lat: 45.64763, 
        lng: 0.15360,
    }
 
},

  
{
    name: 'Ivana Knežević, GRAD, 70x130 cm',
    logo: '2.png',
    width: "1.1",
    height: "0.6",
    location: {
        lat: 45.64756,
        lng: 0.153797,
    }
},

{
    name: 'Ivana Knežević, ŠUMA SVETLOSTI, 15x15x15 cm',
    logo: '3.png',
    width: "1",
    height: "1",
    location: {
        lat: 45.64769,
        lng: 0.15383,
    }
},

{
    name: 'Ivana Knežević, ŠUMA TAME, 15x15x15 cm',
    logo: '4.png',
    width: "1",
    height: "1",
    location: {
        lat: 45.64761,
        lng: 0.15397,
    }
},






{
   name: 'Ivana Knežević, GALAKSIJA VATROMET, 30x35 cm',
   logo: '5.png',
   width: "1",
   height: "0.9",
   location: {
       lat: 45.64773,
       lng: 0.15404,
   }

},


{
   name: 'Ivana Knežević, GRAD, 60x60 cm',
   logo: '6.png',
   width: "1",
   height: "1",
   location: {
       lat: 45.64765, 
       lng: 0.15421,
   }
},


{
   name: 'Ivana Knežević, PORODICA, 53x91 cm',
   logo: '7.png',
   width: "1",
   height: "0.6",
   location: {
       lat: 45.64778,
       lng: 0.15430,
   }
},

{
   name: 'Ivana Knežević, ROTACIJE, 50x40 cm',
   logo: '8.png',
   width: "0.8",
   height: "1",
   location: {
       lat: 45.64771,
       lng: 0.15451,
   }
},
{
   name: 'Ivana Knežević, ŠUMA, 50x100 cm',
   logo: '9.png',
   width: "1",
   height: "0.5",
   location: {
       lat: 45.64784,
       lng: 0.15453,
   }
},
{
   name: 'Ivana Knežević, PLIMA, 40x60 cm',
   logo: '10.png',
   width: "1",
   height: "0.7",
   location: {
       lat: 45.64779,
       lng: 0.15474,
   }
},














   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;
       let name2 = place.name;
       let logo = place.logo;
       let wdt = place.width;
       let hg = place.height;


       

       const model = document.createElement('a-image');
                   model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
                   model.setAttribute('name', name2);
                   model.setAttribute('src', logo);
                   model.setAttribute('width', wdt); 
                   model.setAttribute('height', hg); 
                   model.setAttribute('look-at', '[gps-camera]');





                   // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
                   model.setAttribute('scale', '14, 14');

                   

    

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       


       
       const clickListener = function(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        const name = ev.target.getAttribute('name');
        
        const el = ev.detail.intersection && ev.detail.intersection.object.el;

        //const distanceMsg = document.querySelector('[gps-entity-place]').getAttribute('distanceMsg');


        if (el && el === ev.target) {

    
            const label = document.createElement('span');
            //const msg = document.createElement('p');
            const container = document.createElement('div');
            const btn = document.createElement('button');
            //const link = document.createElement('a');
           // const btn1 = document.createElement('button');
            container.setAttribute('id', 'place-label');
            //link.setAttribute('href', place.link2);
            label.innerText = name;
           //msg.innerText = distanceMsg;
            btn.innerText = 'Close';
            //link.innerText = 'Zavrtite tocak';
           // btn1.innerText = 'Play';
            container.appendChild(label);
            //container.appendChild(msg);
            container.appendChild(btn);
            //container.appendChild(link);
            //container.appendChild(btn1);
            document.body.appendChild(container);

           // btn1.addEventListener("click", function() {
             //   let play = new SpeechSynthesisUtterance();
              // play.text = name;
              // window.speechSynthesis.speak(play);
              //});

            btn.addEventListener("click", function() {
                container.parentElement.removeChild(container);
              });

           // setTimeout(() => {
             //   container.parentElement.removeChild(container);
            //}, 1500);
        }
    };

    model.addEventListener('click', clickListener);
       scene.appendChild(model);
   });
}
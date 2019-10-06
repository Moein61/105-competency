const salon={
  name: 'Fashion Pet',
  Phone: '9283458765',
  address: {
      street: '7th',
      number: '8965'
  },
  hourtime: {
      day: 'Mon-Fri',
      open: '9:00 Am',
      close: '5:00 Pm'
  },

  pets:[]



 
}


document.getElementById('info').innerHTML=`<h2>Welcome to ${salon.name} </h2> <br> Tel: ${salon.Phone} <br> Address: ${salon.address.street} ${salon.address.number} <br> Working days: <br> ${salon.hourtime.day} - ${salon.hourtime.open} to ${salon.hourtime.close}`;
var petC=0;
class pet{
    constructor(name,age,type,gender,breed,service,ownerName,contactPhone){
    this.hunger=10;
    this.happiness=20;
    this.name=name;
    this.age=age;
    this.type=type;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=ownerName;
    this.contactPhone=contactPhone;
    this.id="Pet"+petC;
    petC += 1;
    }

}

var txtname=document.getElementById('name');
var txtage=document.getElementById('age');
var txttype=document.getElementById('type');
var txtgender=document.getElementById('gender');
var txtbreed=document.getElementById('breed');
var txtservice=document.getElementById('service');
var txtownername=document.getElementById('ownerName');
var txtcontactphone=document.getElementById('contactPhone');

function register(){
    var thepet=new pet(txtname.value, txtage.value, txttype.value, txtgender.value, txtbreed.value, txtservice.value, txtownername.value, txtcontactphone.value);
    salon.pets.push(thepet);
    clear();
    alert("The Pet is registered...");
    displayTable(thepet);
    //console.log(thepet); 
}

function clear(){

txtname.value="";
txtage.value="";
txttype.value="";
txtgender.value="";
txtbreed.value="";
txtservice.value="";
txtownername.value="";
txtcontactphone.value="";
}

function displayTable(aPet){
    var tBody=document.getElementById('petList');
    var row= ` <tr id="${aPet.id}"><td>${aPet.name}</td><td>${aPet.age}</td><td>${aPet.type}</td><td>${aPet.gender}</td><td>${aPet.breed}</td><td>${aPet.service}</td><td>${aPet.ownerName}</td><td>${aPet.contactPhone}</td><td><button onclick='remove("${aPet.id}");'>Delete</button></td></tr>`;
    tBody.innerHTML += row;
}

function remove(petId){
    alert ("Are you sure you want to delete " + petId);

    var tr=document.getElementById(petId);

    for(var i = 0; i<salon.pets.length; i++){
       
       var selectedpet=salon.pets[i];
        if (selectedpet.id==petId){
            indexDelete=i;
        }

    }

    salon.pets.splice(indexDelete,1);
    tr.remove();


}


function search(){
    
    reset();
    var searchstring=document.getElementById('search').value;

    for(var j=0; j<salon.pets.length; j++){
        var searchedpet=salon.pets[j];
        if (searchstring==searchedpet.name || searchstring==searchedpet.age || searchstring==searchedpet.type || searchstring==searchedpet.gender || searchstring==searchedpet.breed || searchstring==searchedpet.service || searchstring==searchedpet.ownerName || searchstring==searchedpet.contactPhone ) {
           foundedpet=j;
           var find=document.getElementById("Pet"+foundedpet);
           find.style.backgroundColor="blue";

        }
        else{document.getElementById('notfound').innerHTML='Not Founded'}
    }
    
    searchstring="";
}

function reset(){
    document.getElementById('notfound').innerHTML="";
    var f=document.getElementById('petList');
    f.style.backgroundColor="white";
}



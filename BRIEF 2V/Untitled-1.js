var title = document.getElementById ("inpTitle");
var author = document.getElementById ("inpAuthor");
var date = document.getElementById ("date");
var price = document.getElementById ("inpPrice"); 
var email = document.getElementById("email"); 
var filedsWithValidation = [ "email"]; 
var languages = document.getElementById("languages"); 
var inputs = document.getElementsByClassName("inputs");
let types = document.getElementsByClassName("type");
const regex = document.getElementById("regex"); 
var span = document.getElementById("reg") ; 
var col_select;
var tab  = document.getElementById("list");
var row = tab.insertRow(tab.length);
var rbs=document.querySelectorAll("input[name='rd']");
var btn = document.getElementById("btnAdd")


class ouvrage { 
    constructor ( title , author , price , date , email , type, language) {

 this.title = title ;
 this.author = author;
 this.price = price ;
 this.date = date  ;
 this.email = email ; 
 this.type = type ;
 this.language = language;
} 
 
DétailOuvrage(){
    return "L'ouvrage" + this.title + "it is " + this.author + "in language"
     + this.price + "written by " + this.date + "and publish in"
    + this.email + "the price is" + this.ty+ "uu" + this.language + "yy"; 
}
}

 function verif(){
     console.log(languages.value);
                let valid = 0;

                for (let i = 0; i < inputs.length; i++) {
                   
                    if(inputs[i].value =="" ) {
                        inputs[i].nextElementSibling.innerHTML = "Field required ";
                        inputs[i].style.borderColor = "red"
                        valid++;
                     }else{
                        inputs[i].style.borderColor = "green";
                    }
                }
                    
                 if(isNaN(price.value)){
                    price.nextElementSibling.innerHTML = "Enter price";
                 price.style.borderColor = "red"
                 valid ++;
             }
                
               if(title.value.length>30){
                   title.nextElementSibling.innerHTML ="Less than 30 char";
                    title.style.borderColor = "red"
                     valid++;
                }
                
               if(languages.value == ""){
                    languages.style.borderColor = "red"
                    languages.nextElementSibling.innerHTML = "field required";
                    valid++;
                }else{
                    languages.style.borderColor = "green";
                }

                 var check = false;

                for (let i = 0; i< types.length; i++){
                    if(types[i].checked){
                         check = true;
                         var theType = types[i].value;
                       break;
                    }else{
                         console.log("error");
                     }
                     console.log(theType);

             
                }
                 }
                


 
 var table = document.getElementById("list") ;
 var array = [];

       var ty = document.querySelector("input[type=radio]:checked");


    let Ov = new ouvrage(title.value, author.value, price.value, date.value,
        email.value, types.value, languages.value);
        
        array.push(Ov);

    for (let i= 0; i<array.length; i++) {
        var tr = document.createElement("tr");
        tr.innerHTML = `<td>${Ov.title}</td>
                        <td>${Ov.author}</td>
                        <td>${Ov.price}</td>
                        <td>${Ov.date}</td>
                        <td>${Ov.email}</td>
                        <td>${Ov.type}</td>
                        <td>${Ov.language}</td>` 

        table.appendChild(tr);

    }



     email.onkeyup = function () {
     const regex = /^.{5,}@.{5,}\.(?:com|fr|ma)$/i;
     if (regex.test(email.value)) {
         span.innerHTML = "valid";
         span.style.color = "green";
         while (filedsWithValidation.indexOf("email") > -1) {
             filedsWithValidation.splice(filedsWithValidation.indexOf("email"), 1);
         }
     }
     else {
         span.innerHTML = "non valide";
         span.style.color = "red";
        filedsWithValidation.push("email")
    }
 }


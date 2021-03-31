function myFunction() {
let ageType =document.getElementById("age").value;
// Première condition (filtrage) : Si age existe, s'il est un nombre (contraire de isNaN) supérieur à 0
if(isNaN(ageType) == false && ageType>0){
    // Deuxième condition imbriquée : ... Et si... Sinon si ... Sinon
    if(ageType<18){
        alert(`Mineur !`); 
    }else if(ageType>115){
        alert(`T'es mort !`);
    }else{
        alert(`Majeur !`);
        }
}else{
    alert(`Rentre ton f****** âge !`);
    }
 }
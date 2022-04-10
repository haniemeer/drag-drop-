let nameer=document.getElementById('name-error')
let teler=document.getElementById('tel-error')
let emailer=document.getElementById('email-error')
let texter=document.getElementById('message-error')
let submiter=document.getElementById('submit-error')

function validation(){
    let nameerrorfunc=document.getElementById('contact-name').value;

    if(nameerrorfunc.length==0){
        nameer.innerHTML="Name is requierd"
       return false
    }
    // if(!nameerrorfunc.match(/^[A-Za-z]* s\ {1}[A-Za-z]*$/)){
    //     nameer.innerHTML="please write full name" 
    //     return false
    // }
    nameer.innerHTML="<i class='fas fa-check-circle'></i>"
    return true
}
function validationtel(){
    let telerrorfunc=document.getElementById('contact-tel').value;
    if(telerrorfunc.length==0){
        
        teler.innerHTML="phone is requierd"
        return false
    }
    if(telerrorfunc.length!==8){
        
        teler.innerHTML="phone isnt more than 8 digit"
        return false;
    }
    // if(!telerrorfunc.match(/^[0-7]{8}$/)){
    //     teler.innerHTML="only digit" 
    //     return false
    // }
    teler.innerHTML="<i class='fas fa-check-circle'></i>"
    return true;
}
function validationemail(){
    let emailerrorfunc=document.getElementById('contact-email').value;

    if(emailerrorfunc.length==0){
        emailer.innerHTML="email is requierd"
        return false
    }else
    // if(!emailerrorfunc.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    //     emailer.innerHTML="invalid email" 
    //     return false
    // }else
    emailer.innerHTML="<i class='fas fa-check-circle'></i>"
    return true
}
function validationmessage(){
    let messageerrorfunc=document.getElementById('contact-message').value;
   let requier=30
   let left=requier-messageerrorfunc.length;
   if(left>0){
       texter.innerHTML=left+"more character left";
       return false
   }
   texter.innerHTML="<i class='fas fa-check-circle'></i>";
   return true;
}
function validationform(){
    if(!validation() || !validationtel() || !validationemail()|| !validationmessage()){
        submiter.innerHTML="please fix and make sure that you complete the form"
        return false
    }
}

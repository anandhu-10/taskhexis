document.addEventListener('DOMContentLoaded',function(){
    function validateform(){
        const  name=document.getElementById('name').Value;
        const email=document.getElementById('email').value;

        if(name === ''||email === ''){
            alert('please fill out all required field.');
            return false;
        }
        return true;
    }
      
    function submitform(){
        setTimeout(function(){
            window.location.href="confirmation.html";
        },3000);

    }
    const registrationform=document.getElementById('registrationform');
    if(registrationform){
        registrationform.addEventListener('submit',function(event){
            event.preventDefault();

            if(ivalidateform()){
                return;
            }
            
            logformvalues();
            submitform();

        });
    }

    function logformvalues(){
        const A= document.getElementById('name').value;
        console.log('name:' + A );

        const B= document.getElementById('email').value;
        console.log('email:' + B );

        const C= document.querySelector('input[name="gender"]:checked').value;
        console.log('Gender:' + C );

        const D= document.getElementById('dob').value;
        console.log('Date of Birth:' + D );

        const E= document.getElementById('nationality').value;
        console.log('nationality:' + E );

        const F=document.querySelector('input[name="status"]:checked').value;
        console.log('Current status:' + F);
    }
        
        
});
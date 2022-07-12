const cta=document.getElementById('cta')
const email=document.getElementById('email')

cta.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log(email.value);
    if(email.value==null|| email.value==""){
        console.log('email not present');
    }else{
        let fetchData={
            method:"POST",
            body:JSON.stringify({
                email:email.value
            }),
            headers:{'Content-Type':"application/json"}
        }
        fetch('https://mailchimp-api-node.herokuapp.com/subscribe',fetchData).then(response=>{
            if(response.ok){
                console.log('yay it worked');
            }
        }).catch(err=>{
            console.log(err);
        })
    }
})
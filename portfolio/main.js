

var form = document.getElementById("my-form");

   async function handleSubmit(event) {
     event.preventDefault();
     var status = document.getElementById("my-form");
     var data = new FormData(event.target);
     fetch(event.target.action, {
       method: form.method,
       body: data,
       headers: {
           'Accept': 'application/json'
       }
     }).then(response => {
       status.innerHTML = "Thanks for your interest! I'll get back to you soon.";
       form.reset()
     }).catch(error => {
       status.innerHTML = "Oops! There was a problem submitting your form."
     });
   }
   form.addEventListener("submit", handleSubmit)

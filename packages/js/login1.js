async function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email);
    try {
        const SignIn = await fetch("https://localhost:3000/api/users/signin", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
               
            },
            
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
       
      
        const response = await SignIn.json();
        console.log(response);
      
    } catch (error) {
        console.log(error)
        
    }
}

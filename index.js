fetch("https://api.pexels.com/v1/search?query=dog",{
    "method" : "GET",
    "headers":
    {
       "Authorization" : "563492ad6f9170000100000196eb60c818eb4bfa92caa75ea6d4bc10"  
    }
}).then(response => {
    response.json()

}).then(data => {
    console.log(data)}).catch(err =>{
        console.log(err)
    })
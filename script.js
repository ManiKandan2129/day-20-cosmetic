var row = document.getElementById("row1");

//fetch data from the api and display it on cards
async function data(){
    var data1 = await fetch("https://hp-api.onrender.com/api/characters");
    var data2 = await data1.json();
    for(let i=0; i< 100; i++){
        console.log(data2[i]);

        var col = document.createElement("div");
        col.setAttribute("class","col-lg-4 col-sm-12");
        col.setAttribute("id", "col");
        row.append(col)
        
        col.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src = "${data2[i].image}" class="card-img-top" alt="No image" id="card-image">
            <div class="card-body">
              <h5 class="card-title">${data2[i].name}</h5>
              <h6 class="card-text">House: ${data2[i].house}</h6>
              <h6  class="card-text">Species: ${data2[i].species}</h6>
              <h6  class="card-text">Actor: ${data2[i].actor}</h6>
            </div>
          </div>`
}
    }
    

data()






    
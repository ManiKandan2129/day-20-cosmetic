var row = document.getElementById("row1");

//fetch data from the api and display it on cards
async function data(){
    var data1 = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
    var data2 = await data1.json();
    for(let i=0; i< 100; i++){
        console.log(data2[i]);

        var col = document.createElement("div");
        col.setAttribute("class","col-lg-4 col-sm-12");
        col.setAttribute("id", "col");
        row.append(col)
        
        col.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src = "${data2[i].image_link}" class="card-img-top" alt="No image" id="card-image">
            <div class="card-body">
              <h5 class="card-title">${data2[i].name}</h5>
              <h6 class="card-text">Category: ${data2[i].product_type}</h6>
              <h6 class="price-tag">Price: ${data2[i].price} ${data2[i].price_sign}</h6>
              <a href="${data2[i].product_link}" target = "_blank" class="btn btn-primary">Buy this</a>
            </div>
          </div>`
}
    }
    

data()






    
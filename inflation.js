function returnText(){
    let price = document.getElementById("price").value;

    let years = document.getElementById("years").value;

    let inflation = document.getElementById("inflation_rate").value;
    inflation_percentage = inflation * 0.01

    let eventual_price = parseFloat(price)
    for (let i = 0; i < years; i++) {
      eventual_price += (eventual_price * inflation_percentage)
    }
    eventual_price = eventual_price.toFixed(2)

    var newParagraph = document.createElement("p");
    newParagraph.style.color = "white";
    var newText = document.createTextNode("Price after " + years + " years of inflation: $" + eventual_price);
    newParagraph.appendChild(newText);
    document.body.appendChild(newParagraph);

}

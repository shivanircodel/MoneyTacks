function returnText(){
    let savings_amount = document.getElementById("savings").value;

    let years = document.getElementById("years").value;

    let inflation = document.getElementById("inflation_rate").value;
    inflation_percentage = inflation * 0.01

    let savings_inflated = parseFloat(savings_amount)
    for (let i = 0; i < years; i++) {
      savings_inflated -= (savings_inflated * inflation_percentage)
    }
    savings_inflated = savings_inflated.toFixed(2)

    let return_on_investment = document.getElementById("roi").value
    roi_percentage = return_on_investment * 0.01
    
    let savings_roi_adjusted = parseFloat(savings_amount)
    for (let i = 0; i < years; i++) {
      savings_roi_adjusted += (savings_roi_adjusted * roi_percentage) 
    }
    savings_roi_adjusted = savings_roi_adjusted.toFixed(2)

    let investment_inflation_adjusted = parseFloat(savings_roi_adjusted)
    for (let i = 0; i < years; i++) {
      investment_inflation_adjusted -= (investment_inflation_adjusted * inflation_percentage)
    }
    investment_inflation_adjusted = investment_inflation_adjusted.toFixed(2)

  var inflationParagraph = document.createElement("p");
  inflationParagraph.style.color = "white"; //creates a new paragraph element

  var inflation_text1 = "The value of $" + savings_amount + " would be $";
  var inflation_text2 = " in today's dollars in " + years + " years."

  var text_before_amount = document.createTextNode(inflation_text1);
  var savings_inflated_amount = document.createTextNode(savings_inflated);
  var text_after_amount = document.createTextNode(inflation_text2); //creates text along with output to be displayed


  inflationParagraph.appendChild(text_before_amount); 
  inflationParagraph.appendChild(savings_inflated_amount);
  inflationParagraph.appendChild(text_after_amount);
  //created text is appended to the paragraph element created

  document.body.appendChild(inflationParagraph); // created paragraph and text along with output is appended to the document body


  var roiParagraph = document.createElement("p");
  roiParagraph.style.color = "white"; //creates a new paragraph element

  var roi_text1 = "With an investment ROI of " + return_on_investment + "% you would have $" + savings_roi_adjusted + " in " + years + " years, which would be equivalent to $" + investment_inflation_adjusted + " in today's dollars.";

  var text_before_roi = document.createTextNode(roi_text1);
  
  roiParagraph.appendChild(text_before_roi);
  document.body.appendChild(roiParagraph);

}

function billing(){
    alert("Welcome to Billing Form");
    
    //fetching va;ue using element id
    quantity = document.getElementById("quantity").value;
    console.log(quantity);
    price = document.getElementById("price").value;
    console.log(price);

    // gross amount
    gross_amount = quantity*price;
    console.log("gross = "+gross_amount);

    //discount
    discount  = 0;
    if(gross_amount>=10000){
        discount = gross_amount*(0.10);
    }

    console.log("discount = "+discount);
    final_amount = gross_amount - discount;
    console.log("final = "+final_amount);

    document.getElementById("q1").value=quantity;
    document.getElementById("p1").value=price;
    document.getElementById("ga1").value=gross_amount;
    document.getElementById("d1").value=discount;
    document.getElementById("fa").value=final_amount;

    return false;
}
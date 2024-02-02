function billing(){
    alert("Welcome to Billing Form");

    //fetching value using form selector
    quantity = document.billingForm.quantity.value;
    console.log("quantity = "+quantity);
    price = document.billingForm.price.value;
    console.log("price = "+price);
    
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

    document.billingForm.q1.value=quantity
    document.billingForm.p1.value=price
    document.billingForm.ga1.value=gross_amount
    document.billingForm.d1.value=discount
    document.billingForm.fa.value=final_amount

    return false;
}
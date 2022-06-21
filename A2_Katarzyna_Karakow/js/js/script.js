function validate(){
    
    var isValid = true;
    
    //// Belowe code validates Last Name
    var LastName = document.getElementById("txtLastName").value;
    if (LastName == "")
    {
        document.getElementById("msgln").innerHTML="<br>"+"Last Name is required"+"<br>"
        isValid = false;
    }
    else
        isValid=true;

    //// Belowe code validates First Name    
    var FirstName = document.getElementById("txtFirstName").value;
    if (FirstName == "")
    {
        document.getElementById("msgfn").innerHTML="<br>"+"First Name is required"+"<br>"
        isValid = false;
    }
    else
        isValid=true;

    //// Belowe code is to validate Phone number    
    var PhoneNum = document.getElementById("txtPhoneNumber").value;
    if (PhoneNum == "")
    {
        document.getElementById("msgpn").innerHTML="<br>"+"Phone Number is required"+"<br>"
        isValid = false;
    }
    else if (isNaN(PhoneNum))
    {
        document.getElementById("msgpn").innerHTML="<br>"+"Enter valid phone number"+"<br>"
        isValid = false;
    }
    else
        isValid=true;

    // //// Belowe code is to validate radio button Pizza Size    
    // var radioPizzaSize = document.pizzaform.pizzaSize;
    // for (i=0; i<radioPizzaSize.length; i++)
    // {
    //     if (radioPizzaSize[i].checked){
    //          user_input = radioPizzaSize[i].value;
    //     } else {
    //         document.getElementById("msgpn").innerHTML="<br>"+"Pizza Size is required"+"<br>"
    //         isValid = false;
    //     }
    // }

    // //// Belowe code is to validate radio button Pizza Crust  
    // var radoiPizzaCrust = document.pizzaform.pizzaCrust;
    // for (i=0; i<radoiPizzaCrust.length; i++)
    // {
    //     if (radoiPizzaCrust[i].checked){
    //          user_input = radoiPizzaCrust[i].value;
    //     }else {
    //         document.getElementById("msgpn").innerHTML="<br>"+"Pizza Crust is required"+"<br>"
    //         isValid = false;
    //     }
    // }

    // //// Belowe code is to validate radio button Pizza Type  
    // var radioPizzaType = document.pizzaform.pizzaType;
    // for (i=0; i<radioPizzaType.length; i++)
    // {
    //     if (radioPizzaType[i].checked){
    //          user_input = radioPizzaType[i].value;
    //     }else {
    //         document.getElementById("msgpn").innerHTML="<br>"+"Pizza Type is required"+"<br>"
    //         isValid = false;
    //     }
    // }

    //// calculating pizza cost
    if(isValid){
    var size = document.querySelector('input[name="pizzaSize"]:checked').value;
    var sizePrice = 0;
    var type = document.querySelector('input[name="pizzaType"]:checked').value;
    var drinkPrice = 2;

    if(type === "VegLovers"){
        if (size === "Small"){
            sizePrice = 10;
        } else if (size === "Medium"){
            sizePrice = 12;
        } else (size === "Large")
            sizePrice = 14;
        }
   
    if(type === "Pepperoni"){
        if (size === "Small"){
            sizePrice = 20;
        } else if (size === "Medium"){
            sizePrice = 22;
        } else (size === "Large")
            sizePrice = 24;
        }
    
        if(type === "Cheese"){
            if (size === "Small"){
                sizePrice = 30;
            } else if (size === "Medium"){
                sizePrice = 32;
            } else (size === "Large")
                sizePrice = 34;
            }

    //// Calculating Subtotal
    var subtotalPrice = (sizePrice + drinkPrice);
    document.getElementById("subtotal").innerHTML="Subtotal: " + subtotalPrice;
    

    //// Calculating Tax
    var tax = (subtotalPrice * 0.13);
    document.getElementById("tax").innerHTML="Tax: " + tax;

    //// Calculating total price
    var totalPrice = (subtotalPrice + tax);
    document.getElementById("total").innerHTML="Total Price: " + totalPrice;
}

}

$(function(){
  
   
    $(".multiply").click(function() {

            //INPUT  
            quantity1 = parseInt($(".quantity1").val());
            quantity2 = parseInt($(".quantity2").val());
            quantity3 = parseInt($(".quantity3").val());


            //CALCULATE  
            var sub = (99.99 * quantity1) + (99.99 * quantity2) + (99.99 * quantity3)
            var sub2 = sub.toFixed(2)
            var tax = 1.07
            var tax2 = ("7%")
            var total = (sub * tax)
            var total2= total.toFixed(2)


            //OUTPUT
            $(".sub").html(sub2);
            $(".tax").html(tax2);
            $(".total").html(total2);


        });
   
});
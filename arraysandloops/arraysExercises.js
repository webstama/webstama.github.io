$(function() {

    var arr = [2, 5, 6, 10, 16, 7, 8];
    var shapes = ["Circle", "Square", "Rectangle", "Trapezoid", "Triangle", "Rhombus", "Octagon"];

    $(".q1-function").click(function() {
        output();
    });

    $(".q2-function").click(function() {
        //GET NUMBER FROM INPUT BOX
        var number = $(".numElements").val();
        //CALL listElements
        listElements(number);
    });
    $(".q3-function").click(function() {
        //CALL fillArray
        fillArray();
    });
    $(".q4-function").click(function() {
        //CALL pairingArrays
        pairingArrays();
    });
});

var output = function() {

    var arr = [2, 5, 8, 10, 16, 7, 8];
    
    for (i = 0; i < arr.length; i += 2) {
        $(".q1-output").append(arr[i]);
    }
};

var listElements = function(n) {
    var shapes = ["Circle", "Square", "Rectangle", "Trapezoid", "Triangle", "Rhombus", "Octagon"];

    for (i = 0; i < n; i++) {
        $(".q2-output").append(shapes[i]);
    }
};

var fillArray = function() {

    var arr = [];

    var word = $(".fillArray").val();

    for (i = 0; i < 1; i++) {
        arr.push(word);
        $(".q3-output").append(arr);
    }

};
var pairingArrays = function() {

    var shapes = ["Circle", "Square", "Rectangle", "Trapezoid", "Triangle", "Rhombus", "Octagon"];
    var arr = [2, 5, 6, 10, 16, 7, 8];

    for (i = 0; i < 6; i++){
        $(".q4-output").append("I drew" + arr[i] + shapes[i] + "s");
    }

};

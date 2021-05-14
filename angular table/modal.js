$("#saveChanges").on( "click", function() {
    $('#myModal').modal('hide');
   
});
//trigger next modal
$("#saveChanges").on( "click", function() {
    $('#myModal2').modal('show');  
    //hides modal by default using settimeout
    setTimeout(function() {$('#myModal2').modal('hide');}, 3000);  
});

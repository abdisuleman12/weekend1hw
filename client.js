// console.log('peopleArray from data.js: ', peopleArray);


// One person at a time should be shown on the DOM represented by showing their name and their shout out



$(document).ready(function(){
    
    var peopleName = peopleArray[0].name;
    var peopleShoutOut = peopleArray[0].shoutout;
        
$('.container').append('<h3> ' +  peopleName + ':' + ' ' + peopleShoutOut + ' </h3>');
    
 

// created a counter variable 
counter = 0

$('#Next').on('click', function() {
    
    counter  = (counter + 1)  % peopleArray.length;
    //$('.container').fadeOut('slow', function (){
    //When a person is displayed, show their first name, last name and their shout out. Only one person should be shown at any given time.
    $('.container').html('<h3> ' +  peopleArray[counter].name + ':'  + ' ' + peopleArray[counter].shoutout + ' </h3>');
   // });

    //Also on the DOM should be a display showing the number of people and which is being currently viewed (eg. 2/20).
     $('#number-display').html('<h3>' + (counter + 1) + ' / ' + 23 + '</h3>');

         
    });

      
    counter = peopleArray.length
    
$('#Prev').on('click', function () {
    
    counter = (counter - 1) % peopleArray.length ;
        if (counter ===  -1 ) {
            counter = peopleArray.length - 1
            
        }
    
    //When a person is displayed, show their first name, last name and their shout out. Only one person should be shown at any given time.
    $('.container').html('<h3> ' +  peopleArray[counter].name + ':'  + ' ' + peopleArray[counter].shoutout + ' </h3>');
    
    //Also on the DOM should be a display showing the number of people and which is being currently viewed (eg. 2/20).
    $('#number-display').html('<h3>' + (counter + 1) + ' / ' + 23 + '</h3>');


    });



})






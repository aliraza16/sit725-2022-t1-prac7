const testButtonFunction=()=>{
  alert('Thank you for clicking')
}
var msg1= 0 ;

// connect to the socket

let socket = io();


socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
 
     addCardsnew(cardList,msg);

    $('#socket_output').html('Random number: ' + msg);
})

console.log('test')
$(document).ready(function(){
  console.log('Ready')

  //bind the button
  $('#testButton').click(testButtonFunction)

  //test get call
  $.get('/test?user_name="Fantastic User"',(result)=>{
    console.log(result)
  })


})

const addCardsnew = (items,value) => {

var i=0;

    items.forEach(item => {

if(i==value)
{
  console.log("number:" +i);
        let itemToAppend = '<div class="col s4 center-align">'+




    '<div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
    '<div class="card-reveal">'+
        '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
        '<p class="card-text grey-text text-darken-4">'+item.desciption+'</p>'+
      '</div></div></div>';
      $("#card-section").append(itemToAppend)
}

      i++;
    });
}





$(document).ready(function(){

    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitForm();
    })
    
   
    $('.modal').modal();
  });


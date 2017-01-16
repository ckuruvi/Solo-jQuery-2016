var thisColor;   // stores existing color of data from button clicked
var thisCounter; // stores count for button clicked
var countRed=0;
var countYellow=0;
var countBlue=0;
var countGreen=0;

$(function(){


  $('button').click('click',function(){
    //thisColor=$(this).attr("data-color");
    thisColor=$(this).data('color');
    updateColorCounter();
    updateContainer();

  })
})

function updateColorCounter(){
  switch (thisColor){
    case 'red':
    countRed++;
    thisCounter=countRed;
    break;
    case 'green':
    countGreen++;
    thisCounter=countGreen;
    break;
    case 'yellow':
    countYellow++;
    thisCounter=countYellow;
    break;
    case 'blue':
    countBlue++;
    thisCounter=countBlue;
  }

}

function updateContainer(){

  $('.container').append('<div class="color-cube '+thisColor+'"></div>');
  $('p').children('#'+thisColor).text(thisCounter);
}

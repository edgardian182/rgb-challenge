var score = 0;
var correcto;

// Numero aleatorio entre 0 y 255
function random() {
  return Math.floor(Math.random()*256);
}

function generateColor(){
  return 'rgb(' + random() + ', ' + random() + ', ' + random() + ')'
}

game();

function game(){
  correcto = Math.floor(Math.random() * 2)

  $('.color').each(function(index){
    var color = generateColor()
    $(this).css('background-color', color);
    console.log(color);
    if (index == correcto) {
      $('#correcto').text(color);
    }
  })
}

$('.color').on('click tap', function(){
  // Encontramos el indice del elemento al que se le dio click
  var index = $('.color').index(this);
  // Si este indice es igual al definido como correcto en el game =>
  if (index == correcto) {
    score ++;
    $('.result.won').show();
  }
  else {
    score = 0;
    $('.result.lost').show()
  }
  $(this).addClass('scale');
  $('.score span').text(score);
  $('.result #resultado').text("SCORE: " + score);
})

// Carga nuevo juego al hacer click en el link
$('.result a').on('click tap', function(){
  $('.color').removeClass('scale')
  $('.result').hide();
  game();
})


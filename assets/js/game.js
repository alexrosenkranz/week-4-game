$(document).ready(function() {
  // Create variables for game
    // goal score
    var goalScore = "";
    // user score
    var userScore = "";
    // wins
    var wins = 0;
    // losses
    var losses = 0;



  //Set new and / or game function
  function newGame() {
    
    // Pick number between 19 and 120 at random for goal score
    goalScore = Math.floor(Math.random() * 120) + 19;

    // Set user score to 0
    userScore = 0;

    // Set each crystal to a new value at random between 1 and 12 with jQuery attr
    
      
      $('.crystal').each(function() {
        var value = Math.floor(Math.random() * 12) + 1;
          $(this).attr('data-value',value);
      });
    
      console.log(goalScore);
      console.log(userScore);
  };

  newGame();

  // Set click events for crystals
    // each one adds a value amount to user score
    // win game if user score = goal score
    // lose game if user score > goal score

  $('.crystal').on('click', function() {
    userScore += $(this).val('data-value');
    $('.userScore').text(userScore);
  });

  });
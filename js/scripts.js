// Business Logic
function check(number) {
  if (number >= 4 && number <= 7) {
    $("#cSharp").show();
  } else if (number > 7 && number <= 9) {
    $("#ruby").show();
  } else if (number > 9 && number <= 12) {
    $("#python").show();
  }
}

// User Interface Logic

$(document).ready(function() {
  
  $("form#questions").submit(function(event) {
    const name = $("#name").val();
    const answer1 = parseInt($("input:radio[name=animalQ]:checked").val());
    const answer2 = parseInt($("input:radio[name=burningHouseQ]:checked").val());
    const answer3 = parseInt($("input:radio[name=importantQ]:checked").val());
    const answer4 = parseInt($("input:radio[name=genieQ]:checked").val());
    const score = answer1 + answer2 + answer3 + answer4;

    if (isNaN(score)) {
      alert("Wait! you forgot to fill out all the fields!");
    } else {
          event.preventDefault();
          $("#survey").hide();
          $(".placeName").text(name);
          check(score);
        }
  });

  $("#nameNext").click(function(event) {
    event.preventDefault();
    $("div#enterName").hide();
    $("div#question1").show();
  });

  $("#q1Next").click(function(event) {
    event.preventDefault();
    $("div#question1").hide();
    $("div#question2").show();
  });

  $("#q2Next").click(function(event) {
    event.preventDefault();
    $("div#question2").hide();
    $("div#question3").show();
  });

  $("#q3Next").click(function(event) {
    event.preventDefault();
    $("div#question3").hide();
    $("div#question4").show();
  });
});
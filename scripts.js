/* Email address and username input function */
$(document).ready(function(){
    $("#input-form").submit(function(event){
      let name = $("input#name").val();
      let email = $("input#email").val();
      let comment = $("textarea#textarea").val();
      if ($("input#name").val() && $("input#email").val() && $("textarea#textarea").val()){
        alert (name + ", we have received your email. We highly value your feedback.");
      }
      else if ($("input#name").val() && $("input#email").val()){
        alert (name + ", we have received your email. Kindly fill in the comment box below.");
      }
      else {
        alert("Please enter your correct name and email adress!");
      }
    
    });

  });

  /* overlay effect on the portfolio images*/

  $(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#overlay1").show();
    }).mouseout(function(){
      $("#overlay1").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
  });
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
});
    $(document).ready(function(){
        $("#work6").mouseover(function(){
            $("#overlay6").show();
          }).mouseout(function(){
            $("#overlay6").hide();
          });
    });

    $(document).ready(function(){
        $("#work7").mouseover(function(){
            $("#overlay7").show();
          }).mouseout(function(){
            $("#overlay7").hide();
          });
    });

    $(document).ready(function(){
        $("#work8").mouseover(function(){
            $("#overlay8").show();
          }).mouseout(function(){
            $("#overlay8").hide();
          });
      
    });


/*toggle effect*/

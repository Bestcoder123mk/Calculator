
current = $('ul.top li').text();
memory = 0;
result = 0;
square = 0;
percent = 0;
divison = 0;

$( "ul.calc" ).on( "click", "li:first-child", function() {
  $('ul.top li').text(0);
});

$( "ul.calc" ).on( "click", "li:nth-child(6)", function() {
    $('ul.top li').text(memory);
});

$( "ul.calc" ).on( "click", "li:nth-child(10)", function() {
    $('ul.top li').append(".");
});

$( "ul.calc" ).on( "click", "li:nth-child(11)", function() {
  memory = parseInt($('ul.top li').text()) + memory;
});

$( "ul.calc" ).on( "click", "li:nth-child(16)", function() {
  memory = parseInt($('ul.top li').text()) - memory;
});



$( "ul.calc" ).on( "click", "li.digit", function() {
  if ($.isNumeric($( this ).text()) ) {
    num = $(this).text(); 
    if ($('ul.top li').text() === '0' || result || square || percent || division) {
        result = 0;
      	square = 0;
     		percent = 0;
        division = 0;
      	$('ul.top li').empty();
       	$('ul.top li').append(num);
    }
    else {
      $('ul.top li').append(num);  
    }
  }
  });

$( "ul.calc" ).on( "click", "li.operator", function() {
  if ($("ul.calc li:nth-child(15)").hasClass('minus')) {
    $("ul.calc li:nth-child(15)").removeClass('minus');
  };
  
  	 current = $('ul.top li').text();
  		operator = $(this).text();
 			 if (operator === "√") {
   square = $('ul.top li').text(Math.sqrt(current));
        }
 else if (operator === "%") {
  percent = $('ul.top li').text(current / 100);
        }
  else if (operator === "1/x") {
  division = $('ul.top li').text(1/current);
        }
  	 else {
 			 $('ul.top li').empty();
     }
       });
        
$( "ul.calc" ).on( "click", "li:nth-child(15)", function() {
  minny = $('ul.top li').text();
  if ($(this).hasClass('minus')) {
    minny = minny.replace('-', '');
    $('ul.top li').text(minny);
    $(this).removeClass('minus');
  }
  else {
    $('ul.top li').prepend('-');
    $(this).addClass('minus');
  }
});

$( "ul.calc" ).on( "click", "li:last-child", function() {
   if ($("ul.calc li:nth-child(15)").hasClass('minus')) {
    $("ul.calc li:nth-child(15)").removeClass('minus');
  };
  next = $('ul.top li').text();
   switch (true) {
      case (operator === "-"):
       result = current - next;
        break;
       case (operator === "+"):
       result = parseFloat(current) + parseFloat(next);
        break;
       case (operator === "x"):
       result = current * next;
        break;
       case (operator === "/"):
       result = current / next;
        break;
   }
   $('ul.top li').text(result);
  });
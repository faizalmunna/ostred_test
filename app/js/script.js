

// Instantiating the global app object

// load this script on page loads


$.getJSON('../../app/data.json', function(data){
	console.log(data); 
  $(data).each(function(i, stockresult){
  	$('.stockdata').append($("<div>")
      .append($("<div>").append(stockresult.shares).addClass( "stock" ))
      .append($("<div>").append(stockresult.sharessecond).addClass( "sharessecond inlinewithnext" ))
      .append($("<div>").append(
          ((stockresult.shares - stockresult.sharessecond )/ (stockresult.sharessecond * 100) )
          ).addClass( "sharepercentage inlinewithnext" ))
          // omxc
          .append($("<div>").append(stockresult.sharessecond + stockresult.shares /(stockresult.sharessecond * 100)).addClass( "omxc inlinewithnext" ))
          .append($("<div>").append(
          ((stockresult.shares - stockresult.sharessecond )/ (stockresult.sharessecond))
          ).addClass( "omxc_percentage inlinewithnext" ))
          .append($("<div>").append(
            ((stockresult.shares + stockresult.sharessecond )/ (stockresult.sharessecond ))
            ).addClass( "omxc_percentage2 inlinewithnext" ))
          // end omxc
      .append($("<div>").append(stockresult.volume).addClass( "stock_below" ))
      .append($("<div>").append(stockresult.updatedDate.date).addClass( "date" ))
      .append($("<div>").append(stockresult.updatedDate.time).addClass( "time" ))
      );
  });
})
.done(function(){
    $(".stock").appendTo('.over_wrap');
    $(".inlinewithnext").appendTo('.over_wrap');

    $(".stock_below").appendTo('.volumewrap');
    $(".date").appendTo('.updateddate');
    $(".time").appendTo('.updateddate');

    $(".omxc").appendTo('.omxc_class');
    $(".omxc_percentage").appendTo('.omxc_class');
    $(".omxc_percentage2").appendTo('.omxc_class');
    
    var sharepercentage_var = $('.sharepercentage').text()
    var sharepercentage_text = parseFloat(sharepercentage_var).toFixed(2);
    $(".sharepercentage").empty()
    $(".sharepercentage").append("<b>" + sharepercentage_text + "</b>");

    var omxc = $('.omxc').text()
    var omxc_first = parseFloat(omxc).toFixed(2);
    $(".omxc").empty()
    $(".omxc").append("<b>" + omxc_first + "</b>");

    var omxc_percentage = $('.omxc_percentage').text()
    var omxc_second = parseFloat(omxc_percentage).toFixed(2);
    $(".omxc_percentage").empty()
    $(".omxc_percentage").append("<b>" + omxc_second + "</b>");

    var omxc_percentage2 = $('.omxc_percentage2').text()
    var omxc_thired = parseFloat(omxc_percentage2).toFixed(2);
    $(".omxc_percentage2").empty()
    $(".omxc_percentage2").append("<b>" + omxc_thired + "</b>");
    
    if($(".sharepercentage").val() < 0 ){
        $(".sharessecond").addClass( "redcolor" );
        $(".sharepercentage").addClass( "redcolor" );
        console.log("less than")
    }else{
        $(".sharessecond").addClass( "greencolor" );
        $(".sharepercentage").addClass( "greencolor" );
        console.log("greater thaan")
    }
    $( ".omxc_percentage" ).append( "/" );
    if(omxc_second < 0 ){
        $(".omxc_percentage").addClass( "redcolor" );
        $( ".omxc_percentage" ).prepend("-" );
    }else{
        $(".omxc_percentage").addClass( "greencolor" );
        $( ".omxc_percentage" ).prepend( "+" );
    }
    if(omxc_thired < 0 ){
        $(".omxc_percentage2").addClass( "redcolor" );
        $( ".omxc_percentage2" ).prepend("-" );
    }else{
        $(".omxc_percentage2").addClass( "greencolor" );
        $( ".omxc_percentage2" ).prepend( "+" );
    }
    console.log("Completed");
})
.fail(function(e){
    console.log('error:');
    console.error(e);
})
.always(function(){
    console.log("always runs");
});

// $(".omxc_percentage").val().toFixed(2);
// $(".omxc_percentage2").val().toFixed(2);

$( document ).ready(function() {
   
});
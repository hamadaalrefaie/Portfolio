/* eslint-disable no-undef */
const config = {
    target: $(".point"),
    line: $(".line"),
    delay: 40 // enter zero for live resizing
  }
  const drawBetweenObjects = {
    //cmake the line
    makeLine: function(line, div1, div2) {
      var className = div1.attr('id') + div2.attr('id');
      if ( className.includes("undefined") !== true ) { //error check
        $(line).clone().addClass('deleteMe').addClass(className).removeClass("original").insertAfter(line);
        //calculations (for legibility, these are separte vars)
        var x1 = div1.offset().left + (div1.width()/2);
        var y1 = div1.offset().top + (div1.height()/2);
        var x2 = div2.offset().left + (div2.width()/2);
        var y2 = div2.offset().top + (div2.height()/2);
        $("."+className).attr('x1',x1).attr('y1',y1).attr('x2',x2).attr('y2',y2); //svg attributes
      } else { console.error("undefined object") }
     },
    findLines: function(search) {
     $(".deleteMe").remove(); //remove last set of lines
      $(search).each(function(index, el){
        if ( search.eq(index + 1).length ) { //only do drawBetweenObject if there is another.
          drawBetweenObjects.makeLine(config.line, $(this), search.eq(index + 1));   //args order - line, div1 and div2 - the next div.
        }
     });
    },
    init: function() {
      drawBetweenObjects.findLines( config.target );
      //give resizing time to happen
      var resizeId;
      $(window).resize(function() {
          clearTimeout(resizeId);
          if (config.delay !== 0) {
            resizeId = setTimeout(doneResizing, config.delay);
          } else {
            drawBetweenObjects.findLines( config.target );
          }
      });
      function doneResizing(){
        drawBetweenObjects.findLines( config.target );
      }
    }
  }
  
  drawBetweenObjects.init();
  
  // umimportant ugly scripting
  // this just randomizes the points
  // It's pretty ugly.
  $(".btn").click(function() {
    var heightMax = $(document).height(),
        widthMax = $(document).width();
    function widthCalc () {
      return Math.floor( Math.random() * widthMax );
    }
    function heightCalc() {
      return Math.floor( Math.random() * heightMax )
    }
    $("#one").css({  left: widthCalc(),  top: heightCalc() });
    $("#four").css({ left: widthCalc(),  top: heightCalc() });
    $("#three").css({ right: widthCalc(), top: heightCalc() });
    $("#two").css({ right: widthCalc(), top: heightCalc()  });
     drawBetweenObjects.findLines( config.target );
  });
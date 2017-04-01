var word1 = document.getElementById("0");
word1.addEventListener("drop", drop);
word1.addEventListener("dragenter", cancelEvent);
word1.addEventListener("dragover", cancelEvent);


// $('.drophere').on("dragover"{
// 	$(this).find(".drophere").css("backgroundColor","red");

// });






    $("document").ready(function() {

    		$("#poetryzone").on("dragstart", backwhite);
    		$(".drophere").on("dragenter", hovercolor);
			$(".drophere").on("drop", colorback);
			$(".drophere").on("dragleave", colorback);
			// $(".drophere").on("drop", nomore);
			// $(".drophere").on("dragenter",nomore);



			// $(".drophere").on("dragenter", cancelEvent);
			// $(".drophere").on("dragover", cancelEvent);

			});

    function backwhite() {
    	$(this).css("backgroundColor","white");
    }

    function hovercolor() {
   	$(this).css("backgroundColor","red");
    }

    function colorback() {
    	$(this).css("backgroundColor","#e3d1dd");
    }

    // function nomore() {
    // 	$(this).removeClass("drophere").addClass("dontdrop");
    // }


var word2 = document.getElementById("1");
word2.addEventListener("drop", drop);
word2.addEventListener("dragenter", cancelEvent);
word2.addEventListener("dragover", cancelEvent);

var word3 = document.getElementById("2");
word3.addEventListener("drop", drop);
word3.addEventListener("dragenter", cancelEvent);
word3.addEventListener("dragover", cancelEvent);

var word4 = document.getElementById("3");
word4.addEventListener("drop", drop);
word4.addEventListener("dragenter", cancelEvent);
word4.addEventListener("dragover", cancelEvent);

var word5 = document.getElementById("4");
word5.addEventListener("drop", drop);
word5.addEventListener("dragenter", cancelEvent);
word5.addEventListener("dragover", cancelEvent);

var word6 = document.getElementById("5");
word6.addEventListener("drop", drop);
word6.addEventListener("dragenter", cancelEvent);
word6.addEventListener("dragover", cancelEvent);

var word7 = document.getElementById("6");
word7.addEventListener("drop", drop);
word7.addEventListener("dragenter", cancelEvent);
word7.addEventListener("dragover", cancelEvent);

var word8 = document.getElementById("7");
word8.addEventListener("drop", drop);
word8.addEventListener("dragenter", cancelEvent);
word8.addEventListener("dragover", cancelEvent);

var word9 = document.getElementById("8");
word9.addEventListener("drop", drop);
word9.addEventListener("dragenter", cancelEvent);
word9.addEventListener("dragover", cancelEvent);

var word10 = document.getElementById("9");
word10.addEventListener("drop", drop);
word10.addEventListener("dragenter", cancelEvent);
word10.addEventListener("dragover", cancelEvent);

var word11 = document.getElementById("10");
word11.addEventListener("drop", drop);
word11.addEventListener("dragenter", cancelEvent);
word11.addEventListener("dragover", cancelEvent);

var word12 = document.getElementById("11");
word12.addEventListener("drop", drop);
word12.addEventListener("dragenter", cancelEvent);
word12.addEventListener("dragover", cancelEvent);

var word13 = document.getElementById("12");
word13.addEventListener("drop", drop);
word13.addEventListener("dragenter", cancelEvent);
word13.addEventListener("dragover", cancelEvent);

var word14 = document.getElementById("13");
word14.addEventListener("drop", drop);
word14.addEventListener("dragenter", cancelEvent);
word14.addEventListener("dragover", cancelEvent);

var word15 = document.getElementById("14");
word15.addEventListener("drop", drop);
word15.addEventListener("dragenter", cancelEvent);
word15.addEventListener("dragover", cancelEvent);


var dropback = document.getElementById("dropback");
dropback.addEventListener("drop", drop);
dropback.addEventListener("dragenter", cancelEvent);
dropback.addEventListener("dragover", cancelEvent);


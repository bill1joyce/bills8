

     alert ('ckbx.js');
		 
$(document).ready(function(){		 
	////  <script>
function countChecked(loc) {
  var n = $("input:checkbox:checked").length;
  $(loc).text(n + (n <= 1 ? " is" : " are") + " checked!");
}
//countChecked("#log");
//$(":checkbox").click(countChecked("#log"));

	     jQuery.fn.getCheckboxValBOX = function(){
//var  getCheckboxVal = function()
			 alert('getCheckboxValBOX');
            var vals = [];
            var i = 0;
            this.each(function(){
                vals[i++] = jQuery(this).val();
            });  //  end   each
         return vals;
         } //  end   getCheckboxVal
				 

///  </script>

////  <script>
var getckvals = function(){
	  var checkeditems = $("input:checkbox:checked").getCheckboxValBOX();
    $("#log2").text('getCheckboxVal   '+checkeditems);
}

$("#ckbxGetVals").click (function(event) {
    event.preventDefault();
   alert ('ckbxGetValsBOX');
  	var checkeditems = $("input:checkbox:checked").getCheckboxValBOX()
//  	var checkeditems = $("input:checkbox:checked").getCheckboxVal();
 $("#log2").text('Checked Items:  '+checkeditems);
});

$("#ckbxGetCount").click (function(event) {
    event.preventDefault();
   alert ('ckbxGetCount');
//   $("#ckbxGetCount").click(countChecked('log2') );
   countChecked('#log3') ;
});

$("#ckbxSetCheckAll").click (function(event) {
    event.preventDefault();
   alert ('ckbxSetCheckAll');
   $(":checkbox").each(
        function() {
          $(this).attr('checked', true);
        }
   );
	    countChecked('#log3') ;
			$("#log1").empty() ;
	  	$("#log2").empty() ;
});

$("#ckbxSetUnCheckAll").click (function(event) {
    event.preventDefault();
   alert ('ckbxSetUnCheckAll');
   $(":checkbox").each(
        function() {
           $(this).attr('checked', false);
        }
    );
		   countChecked('#log3') ;
		   $("#log1").empty() ;
	     $("#log2").empty() ;			 
});
//     </script>
//     <script>
$("input").click(function() {
  $("#log1").html( $(":checked").val() + " is checked !!!" );
//	$(":checkbox").click(countChecked("#log"));
//	var checkeditems = $("input:checkbox:checked").getCheckboxVal();
// $("#log2").text('getCheckboxVal   '+checkeditems);
		
});
/////  </script>
});	  // end ready function

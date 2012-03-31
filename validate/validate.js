<!--

$(document).ready(function(){

var debug = '';  //  set debug to 'yes' or 'show'  to display debug debuglog  OR blank to hide
$('#debuglog').hide();
var debuglog = function() {  if (debug) { $("#debuglog").show(); }}

$('input:first').focus();
$("#content-main").hide();

//////////////////////////////////////////////////////////////////////////////////////
$("input").focus(function(event) {
    $('input').removeClass('error');
		});

//////////////////////////////////////////////////////////////////////////////////////
var uncheckboxes = function(){
// alert ('uncheckboxes ');
  $(":checkbox").each(
    function() {  $(this).attr('checked', false);    }
  );
}



//////////////////////////////////////////////////////////////////////////////////////
$("#resetfields").click(function(event) {
//input:not(input[type=hidden])
//$('input:not(checkbox)').val('');
$('input:not([type="checkbox"])').val('');
//$('input').val('');
$('input').removeClass('error');
$('.red').remove();
$('#debuglog').empty();
$('#youEntered').empty();
$('input:first').focus();
$("#content-main").hide();
//uncheckAll(document.theform.colors );
uncheckboxes ();
		});

//////////////////////////////////////////////////////////////////////////////////////
	 var fieldname = '';
	 var fieldid  = '';
	 var classid  = '';
	 var dataType = '';
	 var fielderrormessage=  '';
	 var errormessage=  '';
	 var ckItem ='';  
	 var ckItemValue ='';  //   	 ckitem.val();
	 var regexName =/^[a-zA-Z0-9 '.]*$/ ; 
	 var regexEmail =/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/   ;
	 var regexDate =/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/ ; 

//////////////////////////////////////////////////////////////////////////////////////	 
 var validateThese = {
                            "name": [   
                                    { 'info':{"fieldname" : 'Name', "fieldid" : 'name', "dataType" : 'words' , "errormessage" : ''}},
                                     { 'required':{"required" : 'yes', "errormessage" : ': required field' }},
                                     { 'regex':{"regex" : /^[a-zA-Z0-9 '.]*$/ , "errormessage" : ': format error' }},
                                     {"cklength" :{"cklength" : '', "minlength" : 4, "maxlength" : 30, "errormessage" : ': length error' }}
                                      ],                              
                            "email": [  
                                     { 'info':{ "fieldname" : 'E-mail',  "fieldid"    : 'email',  "dataType"    : 'email' ,  "errormessage" : ''}},
                                     { 'required':{ "required" : 'yes',   "errormessage" : ': required field' }},
                                     { 'regex':{ "regex"     :  /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ,   "errormessage" : ': format error' }}
                                      ],                              
                            "bdate": [  
                                     { 'info':{ "fieldname" : 'Birthday',  "fieldid"    : 'bdate',  "dataType"    : 'date' ,  "errormessage" : ''}},
                                     { 'required':{ "required" : 'yes',   "errormessage" : ': required field' }},
                                     { 'regex':{ "regex"     :  /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/ ,   "errormessage" : ': format error' }}
                                      ],    
                            "phone": [  
                                     { 'info':{ "fieldname" : 'Phone',  "fieldid"    : 'phone',  "dataType"    : 'phone' ,  "errormessage" : ''}},
                                     { 'required':{ "required" : '',   "errormessage" : ': required field' }},
                                     { 'regex':{ "regex"     :  /^((([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4})+)*$/ ,   "errormessage" : ': format error' }}
                                     ],    
                            "checkbox": [  
                                     { 'info':{ "fieldname" : 'Checkbox',  "fieldid"    : 'checkboxMsg',  "classid"    : 'checkbox1',  "dataType"    : 'checkbox' ,  "errormessage" : ''}},
                                     { 'required':{ "required" : 'yes',   "errormessage" : ': required field' }},
                                     {"cklength" :{ "cklength"    : 'yes',   "minlength" : 2,   "maxlength" : 2,   "errormessage" : ': select TWO and only TWO' }}
				                              ]
				                   }; // End validateThese	
 

//////////////////////////////////////////////////////////////////////////////////////
$("#theform").submit(function(event) {
    event.preventDefault();

$('.red').empty();
$('#debuglog').empty();
$('#youEntered').empty();
$("#content-main").hide();
    checkeach2();	 
});

//////////////////////////////////////////////////////////////////////////////////////
var checkinfo = function (checkobject) {	
//				alert('checkinfo');
			$.each(checkobject, function(property, value) {   ///  each  checkobject
		       $('#debuglog').append ('---------3--checkinfo--'+property + "=" + value+'<br>' );
					 if (property=='fieldname'){fieldname=value};
					 if (property=='fieldid'){fieldid=value};
					 if (property=='classid'){classid=value};
					 if (property=='dataType'){dataType=value};
					 if (property=='fielderrormessage'){fielderrormessage=value};
	       ckItem = $('#'+fieldid);  					 
	       ckItemValue =  ckItem.val(); 			 
     })///  end  each   checkobject	
		 
		 if(dataType=='checkbox'){
		     jQuery.fn.getCheckboxVal = function(){
//			 alert('getCheckboxVa');
            var vals = [];
            var i = 0;
            this.each(function(){
                vals[i++] = jQuery(this).val();
            });  //  end   each
         return vals;
         } //  end   getCheckboxVal
         var checkeditems = $("input:checkbox:checked").getCheckboxVal();
				 ckItem = $('#'+fieldid);  					 
	       ckItemValue =  checkeditems; 		
//				 alert('checkbox--'+checkeditems+'--'+'ckItem--'+ckItem+'--'+'fieldid--'+fieldid+'--'+'ckItemValue--'+checkeditems+'--'+'ckItemValue.length--'+checkeditems.length+'--');			
	
					 
     }  //  end   if(dataType=='checkbox'

		 
		 
		 
//		 		  $('#debuglog').append ('----ckinfo-----'+ "fieldname=" + fieldname+'<br>' );
};  ///  end  function   checkobject	

//////////////////////////////////////////////////////////////////////////////////////
var checkrequired = function (checkobject) {	
//				alert('checkrequired');
			$.each(checkobject, function(property, value) {   ///  each  checkobject
		       $('#debuglog').append ('---------3--checkrequired--'+property + "=" + value+'<br>' );
					 if (property=='required'){required=value};
					 if (property=='errormessage'){errormessage=value};
       })///  end  each   checkobject			 
				   var itemslength = ckItemValue;
		 		   if(dataType=='checkbox'){
				       itemslength = ckItemValue.length;
						}	 
		 					 if (required !='' ){
					     	     if (!itemslength){
			                   fielderrormessage+='<br>'+fieldname + errormessage;
//				                alert(fieldid +'---'+fielderrormessage);
						         }					 
				   	 };  //  end if (required !='' ){

};
//////////////////////////////////////////////////////////////////////////////////////
var checkregex = function (checkobject) {	
//				alert('checkregex );
			$.each(checkobject, function(property, value) {   ///  each  checkobject
		       $('#debuglog').append ('---------3--checkregex--'+property + "=" + value+'<br>' );
					 if (property=='regex'){regex =value};
					 if (property=='errormessage'){errormessage=value};
     })///  end  each   checkobject			 
//				alert('checkregex '+ regex + '--ckitem.val--'+ckitem.val());
				
//					     	     if (ckItemValue && regex  ){										 
										     if (!( regex.test(ckItemValue )))   {										
			                      fielderrormessage+='<br>'+fieldname + errormessage;
//				                   alert(fieldid +'---'+fielderrormessage);
												}
//						         }					 
};
//////////////////////////////////////////////////////////////////////////////////////
var checklength = function (checkobject) {	
//				alert('checklength );
			$.each(checkobject, function(property, value) {   ///  each  checkobject
		       $('#debuglog').append ('---------3--checkregex--'+property + "=" + value+'<br>' );
					 if (property=='cklength'){cklength =value};
					 if (property=='minlength'){minlength =value};
					 if (property=='maxlength'){maxlength =value};
					 if (property=='errormessage'){errormessage=value};
     })///  end  each   checkobject			 
//				alert('checkregex '+ regex + '--ckitem.val--'+ckitem.val());
//				  if (cklength !='' ){
					     	     if (ckItemValue.length > maxlength    ||  ckItemValue.length < minlength    ){										 							
			                      fielderrormessage+='<br>'+fieldname + errormessage;
//				                   alert(fieldid +'---'+fielderrormessage);
												}
//						         }					 
};


//////////////////////////////////////////////////////////////////////////////////////
var checkeach2 = function () {	
  $.each(validateThese, function(i, object1) {  ///  each   1
//								alert ('0'+ckItemValue+'---------'+i +'<br>'  );
    $('#debuglog').append ('0---------'+i +'<br>' );
	
    $.each(object1, function(ii, object2) {  ///  each  2
			 $('#debuglog').append ('---1------'+ii + '<br>' );
								
	     		    $.each(object2, function(iii, object3) {   ///  each  3

     			       $('#debuglog').append ('-------2--'+iii + '<br>' );
		      				 if (iii=='info'){checkinfo(object3)};
				      		 if (iii=='required'){checkrequired(object3)};
				      		 if (iii=='regex' && ckItemValue !='' ){checkregex(object3)};
				      		 if (iii=='cklength' && ckItemValue !='' ){checklength(object3)};

      $('#debuglog').append ('0---xx------'+ "fieldname=" + fieldname+'<br>' );						 
						 
//    						 	$.each(object3, function(property, value) {   ///  each  4
//		    	        $('#debuglog').append ('---------3--'+property + "=" + value+'<br>' );
//                  })///  end  each   4		
												 
             })///  end  each   3
    });   ///  end  each   2
		  $('#debuglog').append ('0---------end  each   2<br>' );
		  $('#youEntered').append (fieldname +': '+ ckItemValue+'<br>' );
				 if (fielderrormessage){

//	 		 if(dataType=='checkbox'){
//			   ckitem= $('.'+classid+':last');
//			 }
//	 alert('errormsg--'+fieldname +'---classid--'+classid +'---ckItem--'+ckItem +'---fieldid--'+fieldid +'---'+fielderrormessage);
	    ckItem .after('<span class="red">'+fielderrormessage+'</span>');
	    ckItem .addClass('error');
//	    $('#debuglog') .before('<span class="red">'+fielderrormessage+'</span>');
			fielderrormessage=  '';
	 }

 	  	debuglog();   //         show or hide debuglog - - set var debug at top of script
//			$('#debuglog').show();
      $("#content-main").show();	 
});	 ///  end  each   1

		  $('#debuglog').append ('0---------end  each   1<br>' );
 
};  //  end  function


});	  // end ready function
	////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

-->
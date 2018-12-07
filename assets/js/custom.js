$(document).ready(function() {
    $(".drop-down").accessibleDropDown();
});

$.fn.accessibleDropDown = function () {
    var el = $(this);

    $("a", el).focus(function() {
        $(this).parents("li").addClass("hover");
    }).blur(function() {
        $(this).parents("li").removeClass("hover");
    });
}



function changeClass(){                    
        document.getElementById('contrast-button').className = "light";
        document.getElementById("class_demo").classList.toggle("make_me_dark"); 
        document.getElementById("class_demo").classList.toggle("xx");                                   
    }
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
    function getSize() {
        size = $( "body" ).css( "font-size" );
        size = parseInt(size, 10);
    }

        //get inital font size
        getSize();

        $( "#up" ).on( "click", function() {

        // parse font size, if less than 50 increase font size
            if ((size + 2) <= 24) {
                $( "body" ).css( "font-size", "+=2" );
            }
        });

        $( "#down" ).on( "click", function() {
            if ((size - 2) >= 12) {
                $( "body" ).css( "font-size", "-=2" );
            }
        });

        $( "#reset" ).on( "click", function() {
            if (size < 12 || size > 12) {
                $( "body" ).css({ fontSize: 16});
            }
        });
    

// Form validation code will come here.
function validate()
{
 var nm = document.myForm.Name.value
   if( nm == "")
   {
      document.getElementById('name').innerHTML="Please provide your name!";
      document.myForm.Name.focus() ;
      return false;
   }
  else if( !/^[a-zA-Z]*$/g.test(nm))
   {
      document.getElementById('name').innerHTML="Invalid characters!";
      document.myForm.Name.focus() ;
      return false;
   }
   
   var email = document.myForm.EMail.value;
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if( email == "" )
   {
      document.getElementById('email').innerHTML="Please provide your Email!";
      document.myForm.EMail.focus() ;
      return false;
   }
   else if (reg.test(email) == false) 
     {
         document.getElementById('email').innerHTML="Invalid Email Address!";
         document.myForm.EMail.focus() ;
         return false;
     }


   var gen = document.myForm.Gender.value;
   if( gen == "" )                  
   {
      document.getElementById('gender').innerHTML="Please provide your Gender!";
      return false;
   }

   if (!document.myForm.options1.checked && !document.myForm.options2.checked && !document.myForm.options3.checked) 
     {
         document.getElementById('option').innerHTML="Please check at least one of the options!";
         return false;
     }

   var zip = document.myForm.Zip.value;
   if( zip == "" || isNaN( zip) ||  zip.length !== 5 )
   {
      document.getElementById('zip').innerHTML="Please provide a zip in the format 11111";
      document.myForm.Zip.focus() ;
      return false;
   }
   
   var country = document.myForm.Country.value;
   if( country == "-1" )                  
   {
      document.getElementById('country').innerHTML="Please provide your country!";
      return false;
   }
   

   var mess = document.myForm.message.value; 
   if( mess == "" || mess.length == 120)
 {
     document.getElementById('msz').innerHTML="Please provioed your comment in 120 words.";
     return false;
 }

   if(!document.myForm.terms.checked)
 {
     document.getElementById('term').innerHTML="You must agree with terms and condition.";
     return false;
 }
 return true ;
}
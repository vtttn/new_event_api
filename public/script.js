// var URL = 'http://localhost:3000';
var URL = 'http://fleurish.herokuapp.com';

// signUp

 $('#createAccount').click(function(){
		var createAccount = {
			"firstName": $('#firstName').val(),
			"lastName": $('#lastName').val(),
			"signInEmail": $('#signInEmail').val(),
			"password": $('#createPassword').val(),
			"confirmPassword": $('#retypePassword').val()
		}

		$.post(URL+'/create-Account', createAccount, function(err,response){
			createAccount;
		})

		$('#createAccount').trigger("reset");

	});


// login

	$('#loginButton').click(function(){     
		var loginForm = {
			"loginEmail": $('#loginEmail').val(),
			"loginPassword": $('#loginPassword').val(),
		}

		$.post(URL+'/login-Account', loginForm, function(err,response){
			loginForm;
		});

		$('#loginForm').trigger("reset");

		$(document).ready(function(){
			$("#lostPasswordBtn").on('click', function(){
				$(".popup1").fadeIn('slow');
			});
		});

	});  


	// get all data

	$.get(URL+'/all-event', function(data){
		var el ="";
		for( i = 0; i < data.length; i++){

		el+="<div class='panel panel-default'><div class='panel-heading'><h2 class='eventList panel-title'>"+data[i].title+"</h2></div><div class='panel-body'><p>"+data[i].description+"</p><p>"+data[i].street+"<br>"+data[i].city+", "+data[i].state+" "+data[i].zip+"</p><p>"+data[i].startDate+" - "+data[i].endDate+"</p><p>"+data[i].startTime+" to "+data[i].endTime+"</p><p>Age Restriction: "+data[i].ageRestriction+"</p><p>"+data[i].website+"</p><p>Admission Price: $"+data[i].admission+"</p><p>Photos: "+data[i].photos+"</p><p>Fleurs: "+data[i].fleur+"</p></div><div class='panel-footer'><p><span class='label label-default'>"+data[i].type[0]+"</span> <span class='label label-default'>"+data[i].type[1]+"</span> <span class='label label-default'>"+data[i].type[2]+"</span> <span class='label label-default'>"+data[i].type[3]+"</span> <span class='label label-default'>"+data[i].type[4]+"</span> <span class='label label-default'>"+data[i].type[5]+"</span> <span class='label label-default'>"+data[i].type[6]+"</span> <span class='label label-default'>"+data[i].type[7]+"</span></p></div></div>";
		
			// trying to figure out how to hide the undefined type of event tags
			for(a = 0; a < 7; a++){
				if(data[i].type[a] === undefined){
					$('span').addClass('hiddenTag');
				}
			}
		} 
	
		$('#eventList').append(el);

	});


	
// DATE PICKER
	$( function() {
		var dateFormat = "mm/dd/yy",
			from = $( "#from" )
				.datepicker({
					defaultDate: null,
					changeMonth: true,
					changeYear: true,
					numberOfMonths: 1
				})
				.on( "change", function() {
					to.datepicker( "option", "minDate", getDate( this ) );
				}),
			to = $( "#to" ).datepicker({
				defaultDate: null,
				changeMonth: true,
				changeYear: true,
				numberOfMonths: 1
			})
			.on( "change", function() {
				from.datepicker( "option", "maxDate", getDate( this ) );
			});
 
		function getDate( element ) {
			var date;
			try {
				date = $.datepicker.parseDate( dateFormat, element.value );
			} catch( error ) {
				date = null;
			}
 
			return date;
		}
	} );

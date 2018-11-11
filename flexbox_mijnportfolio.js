
$(function() {
	$("#startpagina").click(function() {
		window.location.href = "flexbox_philip.html";
	});
});

$(function() {
	$("#verder, #projretour").click(function() {
		window.location.href = "flexbox_overzicht.html";
	});
});

$(function() {
	$("#contactknop").click(function() {
//		window.location.href = "http://localhost/codegorilla/weekopdracht001/contactform.php";
			window.location.href = "flexbox_contactform.html";
	});
});

$(function() {
	$("#formtest").click(function() {
//		window.location.href = "http://localhost/codegorilla/weekopdracht001/contactform.php";
			window.location.href = "contactformoutput.php";
	});
});

function FormFunction() {
	document.getElementById("contactform").submit();
	var naam = document.getElementById("naam").value;
	var email = document.getElementById("emailcont").value;
	if (naam == "" || email == "") {
		alert ("U heeft niet alle verplichte velden ingevuld. Probeer het opnieuw");
	}
	else {
		alert (naam + ", uw bericht is ontvangen. Wij zullen zo spoedig mogelijk reageren.");
		window.location.href = "flexbox_overzicht.html";
		alert ("na");
	}
}

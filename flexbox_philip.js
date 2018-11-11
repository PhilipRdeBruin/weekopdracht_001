
function head(title, css, js) {
	document.write('<title>' + title + '</title>');
	document.write('<meta charset="utf-8">');
	document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
	document.write('<script src="https://code.jquery.com/jquery-3.1.1.js"></script>');
	document.write('<script src="javascript/flexbox_mijnportfolio.js"></script>');
	document.write('<link rel="stylesheet" href="css/flexbox_philip.css">');
	document.write('<link rel="stylesheet" href="css/flexbox_philip2.css">');
	
	if (css != ".css") { document.write('<link rel="stylesheet" href="css/' + css + '">'); };	
	if (js != ".js") { document.write('<script src="javascript/' + js + '"></script>'); };
}
	
function header(opt) {
	document.write('<header>');
		document.write('<h2>Philip de Bruin Web-development &#38; VBA</h2>');
		if (opt == "home") { document.write('<img id="startpagina" src="afbeeldingen/home.png" alt="naar Startpagina">'); }
		if (opt == "test") { document.write('<img id="formtest" src="afbeeldingen/testoutput.png" alt="naar Testpagina">'); }
	document.write('</header>');
}

function footer(wa, wt, we, wc) {
		if (wc != "0") {var cont = "c";} else {var cont = ""; }
		document.write('<footer>');
			document.write('<div id="adres' + cont + '">');
				document.write('<table>');
					document.write('<tr><td width=' + wa + '>adres:</td><td>Emmakade 59</td></tr>');
					document.write('<tr><td></td><td>8921 AG Leeuwarden</td></tr>');
				document.write('</table>');
			document.write('</div>');

			document.write('<div id="telefoon' + cont + '">');
				document.write('<table>');
					document.write('<tr><td width=' + wt + '>telefoon:</td><td>058-196 1316</td></tr>');
				document.write('</table>');
			document.write('</div>');

			document.write('<div id="email' + cont + '">');
				document.write('<table>');
					document.write('<tr><td width=' + we + '>e-mail:</td><td>');
						document.write('<a href="mailto:phr.debruin@gmail.com">phr.debruin@gmail.com</a>');
					document.write('</td></tr>');
				document.write('</table>');
			document.write('</div>');

			if (wc != "0") {
				document.write('<div id="contact">');
					document.write('<table>');
						document.write('<tr><td width=' + wc + ' class="black">contact:</td><td>');
							document.write('<button id="contactknop">contact</button>');
						document.write('</td></tr>');
					document.write('</table>');
				document.write('</div>');
			}
		document.write('</footer>');
}
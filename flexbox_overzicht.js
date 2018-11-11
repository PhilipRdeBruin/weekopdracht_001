
function skills_table() {
	document.write('<table>');
		document.write('<tr class="tblhead">');
			document.write('<th width="35%" align="left">Vaardigheid</th>');
			document.write('<th width="20%">ervaring</th>');
			document.write('<th width="45%" align="left">opmerkingen</th>');
		document.write('</tr>');
		document.write('<tr class="tblrije">');
			document.write('<td>Projectmanager</td>');
			document.write('<td align="center">2000-2014</td>');
			document.write('<td>ICT, vnl. Oracle</td>');
		document.write('</tr>');
		document.write('<tr class="tblrijo">');
			document.write('<td>Excel-VBA programmeur</td>');
			document.write('<td align="center">2014-2018</td>');
			document.write('<td>hobbymatig, vrijwilligerswerk</td>');
		document.write('</tr>');
		document.write('<tr class="tblrije">');
			document.write('<td>HTML/CSS/Javascript/PHP</td>');
			document.write('<td align="center">2017-2018</td>');
			document.write('<td>zelfstudie, opleiding bij CodeGorilla</td>');
		document.write('</tr>');
	document.write('</table>');
}

function projects_table() {
	var project = new Array ("Phys. Prop. Database", "Software beheertool",  "Homepage", "Baseball Simulation", "Vrijwilligersbestand", "Administratie tool", "Weekrooster Op=Op", "Wordfeud",  "Mastermind");
	var datum = new Array ("1995", "2004", "2009", "2012", "2016", "2017", "2018", "2018", "2018");
	var software = new Array ("Excel VBA", "Excel VBA", "HTML/CSS", "Excel VBA", "Excel VBA", "PHP", "Excel VBA", "Excel VBA", "JavaScript");
	var omschr = new Array ("GE Plastics / Bedrijfswijd uitgerold.", "Atos / Door diverse beheerteams gebruikt", "Hobbymatig eigen Homepage gebouwd",
					      "Simulatie honkbalspel / Geeft mogelijkheid tot statistisch  analyse", "Vrijwilligerswerk voor Volksmuseum / sterrenwacht", "Opzet voor eigen Financi&#235;le administratie tool gemaakt. Als oefening PHP",
					      "Pro-deo job", "Hobbymatig / als oefening", "Hobbymatig / als oefening");

	document.write('<table>');
		document.write('<tr class="tblhead">');
			document.write('<th width="20%" align="left">project</th>');
			document.write('<th width="15%">datum</th>');
			document.write('<th width="20%" align="left">software</th>');
			document.write('<th width="45%" align="left">omschrijving</th>');
		document.write('</tr>');

		var rijopm = 'tblrijo';
		for (i=0; i<9 ; i++) {
			if (rijopm == 'tblrije') { rijopm = 'tblrijo'; } else { rijopm = 'tblrije'; }
			document.write ('<tr class="' + rijopm + '">');
			document.write ( 	  '<td>' + project[i] + '</td><td align="center">' + datum[i] + '</td><td>' + software[i] + '</td><td>' + omschr[i] + '</td>');
			document.write ('</tr>');
		}
	document.write('</table>');
}

function projects_nav() {
	var projid = new Array ("Beheer", "Homepage", "Honkbal", "Museum", "FinAdmin", "Op=Op", "Wordfeud", "Mastermind");
	var projurl = new Array ("flexbox_beheer.html",
//					        "http://home.kpn.nl/aaaannaa/",
					      "flexbox_homepage.html",
					      "flexbox_honkbal.html",
					      "flexbox_museum.html",
//					        "/unit4/projecten/finadm/index.php",
					      "flexbox_finadmin.html",
					      "flexbox_op_is_op.html",
					      "flexbox_wordfeud.html",
//					        "file:///home/philip/MijnProjecten/WeekOpdracht_001/MasterMind/MasterMind_042.html");
//					        "/W3Resources/MasterMind/MasterMind_042.html");
					      "flexbox_mastermind.html");
	var j=0;
	for (i=0; i<8; i++) {
			j++;
			document.write ('<div id="navknop' + j + '"><a href="' + projurl[i] + '">' + projid[i] + '</a></div>');
	}	
}
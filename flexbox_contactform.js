
function contactformulier() {
	document.write('<form id="contactform" action="#" method="post">');
		document.write('<table width="80%">');
			document.write('<tr><th colwidth="40%"></th><th colwidth="60%"></th></tr>');
			document.write('<tr><td>Naam: <super>*</super></td><td><input required type="text" id="naam" name="naam"></td></tr>');
			document.write('<tr><td>E-mail: <super>*</super></td><td><input required type="email" id="emailcont" name="email" placeholder="naam123@provider.nl"></td></tr>');
			document.write('<tr><td>telefoonnummer:</td><td><input type="text" name="telefoon" placeholder="0123-456789"></td></tr>');
			document.write('<tr><td class="blank">xxx</td><td class="blank">xxx</td></tr>');
			document.write('<tr><td id="tdtekst">uw bericht:</td><td><textarea name="omschr" rows="10" cols="32"></textarea></td></tr>');
			document.write('<tr><td class="blank">xxx</td><td class="blank">xxx</td></tr>');
			document.write('<tr><td colspan="2" id="tdknop" align="center"><input type="submit" id="forminp" onclick="FormFunction()" name="input" value="Verzend"></td></tr>');
			document.write('<tr><td class="blank">xxx</td><td class="blank">xxx</td></tr>');
			document.write('<tr><td class="blank">xxx</td><td class="blank">xxx</td></tr>');
			document.write('<tr><td class="blank">xxx</td><td class="blank">xxx</td></tr>');
			document.write('<tr><td colspan="2"><super>*</super>  verplicht veld</td></tr>');
		document.write('</table>');
	document.write('</form>');
}
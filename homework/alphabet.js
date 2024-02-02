function isVowel(char) {
    switch (char) {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U': return true;
        default: return false;
    }
}

let index;
for (index = 1; index < 27; index++) {

    letter = String.fromCharCode(64 + index);
   
    flag = isVowel(letter)
    if (flag) {
        flag = "Vowel";
    } else {
        flag = "Consonant";
    }

    document.write("<tr>")
    document.write("<td>"+index+"</td>");
    document.write("<td>"+letter+"</td>");
    document.write("<td>"+flag+"</td>");
    document.write("</tr>")
    
}
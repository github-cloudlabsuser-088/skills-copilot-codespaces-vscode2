function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberVal = member.value;
    var memberText = member.options[member.selectedIndex].text;
    if (memberVal == "0") {
        skills.innerHTML = "<option value='0'>-- Select Skills --</option>";
    } else if (memberVal == "1") {
        skills.innerHTML = "<option value='0'>-- Select Skills --</option><option value='1'>HTML</option><option value='2'>CSS</option><option value='3'>Javascript</option>";
    } else if (memberVal == "2") {
        skills.innerHTML = "<option value='0'>-- Select Skills --</option><option value='4'>PHP</option><option value='5'>MySQL</option><option value='6'>Python</option>";
    } else if (memberVal == "3") {
        skills.innerHTML = "<option value='0'>-- Select Skills --</option><option value='7'>Java</option><option value='8'>C++</option><option value='9'>C#</option>";
    }
}
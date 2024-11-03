// get reference to the form and preview area
var Resumeform = document.getElementById("Resume-form");
var ResumepreviewElement = document.getElementById("Resume-preview");
// handle form submission
Resumeform.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect the form submission values
    var name = document.getElementById('name').value;
    var fathersname = document.getElementById('fathersname').value;
    var gender = document.getElementById('gender').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var birthday = document.getElementById('birthday').value;
    var address = document.getElementById('address').value;
    var degree = document.getElementById('degree').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //gernerate the resume content dynamically
    var resumehtml = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name :</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Father's Name :</b><span contenteditable=\"true\">").concat(fathersname, "</span></p>\n    <p><b>Gender :</b><span contenteditable=\"true\">").concat(gender, "</span></p>\n    <p><b>Email :</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone :</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    <p><b>Birthday :</b><span contenteditable=\"true\">").concat(birthday, "</span></p>\n    <p><b>Address :</b><span contenteditable=\"true\">").concat(address, "</span></p>\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(degree, "</p>\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    //display the resume in the preview area
    if (ResumepreviewElement) {
        ResumepreviewElement.innerHTML = resumehtml;
    }
});

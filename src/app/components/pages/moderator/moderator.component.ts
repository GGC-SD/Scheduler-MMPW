import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})
export class ModeratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// //enter email in order to get faculty course information
// function getFacultyCourses()
// {
//     //get the email address value
//     var emailAddress = document.getElementById("facultyEmailInput").value;
//     //send info form email to the faculty info field
//     document.getElementById("infofield").innerHTML = "Email: " + emailAddress; 
// }

// //Clear notification radio buttons
// function unCheck()
// {
//     //clear radio buttons
//     for (var i=0; i<notifyList.length; i++)  
//     {
//         if (notifyList[i].checked)  
//         {
//            notifyList[i].checked = false;
//         }
//     }
//     //clear email faculty address input
//     document.getElementById("facultyEmailInput").value = '';
// }
// //Get the emailDiv
// var emailForm = document.getElementById('email-background');
// //When the user clicks the submit button, email form popup 
// function getEmailSubject() 
// {
//     //display email form popup
//     emailForm.style.display = "block";
//     var subjectValue;
//     //get the value from the radio buttons
//     for (var i=0; i<notifyList.length; i++)  
//     {
//         if (notifyList[i].checked)  {
//             if(notifyList[i].checked == false)
//             {
//                 subjectValue = "";
//             }
//             else
//             {
//                 subjectValue = notifyList[i].value;
//             }
//             document.getElementById("emailSubject").value = subjectValue;
//         }
//     }
//     console.log(subjectValue);
// }

// //clear all the input textareas in the email popup form then close the popup
// function clearContent(idName)
// {
//     //clear input values in all input text areas
//     document.getElementById("emailInput").value = '';
//     document.getElementById("emailSubject").value = '';
//     document.getElementById("emailTextArea").value = ''; 
//     //close the email popup form
//     emailForm.style.display = "none";
// }

// var emailFormAddress = document.getElementById("emailInput").value;
// var subjectForm = document.getElementById("emailSubject").value;
// var textAreaForm = document.getElementById("emailTextArea").value;
// //implement ajax in javascript function to use modEmail.php server side    
// // function sendEmail()
// // {
// //     var email = $("#emailInput").val();
// //     var subject = $("#emailSubject").val();
// //     var text = $("#emailTextArea").val();
// //     var dataString = 'email='+ email + '&subject=' + subject + '&text=' + text;
// //     $.ajax(
// //         {
// //             type:"POST",
// //             url:"modEmail.php",
// //             data: dataString,
// //             success:function(result){
// //                 $('.success').fadeIn(1000);
// //             }
// //         }
// //     );
// // }
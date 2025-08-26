function checkAttendance(event) {
  event.preventDefault();
  const studentId = document.getElementById("studentId").value.trim();
  
  // Demo data (replace with database later)
  const attendance = {
    "101": "85%",
    "102": "92%",
    "103": "76%"
  };

  const result = attendance[studentId] 
    ? `Attendance for ID ${studentId}: ${attendance[studentId]}` 
    : "❌ Student ID not found";
  
  document.getElementById("attendanceResult").innerText = result;
}

function submitFeedback(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const feedback = document.getElementById("feedback").value;

  document.getElementById("feedbackResult").innerText = 
    `✅ Thank you ${name}, your feedback has been submitted.`;

  document.getElementById("name").value = "";
  document.getElementById("feedback").value = "";
}

document
  .getElementById("driver_details")
  .addEventListener("submit", addDriverHandler);

function addDriverHandler(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let mobileNo = document.getElementById("mobile_no").value;
  let transporter = document.getElementById("transporter").value;
  let street = document.getElementById("street").value;
  let country = document.getElementById("country").value;
  let city = document.getElementById("city").value;
  let zip = document.getElementById("zip").value;
  let building = document.getElementById("building").value;
  let work = document.getElementById("work_status").value;
  let profession = document.getElementById("profession").value;
  let employer = document.getElementById("employer").value;
  let salary = document.getElementById("salary").value;
  let wordAddress = document.getElementById("work_address").value;
  let id = document.getElementById("id_no").value;
  let location = document.getElementById("select_location").value;
  let isDone = true;
  const obj = {
    name,
    age,
    mobileNo,
    transporter,
    street,
    country,
    city,
    zip,
    building,
    work,
    profession,
    employer,
    salary,
    wordAddress,
    id,
    location,
  };
  if (name.length < 1) {
    document.getElementById("name").style = "border:1px solid red";
    isDone = false;
    alert("Enter Valid Inputs");
  }
  if (age.length < 1) {
    document.getElementById("age").style = "border:1px solid red";
    isDone = false;
    alert("Enter Valid Inputs");
  }
  if (mobileNo.length < 1) {
    document.getElementById("mobile_no").style = "border:1px solid red";
    isDone = false;
    alert("Enter Valid Inputs");
  }
  if (transporter.length < 1) {
    document.getElementById("transporter").style = "border:1px solid red";
    isDone = false;
    alert("Enter Valid Inputs");
  }
  if (street.length < 1) {
    document.getElementById("street").style = "border:1px solid red";
    isDone = false;
    alert("Enter Valid Inputs");
  }
  if (country.length < 1) {
    document.getElementById("country").style = "border:1px solid red";
    isDone = false;
    alert("Enter Valid Inputs");
  }
  if (city.length < 1) {
    document.getElementById("city").style = "border:1px solid red";
    isDone = false;
    alert("Enter Valid Inputs");
  }
  if (zip.length < 1) {
    document.getElementById("zip").style = "border:1px solid red";
    isDone = false;
    alert("Enter Valid Inputs");
  }
  if (building.length < 1) {
    document.getElementById("building").style = "border:1px solid red";
    isDone = false;
    alert("Enter Valid Inputs");
  }
  if (work.length < 1) {
    document.getElementById("work_status").style = "border:1px solid red";
    isDone = false;
    alert("Enter Valid Inputs");
  }
  if (profession.length < 1) {
    document.getElementById("profession").style = "border:1px solid red";
    isDone = false;
    alert("Enter Valid Inputs");
  }
  if (employer.length < 1) {
    document.getElementById("employer").style = "border:1px solid red";
    isDone = false;
    alert("Enter Valid Inputs");
  }
  if (id.length < 1) {
    document.getElementById("id_no").style = "border:1px solid red";
    isDone = false;
    alert("Enter Valid Inputs");
  }
  if (wordAddress.length < 1) {
    document.getElementById("work_address").style = "border:1px solid red";
    isDone = false;
    alert("Enter Valid Inputs");
  }
  if (age < 18) {
    alert("the driver should not be less than 18 years old");
    isDone = false;
  }
  if (location.length < 1) {
    document.getElemetById("select_location").style = "border:1px solid red";
    isDone = false;
    alert("Enter Valid Inputs");
  }
  if (isDone) {
    const data = localStorage.getItem("driverList");
    console.log(data);
    let updatedArray;
    if (data === null) {
      updatedArray = [obj];
    } else {
      updatedArray = [...JSON.parse(data), obj];
    }
    localStorage.setItem("driverList", JSON.stringify(updatedArray));
    window.location.assign("./index.html");
  }
}

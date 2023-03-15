document
  .getElementById("driver_details")
  .addEventListener("submit", addDriverHandler);

function addDriverHandler(e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const age = document.getElementById("age");
  const mobileNo = document.getElementById("mobile_no");
  const transporter = document.getElementById("transporter");
  const street = document.getElementById("street");
  const country = document.getElementById("country");
  const city = document.getElementById("city");
  const zip = document.getElementById("zip");
  const building = document.getElementById("building");
  const work = document.getElementById("work_status");
  const profession = document.getElementById("profession");
  const employer = document.getElementById("employer");
  const salary = document.getElementById("salary");
  const wordAddress = document.getElementById("work_address");
  const id = document.getElementById("id_no");
  const location = document.getElementById("select_location");
  let isDone = true;
  const arr = [
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
  ];
  const employee = {
    name: name.value,
    age: age.value,
    mobileNo: mobileNo.value,
    transporter: transporter.value,
    street: street.value,
    country: country.value,
    city: city.value,
    zip: zip.value,
    building: building.value,
    work: work.value,
    profession: profession.value,
    employer: employer.value,
    salary: salary.value,
    wordAddress: wordAddress.value,
    id: id.value,
    location: location.value,
  };

  for (const val of arr) {
    if (val.value.length < 1) {
      isDone = false;
      val.style = "border:1px solid red";
    }
    if (val.id === "age") {
      if (val.value < 18) {
        isDone = false;
        val.style = "border:1px solid red";
        alert("the driver should not be less than 18 years old");
      }
    }
  }

  if (isDone) {
    const data = localStorage.getItem("driverList");
    let updatedArray;
    if (data === null) {
      updatedArray = [employee];
    } else {
      updatedArray = [...JSON.parse(data), employee];
    }
    localStorage.setItem("driverList", JSON.stringify(updatedArray));
    window.location.assign("./index.html");
  } else {
    alert("Enter Valid Inputs");
  }
}

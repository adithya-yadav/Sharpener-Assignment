document
  .querySelector("#addDriverId")
  .addEventListener("click", openOnboardHandler);

function openOnboardHandler() {
  window.location.assign("./addDriver.html");
}

window.addEventListener("DOMContentLoaded", domLoad);

function domLoad() {
  const data = JSON.parse(localStorage.getItem("driverList"));
  const parent = document.getElementById("driverList");
  if (data) {
    document.getElementById("count").textContent = data.length;
    data.map((list, ind) => {
      parent.innerHTML = parent.innerHTML + `<tr key=${ind}>
      <td><button class="btn-warning">pending...</button></td>
      <td>${list.id}</td>
        <td>${list.transporter}</td>
        <td>${list.name}</td>
        <td>${list.mobileNo}</td>
        <td>${list.location}</td>
        <td>1234 ****  ****</td>
        <td><button class="eye_btn" onclick=showDetailsHandler('${list.id}','${list.transporter}','${list.name}','${list.mobileNo}','${list.location}','${list.age}')>👁️</button></td>
        </tr>`;
    });
  }
  if(!data){
      parent.innerHTML = `<tr class="bg-warning w-100"><td>No Drivers</td></tr>`
  }
}

function showDetailsHandler(id, transporter, name, mobileNo, location, age) {
  const parent = document.getElementById("showDetailsId");
  const child = `
  <div id="detailsHead">
  <h5>Driver Details</h5>
  <button onclick=closeDetailsHandler() class="close_btn">X</button>
  </div>
    <div>
      <label for="nameD">Name :</label>
      <span id="nameD">${name}</span>
    </div><div>
    <label for="ageD">age :</label>
    <span id="ageD">${age}</span>
  </div><div>
  <label for="MobileD">Mobile No :</label>
  <span id="mobileD">${mobileNo}</span>
</div><div>
<label for="location">Location :</label>
<span id="location">${location}</span>
<button class="deleteDriver" onclick=deleteDriverHandler('${mobileNo}')>Delete Driver</button>
</div>`;
  parent.innerHTML = child;
}

function closeDetailsHandler(){
    document.getElementById("showDetailsId").innerHTML = ""
}

function deleteDriverHandler(num){
    let data = JSON.parse(localStorage.getItem("driverList"))
    let ind;
    if(data.length === 1){
      localStorage.removeItem("driverList")
      location.reload()
      return 
    }
    if(data){
      ind = data .findIndex((i)=>i.mobileNo===num)
    }
    data.splice(ind,1)
    localStorage.setItem("driverList",JSON.stringify(data))
    location.reload()
}
const countryValue = document.getElementById("select_country")
countryValue.addEventListener("change",changeCountryHandler)

function changeCountryHandler(){
    const parent = document.getElementById("driverList");
    const data = JSON.parse(localStorage.getItem("driverList"));
    let count = document.getElementById("count")
    count.textContent = 0
    parent.innerHTML = ""
    if (data) {
        data.map((list, ind) => {
          if(list.location === countryValue.value || countryValue.value === "All" ){
            count.textContent = parseInt(count.textContent)+1
          parent.innerHTML = parent.innerHTML + `<tr key=${ind}>
          <td><button class="btn-warning">pending...</button></td>
          <td>${list.id}</td>
            <td>${list.transporter}</td>
            <td>${list.name}</td>
            <td>${list.mobileNo}</td>
            <td>${list.location}</td>
            <td>1234 ****  ****</td>
            <td><button class="eye_btn" onclick=showDetailsHandler('${list.id}','${list.transporter}','${list.name}','${list.mobileNo}','${list.location}','${list.age}')>👁️</button></td>
            </tr>`;
          }
        });
      }
      if(count.textContent==="0"){
        parent.innerHTML = `<tr class="bg-warning w-100"><td>No Drivers</td></tr>`
      }
}
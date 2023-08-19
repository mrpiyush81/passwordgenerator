const upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset="abcdefghijklmnopqrstuvwxyz";
const numberset="1234567890";
const symbolset="~!@#$%^&*()_-+/";

const pass=document.getElementById("passs");
const totalchar= document.getElementById("pl");
const upperinput= document.getElementById("cu");
const lowerinput= document.getElementById("cl");
const numberinput= document.getElementById("cn");
const symbolinput= document.getElementById("cs");

const getrandomData = (dataset) => {
  const k=[Math.floor(Math.random() * dataset.length)];

return dataset[k]
}
// getrandomdata(upperset);


const generatPassword = (password="") => {
   if(upperinput.checked) {
    password += getrandomData(upperset);
   }
   if(lowerinput.checked) {
     password += getrandomData(lowerset);
    }
    if(numberinput.checked) {
      password += getrandomData(numberset);
    }
    if(symbolinput.checked) {
      password += getrandomData(symbolset);
    }
    if(password.length < totalchar.value){
      return generatPassword(password);
    }
    // console.log(password);
   pass.innerText = truncateString(password,totalchar.value);
  // truncateString(password,totalchar.value);
  console.log(truncateString(password,totalchar.value));
}

generatPassword();

document.getElementById("btn").addEventListener("click",function ff()
{
 generatPassword();
});

 function truncateString(str,num){
    if(str.length > num){
        let substr = str.substring(0,num);
        return substr;
    }
    else{
        return str;
    }
 }
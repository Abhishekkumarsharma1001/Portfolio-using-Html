let modebtn=document.querySelector("#mode");
 let currMode="light";

modebtn.onclick=()=>{
   if(currMode=="light"){
    currMode="dark";
    document.querySelector("body").style.backgroundColor="black";
   }
   else{
    currMode="light";
    document.querySelector("body").style.backgroundColor="White";
   }
   console.log(currMode)
}

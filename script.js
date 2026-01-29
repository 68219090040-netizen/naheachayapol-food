const menu=[
["ไก่ทอด",60],["ไก่ย่าง",70],["ข้าวผัด",50],["กะเพรา",60],
["ยำวุ้นเส้น",70],["ต้มยำ",80],["แกงเขียวหวาน",70],
["ชาเย็น",30],["น้ำเปล่า",15]
];

function plus(id){
let x=document.getElementById(id);
x.value=parseInt(x.value)+1;
}

function minus(id){
let x=document.getElementById(id);
if(x.value>0)x.value=parseInt(x.value)-1;
}

function submitOrder(){
let cart=[];
let total=0;

menu.forEach((m,i)=>{
let q=parseInt(document.getElementById("c"+(i+1)).value);
if(q>0){
cart.push(`${m[0]} x${q} = ${m[1]*q}`);
total+=m[1]*q;
}
});

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;

if(cart.length==0||name==""){
alert("กรอกข้อมูลให้ครบ");
return;
}

let orderId=Math.floor(Math.random()*90000)+10000;

localStorage.setItem("cart",JSON.stringify(cart));
localStorage.setItem("total",total);
localStorage.setItem("info",`ออเดอร์ #${orderId}<br>${name} | ${phone}`);

location.href="bill.html";
}

function loadBill(){
document.getElementById("info").innerHTML=localStorage.getItem("info");
let list=JSON.parse(localStorage.getItem("cart"));
let ul=document.getElementById("list");

list.forEach(i=>{
let li=document.createElement("li");
li.textContent=i;
ul.appendChild(li);
});

document.getElementById("total").textContent=localStorage.getItem("total");
}

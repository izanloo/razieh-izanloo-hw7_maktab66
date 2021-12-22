
  //ساخت Constructor
  function Uni(name,unit,capacity){
    this.className=name;
    this.classUnit=unit;
    this.classCapacity=capacity;
    this.data=function(){
        return "className:" + this.className + " " +
                ", classUnit:" + this.classUnit +  " " +
                ",classCapacity:" + this.classCapacity
    };
}


//ساخت object از uni
const softEngineeringClass = new Uni("JavaScript", "3",8);
let networkClass = new Uni("shabake", "2", 50);

//خروجی قسمت  الف
document.getElementById("demo").innerHTML = softEngineeringClass.data(); 
document.getElementById("demo1").innerHTML = networkClass.data(); 




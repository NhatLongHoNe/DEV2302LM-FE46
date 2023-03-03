
var name1 = document.getElementById("txtName");
var txtH1 = document.getElementsByTagName("h1");

var txtP = document.getElementsByClassName("txtp");


var employee = [
    {
        name:'Nhật Hồ',
        age: 23,
        gender:'Nam',
        address:'Hà Đông',
        isValid:false,
        addInfo: function(){
            console.log("info");
        }
    },
    {
        name:'Nguyễn văn a',
        age: 2,
        gender:'Nam',
        address:'Hà Nội'
    },
    {
        name:'Nguyễn văn b',
        age: 2,
        gender:'Nam',
        address:'Hà Nội'
    },
    {
        name:'Nguyễn văn c',
        age: 2,
        gender:'Nam',
        address:'Hà Nội'
    }
]

var obj =  {
    name:'Nhật Hồ',
    age: 23,
    gender:'Nam',
    address:'Hà Đông',
    isValid:false,
    addInfo: function(){
        console.log("info");
    }
};

// regex
var regex =/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/


// number

// date time

var dateTime = new Date();

console.log(dateTime.getTime());
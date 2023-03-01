
function check(){
    var userName = document.getElementById("username").value;
    var age = document.getElementById("age").value;

    if(age< 18){
        document.writeln('bạn chưa đủ 18 tuổi');
    }else{
        document.writeln(userName);
    }
}
function clearSubmit(){
    document.getElementById("username").value = '';
    document.getElementById("age").value = '';
}
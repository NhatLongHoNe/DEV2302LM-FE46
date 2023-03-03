
function login(){
    var userName = document.getElementById("txtUserName").value;
    var password = document.getElementById("txtPassword").value;

    console.log(userName);

    if(!userName){
        alert("bạn chưa nhập tài khoản");
        return false;
    }
    if(password== ''){
        alert("bạn chưa nhập mật khẩu");
        return;
    }

    alert("Đăng nhập thành công!");
}
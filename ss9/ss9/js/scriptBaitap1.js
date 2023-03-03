
// 1. thêm báo lỗi màu đỏ ở dưới các dòng input
// 2. nếu thiếu value ở input thì focus con trỏ vào thẻ input
// 3. khi điền đầy đủ thông tin báo thành công bằng text 
// và xóa các thông báo lỗi mầu đỏ

function login() {
    var userName = document.getElementById("txtUserName");
    var password = document.getElementById("txtPassword");
    
    var errUserName = document.getElementById("err-username");
    var errPassword = document.getElementById("err-password");

    if (!userName.value) {
        errUserName.style.display = 'block'
        userName.focus();
    }else{
        errUserName.style.display = 'none'
    }

    if (password.value == '') {
        errPassword.style.display = 'block'
        errPassword.focus();
    }else{
        errPassword.style.display = 'none'
    }
    if(userName.value && password.value){
        document.getElementById("success").innerHTML 
        = "Đang nhập thành công"
    }
    
    
}
function resetFrom(){
    document.getElementById("txtUserName").value = '';
    document.getElementById("txtPassword").value = '';
}

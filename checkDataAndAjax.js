

$(document).ready(function(){

    $("#input-button-submitLogin").click(function(){

        var username = $("#input-text-username").val().trim();
        var password = $("#input-text-password").val().trim();
        var rememberMe = $("#input-checkbox-rememberMe").is(":checked");

        //控制台调试输出获取的值
        console.log(username);
        console.log(password);
        console.log(rememberMe);
        if(username!="" || password!=""){
            if(username!="" && password!="" &&  rememberMe!=null){

                $.ajax({
                    type:"POST",
                    url:"handleData.php",
                    data:{
                        p_username:username,
                        p_password:password,
                        p_rememberMe:rememberMe
                    },
                    dataType:"JSON",
                    success:function(data){
                        if(data.success){
                            $("#loginSuccessMsg").html(data.msg);
                        }
                    },
                    error:function(jqXHR){
                        alert(jqXHR.error+'<br/>'+jqXHR.status);
                    }
                })

            }
        }else{
                $("#loginSuccessMsg").html("请先将信息填写完整！");
        }
    })

})

//检测输入框数据的改变情况
function checkInput(obj){
    var objVal=obj.value.trim();
    var objId=obj.id;
    switch (objId){
        case 'input-text-username':
            var msgId="#"+objId + "-msg";
            var msg = $(msgId);
            if(objVal=="") {
                msg.html("请输入用户名！");
            }else{
                msg.html("");
                $("#loginSuccessMsg").html("");
            }
            break;
        case 'input-text-password':
            var msgId="#"+objId + "-msg";
            var msg = $(msgId);
            if(objVal=="") {
                msg.html("请输入密码！");
            }else{
                msg.html("");
                $("#loginSuccessMsg").html("");
            }
            break;

    }


}

<?php
    
    //echo "c.php";
    $file_in = file_get_contents("php://input"); //接收post数据
    
  
   // 打开b.php文件，这里采用的是a+，也可以用a，a+为可读可写，a为只写，如果b.php不能存在则会创建它
   $file = fopen('receive.txt', 'w'); // a模式就是一种追加模式，如果是w模式则会删除之前的内容再添加
    
    //1.xml解析，
    //2.判断内容，
    //3.给客户端返回一个信息。
    echo "{
         "errorCode": "200",
          "message": "submit sucessful"
         }";

// 写入追加的内容
fwrite($file, $file_in);
// 关闭b.php文件
fclose($file);
// 销毁文件资源句柄变量
unset($file);
    
?>



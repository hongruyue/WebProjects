<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<link href="css.css" rel="stylesheet" type="text/css" />
<script languag="javascript" type="text/javascript" src="js/jquery-1.4.4.min.js"></script>
<script languag="javascript" type="text/javascript" src="js/jquery.fn.imgplayer.js"></script>
</head>
<body>
        	<div class="con_top_left">
            	<div class="img"><div class="focus">
            	<div id="imgPlayer_xq" class="img">
		<?php
			require("./include/config.php");
			require("./function/subfunction.php");
			$link=@mysql_connect(HOST,USER,PASS) or die("数据库连接失败");
			mysql_set_charset('utf8', $link);
			mysql_select_db(DBNAME,$link);
		      //$sql="select i.subject,i.picid,i.itemid,a.filepath from supe_spaceitems i,supe_attachments a where i.picid=a.aid and i.digest=3 order by i.dateline desc limit 5";
			$sql="select i.subject,i.picid,i.itemid,a.filepath from supe_spaceitems i,supe_attachments a where i.picid=a.aid and(((i.catid=72 and i.catid_other =193) or (i.catid=72 and i.catid_other=200) or (i.catid=68 and i.catid_other=172)) and i.top =1) order by i.dateline limit 5";
			$result=mysql_query($sql,$link);
			while($row=mysql_fetch_row($result)){
				echo	"<a href='http://www.caigou2003.com/?viewnews-{$row[2]}' target='_blank' title='{$row[0]}'><img src='http://www.caigou2003.com/attachments/{$row[3]}' alt='{$row[0]}'/></a>";
			}
		?>

</div>
			<div id="consle" class="new_text" style="text-align:center;margin-top:5px"></div>
				<script type="text/javascript">			
				  var player = $("#imgPlayer_xq").playImgs({
					  imgCSS	: {'width' : '352px', 'height' : '236px','broder':'0px;'},
					  width	: '476px',
					  height: '210px',
					  broder:'0px',
					  time	: '3000',
					  transition : 0,
					  duration : 5000
				  }).start();
				</script>		
      </div></div>
              <div class="img_1">
		<?php
			$sql="select i.subject,i.picid,i.itemid,a.filepath from supe_spaceitems i,supe_attachments a where i.picid=a.aid and i.digest=1 and i.catid=72 order by i.dateline desc limit 1";
			$result=mysql_query($sql,$link);
			while($row=mysql_fetch_row($result)){
				echo	"<img src='http://www.caigou2003.com/attachments/{$row[3]}' alt='{$row[0]}' width='230' height='80'/><br><a href='http://www.caigou2003.com/?viewnews-{$row[2]}' target='_blank' title='{$row[0]}'>".$row[0]."</a>";
			}
		?>
		</div>
                <div class="img_2">
		<?php
			$sql="select i.subject,i.picid,i.itemid,a.filepath from supe_spaceitems i,supe_attachments a where i.picid=a.aid and i.digest=1 and i.catid=72 order by i.dateline desc limit 1,1";
			$result=mysql_query($sql,$link);
			while($row=mysql_fetch_row($result)){
				echo	"<img src='http://www.caigou2003.com/attachments/{$row[3]}' alt='{$row[0]}' width='230' height='80'/><br><a href='http://www.caigou2003.com/?viewnews-{$row[2]}' target='_blank' title='{$row[0]}'>".$row[0]."</a>";
			}
		?>
		</div>
            
        </div>


</body>
</html>

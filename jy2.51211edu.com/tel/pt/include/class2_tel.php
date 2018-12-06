<?php  
while($rs1=mysql_fetch_array($result))  
{ 	
    $cname = $rs1['cid'];   
	$pid = $rs1['pid']; 
	
} 

?>
<meta charset="utf-8">
<div style="display:none">
<input name="s1" type="radio" value="<?php echo $pid;?>" checked="checked" /></div>


<tr>
    <td align="center" ><font style="font-size:14px;">报名院校</font></td>
    <td colspan="3" >
<select  name="s2" style="width:100%;height:30px;line-height:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">

<?
$sql="select * from cms_class where flid=2 and cid= ".$cname."   order by vieworder desc,cid  asc     ";
$query=mysql_query($sql);
while($arr=mysql_fetch_array($query))
{
echo "<option value=".$arr["cid"]." class=style".$arr["ys"].">".$arr["title"]."</option>\n";
}
?>
</select>
</td>
</tr>
<tr>
    <td align="center"><font style="font-size:14px;">第一专业志愿</font></td>
    <td>
<SELECT name="s3" style="width:100%;height:30px;line-height:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
<!--<option >请选择第一专业志愿</option>-->
<?
$sql="select * from cms_class where flid=3 and pid= ".$cname."  order by vieworder desc,cid  asc  ";
$query=mysql_query($sql);
while($arr=mysql_fetch_array($query))
{
echo "<option value=".$arr["cid"]." >".$arr["title"]."</option>\n";
}
?>
</SELECT>
</td>
</tr>
  <tr>
    <td align="center"><font style="font-size:14px;">第二专业志愿</font></td>
    <td>
<select name="s4" style="width:100%;height:30px;line-height:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
<option >请选择第二专业志愿</option>
<?
$sqlx="select * from cms_class where flid=3 and pid= ".$cname."  order by vieworder desc,cid  desc  ";
$queryx=mysql_query($sqlx);
while($arrx=mysql_fetch_array($queryx))
{
echo "<option value=".$arrx["cid"]." >".$arrx["title"]."</option>\n";
}
?>
</select>
</td>
</tr>

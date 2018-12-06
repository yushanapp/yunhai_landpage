<meta charset="utf-8">
  <tr>
    <td align="center"><font style="font-size:14px;">报名类型</font></td>
    <td><select name="s1" style="width:100%;height:30px;line-height:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" onChange="changeselect1(this.value)">
<option>==请选择==</option>
<?
$sqlb="select cid,title,info from cms_class where flid=1";
$queryb=mysql_query($sqlb);
while($arrb=mysql_fetch_array($queryb))
{  ?>
<option value="<?php echo $arrb["cid"];?>"><?php echo $arrb["title"];?>-<?php echo $arrb["info"];?></option>
<?php }
mysql_free_result($queryb);
?>
</select></td>
  </tr>
  <tr>
    <td width="100" align="center"><font style="font-size:14px;">报名院校</font></td>
    <td>
<select name="s2" style="width:100%;height:30px;line-height:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" onChange="changeselect2(this.value)">
<option>==请选择==</option>
</select></td>
  </tr>
  <tr>
    <td width="100" align="center"><font style="font-size:14px;">第一专业志愿</font></td>
    <td>
<select name="s3" style="width:100%;height:30px;line-height:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" >
<option>==请选择==</option>
</select>
</td>
  </tr>
<tr>
<td width="100" align="center">
<font style="font-size:14px;">第二专业志愿</font>
</td>
<td>
<select name="s33" style="width:100%;height:30px;line-height:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" >
<option value="0">==请选择==</option>
</select>

</td>
    </tr>
    

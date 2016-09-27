
/**
* [isEqualIPAddress 判断两个IP地址是否在同一个网段]
* @param {[String]} addr1 [地址一]
* @param {[String]} addr2 [地址二]
* @param {[String]} mask [子网掩码]
* @return {Boolean} [true or false]
*/


function isEqualIPAddress (addr1,addr2,mask){
if(!addr1 || !addr2 || !mask){
console.log("各参数不能为空");
return false;
}
var
res1 = [],
res2 = [];
addr1 = addr1.split(".");
addr2 = addr2.split(".");
mask = mask.split(".");
for(var i = 0,ilen = addr1.length; i < ilen ; i += 1){
res1.push(parseInt(addr1[i]) & parseInt(mask[i]));
res2.push(parseInt(addr2[i]) & parseInt(mask[i]));
}
if(res1.join(".") == res2.join(".")){
console.log("在同一个网段");
return true;
}else{
console.log("不在同一个网段");
return false;
}
}

addr1 = "10.0.0.69"
addr2 = "10.0.0.200"
mask = "255.255.255.0"
isEqualIPAddress(addr1,addr2,mask)

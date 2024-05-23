/******************************

脚本名称: session 番茄钟
下载地址：商店下载
更新时间：2024-05-23
*******************************

[rewrite_local]
https://api.stayinsession.com/auth/login url script-response-body https://raw.githubusercontent.com/isoftos/Profiles/main/QuantumultX/Scripts
/session.js

[mitm] 
hostname = api.stayinsession.com

*******************************/

var objc = JSON.parse($response.body);
objc.subscription_status = 'pro'
objc.subscription_expiry_date = '2029-05-29T13:42:53Z'

$done({body : JSON.stringify(objc)});

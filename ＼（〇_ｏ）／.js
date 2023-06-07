var name = JSON.parse($response.body);
const vipa = '/api/subscription/verified';
const vipb = '/api/auth/login';
const vipc = '/api/check-logged';
const vip = {
    "auto_resume_date" : null,
    "status" : "active",
    "account_type" : "patron-annual",
    "cancel_date" : null,
    "start_date" : "2023-05-22T11:37:17.000000Z",
    "expire_date" : "2099-09-09T09:09:09.000000Z"
  };

if ($request.url.indexOf(vipa) != -1){
  name.data = (vip);
}

if ($request.url.indexOf(vipb) != -1){
  name.user.subscription = (vip)
  name.user.account_type = "patron-annual";
}

if ($request.url.indexOf(vipc) != -1){
  name.subscription = (vip)
  name.account_type = "patron-annual";
}

$done({body : JSON.stringify(name)});
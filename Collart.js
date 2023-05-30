var body = JSON.parse($response.body);

body = {
  "entitlements" : [
    {
      "redeem" : {

      },
      "expires_date_ms" : 4092599349000,
      "purchase_date_ms" : 1671198216000,
      "product_identifier" : "Collart_Promium_Yearly_New_20220808",
      "is_in_intro_offer_period" : false,
      "environment" : "Production",
      "auto_renew" : false,
      "is_in_trial_period" : true,
      "entitlement_id" : "premium"
    }
  ],
  "is_valid" : true
}


$done({body : JSON.stringify(body)});
# webstore
Shaun made the perms messed up for the actual store repo...

## Shop
## List shops
`POST /api/shop/list/[token]`

Parameter | Type     | Notes
--------- | -------  | -----
params    | JSON     | Not Required

Sample Request: 

`POST /api/shop/list/token`
```json
{
"params": {"name":  "Paco's shop"}
}
```
Response:
```json
{
    "status": 200,
    "message": "ok",
    "shops": [
        {
            "_id": "5e24ca2febbd546ef14d952f",
            "name": "Paco's shop",
            "owner": "5e1e49e59b6cd88186937073",
            "desc": "The one stop shop!",
            "date": "Sun Jan 19 2020 13:29:19 GMT-0800 (Pacific Standard Time)",
            "__v": 0
        }
    ]
}
```

## Create shop
`POST /api/shop/create/[token]`

Parameter | Type     | Notes
--------- | -------  | -----
name      | String   | Required
owner     | String   | Required
desc      | String   | 

Sample Request: 

`POST /api/shop/create/blah`
```json
{
"name": "Paco's one-stop whore shop",
"owner": "83297984h2398dh98he928h",
"desc": "Come one, come all to the whore store."
}
```
Response:
```json
{
"status": "201",
"message": "ok",
"objectId": "2398d29j9d8hd928hd928hd298d" 
}
```
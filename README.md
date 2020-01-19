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

## Product
## List products
`POST /api/product/list/[token]`

Parameter | Type     | Notes
--------- | -------  | -----
params    | JSON     | Not Required

Sample Request: 

`POST /api/product/list/token`
```json
{
"params": {"shop":  "5e24ca2febbd546ef14d952f"}
}
```
Response:
```json
{
    "status": 200,
    "message": "ok",
    "products": [
        {
            "_id": "5e24d0933529316fe2d17621",
            "name": "Assstick",
            "desc": "You just out it on your ass",
            "price": 9.99,
            "action": "https://google.com/amp",
            "thumbnail": "https://placehold.it/1280x720",
            "shop": "5e24ca2febbd546ef14d952f",
            "date": "Sun Jan 19 2020 13:56:35 GMT-0800 (Pacific Standard Time)",
            "__v": 0
        }
    ]
}
```

## Create shop
`POST /api/product/create/[token]`

Parameter | Type     | Notes
--------- | -------  | -----
name      | String   | Required
desc      | String   | 
price      | Number   | 
action      | String   | Link
thumbnail      | String   | Link to image
shop      | ObjectId   |

 

Sample Request: 

`POST /api/product/create/blah`
```json
{
"name": "Assstick",
"desc": "You just put it on your ass",
"price": "9.99",
"action": "https://google.com/amp",
"thumbnail": "https://placehold.it/1280x720",
"shop": "5e24ca2febbd546ef14d952f"
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
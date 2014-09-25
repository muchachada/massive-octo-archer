DB Schema
=========

Este es el esquema de la DB. Como usamos NeDB (MongoDB) vamos a representarlo
con JSON.

## Clientes

````
{
  "_id": ObjectID(...),
  "name": "Facundo",
  "last_name": "Segarra",
  "phone_numbers: [
    "+54 555 1234"
  ],
  "address": "Av. Ovidio Lagos 1234, Casilda",
  "email": "facusegarra@yahoo.com.ar",
}
````
## Trabajos

````
{
  "_id": ObjectID(...),
  "title": "Recibos",
  "owner": ObjectID(...),
  "creation_date": ISODate(...),
  "deliver_date": ISODate(...),
  "files": [
    {
      "filename": "recibos-001.jpg"
    }
  ]
}
````

## API Url

```
localhost:3000/api/v1
Method: POST
```
## Query

```
query {
    calculateCost{
        id
        parentId
        name
        cost
        children {
            id
            parentId
            name
            cost
            children {
              id
              parentId
              name
              cost
              children{
                id
                parentId
                name
                cost
                }
            }
        }
    }
}
```

## Response
```
{
    "data": {
        "calculateCost": [
            {
                "id": "uuid-1",
                "parentId": "0",
                "name": "Webprovise Corp",
                "cost": 52983,
                "children": [
                    {
                        "id": "uuid-18",
                        "parentId": "uuid-1",
                        "name": "Walter, Schmidt and Osinski",
                        "cost": 2033,
                        "children": []
                    },
                    {
                        "id": "uuid-8",
                        "parentId": "uuid-1",
                        "name": "Bartell - Mosciski",
                        "cost": 28817,
                        "children": [
                            {
                                "id": "uuid-16",
                                "parentId": "uuid-8",
                                "name": "Weissnat - Murazik",
                                "cost": 3277,
                                "children": []
                            },
                            {
                                "id": "uuid-15",
                                "parentId": "uuid-8",
                                "name": "Predovic and Sons",
                                "cost": 4725,
                                "children": []
                            },
                            {
                                "id": "uuid-13",
                                "parentId": "uuid-8",
                                "name": "Balistreri - Bruen",
                                "cost": 1686,
                                "children": []
                            },
                            {
                                "id": "uuid-11",
                                "parentId": "uuid-8",
                                "name": "Parker - Shanahan",
                                "cost": 12236,
                                "children": [
                                    {
                                        "id": "uuid-14",
                                        "parentId": "uuid-11",
                                        "name": "Weimann, Runolfsson and Hand",
                                        "cost": 7254,
                                        "children": []
                                    },
                                    {
                                        "id": "uuid-12",
                                        "parentId": "uuid-11",
                                        "name": "Swaniawski Inc",
                                        "cost": 2110,
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "uuid-10",
                                "parentId": "uuid-8",
                                "name": "Lockman Inc",
                                "cost": 4288,
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-3",
                        "parentId": "uuid-1",
                        "name": "Blanda, Langosh and Barton",
                        "cost": 15713,
                        "children": [
                            {
                                "id": "uuid-20",
                                "parentId": "uuid-3",
                                "name": "Kunde, Armstrong and Hermann",
                                "cost": 908,
                                "children": []
                            },
                            {
                                "id": "uuid-17",
                                "parentId": "uuid-3",
                                "name": "Rohan, Mayer and Haley",
                                "cost": 4072,
                                "children": []
                            },
                            {
                                "id": "uuid-9",
                                "parentId": "uuid-3",
                                "name": "Kuhic - Swift",
                                "cost": 3086,
                                "children": []
                            },
                            {
                                "id": "uuid-6",
                                "parentId": "uuid-3",
                                "name": "Vandervort - Bechtelar",
                                "cost": 2512,
                                "children": []
                            },
                            {
                                "id": "uuid-5",
                                "parentId": "uuid-3",
                                "name": "Hane - Windler",
                                "cost": 1288,
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-2",
                        "parentId": "uuid-1",
                        "name": "Stamm LLC",
                        "cost": 5199,
                        "children": [
                            {
                                "id": "uuid-19",
                                "parentId": "uuid-2",
                                "name": "Schneider - Adams",
                                "cost": 794,
                                "children": []
                            },
                            {
                                "id": "uuid-7",
                                "parentId": "uuid-2",
                                "name": "Zieme - Mills",
                                "cost": 1636,
                                "children": []
                            },
                            {
                                "id": "uuid-4",
                                "parentId": "uuid-2",
                                "name": "Price and Sons",
                                "cost": 1340,
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
```


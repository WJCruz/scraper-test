# scraper-test

## Requirements
- Node 18
- Git
- npm

## Getting started

### Install
You can run the code locally using npm.

```sh
git clone https://github.com/WJCruz/scraper-test.git
cd scraper-test
npm install
npm run dev
```

Curl

```
curl --location --request GET 'http://localhost:3000/recover-rut' \
--header 'Content-Type: application/json' \
--data '{
    "ruts": [
        "23089308-k",
        "18.744.313-K",
        "18328719-2",
        "8315947-2",
        "9887795-9",
        "17366425-7",
        "17276737-0",
        "18707310-3",
        "9912987-5",
        "7375637-5",
        "6956814-9",
        "20814609-2",
        "10479659-1",
        "24130031-5",
        "21420613-7",
        "8018558-8",
        "16391786-6",
        "22370008-k",
        "14046848-7",
        "16580160-1",
        "18636666-2",
        "10657002-7",
        "11288096-8",
        "21315422-2",
        "19160355-9",
        "14468210-6",
        "14723691-3",
        "8527923-8",
        "16465628-4",
        "19141088-2",
        "25710586-5",
        "23863170-K"
    ]
}'
```
Response
```
{
    "success": true,
    "data": {
        "arrayResponse": [
            {
                "rut": "23.089.308-k",
                "res": {
                    "code": 90,
                    "message": "Sus datos de contacto son incorrectos. Comuníquese con Registro Civil"
                }
            },
            {
                "rut": "18.744.313-K",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "18.328.719-2",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "8.315.947-2",
                "res": {
                    "status": "rejected",
                    "reason": {}
                }
            },
            {
                "rut": "9.887.795-9",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "17.366.425-7",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "17.276.737-0",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "18.707.310-3",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "9.912.987-5",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "7.375.637-5",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "6.956.814-9",
                "res": {
                    "code": 90,
                    "message": "Sus datos de contacto son incorrectos. Comuníquese con Registro Civil"
                }
            },
            {
                "rut": "20.814.609-2",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "10.479.659-1",
                "res": {
                    "status": "rejected",
                    "reason": {}
                }
            },
            {
                "rut": "24.130.031-5",
                "res": {
                    "code": 90,
                    "message": "Sus datos de contacto son incorrectos. Comuníquese con Registro Civil"
                }
            },
            {
                "rut": "21.420.613-7",
                "res": {
                    "code": 90,
                    "message": "Sus datos de contacto son incorrectos. Comuníquese con Registro Civil"
                }
            },
            {
                "rut": "8.018.558-8",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "16.391.786-6",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "22.370.008-k",
                "res": {
                    "code": 90,
                    "message": "Sus datos de contacto son incorrectos. Comuníquese con Registro Civil"
                }
            },
            {
                "rut": "14.046.848-7",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "16.580.160-1",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "18.636.666-2",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "10.657.002-7",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "11.288.096-8",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "21.315.422-2",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "19.160.355-9",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "14.468.210-6",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "14.723.691-3",
                "res": {
                    "code": 90,
                    "message": "Sus datos de contacto son incorrectos. Comuníquese con Registro Civil"
                }
            },
            {
                "rut": "8.527.923-8",
                "res": {
                    "code": 90,
                    "message": "Sus datos de contacto son incorrectos. Comuníquese con Registro Civil"
                }
            },
            {
                "rut": "16.465.628-4",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "19.141.088-2",
                "res": {
                    "code": 17,
                    "message": "Methods available"
                }
            },
            {
                "rut": "25.710.586-5",
                "res": {
                    "code": 90,
                    "message": "Sus datos de contacto son incorrectos. Comuníquese con Registro Civil"
                }
            },
            {
                "rut": "23.863.170-K",
                "res": {
                    "code": 90,
                    "message": "Sus datos de contacto son incorrectos. Comuníquese con Registro Civil"
                }
            }
        ],
        "rutsWithUniqueKeys": [
            "18.744.313-K",
            "18.328.719-2",
            "9.887.795-9",
            "17.366.425-7",
            "17.276.737-0",
            "18.707.310-3",
            "9.912.987-5",
            "7.375.637-5",
            "20.814.609-2",
            "8.018.558-8",
            "16.391.786-6",
            "14.046.848-7",
            "16.580.160-1",
            "18.636.666-2",
            "10.657.002-7",
            "11.288.096-8",
            "21.315.422-2",
            "19.160.355-9",
            "14.468.210-6",
            "16.465.628-4",
            "19.141.088-2"
        ],
        "rutsWithoutUniqueKeys": [
            "23.089.308-k",
            "8.315.947-2",
            "6.956.814-9",
            "10.479.659-1",
            "24.130.031-5",
            "21.420.613-7",
            "22.370.008-k",
            "14.723.691-3",
            "8.527.923-8",
            "25.710.586-5",
            "23.863.170-K"
        ]
    },
    "code": "OK"
}
```

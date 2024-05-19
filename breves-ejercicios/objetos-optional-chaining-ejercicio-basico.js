const OBJ = {
                            "name": "CUENTAS",
                            "data": {
                                "values": [
                                    {
                                        "nameValuePairs": {
                                            "number": "00740010001501040819",
                                            "label": "0001AH0819",
                                            "balance": 999728862.3,
                                            "type": "TARJETA NOMINA BASIC",
                                            "currency": "MXN",
                                            "availability": "Disponible"
                                        }
                                    },
                                    {
                                        "nameValuePairs": {
                                            "number": "00740680001500920603",
                                            "label": "0010AH5021",
                                            "balance": 1000222,
                                            "type": "TARJETA NOMINA BASIC",
                                            "currency": "MXN",
                                            "availability": "Disponible"
                                        }
                                    }
                                ]
                            },
                            "totalBalance": 1000729084.3
                        };

OBJ.data?.values.map(i => i?.nameValuePairs) || OBJ?.data;
OBJ?.namee;

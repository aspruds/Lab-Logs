import {LabVisit} from "./../models/lab-visits/lab-visit";
import {Patient} from "./../models/lab-visits/patient";
import {Laboratory} from "./../models/lab-visits/laboratory";
import {Doctor} from "./../models/lab-visits/doctor";
import {Material} from "./../models/lab-visits/material";
import {Technicians} from "./../models/lab-visits/technicians";
import {Test} from "./../models/lab-visits/test";
import {ReferenceInterval} from "../models/lab-visits/reference-interval";

export var LAB_VISITS: LabVisit[] = [
    {
        "id": 1,
        "patient": {
            "name": "Andris Sprūds",
            "sex": "male",
            "dateOfBirth": "1978-09-21",
            "personalId": "210978-12311"
        },
        "laboratory": {
            name: "E. Gulbja Laboratorija",
            address: "Zemitāna laukums 13, Rīga, LV 1006"
        },
        "doctor": {
            "name": "Dr. Kristīne Cīrule",
            "clinic": "Veselības centrs 4, Estētiskā dermatoloģijas klīnika"
        },
        "material": {
            "dateTested": "2013-10-10T15:31:00Z",
            "type": "blood"
        },
        "technicians": {
            "qualityControlledBy": "Viktorija Priedīte"
        },
        "testGroups": [
            {
                "name": "Alerģiju diagnostika: IgE Inhalācija",
                "hasLevels": true,
                "tests": [
                    {
                        "name": "CCD1, CCD2, CCD3 mix",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Derm.pteronyssinus",
                        "value": 0.16,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Derm.farinae",
                        "value": 0.51,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 1
                    },
                    {
                        "name": "Prusaks",
                        "value": 0.13,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Bērzs",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Alksnis",
                        "value": 0.16,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Lazda",
                        "value": 0.06,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Jaukta zāle",
                        "value": 3.99,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 3
                    },
                    {
                        "name": "Rudzu putekšņi",
                        "value": 0.6,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 1
                    },
                    {
                        "name": "Vērmele",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Kumelītes ziedi",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Bišu inde",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Lapseņu inde",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Latekss",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Penicillium notatum",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Cladosporium herbarum",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Aspergillus fumigatus",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Alternaria alternata",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Kaķis",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Zirgs",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Suns",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Jūrascūciņa",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Kāmis",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Trusis",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Pele",
                        "value": 0.06,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Žurka",
                        "value": 0.16,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Papagailis",
                        "value": 0.16,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Pienene",
                        "value": 0.29,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Acarus siro",
                        "value": 0.91,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 1
                    }
                ]
            },
            {
                "name": "Alerģiju diagnostika: IgE Pārtika",
                "hasLevels": true,
                "tests": [
                    {
                        "name": "CCD1, CCD2, CCD3 mix",
                        "value": 0.05,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Staphylokoki",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Zemesrieksti",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Kokosrieksti",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Menca",
                        "value": 2.46,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 2
                    },
                    {
                        "name": "Lasis",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Griķi",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Auzu milti",
                        "value": 0.1,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Kukurūza",
                        "value": 0.12,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Burkāni",
                        "value": 0.10,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Selerijas",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Āboli",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Apelsīni",
                        "value": 0.05,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Liellopa gaļa",
                        "value": 0.12,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Cūkgaļa",
                        "value": 0.15,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Vistas gaļa",
                        "value": 0.12,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Kartupeļi",
                        "value": 0.10,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Kviešu milti",
                        "value": 0.12,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Rudzu milti",
                        "value": 0.00,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Tomāti",
                        "value": 0.00,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Saldie pipari",
                        "value": 0.24,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Banāni",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Olas baltums",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Olas dzeltenums",
                        "value": 0.00,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Piens",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Alfa-laktalbumīns",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Beta-laktoglobulīns",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Kazeīns",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Sojas pupiņas",
                        "value": 0.1,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "patient": {
            "name": "Andris Sprūds",
            "sex": "male",
            "dateOfBirth": "1978-09-21",
            "personalId": "210978-12311"
        },
        "laboratory": {
            name: "E. Gulbja Laboratorija",
            address: "Zemitāna laukums 13, Rīga, LV 1006"
        },
        "doctor": {
            "name": "Elita Adijāne",
            "clinic": "Veselības centrs 4, SIA"
        },
        "material": {
            "dateTested": "2011-11-17T12:44:00Z",
            "type": "blood"
        },
        "testGroups": [
            {
                "name": "Alerģijas diagnostika: IgE Pārtika",
                "hasLevels": true,
                "tests": [
                    {
                        "name": "Pārtikas panelis",
                        "value": 4.50,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 3,
                        comments: "Olas baltums, piens, kvieši, menca, zemes rieksti, soja"
                    },
                    {
                        "name": "Tomāti",
                        "value": 0.56,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 1
                    },
                    {
                        "name": "Cūkas gaļa",
                        "value": 0.10,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Liellopu gaļa",
                        "value": 0.10,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Burkāni",
                        "value": 0.10,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    },
                    {
                        "name": "Kazeīns",
                        "value": 0.10,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        "level": 0
                    }
                ]
            },
            {
                "name": "Alerģijas diagnostika: IgE Inhalācija",
                "hasLevels": true,
                "tests": [
                    {
                        "name": "Inhalācijas alergēni",
                        "value": true,
                        "referenceValue": false,
                        "comments": "Mājas putekļu ērcīte , kaķa epitēlijs, suņa spalva, bermuda zāle, timotiņš, penicilīna pelējums, altenārijas pelējums, bērzs, japānas ciedrs ,anglijas platāna"
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "patient": {
            "name": "Andris Sprūds",
            "sex": "male",
            "dateOfBirth": "1978-09-21",
            "personalId": "210978-12311"
        },
        "laboratory": {
            name: "Medicīnas centrs \"Veselibas Centrs - 4\" Testēšanas laboratorija",
            address: "K.Barona 117, Rīga LV1012"
        },
        "doctor": {
            "name": "Inga Žīgure",
            "clinic": "Veselības centrs 4"
        },
        "material": {
            "dateTested": "2014-02-27T12:52:00Z",
            "type": "blood"
        },
        "technicians": {
            "testedBy": "Baltiņa Evija, Salmiņa Liāna",
            "collectedBy": "Liene Lorenca",
            "qualityControlledBy": "Vita Ščepetova"
        },
        "testGroups": [
            {
                "name": "Klīniskā ķīmija",
                "tests": [
                    {
                        "name": "ALAT",
                        "value": 20.3,
                        "units": "U/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 45
                        }
                    },
                    {
                        "name": "ASAT",
                        "value": 20.6,
                        "units": "U/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 35
                        }
                    },
                    {
                        "name": "Gamma-glutamil-transferāse - Kokrofta-Golta kalkulācija, svars 58 kg",
                        "value": 14.9,
                        "units": "U/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 55
                        }
                    },
                    {
                        "name": "Glikoze",
                        "value": 5.22,
                        "units": "mmol/L",
                        "referenceInterval": {
                            "minValue": 4.10,
                            "maxValue": 5.90
                        }
                    },
                    {
                        "name": "Kopējais olbaltums",
                        "value": 77.8,
                        "units": "g/L",
                        "referenceInterval": {
                            "minValue": 64.00,
                            "maxValue": 83.00
                        }
                    },
                    {
                        "name": "Kopējais holesterīns",
                        "value": 5.73,
                        "units": "mmol/L",
                        "referenceInterval": {
                            "minValue": 0.50,
                            "maxValue": 5.60
                        }
                    },
                    {
                        "name": "ABL-holesterīns",
                        "value": 1.54,
                        "units": "mmol/L",
                        "referenceInterval": {
                            "minValue": 0.90,
                            "maxValue": 1.54
                        }
                    },
                    {
                        "name": "ZBL-holesterīns",
                        "value": 3.86,
                        "units": "mmol/L",
                        "referenceInterval": {
                            "minValue": 0.00,
                            "maxValue": 3.37
                        },
                        comments: "Riska robeža: 3.37-4.12 mmol/L, augsta riska robeža >=4.13 mmol/L"
                    },
                    {
                        "name": "Triglicerīdi",
                        "value": 0.72,
                        "units": "mmol/L",
                        "referenceInterval": {
                            "minValue": 0.00,
                            "maxValue": 1.70
                        }
                    },
                    {
                        "name": "Bilirubīns",
                        "value": 15.56,
                        "units": "mkmol/L",
                        "referenceInterval": {
                            "minValue": 5.00,
                            "maxValue": 21.00
                        }
                    },
                    {
                        "name": "Alfa amilāze",
                        "value": 74.34,
                        "units": "U/L",
                        "referenceInterval": {
                            "minValue": 22,
                            "maxValue": 80
                        }
                    },
                    {
                        "name": "Ferritīns",
                        "value": 105.9,
                        "units": "ng/mL",
                        "referenceInterval": {
                            "minValue": 20,
                            "maxValue": 300
                        }
                    },
                    {
                        "name": "SED",
                        "value": false,
                        "referenceValue": false
                    },
                    {
                        "name": "TSH",
                        "value": 1.25,
                        "units": "uIU/mL",
                        "referenceInterval": {
                            "minValue": 0.3,
                            "maxValue": 4
                        }
                    },
                    {
                        "name": "Hepatīta BsAg",
                        "value": false,
                        "referenceValue": false
                    },
                    {
                        "name": "Anti-HCV (Hepatīts C)",
                        "value": false,
                        "referenceValue": false
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "patient": {
            "name": "Andris Sprūds",
            "sex": "male",
            "dateOfBirth": "1978-09-21",
            "personalId": "210978-12311"
        },
        "laboratory": {
            name: "E. Gulbja Laboratorija",
            address: "Zemitāna laukums 13, Rīga, LV 1006"
        },
        "doctor": {
            "name": "Dr. Kristīne Cīrule",
            "clinic": "Veselības centrs 4, Estētiskā dermatoloģijas klīnika"
        },
        "material": {
            "dateTested": "2013-10-10T15:11:00Z",
            "type": "blood"
        },
        "technicians": {
            "qualityControlledBy": "Dr. Inga Plūme"
        },
        "testGroups": [
            {
                "name": "Hematoloģija",
                "tests": [
                    {
                        "name": "Eritrocīti",
                        "value": 5.30,
                        "units": "10x12/L",
                        "referenceInterval": {
                            "minValue": 4.5,
                            "maxValue": 5.9
                        }
                    },
                    {
                        "name": "Hemoglobīns",
                        "value": 157,
                        "units": "g/L",
                        "referenceInterval": {
                            "minValue": 132,
                            "maxValue": 175
                        }
                    },
                    {
                        "name": "Hematokrīts",
                        "value": 47,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 40,
                            "maxValue": 51
                        }
                    },
                    {
                        "name": "MCV- vid. Er tilpums",
                        "value": 88,
                        "units": "fL",
                        "referenceInterval": {
                            "minValue": 80,
                            "maxValue": 100
                        }
                    },
                    {
                        "name": "MCH-vidējā Hb konc.",
                        "value": 340,
                        "units": "g/L",
                        "referenceInterval": {
                            "minValue": 315,
                            "maxValue": 360
                        }
                    },
                    {
                        "name": "RDW -Er. sadalījums",
                        "value": 15.0,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 11.5,
                            "maxValue": 15.5
                        }
                    },
                    {
                        "name": "Trombocīti",
                        "value": 244,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 150,
                            "maxValue": 410
                        }
                    },
                    {
                        "name": "Leikocīti",
                        "value": 8.4,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 4.0,
                            "maxValue": 9.8
                        }
                    },
                    {
                        "name": "EGĀ (kapilārās fotometrijas metode)",
                        "value": 4,
                        "units": "mm/h",
                        "referenceInterval": {
                            "minValue": 1,
                            "maxValue": 15
                        }
                    }
                ]
            },
            {
				"name": "Leikocītu diferencēts skaits",
				"tests": [
                    {
                        "name": "Neitrofīlie %",
                        "value": 64.9,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 48,
                            "maxValue": 72
                        }
                    },
                    {
                        "name": "Neitrofīlie abs.",
                        "value": 5.44,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 1.92,
                            "maxValue": 8.00
                        }
                    },
                    {
                        "name": "Eozinofīlie %",
                        "value": 1.4,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 0.3,
                            "maxValue": 5.4
                        }
                    },
                    {
                        "name": "Eozinofīlie abs.",
                        "value": 0.12,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 0.02,
                            "maxValue": 0.53
                        }
                    },
                    {
                        "name": "Bazofīlie %",
                        "value": 0.7,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 2.0
                        }
                    },
                    {
                        "name": "Bazofīlie abs.",
                        "value": 0.06,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 0.00,
                            "maxValue": 0.20
                        }
                    },
                    {
                        "name": "Limfocīti %",
                        "value": 24.7,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 18.0,
                            "maxValue": 42.0
                        }
                    },
                    {
                        "name": "Limfocīti abs.",
                        "value": 2.07,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 0.72,
                            "maxValue": 4.00
                        }
                    },
                    {
                        "name": "Monocīti %",
                        "value": 8.3,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 2.0,
                            "maxValue": 11.0
                        }
                    },
                    {
                        "name": "Monocīti abs.",
                        "value": 0.70,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 0.08,
                            "maxValue": 1.21
                        }
                    },
				]
            },
            {
                "name": "Klīniskā ķīmija",
                "tests": [
                    {
                        "name": "Bilirubīns-kopējais",
                        "value": 9.9,
                        "units": "μmol/L",
                        "referenceInterval": {
                            "minValue": 1.1,
                            "maxValue": 19.0
                        }
                    },
                    {
                        "name": "ALAT",
                        "value": 27,
                        "units": "U/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 37
                        }
                    },
                    {
                        "name": "ASAT",
                        "value": 28,
                        "units": "U/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 41
                        }
                    },
                    {
                        "name": "25-OH-Vit.D Kopējais (D3+D2)",
                        "value": 27.56,
                        "units": "ng/mL",
                        "referenceInterval": {
                            "minValue": 30,
                            "maxValue": 100
                        }
                    }
                ]
            },
            {
                "name": "Celiakijas diagnostika",
                "tests": [
                    {
                        "name": "Gliadīna IgA",
                        "value": 3.6,
                        "units": "U/mL",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 12
                        }
                    },
                    {
                        "name": "Gliadīna IgG",
                        "value": 3.2,
                        "units": "U/mL",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 12
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "patient": {
            "name": "Andris Sprūds",
            "sex": "male",
            "dateOfBirth": "1978-09-21",
            "personalId": "210978-12311"
        },
        "laboratory": {
            name: "Medicīnas centrs \"Veselibas Centrs - 4\" Testēšanas laboratorija",
            address: "K.Barona 117, Rīga LV1012"
        },
        "doctor": {
            "name": "Elita Adijāne",
            "clinic": "Veselības centrs 4, Estētiskā dermatoloģijas klīnika"
        },
        "material": {
            "dateTested": "2006-11-17T10:27:00Z",
            "type": "blood"
        },
        "technicians": {
            "qualityControlledBy": "Maira Sapata"
        },
        "testGroups": [
            {
                "name": "Alerģijas diagnostika",
                "tests": [
                    {
                        "name": "Eozinofīlais katjonu proteīns (ECP)",
                        "value": 57.10,
                        "units": "ng/mL",
                        "referenceInterval": {
                            "minValue": 0.1,
                            "maxValue": 24
                        }
                    },
                    {
                        "name": "Total IgE",
                        "value": 47.8,
                        "units": "IU/mL",
                        "referenceInterval": {
                            "minValue": 10,
                            "maxValue": 120
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "patient": {
            "name": "Andris Sprūds",
            "sex": "male",
            "dateOfBirth": "1978-09-21",
            "personalId": "210978-12311"
        },
        "laboratory": {
            name: "E. Gulbja Laboratorija",
            address: "Zemitāna laukums 13, Rīga, LV 1006"
        },
        "doctor": {
            "name": "Dr. Inga Žīgure",
            "clinic": "Veselības centrs 4"
        },
        "material": {
            "dateTested": "2013-04-03T10:49:00Z",
            "type": "blood"
        },
        "technicians": {
            "qualityControlledBy": "Sandra Šelkova"
        },
        "testGroups": [
            {
                "name": "Hematoloģija",
                "tests": [
                    {
                        "name": "Eritrocīti",
                        "value": 5.22,
                        "referenceInterval": {
                            "minValue": 4.5,
                            "maxValue": 5.9
                        },
                        "units": "10x12/L"
                    },
                    {
                        "name": "Hemoglobīns",
                        "value": 156,
                        "referenceInterval": {
                            "minValue": 132,
                            "maxValue": 175
                        },
                        "units": "g/L"
                    },
                    {
                        "name": "Hematokrīts",
                        "value": 48,
                        "referenceInterval": {
                            "minValue": 40,
                            "maxValue": 51
                        },
                        "units": "%"
                    },
                    {
                        "name": "MCV- vid. Er tilpums",
                        "value": 92,
                        "referenceInterval": {
                            "minValue": 80,
                            "maxValue": 100
                        },
                        "units": "fL"
                    },
                    {
                        "name": "MCHC-vid. Hb konc. Er",
                        "value": 320,
                        "referenceInterval": {
                            "minValue": 315,
                            "maxValue": 360
                        },
                        "units": "pg"
                    },
                    {
                        "name": "MCH-vidējā Hb konc.",
                        "value": 30,
                        "referenceInterval": {
                            "minValue": 27,
                            "maxValue": 33
                        },
                        "units": "g/L"
                    },
                    {
                        "name": "RDW -Er. sadalījums",
                        "value": 14,
                        "referenceInterval": {
                            "minValue": 11.5,
                            "maxValue": 15.5
                        },
                        "units": "%"
                    },
                    {
                        "name": "Trombocīti",
                        "value": 232,
                        "referenceInterval": {
                            "minValue": 150,
                            "maxValue": 410
                        },
                        "units": "10x9/L"
                    },
                    {
                        "name": "Leikocīti",
                        "value": 7.40,
                        "referenceInterval": {
                            "minValue": 4,
                            "maxValue": 9.8
                        },
                        "units": "10x9/L"
                    }
                ]
            },
            {
                "name": "Leikocītu diferencēts skaits",
                "tests": [
                    {
                        "name": "Neitrofīlie %",
                        "value": 49.3,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 48,
                            "maxValue": 72
                        }
                    },
                    {
                        "name": "Neitrofīlie abs.",
                        "value": 3.66,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 1.92,
                            "maxValue": 8.00
                        }
                    },
                    {
                        "name": "Eozinofīlie %",
                        "value": 2.2,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 0.3,
                            "maxValue": 5.4
                        }
                    },
                    {
                        "name": "Eozinofīlie abs.",
                        "value": 0.16,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 0.02,
                            "maxValue": 0.53
                        }
                    },
                    {
                        "name": "Bazofīlie %",
                        "value": 0.9,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 2.0
                        }
                    },
                    {
                        "name": "Bazofīlie abs.",
                        "value": 0.07,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 0.00,
                            "maxValue": 0.20
                        }
                    },
                    {
                        "name": "Limfocīti %",
                        "value": 37.9,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 18.0,
                            "maxValue": 42.0
                        }
                    },
                    {
                        "name": "Limfocīti abs.",
                        "value": 2.81,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 0.72,
                            "maxValue": 4.00
                        }
                    },
                    {
                        "name": "Monocīti %",
                        "value": 9.7,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 2.0,
                            "maxValue": 11.0
                        }
                    },
                    {
                        "name": "Monocīti abs.",
                        "value": 0.72,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 0.08,
                            "maxValue": 1.21
                        }
                    },
                    {
                        "name": "EGĀ (Kapilārās fotometrijas metode)",
                        "value": 2,
                        "units": "mm/h",
                        "referenceInterval": {
                            "minValue": 1,
                            "maxValue": 15
                        }
                    }
                ]
            },
            {
                "name": "Klīniskā ķīmija",
                "tests": [
                    {
                        "name": "Kreatinīns",
                        "value": 62,
                        "referenceInterval": {
                            "minValue": 30,
                            "maxValue": 106
                        },
                        "units": "μmol/L"
                    },
                    {
                        "name": "Glomerulu filtrācijas ātrums",
                        "value": 140,
                        "referenceInterval": {
                            "minValue": 90,
                            "maxValue": 999
                        },
                        "units": "ml/min/1.73"
                    },
                    {
                        "name": "Glikoze plazmā",
                        "value": 5.50,
                        "referenceInterval": {
                            "minValue": 3.30,
                            "maxValue": 5.89
                        },
                        "units": "mmol/L"
                    },
                    {
                        "name": "Bilirubīns-kopējais",
                        "value": 16.8,
                        "referenceInterval": {
                            "minValue": 1.1,
                            "maxValue": 19
                        },
                        "units": "mmol/L"
                    },
                    {
                        "name": "ALAT",
                        "value": 31,
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 37
                        },
                        "units": "U/L"
                    },
                    {
                        "name": "ASAT",
                        "value": 33,
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 41
                        },
                        "units": "U/L"
                    },
                    {
                        "name": "Kopējais holesterīns",
                        "value": 6.14,
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 5
                        },
                        "units": "mmol/L"
                    },
                    {
                        "name": "Augsta blīvuma holesterīns",
                        "value": 1.67,
                        "referenceInterval": {
                            "minValue": 1.10,
                            "maxValue": 999
                        },
                        "units": "mmol/L"
                    },
                    {
                        "name": "Zema blīvuma holesterīns",
                        "value": 4.05,
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 3
                        },
                        "units": "mmol/L"
                    },
                    {
                        "name": "Triglicerīdi",
                        "value": 0.58,
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 2
                        },
                        "units": "mmol/L"
                    }
                ]
            },
            {
                "name": "Hormoni",
                "tests": [
                    {
                        "name": "TSH - Tireotropais hormons",
                        "value": 1.1,
                        "referenceInterval": {
                            "minValue": 0.4,
                            "maxValue": 4
                        },
                        "units": "mU/L"
                    }
                ]
            },
            {
                "name": "Iekaisuma marķieri, autoantivielas",
                "tests": [
                    {
                        "name": "CRO",
                        "value": 0.8,
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 8.0
                        },
                        "units": "mg/L"
                    }
                ]
            }
        ]
    },
    {
        "id": 7,
        "patient": {
            "name": "Andris Sprūds",
            "sex": "male",
            "dateOfBirth": "1978-09-21",
            "personalId": "210978-12311"
        },
        "laboratory": {
            name: "Medicīnas centrs \"Veselibas Centrs - 4\" Testēšanas laboratorija",
            address: "K.Barona 117, Rīga LV1012"
        },
        "doctor": {
            "name": "Dr. Inga Žīgure",
            "clinic": "Veselības centrs 4"
        },
        "material": {
            "dateTested": "2014-08-20T11:26:00Z",
            "type": "blood"
        },
        "technicians": {
            "collectedBy": "Santa Ādamsone",
            "testedBy": "Liāna Salmiņa",
            "qualityControlledBy": "Vita Ščepetova"
        },
        "testGroups": [
            {
                "name": "Klīniskā ķīmija",
                "tests": [
                    {
                        "name": "Kopējais holesterīns",
                        "value": 5.82,
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 5
                        },
                        "units": "mmol/L"
                    },
                    {
                        "name": "ABL holesterīns",
                        "value": 1.71,
                        "referenceInterval": {
                            "minValue": 1.2,
                            "maxValue": 999
                        },
                        "units": "mmol/L"
                    },
                    {
                        "name": "ZBL holesterīns",
                        "value": 3.26,
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 3
                        },
                        "units": "mmol/L"
                    },
                    {
                        "name": "Ne-ABL holesterīns",
                        "value": 4.11,
                        "units": "mmol/L"
                    }
                ]
            },
            {
                "name": "Asinsgrupa",
                "tests": [
                    {
                        "name": "Asins grupa",
                        "value": "A, rēzus faktors +"
                    }
                ]
            }
        ]
    },
    {
        "id": 8,
        "patient": {
            "name": "Andris Sprūds",
            "sex": "male",
            "dateOfBirth": "1978-09-21",
            "personalId": "210978-12311"
        },
        "laboratory": {
            name: "E. Gulbja Laboratorija",
            address: "Zemitāna laukums 13, Rīga, LV 1006"
        },
        "doctor": {
            "name": "Dr. Inga Žīgure",
            "clinic": "Veselības centrs 4"
        },
        "material": {
            "dateTested": "2014-09-17T11:26:00Z",
            "type": "blood"
        },
        "technicians": {
            "collectedBy": "Santa Ādamsone",
            "testedBy": "Liāna Salmiņa",
            "qualityControlledBy": "Dace Jupatova"
        },
        "testGroups": [
            {
                "name": "Hematoloģija",
                "tests": [
                    {
                        "name": "Eritrocīti",
                        "value": 5.93,
                        "units": "10x12/L",
                        "referenceInterval": {
                            "minValue": 4.5,
                            "maxValue": 5.9
                        }
                    },
                    {
                        "name": "Hemoglobīns",
                        "value": 172,
                        "units": "g/L",
                        "referenceInterval": {
                            "minValue": 132,
                            "maxValue": 175
                        }
                    },
                    {
                        "name": "Hematokrīts",
                        "value": 52,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 40,
                            "maxValue": 51
                        }
                    },
                    {
                        "name": "MCV- vid. Er tilpums",
                        "value": 87,
                        "units": "fL",
                        "referenceInterval": {
                            "minValue": 80,
                            "maxValue": 100
                        }
                    },
                    {
                        "name": "MCH-vidējā Hb konc.",
                        "value": 29,
                        "units": "pg",
                        "referenceInterval": {
                            "minValue": 27,
                            "maxValue": 33
                        }
                    },
                    {
                        "name": "MCH-vidējā Hb konc. Er",
                        "value": 333,
                        "units": "g/L",
                        "referenceInterval": {
                            "minValue": 315,
                            "maxValue": 360
                        }
                    },
                    {
                        "name": "RDW -Er. sadalījums",
                        "value": 14.2,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 11.5,
                            "maxValue": 15.5
                        }
                    },
                    {
                        "name": "Trombocīti",
                        "value": 240,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 150,
                            "maxValue": 410
                        }
                    },
                    {
                        "name": "Leikocīti",
                        "value": 6.57,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 4.0,
                            "maxValue": 9.8
                        }
                    },
                    {
                        "name": "EGĀ (kapilārās fotometrijas metode)",
                        "value": 2,
                        "units": "mm/h",
                        "referenceInterval": {
                            "minValue": 1,
                            "maxValue": 15
                        }
                    }
                ]
            },
            {
                "name": "Leikocītu diferencēts skaits",
                "tests": [
                    {
                        "name": "Neitrofīlie %",
                        "value": 45.6,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 48,
                            "maxValue": 72
                        }
                    },
                    {
                        "name": "Neitrofīlie abs.",
                        "value": 3,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 1.92,
                            "maxValue": 8.00
                        }
                    },
                    {
                        "name": "Eozinofīlie %",
                        "value": 1.4,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 0.3,
                            "maxValue": 5.4
                        }
                    },
                    {
                        "name": "Eozinofīlie abs.",
                        "value": 0.09,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 0.02,
                            "maxValue": 0.53
                        }
                    },
                    {
                        "name": "Bazofīlie %",
                        "value": 0.8,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 2.0
                        }
                    },
                    {
                        "name": "Bazofīlie abs.",
                        "value": 0.05,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 0.00,
                            "maxValue": 0.20
                        }
                    },
                    {
                        "name": "Limfocīti %",
                        "value": 43.5,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 18.0,
                            "maxValue": 42.0
                        }
                    },
                    {
                        "name": "Limfocīti abs.",
                        "value": 2.86,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 0.72,
                            "maxValue": 4.00
                        }
                    },
                    {
                        "name": "Monocīti %",
                        "value": 8.7,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 2.0,
                            "maxValue": 11.0
                        }
                    },
                    {
                        "name": "Monocīti abs.",
                        "value": 0.57,
                        "units": "10x9/L",
                        "referenceInterval": {
                            "minValue": 0.08,
                            "maxValue": 1.21
                        }
                    },
                    {
                        "name": "EGĀ (Kapilārās fotometrijas metode)",
                        "value": 2,
                        "units": "mm/h",
                        "referenceInterval": {
                            "minValue": 1,
                            "maxValue": 15
                        }
                    }
                ]
            },
            {
                "name": "Klīniskā ķīmija",
                "tests": [
                    {
                        "name": "Urea",
                        "value": 4,
                        "referenceInterval": {
                            "minValue": 1.7,
                            "maxValue": 8.3
                        },
                        "units": "mmol/L"
                    },
                    {
                        "name": "Imūnglobulīns A",
                        "value": 409,
                        "referenceInterval": {
                            "minValue": 40,
                            "maxValue": 400
                        },
                        "units": "mg/dL"
                    },
                    {
                        "name": "Imūnglobulīns G",
                        "value": 1134,
                        "referenceInterval": {
                            "minValue": 800,
                            "maxValue": 1800
                        },
                        "units": "mg/dL"
                    },
                    {
                        "name": "Imūnglobulīns M",
                        "value": 116,
                        "referenceInterval": {
                            "minValue": 40,
                            "maxValue": 230
                        },
                        "units": "mg/dL"
                    },
                    {
                        "name": "ALAT",
                        "value": 30,
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 37
                        },
                        "units": "U/L"
                    },
                    {
                        "name": "ASAT",
                        "value": 28,
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 41
                        },
                        "units": "U/L"
                    }
                ]
            },
            {
                "name": "Iekaisuma marķieri, autoantivielas",
                "tests": [
                    {
                        "name": "CRO",
                        "value": 0.5,
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 8
                        },
                        "units": "mg/L"
                    }
                ]
            },
            {
                "name": "Celiakijas diagnostika",
                "tests": [
                    {
                        "name": "Transglutamināzes IgA",
                        "value": 1.2,
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 10
                        },
                        "units": "mg/L"
                    },
                    {
                        "name": "Transglutamināzes IgG",
                        "value": 1.4,
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 10
                        },
                        "units": "mg/L"
                    },
                    {
                        "name": "DGP IgA",
                        "value": 2.7,
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 10
                        },
                        "units": "mg/L"
                    },
                    {
                        "name": "DGP IgG",
                        "value": 2.4,
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 10
                        },
                        "units": "mg/L"
                    }
                ]
            }
        ]
    }
];
import {LabVisit} from "./../models/lab-visits/lab-visit";
import {Patient} from "./../models/lab-visits/patient";
import {Sender} from "./../models/lab-visits/sender";
import {Laboratory} from "./../models/lab-visits/laboratory";
import {Doctor} from "./../models/lab-visits/doctor";
import {Material} from "./../models/lab-visits/material";
import {Technicians} from "./../models/lab-visits/technicians";
import {Test} from "./../models/lab-visits/test";
import {ReferenceInterval} from "../models/lab-visits/reference-interval";

export var LAB_VISITS: LabVisit[] = [
    {
        "patient": {
            "name": "Andris Sprūds",
            "sex": "male",
            "dateOfBirth": "1978-09-21",
            "personalId": "210978-12311"
        },
        "sender": {
            "name": "Veselības centrs 4, Estētiskā dermatoloģijas klīnika"
        },
        "laboratory": {
            name: "E. Gulbja Laboratorija",
            address: "Zemitāna laukums 13, Rīga, LV 1006"
        },
        "doctor": {
            "name": "Dr. Kristīne Cīrule"
        },
        "material": {
            "dateTested": "2013-10-10T15:31:00Z",
            "type": "blood"
        },
        "technicians": {
            "qualityControlledBy": "Viktorija Priedīte"
        },
        "tests": [
            {
                "name": "Alerģiju diagnostika: IgE Inhalācija 30",
                "tests": [
                    {
                        "name": "CCD1, CCD2, CCD3 mix",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Derm.pteronyssinus",
                        "value": 0.16,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Derm.farinae",
                        "value": 0.51,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Prusaks 0.13",
                        "value": 0.13,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Bērzs",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Alksnis",
                        "value": 0.16,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Lazda",
                        "value": 0.06,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Jaukta zāle",
                        "value": 3.99,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Rudzu putekšņi",
                        "value": 0.6,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Vērmele",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Kumelītes ziedi",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Bišu inde",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Lapseņu inde",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Latekss",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Penicillium notatum",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Cladosporium herbarum",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Aspergillus fumigatus",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Alternaria alternata",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Kaķis",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Zirgs",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Suns",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Jūrascūciņa",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Kāmis",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Trusis",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Pele",
                        "value": 0.06,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Žurka",
                        "value": 0.16,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Papagailis",
                        "value": 0.16,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Pienene",
                        "value": 0.29,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Acarus siro",
                        "value": 0.91,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    }
                ]
            },
            {
                "name": "Alerģiju diagnostika: IgE Pārtika 30",
                "tests": [
                    {
                        "name": "CCD1, CCD2, CCD3 mix",
                        "value": 0.05,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Staphylokoki",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Zemesrieksti",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Kokosrieksti",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Menca",
                        "value": 2.46,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Lasis",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Griķi",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Auzu milti",
                        "value": 0.1,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Kukurūza",
                        "value": 0.12,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Burkāni",
                        "value": 0.10,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Selerijas",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Āboli",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Apelsīni",
                        "value": 0.05,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Liellopa gaļa",
                        "value": 0.12,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Cūkgaļa",
                        "value": 0.15,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Vistas gaļa",
                        "value": 0.12,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Kartupeļi",
                        "value": 0.10,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Kviešu milti",
                        "value": 0.12,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Rudzu milti",
                        "value": 0.00,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Tomāti",
                        "value": 0.00,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Saldie pipari",
                        "value": 0.24,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Banāni",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Olas baltums",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Olas dzeltenums",
                        "value": 0.00,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Piens",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Alfa-laktalbumīns",
                        "value": 0.02,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Beta-laktoglobulīns",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Kazeīns",
                        "value": 0,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Sojas pupiņas",
                        "value": 0.1,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    }
                ]
            }
        ]
    },
    {
        "patient": {
            "name": "Andris Sprūds",
            "sex": "male",
            "dateOfBirth": "1978-09-21",
            "personalId": "210978-12311"
        },
        "sender": {
            "name": "Veselības centrs 4, SIA"
        },
        "laboratory": {
            name: "E. Gulbja Laboratorija",
            address: "Zemitāna laukums 13, Rīga, LV 1006"
        },
        "doctor": {
            "name": "Elita Adijāne"
        },
        "material": {
            "dateTested": "2011-11-17T12:44:00Z",
            "type": "blood"
        },
        tests: [
            {
                "name": "Alerģijas diagnostika",
                "tests": [
                    {
                        "name": "Pārtikas panelis",
                        "value": 4.50,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        },
                        comments: "Olas baltums, piens, kvieši, menca, zemes rieksti, soja"
                    },
                    {
                        "name": "Tomāti",
                        "value": 0.56,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Cūkas gaļa",
                        "value": 0.10,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Liellopu gaļa",
                        "value": 0.10,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Burkāni",
                        "value": 0.10,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
                    {
                        "name": "Kazeīns",
                        "value": 0.10,
                        "units": "kU/L",
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 0.35
                        }
                    },
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
        "patient": {
            "name": "Andris Sprūds",
            "sex": "male",
            "dateOfBirth": "1978-09-21",
            "personalId": "210978-12311"
        },
        "sender": {
            "name": "Veselības centrs 4, Estētiskā dermatoloģijas klīnika"
        },
        "laboratory": {
            name: "Medicīnas centrs \"Veselibas Centrs - 4\" Testēšanas laboratorija",
            address: "K.Barona 117, Rīga LV1012"
        },
        "doctor": {
            "name": "Inga Žīgure"
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
        tests: [
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
        "patient": {
            "name": "Andris Sprūds",
            "sex": "male",
            "dateOfBirth": "1978-09-21",
            "personalId": "210978-12311"
        },
        "sender": {
            "name": "Veselības centrs 4, Estētiskā dermatoloģijas klīnika"
        },
        "laboratory": {
            name: "E. Gulbja Laboratorija",
            address: "Zemitāna laukums 13, Rīga, LV 1006"
        },
        "doctor": {
            "name": "Dr. Kristīne Cīrule"
        },
        "material": {
            "dateTested": "2013-10-10T15:11:00Z",
            "type": "blood"
        },
        "technicians": {
            "qualityControlledBy": "Dr. Inga Plūme"
        },
        "tests": [
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
                        "value": 0.12,
                        "units": "%",
                        "referenceInterval": {
                            "minValue": 0.7,
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
    }
];
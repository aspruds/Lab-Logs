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
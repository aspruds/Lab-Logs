import {LabResults} from "../models/lab-results/lab-results";
import {TestGroup} from "../models/lab-results/test-group";
import {TestWithHistory} from "../models/lab-results/test-with-history";
import {Test} from "../models/lab-results/test";
import {ReferenceInterval} from "../models/lab-visits/reference-interval";
import {LAB_VISITS} from "./mock-lab-visits"

let firstLabVisits = LAB_VISITS[0];

export var LAB_RESULTS:LabResults = {
    "testGroups": firstLabVisits.tests.map(function(group) {
        let date = firstLabVisits.material.dateTested;

        return {
            "name": group.name,
            "tests": group.tests.map(function(test) {
                let testWithDate: any = test;
                testWithDate.date = date;
                return {
                    "lastValue": testWithDate,
                    "historicalValues": []
                }
            })
        }
    })
};

export var LAB_RESULTS_EXPECTED:LabResults = {
    "testGroups": [
        {
            "name": "Hematoloģija",
            "tests": [
                {
                    "lastValue": {
                        "name": "Eritrocīti",
                        "date": "2011. gada 10. novembris",
                        "value": 5.30,
                        "referenceInterval": {
                            "minValue": 4.5,
                            "maxValue": 5.9
                        },
                        "units": "10x12/L"
                    },
                    "historicalValues": []
                },
                {
                    "lastValue": {
                        "name": "Hemoglobīns",
                        "date": "2011. gada 10. novembris",
                        "value": 157,
                        "referenceInterval": {
                            "minValue": 132,
                            "maxValue": 175
                        },
                        "units": "g/L"
                    },
                    "historicalValues": []
                }
            ]
        },
        {
            "name": "Klīniskā ķīmija",
            "tests": [
                {
                    "lastValue": {
                        "name": "Bilirubīns-kopējais",
                        "date": "2011. gada 10. novembris",
                        "value": 9.9,
                        "referenceInterval": {
                            "minValue": 1.1,
                            "maxValue": 19.0
                        },
                        "units": "μmol/L"
                    },
                    "historicalValues": []
                },
                {
                    "lastValue": {
                        "name": "ASAT",
                        "date": "2011. gada 10. novembris",
                        "value": 27,
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 37
                        },
                        "units": "U/L"
                    },
                    "historicalValues": []
                },
                {
                    "lastValue": {
                        "name": "ALAT",
                        "date": "2011. gada 10. novembris",
                        "value": 28,
                        "referenceInterval": {
                            "minValue": 0,
                            "maxValue": 41
                        },
                        "units": "U/L"
                    },
                    "historicalValues": []
                }
            ]
        }
    ]
};
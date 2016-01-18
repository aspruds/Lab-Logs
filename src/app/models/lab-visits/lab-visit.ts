import {Patient} from "./patient";
import {Laboratory} from "./laboratory";
import {Doctor} from "./doctor";
import {Material} from "./material";
import {Technicians} from "./technicians";
import {Test} from "./test";
import {TestGroup} from "./test-group";

export interface LabVisit {
    id: number;
    patient: Patient;
    laboratory: Laboratory;
    doctor: Doctor;
    material: Material;
    technicians?: Technicians;
    testGroups: TestGroup[];
}
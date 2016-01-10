import {Patient} from "./patient";
import {Sender} from "./sender";
import {Laboratory} from "./laboratory";
import {Doctor} from "./doctor";
import {Material} from "./material";
import {Technicians} from "./technicians";
import {Test} from "./test";
import {TestGroup} from "./test-group";

export interface LabVisit {
    patient: Patient;
    sender: Sender;
    laboratory: Laboratory;
    doctor: Doctor;
    material: Material;
    technicians?: Technicians;
    tests: TestGroup[];
}
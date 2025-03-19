import { PatientService } from './patient.service';
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    findAll(): Promise<any[]>;
    create(body: any): Promise<any>;
    getTimes(): Promise<{
        time: string;
        isBusy: boolean;
    }[]>;
}

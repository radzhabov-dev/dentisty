import { Model } from 'mongoose';
export declare class PatientService {
    private readonly patientModel;
    constructor(patientModel: Model<any>);
    create(body: any): Promise<any>;
    findAll(): Promise<any[]>;
    getTimes(): Promise<{
        time: string;
        isBusy: boolean;
    }[]>;
}

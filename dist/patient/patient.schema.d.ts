import { Schema } from 'mongoose';
export declare const PatientSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    fullName: string;
    date: NativeDate;
    service: string;
    time: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    fullName: string;
    date: NativeDate;
    service: string;
    time: string;
}>> & import("mongoose").FlatRecord<{
    fullName: string;
    date: NativeDate;
    service: string;
    time: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

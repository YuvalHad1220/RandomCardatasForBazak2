import mongoose, { Schema } from "mongoose";
import { Makat } from "../magadTree/Makat";
import { Gdod } from "../unitTree/Gdod";
import { SystemToMakat } from "../Systems/SystemsToMakats";

export interface Cardata {
    _id: mongoose.Types.ObjectId;
    carnumber: string;
    gdod?: string;
    makat: string;
    stand: "הכן" | "סדיר" | "החי";
    updatedBy?: string;
    createdAt: Date;
    updatedAt: Date;
    expected_repair?: string;
    status: "פעיל" | "מושבת";
    tipuls?: any[];
    systems?: {
        systemType: mongoose.Types.ObjectId;
        kashir: boolean;
    }[];
}

// Define the schema
const cardataSchema = new Schema<Cardata>({
    carnumber: { type: String, required: true },
    gdod: { type: String },
    makat: { type: String, required: true },
    stand: { type: String, required: true },
    updatedBy: { type: String },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    expected_repair: { type: String },
    status: { type: String, enum: ["פעיל", "מושבת"], required: true },
    tipuls: { type: Array },
    systems: {
        type: [
            {
                systemType: { type: mongoose.Types.ObjectId, required: true },
                kashir: { type: Boolean, required: true },
            },
        ],
    },
});



// Function to generate random dates within the specified range
const getRandomDateInRange = (start: Date, end: Date): Date => {
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randomTime);
};

// Function to generate random 8-digit car number
const generateRandomCarNumber = (): string => {
    const randomNumber = Math.floor(Math.random() * 90011100); // Generate a random number up to 8 digits
    return randomNumber.toString().padStart(8, "0");
};

const getRandomElement = <T>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
};

export const generateRandomCardatas = (count: number, makats: Makat[], gdods: Gdod[], systemsToMakats: SystemToMakat[]): Cardata[] => {
    const cardataList: Cardata[] = [];
    const statusOptions: Cardata["status"][] = ["פעיל", "מושבת"];
    const standOptions: Cardata["stand"][] = ["הכן", "סדיר", "החי"];

    const startDate = new Date("2021-12-12");
    const endDate = new Date();

    for (let i = 0; i < count; i++) {
        const createdAt = getRandomDateInRange(startDate, endDate);
        const updatedAt = getRandomDateInRange(createdAt, endDate);

        const randomStatus = getRandomElement(statusOptions);
        const randomStand = getRandomElement(standOptions);
        const randomMakat = getRandomElement(makats)

        const cardata: Cardata = {
            _id: new mongoose.Types.ObjectId(),
            carnumber: generateRandomCarNumber(),
            stand: randomStand,
            createdAt: createdAt,
            updatedAt: updatedAt,
            status: randomStatus,
            makat: randomMakat._id,
        };

        if (Math.random() > 0.2) {
            cardata.gdod = getRandomElement(gdods)._id;
        }

        if (Math.random() > 0.7){
            const systemsOfMakat = systemsToMakats.filter(systemToMakatItem => systemToMakatItem.makatId === cardata.makat);
            if (systemsOfMakat.length > 0){
                const withKshirot = systemsOfMakat.map(systemToMakat => ({
                    systemType: systemToMakat.systemId,
                    kashir: true,
                })).slice(0, Math.floor(Math.random() * systemsOfMakat.length))

                cardata.systems = withKshirot;
            }
        }

        cardataList.push(cardata);
    }

    return cardataList;
};

// Create the model
export const CardataModel = mongoose.model<Cardata>("Cardata", cardataSchema);

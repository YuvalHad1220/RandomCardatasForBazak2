import mongoose, { Schema } from "mongoose";
import { Makat } from "../magadTree/Makat";
import { Gdod } from "../unitTree/Gdod";
import { SystemToMakat } from "../Systems/SystemsToMakats";

export interface Cardata {
    _id: mongoose.Types.ObjectId;
    carnumber: string;
    gdod?: string;
    zminot: "כשיר" | "לא כשיר";
    kshirot: "כשיר" | "לא כשיר";
    makat: string;
    stand: "הכן" | "סדיר" | 'הח"י';
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
    kshirot: {type: String, required: true},
    zminot: {type: String, required: true},
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

const tipulOptions = ["tipul", "harig_tipul", "takala_mizdamenet"];


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

const generateTipul = () => {
    const type = getRandomElement(tipulOptions);

    const hh_stands = [];

    hh_stands.push({
        type: "hh_stand",
        missing_makat_1: generateRandomCarNumber(),
        missing_makat_2: Math.floor(Math.random() * 15).toFixed()
    })
    hh_stands.push({
        type: "hh_stand",
        missing_makat_1: generateRandomCarNumber(),
        missing_makat_2: Math.floor(Math.random() * 3).toFixed()
    })


    return {
        type,
        [type]: "רנדומלי",
        hh_stands
    }
}


export const generateRandomCardatas = (count: number, makats: Makat[], gdods: Gdod[], systemsToMakats: SystemToMakat[]): Cardata[] => {
    const cardataList: Cardata[] = [];
    const statusOptions: Cardata["status"][] = ["פעיל", "מושבת"];
    const standOptions: Cardata["stand"][] = ["הכן", "סדיר", 'הח"י'];
    const expected_repairOptions: Cardata["expected_repair"][] = ["עד 6 שעות", "עד 12 שעות", "עד 24 שעות", "עד 72 שעות",];
    const startDate = new Date("2021-12-12");
    const endDate = new Date();

    for (let i = 0; i < count; i++) {
        const createdAt = getRandomDateInRange(startDate, endDate);
        const updatedAt = getRandomDateInRange(createdAt, endDate);

        const randomStatus = getRandomElement(statusOptions);
        const randomStand = getRandomElement(standOptions);
        const randomMakat = getRandomElement(makats)
        const randomKshirot= Math.random() > 0.5 ? "כשיר" : "לא כשיר"
        const randomZminot= Math.random() > 0.5 ? "כשיר" : "לא כשיר"
        const cardata: Cardata = {

            _id: new mongoose.Types.ObjectId(),
            carnumber: generateRandomCarNumber(),
            stand: randomStand,
            createdAt: createdAt,
            updatedAt: updatedAt,
            status: randomStatus,
            makat: randomMakat._id,
            kshirot: randomKshirot,
            zminot: randomZminot,
            expected_repair: (randomKshirot === "לא כשיר" || randomZminot === "לא כשיר") ? getRandomElement(expected_repairOptions) : undefined,
            tipuls:  (randomKshirot === "לא כשיר" || randomZminot === "לא כשיר") ? [generateTipul()] : undefined
        };

        if (Math.random() > 0.18) {
            cardata.gdod = getRandomElement(gdods)._id;
        }

        if (Math.random() > 0.7){
            const systemsOfMakat = systemsToMakats.filter(systemToMakatItem => systemToMakatItem.makatId === cardata.makat);
            if (systemsOfMakat.length > 0){
                const withKshirot = systemsOfMakat.map(systemToMakat => ({
                    systemType: systemToMakat.systemId,
                    kashir: (randomKshirot === "לא כשיר" || randomZminot === "לא כשיר") ? Math.random() > 0.5 ? true : false : true,
                })).slice(0, Math.floor(Math.random() * systemsOfMakat.length))

                cardata.systems = withKshirot;
                const isOneNotKashir = cardata.systems.some(system => !system.kashir);
                if (isOneNotKashir){
                    const possibleTakalaMizdamenet = cardata.tipuls?.find(tipul => tipul.type === "takala_mizdamenet");
                    if (possibleTakalaMizdamenet){
                        possibleTakalaMizdamenet.type = "technology_mizdamenet"
                    }
                }
            }
        }

        cardataList.push(cardata);
    }

    return cardataList;
};

// Create the model
export const CardataModel = mongoose.model<Cardata>("Cardata", cardataSchema);

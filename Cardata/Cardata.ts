import mongoose, { Schema } from "mongoose";
import { Makat } from "../magadTree/Makat";
import { Gdod } from "../unitTree/Gdod";
import { SystemToMakat } from "../Systems/SystemsToMakats";
import { carTypeInterface } from "../Cartype/Cartype";

export interface Cardata {
    _id: mongoose.Types.ObjectId;
    carnumber:  String,
    gdodId: String,
    makatId: String,
    carTypeId: mongoose.Types.ObjectId,
}

// Define the schema
const cardataSchema = new Schema<Cardata>({
    carnumber: { type: String },
    gdodId: { type: String },
    makatId: { type: String },
    carTypeId: { type: mongoose.Schema.Types.ObjectId },
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

export const generateRandomCardatas = (count: number, makats: Makat[], gdods: Gdod[], cartypeArr: carTypeInterface[]): Cardata[] => {
    const cardataList: Cardata[] = [];
    

    for (let i = 0; i < count; i++) {
        const randomMakat = getRandomElement(makats)

        const cardata: Cardata = {
            _id: new mongoose.Types.ObjectId(),
            carnumber: generateRandomCarNumber(),
            makatId: randomMakat._id,
            gdodId: getRandomElement(gdods)._id,
            carTypeId: getRandomElement(cartypeArr)._id,
        };

        cardataList.push(cardata);
    }

    return cardataList;
};

// Create the model
export const CardataModel = mongoose.model<Cardata>("Cardata", cardataSchema);

import { shuffle } from "../Shuffle";
import mongoose, { Schema } from "mongoose";

// Define the interface for your document
export interface System {
    name: string;
    mashbit: "0" | "1" | "2";
    _id: mongoose.Types.ObjectId;
}


const possibleSystemNames = [
    'בלוטופ',
    'וויי-פיי',
    'מעיל רוח',
    'מסך',
    'סאונדבלאסט',
    'נטליגנט',
    'פלאשגורדון',
    'ספייסקופ',
    'אנרגיה גריזלי',
    'פלוטוניום',
    'סולאריס',
    'אקליפס',
    'קוואזר',
    'מקסימיליאן',
    'ספרקטרום',
    'איקספלורר',
    'אלגוריתם',
    'קווינטור',
    'זנית רכיבה',
  ];

export const generateSystems = (): System[] => {
  const systems: System[] = [];
  const numOfSystems = 6;
  shuffle(possibleSystemNames);
  for (let i = 0; i < numOfSystems ; i++) {
    const mashbitValue = i < 3 ? i < 2 ? i < 1 ? "0" : "1" : "2" : (Math.floor(Math.random() * 3)).toString() as "0" | "1" | "2";
    const system: System = {
      name: possibleSystemNames.pop()!,
      mashbit: mashbitValue,
      _id: new mongoose.Types.ObjectId()
    };

    systems.push(system);
  }

  return systems;
};
// Define the schema
const systemSchema = new Schema<System>({
  name: { type: String, required: true },
  mashbit: { type: String, enum: ["0", "1", "2"], required: true },
});

// Create the model
export const SystemModel = mongoose.model<System>("System", systemSchema);

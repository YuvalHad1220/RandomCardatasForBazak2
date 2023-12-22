import { Schema, model } from "mongoose";
import { Hativa } from "./Hativa";

export interface Gdod {
    name: string;
    _id: string;
    sadir: "סדיר" | "לא סדיר";
    hativa: string
  }

const gdodSchema = new Schema<Gdod>({
    name: { type: String, required: true },
    _id: { type: String, required: true },
    sadir: { type: String, enum: ["סדיר", "לא סדיר"], required: true },
    hativa: { type: String, required: true },
});


export const generateRandomGdod = (hativas: Hativa[]): Gdod[] => {
    const gdodList: Gdod[] = [];
  
    for (let i = 1; i <= hativas.length * 10; i++) {
      const gdodNumber = Math.floor(Math.random() * 200).toString().padStart(3, '0');
      const gdodName = `גדוד-${gdodNumber}`;
      const gdodId = `g${gdodNumber}`;
  
      const gdod: Gdod = {
        name: gdodName,
        _id: gdodId,
        sadir: Math.random() > 0.3 ? "לא סדיר" : "סדיר",
        hativa: hativas[Math.floor(Math.random() * (hativas.length - 1))]._id
      };
  
      gdodList.push(gdod);
    }
  
    return gdodList;
  };
  

export const GdodModel = model("Gdod", gdodSchema);
import { Schema, model } from "mongoose";
import { Ogda } from "./Ogda";

export interface Hativa {
    name: string;
    _id: string;
    ogda: string,
}
const hativaSchema = new Schema<Hativa>({
  name: { type: String, required: true },
  _id: { type: String, required: true },
  ogda: { type: String, required: true },
});

export const generateRandomHativa = (ogdas: Ogda[]): Hativa[] => {
    const minHativas = 10;
    const maxHativas = Math.floor(ogdas.length * 4);
    const numberOfHativas = Math.floor(Math.random() * (maxHativas - minHativas + 1)) + minHativas;
    const usedHativaNumbers = new Set<string>();
  
    const hativaList: Hativa[] = [];
  
    for (let i = 1; i <= numberOfHativas; i++) {
      let hativaNumber: string;
      do {
        hativaNumber  = Math.floor(Math.random() * 100).toString().padStart(3, '0')
      }
      while (usedHativaNumbers.has(hativaNumber))
      usedHativaNumbers.add(hativaNumber);
    
      const hativaName = `חטיבה-${hativaNumber}`;
      const hativaId = `h${hativaNumber}`;
  
      const hativa: Hativa = {
        name: hativaName,
        _id: hativaId,
        ogda: ogdas[Math.floor(Math.random() * (ogdas.length - 1))]._id
      };
  
      hativaList.push(hativa);
    }
  
    return hativaList;
  };

export const HativaModel = model("Hativa", hativaSchema);
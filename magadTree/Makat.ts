import { Schema, model } from "mongoose";
import { Mkabaz } from "./Mkabaz";

export interface Makat {
    name: string;
    _id: string;
    mkabaz: string;
  }

const makatSchema = new Schema<Makat>({
    name: { type: String, required: true },
    _id: { type: String, required: true },
    mkabaz: { type: String, required: true },
});

export const generateRandomMakats = (mkabazList: Mkabaz[]): Makat[] => {
    const minMakats = 24;
    const maxMakats = Math.min(mkabazList.length * 3, mkabazList.length + minMakats);
    const makatList: Makat[] = [];
    const usedMakatNumbers = new Set<string>();
  
    for (let i = 1; i <= maxMakats; i++) {
      let randomMakatNumber: string;
      do {
        randomMakatNumber = Math.floor(Math.random() * 100000).toString().padStart(6, '0')
      }
      while (usedMakatNumbers.has(randomMakatNumber));
      usedMakatNumbers.add(randomMakatNumber);
      const randomMkabaz = mkabazList[Math.floor(Math.random() * mkabazList.length)];
  
      const makat: Makat = {
        name: randomMakatNumber,
        _id: `makat-${randomMakatNumber}`,
        mkabaz: randomMkabaz._id,
      };
  
      makatList.push(makat);
    }
  
    return makatList;
  };

export const MakatModel = model<Makat>("Makat", makatSchema);
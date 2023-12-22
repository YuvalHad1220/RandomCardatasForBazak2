import { Schema, model } from "mongoose";
import { Magad } from "./Magad";

export interface Mkabaz {
    name: string;
    _id: string;
    magad: string;
}
const mkabazSchema = new Schema<Mkabaz>({
  name: { type: String, required: true },
  _id: { type: String, required: true },
  magad: { type: String, required: true },
});


export const generateRandomMkabazs = (magadList: Magad[]): Mkabaz[] => {
    const minMkabazs = 12;
    const maxMkabazs = Math.floor(Math.random() * (magadList.length * 3 - minMkabazs + 1)) + minMkabazs;
    const mkabazList: Mkabaz[] = [];
  
    for (let i = 1; i <= maxMkabazs; i++) {
      const randomMagad = magadList[Math.floor(Math.random() * magadList.length)];
      const mkabazNumber = i;
      const mkabazId = `mkabaz-${mkabazNumber}`;
      const mkabazName = `${randomMagad.name}-${mkabazNumber}`;
  
      const mkabaz: Mkabaz = {
        name: mkabazName,
        _id: mkabazId,
        magad: randomMagad._id
      };
  
      mkabazList.push(mkabaz);
    }
  
    return mkabazList;
  };

export const MkabazModel = model<Mkabaz>('Mkabaz', mkabazSchema);
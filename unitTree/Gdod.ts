import { Hativa } from "./Hativa";

export interface Gdod {
    name: string;
    id: string;
    sadir: "סדיר" | "לא סדיר";
    hativa: string
  }
  
export const generateRandomGdod = (hativas: Hativa[]): Gdod[] => {
    const gdodList: Gdod[] = [];
  
    for (let i = 1; i <= hativas.length * 10; i++) {
      const gdodNumber = Math.floor(Math.random() * 200).toString().padStart(3, '0');
      const gdodName = `גדוד-${gdodNumber}`;
      const gdodId = `g${gdodNumber}`;
  
      const gdod: Gdod = {
        name: gdodName,
        id: gdodId,
        sadir: Math.random() > 0.3 ? "לא סדיר" : "סדיר",
        hativa: hativas[Math.floor(Math.random() * (hativas.length - 1))].id
      };
  
      gdodList.push(gdod);
    }
  
    return gdodList;
  };
  
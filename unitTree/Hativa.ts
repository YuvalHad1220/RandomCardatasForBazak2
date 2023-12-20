import { Ogda } from "./Ogda";

export interface Hativa {
    name: string;
    id: string;
    ogda: string,
}

export const generateRandomHativa = (ogdas: Ogda[]): Hativa[] => {
    const minHativas = 10;
    const maxHativas = Math.floor(ogdas.length * 4);
    const numberOfHativas = Math.floor(Math.random() * (maxHativas - minHativas + 1)) + minHativas;
  
    const hativaList: Hativa[] = [];
  
    for (let i = 1; i <= numberOfHativas; i++) {
      const hativaNumber = Math.floor(Math.random() * 100).toString().padStart(3, '0');
      const hativaName = `חטיבה-${hativaNumber}`;
      const hativaId = `h${hativaNumber}`;
  
      const hativa: Hativa = {
        name: hativaName,
        id: hativaId,
        ogda: ogdas[Math.floor(Math.random() * (ogdas.length - 1))].id
      };
  
      hativaList.push(hativa);
    }
  
    return hativaList;
  };
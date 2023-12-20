import { Magad } from "./Magad";

export interface Mkabaz {
    name: string;
    id: string;
    magad: string;
}

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
        id: mkabazId,
        magad: randomMagad.id
      };
  
      mkabazList.push(mkabaz);
    }
  
    return mkabazList;
  };
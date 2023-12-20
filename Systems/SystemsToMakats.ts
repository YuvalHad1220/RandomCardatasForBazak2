import { System } from "typescript";
import { Makat } from "../magadTree/Makat";

export interface SystemToMakat {
    makatId: string;
    systemId: string;
  }


export const generateSystemToMakatList = (makats: Makat[], systems: System[]): SystemToMakat[] => {
    const systemToMakatList: SystemToMakat[] = [];
  
    for (const makat of makats) {
      // Determine the number of systems for each makat (random between 0 and systems.length - 1)
      const numOfSystems = Math.floor(Math.random() * (systems.length));
  
      // Get unique random system indices
      const randomSystemIndices: number[] = [];
      while (randomSystemIndices.length < numOfSystems) {
        const randomIndex = Math.floor(Math.random() * systems.length);
        if (!randomSystemIndices.includes(randomIndex)) {
          randomSystemIndices.push(randomIndex);
        }
      }
  
      // Create SystemToMakat entries
      for (const randomIndex of randomSystemIndices) {
        const systemToMakat: SystemToMakat = {
          makatId: makat.id,
          systemId: systems[randomIndex].id,
        };
        systemToMakatList.push(systemToMakat);
      }
    }
  
    return systemToMakatList;
  };
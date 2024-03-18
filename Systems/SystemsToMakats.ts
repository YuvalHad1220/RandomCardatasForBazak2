import { System } from "../Systems/System";
import { Makat } from "../magadTree/Makat";
import mongoose, { Schema, Document } from "mongoose";

// Define the interface for your document
export interface SystemToMakat {
    makatId: string;
    systemId: mongoose.Types.ObjectId;
}

// Define the schema
const systemToMakatSchema: Schema = new Schema({
    makatId: { type: String, required: true },
    systemId: { type: mongoose.Types.ObjectId, required: true },
});

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
          makatId: makat._id,
          systemId: systems[randomIndex]._id,
        };  
        systemToMakatList.push(systemToMakat);
      }
    }
  
    return systemToMakatList;
  };

// Create the model
export const SystemToMakatModel = mongoose.model<SystemToMakat>("SystemsToMakats", systemToMakatSchema);


import { MODE } from "../config/config.js";
import votoMemoryDao from "./Memory/votoMemoryDao.js"

class Factory {
  constructor() {}

  static factory = () => {
    if (MODE === "memory") {
      return {
        votoDao: new votoMemoryDao(),
      };
    }
    if (MODE === "sql") {
      return {
        votoBdDao: "sqlMethod",
      };
    }
  };
}

export default Factory;

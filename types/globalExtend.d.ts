import { MongoClient } from "mongodb";

declare module NodeJS {
  interface Global {
    mongoClient: Promise<MongoClient>;
  }
}

declare const mongoClient: Promise<MongoClient>;

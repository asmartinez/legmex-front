import { Model } from "./interfaces";

export const findEntity = <T extends Model>(items: T[], id: number): T => items.find(item => item.id === id) as T;
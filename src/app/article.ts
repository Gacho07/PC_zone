import { Storage } from './storage';
import { Processor } from './processor';
import { Memory } from './memory';
import { Graphics } from './graphics';


export interface Article {
  id: number,
  name: string,
  price: number,
  description: string,
  image: string,
  bigImage: string,
  powerSupply: string,
  idCategory: number,
  category: string,
  processor: Processor,
  storage: Storage,
  memory: Memory,
  graphics: Graphics
}

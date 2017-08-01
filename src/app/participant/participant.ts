import { ReviewState } from '../enums/Enums';

export class Participant {
  name: string;
  age: number;
  hasSiblings: boolean;
  environmentalExposures: string;
  geneticMutations: string;
  reviewState: ReviewState;

  constructor( name: string,
               age: number,
               hasSiblings: boolean,
               environmentalExposures: string,
               geneticMutations: string,
               reviewState: ReviewState ){

    this.name = name;
    this.age = age;
    this.hasSiblings = hasSiblings;
    this.environmentalExposures = environmentalExposures;
    this.geneticMutations = geneticMutations;
    this.reviewState = reviewState;
  }
}


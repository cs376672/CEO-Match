export type Axis = string;
export type Direction = 1 | -1;

export type TestType = 'BUSINESS' | 'ANIMAL';

export interface Question {
  id: number;
  text: string;
  axis: Axis;
  choiceA: {
    text: string;
    value: Direction;
  };
  choiceB: {
    text: string;
    value: Direction;
  };
}

export interface ResultType {
  id: string;
  title: string;
  subtitle?: string;
  animal?: string;
  description: string;
  recommendedBusiness?: string[];
  strengths?: string[];
  weaknesses?: string[];
  traits?: string[];
  matchCombination: string[]; 
}

export type Scores = Record<string, number>;

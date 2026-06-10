export type Axis = 'M' | 'S' | 'R' | 'T';
export type Direction = 1 | -1;

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
  subtitle: string;
  description: string;
  recommendedBusiness: string[];
  strengths: string[];
  weaknesses: string[];
  matchCombination: string[]; // e.g. ["M-", "S-", "R+", "T+"]
}

export type Scores = {
  M: number;
  S: number;
  R: number;
  T: number;
};

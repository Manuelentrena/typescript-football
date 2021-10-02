export interface Club {
  name: string;
  code: string | null;
  country: string;
}

export interface Clubs {
  name: string;
  clubs: Club[];
}

export interface Match {
  round: string;
  date: string;
  team1: string;
  team2: string;
  score?: {
    ft: [number, number];
  };
}

export interface Matches {
  name: string;
  matches: Match[];
}

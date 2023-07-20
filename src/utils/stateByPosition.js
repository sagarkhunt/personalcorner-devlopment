const statePosition = {
  // Quarterbacks
  QB: [
    { icon: null, fullName: "Passing Touchdowns", key: "PassingTouchdowns" },
    { icon: null, fullName: "Passing Yards", key: "PassingYards" },
    { icon: null, fullName: "Passing Completions", key: "PassingCompletions" },
    { icon: null, fullName: "Passing Attempts", key: "PassingAttempts" },
    { icon: null, fullName: "Interceptions", key: "Interceptions" },
  ],

  // Running Backs (RB)
  RB: [
    { icon: null, fullName: "Touchdowns", key: "Touchdowns" },
    { icon: null, fullName: "Rushing Yards", key: "RushingYards" },
    { icon: null, fullName: "Run Attempts", key: "RushingAttempts" },
    {
      icon: null,
      fullName: "Yards per attempt",
      key: "RushingYardsPerAttempt",
    },
    { icon: null, fullName: "Receptions", key: "Receptions" },
    { icon: null, fullName: "Receiving Yards", key: "ReceivingYards" },
  ],

  // Wide Receivers (WR)
  WR: [
    { icon: null, fullName: "Receptions", key: "Receptions" },
    { icon: null, fullName: "Receiving Yards", key: "ReceivingYards" },
    {
      icon: null,
      fullName: "Receiving Touchdowns",
      key: "ReceivingTouchdowns",
    },
    { icon: null, fullName: "Yards per catch", key: "ReceivingYards" },
  ],

  // Tight Ends (TE)
  TE: [
    { icon: null, fullName: "Receptions", key: "Receptions" },
    { icon: null, fullName: "Receiving Yards", key: "ReceivingYards" },
    {
      icon: null,
      fullName: "Receiving Touchdowns",
      key: "ReceivingTouchdowns",
    },
    { icon: null, fullName: "Yards per catch", key: "ReceivingYards" },
  ],

  // Linebackers (LB)
  LB: [
    { icon: null, fullName: "Tackles", key: "Tackles" },
    { icon: null, fullName: "Sacks", key: "Sacks" },
    { icon: null, fullName: "Interceptions", key: "Interceptions" },
    { icon: null, fullName: "Forced Fumbles", key: "FumblesForced" },
  ],

  // Cornerback (CB)
  CB: [
    {
      icon: null,
      fullName: "Pass break ups (or pass deflections)",
      key: "PassingInterceptions",
    },
    { icon: null, fullName: "Tackles", key: "Tackles" },
    { icon: null, fullName: "Sacks", key: "Sacks" },
    { icon: null, fullName: "Interceptions", key: "Interceptions" },
    { icon: null, fullName: "Forced Fumbles", key: "FumblesForced" },
  ],

  // Safety (S)
  S: [
    {
      icon: null,
      fullName: "Pass break ups (or pass deflections)",
      key: "PassingInterceptions",
    },
    { icon: null, fullName: "Tackles", key: "Tackles" },
    { icon: null, fullName: "Sacks", key: "Sacks" },
    { icon: null, fullName: "Interceptions", key: "Interceptions" },
    { icon: null, fullName: "Forced Fumbles", key: "FumblesForced" },
  ],

  // Defensive Line (DL)
  DL: [
    { icon: null, fullName: "Tackles", key: "Tackles" },
    { icon: null, fullName: "Sacks", key: "Sacks" },
    { icon: null, fullName: "Interceptions", key: "Interceptions" },
    { icon: null, fullName: "Forced Fumbles", key: "FumblesForced" },
  ],

  // Defensive End (DE)
  DE: [
    { icon: null, fullName: "Tackles", key: "Tackles" },
    { icon: null, fullName: "Sacks", key: "Sacks" },
    { icon: null, fullName: "Interceptions", key: "Interceptions" },
    { icon: null, fullName: "Forced Fumbles", key: "FumblesForced" },
  ],
};

export const statesByPosition = (Position) => {
  if (statePosition[Position]) return statePosition[Position];
  return [];
};

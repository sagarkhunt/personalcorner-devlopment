export const getPostionFullname = (position) => {
  switch (position.toUpperCase()) {
    case "FS":
      return "Free Safety".toUpperCase();

    case "DB":
      return "	Defensive Back".toUpperCase();

    case "G":
      return "Guard".toUpperCase();

    case "DL":
      return "Defensive linemen".toUpperCase();

    case "C":
      return "Center".toUpperCase();

    case "OG":
      return "Offensive guard".toUpperCase();

    case "OT":
      return "Offensive tackle".toUpperCase();

    case "R":
      return "Backs and receivers".toUpperCase();

    case "QB":
      return "Quarterback".toUpperCase();

    case "HB":
    case "FB":
    case "HB/FB":
      return "Running back".toUpperCase();

    case "WR":
      return "Wide receiver".toUpperCase();

    case "TE":
      return "Tight end".toUpperCase();

    case "DT":
      return "Defensive tackle".toUpperCase();

    case "DE":
      return "Defensive end".toUpperCase();

    case "MLB":
      return "Middle linebacker".toUpperCase();

    case "OLB":
      return "Outside linebacker".toUpperCase();

    case "CB":
      return "Cornerback".toUpperCase();

    case "S":
      return "Safety".toUpperCase();

    case "K":
      return "Kicker".toUpperCase();

    case "KOS":
      return "Kickoff specialist".toUpperCase();

    case "P":
      return "Punter".toUpperCase();

    case "H":
      return "Holder".toUpperCase();

    case "LS":
      return "Long snapper".toUpperCase();

    case "KR":
      return "Kick returner".toUpperCase();

    case "PR":
      return "punt returner".toUpperCase();

    default:
      return "Other".toUpperCase();
  }
};

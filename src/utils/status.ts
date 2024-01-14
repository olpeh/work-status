import { Status, Team } from "../models/reports";

export const getStatusFormatted = (status: Status) => {
  console.log(status);

  switch (true) {
    // BUKStatus
    case "OnTrackCount" in status: {
      const exact = (status.OnTrackCount / status.MemberCount) * 100;
      return exact.toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "%";
    }
    // SamvirkStatus
    case "ContributionAmount" in status && "MemberCount" in status: {
      const exact = status.ContributionAmount / 200; // TODO
      return exact.toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "%";
    }
    // AHStatus
    default: {
      return status.ContributionAmount;
    }
  }
};

export const getResultFormatted = (team: Team) => {
  const ahResult = team.AHStatus.ContributionAmount;
  const bukStatus = team.BUKStatus.OnTrackCount / team.BUKStatus.MemberCount;
  const samvirkStatus = team.SamvirkStatus.ContributionAmount / 200; /*TODO*/
  const totalResult = ahResult * bukStatus * samvirkStatus;
  return totalResult.toLocaleString("fi-FI", { maximumFractionDigits: 1 });
};

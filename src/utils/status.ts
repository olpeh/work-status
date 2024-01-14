import { Status, Team } from "../models/reports";

export const getStatusFormatted = (
  status: Status,
  samvirkGoalPerMonth?: number,
) => {
  console.log(status);

  switch (true) {
    // BUKStatus
    case "OnTrackCount" in status: {
      const exact = (status.OnTrackCount / status.MemberCount) * 100;
      return exact.toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "%";
    }
    // SamvirkStatus
    case "ContributionAmount" in status && "MemberCount" in status: {
      const exact = status.ContributionAmount / (samvirkGoalPerMonth || 200);
      return exact.toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "%";
    }
    // AHStatus
    default: {
      return status.ContributionAmount;
    }
  }
};

export const getResultFormatted = (
  team: Team,
  samvirkGoalPerMonth?: number,
) => {
  const ahResult = team.AHStatus.ContributionAmount;
  const bukStatus = team.BUKStatus.OnTrackCount / team.BUKStatus.MemberCount;
  const samvirkStatus =
    team.SamvirkStatus.ContributionAmount / (samvirkGoalPerMonth || 200);
  const totalResult = ahResult * bukStatus * samvirkStatus;
  return totalResult.toLocaleString("fi-FI", { maximumFractionDigits: 1 });
};

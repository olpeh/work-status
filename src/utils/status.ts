import { Status, Team } from "../models/reports";

export const getStatusFormatted = (
  status: Status,
  SamvirkGoalPerSprint?: number,
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
      const exact = status.ContributionAmount / ((SamvirkGoalPerSprint || 200 ) * status.MemberCount) * 100;
      return exact.toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "%";
    }
    // AHStatus
    default: {
      return (
        status.ContributionAmount.toLocaleString("fi-FI", {
          maximumFractionDigits: 1,
        }) + "€"
      );
    }
  }
};

export const getResultFormatted = (
  team: Team,
  SamvirkGoalPerSprint?: number,
) => {
  const ahResult = team.AHStatus.ContributionAmount;
  const bukStatus = team.BUKStatus.OnTrackCount / team.BUKStatus.MemberCount;
  const samvirkStatus =
    team.SamvirkStatus.ContributionAmount / ((SamvirkGoalPerSprint || 200) * team.SamvirkStatus.MemberCount);
  const totalResult = ahResult * bukStatus * samvirkStatus;
  return totalResult.toLocaleString("fi-FI", { maximumFractionDigits: 1 });
};

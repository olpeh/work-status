import { Mode } from "../App";
import { Status, Team } from "../models/reports";

export const getStatusFormatted = ({
  status,
  samvirkGoalPerSprint,
  mode,
}: {
  status: Status;
  samvirkGoalPerSprint?: number;
  mode: Mode;
}) => {
  switch (true) {
    // BUKStatus
    case "OnTrackCount" in status: {
      const exact =
        ((mode === "statusNow"
          ? status.OnTrackOnDateCount
          : status.OnTrackCount) /
          status.MemberCount) *
        100;
      return exact.toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "%";
    }
    // SamvirkStatus
    case "ContributionAmount" in status && "MemberCount" in status: {
      const exact =
        (status.ContributionAmount /
          ((samvirkGoalPerSprint || 200) * status.MemberCount)) *
        100;
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

export const getResultFormatted = ({
  team,
  samvirkGoalPerSprint,
  mode,
}: {
  team: Team;
  samvirkGoalPerSprint?: number;
  mode: Mode;
}) => {
  const ahResult = team.AHStatus.ContributionAmount;
  const bukStatus =
    (mode === "statusNow"
      ? team.BUKStatus.OnTrackOnDateCount
      : team.BUKStatus.OnTrackCount) / team.BUKStatus.MemberCount;
  const samvirkStatus =
    team.SamvirkStatus.ContributionAmount /
    ((samvirkGoalPerSprint || 200) * team.SamvirkStatus.MemberCount);
  const totalResult = ahResult * bukStatus * samvirkStatus;
  return (
    totalResult.toLocaleString("fi-FI", { maximumFractionDigits: 1 }) + "p"
  );
};

import { Status, Team } from "../models/reports";

export const getStatusFormatted = ({
  status,
  samvirkGoalPerSprint,
  useOnTrackOnDateCount,
}: {
  status: Status;
  samvirkGoalPerSprint?: number;
  useOnTrackOnDateCount?: true;
}) => {
  switch (true) {
    // BUKStatus
    case "OnTrackCount" in status: {
      const exact =
        ((useOnTrackOnDateCount
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
  useOnTrackOnDateCount,
}: {
  team: Team;
  samvirkGoalPerSprint?: number;
  useOnTrackOnDateCount?: true;
}) => {
  const ahResult = team.AHStatus.ContributionAmount;
  const bukStatus =
    (useOnTrackOnDateCount
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

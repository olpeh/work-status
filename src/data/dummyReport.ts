import { Report } from "../models/reports";

export const dummyLoadingReport: Report = {
  Title: "Ladataan...",
  DateFrom: new Date().toISOString(),
  DateTo: new Date().toISOString(),
  MyShareTargetOnDate: 0,
  MyShareNextThreshold: 0,
  SamvirkGoalPerSprint: 0,
  SamvirkGoalPerMonth: 0,
  Teams: [
    {
      Name: "Orange",
      MemberCount: 0,
      BUKStatus: {
        MemberCount: 0,
        OnTrackCount: 0,
        OnTrackOnDateCount: 0,
      },
      SamvirkStatus: {
        MemberCount: 0,
        ContributionAmount: 0,
      },
      AHStatus: {
        ContributionAmount: 0,
      },
    },
    {
      Name: "Blue",
      MemberCount: 0,
      BUKStatus: {
        MemberCount: 0,
        OnTrackCount: 0,
        OnTrackOnDateCount: 0,
      },
      SamvirkStatus: {
        MemberCount: 0,
        ContributionAmount: 0,
      },
      AHStatus: {
        ContributionAmount: 0,
      },
    },
    {
      Name: "Red",
      MemberCount: 0,
      BUKStatus: {
        MemberCount: 0,
        OnTrackCount: 0,
        OnTrackOnDateCount: 0,
      },
      SamvirkStatus: {
        MemberCount: 0,
        ContributionAmount: 0,
      },
      AHStatus: {
        ContributionAmount: 0,
      },
    },
    {
      Name: "Green",
      MemberCount: 0,
      BUKStatus: {
        MemberCount: 0,
        OnTrackCount: 0,
        OnTrackOnDateCount: 0,
      },
      SamvirkStatus: {
        MemberCount: 0,
        ContributionAmount: 0,
      },
      AHStatus: {
        ContributionAmount: 0,
      },
    },
  ],
  ReportDate: new Date().toISOString(),
};

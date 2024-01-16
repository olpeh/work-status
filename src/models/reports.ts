import { z } from "zod";

const BUKStatus = z.object({
  MemberCount: z.number(),
  OnTrackCount: z.number(),
});

const SamvirkStatus = z.object({
  MemberCount: z.number(),
  ContributionAmount: z.number(),
});

const AHStatus = z.object({
  ContributionAmount: z.number(),
});

const Team = z.object({
  Name: z.string(),
  MemberCount: z.number(),
  BUKStatus: BUKStatus,
  SamvirkStatus: SamvirkStatus,
  AHStatus: AHStatus,
});

const Report = z.object({
  Title: z.string(),
  DateFrom: z.string(),
  DateTo: z.string(),
  MyShareTargetOnDate: z.number(),
  MyShareNextThreshold: z.number(),
  SamvirkGoalPerMonth: z.number(),
  SamvirkGoalPerSprint: z.number(),
  Teams: z.array(Team),
});

export const reports = z.array(Report);
export type Report = z.infer<typeof Report>;

const status = BUKStatus.or(SamvirkStatus).or(AHStatus);
export type Status = z.infer<typeof status>;

export type Team = z.infer<typeof Team>;

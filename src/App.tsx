import useSWR from "swr";
import { Report, reports } from "./models/reports";
import { getFormattedDate, getFormattedDateTime } from "./utils/date";
import { getResultFormatted, getStatusFormatted } from "./utils/status";
import workLogo from "./assets/work-logo.svg";
import styles from "./App.module.css";
import { dummyLoadingReport } from "./data/dummyReport";

const isProd = process.env.NODE_ENV === "production";

const fetcher = async (url: string) => {
  let unsafeData;
  if (isProd) {
    const res = await fetch(url);
    unsafeData = await res.json();
  } else {
    // simulate slow network by waiting
    await new Promise((resolve) => setTimeout(resolve, 300));
    const data = await import("./data/test-reports.json");
    unsafeData = data.default;
  }

  const safeData = reports.parse(unsafeData);
  return safeData;
};

export const App = () => {
  const url = document
    .getElementById("work-root")
    ?.getAttribute("data-source-url");

  const { data, error, isLoading } = useSWR(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  return (
    <div className={styles.app}>
      <div>
        <div className={styles.workLogoWrapper}>
          <img src={workLogo} alt="Work logo" className={styles.workLogo} />
        </div>
        <ul className={styles.reports}>
          {error && <li className={styles.error}>Virhe: {`${error}`}</li>}
          {isLoading && (
            <Report report={dummyLoadingReport} isLoading={isLoading} />
          )}
          {data &&
            data.map((report) => (
              <Report
                key={report.Title}
                report={report}
                isLoading={isLoading}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

const Report = ({
  report,
  isLoading,
}: {
  report: Report;
  isLoading: boolean;
}) => {
  return (
    <li className={styles.report}>
      <h2 className={styles.reportTitle}>{report.Title}</h2>
      <p>
        {getFormattedDate(report.DateFrom)} – {getFormattedDate(report.DateTo)}
      </p>
      <p>MyShare tavoite raportointihetkellä: {report.MyShareTargetOnDate}%</p>
      <table className={styles.reportTable} cellPadding={6}>
        <thead>
          <tr>
            <td></td>
            <td>AH</td>
            <td>BUK</td>
            <td>Samvirk</td>
            <td>Tulos</td>
          </tr>
        </thead>
        <tbody>
          {report.Teams.map((team) => (
            <tr key={team.Name}>
              <td>
                <div
                  className={`${styles.teamLogo} ${styles["team" + team.Name]}`}
                ></div>
              </td>
              <td>{!isLoading ? getStatusFormatted(team.AHStatus) : "–"}</td>
              <td>{!isLoading ? getStatusFormatted(team.BUKStatus) : "–"}</td>
              <td>
                {!isLoading
                  ? getStatusFormatted(
                      team.SamvirkStatus,
                      report.SamvirkGoalPerSprint,
                    )
                  : "–"}
              </td>
              <td>
                {!isLoading
                  ? getResultFormatted(team, report.SamvirkGoalPerSprint)
                  : "–"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Tulokset päivitetty: {getFormattedDateTime(report.ReportDate)}</p>
    </li>
  );
};

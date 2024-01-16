import useSWR from "swr";
import { reports } from "./models/reports";
import { getFormattedDate } from "./utils/date";
import { getResultFormatted, getStatusFormatted } from "./utils/status";
import workLogo from "./assets/work-logo.svg";
import styles from "./App.module.css";

const isProd = process.env.NODE_ENV === "production";

const fetcher = async (url: string) => {
  isProd ? console.log("prod") : console.log("dev");
  let unsafeData;
  if (isProd) {
    const res = await fetch(url);
    unsafeData = await res.json();
  } else {
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

  const { data, error, isLoading } = useSWR(url, fetcher);

  console.log(data, error, isLoading);

  return (
    <div className={styles.app}>
      {isLoading && <p className={styles.loading}>Ladataan dataa...</p>}
      {error && <p className={styles.error}>Virhe: {`${error}`}</p>}
      {data && (
        <div>
          <div className={styles.workLogoWrapper}>
            <img src={workLogo} alt="Work logo" className={styles.workLogo} />
          </div>
          <ul className={styles.reports}>
            {data.map((report) => (
              <li key={report.Title} className={styles.report}>
                <h2 className={styles.reportTitle}>{report.Title}</h2>
                <p>
                  {getFormattedDate(report.DateFrom)} –{" "}
                  {getFormattedDate(report.DateTo)}
                </p>
                <table
                  className={styles.reportTable}
                  cellPadding="8"
                  cellSpacing={0}
                >
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
                            className={`${styles.teamLogo} ${
                              styles["team" + team.Name]
                            }`}
                          ></div>
                        </td>
                        <td>{getStatusFormatted(team.AHStatus)}</td>
                        <td>{getStatusFormatted(team.BUKStatus)}</td>
                        <td>
                          {getStatusFormatted(
                            team.SamvirkStatus,
                            report.SamvirkGoalPerSprint,
                          )}
                        </td>
                        <td>
                          {getResultFormatted(
                            team,
                            report.SamvirkGoalPerSprint,
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

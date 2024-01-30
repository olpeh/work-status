import useSWR from "swr";
import { Report, reports } from "./models/reports";
import { getFormattedDate, getFormattedDateTime } from "./utils/date";
import { getResultFormatted, getStatusFormatted } from "./utils/status";
import workLogo from "./assets/work-logo.svg";
import styles from "./App.module.css";
import { dummyLoadingReport } from "./data/dummyReport";
import html2canvas from "html2canvas";
import { useRef } from "react";

const isProd = process.env.NODE_ENV === "production";

const fetcher = async (url: string) => {
  let unsafeData;
  if (isProd) {
    const res = await fetch(url);
    unsafeData = await res.json();
  } else {
    // simulate slow network by waiting
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const data = await import("./data/test-reports.json");
    unsafeData = data.default;
  }

  const safeData = reports.parse(unsafeData);
  return safeData;
};

export const App = () => {
  const screenshotRef = useRef<HTMLDivElement>(null);
  const url = document
    .getElementById("work-root")
    ?.getAttribute("data-source-url");

  const { data, error, isLoading } = useSWR(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const downloadFile = (data: any, title: string) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = data;
    downloadLink.download = `${title}.png`;
    downloadLink.click();
  };

  const getScreenshot = (title: string) => {
    console.log("trying to take a screenshot");
    // This needs to be the element with the background color or its parent
    const screenshotTarget = document.querySelector("main");
    if (!screenshotTarget) {
      console.error("Could not find the element to screenshot");
      alert("Screenshotin luonti epäonnistui");
      return;
    }
    console.log(screenshotTarget);
    html2canvas(screenshotTarget)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((canvas: any) => {
        const base64image = canvas.toDataURL("image/png");
        // window.open(base64image, '_blank');
        // window.location.href = base64image;
        downloadFile(base64image, title);
      })
      .catch((e) => {
        console.error(e);
      });
  };

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
      <div className={styles.screenshotWrapper} ref={screenshotRef}>
        <button
          onClick={() => {
            screenshotRef.current?.remove();
            getScreenshot(data && data[0] ? data[0].Title : "work-tilanne");
          }}
        >
          Lataa kuvana
        </button>
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
  const ahTargetInSprint = 6015.97; // TODO: don't hard code this

  return (
    <li className={`${styles.report} report`} id={report.Title}>
      <h2 className={styles.reportTitle}>{report.Title}</h2>
      <p>
        {getFormattedDate(report.DateFrom)} – {getFormattedDate(report.DateTo)}
      </p>
      <p>Tulokset päivitetty: {getFormattedDateTime(report.ReportDate)}</p>
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
              <td>
                <div
                  className={
                    team.AHStatus.ContributionAmount > ahTargetInSprint
                      ? styles.targetReached
                      : ""
                  }
                >
                  {!isLoading
                    ? getStatusFormatted({ status: team.AHStatus })
                    : "–"}{" "}
                  /
                </div>
                <div
                  className={styles.targetInSprint}
                  title="AH Tavoite tällä etapilla per joukkue"
                >
                  {ahTargetInSprint.toLocaleString("fi-FI", {
                    maximumFractionDigits: 2,
                  })}
                  €**
                </div>
              </td>
              <td>
                <div className={styles.statusToday}>
                  {!isLoading
                    ? getStatusFormatted({
                        status: team.BUKStatus,
                        useOnTrackOnDateCount: true,
                      })
                    : "–"}
                  *
                </div>
                <div>
                  {!isLoading
                    ? getStatusFormatted({ status: team.BUKStatus })
                    : "–"}
                </div>
              </td>
              <td>
                {!isLoading
                  ? getStatusFormatted({
                      status: team.SamvirkStatus,
                      samvirkGoalPerSprint: report.SamvirkGoalPerSprint,
                    })
                  : "–"}
              </td>
              <td>
                <div className={styles.statusToday}>
                  {!isLoading
                    ? getResultFormatted({
                        team,
                        samvirkGoalPerSprint: report.SamvirkGoalPerSprint,
                        useOnTrackOnDateCount: true,
                      })
                    : "–"}
                  *
                </div>
                <div>
                  {!isLoading
                    ? getResultFormatted({
                        team,
                        samvirkGoalPerSprint: report.SamvirkGoalPerSprint,
                      })
                    : "–"}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.explanation}>
        <p>
          MyShare tavoite raportointihetkellä: {report.MyShareTargetOnDate}%
        </p>
        <p>* Tilanne raportointihetken tavoitteeseen nähden</p>
        <p>** AH-tavoite etapin aikana per tiimi</p>
      </div>
    </li>
  );
};

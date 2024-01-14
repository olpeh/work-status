import useSWR from "swr";
import { reports } from "./models/reports";
import { getFormattedDate } from "./utils/date";
import { getResult, getStatus } from "./utils/status";

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
  const url =
    "https://portal.bccsuomi.fi/wp-admin/admin-ajax.php?action=fetch_work_reports";

  const { data, error, isLoading } = useSWR(url, fetcher);

  console.log(data, error, isLoading);

  return (
    <div className="App">
      {isLoading && <p>Ladataan dataa...</p>}
      {error && <p>Virhe: {error}</p>}
      {data && (
        <div>
          <ul>
            {data.map((report) => (
              <div key={report.Title}>
                <h2>{report.Title}</h2>
                <li>
                  <p>
                    {getFormattedDate(report.DateFrom)} -
                    {getFormattedDate(report.DateTo)}
                  </p>
                  <table>
                    <thead>
                      <tr>
                        <td>Team</td>
                        <td>AH</td>
                        <td>BUK</td>
                        <td>Samvirk</td>
                        <td>Tulos</td>
                      </tr>
                    </thead>
                    <tbody>
                      {report.Teams.map((team) => (
                        <tr key={team.Name}>
                          <td>{team.Name}</td>
                          <td>{getStatus(team.AHStatus)}</td>
                          <td>{getStatus(team.BUKStatus)}</td>
                          <td>{getStatus(team.SamvirkStatus)}</td>
                          <td>{getResult(team)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

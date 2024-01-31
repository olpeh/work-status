import styles from "./styles.module.css";

type Props = {
  mode: "statusNow" | "statusForSprint";
  setMode: (mode: "statusNow" | "statusForSprint") => void;
};
export const Toggle = ({ mode, setMode }: Props) => {
  const toggleMode = () =>
    mode === "statusForSprint"
      ? setMode("statusNow")
      : setMode("statusForSprint");

  return (
    <>
      <div className={styles.toggleWrapper}>
        <button
          onClick={toggleMode}
          className={`${styles.toggleButton} ${
            mode === "statusForSprint" ? styles.active : ""
          }`}
          title="Valitse tilanne raportointihetken tavoitteeseen nähden tai etapin tavoitteeseen nähden"
        />
        <p>Etapin tilanne</p>
      </div>
      <p>
        {mode === "statusNow"
          ? "Tilanne raportointihetken tavoitteeseen nähden"
          : "Tilanne etapin tavoitteeseen nähden"}
      </p>
    </>
  );
};

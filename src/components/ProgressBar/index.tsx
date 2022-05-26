import "./styles.scss";

interface IProgressBarProps {
  percent: number;
}
const ProgressBar = ({ percent }: IProgressBarProps) => {
  const customStyles = {
    width: `${percent}%`,
  };

  return (
    <>
      <div className="progress-bar">
        <div className="progress-bar__inner" style={customStyles} />
      </div>
    </>
  );
};

export default ProgressBar;

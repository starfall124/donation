import { useState, useMemo } from "react";

import { GOAL_AMOUNT } from "./constants";
import { Notification, ProgressBar, Input } from "./components";
import "./App.scss";

function App() {
  const [amount, setAmount] = useState<number>(0);
  const [donors, setDonors] = useState<number>(0);

  const percent = useMemo(() => {
    return (amount / GOAL_AMOUNT) * 100;
  }, [amount]);

  const handleDonate = (donateAmount: number) => {
    setAmount((prev) => prev + donateAmount);
    setDonors((prev) => prev + 1);
  };

  return (
    <div className="container">
      <div className="container__body">
        <div className="container__body__notification">
          <Notification amount={amount} />
        </div>

        <div className="container__body__widget">
          <ProgressBar percent={percent} />

          <div className="container__body__widget__body">
            <h2 className="container__body__widget__body__title">
              Only four days left to fund this project
            </h2>

            <div className="container__body__widget__body__description">
              {donors > 0 ? (
                <>
                  Join the{" "}
                  <span className="container__body__widget__body__description__donors">
                    {donors}
                  </span>{" "}
                  other donors who have already supported this project.
                </>
              ) : (
                "Be the first donor to support this project."
              )}
            </div>

            <Input onDonate={handleDonate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

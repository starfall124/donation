import { useMemo } from "react";

import { numberWithCommas } from "../../utils";
import { GOAL_AMOUNT } from "../../constants";
import "./styles.scss";

interface INotificationProp {
  amount: number;
}
const Notification = ({ amount }: INotificationProp) => {
  const isFundCompleted = useMemo(() => {
    return amount - GOAL_AMOUNT >= 0;
  }, [amount]);

  return (
    <div className="notification">
      {isFundCompleted ? (
        "Fund is completed"
      ) : (
        <>
          <span className="notification__amount">
            <sup>$</sup>
            {numberWithCommas(GOAL_AMOUNT - amount)}
          </span>{" "}
          still needed to fund this project
        </>
      )}
    </div>
  );
};

export default Notification;

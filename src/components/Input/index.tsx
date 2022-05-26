import React, { useRef, useMemo, useState, useEffect } from "react";

import "./styles.scss";

interface IInputProps {
  onDonate: (param: number) => void;
}
const Input = ({ onDonate }: IInputProps) => {
  const [donateAmount, setDonateAmount] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const amountRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    amountRef.current?.focus();
  }, []);

  const canDonate = useMemo(() => {
    return !error && donateAmount >= 5;
  }, [error, donateAmount]);

  const handleChangeDonateAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!value) {
      setError("Donation amount must be at least $5");
      return setDonateAmount(0);
    }
    if (/^\d+$/.test(value)) {
      if (Number(value) < 5) setError("Donation amount must be at least $5");
      else setError("");
      setDonateAmount(Number(value));
    }
  };

  const handleDonate = () => {
    onDonate(donateAmount);
  };

  return (
    <div className="input">
      <div className={`input__container ${error && "input__container--error"}`}>
        <span className="input__container__currency">$</span>
        <input
          ref={amountRef}
          className="input__container__amount"
          type="text"
          value={donateAmount}
          onChange={handleChangeDonateAmount}
        />
        <button
          className={`input__container__action ${
            !canDonate && "input__container__action--disabled"
          }`}
          disabled={!canDonate}
          onClick={handleDonate}
        >
          Give Now
        </button>
      </div>
      <div className="input__error">{error}</div>
    </div>
  );
};

export default Input;

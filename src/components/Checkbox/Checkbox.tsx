import styles from "./_checkbox.module.scss";

interface CheckboxProps {
  checkToggleFunction: (checkedStatus?: boolean) => void;
  children?: string;
}

const Checkbox = ({ checkToggleFunction, children }: CheckboxProps) => {
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id="checkbox"
        onChange={(event) => checkToggleFunction(event.target.checked)}
      />
      <label htmlFor="checkbox">{children}</label>
    </div>
  );
};

export default Checkbox;

import styles from "./button.module.scss";
import UseButtonHooks from "../Button/button.hooks";

interface ButtonProps {
  color: string;
  label: string;
  onClick?: () => void;
  iconSrc?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { color, label, onClick, iconSrc } = props;
  const { colorStyles } = UseButtonHooks({ color });

  return (
    <button
      onClick={onClick}
      style={colorStyles.button}
      className={styles.customBtn}
    >
      <img src={iconSrc} />
      {label}
    </button>
  );
};
export default Button;

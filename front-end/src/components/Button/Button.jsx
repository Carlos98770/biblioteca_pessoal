import "./Button.css";

export function Button({ text, onClick, variant = "primary" }) {
  return (
    <button
      className={`button button-${variant}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

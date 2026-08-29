type TokenSwatchProps = {
  name: string;
  token: string;
  value: string;
};

export default function TokenSwatch({ name, token, value }: TokenSwatchProps) {
  return (
    <div className="oc-swatch">
      <div className="oc-swatch__color" style={{ background: `var(${token})` }} />
      <strong>{name}</strong>
      <small>{token} · {value.toUpperCase()}</small>
    </div>
  );
}

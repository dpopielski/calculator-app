interface IField {
  char: string;
  cb: (char: string) => void;
}

export default function CalcField({ char, cb }: IField) {
  return (
    <div className="calculator__box" onClick={() => cb(char)}>
      <span className="box-char">{char}</span>
      <div className="box-border"></div>
    </div>
  );
}

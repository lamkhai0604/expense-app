import "./style.css";

interface ICardProps {
  className: string;
  children: React.ReactNode
}

const Card = ({ className, children }: ICardProps) => {
  const classes = "card " + className;

  return <div className={classes}>{children}</div>;
};

export default Card;

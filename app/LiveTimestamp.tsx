import ReactTimeago from "react-timeago";

type Props = {
  time: string;
};

const LiveTimestamp = ({ time }: Props) => {
  return <ReactTimeago date={time} />;
};

export default LiveTimestamp;

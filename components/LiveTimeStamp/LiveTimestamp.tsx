"use client";
import TimeAgo from "react-timeago";

type LiveTimestampProps = {
  time: string;
};
export default function LiveTimestamp({ time }: LiveTimestampProps) {
  return <TimeAgo date={time} />;
}

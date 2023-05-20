import { Frames } from "../../assets/test";
import { useImage } from "../hooks";

const AirpodsArray = () => {
  const [AA0, AA0S] = useImage(Frames[0]);
  const [AA1, AA1S] = useImage(Frames[1]);
  const [AA2, AA2S] = useImage(Frames[2]);
  const [AA3, AA3S] = useImage(Frames[3]);
  const [AA4, AA4S] = useImage(Frames[4]);
  const [AA5, AA5S] = useImage(Frames[5]);
  const [AA6, AA6S] = useImage(Frames[6]);
  const [AA7, AA7S] = useImage(Frames[7]);
  const [AA8, AA8S] = useImage(Frames[8]);

  const newImages = Array.of(
    [AA0, AA0S],
    [AA1, AA1S],
    [AA2, AA2S],
    [AA3, AA3S],
    [AA4, AA4S],
    [AA5, AA5S],
    [AA6, AA6S],
    [AA7, AA7S],
    [AA8, AA8S],
  );
  return newImages;
};

export default AirpodsArray;

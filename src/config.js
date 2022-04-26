import img1 from "./asset/images/sec1.png";
import img2 from "./asset/images/sec2.png";
import img3 from "./asset/images/sec3.png";
import crd from "./asset/images/card.png";
import "./style/card.css";

// export const btnSize = {
//   small: "w-[150px]",
//   med: "w-[250px] bg-red-400",
//   large: "w-[300px]",
// };
// export const btnPosition = {
//   type1: " absolute top-[8px] left-4",
//   type2: "absolute left-[30px]  top-[102px]",
//   type3: "absolute left-[75px]  top-[178px]",
// };

export const data = [
  {
    id: 1,
    name: "adnan",
    image: <img src={img1} className="w-32 h-32" />,
  },
  {
    id: 2,
    name: "kaleem",
    image: <img src={img2} className="w-32 h-32" />,
  },
  {
    id: 3,
    name: "wajid",
    image: <img src={img3} className="w-32 h-32" />,
  },
];

export const card = [
  {
    image: <img src={crd} className="Card__img" />,
    head: "traditional",
    text: "Lorem Ipsum is simply dummy text of the printing text of the printing text of the printing and typesetting industry. Lorem Ipsuma type specimen book",
  },
  {
    image: <img src={crd} className="Card__img" />,
    head: "chipotly",
    text: "Lorem Ipsum is simply dummy text of the printing text of the printing text of the printing and typesetting industry. Lorem Ipsuma type specimen book",
  },
  {
    image: <img src={crd} className="Card__img" />,
    head: "salsa picante",
    text: "Lorem Ipsum is simply dummy text of the printing text of the printing text of the printing and typesetting industry. Lorem Ipsuma type specimen book",
  },
];

export const FilterRecord = [
  {
    id: 1,
    option: "web",
    image: img1,
    subtitle: "i am ali",
  },
  {
    id: 2,
    option: "web",
    image: img2,
    subtitle: "i am ahmad",
  },
  {
    id: 3,
    option: "app",
    image: img3,
    subtitle: "i am rahat",
  },
  {
    id: 4,
    option: "ios",
    image: crd,
    subtitle: "i am abid",
  },
  {
    id: 5,
    option: "app",
    image: img1,
    subtitle: "i am ali",
  },
];

export const sliderData = [
  {
    message:
      "I have never had an elote. But if they take like this then i love elotes!",
    image: crd,
    name: "Kaleem Ullah.",
    Specialization: "Product Manager",
  },
  {
    message:
      "These taste so aunthentic reminds me of visiting my abuela in oaxaca !",
    image: crd,
    name: "Shafi Ullah.",
    Specialization: "Product Designer",
  },
  {
    message:
      "I have never had an elote. But if they take like this then i love elotes!",
    image: crd,
    name: "Kaleem Ullah.",
    Specialization: "Product Manager",
  },
  {
    message:
      "These taste so aunthentic reminds me of visiting my abuela in oaxaca !",
    image: crd,
    name: "Shafi Ullah.",
    Specialization: "Product Designer",
  },
  {
    message:
      "I have never had an elote. But if they take like this then i love elotes!",
    image: crd,
    name: "Kaleem Ullah.",
    Specialization: "Product Manager",
  },
  {
    message:
      "These taste so aunthentic reminds me of visiting my abuela in oaxaca !",
    image: crd,
    name: "Shafi Ullah.",
    Specialization: "Product Designer",
  },
  // {
  //   message:
  //     "I have never had an elote. But if they take like this then i love elotes!",
  //   image: crd,
  //   name: "Kaleem Ullah.",
  //   Specialization: "app",
  // },
];

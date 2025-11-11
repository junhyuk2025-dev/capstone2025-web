import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

const FigmaApp = dynamic(() => import("@/figma/FigmaApp"), { ssr: false });

export default function Home() {
  return <FigmaApp />;
}

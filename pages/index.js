import Head from "next/head";
import { VRSection, CreationSection } from "../Components";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-2">
      <Head>
        <title>loopStudio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VRSection />
      <CreationSection />
    </div>
  );
}

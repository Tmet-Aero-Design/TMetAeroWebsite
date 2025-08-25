"use client";
import dynamic from "next/dynamic";

const SponsorshipPackageViewer = dynamic(
  () => import("./SponsorshipPackage"),
  { ssr: false }
);

export default function Page() {
  return <SponsorshipPackageViewer />;
}

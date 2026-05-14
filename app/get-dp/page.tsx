import DPGenerator from "@/components/DPGenerator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get DP | CareerFest 2026",
  description: "Generate your unique BuildWithAI Ilorin 2025 Display Picture",
};

export default function GetDPPage() {
  return <DPGenerator />;
}

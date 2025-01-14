"use client";

import { IntroduceLoad } from "@/common/components/molecules/loader";
import { IntroPage } from "@/common/components/pages/home";
import { useState } from "react";

export default function Home() {
const [loading, setLoading] = useState(true);
  return loading 
  ? ( <IntroduceLoad setLoading={setLoading}/> )
  : ( <IntroPage/> );
}

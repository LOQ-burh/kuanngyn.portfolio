"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { gsap, Expo } from "gsap";
import { AppContainer, Loading, Follow, ProgressBar, Content } from "./styled";

export const IntroduceLoad = ({ setLoading }: {setLoading: Dispatch<SetStateAction<boolean>>}) => {
  const [counter, setCounter] : [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(0);
  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter: number) => {
        if(counter < 100) {
            return counter + 1
        } else {
            clearInterval(count);
            setCounter(100);
            reveal();
            return counter;
        }
      });
    }, 25);
    return () => clearInterval(count);
  }, []);

  async function reveal() {
    const t1 =  gsap.timeline({});

      await t1
      .to(".follow", {
        width: "100%",
        ease: Expo.easeInOut,
        duration: 1.2,
        delay: 0.5,
      })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 });
    if (!t1.isActive()) {
       setLoading(false);
    }
  }

  return (
    <AppContainer>
      <Loading>
        <Follow className="follow"></Follow>
        <ProgressBar
          className="hide"
          id="progress-bar"
          style={{ width: counter + "%" }}
        ></ProgressBar>
      </Loading>

      <Content className="content"></Content>
    </AppContainer>
  );
};

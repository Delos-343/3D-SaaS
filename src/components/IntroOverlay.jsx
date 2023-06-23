/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Scroll, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"
import { Link } from "react-router-dom"

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-transparent rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  )
}

export const IntroOverlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen text-gray-800">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-['Mars'] pb-5 text-lg">
            <span className="text-4xl font-['Evaa']">
              Halo,
            </span>
            <br />
            Team FEDEX
          </h1>
          <p className="text-gray-500"> Welcome to Our Final Project </p>
          <p className="mt-3 font-light"> We design custom, personal landing pages with a creative twist! </p>
          <a href="#members">
            <p className="animate-bounce mt-6 text-4xl font-bold"> ↾ </p>
          </a>
        </Section>
        <Section id="members" right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-['Mars'] pb-5">
            Meet our Team
          </h1>
          <p className="mt-3 font-light font-['Aquire']">
            <b> Mohammed Fachry Dwi Handoko </b>
          </p>
          <ul className="leading-9">
            <li> 5 0 2 5 2 0 1 1 5 9 </li>
          </ul>
          <p className="mt-3 font-light font-['Aquire']">
            <b> Faraihan Rafi Adityawarman </b>
          </p>
          <ul className="leading-9">
            <li> 5 0 2 5 2 1 1 0 7 4 </li>
          </ul>
          <p className="mt-3 font-light font-['Aquire']">
            <b> Pascal Roger Junior Tauran </b>
          </p>
          <ul className="leading-9">
            <li> 5 0 2 5 2 1 1 0 7 2 </li>
          </ul>
          <a href="#about">
            <p className="animate-bounce mt-6 text-4xl font-bold"> ↾ </p>
          </a>
        </Section>
        <Section id="about" opacity={opacityLastSection}>
          <h1 className="font-semibold font-['Mars'] pb-5">
            See Our Page
          </h1>
          <p className="text-gray-500 font-light">
            Start your journey here and now!
          </p>
            <Link to="/home" className="flex mt-6 justify-start items-center align-middle">>
                ⇀
            </Link>
        </Section>
      </div>
    </Scroll>
  );
};

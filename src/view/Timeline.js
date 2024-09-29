import "./timeline.css";
import React from "react";

const Timeline = () => {
  const events = [
    { year: 2002, description: "Megszülettem Budapesten" },
    {
      year: 2017,
      description:
        "Elvégeztem az általános iskolát és sikeres középfokú angol nyelvvizsgát tettem",
    },
    {
      year: 2021,
      description: "Éretsségiztem az alap tantárgyakból és  emelt fizikából",
    },
    { year: 2022, description: "Szoftver fejlesztő és tesztelő technikum" },
    {
      year: 2024,
      description: "Mérökinformatikus szakon tanulok a Dunaújvárosi egyetemen",
    },
  ];

  return (
    <div id="timeline">
      {events.map((event, index) => (
        <div
          key={index}
          className="dot"
          style={{ left: `${(index + 1) * 16.5}%` }}
        >
          <span></span>
          <date>{event.year}</date>
          <p>{event.description}</p>
        </div>
      ))}
      <div className="inside"></div>
    </div>
  );
};

export default Timeline;

/**const events = [
    { year: 2002, description: "I was born in Budapest" },
    { year: 2017, description: "Finish primary school, Successful language exam" },
    { year: 2021, description: "Graduation and advanced physics graduation" },
    { year: 2022, description: "Software development and testing school" },
    { year: 2024, description: "I started studying Computer Science Engineer at the University of Dunaújváros" },
  ]; */

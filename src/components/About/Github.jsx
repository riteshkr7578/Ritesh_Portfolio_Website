import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div
      className="flex flex-col items-center justify-center pb-2 text-white"
      style={{
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4 text-3xl md:text-4xl font-bold text-center mb-6">
        Days I <strong className="text-purple-primary">Code</strong>
      </h1>
      <div className="flex justify-center">
        <GitHubCalendar
          username="riteshkr7578"
          blockSize={30}
          blockMargin={10}
          color="#c084f5"
          fontSize={20}
        />
      </div>
    </div>
  );
}

export default Github;

import React, { useEffect } from "react";
import "/src/components/Home.css";

const Home = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.31/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div id="main">
      <section>
        <spline-viewer
          className="spline"
          url="https://prod.spline.design/6SMhyKFA1PgFr9vC/scene.splinecode"
        ></spline-viewer>
      </section>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
export default function JupyterLite() {
  return (
    <iframe
      src="https://jupyterlite.github.io/demo/repl/index.html?kernel=python&toolbar=1"
      width="100%"
      height="500px"
    ></iframe>
  );
}

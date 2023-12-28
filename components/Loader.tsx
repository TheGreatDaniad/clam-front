import React, { CSSProperties } from 'react'
import {CircleLoader} from "react-spinners";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};
type Props = {text:string}

export default function Loader({ text }: Props) {
  return (
    <div style={{ backgroundColor: "#ffffffbb", zIndex: 10000, position: "fixed", height: "100%", width: "100%", left: "-0%", top: "0", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div>
        <CircleLoader

          cssOverride={override}
          size={70}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <p className="mt-4 text-gray-700">{text}</p>
 
      </div>
    </div>
  )
}
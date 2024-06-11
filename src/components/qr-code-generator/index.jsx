import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const handleGenerateQrCode = () => {
    setQrCode(input);
    setInput("");
  };
  return (
    <section className="qr_code container">
      <h2 className="heading">QR code Generator</h2>
      <div className="input_box">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
          className="btn"
        >
          generate
        </button>
      </div>
      <div className="output_box">
        <QRCode id="qr-code-value" value={qrCode} />
      </div>
    </section>
  );
}

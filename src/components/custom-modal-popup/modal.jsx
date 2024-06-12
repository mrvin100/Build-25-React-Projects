export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal_content">
        <div className="header">
          <i className="bx bx-x icon" onClick={onClose}></i>
          <h2 className="heading">{header ? header : "Header"}</h2>
        </div>
        <div className="body">{body ? body : <p>This is a modal body</p>}</div>
        <div className="footer">
          {footer ? footer : <h2 className="heading">Footer</h2>}
        </div>
      </div>
    </div>
  );
}

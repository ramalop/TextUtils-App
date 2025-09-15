

export default function Alert(props) {
  return (
    <div className="alert-container" style={{ height: "30px", marginTop: "80px", zIndex: "1" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.type}</strong>:{props.alert.message}
        </div>
      )}
    </div>
  );
}

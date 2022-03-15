function Button(props) {
  /* 
  props: {
    className: css classes,
    value: innerText,
    onClick: onClick handler function
  }
  */

  return (
    <div
      className={props.className}
      onClick={() => {
        props.onClick(props.value)
      }}
    >
    <span> {props.value} </span>
    </div>
  );
}

export default Button;
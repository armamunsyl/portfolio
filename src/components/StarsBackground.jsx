export default function StarsBackground() {
  const crossStars = [
    { top: "12%", left: "20%" },
    { top: "28%", left: "72%" },
    { top: "55%", left: "82%" },
    { top: "70%", left: "35%" },
  ];

  const dotStars = [
    { top: "18%", left: "50%" },
    { top: "42%", left: "10%" },
    { top: "65%", left: "78%" },
    { top: "80%", left: "28%" },
    { top: "90%", left: "60%" },
  ];

  const squareStars = [
    { top: "22%", left: "85%" },
    { top: "48%", left: "42%" },
    { top: "75%", left: "15%" },
    { top: "88%", left: "33%" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {crossStars.map((pos, i) => (
        <div
          key={"cross-" + i}
          className="star-cross"
          style={{ top: pos.top, left: pos.left }}
        />
      ))}

      {dotStars.map((pos, i) => (
        <div
          key={"dot-" + i}
          className="star-dot"
          style={{ top: pos.top, left: pos.left }}
        />
      ))}

      {squareStars.map((pos, i) => (
        <div
          key={"square-" + i}
          className="star-square"
          style={{ top: pos.top, left: pos.left }}
        />
      ))}
    </div>
  );
}

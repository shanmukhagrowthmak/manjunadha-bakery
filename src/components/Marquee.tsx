const items = [
  "Fresh Buns",
  "Khara Biscuits",
  "Since 2012",
  "Dil Pasand",
  "Baked Daily",
  "Rusk",
  "Butter Cookies",
  "Veg Puff",
  "Plum Cake",
  "Made with Love",
  "Cream Buns",
  "Koyyalagudem",
];

export default function Marquee() {
  return (
    <div
      style={{ background: "#7A2421", padding: "0.75rem 0", overflow: "hidden" }}
      aria-hidden="true"
    >
      <div
        className="flex animate-marquee"
        style={{ width: "max-content", willChange: "transform" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 whitespace-nowrap px-5"
          >
            <span
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#DDA34B",
              }}
            >
              {item}
            </span>
            <span style={{ color: "rgba(221,163,75,0.4)", fontSize: "0.45rem" }}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

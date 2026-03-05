"use client";

const items = [
    "✦ NEW COLLECTION",
    "✦ FINE JEWELRY",
    "✦ ICONIC LUXE",
    "✦ LIMITED EDITION",
    "✦ NEW COLLECTION",
    "✦ FINE JEWELRY",
    "✦ ICONIC LUXE",
    "✦ LIMITED EDITION",
    "✦ NEW COLLECTION",
    "✦ FINE JEWELRY",
    "✦ ICONIC LUXE",
    "✦ LIMITED EDITION",
    "✦ NEW COLLECTION",
    "✦ FINE JEWELRY",
    "✦ ICONIC LUXE",
    "✦ LIMITED EDITION",
];

export default function MarqueeTicker() {
    return (
        <div
            id="marquee"
            aria-label="Ticker: New Collection • Fine Jewelry • Iconic Luxe • Limited Edition"
            style={{
                background: "var(--dark)",
                overflow: "hidden",
                padding: "17px 0",
                position: "relative",
                zIndex: 10,
                borderTop: "1px solid rgba(201,168,76,0.07)",
                borderBottom: "1px solid rgba(201,168,76,0.07)",
                animation: "fadeIn 1s 0.3s both",
            }}
        >
            <div
                className="marquee-track"
                style={{ animationDuration: "30s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "running"; }}
            >
                {items.map((item, i) => (
                    <span
                        key={i}
                        style={{
                            fontFamily: "var(--font-montserrat, Montserrat, sans-serif)",
                            fontWeight: 300,
                            fontSize: "0.58rem",
                            letterSpacing: "0.36em",
                            textTransform: "uppercase",
                            color: i % 4 === 2 ? "#E8C84A" : "var(--gold)",
                            padding: "0 40px",
                            whiteSpace: "nowrap",
                            flexShrink: 0,
                            opacity: i % 4 === 2 ? 1 : 0.7,
                            transition: "opacity 0.6s ease, color 0.6s ease",
                        }}
                    >
                        {item}
                    </span>
                ))}
            </div>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        #marquee:hover .marquee-track span {
          opacity: 1 !important;
          color: #E8C84A !important;
        }
      `}</style>
        </div>
    );
}

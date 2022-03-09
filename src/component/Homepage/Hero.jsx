import monsti from "../../plant-photos/homepage-decor/monsti-big.jpg";

export default function Hero() {
  return (
    <div className="Hero">
      <div
        style={{
          width: "100vw",
          height: "86vh",
          backgroundImage: `url(${monsti})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <button>hi button</button>
      </div>
    </div>
  );
}

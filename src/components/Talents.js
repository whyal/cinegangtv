import Talent from "./Talent";

const Talents = () => {
  return (
    <div className="my-48">
      <h1 className="font-semibold text-7xl text-center mb-4">Talents</h1>
      <div className="mt-24 flex flex-wrap justify-center">
        <Talent name="joe" title="CEO" />
        <Talent name="john" title="Designer" />
        <Talent name="jane" title="HR" />
      </div>
    </div>
  );
};

export default Talents;

import Talent from "./Talent";

const Talents = () => {
  return (
    <div className="w-4/5 mx-auto">
      <h1 className="font-semibold text-4xl text-[#7149C6] mb-6">Talents</h1>
      <div className="flex flex-wrap">
        <Talent name="joe" title="CEO" />
        <Talent name="john" title="Designer" />
        <Talent name="jane" title="HR" />
      </div>
    </div>
  );
};

export default Talents;

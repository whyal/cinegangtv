import Talent from "./Talent";

const Talents = () => {
  return (
    <div id="talents">
      <h1 className="font-semibold text-4xl text-[#7149C6] mb-6">Talents</h1>
      <div className="flex flex-wrap">
        <Talent name="joe" title="CEO" />
        <Talent name="john" title="Designer/Product Manager" />
        <Talent name="joey" title="HR" />
      </div>
    </div>
  );
};

export default Talents;

export function SectionTitle({
  title,
  subTitle,
  description,
}: {
  title: string;
  subTitle: string;
  description: string;
}) {
  return (
    <div className="text-cente items-center flex flex-col text-4xl xs:text-6xl lg:text-[76px] w-full">
      <h1 className="bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text font-bold font-manrope ">
        {title}
      </h1>
      <h1>{subTitle}</h1>
      <p className="text-center max-w-3xl text-stone-400  text-[14px] xs:text-base px-4 sm:text-lg lg:text-[24px] mt-4 sm:mt-6 lg:mt-12 font-medium font-manrope leading-snug">
        {description}
      </p>
    </div>
  );
}

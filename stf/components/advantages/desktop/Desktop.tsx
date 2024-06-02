const Desktop = () => {
  return (
    <>
      <div
        className="bg-advantages-background absolute left-0 top-[380px] z-[-1] h-[328px] w-full max-w-[445px] bg-cover bg-center"
        style={{
          backgroundImage: "url('assets/images/mobile_electricity.png')",
        }}
      />

      <div
        className="bg-advantages-background absolute right-0 top-[380px] z-[-1] h-[328px] w-full max-w-[445px] bg-cover bg-center"
        style={{
          backgroundImage: "url('assets/images/reverse_electricity.png')",
        }}
      />
    </>
  );
};

export default Desktop;

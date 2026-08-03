export function TitleWrapper({ children }) {
  return (
    <div className="mb-8 font-poppinsSemibold">
      <h2 className="text-3xl lg:text-4xl tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-3">
        {children}
      </h2>
      <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-white/90 to-transparent rounded-full shadow-[0_0_15px_rgba(255,255,255,0.9)]"></div>
    </div>
  );
}

export default TitleWrapper;
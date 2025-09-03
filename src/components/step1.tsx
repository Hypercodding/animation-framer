import WeightCurve from "./weightCurve";

const Step1 = () => {
  return (
    <div className="flex h-[32rem] flex-col items-center justify-center text-center space-y-6 px-4 mt-8">
          {/* Weight Display */}
                      <div className="flex items-start mt-[0px]">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl text-white leading-none" style={{ fontFamily: 'var(--font-inter)' }}>
              170
            </h1>
            <span className="text-lg sm:text-xl md:text-4xl lg:text-5xl italic text-white opacity-50 ml-1 mt-1 sm:mt-2 md:mt-0 lg:mt-[-4px]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              lbs
            </span>
          </div>
        
          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl lg:text-3xl font-sans text-white mt-[-10px]" style={{ fontFamily: 'var(--font-montserrat)' }}>
            is achievable with Novi
          </p>
        
          {/* Curve Component */}
          <div className="w-full max-w-3xl mt-15">
            <WeightCurve />
          </div>
        
          {/* Supporting Text */}
          <p className="max-w-xl text-base sm:text-base md:text-sm text-gray-200 leading-relaxed mt-8 text-left">
  Novi's prescription program is scientifically proven to help you reach 
  your goal weight 58.5% faster.
</p>
        </div>
  );
};

export default Step1;
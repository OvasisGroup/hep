import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-auto md:h-[80vh] flex items-center py-12 md:py-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col space-y-6 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none">
              Unlocking Home
              <br />
              Equity for Kenyan
              <br />
              Families
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-xl">
              Kenya's first Shariah-compliant,
              <br />
              blockchain-enabled home equity product.
            </p>
            <div className="pt-4 flex flex-col gap-2 items-start">
              <p className="text-sm text-muted-foreground">Built on</p>
              <Image
                src="/images/cardano.svg"
                alt="Powered by Cardano"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-125 order-1 lg:order-2 p-8 mr-24">
            <Image
              src="/images/sharia.png"
              alt="Home Equity"
              fill
              className="object-cover rounded-3xl border-2 border-secondary"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

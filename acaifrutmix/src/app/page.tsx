import Image from "next/image";

export default function HomePage() {
  return (
    <>      
      {/* WhatsApp Button */}
      <link
        rel="stylesheet" 
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <a
        href="https://wa.me/5521997378714?text=Olá,Quero saber mais!"
        style={{
          position: 'fixed',
          width: '50px', // reduzido para mobile
          height: '50px', // reduzido para mobile
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25d366',
          color: '#FFF',
          borderRadius: '50px',
          textAlign: 'center',
          fontSize: '25px',
          boxShadow: '1px 1px 2px #888',
          zIndex: 1000,
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i style={{ marginTop: '12px' }} className="fa fa-whatsapp"></i>
      </a>
      <div className='mx-auto w-full max-w-[1500px] px-4'>
        <Home />
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
      </div>
    </>
  );
}

function Home() {
  return (
    <div className='relative bg-gradient-to-br from-purple-500 to-purple-700 text-white'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: "url('/img/ip/parte_01.png')" }}
      />
      <div className='flex flex-col items-center px-4 md:flex-row md:justify-between'>
        <div className='mb-10 md:mb-20 relative z-10 text-lg mt-4'>
          <img 
            src="/img/ip/logoacai.png" 
            alt="Logo" 
            className="mx-auto mb-4 md:mb-10" 
            width={80} // reduzido para mobile
            height={80} 
          />
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left'>
            Conheça o nosso açaí 100% natural
            <br /> livre de xarope
          </h1>

          <a href="https://pedido.anota.ai/loja/quentinha-frut-mix?f=ms">
            <button className="mt-6 md:mt-10 bg-customYellow text-black rounded-lg py-2 md:py-3 px-10 md:px-16">
              Peça Agora
            </button>
          </a>
        </div>

        <div className="w-full md:w-auto mt-6 md:mt-0">
          <img src="/img/ip/copoacai.png" alt="Copo de Açaí" className="w-full max-w-xs mx-auto md:max-w-lg" />
        </div>
      </div>
    </div>
  ); 
}

function SectionTwo() {
  return (
    <div
      className="relative bg-gradient-to-br from-purple-500 to-purple-700 text-white py-10 md:py-20"
      style={{
        backgroundImage: "url('/img/ip/parte_02.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12">Nossas Opções</h1>
      <div className="flex flex-wrap justify-center gap-4 md:space-x-6">
        {/* Card Açaí com Morango */}
        <div className="w-40 md:w-60 bg-customPurple rounded-lg shadow-lg overflow-hidden text-center">
          <div className="bg-red-400 text-black py-2 text-lg font-semibold">Morango</div>
          <img
            src="/img/ip/acaimorango.png"
            alt="Açaí com morango"
            className="w-full h-32 md:h-60 object-cover"
          />
        </div>

        {/* Card Açaí de Banana */}
        <div className="w-40 md:w-60 bg-customPurple rounded-lg shadow-lg overflow-hidden text-center">
          <div className="bg-yellow-300 text-black py-2 text-lg font-semibold">Banana</div>
          <img
            src="/img/ip/acaibanana.png"
            alt="Açaí de banana"
            className="w-full h-32 md:h-60 object-cover"
          />
        </div>

        {/* Card Açaí Natural */}
        <div className="w-40 md:w-60 bg-customPurple rounded-lg shadow-lg overflow-hidden text-center">
          <div className="bg-green-400 text-black py-2 text-lg font-semibold">Natural</div>
          <img
            src="/img/ip/acainatural.png"
            alt="Açaí Natural"
            className="w-full h-32 md:h-60 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function SectionThree() {
  return (
    <div className="relative bg-gradient-to-br from-purple-500 to-purple-700 text-white py-10 md:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/ip/parte_03.jpeg')",
        }}
      />

      <div className="flex flex-col items-center md:flex-row md:justify-between relative z-10 mx-4 md:mx-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-4 md:mb-6">Um pouco da nossa história</h1>
        <div className="w-full md:w-auto max-w-xs md:max-w-md mx-auto md:mx-0">
          <img src="/img/ip/loja.jpeg" alt="Copo de Açaí" className="w-full h-auto object-contain" />
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p className="text-lg md:text-4xl">
            Uma paixão que começou há mais de 10 anos. Temos opções 100% naturais recheadas de toppings a sua escolha.
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionFour() {
  return (
    <div className="relative bg-cover bg-center min-h-[30vh] md:min-h-[50vh]" style={{ backgroundImage: "url('/img/ip/parte_04.jpeg')" }}> 
    </div>
  );
}

function SectionFive() {
  return (
    <div className="bg-white py-8 md:py-16 px-4 md:px-10">
      <div className="text-center mb-4 md:mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-black">Feedback dos clientes</h2>
        <img src="/img/ip/avaliacao.png" alt="Imagem do Título" className="mx-auto mb-4 md:mb-8" />
      </div>

      <div className="flex flex-col md:flex-row items-center md:justify-between space-y-6 md:space-y-0">
        <div className="w-full md:w-1/2">
          <img src="/img/ip/loja.jpeg" alt="Loja" className="w-full md:w-4/5 h-auto object-cover" />
        </div>
        <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
          <p className="text-2xl md:text-5xl leading-relaxed">
            Venha experimentar <span className="text-custompurple">o Açaí mais saudável do Rio</span>, localizado no Recreio ou peça pelo delivery!
          </p>
          <a href="https://pedido.anota.ai/loja/quentinha-frut-mix?f=ms">
            <button className="mt-4 md:mt-10 bg-customYellow text-black rounded-lg py-2 md:py-3 px-10 md:px-16">
              Peça Agora
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

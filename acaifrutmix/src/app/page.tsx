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
          width: '60px',
          height: '60px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#25d366',
          color: '#FFF',
          borderRadius: '50px',
          textAlign: 'center',
          fontSize: '30px',
          boxShadow: '1px 1px 2px #888',
          zIndex: 1000,
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i style={{ marginTop: '16px' }} className="fa fa-whatsapp"></i>
      </a>
      <div className='mx-auto w-full max-w-[1500px]'>
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
    <div className=' relative bg-gradient-to-br from-purple-500 to-purple-700 text-white'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: "url('/img/ip/parte_01.png')" }}
      />
      <div className='flex flex-col items-center px-10 md:flex-row md:justify-between'>
        <div className='mb-20 relative z-10 text-lg xl:ml-20 xxl:ml-40 mt-4'>
          <img 
            src="/img/ip/logoacai.png" 
            alt="Logo" 
            className="mx-auto mb-10" 
            width={120} 
            height={120} 
          />
          <h1 className='text-4xl font-bold md:text-5xl text-center text-justify'>
            Conheça o nosso açaí 100% natural
            <br /> livre de xarope
          </h1>

          <a href="https://pedido.anota.ai/loja/quentinha-frut-mix?f=ms" ><button className="mt-10 bg-customYellow text-black items-center text-center ml-40 rounded-lg py-3 px-16">
            Peça Agora
          </button></a>
        </div>

        <div className="s:w-50px relative z-10 mt-10 md:mt-0 xl:mr-40 xxl:mr-60">
          <img src="/img/ip/copoacai.png" alt="Copo de Açaí" width={1000} height={200} />
        </div>
      </div>
    </div>
  ); 
}

function SectionTwo() {
  return (
    <div
      className="relative bg-gradient-to-br from-purple-500 to-purple-700 text-white py-20"
      style={{
        backgroundImage: "url('/img/ip/parte_02.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-4xl font-bold text-center mb-12">Nossas Opções</h1>
      <div className="flex flex-wrap justify-center space-x-6">
        {/* Card Açaí com Morango */}
        <div className="w-60 bg-customPurple rounded-lg shadow-lg overflow-hidden text-center relative">
          <div
            className="bg-red-400 text-black py-2 text-lg font-semibold"
          >
            Morango
          </div>
          <img
            src="/img/ip/acaimorango.png"
            alt="Açaí com morango"
            className="w-full h-100 object-cover"
          />
        </div>

        {/* Card Açaí de Banana */}
        <div className="w-60 bg-customPurple rounded-lg shadow-lg overflow-hidden text-center relative">
          <div
            className="bg-yellow-300 text-black py-2 text-lg font-semibold"
          >
            Banana
          </div>
          <img
            src="/img/ip/acaibanana.png"
            alt="Açaí de banana"
            className="w-full h-100 object-cover"
          />
        </div>

        {/* Card Açaí Natural */}
        <div className="w-60 bg-customPurple rounded-lg shadow-lg overflow-hidden text-center relative">
          <div
            className="bg-green-400 text-black py-2 text-lg font-semibold"
          >
            Natural
          </div>
          <img
            src="/img/ip/acainatural.png"
            alt="Açaí Natural"
            className="w-full h-100 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function SectionThree() {
  return (
    <div className="relative bg-gradient-to-br from-purple-500 to-purple-700 text-white min-h-[50vh] pt-20 pb-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/ip/parte_03.jpeg')",
        }}
      />

      <div className="flex flex-col items-center md:flex-row md:justify-between md:space-x-4 relative z-10 ml-20 mt-10 mb-10">
        <h1 className="text-4xl font-bold md:text-4xl text-white text-center mb-6 absolute top-0 left-1/2 transform -translate-x-1/2">
          Um pouco da nossa história
        </h1>
        <div className="relative z-10 mt-10 md:mt-16 xl:mr-20 w-full max-w-xs md:max-w-md ml-10">
          <img
            src="/img/ip/loja.jpeg"
            alt="Copo de Açaí"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="text-center md:text-left mt-4 relative z-10 bg-opacity-70 px-4 rounded-xl md:ml-4">
          <p className="text-4xl text-white mb-8">
            Uma paixão que começou há mais de 10 anos. Temos opções 100% naturais recheadas de toppings a sua escolha.
          </p>
        </div>
      </div>
    </div>
  );
}


function SectionFour() {
  return (
    <div className="relative bg-cover bg-center min-h-[50vh]" style={{ backgroundImage: "url('/img/ip/parte_04.jpeg')" }}>
      <img
        src="/img/ip/wave.png"
        alt="Wave"
        className="absolute inset-x-0 bottom-0 h-1/3 w-full object-cover"
      />
    </div>
  );
}


function SectionFive() {
  return (
    <div className="bg-white py-16">
      
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 text-black">Feedback dos clientes</h2>
        <img
          src="/img/ip/avaliacao.png" 
          alt="Imagem do Título"
          className="mx-auto mb-8"
        />
      </div>

      <div className="flex items-center justify-between px-10">
        <div className="w-1/2 "> 
          <img
            src="/img/ip/loja.jpeg" 
            alt="Loja"
            className="w-4/5 h-auto object-cover"
          />
        </div>
        <div className="w-1/2 pl-8"> 
          <p className="text-5xl leading-relaxed">
            Venha experimentar <span className="text-custompurple">o Açaí mais saudável do Rio</span>, localizado no Recreio ou peça pelo delivery!
          </p>
          <a href="https://pedido.anota.ai/loja/quentinha-frut-mix?f=ms" ><button className="mt-10 bg-customYellow text-black items-center text-center ml-40 rounded-lg py-3 px-16">
            Peça Agora
          </button></a>
        </div>
      </div>
    </div>
  );
}

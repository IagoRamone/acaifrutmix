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

          <button className="mt-10 bg-customYellow text-black items-center text-center ml-40 rounded-lg py-3 px-16">
            Peça Agora
          </button>
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
      style={{ backgroundImage: "url('/img/ip/parte_02.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="text-4xl font-bold text-center mb-12">Nossas Opções</h1>
      <div className="flex flex-wrap justify-center space-x-6">
        <div className="w-60 bg-customPurple rounded-lg shadow-lg overflow-hidden text-center">
          <img
            src="/img/ip/acaimorango.png"
            alt="Açaí com morango"
            className="w-full h-100 object-cover"
          />
        </div>

        <div className="w-60 bg-customPurple rounded-lg shadow-lg overflow-hidden text-center">
          <img
            src="/img/ip/acaibanana.png"
            alt="Açaí de banana"
            className="w-full h-100 object-cover"
          />
        </div>

        <div className="w-60 bg-customPurple rounded-lg shadow-lg overflow-hidden text-center">
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
    <div className="relative bg-gradient-to-br from-purple-500 to-purple-700 text-white min-h-screen pt-40"> {/* Adicionando padding top */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/ip/parte_03.jpeg')",
          height: "120%", // Mantém a altura aumentada da imagem
        }}
      />

      <div className="flex flex-col items-center px-10 md:flex-row md:justify-between relative z-10 ml-20 mt-20 mb-[-10vh]"> {/* Ajustando margens para efeito de queda */}
        
        <h1 className="text-4xl font-bold md:text-4xl text-white text-center mb-6 absolute top-0 left-1/2 transform -translate-x-1/2">
          Um pouco da nossa história
        </h1>

        {/* Imagem do copo de açaí */}
        <div className="relative z-10 mt-10 md:mt-0 xl:mr-40 xxl:mr-60 w-full max-w-xs md:max-w-md ml-10">
          <img
            src="/img/ip/loja.jpeg"
            alt="Copo de Açaí"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="text-center md:text-left mb-20 mt-20 relative z-10 bg-opacity-70 p-6 rounded-xl">
          <p className="text-lg text-white mb-8">
            O açaí é uma fruta rica em antioxidantes, fibras e gorduras boas, 
            perfeito para qualquer hora do dia.
          </p>
        </div>
      </div>
    </div>
  );
}






function SectionFour() {
  return (
    <div className=' relative bg-gradient-to-br from-purple-500 to-purple-700 text-white'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: "url('/img/ip/parte_04.jpeg')" }}
      />
      <div className='flex flex-col items-center px-10 md:flex-row md:justify-between'>
        
      </div>
    </div>
  ); 
}
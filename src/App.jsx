import { useState } from 'react'

function App() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      pergunta: 'Preciso ter experiência com anúncios pagos?',
      resposta: 'Não é necessário ser avançado. O curso é indicado para quem já tentou vender online ou já rodou alguma campanha. O foco é na estrutura — não na operação técnica de plataformas.'
    },
    {
      pergunta: 'Já uso ferramenta de automação e CRM. Ainda faz sentido?',
      resposta: 'Sim. O problema raramente é a ferramenta — é a falta de estrutura na campanha. O método funciona com o que você já tem, sem depender de nenhuma plataforma específica.'
    },
    {
      pergunta: 'É muito técnico?',
      resposta: 'Não. O foco é prático: você sai sabendo exatamente o que fazer antes, durante e depois de cada campanha — e por que cada etapa importa.'
    },
    {
      pergunta: 'Em quanto tempo consigo aplicar?',
      resposta: 'O curso cabe em algumas horas. A aplicação começa no mesmo dia — sem depender de aprovação de equipe, ferramenta nova ou grande investimento.'
    },
    {
      pergunta: 'Funciona para qualquer tipo de negócio?',
      resposta: 'A estrutura de campanha ensinada é aplicável a e-commerces, negócios locais, infoprodutos e prestadores de serviços. O método é sobre estrutura — que se adapta a qualquer nicho.'
    }
  ]

  return (
    <div className="bg-black text-white">

      {/* ==================== SEÇÃO 1 - HERO ==================== */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[35vh] bg-[#00D9FF] opacity-[0.09] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[35vw] h-[25vh] bg-[#00D9FF] opacity-[0.06] rounded-full blur-[120px]"></div>
        <div className="absolute top-2/3 right-1/4 w-[30vw] h-[20vh] bg-[#00A8CC] opacity-[0.07] rounded-full blur-[130px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[30vh] bg-[#00D9FF] opacity-[0.05] rounded-full blur-[160px]"></div>

        {/* Título */}
        <h1 className="font-['Orbitron'] font-medium text-center text-white max-w-[900px] text-[36px] leading-[46px] md:text-[72px] md:leading-[90px]">
          O verdadeiro motivo de você estar travado no mesmo{' '}
          <span className="bg-gradient-to-r from-[#00D9FF] to-[#00A8CC] bg-clip-text text-transparent">
            faturamento há meses
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 text-base text-center">
          <span className="font-['Orbitron'] text-[#00D9FF]">é a falta de estrutura </span>
          <span className="font-['Inter'] text-white/60">na sua campanha.</span>
        </p>

        {/* Caixa */}
        <div className="mt-10 max-w-[700px] w-full rounded-[10px] border border-[#00D9FF]/30 bg-gradient-to-r from-[#000000] to-[#00D9FF]/5 px-8 py-6 text-center relative z-10">
          <p className="font-['Inter'] font-light text-white text-[16px] md:text-[20px] md:leading-[32.5px]">
            Aprenda em poucas horas como criar campanhas que vendem de forma{' '}
            <span className="font-semibold text-[#00D9FF]">previsível e consistente</span>
            , sem depender de desconto, de sorte ou de improviso.
          </p>
        </div>

        {/* Botão */}
        <a
          href="https://pay.hotmart.com/J102080283U?checkoutMode=10&bid=1776263928555"
          className="mt-10 relative z-10 inline-block font-['Orbitron'] font-bold text-black bg-gradient-to-r from-[#00D9FF] to-[#00A8CC] px-10 py-4 rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:scale-105 transition-all duration-300 text-[14px] md:text-[18px]"
        >
          Quero estruturar minhas campanhas &#8594;
        </a>
      </section>

      {/* ==================== SEÇÃO 2 - SITUAÇÕES ==================== */}
      <section className="px-4 py-20 flex flex-col items-center">

        {/* Título */}
        <h2 className="font-['Orbitron'] font-medium text-center text-[32px] leading-[40px] md:text-[48px] md:leading-[48px]">
          Reconhece alguma dessas<br />
          <span className="text-[#00D9FF]">situações</span>?
        </h2>

        {/* Cards de situações */}
        <div className="mt-12 max-w-[700px] w-full flex flex-col gap-5">

          {/* Card 1 */}
          <div className="flex items-center gap-4 border border-[#FB2C36] rounded-xl px-6 py-5 bg-black shadow-[0_0_25px_rgba(251,44,54,0.35)]">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#FB2C36] bg-[#FB2C36]/20 flex items-center justify-center">
              <span className="text-[#FB2C36] font-bold text-sm">&#10005;</span>
            </div>
            <p className="font-['Inter'] font-light text-[16px] md:text-[18px] text-white">
              Você impulsiona, recebe clique, mas a venda não acontece — e não sabe por quê.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 border border-[#FB2C36] rounded-xl px-6 py-5 bg-black shadow-[0_0_25px_rgba(251,44,54,0.35)]">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#FB2C36] bg-[#FB2C36]/20 flex items-center justify-center">
              <span className="text-[#FB2C36] font-bold text-sm">&#10005;</span>
            </div>
            <p className="font-['Inter'] font-light text-[16px] md:text-[18px] text-white">
              Faz uma promoção, vende bem numa semana, e no mês seguinte o faturamento volta para o mesmo lugar.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4 border border-[#FB2C36] rounded-xl px-6 py-5 bg-black shadow-[0_0_25px_rgba(251,44,54,0.35)]">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#FB2C36] bg-[#FB2C36]/20 flex items-center justify-center">
              <span className="text-[#FB2C36] font-bold text-sm">&#10005;</span>
            </div>
            <p className="font-['Inter'] font-light text-[16px] md:text-[18px] text-white">
              Sempre que precisa vender mais, a primeira ideia é dar desconto — porque mais nada parece funcionar.
            </p>
          </div>
        </div>

        {/* Caixa azul */}
        <div className="mt-10 max-w-[700px] w-full rounded-lg border-l-4 border-[#00D9FF] bg-gradient-to-r from-[#00D9FF]/10 to-transparent px-8 py-6">
          <p className="font-['Inter'] font-light text-[16px] md:text-[20px] md:leading-[32.5px] text-white">
            Se você respondeu{' '}
            <span className="font-['Orbitron'] font-bold text-[#00D9FF]">SIM</span>
            {' '}para alguma dessas, o problema não é falta de produto ou de tráfego. Está no fato de que você{' '}
            <span className="font-semibold text-[#00D9FF]">não tem uma estrutura de campanha</span>
            {' '}— só tentativas.
          </p>
        </div>

        {/* Botão */}
        <a
          href="https://pay.hotmart.com/J102080283U?checkoutMode=10&bid=1776263928555"
          className="mt-10 inline-block font-['Orbitron'] font-bold text-black bg-gradient-to-r from-[#00D9FF] to-[#00A8CC] px-10 py-4 rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:scale-105 transition-all duration-300 text-[14px] md:text-[18px]"
        >
          Quero estruturar minhas campanhas &#8594;
        </a>
      </section>

      {/* ==================== SEÇÃO 3 - MÉTODO ==================== */}
      <section className="px-4 py-20 relative overflow-hidden">

        {/* Glow central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[40vh] bg-[#00D9FF] opacity-[0.09] rounded-full blur-[150px]"></div>

        {/* Conteúdo principal: texto esquerda + imagem direita */}
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">

          {/* Texto esquerda */}
          <div className="flex-1">
            <h2 className="font-['Orbitron'] font-medium text-[28px] leading-[38px] md:text-[36px] md:leading-[45px] text-white whitespace-nowrap">
              Existe um <span className="text-[#00D9FF]">método simples</span><br />
              para criar campanhas que<br />
              funcionam
            </h2>
            <p className="mt-6 font-['Inter'] font-light text-[16px] md:text-[18px] md:leading-[28px] text-white/70">
              e se repetem, sem precisar reinventar a roda a cada mês.<br />
              Com ele você:
            </p>
          </div>

          {/* Imagem direita */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://media.beefree.cloud/pub/bfra/opmhw2bc/nfj/reo/6bq/3egdfjh3gfuy34gfyu34gf34f34f34f.png"
              alt="Dashboard de métricas"
              className="w-full max-w-[648px]"
            />
          </div>
        </div>

        {/* 4 Caixinhas */}
        <div className="max-w-[1000px] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">

          {/* Caixinha 1 */}
          <div className="rounded-[10px] border border-[#00D9FF]/30 bg-gradient-to-r from-[#000000] to-[#00D9FF]/5 px-6 py-5 flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#00D9FF]/50 bg-[#00D9FF]/20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full border border-[#00D9FF] bg-[#00D9FF]/20 flex items-center justify-center">
                <span className="text-[#00D9FF] text-xs">&#10003;</span>
              </div>
            </div>
            <p className="font-['Inter'] font-light text-[14px] md:text-[16px] md:leading-[24px] text-white">
              Identifica o que está quebrando na sua campanha e o que fazer em cada fase para converter mais.
            </p>
          </div>

          {/* Caixinha 2 */}
          <div className="rounded-[10px] border border-[#00D9FF]/30 bg-gradient-to-r from-[#000000] to-[#00D9FF]/5 px-6 py-5 flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#00D9FF]/50 bg-[#00D9FF]/20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full border border-[#00D9FF] bg-[#00D9FF]/20 flex items-center justify-center">
                <span className="text-[#00D9FF] text-xs">&#10003;</span>
              </div>
            </div>
            <p className="font-['Inter'] font-light text-[14px] md:text-[16px] md:leading-[24px] text-white">
              Para de depender de desconto para gerar receita e aprende a vender pelo valor.
            </p>
          </div>

          {/* Caixinha 3 */}
          <div className="rounded-[10px] border border-[#00D9FF]/30 bg-gradient-to-r from-[#000000] to-[#00D9FF]/5 px-6 py-5 flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#00D9FF]/50 bg-[#00D9FF]/20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full border border-[#00D9FF] bg-[#00D9FF]/20 flex items-center justify-center">
                <span className="text-[#00D9FF] text-xs">&#10003;</span>
              </div>
            </div>
            <p className="font-['Inter'] font-light text-[14px] md:text-[16px] md:leading-[24px] text-white">
              Cria campanhas com começo, meio e fim planejados, para ninguém mais dizer 'anunciei e não veio resultado'.
            </p>
          </div>

          {/* Caixinha 4 */}
          <div className="rounded-[10px] border border-[#00D9FF]/30 bg-gradient-to-r from-[#000000] to-[#00D9FF]/5 px-6 py-5 flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#00D9FF]/50 bg-[#00D9FF]/20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full border border-[#00D9FF] bg-[#00D9FF]/20 flex items-center justify-center">
                <span className="text-[#00D9FF] text-xs">&#10003;</span>
              </div>
            </div>
            <p className="font-['Inter'] font-light text-[14px] md:text-[16px] md:leading-[24px] text-white">
              Transforma cada campanha em processo replicável, para crescer sem aumentar o esforço.
            </p>
          </div>
        </div>

        {/* Botão */}
        <div className="flex justify-center mt-12 relative z-10">
          <a
            href="https://pay.hotmart.com/J102080283U?checkoutMode=10&bid=1776263928555"
            className="inline-block font-['Orbitron'] font-bold text-black bg-gradient-to-r from-[#00D9FF] to-[#00A8CC] px-10 py-4 rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:scale-105 transition-all duration-300 text-[14px] md:text-[18px]"
          >
            Quero estruturar minhas campanhas &#8594;
          </a>
        </div>
      </section>

      {/* ==================== SEÇÃO 4 - QUEM CRIOU ==================== */}
      <section className="px-4 py-20 flex flex-col items-center">

        {/* Título */}
        <h2 className="font-['Orbitron'] font-medium text-center text-[32px] leading-[40px] md:text-[48px] md:leading-[56px]">
          Quem criou esse <span className="text-[#00D9FF]">método</span>
        </h2>

        {/* Conteúdo: imagem esquerda + caixa direita */}
        <div className="mt-12 max-w-[1000px] w-full flex flex-col md:flex-row items-stretch gap-8">

          {/* Imagem esquerda */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src="https://media.beefree.cloud/pub/bfra/opmhw2bc/mz9/7ht/r4t/4f4f4f4f4f4f4f4f4f4f.png"
              alt="João Navia - Gráfico de resultados"
              className="w-full max-w-[648px]"
            />
          </div>

          {/* Caixa direita */}
          <div className="flex-1 flex flex-col">
            <div className="border border-[#00D9FF]/30 rounded-xl px-8 py-8 flex-1">
              <h3 className="font-['Orbitron'] font-medium text-[24px] text-[#00D9FF]">João Navia</h3>

              <p className="mt-4 font-['Inter'] font-light text-[16px] leading-[26px] text-white">
                Tem mais de <span className="font-normal text-[#00D9FF]">15 anos</span> estruturando operações comerciais em empresas de diversos segmentos. Após identificar um padrão repetido — campanhas improvisadas, faturamento instável, crescimento travado — ele desenvolveu o método de Campanhas Promocionais para resolver exatamente o que nenhum curso de tráfego resolve sozinho: dar estrutura para a campanha antes de anunciar.
              </p>

              <p className="mt-4 font-['Inter'] font-light text-[16px] leading-[26px] text-white">
                Mais de{' '}
                <span className="font-['Orbitron'] font-medium text-[#00D9FF]">305 aulas e treinamentos</span>
                {' '}ministrados.
              </p>

              <p className="mt-2 font-['Inter'] font-light text-[16px] leading-[26px] text-white">
                Fundador da{' '}
                <span className="font-normal text-[#00D9FF]">LoopScale</span>
                , especialista em RevOps, conversão e receita previsível.
              </p>
            </div>

            {/* 3 Caixinhas de stats */}
            <div className="mt-5 grid grid-cols-3 gap-4">

              {/* 15+ Anos */}
              <div className="border border-[#00D9FF]/30 rounded-xl py-5 flex flex-col items-center gap-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M12 13l-3 7 3-2 3 2-3-7z" />
                </svg>
                <span className="font-['Orbitron'] font-bold text-[20px] text-[#00D9FF]">15+</span>
                <span className="font-['Inter'] font-light text-[14px] text-white">Anos</span>
              </div>

              {/* 305+ Aulas */}
              <div className="border border-[#00D9FF]/30 rounded-xl py-5 flex flex-col items-center gap-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="7" r="4" />
                  <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                  <circle cx="17" cy="7" r="3" />
                  <path d="M21 21v-2a3 3 0 00-2-2.83" />
                </svg>
                <span className="font-['Orbitron'] font-bold text-[20px] text-[#00D9FF]">305+</span>
                <span className="font-['Inter'] font-light text-[14px] text-white">Aulas</span>
              </div>

              {/* RevOps Expert */}
              <div className="border border-[#00D9FF]/30 rounded-xl py-5 flex flex-col items-center gap-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span className="font-['Orbitron'] font-bold text-[20px] text-[#00D9FF]">RevOps</span>
                <span className="font-['Inter'] font-light text-[14px] text-white">Expert</span>
              </div>
            </div>
          </div>
        </div>

        {/* Botão */}
        <a
          href="https://pay.hotmart.com/J102080283U?checkoutMode=10&bid=1776263928555"
          className="mt-12 inline-block font-['Orbitron'] font-bold text-black bg-gradient-to-r from-[#00D9FF] to-[#00A8CC] px-10 py-4 rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:scale-105 transition-all duration-300 text-[14px] md:text-[18px]"
        >
          Quero estruturar minhas campanhas &#8594;
        </a>
      </section>

      {/* ==================== SEÇÃO 5 - PREÇO ==================== */}
      <section className="px-4 py-20 flex flex-col items-center">

        {/* Título */}
        <h2 className="font-['Orbitron'] font-medium text-center text-[32px] leading-[40px] md:text-[48px] md:leading-[56px]">
          Campanhas <span className="text-[#00D9FF]">Promocionais</span>
        </h2>

        {/* 3 Caixinhas de features */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 border border-[#00D9FF] rounded-full px-5 py-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            <span className="font-['Inter'] font-light text-[16px] text-white">Vídeo-aulas online</span>
          </div>
          <div className="flex items-center gap-2 border border-[#00D9FF] rounded-full px-5 py-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span className="font-['Inter'] font-light text-[16px] text-white">Acesso imediato</span>
          </div>
          <div className="flex items-center gap-2 border border-[#00D9FF] rounded-full px-5 py-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="font-['Inter'] font-light text-[16px] text-white">Preço de lançamento</span>
          </div>
        </div>

        {/* Caixa grande de preço */}
        <div className="mt-10 max-w-[600px] w-full rounded-xl border border-[#00D9FF] shadow-[0_0_30px_rgba(0,217,255,0.3)] px-8 py-10 flex flex-col items-center">

          {/* Preço antigo */}
          <p className="font-['Inter'] font-light text-[18px] text-white line-through">De R$297,00</p>

          {/* Preço novo */}
          <div className="mt-2 flex items-baseline">
            <span className="font-['Inter'] font-light text-[30px] text-white">por apenas</span>
            <span className="font-['Orbitron'] font-bold text-[72px] leading-none text-[#00D9FF] ml-3">R$37</span>
            <span className="font-['Inter'] font-light text-[24px] text-white">,00</span>
          </div>

          {/* Botão */}
          <a
            href="https://pay.hotmart.com/J102080283U?checkoutMode=10&bid=1776263928555"
            className="mt-8 w-full text-center inline-block font-['Orbitron'] font-bold text-black bg-gradient-to-r from-[#00D9FF] to-[#00A8CC] px-10 py-4 rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:scale-105 transition-all duration-300 text-[14px] md:text-[18px]"
          >
            Quero parar de improvisar campanha &#8594;
          </a>

          {/* Divisor */}
          <div className="mt-8 w-full h-[1px] bg-[#00D9FF]/30 shadow-[0_0_10px_rgba(0,217,255,0.2)]"></div>

          {/* Garantia */}
          <div className="mt-6 flex items-start gap-4">
            <svg className="flex-shrink-0" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00D9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <div>
              <p className="font-['Orbitron'] font-bold text-[18px] text-[#00D9FF]">7 dias de garantia incondicional</p>
              <p className="mt-1 font-['Inter'] font-light text-[16px] text-white">
                Se não gostar, devolvemos tudo. Sem pegadinhas. Sem letras miúdas. Sem perguntas.
              </p>
            </div>
          </div>
        </div>

        
      </section>

      {/* ==================== SEÇÃO 6 - FAQ ==================== */}
      <section className="px-4 py-20 flex flex-col items-center">

        {/* Título */}
        <h2 className="font-['Orbitron'] font-medium text-center text-[32px] leading-[40px] md:text-[48px] md:leading-[56px]">
          Perguntas <span className="text-[#00D9FF]">Frequentes</span>
        </h2>

        {/* Subtítulo */}
        <p className="mt-4 font-['Inter'] font-light text-[18px] text-white">
          Tire suas dúvidas antes de começar
        </p>

        {/* Accordion */}
        <div className="mt-12 max-w-[700px] w-full flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#00D9FF] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 bg-transparent cursor-pointer text-left"
              >
                <span className="font-['Orbitron'] font-medium text-[16px] md:text-[18px] text-white">
                  {faq.pergunta}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00D9FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="px-6 pb-5 font-['Inter'] font-light text-[16px] leading-[26px] text-white/80">
                  {faq.resposta}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão */}
        <a
          href="https://pay.hotmart.com/J102080283U?checkoutMode=10&bid=1776263928555"
          className="mt-12 inline-block font-['Orbitron'] font-bold text-black bg-gradient-to-r from-[#00D9FF] to-[#00A8CC] px-10 py-4 rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:scale-105 transition-all duration-300 text-[14px] md:text-[18px]"
        >
          Quero parar de improvisar campanha &#8594;
        </a>
      </section>

      {/* ==================== DIVISOR + FOOTER ==================== */}
      <div className="w-full h-[1px] bg-[#00D9FF]"></div>
      <footer className="py-8 text-center">
        <p className="font-['Inter'] font-light text-[14px] text-white/60">
          © 2026 Campanhas Promocionais. Todos os direitos reservados.
        </p>
      </footer>

    </div>
  )
}

export default App

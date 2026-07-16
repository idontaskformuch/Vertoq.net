export interface SavingsGoalContent {
  whatIsSavingsGoal: { heading: string; body: string };
  formula: { heading: string; intro: string; code: string; note: string };
  limitations: { heading: string; body: string };
  related: { heading: string; loanLinkText: string; loanDescription: string; loanCostLinkText: string; loanCostDescription: string };
}

export const savingsGoalContent: Record<string, SavingsGoalContent> = {
  sv: {
    whatIsSavingsGoal: {
      heading: `Vad kalkylatorn räknar ut`,
      body: `Istället för att fråga hur mycket ett sparbelopp växer till, vänder den här kalkylatorn på frågan: hur mycket behöver du spara varje månad för att nå ett specifikt mål inom en viss tid? Den tar hänsyn till både ditt nuvarande sparande och den avkastning du förväntar dig på vägen.`,
    },
    formula: {
      heading: `Så räknas det ut`,
      intro: `Kalkylatorn räknar först ut vad ditt nuvarande sparande växer till på egen hand, och löser sedan ut det månadsbelopp som behövs för att täcka mellanskillnaden:`,
      code: `PMT = (Mål − Nuvarande×(1+r)^n) × r / ((1+r)^n − 1)`,
      note: `r är den månatliga räntan och n är antalet månader. Om ditt nuvarande sparande redan räcker för att nå målet på egen hand med den angivna avkastningen visas ett meddelande istället för ett negativt sparbelopp.`,
    },
    limitations: {
      heading: `Begränsningar`,
      body: `Precis som med sparkalkylatorn bygger resultatet på en konstant avkastning du själv anger, vilket sällan stämmer exakt i verkligheten. Skatt och inflation räknas inte in, och resultatet ska ses som en riktlinje för hur mycket du behöver sätta undan, inte en garanti för att nå målet på exakt utsatt tid.`,
    },
    related: {
      heading: `Relaterade kalkylatorer`,
      loanLinkText: `Sparkalkylator`,
      loanDescription: `— se hur ett sparbelopp växer framåt istället för att räkna baklänges från ett mål.`,
      loanCostLinkText: `Avbetalningskalkylator`,
      loanCostDescription: `— räkna ut vad ett lån istället kostar dig totalt.`,
    },
  },

  en: {
    whatIsSavingsGoal: {
      heading: `What this calculator solves`,
      body: `Instead of asking how much a savings amount grows to, this calculator flips the question: how much do you need to save each month to reach a specific goal within a certain time? It accounts for both your current savings and the return you expect along the way.`,
    },
    formula: {
      heading: `How it's calculated`,
      intro: `The calculator first works out what your current savings grow to on their own, then solves for the monthly amount needed to cover the gap:`,
      code: `PMT = (Goal − Current×(1+r)^n) × r / ((1+r)^n − 1)`,
      note: `r is the monthly interest rate and n is the number of months. If your current savings already reach the goal on their own at the given return, a message is shown instead of a negative savings amount.`,
    },
    limitations: {
      heading: `Limitations`,
      body: `Like the savings calculator, the result relies on a constant return you provide, which rarely holds exactly in reality. Tax and inflation aren't factored in, and the result should be treated as a guideline for how much to set aside, not a guarantee of hitting the goal on exactly the stated date.`,
    },
    related: {
      heading: `Related calculators`,
      loanLinkText: `Savings Calculator`,
      loanDescription: `— see how a savings amount grows forward instead of working backward from a goal.`,
      loanCostLinkText: `Loan Cost Calculator`,
      loanCostDescription: `— calculate what a loan costs you in total instead.`,
    },
  },

  pt: {
    whatIsSavingsGoal: {
      heading: `O que esta calculadora resolve`,
      body: `Em vez de perguntar quanto um valor poupado cresce, esta calculadora inverte a pergunta: quanto você precisa poupar por mês para atingir uma meta específica dentro de um determinado prazo? Ela considera tanto sua poupança atual quanto o retorno que você espera ao longo do caminho.`,
    },
    formula: {
      heading: `Como é calculado`,
      intro: `A calculadora primeiro determina quanto sua poupança atual cresce por conta própria, depois calcula o valor mensal necessário para cobrir a diferença:`,
      code: `PMT = (Meta − Atual×(1+r)^n) × r / ((1+r)^n − 1)`,
      note: `r é a taxa de juros mensal e n é o número de meses. Se sua poupança atual já atinge a meta sozinha com o retorno informado, uma mensagem é exibida em vez de um valor de poupança negativo.`,
    },
    limitations: {
      heading: `Limitações`,
      body: `Assim como a calculadora de poupança, o resultado depende de um retorno constante que você informa, o que raramente se sustenta exatamente na realidade. Impostos e inflação não são considerados, e o resultado deve ser tratado como uma diretriz de quanto reservar, não uma garantia de atingir a meta na data exata informada.`,
    },
    related: {
      heading: `Calculadoras relacionadas`,
      loanLinkText: `Calculadora de Poupança`,
      loanDescription: `— veja como um valor poupado cresce para frente, em vez de calcular de trás para frente a partir de uma meta.`,
      loanCostLinkText: `Calculadora de Custo de Empréstimo`,
      loanCostDescription: `— calcule quanto um empréstimo custa no total.`,
    },
  },

  es: {
    whatIsSavingsGoal: {
      heading: `Qué resuelve esta calculadora`,
      body: `En lugar de preguntar cuánto crece un monto ahorrado, esta calculadora invierte la pregunta: ¿cuánto necesitas ahorrar cada mes para alcanzar una meta específica en cierto tiempo? Tiene en cuenta tanto tu ahorro actual como el rendimiento que esperas por el camino.`,
    },
    formula: {
      heading: `Cómo se calcula`,
      intro: `La calculadora primero determina cuánto crece tu ahorro actual por sí solo, y luego calcula el monto mensual necesario para cubrir la diferencia:`,
      code: `PMT = (Meta − Actual×(1+r)^n) × r / ((1+r)^n − 1)`,
      note: `r es la tasa de interés mensual y n es el número de meses. Si tu ahorro actual ya alcanza la meta por sí solo con el rendimiento indicado, se muestra un mensaje en lugar de un monto de ahorro negativo.`,
    },
    limitations: {
      heading: `Limitaciones`,
      body: `Igual que la calculadora de ahorro, el resultado depende de un rendimiento constante que tú indicas, algo que rara vez se cumple exactamente en la realidad. No se tienen en cuenta impuestos ni inflación, y el resultado debe verse como una guía de cuánto apartar, no como una garantía de alcanzar la meta en la fecha exacta indicada.`,
    },
    related: {
      heading: `Calculadoras relacionadas`,
      loanLinkText: `Calculadora de Ahorro`,
      loanDescription: `— consulta cómo crece un monto ahorrado hacia adelante, en lugar de calcular hacia atrás desde una meta.`,
      loanCostLinkText: `Calculadora de Costo de Préstamo`,
      loanCostDescription: `— calcula cuánto te cuesta un préstamo en total.`,
    },
  },

  de: {
    whatIsSavingsGoal: {
      heading: `Was dieser Rechner löst`,
      body: `Statt zu fragen, wie viel ein Sparbetrag anwächst, dreht dieser Rechner die Frage um: Wie viel musst du monatlich sparen, um ein bestimmtes Ziel innerhalb einer bestimmten Zeit zu erreichen? Er berücksichtigt sowohl dein aktuelles Erspartes als auch die Rendite, die du auf dem Weg erwartest.`,
    },
    formula: {
      heading: `So wird gerechnet`,
      intro: `Der Rechner ermittelt zunächst, wie stark dein aktuelles Erspartes von allein wächst, und löst dann nach dem monatlichen Betrag auf, der nötig ist, um die Lücke zu schließen:`,
      code: `PMT = (Ziel − Aktuell×(1+r)^n) × r / ((1+r)^n − 1)`,
      note: `r ist der monatliche Zinssatz und n ist die Anzahl der Monate. Wenn dein aktuelles Erspartes das Ziel bei der angegebenen Rendite bereits allein erreicht, wird eine Meldung statt eines negativen Sparbetrags angezeigt.`,
    },
    limitations: {
      heading: `Einschränkungen`,
      body: `Wie beim Sparrechner beruht das Ergebnis auf einer konstanten Rendite, die du selbst angibst, was in der Realität selten exakt zutrifft. Steuern und Inflation werden nicht berücksichtigt, und das Ergebnis sollte als Richtwert dafür gesehen werden, wie viel du zurücklegen musst, nicht als Garantie, das Ziel exakt zum angegebenen Zeitpunkt zu erreichen.`,
    },
    related: {
      heading: `Verwandte Rechner`,
      loanLinkText: `Sparrechner`,
      loanDescription: `— sieh, wie ein Sparbetrag vorwärts wächst, statt von einem Ziel rückwärts zu rechnen.`,
      loanCostLinkText: `Kreditkostenrechner`,
      loanCostDescription: `— berechne, was ein Kredit dich stattdessen insgesamt kostet.`,
    },
  },

  ja: {
    whatIsSavingsGoal: {
      heading: `この計算機が解決すること`,
      body: `貯蓄額がいくらに増えるかを問うのではなく、この計算機は逆の問いを立てます。特定の期間内に特定の目標を達成するには、毎月いくら貯蓄する必要があるか、という問いです。現在の貯蓄額と、その過程で期待する利回りの両方を考慮します。`,
    },
    formula: {
      heading: `計算方法`,
      intro: `まず現在の貯蓄額だけでどこまで増えるかを計算し、その差額を埋めるために必要な毎月の金額を逆算します。`,
      code: `PMT = (目標 − 現在×(1+r)^n) × r / ((1+r)^n − 1)`,
      note: `rは月利、nは月数です。指定した利回りで現在の貯蓄額だけですでに目標に達している場合、マイナスの貯蓄額の代わりにメッセージが表示されます。`,
    },
    limitations: {
      heading: `限界`,
      body: `積立計算機と同様、この結果はあなたが入力した一定の利回りに基づいており、現実にはそれが正確に成り立つことはほとんどありません。税金やインフレは考慮されておらず、結果は正確にその期日で目標を達成する保証ではなく、いくら取り分けるべきかの目安として捉えてください。`,
    },
    related: {
      heading: `関連する計算機`,
      loanLinkText: `積立計算機`,
      loanDescription: `— 目標から逆算するのではなく、貯蓄額がどう増えていくかを確認できます。`,
      loanCostLinkText: `ローン費用計算機`,
      loanCostDescription: `— ローンが総額でいくらかかるか計算します。`,
    },
  },

  zh: {
    whatIsSavingsGoal: {
      heading: `这个计算器解决什么问题`,
      body: `这个计算器不是问一笔存款会增长到多少，而是把问题反过来：要在特定时间内达成特定目标，你每月需要储蓄多少？它同时考虑了你当前的储蓄和你在这个过程中预期获得的回报。`,
    },
    formula: {
      heading: `计算方式`,
      intro: `计算器首先算出你当前的储蓄单独能增长到多少，然后反推出填补差额所需的月储蓄额：`,
      code: `PMT = (目标 − 当前×(1+r)^n) × r / ((1+r)^n − 1)`,
      note: `r是月利率，n是月数。如果按给定的回报率，你目前的储蓄已经能单独达到目标，系统会显示一条提示，而不是显示一个负数的储蓄额。`,
    },
    limitations: {
      heading: `局限性`,
      body: `和储蓄计算器一样，这个结果依赖于你自己输入的恒定回报率，而现实中这种情况很少精确成立。计算未考虑税费和通货膨胀，结果应被视为需要储蓄多少的参考指引，而不是保证你能在指定日期精确达成目标。`,
    },
    related: {
      heading: `相关计算器`,
      loanLinkText: `储蓄计算器`,
      loanDescription: `— 查看储蓄金额如何正向增长，而不是从目标反推。`,
      loanCostLinkText: `贷款费用计算器`,
      loanCostDescription: `— 计算贷款总共要花费多少。`,
    },
  },

  ko: {
    whatIsSavingsGoal: {
      heading: `이 계산기가 해결하는 것`,
      body: `저축액이 얼마로 늘어나는지 묻는 대신, 이 계산기는 질문을 뒤집습니다. 특정 기간 안에 특정 목표를 달성하려면 매달 얼마를 저축해야 하는가? 현재 저축액과 그 과정에서 기대하는 수익률을 모두 고려합니다.`,
    },
    formula: {
      heading: `계산 방식`,
      intro: `계산기는 먼저 현재 저축액만으로 얼마나 늘어나는지 계산한 다음, 그 차액을 채우는 데 필요한 월 저축액을 역산합니다.`,
      code: `PMT = (목표 − 현재×(1+r)^n) × r / ((1+r)^n − 1)`,
      note: `r은 월 이자율, n은 개월 수입니다. 주어진 수익률로 현재 저축액만으로 이미 목표에 도달한다면, 음수 저축액 대신 안내 메시지가 표시됩니다.`,
    },
    limitations: {
      heading: `한계점`,
      body: `저축 계산기와 마찬가지로, 이 결과는 사용자가 입력한 일정한 수익률에 의존하며, 현실에서는 이것이 정확히 유지되는 경우가 드뭅니다. 세금과 인플레이션은 반영되지 않으며, 결과는 정확히 명시된 날짜에 목표를 달성한다는 보장이 아니라 얼마를 따로 모아야 하는지에 대한 가이드로 받아들여야 합니다.`,
    },
    related: {
      heading: `관련 계산기`,
      loanLinkText: `저축 계산기`,
      loanDescription: `— 목표에서 거꾸로 계산하는 대신, 저축액이 앞으로 어떻게 늘어나는지 확인해 보세요.`,
      loanCostLinkText: `대출 비용 계산기`,
      loanCostDescription: `— 대출이 총 얼마나 드는지 계산해 보세요.`,
    },
  },

  hi: {
    whatIsSavingsGoal: {
      heading: `यह कैलकुलेटर क्या हल करता है`,
      body: `एक बचत राशि कितनी बढ़ती है, यह पूछने के बजाय, यह कैलकुलेटर सवाल को उलट देता है: एक तय समय के भीतर एक खास लक्ष्य तक पहुंचने के लिए आपको हर महीने कितना बचाना होगा? यह आपकी मौजूदा बचत और रास्ते में मिलने वाले अनुमानित रिटर्न, दोनों को ध्यान में रखता है।`,
    },
    formula: {
      heading: `यह कैसे गिना जाता है`,
      intro: `कैलकुलेटर पहले पता लगाता है कि आपकी मौजूदा बचत अपने आप कितनी बढ़ेगी, फिर बाकी अंतर को पूरा करने के लिए ज़रूरी मासिक राशि निकालता है:`,
      code: `PMT = (लक्ष्य − मौजूदा×(1+r)^n) × r / ((1+r)^n − 1)`,
      note: `r मासिक ब्याज दर है और n महीनों की संख्या है। अगर दी गई रिटर्न दर पर आपकी मौजूदा बचत अकेले ही लक्ष्य तक पहुंच जाती है, तो नकारात्मक बचत राशि की जगह एक संदेश दिखाया जाता है।`,
    },
    limitations: {
      heading: `सीमाएँ`,
      body: `बचत कैलकुलेटर की तरह, यह नतीजा भी आपके दिए गए एक स्थिर रिटर्न पर निर्भर करता है, जो असल ज़िंदगी में शायद ही बिल्कुल वैसा ही रहता है। टैक्स और महंगाई को ध्यान में नहीं रखा गया है, और नतीजे को यह मार्गदर्शन मानें कि कितना अलग रखना है, न कि यह गारंटी कि आप ठीक बताई गई तारीख पर लक्ष्य तक पहुंच ही जाएंगे।`,
    },
    related: {
      heading: `संबंधित कैलकुलेटर`,
      loanLinkText: `बचत कैलकुलेटर`,
      loanDescription: `— किसी लक्ष्य से पीछे की ओर गणना करने के बजाय, देखें कि बचत राशि आगे कैसे बढ़ती है।`,
      loanCostLinkText: `ऋण लागत कैलकुलेटर`,
      loanCostDescription: `— पता करें कि लोन की कुल लागत कितनी होती है।`,
    },
  },

  id: {
    whatIsSavingsGoal: {
      heading: `Apa yang dipecahkan kalkulator ini`,
      body: `Alih-alih bertanya berapa jumlah tabungan akan tumbuh, kalkulator ini membalik pertanyaannya: berapa banyak yang perlu kamu tabung setiap bulan untuk mencapai target tertentu dalam waktu tertentu? Kalkulator ini memperhitungkan tabungan saat ini sekaligus imbal hasil yang kamu harapkan di sepanjang jalan.`,
    },
    formula: {
      heading: `Cara menghitungnya`,
      intro: `Kalkulator ini pertama-tama menghitung seberapa besar tabungan saat ini akan tumbuh dengan sendirinya, lalu menghitung jumlah bulanan yang dibutuhkan untuk menutup selisihnya:`,
      code: `PMT = (Target − Saat ini×(1+r)^n) × r / ((1+r)^n − 1)`,
      note: `r adalah suku bunga bulanan dan n adalah jumlah bulan. Jika tabungan saat ini sudah mencapai target dengan sendirinya pada imbal hasil yang diberikan, pesan akan ditampilkan alih-alih jumlah tabungan negatif.`,
    },
    limitations: {
      heading: `Keterbatasan`,
      body: `Seperti kalkulator tabungan, hasilnya bergantung pada imbal hasil tetap yang kamu masukkan sendiri, yang jarang bertahan persis seperti itu di dunia nyata. Pajak dan inflasi tidak diperhitungkan, dan hasilnya sebaiknya dianggap sebagai panduan berapa banyak yang perlu disisihkan, bukan jaminan mencapai target tepat pada tanggal yang disebutkan.`,
    },
    related: {
      heading: `Kalkulator terkait`,
      loanLinkText: `Kalkulator Tabungan`,
      loanDescription: `— lihat bagaimana jumlah tabungan tumbuh ke depan, alih-alih menghitung mundur dari sebuah target.`,
      loanCostLinkText: `Kalkulator Biaya Pinjaman`,
      loanCostDescription: `— hitung berapa total biaya sebuah pinjaman.`,
    },
  },
};

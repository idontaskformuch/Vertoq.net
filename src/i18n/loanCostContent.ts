export interface LoanCostContent {
  whatIsLoanCost: { heading: string; body: string };
  formula: { heading: string; intro: string; code: string; note: string };
  amortization: { heading: string; body: string };
  factors: { heading: string; body: string };
  limitations: { heading: string; body: string };
  related: { heading: string; linkText: string; description: string };
}

export const loanCostContent: Record<string, LoanCostContent> = {
  sv: {
    whatIsLoanCost: {
      heading: `Vad kostar ett lån egentligen`,
      body: `Ett lån med fast ränta och jämna månadsbetalningar (ett så kallat annuitetslån) kostar mer än det belopp du lånar, eftersom varje betalning innehåller både ränta och amortering. Den här kalkylatorn räknar ut din faktiska månadskostnad och vad du totalt betalar över hela löptiden, inklusive räntan.`,
    },
    formula: {
      heading: `Formeln`,
      intro: `Månadskostnaden räknas ut med den vanliga annuitetsformeln:`,
      code: `M = P × r × (1+r)^n / ((1+r)^n − 1)`,
      note: `P är lånebeloppet, r är den månatliga räntan (årsräntan delat med 12 och med 100), och n är antalet månadsbetalningar. Formeln ger en jämn månadskostnad genom hela löptiden.`,
    },
    amortization: {
      heading: `Så fördelas betalningarna över tid`,
      body: `Även om månadskostnaden är densamma varje månad ändras fördelningen mellan ränta och amortering. Tidiga betalningar går mest till ränta, eftersom räntan räknas på hela den kvarvarande skulden. I takt med att skulden minskar går en allt större del av varje betalning till amortering istället.`,
    },
    factors: {
      heading: `Vad påverkar räntan`,
      body: `Räntan du faktiskt erbjuds beror på flera faktorer: kreditvärdighet, kontantinsatsens storlek, lånets löptid, och om räntan är fast eller rörlig. Det här är faktiska faktorer som påverkar din verkliga ränta, inte finansiell rådgivning om vilket val som är bäst för dig.`,
    },
    limitations: {
      heading: `Begränsningar`,
      body: `Den här kalkylatorn visar den rena lånekostnaden utifrån belopp, ränta och löptid. Den tar inte hänsyn till avgifter, försäkringar, skatter eller andra lokala kostnader som kan tillkomma beroende på var du bor och vilken typ av lån det gäller. Se resultatet som en uppskattning av själva ränte- och amorteringskostnaden, inte den fullständiga totalkostnaden.`,
    },
    related: {
      heading: `Relaterad kalkylator`,
      linkText: `Sparkalkylator`,
      description: `— se hur ett sparbelopp växer med ränta-på-ränta, motsatsen till att låna.`,
    },
  },

  en: {
    whatIsLoanCost: {
      heading: `What a loan actually costs`,
      body: `A fixed-rate loan with equal monthly payments (an amortizing loan) costs more than the amount you borrow, because every payment contains both interest and principal. This calculator works out your actual monthly payment and what you pay in total over the full term, interest included.`,
    },
    formula: {
      heading: `The formula`,
      intro: `The monthly payment is calculated with the standard amortization formula:`,
      code: `M = P × r × (1+r)^n / ((1+r)^n − 1)`,
      note: `P is the loan amount, r is the monthly interest rate (annual rate divided by 12 and by 100), and n is the number of monthly payments. The formula produces a level monthly payment across the whole term.`,
    },
    amortization: {
      heading: `How payments are split over time`,
      body: `Even though the monthly payment stays the same, the split between interest and principal changes. Early payments are mostly interest, because interest is calculated on the remaining balance, which is largest at the start. As the balance shrinks, a growing share of each payment goes toward principal instead.`,
    },
    factors: {
      heading: `What affects your rate`,
      body: `The rate you're actually offered depends on several factors: credit score, down payment size, loan term, and whether the rate is fixed or adjustable. These are factual factors that influence your real rate, not financial advice about which choice is right for you.`,
    },
    limitations: {
      heading: `Limitations`,
      body: `This calculator shows the pure loan cost based on amount, rate, and term. It doesn't account for fees, insurance, taxes, or other local costs that may apply depending on where you live and what type of loan it is. Treat the result as an estimate of the interest and principal cost itself, not the complete total cost.`,
    },
    related: {
      heading: `Related calculator`,
      linkText: `Savings Calculator`,
      description: `— see how a savings amount grows with compound interest, the opposite of borrowing.`,
    },
  },

  pt: {
    whatIsLoanCost: {
      heading: `O que um empréstimo realmente custa`,
      body: `Um empréstimo com taxa fixa e parcelas mensais iguais (um empréstimo amortizável) custa mais do que o valor emprestado, porque cada parcela contém juros e amortização do principal. Esta calculadora determina sua parcela mensal real e o total que você paga ao longo do prazo completo, juros incluídos.`,
    },
    formula: {
      heading: `A fórmula`,
      intro: `A parcela mensal é calculada com a fórmula padrão de amortização:`,
      code: `M = P × r × (1+r)^n / ((1+r)^n − 1)`,
      note: `P é o valor do empréstimo, r é a taxa de juros mensal (taxa anual dividida por 12 e por 100), e n é o número de parcelas mensais. A fórmula produz uma parcela mensal constante ao longo de todo o prazo.`,
    },
    amortization: {
      heading: `Como as parcelas se dividem ao longo do tempo`,
      body: `Mesmo que a parcela mensal permaneça igual, a divisão entre juros e amortização muda. As primeiras parcelas são principalmente juros, porque os juros são calculados sobre o saldo devedor, que é maior no início. À medida que o saldo diminui, uma parte cada vez maior de cada parcela vai para a amortização do principal.`,
    },
    factors: {
      heading: `O que afeta sua taxa`,
      body: `A taxa que você realmente recebe depende de vários fatores: pontuação de crédito, valor da entrada, prazo do empréstimo, e se a taxa é fixa ou variável. Esses são fatores factuais que influenciam sua taxa real, não aconselhamento financeiro sobre qual escolha é melhor para você.`,
    },
    limitations: {
      heading: `Limitações`,
      body: `Esta calculadora mostra o custo puro do empréstimo com base no valor, na taxa e no prazo. Ela não considera taxas administrativas, seguros, impostos ou outros custos locais que podem se aplicar dependendo de onde você mora e do tipo de empréstimo. Trate o resultado como uma estimativa do custo de juros e amortização em si, não o custo total completo.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de Poupança`,
      description: `— veja como um valor de poupança cresce com juros compostos, o oposto de tomar emprestado.`,
    },
  },

  es: {
    whatIsLoanCost: {
      heading: `Qué cuesta realmente un préstamo`,
      body: `Un préstamo con tasa fija y cuotas mensuales iguales (un préstamo amortizable) cuesta más que la cantidad que pides prestada, porque cada cuota contiene tanto intereses como amortización del capital. Esta calculadora determina tu cuota mensual real y lo que pagas en total durante todo el plazo, intereses incluidos.`,
    },
    formula: {
      heading: `La fórmula`,
      intro: `La cuota mensual se calcula con la fórmula estándar de amortización:`,
      code: `M = P × r × (1+r)^n / ((1+r)^n − 1)`,
      note: `P es el monto del préstamo, r es la tasa de interés mensual (tasa anual dividida entre 12 y entre 100), y n es el número de cuotas mensuales. La fórmula produce una cuota mensual constante durante todo el plazo.`,
    },
    amortization: {
      heading: `Cómo se dividen las cuotas a lo largo del tiempo`,
      body: `Aunque la cuota mensual se mantiene igual, la división entre intereses y capital cambia. Las primeras cuotas son principalmente intereses, porque estos se calculan sobre el saldo pendiente, que es mayor al principio. A medida que el saldo disminuye, una parte cada vez mayor de cada cuota se destina a amortizar el capital.`,
    },
    factors: {
      heading: `Qué afecta tu tasa`,
      body: `La tasa que realmente te ofrecen depende de varios factores: puntaje crediticio, monto del pago inicial, plazo del préstamo, y si la tasa es fija o variable. Estos son factores objetivos que influyen en tu tasa real, no asesoramiento financiero sobre qué opción es mejor para ti.`,
    },
    limitations: {
      heading: `Limitaciones`,
      body: `Esta calculadora muestra el costo puro del préstamo según el monto, la tasa y el plazo. No tiene en cuenta comisiones, seguros, impuestos u otros costos locales que puedan aplicarse según dónde vivas y el tipo de préstamo. Trata el resultado como una estimación del costo de intereses y amortización en sí, no el costo total completo.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de Ahorro`,
      description: `— consulta cómo crece un monto de ahorro con el interés compuesto, lo opuesto a pedir prestado.`,
    },
  },

  de: {
    whatIsLoanCost: {
      heading: `Was ein Kredit tatsächlich kostet`,
      body: `Ein Kredit mit fester Rate und gleichbleibenden monatlichen Raten (ein Annuitätendarlehen) kostet mehr als der geliehene Betrag, weil jede Rate sowohl Zinsen als auch Tilgung enthält. Dieser Rechner ermittelt deine tatsächliche monatliche Rate und was du über die gesamte Laufzeit insgesamt zahlst, Zinsen eingeschlossen.`,
    },
    formula: {
      heading: `Die Formel`,
      intro: `Die monatliche Rate wird mit der Standard-Annuitätenformel berechnet:`,
      code: `M = P × r × (1+r)^n / ((1+r)^n − 1)`,
      note: `P ist der Kreditbetrag, r ist der monatliche Zinssatz (Jahreszins geteilt durch 12 und durch 100), und n ist die Anzahl der monatlichen Raten. Die Formel ergibt eine gleichbleibende monatliche Rate über die gesamte Laufzeit.`,
    },
    amortization: {
      heading: `Wie sich die Raten über die Zeit aufteilen`,
      body: `Auch wenn die monatliche Rate gleich bleibt, ändert sich die Aufteilung zwischen Zinsen und Tilgung. Frühe Raten bestehen größtenteils aus Zinsen, weil die Zinsen auf die Restschuld berechnet werden, die zu Beginn am größten ist. Mit sinkender Restschuld fließt ein wachsender Anteil jeder Rate stattdessen in die Tilgung.`,
    },
    factors: {
      heading: `Was deinen Zinssatz beeinflusst`,
      body: `Der Zinssatz, der dir tatsächlich angeboten wird, hängt von mehreren Faktoren ab: Kreditwürdigkeit, Höhe der Anzahlung, Kreditlaufzeit, und ob der Zinssatz fest oder variabel ist. Das sind sachliche Faktoren, die deinen tatsächlichen Zinssatz beeinflussen, keine Finanzberatung darüber, welche Wahl für dich richtig ist.`,
    },
    limitations: {
      heading: `Einschränkungen`,
      body: `Dieser Rechner zeigt die reinen Kreditkosten basierend auf Betrag, Zinssatz und Laufzeit. Er berücksichtigt keine Gebühren, Versicherungen, Steuern oder andere lokale Kosten, die je nach Wohnort und Kreditart anfallen können. Betrachte das Ergebnis als Schätzung der reinen Zins- und Tilgungskosten, nicht als vollständige Gesamtkosten.`,
    },
    related: {
      heading: `Verwandter Rechner`,
      linkText: `Sparrechner`,
      description: `— sieh, wie ein Sparbetrag mit Zinseszins wächst, das Gegenteil von Leihen.`,
    },
  },

  ja: {
    whatIsLoanCost: {
      heading: `ローンの本当のコスト`,
      body: `固定金利で毎月同じ金額を返済するローン（元利均等返済ローン）は、借りた金額よりも多く支払うことになります。毎回の返済額に利息と元金の両方が含まれているためです。この計算機では、実際の毎月の返済額と、利息を含めた返済期間全体での総支払額を計算します。`,
    },
    formula: {
      heading: `計算式`,
      intro: `毎月の返済額は、標準的な元利均等返済の計算式で求められます。`,
      code: `M = P × r × (1+r)^n / ((1+r)^n − 1)`,
      note: `Pは借入額、rは月利（年利を12と100で割った値）、nは返済回数です。この式により、返済期間全体を通じて一定の毎月返済額が得られます。`,
    },
    amortization: {
      heading: `返済額の内訳は時間とともに変化する`,
      body: `毎月の返済額は一定でも、利息と元金の内訳は変化します。返済初期は利息の割合が大きくなります。利息は残高に対して計算され、残高は返済開始時が最も大きいためです。残高が減るにつれて、毎回の返済額のうち元金に充てられる割合が徐々に増えていきます。`,
    },
    factors: {
      heading: `金利に影響する要因`,
      body: `実際に提示される金利は、信用情報、頭金の額、返済期間、固定金利か変動金利かなど、いくつかの要因によって決まります。これらは実際の金利に影響する事実的な要因であり、どの選択があなたにとって最適かというアドバイスではありません。`,
    },
    limitations: {
      heading: `限界`,
      body: `この計算機は、借入額、金利、返済期間に基づく純粋なローンコストを示しています。手数料、保険料、税金、居住地やローンの種類によって発生する可能性のあるその他の地域固有のコストは考慮していません。結果は利息と元金の返済コストそのものの見積もりとして捉え、総コストの完全な数字ではないと考えてください。`,
    },
    related: {
      heading: `関連する計算機`,
      linkText: `積立計算機`,
      description: `— 複利で貯蓄がどう増えるか確認できます。借り入れとは逆の仕組みです。`,
    },
  },

  zh: {
    whatIsLoanCost: {
      heading: `贷款到底要花多少钱`,
      body: `固定利率、每月还款金额相同的贷款（等额本息贷款）实际花费会超过你借的金额，因为每一期还款都同时包含利息和本金。这个计算器会算出你实际的月供，以及整个还款期内（含利息）的总还款额。`,
    },
    formula: {
      heading: `计算公式`,
      intro: `月供使用标准的等额本息公式计算：`,
      code: `M = P × r × (1+r)^n / ((1+r)^n − 1)`,
      note: `P是贷款本金，r是月利率（年利率除以12再除以100），n是还款期数（月）。这个公式在整个还款期内给出固定不变的月供金额。`,
    },
    amortization: {
      heading: `还款如何随时间分配`,
      body: `虽然月供金额始终不变，但利息和本金的比例会发生变化。早期还款中利息占比更高，因为利息是按剩余本金计算的，而剩余本金在开始阶段最大。随着本金余额减少，每期还款中用于偿还本金的比例会逐渐增加。`,
    },
    factors: {
      heading: `什么会影响你的利率`,
      body: `你实际能获得的利率取决于多个因素：信用记录、首付比例、贷款期限，以及利率是固定还是浮动。这些是影响你实际利率的客观因素，不是关于哪种选择最适合你的财务建议。`,
    },
    limitations: {
      heading: `局限性`,
      body: `这个计算器展示的是基于本金、利率和期限得出的纯贷款成本。它没有考虑手续费、保险、税费，或根据居住地和贷款类型可能产生的其他本地费用。请把结果当作利息和本金成本本身的估算，而不是完整的总成本。`,
    },
    related: {
      heading: `相关计算器`,
      linkText: `储蓄计算器`,
      description: `— 看看储蓄金额如何通过复利增长，这与借贷正好相反。`,
    },
  },

  ko: {
    whatIsLoanCost: {
      heading: `대출은 실제로 얼마나 드는가`,
      body: `고정 금리에 매달 같은 금액을 갚는 대출(원리금균등상환 대출)은 빌린 금액보다 더 많이 갚게 됩니다. 매번 상환액에 이자와 원금이 모두 포함되기 때문입니다. 이 계산기는 실제 월 상환액과 이자를 포함해 전체 기간 동안 총 얼마를 갚게 되는지 계산합니다.`,
    },
    formula: {
      heading: `계산식`,
      intro: `월 상환액은 표준 원리금균등상환 공식으로 계산됩니다.`,
      code: `M = P × r × (1+r)^n / ((1+r)^n − 1)`,
      note: `P는 대출 원금, r은 월 이자율(연 이자율을 12와 100으로 나눈 값), n은 월 상환 횟수입니다. 이 공식은 전체 기간 동안 동일한 월 상환액을 산출합니다.`,
    },
    amortization: {
      heading: `시간에 따른 상환액 구성 변화`,
      body: `월 상환액은 동일하게 유지되지만, 이자와 원금의 비율은 계속 달라집니다. 초기 상환액은 대부분 이자입니다. 이자는 남은 잔액을 기준으로 계산되고, 잔액은 초기에 가장 크기 때문입니다. 잔액이 줄어들수록 매 상환액에서 원금으로 들어가는 비중이 점점 커집니다.`,
    },
    factors: {
      heading: `금리에 영향을 주는 요인`,
      body: `실제로 제시받는 금리는 신용 점수, 계약금 규모, 대출 기간, 고정 금리인지 변동 금리인지 등 여러 요인에 따라 달라집니다. 이는 실제 금리에 영향을 주는 사실적 요인일 뿐, 어떤 선택이 당신에게 옳은지에 대한 금융 조언이 아닙니다.`,
    },
    limitations: {
      heading: `한계점`,
      body: `이 계산기는 금액, 금리, 기간을 기준으로 한 순수한 대출 비용을 보여줍니다. 거주 지역과 대출 종류에 따라 발생할 수 있는 수수료, 보험료, 세금 등 기타 지역별 비용은 반영하지 않습니다. 결과는 이자와 원금 상환 비용 자체에 대한 추정치로 받아들이고, 전체 총비용은 아니라는 점을 염두에 두세요.`,
    },
    related: {
      heading: `관련 계산기`,
      linkText: `저축 계산기`,
      description: `— 복리로 저축액이 어떻게 늘어나는지 확인해 보세요. 대출과 반대되는 개념입니다.`,
    },
  },

  hi: {
    whatIsLoanCost: {
      heading: `लोन की असली लागत क्या होती है`,
      body: `स्थिर ब्याज दर और बराबर मासिक किस्तों वाला लोन (एक amortizing लोन) आपके उधार लिए गए राशि से ज़्यादा खर्च करवाता है, क्योंकि हर किस्त में ब्याज और मूलधन दोनों शामिल होते हैं। यह कैलकुलेटर आपकी असली मासिक किस्त और पूरी अवधि में ब्याज सहित कुल भुगतान निकालता है।`,
    },
    formula: {
      heading: `फ़ॉर्मूला`,
      intro: `मासिक किस्त सामान्य amortization फ़ॉर्मूले से निकाली जाती है:`,
      code: `M = P × r × (1+r)^n / ((1+r)^n − 1)`,
      note: `P लोन की राशि है, r मासिक ब्याज दर है (वार्षिक दर को 12 और 100 से भाग देकर), और n मासिक भुगतानों की संख्या है। यह फ़ॉर्मूला पूरी अवधि में एक बराबर मासिक किस्त देता है।`,
    },
    amortization: {
      heading: `समय के साथ किस्तें कैसे बंटती हैं`,
      body: `मासिक किस्त एक जैसी रहने के बावजूद, ब्याज और मूलधन के बीच का बंटवारा बदलता रहता है। शुरुआती किस्तों में ज़्यादातर हिस्सा ब्याज का होता है, क्योंकि ब्याज बकाया राशि पर लगता है, जो शुरुआत में सबसे ज़्यादा होती है। जैसे-जैसे बकाया राशि घटती है, हर किस्त का बढ़ता हुआ हिस्सा मूलधन चुकाने में जाता है।`,
    },
    factors: {
      heading: `आपकी दर को क्या प्रभावित करता है`,
      body: `आपको जो असली दर मिलती है वह कई चीज़ों पर निर्भर करती है: क्रेडिट स्कोर, डाउन पेमेंट का आकार, लोन की अवधि, और दर स्थिर है या बदलती रहने वाली। ये तथ्यात्मक कारक हैं जो आपकी असली दर को प्रभावित करते हैं, यह कोई वित्तीय सलाह नहीं है कि आपके लिए कौन सा विकल्प सही है।`,
    },
    limitations: {
      heading: `सीमाएँ`,
      body: `यह कैलकुलेटर राशि, दर और अवधि के आधार पर सिर्फ़ शुद्ध लोन लागत दिखाता है। यह फ़ीस, बीमा, टैक्स, या आपके रहने की जगह और लोन के प्रकार के हिसाब से लागू होने वाली अन्य स्थानीय लागतों को ध्यान में नहीं रखता। नतीजे को ब्याज और मूलधन की लागत का अनुमान मानें, न कि पूरी कुल लागत।`,
    },
    related: {
      heading: `संबंधित कैलकुलेटर`,
      linkText: `बचत कैलकुलेटर`,
      description: `— देखें कि चक्रवृद्धि ब्याज से बचत राशि कैसे बढ़ती है, जो उधार लेने के बिल्कुल उलट है।`,
    },
  },

  id: {
    whatIsLoanCost: {
      heading: `Berapa sebenarnya biaya sebuah pinjaman`,
      body: `Pinjaman dengan suku bunga tetap dan cicilan bulanan yang sama (pinjaman amortisasi) menghabiskan biaya lebih banyak daripada jumlah yang kamu pinjam, karena setiap cicilan berisi bunga sekaligus pokok pinjaman. Kalkulator ini menghitung cicilan bulanan aktualmu dan total yang kamu bayar selama seluruh masa pinjaman, termasuk bunga.`,
    },
    formula: {
      heading: `Rumusnya`,
      intro: `Cicilan bulanan dihitung dengan rumus amortisasi standar:`,
      code: `M = P × r × (1+r)^n / ((1+r)^n − 1)`,
      note: `P adalah jumlah pinjaman, r adalah suku bunga bulanan (suku bunga tahunan dibagi 12 dan dibagi 100), dan n adalah jumlah cicilan bulanan. Rumus ini menghasilkan cicilan bulanan yang rata sepanjang masa pinjaman.`,
    },
    amortization: {
      heading: `Bagaimana cicilan terbagi seiring waktu`,
      body: `Meskipun cicilan bulanan tetap sama, pembagian antara bunga dan pokok pinjaman berubah. Cicilan awal sebagian besar adalah bunga, karena bunga dihitung dari sisa saldo, yang paling besar di awal. Seiring saldo berkurang, porsi setiap cicilan yang masuk ke pokok pinjaman semakin besar.`,
    },
    factors: {
      heading: `Apa yang memengaruhi suku bungamu`,
      body: `Suku bunga yang benar-benar ditawarkan kepadamu bergantung pada beberapa faktor: skor kredit, besarnya uang muka, jangka waktu pinjaman, dan apakah suku bunganya tetap atau mengambang. Ini adalah faktor faktual yang memengaruhi suku bunga aktualmu, bukan nasihat keuangan tentang pilihan mana yang tepat untukmu.`,
    },
    limitations: {
      heading: `Keterbatasan`,
      body: `Kalkulator ini menunjukkan biaya pinjaman murni berdasarkan jumlah, suku bunga, dan jangka waktu. Kalkulator ini tidak memperhitungkan biaya administrasi, asuransi, pajak, atau biaya lokal lain yang mungkin berlaku tergantung tempat tinggalmu dan jenis pinjamannya. Anggap hasilnya sebagai perkiraan biaya bunga dan pokok pinjaman itu sendiri, bukan total biaya lengkap.`,
    },
    related: {
      heading: `Kalkulator terkait`,
      linkText: `Kalkulator Tabungan`,
      description: `— lihat bagaimana jumlah tabungan tumbuh dengan bunga berbunga, kebalikan dari meminjam.`,
    },
  },
};

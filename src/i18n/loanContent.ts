export interface LoanContent {
  whatIsCompoundInterest: { heading: string; body: string };
  formula: { heading: string; intro: string; code: string; note: string };
  frequency: { heading: string; body: string };
  ruleOf72: { heading: string; body: string };
  limitations: { heading: string; body: string };
  related: { heading: string; linkText: string; description: string };
}

export const loanContent: Record<string, LoanContent> = {
  sv: {
    whatIsCompoundInterest: {
      heading: `Vad är ränta-på-ränta`,
      body: `Ränta-på-ränta innebär att räntan du tjänar läggs till kapitalet, så att nästa räntebetalning räknas på ett större belopp. Över tid gör det att sparande växer snabbare än med enkel ränta, där bara startbeloppet ger avkastning. Den här kalkylatorn räknar med månadsvis ränta-på-ränta, och du kan lägga till ett fast månadssparande som växer från sin egen insättningspunkt.`,
    },
    formula: {
      heading: `Formeln`,
      intro: `Grundformeln för ränta-på-ränta utan löpande insättningar är:`,
      code: `A = P × (1 + r/n)^(n×t)`,
      note: `P är startbeloppet, r är årsräntan (som decimaltal), n är antalet gånger räntan läggs till per år, och t är antalet år. Med ett månadligt sparbelopp adderas varje insättning till kapitalet och växer från sin egen startpunkt framåt, vilket är vad kalkylatorn ovan räknar med.`,
    },
    frequency: {
      heading: `Så mycket spelar räntefrekvensen roll`,
      body: `Ju oftare räntan läggs till, desto mer växer beloppet, men skillnaden är mindre dramatisk än man kan tro. 10 000 kr med 6 procents årsränta i tio år blir cirka 18 190 kr med årlig ränta, men bara marginellt mer, cirka 18 220 kr, med månadsvis ränta. Det är fortfarande värt att välja ett konto med tätare ränteberäkning, men det är inte den faktor som påverkar slutresultatet mest — sparhorisont och räntesats gör betydligt större skillnad.`,
    },
    ruleOf72: {
      heading: `72-regeln, en snabb tumregel`,
      body: `Vill du snabbt uppskatta hur lång tid det tar för ett sparbelopp att dubblas, dela 72 med räntesatsen. Vid 6 procents ränta tar det ungefär 72 / 6 = 12 år. Det är en förenkling, inte en exakt beräkning, men tillräckligt bra för att jämföra olika räntesatser i huvudet.`,
    },
    limitations: {
      heading: `Begränsningar`,
      body: `Resultatet är en projektion baserad på en konstant räntesats du själv anger. Verkliga sparkonton, fonder och investeringar har räntor och avkastning som varierar över tid, och resultatet tar inte hänsyn till skatt eller inflation. Se det som vägledning för att jämföra scenarion, inte som en garanterad framtida summa.`,
    },
    related: {
      heading: `Relaterad kalkylator`,
      linkText: `Avbetalningskalkylator`,
      description: `— se vad ett lån istället kostar dig totalt, motsatsen till att spara.`,
    },
  },

  en: {
    whatIsCompoundInterest: {
      heading: `What compound interest is`,
      body: `Compound interest means the interest you earn gets added to your balance, so the next interest payment is calculated on a larger amount. Over time this makes savings grow faster than with simple interest, where only the starting amount earns a return. This calculator compounds monthly, and you can add a fixed monthly contribution that grows from its own point of deposit onward.`,
    },
    formula: {
      heading: `The formula`,
      intro: `The base compound interest formula without ongoing contributions is:`,
      code: `A = P × (1 + r/n)^(n×t)`,
      note: `P is the starting amount, r is the annual interest rate (as a decimal), n is how many times per year interest is added, and t is the number of years. With a monthly contribution, each deposit is added to the balance and grows from its own starting point forward, which is what the calculator above computes.`,
    },
    frequency: {
      heading: `How much compounding frequency actually matters`,
      body: `The more often interest is added, the more the balance grows, but the difference is smaller than most people expect. $10,000 at a 6% annual rate over ten years grows to about $18,190 with annual compounding, and only marginally more, about $18,220, with monthly compounding. It's still worth choosing an account that compounds more often, but it isn't the factor that moves the final result the most — savings horizon and interest rate matter far more.`,
    },
    ruleOf72: {
      heading: `The Rule of 72, a quick shortcut`,
      body: `To quickly estimate how long it takes a savings amount to double, divide 72 by the interest rate. At 6% interest, that's roughly 72 / 6 = 12 years. It's a simplification, not an exact calculation, but good enough to compare interest rates in your head.`,
    },
    limitations: {
      heading: `Limitations`,
      body: `The result is a projection based on a constant interest rate you provide. Real savings accounts, funds, and investments have rates and returns that vary over time, and the result doesn't account for tax or inflation. Treat it as guidance for comparing scenarios, not a guaranteed future amount.`,
    },
    related: {
      heading: `Related calculator`,
      linkText: `Loan Cost Calculator`,
      description: `— see what a loan costs you in total instead, the opposite of saving.`,
    },
  },

  pt: {
    whatIsCompoundInterest: {
      heading: `O que são juros compostos`,
      body: `Juros compostos significam que os juros que você ganha são somados ao seu saldo, então o próximo pagamento de juros é calculado sobre um valor maior. Com o tempo, isso faz a poupança crescer mais rápido do que com juros simples, em que só o valor inicial rende. Esta calculadora capitaliza mensalmente, e você pode adicionar uma contribuição mensal fixa que cresce a partir do seu próprio ponto de depósito.`,
    },
    formula: {
      heading: `A fórmula`,
      intro: `A fórmula base de juros compostos sem contribuições contínuas é:`,
      code: `A = P × (1 + r/n)^(n×t)`,
      note: `P é o valor inicial, r é a taxa de juros anual (em decimal), n é quantas vezes por ano os juros são somados, e t é o número de anos. Com uma contribuição mensal, cada depósito é somado ao saldo e cresce a partir do seu próprio ponto de partida em diante, que é exatamente o que a calculadora acima calcula.`,
    },
    frequency: {
      heading: `O quanto a frequência de capitalização importa de verdade`,
      body: `Quanto mais vezes os juros são somados, mais o saldo cresce, mas a diferença é menor do que a maioria imagina. R$ 10.000 a uma taxa anual de 6% ao longo de dez anos chega a cerca de R$ 18.190 com capitalização anual, e apenas marginalmente mais, cerca de R$ 18.220, com capitalização mensal. Ainda vale a pena escolher uma conta que capitalize com mais frequência, mas não é o fator que mais influencia o resultado final — o horizonte de poupança e a taxa de juros importam muito mais.`,
    },
    ruleOf72: {
      heading: `A regra dos 72, um atalho rápido`,
      body: `Para estimar rapidamente quanto tempo leva para um valor poupado dobrar, divida 72 pela taxa de juros. A 6% de juros, isso é aproximadamente 72 / 6 = 12 anos. É uma simplificação, não um cálculo exato, mas boa o suficiente para comparar taxas de juros de cabeça.`,
    },
    limitations: {
      heading: `Limitações`,
      body: `O resultado é uma projeção baseada numa taxa de juros constante que você informa. Contas de poupança, fundos e investimentos reais têm taxas e retornos que variam ao longo do tempo, e o resultado não considera imposto ou inflação. Trate-o como orientação para comparar cenários, não como um valor futuro garantido.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de Custo de Empréstimo`,
      description: `— veja quanto um empréstimo custa no total, o oposto de poupar.`,
    },
  },

  es: {
    whatIsCompoundInterest: {
      heading: `Qué es el interés compuesto`,
      body: `El interés compuesto significa que el interés que ganas se suma a tu saldo, así que el siguiente pago de interés se calcula sobre un monto mayor. Con el tiempo, esto hace que los ahorros crezcan más rápido que con el interés simple, donde solo el monto inicial genera rendimiento. Esta calculadora capitaliza mensualmente, y puedes añadir una aportación mensual fija que crece desde su propio punto de depósito.`,
    },
    formula: {
      heading: `La fórmula`,
      intro: `La fórmula base del interés compuesto sin aportaciones continuas es:`,
      code: `A = P × (1 + r/n)^(n×t)`,
      note: `P es el monto inicial, r es la tasa de interés anual (en decimal), n es cuántas veces al año se suma el interés, y t es el número de años. Con una aportación mensual, cada depósito se suma al saldo y crece desde su propio punto de partida en adelante, que es justo lo que calcula la calculadora de arriba.`,
    },
    frequency: {
      heading: `Cuánto importa realmente la frecuencia de capitalización`,
      body: `Cuantas más veces se suma el interés, más crece el saldo, pero la diferencia es menor de lo que la mayoría espera. 10.000 € a una tasa anual del 6% durante diez años llega a unos 18.190 € con capitalización anual, y solo marginalmente más, unos 18.220 €, con capitalización mensual. Sigue valiendo la pena elegir una cuenta que capitalice con más frecuencia, pero no es el factor que más mueve el resultado final — el horizonte de ahorro y la tasa de interés importan mucho más.`,
    },
    ruleOf72: {
      heading: `La regla del 72, un atajo rápido`,
      body: `Para estimar rápidamente cuánto tarda un monto ahorrado en duplicarse, divide 72 entre la tasa de interés. Con un 6% de interés, eso es aproximadamente 72 / 6 = 12 años. Es una simplificación, no un cálculo exacto, pero suficiente para comparar tasas de interés mentalmente.`,
    },
    limitations: {
      heading: `Limitaciones`,
      body: `El resultado es una proyección basada en una tasa de interés constante que tú indicas. Las cuentas de ahorro, fondos e inversiones reales tienen tasas y rendimientos que varían con el tiempo, y el resultado no tiene en cuenta impuestos ni inflación. Trátalo como una guía para comparar escenarios, no como un monto futuro garantizado.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de Costo de Préstamo`,
      description: `— consulta cuánto te cuesta un préstamo en total, lo opuesto a ahorrar.`,
    },
  },

  de: {
    whatIsCompoundInterest: {
      heading: `Was Zinseszins ist`,
      body: `Zinseszins bedeutet, dass die Zinsen, die du verdienst, deinem Guthaben hinzugefügt werden, sodass die nächste Zinszahlung auf einem größeren Betrag berechnet wird. Über die Zeit lässt das Erspartes schneller wachsen als bei einfachen Zinsen, bei denen nur der Startbetrag Rendite abwirft. Dieser Rechner verzinst monatlich, und du kannst einen festen monatlichen Beitrag hinzufügen, der ab seinem eigenen Einzahlungszeitpunkt wächst.`,
    },
    formula: {
      heading: `Die Formel`,
      intro: `Die grundlegende Zinseszinsformel ohne laufende Einzahlungen lautet:`,
      code: `A = P × (1 + r/n)^(n×t)`,
      note: `P ist der Startbetrag, r ist der Jahreszins (als Dezimalzahl), n ist die Anzahl der Verzinsungen pro Jahr, und t ist die Anzahl der Jahre. Bei einem monatlichen Beitrag wird jede Einzahlung dem Guthaben hinzugefügt und wächst ab ihrem eigenen Startpunkt weiter, genau das berechnet der Rechner oben.`,
    },
    frequency: {
      heading: `Wie sehr die Verzinsungshäufigkeit wirklich zählt`,
      body: `Je öfter Zinsen hinzugefügt werden, desto mehr wächst das Guthaben, aber der Unterschied ist kleiner, als die meisten erwarten. 10.000 € bei 6 % Jahreszins wachsen über zehn Jahre bei jährlicher Verzinsung auf etwa 18.190 €, und bei monatlicher Verzinsung nur geringfügig mehr, auf etwa 18.220 €. Es lohnt sich trotzdem, ein Konto mit häufigerer Verzinsung zu wählen, aber das ist nicht der Faktor, der das Endergebnis am stärksten beeinflusst — Sparhorizont und Zinssatz spielen eine deutlich größere Rolle.`,
    },
    ruleOf72: {
      heading: `Die 72er-Regel, eine schnelle Faustregel`,
      body: `Um schnell abzuschätzen, wie lange es dauert, bis sich ein Sparbetrag verdoppelt, teile 72 durch den Zinssatz. Bei 6 % Zinsen sind das ungefähr 72 / 6 = 12 Jahre. Das ist eine Vereinfachung, keine exakte Berechnung, aber gut genug, um Zinssätze im Kopf zu vergleichen.`,
    },
    limitations: {
      heading: `Einschränkungen`,
      body: `Das Ergebnis ist eine Projektion, basierend auf einem konstanten Zinssatz, den du angibst. Echte Sparkonten, Fonds und Investitionen haben Zinsen und Renditen, die sich über die Zeit verändern, und das Ergebnis berücksichtigt weder Steuern noch Inflation. Betrachte es als Orientierung zum Vergleichen von Szenarien, nicht als garantierten zukünftigen Betrag.`,
    },
    related: {
      heading: `Verwandter Rechner`,
      linkText: `Kreditkostenrechner`,
      description: `— sieh, was ein Kredit dich stattdessen insgesamt kostet, das Gegenteil von Sparen.`,
    },
  },

  ja: {
    whatIsCompoundInterest: {
      heading: `複利とは何か`,
      body: `複利とは、得た利息が元本に加算され、次の利息計算がより大きな金額に対して行われる仕組みです。時間が経つにつれて、これは単利（最初の元本だけに利息がつく方式）よりも貯蓄を速く増やします。この計算機は毎月複利計算を行い、毎月の積立額を追加すると、それぞれの積立が入金された時点から独自に増えていきます。`,
    },
    formula: {
      heading: `計算式`,
      intro: `継続的な積立がない場合の基本的な複利の式は次のとおりです。`,
      code: `A = P × (1 + r/n)^(n×t)`,
      note: `Pは初期金額、rは年利率（小数）、nは年間の利息計算回数、tは年数です。毎月積立をする場合、各積立は残高に加算され、それぞれの入金時点から独自に増えていきます。これが上の計算機が実際に計算している内容です。`,
    },
    frequency: {
      heading: `複利計算の頻度は実際どれくらい重要か`,
      body: `利息が計算される頻度が高いほど残高は増えますが、その差は多くの人が思うより小さいものです。年利6%で10,000の元本を10年間運用すると、年1回の複利計算では約18,190になり、月次複利計算でもわずかに多い約18,220にしかなりません。より頻繁に複利計算される口座を選ぶ価値は依然としてありますが、最終結果に最も大きく影響する要因ではありません。運用期間と金利のほうがはるかに大きな差を生みます。`,
    },
    ruleOf72: {
      heading: `72の法則、素早い目安`,
      body: `貯蓄額が2倍になるまでの期間をすばやく見積もるには、72を金利で割ります。金利6%なら、おおよそ72 ÷ 6 = 12年です。これは簡略化された目安であり正確な計算ではありませんが、頭の中で金利を比較するには十分です。`,
    },
    limitations: {
      heading: `限界`,
      body: `この結果は、あなたが入力した一定の金利に基づく予測です。実際の預金口座や投資信託、投資商品の金利や利回りは時間とともに変動し、この結果には税金やインフレは考慮されていません。将来の確定した金額としてではなく、シナリオを比較するための目安として捉えてください。`,
    },
    related: {
      heading: `関連する計算機`,
      linkText: `ローン費用計算機`,
      description: `— 貯蓄とは逆に、ローンが総額でいくらかかるか確認できます。`,
    },
  },

  zh: {
    whatIsCompoundInterest: {
      heading: `什么是复利`,
      body: `复利是指你获得的利息会计入本金，这样下一次计息就会基于更大的金额来计算。随着时间推移，这会让存款比单利（只有最初本金产生收益）增长得更快。这个计算器按月计息，你还可以添加一笔固定的月度存款，每笔存款从其存入的那一刻起独立开始增长。`,
    },
    formula: {
      heading: `计算公式`,
      intro: `没有持续存款情况下的基本复利公式是：`,
      code: `A = P × (1 + r/n)^(n×t)`,
      note: `P是初始金额，r是年利率（小数形式），n是每年计息的次数，t是年数。如果有月度存款，每笔存款都会计入余额，并从各自的存入时间点开始独立增长，这正是上面计算器实际计算的内容。`,
    },
    frequency: {
      heading: `计息频率到底有多重要`,
      body: `计息越频繁，余额增长越多，但差异比大多数人想象的要小。以年利率6%计算，10,000元存十年，按年计息约增长到18,190元，按月计息也只是略多一点，约18,220元。选择计息更频繁的账户仍然值得，但这不是影响最终结果最大的因素——存款期限和利率的影响要大得多。`,
    },
    ruleOf72: {
      heading: `72法则，一个快速估算法`,
      body: `想快速估算存款翻倍需要多长时间，用72除以利率即可。以6%的利率计算，大约是72 ÷ 6 = 12年。这是一个简化估算，不是精确计算，但足以在心算中比较不同利率。`,
    },
    limitations: {
      heading: `局限性`,
      body: `这个结果是基于你输入的恒定利率做出的预测。实际的储蓄账户、基金和投资的利率和回报会随时间变化，而且结果没有考虑税费或通货膨胀。请把它当作比较不同方案的参考，而不是保证的未来金额。`,
    },
    related: {
      heading: `相关计算器`,
      linkText: `贷款费用计算器`,
      description: `— 看看贷款总共要花费多少，这与储蓄正好相反。`,
    },
  },

  ko: {
    whatIsCompoundInterest: {
      heading: `복리란 무엇인가`,
      body: `복리는 얻은 이자가 잔액에 더해져서, 다음 이자 계산이 더 큰 금액을 기준으로 이루어지는 방식입니다. 시간이 지나면 이는 원금에만 이자가 붙는 단리보다 저축을 더 빠르게 늘어나게 합니다. 이 계산기는 매월 복리로 계산하며, 매월 일정 금액을 추가하면 각 적립금이 입금된 시점부터 독립적으로 불어납니다.`,
    },
    formula: {
      heading: `계산식`,
      intro: `추가 적립이 없는 기본 복리 공식은 다음과 같습니다.`,
      code: `A = P × (1 + r/n)^(n×t)`,
      note: `P는 초기 금액, r은 연 이자율(소수), n은 연간 이자 계산 횟수, t는 연수입니다. 매월 적립하는 경우, 각 적립금은 잔액에 더해져 각자의 시작 시점부터 불어나며, 이것이 위 계산기가 실제로 계산하는 방식입니다.`,
    },
    frequency: {
      heading: `이자 계산 빈도가 실제로 얼마나 중요한가`,
      body: `이자가 자주 계산될수록 잔액은 더 늘어나지만, 그 차이는 대부분 예상하는 것보다 작습니다. 연 6% 금리로 10,000을 10년간 운용하면, 연복리로는 약 18,190이 되고, 월복리로도 약 18,220으로 아주 조금 더 늘어날 뿐입니다. 더 자주 복리 계산되는 계좌를 선택하는 것은 여전히 가치가 있지만, 최종 결과에 가장 큰 영향을 주는 요인은 아닙니다. 저축 기간과 금리가 훨씬 더 큰 차이를 만듭니다.`,
    },
    ruleOf72: {
      heading: `72의 법칙, 빠른 어림 계산법`,
      body: `저축액이 두 배가 되는 데 걸리는 시간을 빠르게 추정하려면, 72를 이자율로 나누세요. 금리 6%라면 대략 72 ÷ 6 = 12년입니다. 이는 정확한 계산이 아니라 단순화된 방법이지만, 머릿속으로 이자율을 비교하기에는 충분합니다.`,
    },
    limitations: {
      heading: `한계점`,
      body: `이 결과는 사용자가 입력한 일정한 이자율을 기준으로 한 예측입니다. 실제 저축 계좌, 펀드, 투자 상품의 금리와 수익률은 시간에 따라 변동하며, 이 결과는 세금이나 인플레이션을 반영하지 않습니다. 확정된 미래 금액이 아니라 여러 시나리오를 비교하기 위한 참고 자료로 받아들이세요.`,
    },
    related: {
      heading: `관련 계산기`,
      linkText: `대출 비용 계산기`,
      description: `— 저축과 반대로 대출이 총 얼마나 드는지 확인해 보세요.`,
    },
  },

  hi: {
    whatIsCompoundInterest: {
      heading: `चक्रवृद्धि ब्याज क्या है`,
      body: `चक्रवृद्धि ब्याज का मतलब है कि आपको मिलने वाला ब्याज आपके बैलेंस में जुड़ जाता है, इसलिए अगली ब्याज गणना एक बड़ी राशि पर होती है। समय के साथ, यह साधारण ब्याज की तुलना में बचत को तेज़ी से बढ़ाता है, जहां सिर्फ़ शुरुआती राशि पर ही रिटर्न मिलता है। यह कैलकुलेटर मासिक चक्रवृद्धि से गणना करता है, और आप एक तय मासिक जमा राशि जोड़ सकते हैं जो अपने जमा होने के समय से बढ़ना शुरू करती है।`,
    },
    formula: {
      heading: `फ़ॉर्मूला`,
      intro: `बिना किसी लगातार जमा के चक्रवृद्धि ब्याज का मूल फ़ॉर्मूला है:`,
      code: `A = P × (1 + r/n)^(n×t)`,
      note: `P शुरुआती राशि है, r वार्षिक ब्याज दर है (दशमलव में), n यह बताता है कि साल में कितनी बार ब्याज जोड़ा जाता है, और t सालों की संख्या है। मासिक जमा के साथ, हर जमा राशि बैलेंस में जुड़ जाती है और अपने शुरुआती बिंदु से आगे बढ़ती है, जो ऊपर का कैलकुलेटर वास्तव में गणना करता है।`,
    },
    frequency: {
      heading: `ब्याज गणना की आवृत्ति वास्तव में कितनी मायने रखती है`,
      body: `ब्याज जितनी बार जोड़ा जाता है, बैलेंस उतना ज़्यादा बढ़ता है, लेकिन फ़र्क ज़्यादातर लोगों की उम्मीद से कम होता है। 6% सालाना दर पर 10,000 दस साल में सालाना चक्रवृद्धि से लगभग 18,190 हो जाता है, और मासिक चक्रवृद्धि से सिर्फ़ थोड़ा ज़्यादा, लगभग 18,220 हो जाता है। ज़्यादा बार चक्रवृद्धि होने वाला खाता चुनना अभी भी फ़ायदेमंद है, लेकिन यह वह कारक नहीं है जो अंतिम नतीजे को सबसे ज़्यादा प्रभावित करता है — बचत की अवधि और ब्याज दर कहीं ज़्यादा फ़र्क डालते हैं।`,
    },
    ruleOf72: {
      heading: `72 का नियम, एक झटपट अंदाज़ा`,
      body: `यह जल्दी अंदाज़ा लगाने के लिए कि किसी बचत राशि को दोगुना होने में कितना समय लगेगा, 72 को ब्याज दर से भाग दें। 6% ब्याज पर, यह लगभग 72 / 6 = 12 साल है। यह एक सरलीकरण है, सटीक गणना नहीं, लेकिन दिमाग में ब्याज दरों की तुलना करने के लिए काफ़ी अच्छा है।`,
    },
    limitations: {
      heading: `सीमाएँ`,
      body: `यह नतीजा आपके द्वारा दी गई एक स्थिर ब्याज दर पर आधारित एक अनुमान है। असली बचत खातों, फंडों और निवेशों की दरें और रिटर्न समय के साथ बदलते रहते हैं, और यह नतीजा टैक्स या महंगाई को ध्यान में नहीं रखता। इसे परिदृश्यों की तुलना के लिए एक मार्गदर्शन मानें, गारंटीशुदा भविष्य की राशि नहीं।`,
    },
    related: {
      heading: `संबंधित कैलकुलेटर`,
      linkText: `ऋण लागत कैलकुलेटर`,
      description: `— देखें कि लोन की कुल लागत कितनी होती है, जो बचत के बिल्कुल उलट है।`,
    },
  },

  id: {
    whatIsCompoundInterest: {
      heading: `Apa itu bunga berbunga`,
      body: `Bunga berbunga berarti bunga yang kamu dapatkan ditambahkan ke saldo, sehingga pembayaran bunga berikutnya dihitung dari jumlah yang lebih besar. Seiring waktu, ini membuat tabungan tumbuh lebih cepat dibandingkan bunga sederhana, di mana hanya jumlah awal yang menghasilkan imbal hasil. Kalkulator ini menghitung bunga berbunga bulanan, dan kamu bisa menambahkan setoran bulanan tetap yang tumbuh sejak titik setornya sendiri.`,
    },
    formula: {
      heading: `Rumusnya`,
      intro: `Rumus dasar bunga berbunga tanpa setoran berkelanjutan adalah:`,
      code: `A = P × (1 + r/n)^(n×t)`,
      note: `P adalah jumlah awal, r adalah suku bunga tahunan (dalam desimal), n adalah berapa kali bunga ditambahkan per tahun, dan t adalah jumlah tahun. Dengan setoran bulanan, setiap setoran ditambahkan ke saldo dan tumbuh dari titik awalnya sendiri, itulah yang dihitung kalkulator di atas.`,
    },
    frequency: {
      heading: `Seberapa besar pengaruh frekuensi bunga berbunga`,
      body: `Semakin sering bunga ditambahkan, semakin besar saldo tumbuh, tetapi perbedaannya lebih kecil dari yang kebanyakan orang kira. 10.000 dengan suku bunga tahunan 6% selama sepuluh tahun tumbuh menjadi sekitar 18.190 dengan bunga berbunga tahunan, dan hanya sedikit lebih banyak, sekitar 18.220, dengan bunga berbunga bulanan. Tetap layak memilih rekening yang menghitung bunga lebih sering, tapi itu bukan faktor yang paling memengaruhi hasil akhir — jangka waktu menabung dan suku bunga jauh lebih berpengaruh.`,
    },
    ruleOf72: {
      heading: `Aturan 72, cara cepat memperkirakan`,
      body: `Untuk cepat memperkirakan berapa lama waktu yang dibutuhkan sebuah tabungan untuk berlipat ganda, bagi 72 dengan suku bunga. Pada bunga 6%, itu kira-kira 72 / 6 = 12 tahun. Ini adalah penyederhanaan, bukan perhitungan pasti, tapi cukup baik untuk membandingkan suku bunga di kepala.`,
    },
    limitations: {
      heading: `Keterbatasan`,
      body: `Hasilnya adalah proyeksi berdasarkan suku bunga tetap yang kamu masukkan sendiri. Rekening tabungan, reksa dana, dan investasi sungguhan memiliki suku bunga dan imbal hasil yang berubah seiring waktu, dan hasilnya tidak memperhitungkan pajak atau inflasi. Anggap ini sebagai panduan untuk membandingkan skenario, bukan jumlah pasti di masa depan.`,
    },
    related: {
      heading: `Kalkulator terkait`,
      linkText: `Kalkulator Biaya Pinjaman`,
      description: `— lihat berapa total biaya sebuah pinjaman, kebalikan dari menabung.`,
    },
  },
};

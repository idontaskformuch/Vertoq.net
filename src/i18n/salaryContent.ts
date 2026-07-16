export interface SalaryContent {
  whatIsSalary: { heading: string; body: string };
  effectiveRate: { heading: string; body: string };
  limitations: { heading: string; body: string };
  related: { heading: string; linkText: string; description: string };
}

export const salaryContent: Record<string, SalaryContent> = {
  sv: {
    whatIsSalary: {
      heading: `Hur kalkylatorn räknar`,
      body: `Kalkylatorn drar av en enda skattesats, som du själv anger, från din bruttolön för att visa nettolönen. Det är en medvetet generell beräkning, inte kopplad till något specifikt lands skattetabeller, skiktgränser eller avdrag, eftersom det skiljer sig för mycket mellan länder för att kunna byggas in i en enda global kalkylator.`,
    },
    effectiveRate: {
      heading: `Effektiv skattesats, inte marginalskatt`,
      body: `De flesta verkliga skattesystem är progressiva, olika delar av inkomsten beskattas med olika procentsatser, så den faktiska skatten är sällan en enda platt siffra. Talet du anger här bör vara din effektiva skattesats, det vill säga total skatt delat med total bruttoinkomst, snarare än den högsta marginalskattesatsen du betalar på den sista delen av inkomsten.`,
    },
    limitations: {
      heading: `Begränsningar`,
      body: `Det här är inte skatterådgivning och representerar inget specifikt lands regler, avdrag, gränsvärden eller sociala avgifter. Använd kalkylatorn för att snabbt uppskatta effekten av en given skattesats, inte för att fastställa din faktiska skatt, kontrollera alltid mot din lokala skattemyndighet eller en rådgivare för exakta siffror.`,
    },
    related: {
      heading: `Relaterad kalkylator`,
      linkText: `Procenträknare`,
      description: `— för andra typer av procentberäkningar.`,
    },
  },

  en: {
    whatIsSalary: {
      heading: `How the calculator works`,
      body: `The calculator subtracts a single tax rate, which you provide, from your gross income to show net income. This is deliberately generic, not tied to any specific country's tax tables, brackets, or deductions, because those differ too much between countries to build into a single global calculator.`,
    },
    effectiveRate: {
      heading: `Effective rate, not marginal rate`,
      body: `Most real tax systems are progressive, different portions of income are taxed at different rates, so the actual tax is rarely a single flat number. The figure you enter here should be your effective tax rate, meaning total tax divided by total gross income, rather than the highest marginal rate you pay on the last portion of your income.`,
    },
    limitations: {
      heading: `Limitations`,
      body: `This isn't tax advice and doesn't represent any specific country's rules, deductions, thresholds, or social contributions. Use the calculator to quickly estimate the effect of a given tax rate, not to determine your actual tax, always check against your local tax authority or an advisor for exact figures.`,
    },
    related: {
      heading: `Related calculator`,
      linkText: `Percentage Calculator`,
      description: `— for other types of percentage math.`,
    },
  },

  pt: {
    whatIsSalary: {
      heading: `Como a calculadora funciona`,
      body: `A calculadora subtrai uma única alíquota de imposto, que você informa, do seu salário bruto para mostrar o salário líquido. Isso é deliberadamente genérico, não vinculado às tabelas fiscais, faixas ou deduções de nenhum país específico, porque essas diferenças são grandes demais entre países para caber numa única calculadora global.`,
    },
    effectiveRate: {
      heading: `Alíquota efetiva, não alíquota marginal`,
      body: `A maioria dos sistemas fiscais reais é progressiva, partes diferentes da renda são tributadas em alíquotas diferentes, então o imposto real raramente é um único número fixo. O valor que você informa aqui deve ser sua alíquota efetiva, ou seja, imposto total dividido pela renda bruta total, e não a maior alíquota marginal que você paga sobre a última parte da sua renda.`,
    },
    limitations: {
      heading: `Limitações`,
      body: `Isso não é aconselhamento fiscal e não representa as regras, deduções, limites ou contribuições sociais de nenhum país específico. Use a calculadora para estimar rapidamente o efeito de uma alíquota, não para determinar seu imposto real, sempre confira com sua autoridade fiscal local ou um consultor para números exatos.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de Porcentagem`,
      description: `— para outros tipos de cálculo percentual.`,
    },
  },

  es: {
    whatIsSalary: {
      heading: `Cómo funciona la calculadora`,
      body: `La calculadora resta una única tasa de impuesto, que tú indicas, de tu salario bruto para mostrar el salario neto. Esto es deliberadamente genérico, no vinculado a las tablas fiscales, tramos ni deducciones de ningún país específico, porque esas diferencias son demasiado grandes entre países para incluirlas en una sola calculadora global.`,
    },
    effectiveRate: {
      heading: `Tasa efectiva, no tasa marginal`,
      body: `La mayoría de los sistemas fiscales reales son progresivos, distintas partes del ingreso se gravan con distintas tasas, así que el impuesto real rara vez es una sola cifra fija. El valor que indiques aquí debería ser tu tasa efectiva de impuesto, es decir, el impuesto total dividido entre el ingreso bruto total, y no la tasa marginal más alta que pagas sobre la última parte de tu ingreso.`,
    },
    limitations: {
      heading: `Limitaciones`,
      body: `Esto no es asesoría fiscal y no representa las reglas, deducciones, umbrales ni contribuciones sociales de ningún país específico. Usa la calculadora para estimar rápidamente el efecto de una tasa dada, no para determinar tu impuesto real, siempre verifica con tu autoridad fiscal local o un asesor para cifras exactas.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de Porcentaje`,
      description: `— para otros tipos de cálculos porcentuales.`,
    },
  },

  de: {
    whatIsSalary: {
      heading: `So rechnet der Rechner`,
      body: `Der Rechner zieht einen einzigen Steuersatz, den du angibst, von deinem Bruttoeinkommen ab, um das Nettoeinkommen zu zeigen. Das ist bewusst generisch gehalten, nicht an die Steuertabellen, Stufen oder Abzüge eines bestimmten Landes gebunden, weil sich diese zwischen Ländern zu stark unterscheiden, um sie in einen einzigen globalen Rechner einzubauen.`,
    },
    effectiveRate: {
      heading: `Effektiver Satz, nicht Grenzsteuersatz`,
      body: `Die meisten echten Steuersysteme sind progressiv, unterschiedliche Teile des Einkommens werden mit unterschiedlichen Sätzen besteuert, sodass die tatsächliche Steuer selten eine einzige feste Zahl ist. Der hier eingegebene Wert sollte dein effektiver Steuersatz sein, also Gesamtsteuer geteilt durch Gesamtbruttoeinkommen, und nicht der höchste Grenzsteuersatz, den du auf den letzten Teil deines Einkommens zahlst.`,
    },
    limitations: {
      heading: `Einschränkungen`,
      body: `Das ist keine Steuerberatung und bildet nicht die Regeln, Abzüge, Schwellenwerte oder Sozialabgaben eines bestimmten Landes ab. Nutze den Rechner, um die Auswirkung eines gegebenen Steuersatzes schnell abzuschätzen, nicht um deine tatsächliche Steuer zu bestimmen, prüfe für genaue Zahlen immer bei deiner lokalen Steuerbehörde oder einem Berater nach.`,
    },
    related: {
      heading: `Verwandter Rechner`,
      linkText: `Prozentrechner`,
      description: `— für weitere Arten von Prozentrechnungen.`,
    },
  },

  ja: {
    whatIsSalary: {
      heading: `計算機の仕組み`,
      body: `この計算機は、あなたが入力した単一の税率を総支給額から差し引いて手取り額を表示します。これは意図的に一般化されたもので、特定の国の税率表、税率区分、控除には基づいていません。国によって差が大きすぎるため、単一のグローバル計算機に組み込むことができないからです。`,
    },
    effectiveRate: {
      heading: `実効税率であり、限界税率ではない`,
      body: `実際の税制の多くは累進課税であり、所得の異なる部分に異なる税率が適用されるため、実際の税額が単一の固定値になることはほとんどありません。ここに入力する数値は、所得の最後の部分に適用される最も高い限界税率ではなく、実効税率、つまり総税額を総支給額で割った値であるべきです。`,
    },
    limitations: {
      heading: `限界`,
      body: `これは税務アドバイスではなく、特定の国の規則、控除、しきい値、社会保険料を表すものでもありません。この計算機は、与えられた税率の影響をすばやく見積もるために使い、実際の税額を確定するためのものではありません。正確な数値については、必ず現地の税務当局や専門家に確認してください。`,
    },
    related: {
      heading: `関連する計算機`,
      linkText: `パーセント計算機`,
      description: `— その他のパーセント計算に使えます。`,
    },
  },

  zh: {
    whatIsSalary: {
      heading: `计算器的计算方式`,
      body: `这个计算器从你的税前收入中减去一个由你输入的单一税率，从而得出税后净收入。这是一个刻意做成通用形式的计算，不与任何特定国家的税率表、税级或抵扣项挂钩，因为各国之间的差异太大，无法内置到一个全球通用的计算器中。`,
    },
    effectiveRate: {
      heading: `实际税率，而非边际税率`,
      body: `大多数实际税制都是累进的，不同部分的收入按不同税率征税，因此实际税额很少是一个单一的固定数字。你在这里输入的数值应该是你的实际税率，即总税额除以总税前收入，而不是你在收入最后一部分适用的最高边际税率。`,
    },
    limitations: {
      heading: `局限性`,
      body: `这不是税务建议，也不代表任何特定国家的规则、抵扣、起征点或社会保险缴费。使用这个计算器可以快速估算某一税率带来的影响，但不能用它来确定你的实际税额，具体数字请务必咨询当地税务机关或专业顾问。`,
    },
    related: {
      heading: `相关计算器`,
      linkText: `百分比计算器`,
      description: `— 用于其他类型的百分比计算。`,
    },
  },

  ko: {
    whatIsSalary: {
      heading: `계산기의 계산 방식`,
      body: `이 계산기는 사용자가 입력한 단일 세율을 세전 소득에서 빼서 실수령액을 보여줍니다. 이는 의도적으로 범용화된 계산으로, 특정 국가의 세율표, 구간, 공제 항목과 연동되지 않습니다. 국가마다 차이가 너무 커서 하나의 전 세계용 계산기에 담을 수 없기 때문입니다.`,
    },
    effectiveRate: {
      heading: `한계세율이 아닌 실효세율`,
      body: `대부분의 실제 세금 제도는 누진적이며, 소득의 서로 다른 구간에 서로 다른 세율이 적용되므로 실제 세금은 단일한 고정 숫자인 경우가 드뭅니다. 여기에 입력하는 값은 소득의 마지막 구간에 적용되는 가장 높은 한계세율이 아니라, 총세금을 총 세전 소득으로 나눈 실효세율이어야 합니다.`,
    },
    limitations: {
      heading: `한계점`,
      body: `이는 세무 조언이 아니며 특정 국가의 규정, 공제, 기준액, 사회보험료를 반영하지 않습니다. 이 계산기는 주어진 세율의 영향을 빠르게 추정하는 용도로 사용하고, 실제 세금을 결정하는 데 사용하지 마세요. 정확한 수치는 반드시 현지 세무 당국이나 전문가에게 확인하세요.`,
    },
    related: {
      heading: `관련 계산기`,
      linkText: `퍼센트 계산기`,
      description: `— 다른 종류의 퍼센트 계산에 사용할 수 있습니다.`,
    },
  },

  hi: {
    whatIsSalary: {
      heading: `कैलकुलेटर कैसे गणना करता है`,
      body: `यह कैलकुलेटर आपकी बताई गई एक ही टैक्स दर को आपकी ग्रॉस इनकम में से घटाकर नेट इनकम दिखाता है। यह जानबूझकर सामान्य रखा गया है, किसी खास देश की टैक्स तालिकाओं, स्लैब या छूट से नहीं जुड़ा, क्योंकि ये देशों के बीच इतनी अलग होती हैं कि एक ही वैश्विक कैलकुलेटर में समेटी नहीं जा सकतीं।`,
    },
    effectiveRate: {
      heading: `प्रभावी दर, मार्जिनल दर नहीं`,
      body: `ज़्यादातर असली टैक्स सिस्टम प्रगतिशील होते हैं, यानी आय के अलग-अलग हिस्सों पर अलग-अलग दरों से टैक्स लगता है, इसलिए असली टैक्स शायद ही कभी एक अकेला स्थिर आंकड़ा होता है। यहां जो आंकड़ा आप डालते हैं वह आपकी प्रभावी टैक्स दर होनी चाहिए, यानी कुल टैक्स भाग कुल ग्रॉस इनकम से, न कि आय के आख़िरी हिस्से पर लगने वाली सबसे ऊंची मार्जिनल दर।`,
    },
    limitations: {
      heading: `सीमाएँ`,
      body: `यह टैक्स सलाह नहीं है और किसी खास देश के नियमों, छूट, सीमाओं या सामाजिक अंशदान को नहीं दर्शाता। इस कैलकुलेटर का उपयोग किसी दी गई टैक्स दर के असर का जल्दी अंदाज़ा लगाने के लिए करें, न कि अपना असली टैक्स तय करने के लिए, सटीक आंकड़ों के लिए हमेशा अपने स्थानीय टैक्स विभाग या सलाहकार से जांच करें।`,
    },
    related: {
      heading: `संबंधित कैलकुलेटर`,
      linkText: `प्रतिशत कैलकुलेटर`,
      description: `— अन्य प्रकार की प्रतिशत गणनाओं के लिए।`,
    },
  },

  id: {
    whatIsSalary: {
      heading: `Cara kerja kalkulator`,
      body: `Kalkulator ini mengurangi satu tarif pajak, yang kamu masukkan sendiri, dari gaji kotormu untuk menunjukkan gaji bersih. Ini sengaja dibuat generik, tidak terkait dengan tabel pajak, golongan, atau potongan negara mana pun, karena perbedaannya terlalu besar antar negara untuk dimasukkan ke satu kalkulator global.`,
    },
    effectiveRate: {
      heading: `Tarif efektif, bukan tarif marjinal`,
      body: `Sebagian besar sistem pajak sungguhan bersifat progresif, bagian pendapatan yang berbeda dikenai tarif yang berbeda, sehingga pajak sebenarnya jarang berupa satu angka tetap. Angka yang kamu masukkan di sini seharusnya adalah tarif pajak efektifmu, yaitu total pajak dibagi total pendapatan kotor, bukan tarif marjinal tertinggi yang kamu bayar atas bagian terakhir pendapatanmu.`,
    },
    limitations: {
      heading: `Keterbatasan`,
      body: `Ini bukan nasihat pajak dan tidak mewakili aturan, potongan, ambang batas, atau iuran sosial negara mana pun secara spesifik. Gunakan kalkulator ini untuk memperkirakan dengan cepat efek dari tarif pajak tertentu, bukan untuk menentukan pajak sebenarnya, selalu periksa dengan otoritas pajak setempat atau konsultan untuk angka yang tepat.`,
    },
    related: {
      heading: `Kalkulator terkait`,
      linkText: `Kalkulator Persen`,
      description: `— untuk jenis perhitungan persentase lainnya.`,
    },
  },
};

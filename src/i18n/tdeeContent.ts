export interface TdeeContent {
  whatIsTdee: { heading: string; body: string };
  formula: {
    heading: string;
    maleLabel: string;
    femaleLabel: string;
    mifflinLabel: string;
    mifflinNote: string;
    mifflinMaleCode: string;
    mifflinFemaleCode: string;
    harrisLabel: string;
    harrisNote: string;
    harrisMaleCode: string;
    harrisFemaleCode: string;
  };
  activityTable: {
    heading: string;
    intro: string;
    levelHeader: string;
    multiplierHeader: string;
    rows: [string, string][];
  };
  useCase: { heading: string; body: string };
  limitations: { heading: string; body: string };
  related: { heading: string; linkText: string; description: string };
}

export const tdeeContent: Record<string, TdeeContent> = {
  sv: {
    whatIsTdee: {
      heading: `Vad är TDEE?`,
      body: `Total Daily Energy Expenditure (TDEE) är det totala antalet kalorier kroppen förbränner under en dag. Det kombinerar din basala ämnesomsättning (BMR), kalorierna som förbränns i vila, med kalorierna du förbränner genom vardagsaktivitet och träning. Det är oftast den siffran folk egentligen vill ha när de frågar hur många kalorier de behöver.`,
    },
    formula: {
      heading: `Så räknas BMR ut`,
      maleLabel: `Män:`,
      femaleLabel: `Kvinnor:`,
      mifflinLabel: `Mifflin-St Jeor (rekommenderad):`,
      mifflinNote: `Det är den här formeln kalkylatorn ovan använder. Den anses generellt ge en mer träffsäker uppskattning för dagens befolkning.`,
      mifflinMaleCode: `BMR = 10 × vikt (kg) + 6.25 × längd (cm) − 5 × ålder (år) + 5`,
      mifflinFemaleCode: `BMR = 10 × vikt (kg) + 6.25 × längd (cm) − 5 × ålder (år) − 161`,
      harrisLabel: `Harris-Benedict (äldre, fortfarande vanlig):`,
      harrisNote: `En äldre formel från 1919, reviderad 1984. Den används fortfarande mycket men tenderar att ge en något högre BMR-uppskattning än Mifflin-St Jeor.`,
      harrisMaleCode: `BMR = 88.362 + 13.397 × vikt (kg) + 4.799 × längd (cm) − 5.677 × ålder (år)`,
      harrisFemaleCode: `BMR = 447.593 + 9.247 × vikt (kg) + 3.098 × längd (cm) − 4.330 × ålder (år)`,
    },
    activityTable: {
      heading: `Multiplikatorer för aktivitetsnivå`,
      intro: `När BMR är känt multipliceras det med en aktivitetsfaktor för att ge TDEE:`,
      levelHeader: `Aktivitetsnivå`,
      multiplierHeader: `Multiplikator`,
      rows: [
        [`Stillasittande — lite eller ingen träning`, `× 1.2`],
        [`Lätt aktiv — träning 1 till 3 dagar i veckan`, `× 1.375`],
        [`Måttligt aktiv — träning 3 till 5 dagar i veckan`, `× 1.55`],
        [`Mycket aktiv — träning 6 till 7 dagar i veckan`, `× 1.725`],
        [`Extremt aktiv — fysiskt tungt arbete eller träning två gånger om dagen`, `× 1.9`],
      ],
    },
    useCase: {
      heading: `Att använda ditt TDEE`,
      body: `Ditt TDEE är din underhållssiffra, kalorierna som håller vikten ungefär stabil. För viktminskning motsvarar ett underskott på cirka 500 kcal om dagen under TDEE ungefär 0.5 kg viktminskning per vecka. För viktuppgång ger ett överskott på cirka 250 till 500 kcal om dagen en långsammare, magrare uppgång. Båda riktningarna fungerar bättre som ett intervall att utgå från än som ett exakt mål att träffa varje dag.`,
    },
    limitations: {
      heading: `Begränsningar`,
      body: `TDEE är en uppskattning, inte en mätning. Även med en träffsäker formel varierar den individuella ämnesomsättningen med ungefär 10 till 15 procent på grund av faktorer som genetik, muskelmassa och hormoner. Se siffran som en utgångspunkt och justera den utifrån hur din vikt faktiskt utvecklas över 2 till 3 veckor, snarare än att lita enbart på uppskattningen.`,
    },
    related: {
      heading: `Relaterad kalkylator`,
      linkText: `BMI-kalkylator`,
      description: `— se hur din vikt och längd förhåller sig till standardintervallen för BMI.`,
    },
  },

  en: {
    whatIsTdee: {
      heading: `What is TDEE?`,
      body: `Total Daily Energy Expenditure (TDEE) is the total number of calories your body burns in a day. It combines your basal metabolic rate (BMR), the calories burned at rest, with the calories burned through daily activity and exercise. It's the number most people actually want when they ask how many calories they need.`,
    },
    formula: {
      heading: `How BMR is calculated`,
      maleLabel: `Men:`,
      femaleLabel: `Women:`,
      mifflinLabel: `Mifflin-St Jeor (recommended):`,
      mifflinNote: `This is the formula the calculator above uses. It's generally considered the more accurate estimate for modern populations.`,
      mifflinMaleCode: `BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age (years) + 5`,
      mifflinFemaleCode: `BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age (years) − 161`,
      harrisLabel: `Harris-Benedict (older, still common):`,
      harrisNote: `An older formula from 1919, revised in 1984. It's still widely used but tends to overestimate BMR slightly compared to Mifflin-St Jeor.`,
      harrisMaleCode: `BMR = 88.362 + 13.397 × weight (kg) + 4.799 × height (cm) − 5.677 × age (years)`,
      harrisFemaleCode: `BMR = 447.593 + 9.247 × weight (kg) + 3.098 × height (cm) − 4.330 × age (years)`,
    },
    activityTable: {
      heading: `Activity level multipliers`,
      intro: `Once BMR is known, multiply it by an activity factor to get TDEE:`,
      levelHeader: `Activity level`,
      multiplierHeader: `Multiplier`,
      rows: [
        [`Sedentary — little or no exercise`, `× 1.2`],
        [`Light — exercise 1 to 3 days a week`, `× 1.375`],
        [`Moderate — exercise 3 to 5 days a week`, `× 1.55`],
        [`Active — exercise 6 to 7 days a week`, `× 1.725`],
        [`Extra active — hard physical job or training twice a day`, `× 1.9`],
      ],
    },
    useCase: {
      heading: `Using your TDEE`,
      body: `Your TDEE is your maintenance number, the calories that keep your weight roughly stable. To lose weight, a deficit of about 500 kcal a day below TDEE corresponds to roughly 0.5 kg of weight loss a week. To gain weight, a surplus of about 250 to 500 kcal a day supports a slower, leaner gain. Both directions work better as a range to adjust from than a number to hit exactly every day.`,
    },
    limitations: {
      heading: `Limitations`,
      body: `TDEE is an estimate, not a measurement. Even with an accurate formula, individual metabolism varies by roughly 10 to 15% due to factors like genetics, muscle mass, and hormones. Treat the number as a starting point, and adjust it based on how your weight actually trends over 2 to 3 weeks rather than relying on the estimate alone.`,
    },
    related: {
      heading: `Related calculator`,
      linkText: `BMI Calculator`,
      description: `— see how your weight and height compare to standard BMI ranges.`,
    },
  },

  pt: {
    whatIsTdee: {
      heading: `O que é o TDEE?`,
      body: `O Gasto Energético Total Diário (TDEE) é o número total de calorias que seu corpo queima em um dia. Ele combina sua taxa metabólica basal (TMB), as calorias queimadas em repouso, com as calorias que você queima por meio da atividade diária e exercício. É esse o número que a maioria das pessoas realmente quer saber quando pergunta quantas calorias precisa.`,
    },
    formula: {
      heading: `Como a TMB é calculada`,
      maleLabel: `Homens:`,
      femaleLabel: `Mulheres:`,
      mifflinLabel: `Mifflin-St Jeor (recomendada):`,
      mifflinNote: `É essa a fórmula usada pela calculadora acima. Em geral, é considerada a estimativa mais precisa para as populações atuais.`,
      mifflinMaleCode: `TMB = 10 × peso (kg) + 6.25 × altura (cm) − 5 × idade (anos) + 5`,
      mifflinFemaleCode: `TMB = 10 × peso (kg) + 6.25 × altura (cm) − 5 × idade (anos) − 161`,
      harrisLabel: `Harris-Benedict (mais antiga, ainda comum):`,
      harrisNote: `Uma fórmula mais antiga, de 1919, revisada em 1984. Ainda é bastante usada, mas costuma superestimar levemente a TMB em comparação com Mifflin-St Jeor.`,
      harrisMaleCode: `TMB = 88.362 + 13.397 × peso (kg) + 4.799 × altura (cm) − 5.677 × idade (anos)`,
      harrisFemaleCode: `TMB = 447.593 + 9.247 × peso (kg) + 3.098 × altura (cm) − 4.330 × idade (anos)`,
    },
    activityTable: {
      heading: `Multiplicadores de nível de atividade`,
      intro: `Com a TMB em mãos, multiplique-a por um fator de atividade para chegar ao TDEE:`,
      levelHeader: `Nível de atividade`,
      multiplierHeader: `Multiplicador`,
      rows: [
        [`Sedentário — pouco ou nenhum exercício`, `× 1.2`],
        [`Levemente ativo — exercício de 1 a 3 dias por semana`, `× 1.375`],
        [`Moderadamente ativo — exercício de 3 a 5 dias por semana`, `× 1.55`],
        [`Muito ativo — exercício de 6 a 7 dias por semana`, `× 1.725`],
        [`Extremamente ativo — trabalho físico pesado ou treino duas vezes por dia`, `× 1.9`],
      ],
    },
    useCase: {
      heading: `Usando seu TDEE`,
      body: `Seu TDEE é o número de manutenção, as calorias que mantêm seu peso mais ou menos estável. Para perder peso, um déficit de cerca de 500 kcal por dia abaixo do TDEE corresponde a aproximadamente 0.5 kg de perda de peso por semana. Para ganhar peso, um superávit de cerca de 250 a 500 kcal por dia favorece um ganho mais lento e mais magro. Nos dois casos, funciona melhor como uma faixa de referência do que como um número exato a bater todos os dias.`,
    },
    limitations: {
      heading: `Limitações`,
      body: `O TDEE é uma estimativa, não uma medição. Mesmo com uma fórmula precisa, o metabolismo individual varia cerca de 10 a 15% devido a fatores como genética, massa muscular e hormônios. Use o número como ponto de partida e ajuste-o com base em como seu peso realmente evolui ao longo de 2 a 3 semanas, em vez de confiar apenas na estimativa.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de IMC`,
      description: `— veja como seu peso e altura se comparam às faixas padrão de IMC.`,
    },
  },

  es: {
    whatIsTdee: {
      heading: `¿Qué es el TDEE?`,
      body: `El Gasto Energético Total Diario (TDEE) es el número total de calorías que tu cuerpo quema en un día. Combina tu tasa metabólica basal (TMB), las calorías que quemas en reposo, con las calorías que quemas mediante la actividad diaria y el ejercicio. Es el número que la mayoría de la gente realmente quiere saber cuando pregunta cuántas calorías necesita.`,
    },
    formula: {
      heading: `Cómo se calcula la TMB`,
      maleLabel: `Hombres:`,
      femaleLabel: `Mujeres:`,
      mifflinLabel: `Mifflin-St Jeor (recomendada):`,
      mifflinNote: `Esta es la fórmula que usa la calculadora de arriba. En general se considera la estimación más precisa para las poblaciones actuales.`,
      mifflinMaleCode: `TMB = 10 × peso (kg) + 6.25 × estatura (cm) − 5 × edad (años) + 5`,
      mifflinFemaleCode: `TMB = 10 × peso (kg) + 6.25 × estatura (cm) − 5 × edad (años) − 161`,
      harrisLabel: `Harris-Benedict (más antigua, aún común):`,
      harrisNote: `Una fórmula más antigua, de 1919, revisada en 1984. Sigue siendo muy usada, pero tiende a sobreestimar ligeramente la TMB frente a Mifflin-St Jeor.`,
      harrisMaleCode: `TMB = 88.362 + 13.397 × peso (kg) + 4.799 × estatura (cm) − 5.677 × edad (años)`,
      harrisFemaleCode: `TMB = 447.593 + 9.247 × peso (kg) + 3.098 × estatura (cm) − 4.330 × edad (años)`,
    },
    activityTable: {
      heading: `Multiplicadores de nivel de actividad`,
      intro: `Una vez que conoces tu TMB, multiplícala por un factor de actividad para obtener el TDEE:`,
      levelHeader: `Nivel de actividad`,
      multiplierHeader: `Multiplicador`,
      rows: [
        [`Sedentario — poco o ningún ejercicio`, `× 1.2`],
        [`Ligeramente activo — ejercicio de 1 a 3 días a la semana`, `× 1.375`],
        [`Moderadamente activo — ejercicio de 3 a 5 días a la semana`, `× 1.55`],
        [`Muy activo — ejercicio de 6 a 7 días a la semana`, `× 1.725`],
        [`Extremadamente activo — trabajo físico exigente o entrenamiento dos veces al día`, `× 1.9`],
      ],
    },
    useCase: {
      heading: `Cómo usar tu TDEE`,
      body: `Tu TDEE es tu número de mantenimiento, las calorías que mantienen tu peso más o menos estable. Para perder peso, un déficit de unas 500 kcal diarias por debajo del TDEE equivale a aproximadamente 0.5 kg de pérdida de peso a la semana. Para ganar peso, un superávit de unas 250 a 500 kcal diarias favorece una ganancia más lenta y magra. En ambos casos, funciona mejor como un rango de referencia que como una cifra exacta que cumplir cada día.`,
    },
    limitations: {
      heading: `Limitaciones`,
      body: `El TDEE es una estimación, no una medición. Incluso con una fórmula precisa, el metabolismo individual varía en torno a un 10 a 15% por factores como la genética, la masa muscular y las hormonas. Toma el número como punto de partida y ajústalo según cómo evolucione realmente tu peso a lo largo de 2 a 3 semanas, en lugar de confiar únicamente en la estimación.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de IMC`,
      description: `— comprueba cómo se comparan tu peso y estatura con los rangos estándar de IMC.`,
    },
  },

  de: {
    whatIsTdee: {
      heading: `Was ist der TDEE?`,
      body: `Der Gesamtenergieumsatz (TDEE) ist die Gesamtzahl an Kalorien, die dein Körper an einem Tag verbrennt. Er setzt sich aus deinem Grundumsatz (BMR), den Kalorien im Ruhezustand, und den Kalorien zusammen, die du durch Alltagsaktivität und Sport verbrennst. Das ist die Zahl, die die meisten Menschen eigentlich wissen wollen, wenn sie nach ihrem Kalorienbedarf fragen.`,
    },
    formula: {
      heading: `So wird der Grundumsatz berechnet`,
      maleLabel: `Männer:`,
      femaleLabel: `Frauen:`,
      mifflinLabel: `Mifflin-St Jeor (empfohlen):`,
      mifflinNote: `Diese Formel verwendet der Rechner oben. Sie gilt allgemein als die genauere Schätzung für die heutige Bevölkerung.`,
      mifflinMaleCode: `Grundumsatz = 10 × Gewicht (kg) + 6.25 × Größe (cm) − 5 × Alter (Jahre) + 5`,
      mifflinFemaleCode: `Grundumsatz = 10 × Gewicht (kg) + 6.25 × Größe (cm) − 5 × Alter (Jahre) − 161`,
      harrisLabel: `Harris-Benedict (älter, noch verbreitet):`,
      harrisNote: `Eine ältere Formel aus dem Jahr 1919, überarbeitet 1984. Sie wird immer noch häufig verwendet, überschätzt den Grundumsatz im Vergleich zu Mifflin-St Jeor aber tendenziell leicht.`,
      harrisMaleCode: `Grundumsatz = 88.362 + 13.397 × Gewicht (kg) + 4.799 × Größe (cm) − 5.677 × Alter (Jahre)`,
      harrisFemaleCode: `Grundumsatz = 447.593 + 9.247 × Gewicht (kg) + 3.098 × Größe (cm) − 4.330 × Alter (Jahre)`,
    },
    activityTable: {
      heading: `Aktivitätsfaktoren`,
      intro: `Sobald der Grundumsatz bekannt ist, wird er mit einem Aktivitätsfaktor multipliziert, um den TDEE zu erhalten:`,
      levelHeader: `Aktivitätslevel`,
      multiplierHeader: `Faktor`,
      rows: [
        [`Sitzend — wenig oder keine Bewegung`, `× 1.2`],
        [`Leicht aktiv — Sport an 1 bis 3 Tagen pro Woche`, `× 1.375`],
        [`Mäßig aktiv — Sport an 3 bis 5 Tagen pro Woche`, `× 1.55`],
        [`Sehr aktiv — Sport an 6 bis 7 Tagen pro Woche`, `× 1.725`],
        [`Extrem aktiv — körperlich fordernder Job oder zweimal tägliches Training`, `× 1.9`],
      ],
    },
    useCase: {
      heading: `So nutzt du deinen TDEE`,
      body: `Dein TDEE ist deine Erhaltungskalorienzahl, also die Menge, die dein Gewicht ungefähr stabil hält. Für eine Gewichtsabnahme entspricht ein Defizit von etwa 500 kcal pro Tag unter dem TDEE ungefähr 0.5 kg Gewichtsverlust pro Woche. Für eine Gewichtszunahme unterstützt ein Überschuss von etwa 250 bis 500 kcal pro Tag eine langsamere, magerere Zunahme. In beide Richtungen funktioniert es besser, die Zahl als anpassbaren Richtwert zu sehen statt als exakten Wert, den man jeden Tag treffen muss.`,
    },
    limitations: {
      heading: `Einschränkungen`,
      body: `Der TDEE ist eine Schätzung, keine Messung. Selbst mit einer genauen Formel variiert der individuelle Stoffwechsel um etwa 10 bis 15 Prozent, bedingt durch Faktoren wie Genetik, Muskelmasse und Hormone. Behandle die Zahl als Ausgangspunkt und passe sie anhand deines tatsächlichen Gewichtsverlaufs über 2 bis 3 Wochen an, statt dich allein auf die Schätzung zu verlassen.`,
    },
    related: {
      heading: `Verwandter Rechner`,
      linkText: `BMI-Rechner`,
      description: `— sieh, wie dein Gewicht und deine Größe im Vergleich zu den Standard-BMI-Bereichen stehen.`,
    },
  },

  ja: {
    whatIsTdee: {
      heading: `TDEEとは？`,
      body: `TDEE（総消費カロリー）とは、1日に体が消費するカロリーの合計です。安静時に消費されるカロリーである基礎代謝量（BMR）に、日常の活動や運動で消費するカロリーを加えたものです。「1日に必要なカロリーはどれくらいか」と考えるとき、多くの人が実際に知りたいのはこの数値です。`,
    },
    formula: {
      heading: `基礎代謝量の計算方法`,
      maleLabel: `男性：`,
      femaleLabel: `女性：`,
      mifflinLabel: `Mifflin-St Jeor式（推奨）：`,
      mifflinNote: `上の計算機で使われているのはこの式です。現代の集団に対してより正確な推定値を示すとされています。`,
      mifflinMaleCode: `BMR = 10 × 体重（kg）+ 6.25 × 身長（cm）− 5 × 年齢（歳）+ 5`,
      mifflinFemaleCode: `BMR = 10 × 体重（kg）+ 6.25 × 身長（cm）− 5 × 年齢（歳）− 161`,
      harrisLabel: `Harris-Benedict式（古いが今も広く使われる）：`,
      harrisNote: `1919年に発表され、1984年に改訂された古い式です。今でも広く使われていますが、Mifflin-St Jeor式に比べてBMRをやや高めに見積もる傾向があります。`,
      harrisMaleCode: `BMR = 88.362 + 13.397 × 体重（kg）+ 4.799 × 身長（cm）− 5.677 × 年齢（歳）`,
      harrisFemaleCode: `BMR = 447.593 + 9.247 × 体重（kg）+ 3.098 × 身長（cm）− 4.330 × 年齢（歳）`,
    },
    activityTable: {
      heading: `活動レベルの係数`,
      intro: `BMRが分かったら、活動係数をかけてTDEEを求めます。`,
      levelHeader: `活動レベル`,
      multiplierHeader: `係数`,
      rows: [
        [`座りがち — 運動はほとんどまたは全くしない`, `× 1.2`],
        [`軽い運動 — 週1〜3日運動する`, `× 1.375`],
        [`適度な運動 — 週3〜5日運動する`, `× 1.55`],
        [`活発 — 週6〜7日運動する`, `× 1.725`],
        [`非常に活発 — 肉体労働または1日2回のトレーニング`, `× 1.9`],
      ],
    },
    useCase: {
      heading: `TDEEの活用方法`,
      body: `TDEEは体重をほぼ維持できるカロリー量、つまり維持カロリーです。減量には、TDEEから1日あたり約500kcalを減らすことで、週あたり約0.5kgの減量に相当します。増量には、1日あたり約250〜500kcalを増やすことで、よりゆるやかで無駄の少ない増量ができます。どちらの方向も、毎日ぴったり合わせるべき数値というより、そこから調整していく目安として捉えるほうがうまくいきます。`,
    },
    limitations: {
      heading: `限界`,
      body: `TDEEはあくまで推定値であり、実測値ではありません。正確な計算式を使っても、遺伝、筋肉量、ホルモンなどの要因により、個人の代謝は10〜15%ほど変動します。この数値は出発点として捉え、推定値だけに頼るのではなく、2〜3週間の実際の体重の推移をもとに調整してください。`,
    },
    related: {
      heading: `関連する計算機`,
      linkText: `BMI計算機`,
      description: `— 体重と身長が標準的なBMI範囲とどう比較されるか確認できます。`,
    },
  },

  zh: {
    whatIsTdee: {
      heading: `什么是TDEE？`,
      body: `每日总能量消耗（TDEE）是你的身体一天内消耗的总热量。它由基础代谢率（BMR，即静息状态下消耗的热量）加上你通过日常活动和运动消耗的热量组成。当大多数人问自己每天需要多少热量时，他们真正想知道的其实就是这个数字。`,
    },
    formula: {
      heading: `基础代谢率如何计算`,
      maleLabel: `男性：`,
      femaleLabel: `女性：`,
      mifflinLabel: `Mifflin-St Jeor公式（推荐）：`,
      mifflinNote: `上面的计算器使用的就是这个公式。它通常被认为对现代人群的估算更准确。`,
      mifflinMaleCode: `BMR = 10 × 体重（kg）+ 6.25 × 身高（cm）− 5 × 年龄（岁）+ 5`,
      mifflinFemaleCode: `BMR = 10 × 体重（kg）+ 6.25 × 身高（cm）− 5 × 年龄（岁）− 161`,
      harrisLabel: `Harris-Benedict公式（较早，仍常用）：`,
      harrisNote: `这是一个更早的公式，提出于1919年，1984年修订。至今仍被广泛使用，但相比Mifflin-St Jeor公式，往往会略微高估BMR。`,
      harrisMaleCode: `BMR = 88.362 + 13.397 × 体重（kg）+ 4.799 × 身高（cm）− 5.677 × 年龄（岁）`,
      harrisFemaleCode: `BMR = 447.593 + 9.247 × 体重（kg）+ 3.098 × 身高（cm）− 4.330 × 年龄（岁）`,
    },
    activityTable: {
      heading: `活动水平系数`,
      intro: `知道BMR后，乘以一个活动系数即可得到TDEE：`,
      levelHeader: `活动水平`,
      multiplierHeader: `系数`,
      rows: [
        [`久坐 — 很少或没有运动`, `× 1.2`],
        [`轻度活动 — 每周运动1至3天`, `× 1.375`],
        [`中度活动 — 每周运动3至5天`, `× 1.55`],
        [`高度活动 — 每周运动6至7天`, `× 1.725`],
        [`极高活动 — 体力劳动工作或每天训练两次`, `× 1.9`],
      ],
    },
    useCase: {
      heading: `如何使用你的TDEE`,
      body: `你的TDEE是你的维持热量，即能让体重大致保持稳定的热量。若要减重，每天比TDEE少摄入约500千卡，大约相当于每周减重0.5公斤。若要增重，每天多摄入约250至500千卡，可以带来更缓慢、更精瘦的增重。无论哪个方向，把它当作一个可以调整的区间，而不是每天必须精确达到的数字，效果会更好。`,
    },
    limitations: {
      heading: `局限性`,
      body: `TDEE是一个估算值，而不是实测值。即使使用准确的公式，个体代谢也会因遗传、肌肉量和激素等因素而有大约10%至15%的差异。请把这个数字当作起点，并根据2至3周内体重的实际变化趋势来调整，而不要只依赖这个估算值。`,
    },
    related: {
      heading: `相关计算器`,
      linkText: `BMI计算器`,
      description: `— 看看你的体重和身高与标准BMI范围相比如何。`,
    },
  },

  ko: {
    whatIsTdee: {
      heading: `TDEE란 무엇인가요?`,
      body: `총 일일 에너지 소비량(TDEE)은 하루 동안 몸이 소비하는 총 칼로리입니다. 휴식 상태에서 소비되는 칼로리인 기초대사량(BMR)에 일상 활동과 운동으로 소비하는 칼로리를 더한 값입니다. 많은 사람이 하루에 필요한 칼로리를 물을 때 실제로 궁금해하는 것이 바로 이 수치입니다.`,
    },
    formula: {
      heading: `기초대사량 계산 방법`,
      maleLabel: `남성:`,
      femaleLabel: `여성:`,
      mifflinLabel: `Mifflin-St Jeor 공식 (권장):`,
      mifflinNote: `위 계산기에서 사용하는 공식이 바로 이것입니다. 일반적으로 현대인에게 더 정확한 추정치를 제공한다고 여겨집니다.`,
      mifflinMaleCode: `BMR = 10 × 체중(kg) + 6.25 × 키(cm) − 5 × 나이(세) + 5`,
      mifflinFemaleCode: `BMR = 10 × 체중(kg) + 6.25 × 키(cm) − 5 × 나이(세) − 161`,
      harrisLabel: `Harris-Benedict 공식 (더 오래됐지만 여전히 흔함):`,
      harrisNote: `1919년에 만들어져 1984년에 개정된 더 오래된 공식입니다. 지금도 널리 쓰이지만, Mifflin-St Jeor 공식보다 BMR을 다소 높게 추정하는 경향이 있습니다.`,
      harrisMaleCode: `BMR = 88.362 + 13.397 × 체중(kg) + 4.799 × 키(cm) − 5.677 × 나이(세)`,
      harrisFemaleCode: `BMR = 447.593 + 9.247 × 체중(kg) + 3.098 × 키(cm) − 4.330 × 나이(세)`,
    },
    activityTable: {
      heading: `활동 수준 계수`,
      intro: `BMR을 알면 활동 계수를 곱해 TDEE를 구할 수 있습니다:`,
      levelHeader: `활동 수준`,
      multiplierHeader: `계수`,
      rows: [
        [`거의 앉아서 생활 — 운동을 거의 또는 전혀 하지 않음`, `× 1.2`],
        [`가벼운 활동 — 주 1~3일 운동`, `× 1.375`],
        [`보통 활동 — 주 3~5일 운동`, `× 1.55`],
        [`활발한 활동 — 주 6~7일 운동`, `× 1.725`],
        [`매우 활발한 활동 — 육체노동 또는 하루 두 번 운동`, `× 1.9`],
      ],
    },
    useCase: {
      heading: `TDEE 활용하기`,
      body: `TDEE는 체중을 대략 유지시켜 주는 유지 칼로리입니다. 체중 감량을 위해서는 TDEE보다 하루 약 500kcal 적게 섭취하면 일주일에 약 0.5kg의 감량 효과가 있습니다. 체중 증가를 위해서는 하루 약 250~500kcal를 추가로 섭취하면 더 천천히, 더 군살 없이 체중을 늘릴 수 있습니다. 두 방향 모두 매일 정확히 맞춰야 하는 숫자보다는 조정해 나가는 범위로 여기는 편이 더 효과적입니다.`,
    },
    limitations: {
      heading: `한계점`,
      body: `TDEE는 추정치이지 실측값이 아닙니다. 정확한 공식을 사용하더라도 유전, 근육량, 호르몬 같은 요인 때문에 개인의 대사량은 약 10~15% 정도 차이가 날 수 있습니다. 이 수치를 출발점으로 삼고, 추정치에만 의존하기보다 2~3주간의 실제 체중 변화 추세를 보고 조정하세요.`,
    },
    related: {
      heading: `관련 계산기`,
      linkText: `BMI 계산기`,
      description: `— 체중과 키가 표준 BMI 범위와 어떻게 비교되는지 확인해 보세요.`,
    },
  },

  hi: {
    whatIsTdee: {
      heading: `TDEE क्या है?`,
      body: `टोटल डेली एनर्जी एक्सपेंडिचर (TDEE) एक दिन में आपका शरीर जितनी कुल कैलोरी खर्च करता है, उसका माप है। यह आपके बेसल मेटाबॉलिक रेट (BMR), यानी आराम की अवस्था में खर्च होने वाली कैलोरी, और रोज़ाना की गतिविधि व व्यायाम से खर्च होने वाली कैलोरी को जोड़कर बनता है। जब ज़्यादातर लोग पूछते हैं कि उन्हें रोज़ कितनी कैलोरी चाहिए, तो असल में वे यही आंकड़ा जानना चाहते हैं।`,
    },
    formula: {
      heading: `BMR कैसे निकाला जाता है`,
      maleLabel: `पुरुष:`,
      femaleLabel: `महिलाएं:`,
      mifflinLabel: `Mifflin-St Jeor (अनुशंसित):`,
      mifflinNote: `ऊपर दिया गया कैलकुलेटर इसी फ़ॉर्मूले का उपयोग करता है। इसे आमतौर पर आज की आबादी के लिए ज़्यादा सटीक अनुमान माना जाता है।`,
      mifflinMaleCode: `BMR = 10 × वज़न (kg) + 6.25 × लंबाई (cm) − 5 × उम्र (वर्ष) + 5`,
      mifflinFemaleCode: `BMR = 10 × वज़न (kg) + 6.25 × लंबाई (cm) − 5 × उम्र (वर्ष) − 161`,
      harrisLabel: `Harris-Benedict (पुराना, फिर भी आम):`,
      harrisNote: `यह 1919 का एक पुराना फ़ॉर्मूला है, जिसे 1984 में संशोधित किया गया। यह आज भी काफ़ी इस्तेमाल होता है, लेकिन Mifflin-St Jeor की तुलना में BMR को थोड़ा ज़्यादा आंकने की प्रवृत्ति रखता है।`,
      harrisMaleCode: `BMR = 88.362 + 13.397 × वज़न (kg) + 4.799 × लंबाई (cm) − 5.677 × उम्र (वर्ष)`,
      harrisFemaleCode: `BMR = 447.593 + 9.247 × वज़न (kg) + 3.098 × लंबाई (cm) − 4.330 × उम्र (वर्ष)`,
    },
    activityTable: {
      heading: `गतिविधि स्तर के गुणक`,
      intro: `BMR पता चलने के बाद, TDEE निकालने के लिए उसे एक गतिविधि गुणक से गुणा किया जाता है:`,
      levelHeader: `गतिविधि स्तर`,
      multiplierHeader: `गुणक`,
      rows: [
        [`बैठे रहने वाली जीवनशैली — बहुत कम या कोई व्यायाम नहीं`, `× 1.2`],
        [`हल्की सक्रियता — हफ़्ते में 1 से 3 दिन व्यायाम`, `× 1.375`],
        [`मध्यम सक्रियता — हफ़्ते में 3 से 5 दिन व्यायाम`, `× 1.55`],
        [`ज़्यादा सक्रियता — हफ़्ते में 6 से 7 दिन व्यायाम`, `× 1.725`],
        [`बहुत ज़्यादा सक्रियता — मेहनत वाला शारीरिक काम या दिन में दो बार ट्रेनिंग`, `× 1.9`],
      ],
    },
    useCase: {
      heading: `अपने TDEE का उपयोग कैसे करें`,
      body: `आपका TDEE आपकी मेंटेनेंस कैलोरी है, यानी वह कैलोरी जो आपके वज़न को लगभग स्थिर बनाए रखती है। वज़न कम करने के लिए, TDEE से रोज़ाना लगभग 500 kcal कम खाना हफ़्ते में करीब 0.5 kg वज़न घटाने के बराबर होता है। वज़न बढ़ाने के लिए, रोज़ाना लगभग 250 से 500 kcal ज़्यादा खाने से धीमी और कम फैट वाली वृद्धि होती है। दोनों ही मामलों में, इसे हर दिन बिल्कुल सटीक टारगेट करने के बजाय एक ऐसी रेंज की तरह देखना बेहतर है जिसे ज़रूरत के हिसाब से एडजस्ट किया जाए।`,
    },
    limitations: {
      heading: `सीमाएँ`,
      body: `TDEE एक अनुमान है, कोई माप नहीं। एक सटीक फ़ॉर्मूले के बावजूद, जेनेटिक्स, मांसपेशियों और हार्मोन जैसे कारकों की वजह से हर व्यक्ति का मेटाबॉलिज्म करीब 10 से 15% तक अलग हो सकता है। इस आंकड़े को एक शुरुआती बिंदु मानें, और सिर्फ़ अनुमान पर भरोसा करने के बजाय 2 से 3 हफ़्तों में अपने वज़न में आए असली बदलाव के हिसाब से इसे एडजस्ट करें।`,
    },
    related: {
      heading: `संबंधित कैलकुलेटर`,
      linkText: `BMI कैलकुलेटर`,
      description: `— देखें कि आपका वज़न और लंबाई मानक BMI सीमाओं से कैसे तुलना करते हैं।`,
    },
  },

  id: {
    whatIsTdee: {
      heading: `Apa itu TDEE?`,
      body: `Total Daily Energy Expenditure (TDEE) adalah jumlah total kalori yang dibakar tubuhmu dalam sehari. Ini menggabungkan tingkat metabolisme basal (BMR), kalori yang dibakar saat istirahat, dengan kalori yang kamu bakar melalui aktivitas harian dan olahraga. Ini adalah angka yang sebenarnya ingin diketahui kebanyakan orang saat bertanya berapa banyak kalori yang mereka butuhkan.`,
    },
    formula: {
      heading: `Cara menghitung BMR`,
      maleLabel: `Pria:`,
      femaleLabel: `Wanita:`,
      mifflinLabel: `Mifflin-St Jeor (direkomendasikan):`,
      mifflinNote: `Ini adalah rumus yang digunakan kalkulator di atas. Rumus ini umumnya dianggap memberikan perkiraan yang lebih akurat untuk populasi masa kini.`,
      mifflinMaleCode: `BMR = 10 × berat (kg) + 6.25 × tinggi (cm) − 5 × usia (tahun) + 5`,
      mifflinFemaleCode: `BMR = 10 × berat (kg) + 6.25 × tinggi (cm) − 5 × usia (tahun) − 161`,
      harrisLabel: `Harris-Benedict (lebih lama, masih umum):`,
      harrisNote: `Rumus yang lebih lama dari tahun 1919, direvisi pada tahun 1984. Masih banyak digunakan, tetapi cenderung sedikit melebih-lebihkan BMR dibandingkan Mifflin-St Jeor.`,
      harrisMaleCode: `BMR = 88.362 + 13.397 × berat (kg) + 4.799 × tinggi (cm) − 5.677 × usia (tahun)`,
      harrisFemaleCode: `BMR = 447.593 + 9.247 × berat (kg) + 3.098 × tinggi (cm) − 4.330 × usia (tahun)`,
    },
    activityTable: {
      heading: `Pengali tingkat aktivitas`,
      intro: `Setelah BMR diketahui, kalikan dengan faktor aktivitas untuk mendapatkan TDEE:`,
      levelHeader: `Tingkat aktivitas`,
      multiplierHeader: `Pengali`,
      rows: [
        [`Tidak banyak bergerak — sedikit atau tanpa olahraga`, `× 1.2`],
        [`Sedikit aktif — olahraga 1 hingga 3 hari seminggu`, `× 1.375`],
        [`Cukup aktif — olahraga 3 hingga 5 hari seminggu`, `× 1.55`],
        [`Aktif — olahraga 6 hingga 7 hari seminggu`, `× 1.725`],
        [`Sangat aktif — pekerjaan fisik berat atau latihan dua kali sehari`, `× 1.9`],
      ],
    },
    useCase: {
      heading: `Menggunakan TDEE kamu`,
      body: `TDEE kamu adalah angka pemeliharaan, yaitu kalori yang menjaga berat badanmu tetap relatif stabil. Untuk menurunkan berat badan, defisit sekitar 500 kkal per hari di bawah TDEE setara dengan penurunan berat badan sekitar 0.5 kg per minggu. Untuk menambah berat badan, surplus sekitar 250 hingga 500 kkal per hari mendukung kenaikan berat badan yang lebih lambat dan lebih ramping. Kedua arah ini bekerja lebih baik sebagai rentang yang bisa disesuaikan daripada angka pasti yang harus dicapai setiap hari.`,
    },
    limitations: {
      heading: `Keterbatasan`,
      body: `TDEE adalah perkiraan, bukan pengukuran. Bahkan dengan rumus yang akurat, metabolisme setiap orang bisa berbeda sekitar 10 hingga 15% karena faktor seperti genetika, massa otot, dan hormon. Anggap angka ini sebagai titik awal, dan sesuaikan berdasarkan bagaimana berat badanmu benar-benar berubah selama 2 hingga 3 minggu, bukan hanya mengandalkan perkiraan ini saja.`,
    },
    related: {
      heading: `Kalkulator terkait`,
      linkText: `Kalkulator BMI`,
      description: `— lihat bagaimana berat dan tinggi badanmu dibandingkan dengan rentang BMI standar.`,
    },
  },
};

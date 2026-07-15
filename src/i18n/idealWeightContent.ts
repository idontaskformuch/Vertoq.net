export interface IdealWeightContent {
  whatIsIdealWeight: { heading: string; body: string };
  formulas: {
    heading: string;
    intro: string;
    maleLabel: string;
    femaleLabel: string;
    devineLabel: string;
    devineMaleCode: string;
    devineFemaleCode: string;
    robinsonLabel: string;
    robinsonMaleCode: string;
    robinsonFemaleCode: string;
    hamwiLabel: string;
    hamwiMaleCode: string;
    hamwiFemaleCode: string;
  };
  disclaimer: { heading: string; body: string };
  limitations: { heading: string; body: string };
  related: {
    heading: string;
    bmiLinkText: string;
    bmiDescription: string;
    bodyfatLinkText: string;
    bodyfatDescription: string;
  };
}

export const idealWeightContent: Record<string, IdealWeightContent> = {
  sv: {
    whatIsIdealWeight: {
      heading: `Det finns ingen enda idealvikt`,
      body: `"Idealvikt"-formler togs ursprungligen fram för kliniskt bruk, som att uppskatta läkemedelsdoser, inte som personliga mål. Tre olika formler visas nedan sida vid sida med avsikt: att se spridningen mellan dem är ärligare än att välja en och presentera den som ett facit.`,
    },
    formulas: {
      heading: `De tre formlerna`,
      intro: `Alla tre uppskattar idealvikt utifrån längd (omvandlad till tum) och kön, för längder över 60 tum (152,4 cm):`,
      maleLabel: `Män:`,
      femaleLabel: `Kvinnor:`,
      devineLabel: `Devine (1974)`,
      devineMaleCode: `IBW = 50 + 2.3 × (längd i tum − 60) kg`,
      devineFemaleCode: `IBW = 45.5 + 2.3 × (längd i tum − 60) kg`,
      robinsonLabel: `Robinson (1983)`,
      robinsonMaleCode: `IBW = 52 + 1.9 × (längd i tum − 60) kg`,
      robinsonFemaleCode: `IBW = 49 + 1.7 × (längd i tum − 60) kg`,
      hamwiLabel: `Hamwi (1964)`,
      hamwiMaleCode: `IBW = 48.0 + 2.7 × (längd i tum − 60) kg`,
      hamwiFemaleCode: `IBW = 45.5 + 2.2 × (längd i tum − 60) kg`,
    },
    disclaimer: {
      heading: `Ingen personlig medicinsk vägledning`,
      body: `De här siffrorna är uppskattningar på populationsnivå, inte ett personligt mål. Faktisk hälsosam vikt beror på kroppsbyggnad, muskelmassa och individuella faktorer som ingen av formlerna kan se. Två personer med samma längd kan båda vara friska vid märkbart olika vikter.`,
    },
    limitations: {
      heading: `Begränsningar`,
      body: `De här formlerna föregår modern kroppssammansättningsforskning och togs fram för genomsnittliga vuxna kroppstyper. De var inte gjorda med idrottare, väldigt långa eller korta personer, eller ovanliga kroppsbyggnader i åtanke. De använder bara längd och kön, så två personer med väldigt olika mängd muskler och fett får samma siffra. Se resultatet som en grov referenspunkt, inte ett mål att träffa.`,
    },
    related: {
      heading: `Relaterade kalkylatorer`,
      bmiLinkText: `BMI-kalkylator`,
      bmiDescription: `— se hur din vikt och längd förhåller sig till standardintervallen för BMI.`,
      bodyfatLinkText: `Kroppsfettkalkylator`,
      bodyfatDescription: `— en mer direkt bild av kroppssammansättningen än enbart vikt.`,
    },
  },

  en: {
    whatIsIdealWeight: {
      heading: `There's no single ideal weight`,
      body: `"Ideal weight" formulas were originally developed for clinical use, like estimating drug dosages, not as personal targets. Three different formulas are shown below side by side on purpose: seeing the spread between them is more honest than picking one and presenting it as a definitive answer.`,
    },
    formulas: {
      heading: `The three formulas`,
      intro: `All three estimate ideal body weight from height (converted to inches) and sex, for heights above 60 inches (152.4 cm):`,
      maleLabel: `Men:`,
      femaleLabel: `Women:`,
      devineLabel: `Devine (1974)`,
      devineMaleCode: `IBW = 50 + 2.3 × (height in inches − 60) kg`,
      devineFemaleCode: `IBW = 45.5 + 2.3 × (height in inches − 60) kg`,
      robinsonLabel: `Robinson (1983)`,
      robinsonMaleCode: `IBW = 52 + 1.9 × (height in inches − 60) kg`,
      robinsonFemaleCode: `IBW = 49 + 1.7 × (height in inches − 60) kg`,
      hamwiLabel: `Hamwi (1964)`,
      hamwiMaleCode: `IBW = 48.0 + 2.7 × (height in inches − 60) kg`,
      hamwiFemaleCode: `IBW = 45.5 + 2.2 × (height in inches − 60) kg`,
    },
    disclaimer: {
      heading: `Not personal medical guidance`,
      body: `These numbers are population-level estimates, not a personalized target. Actual healthy weight depends on frame size, muscle mass, and individual factors none of these formulas can see. Two people at the same height can both be healthy at noticeably different weights.`,
    },
    limitations: {
      heading: `Limitations`,
      body: `These formulas predate modern body composition science and were designed for average adult body types. They weren't built with athletes, very tall or short people, or unusual builds in mind. They use only height and sex, so two people with very different amounts of muscle and fat get the same number. Treat the result as a rough reference point, not a target to hit.`,
    },
    related: {
      heading: `Related calculators`,
      bmiLinkText: `BMI Calculator`,
      bmiDescription: `— see how your weight and height compare to standard BMI ranges.`,
      bodyfatLinkText: `Body Fat Calculator`,
      bodyfatDescription: `— a more direct look at body composition than weight alone.`,
    },
  },

  pt: {
    whatIsIdealWeight: {
      heading: `Não existe um único peso ideal`,
      body: `As fórmulas de "peso ideal" foram originalmente criadas para uso clínico, como estimar doses de medicamentos, não como metas pessoais. Três fórmulas diferentes são mostradas abaixo lado a lado de propósito: ver a variação entre elas é mais honesto do que escolher uma e apresentá-la como resposta definitiva.`,
    },
    formulas: {
      heading: `As três fórmulas`,
      intro: `As três estimam o peso ideal a partir da altura (convertida em polegadas) e do sexo, para alturas acima de 60 polegadas (152,4 cm):`,
      maleLabel: `Homens:`,
      femaleLabel: `Mulheres:`,
      devineLabel: `Devine (1974)`,
      devineMaleCode: `IBW = 50 + 2.3 × (altura em polegadas − 60) kg`,
      devineFemaleCode: `IBW = 45.5 + 2.3 × (altura em polegadas − 60) kg`,
      robinsonLabel: `Robinson (1983)`,
      robinsonMaleCode: `IBW = 52 + 1.9 × (altura em polegadas − 60) kg`,
      robinsonFemaleCode: `IBW = 49 + 1.7 × (altura em polegadas − 60) kg`,
      hamwiLabel: `Hamwi (1964)`,
      hamwiMaleCode: `IBW = 48.0 + 2.7 × (altura em polegadas − 60) kg`,
      hamwiFemaleCode: `IBW = 45.5 + 2.2 × (altura em polegadas − 60) kg`,
    },
    disclaimer: {
      heading: `Não é orientação médica pessoal`,
      body: `Esses números são estimativas em nível populacional, não uma meta personalizada. O peso saudável real depende da estrutura corporal, da massa muscular e de fatores individuais que nenhuma dessas fórmulas consegue captar. Duas pessoas com a mesma altura podem estar saudáveis com pesos bem diferentes.`,
    },
    limitations: {
      heading: `Limitações`,
      body: `Essas fórmulas são anteriores à ciência moderna de composição corporal e foram criadas para tipos de corpo adulto médio. Não foram pensadas para atletas, pessoas muito altas ou baixas, ou compleições fora do comum. Elas usam apenas altura e sexo, então duas pessoas com quantidades de músculo e gordura bem diferentes recebem o mesmo número. Trate o resultado como um ponto de referência aproximado, não uma meta a ser atingida.`,
    },
    related: {
      heading: `Calculadoras relacionadas`,
      bmiLinkText: `Calculadora de IMC`,
      bmiDescription: `— veja como seu peso e altura se comparam às faixas padrão de IMC.`,
      bodyfatLinkText: `Calculadora de Gordura Corporal`,
      bodyfatDescription: `— um olhar mais direto sobre a composição corporal do que apenas o peso.`,
    },
  },

  es: {
    whatIsIdealWeight: {
      heading: `No existe un único peso ideal`,
      body: `Las fórmulas de "peso ideal" se crearon originalmente para uso clínico, como estimar dosis de medicamentos, no como objetivos personales. A propósito, se muestran abajo tres fórmulas distintas una junto a otra: ver el rango entre ellas es más honesto que elegir una y presentarla como respuesta definitiva.`,
    },
    formulas: {
      heading: `Las tres fórmulas`,
      intro: `Las tres estiman el peso ideal a partir de la estatura (convertida a pulgadas) y el sexo, para estaturas superiores a 60 pulgadas (152,4 cm):`,
      maleLabel: `Hombres:`,
      femaleLabel: `Mujeres:`,
      devineLabel: `Devine (1974)`,
      devineMaleCode: `IBW = 50 + 2.3 × (estatura en pulgadas − 60) kg`,
      devineFemaleCode: `IBW = 45.5 + 2.3 × (estatura en pulgadas − 60) kg`,
      robinsonLabel: `Robinson (1983)`,
      robinsonMaleCode: `IBW = 52 + 1.9 × (estatura en pulgadas − 60) kg`,
      robinsonFemaleCode: `IBW = 49 + 1.7 × (estatura en pulgadas − 60) kg`,
      hamwiLabel: `Hamwi (1964)`,
      hamwiMaleCode: `IBW = 48.0 + 2.7 × (estatura en pulgadas − 60) kg`,
      hamwiFemaleCode: `IBW = 45.5 + 2.2 × (estatura en pulgadas − 60) kg`,
    },
    disclaimer: {
      heading: `No es orientación médica personal`,
      body: `Estas cifras son estimaciones a nivel poblacional, no un objetivo personalizado. El peso saludable real depende de la complexión, la masa muscular y factores individuales que ninguna de estas fórmulas puede ver. Dos personas de la misma estatura pueden estar sanas con pesos notablemente distintos.`,
    },
    limitations: {
      heading: `Limitaciones`,
      body: `Estas fórmulas son anteriores a la ciencia moderna de la composición corporal y se diseñaron para tipos de cuerpo adulto promedio. No se pensaron para atletas, personas muy altas o bajas, ni complexiones poco habituales. Usan solo la estatura y el sexo, así que dos personas con cantidades muy distintas de músculo y grasa obtienen la misma cifra. Trata el resultado como un punto de referencia aproximado, no como un objetivo que alcanzar.`,
    },
    related: {
      heading: `Calculadoras relacionadas`,
      bmiLinkText: `Calculadora de IMC`,
      bmiDescription: `— comprueba cómo se comparan tu peso y estatura con los rangos estándar de IMC.`,
      bodyfatLinkText: `Calculadora de Grasa Corporal`,
      bodyfatDescription: `— una mirada más directa a la composición corporal que el peso por sí solo.`,
    },
  },

  de: {
    whatIsIdealWeight: {
      heading: `Es gibt kein einzelnes Idealgewicht`,
      body: `"Idealgewicht"-Formeln wurden ursprünglich für den klinischen Einsatz entwickelt, etwa um Medikamentendosen zu schätzen, nicht als persönliche Zielwerte. Absichtlich werden unten drei verschiedene Formeln nebeneinander gezeigt: die Spanne zwischen ihnen zu sehen ist ehrlicher, als eine auszuwählen und sie als endgültige Antwort darzustellen.`,
    },
    formulas: {
      heading: `Die drei Formeln`,
      intro: `Alle drei schätzen das Idealgewicht anhand der Größe (umgerechnet in Zoll) und des Geschlechts, für Körpergrößen über 60 Zoll (152,4 cm):`,
      maleLabel: `Männer:`,
      femaleLabel: `Frauen:`,
      devineLabel: `Devine (1974)`,
      devineMaleCode: `IBW = 50 + 2.3 × (Größe in Zoll − 60) kg`,
      devineFemaleCode: `IBW = 45.5 + 2.3 × (Größe in Zoll − 60) kg`,
      robinsonLabel: `Robinson (1983)`,
      robinsonMaleCode: `IBW = 52 + 1.9 × (Größe in Zoll − 60) kg`,
      robinsonFemaleCode: `IBW = 49 + 1.7 × (Größe in Zoll − 60) kg`,
      hamwiLabel: `Hamwi (1964)`,
      hamwiMaleCode: `IBW = 48.0 + 2.7 × (Größe in Zoll − 60) kg`,
      hamwiFemaleCode: `IBW = 45.5 + 2.2 × (Größe in Zoll − 60) kg`,
    },
    disclaimer: {
      heading: `Keine persönliche medizinische Beratung`,
      body: `Diese Zahlen sind Schätzungen auf Bevölkerungsebene, kein personalisiertes Ziel. Das tatsächlich gesunde Gewicht hängt von Körperbau, Muskelmasse und individuellen Faktoren ab, die keine dieser Formeln erfassen kann. Zwei Menschen mit derselben Körpergröße können beide bei deutlich unterschiedlichem Gewicht gesund sein.`,
    },
    limitations: {
      heading: `Einschränkungen`,
      body: `Diese Formeln stammen aus der Zeit vor der modernen Körperzusammensetzungsforschung und wurden für durchschnittliche erwachsene Körpertypen entwickelt. Sie waren nicht für Athleten, sehr große oder kleine Menschen oder ungewöhnliche Körperbauten gedacht. Sie nutzen nur Größe und Geschlecht, sodass zwei Menschen mit sehr unterschiedlichem Muskel- und Fettanteil dieselbe Zahl erhalten. Betrachte das Ergebnis als groben Referenzwert, nicht als zu erreichendes Ziel.`,
    },
    related: {
      heading: `Verwandte Rechner`,
      bmiLinkText: `BMI-Rechner`,
      bmiDescription: `— sieh, wie dein Gewicht und deine Größe im Vergleich zu den Standard-BMI-Bereichen stehen.`,
      bodyfatLinkText: `Körperfett-Rechner`,
      bodyfatDescription: `— ein direkterer Blick auf die Körperzusammensetzung als das Gewicht allein.`,
    },
  },

  ja: {
    whatIsIdealWeight: {
      heading: `「唯一の理想体重」というものは存在しない`,
      body: `「理想体重」の計算式は、もともと薬の投与量を見積もるといった臨床用途のために作られたもので、個人の目標として作られたものではありません。以下では意図的に3つの異なる式を並べて表示しています。どれか一つを選んで唯一の答えとして示すよりも、それらの間のばらつきを見せるほうが誠実だからです。`,
    },
    formulas: {
      heading: `3つの計算式`,
      intro: `3つとも、身長（インチに換算）と性別から理想体重を推定するもので、60インチ（152.4cm）を超える身長を対象としています。`,
      maleLabel: `男性：`,
      femaleLabel: `女性：`,
      devineLabel: `Devine式（1974年）`,
      devineMaleCode: `IBW = 50 + 2.3 × (身長インチ − 60) kg`,
      devineFemaleCode: `IBW = 45.5 + 2.3 × (身長インチ − 60) kg`,
      robinsonLabel: `Robinson式（1983年）`,
      robinsonMaleCode: `IBW = 52 + 1.9 × (身長インチ − 60) kg`,
      robinsonFemaleCode: `IBW = 49 + 1.7 × (身長インチ − 60) kg`,
      hamwiLabel: `Hamwi式（1964年）`,
      hamwiMaleCode: `IBW = 48.0 + 2.7 × (身長インチ − 60) kg`,
      hamwiFemaleCode: `IBW = 45.5 + 2.2 × (身長インチ − 60) kg`,
    },
    disclaimer: {
      heading: `個人向けの医学的アドバイスではありません`,
      body: `この数値は集団レベルでの推定値であり、あなた個人の目標値ではありません。実際の健康的な体重は、骨格の大きさ、筋肉量、そしてこれらの式では捉えられない個々の要因によって変わります。同じ身長の2人でも、かなり異なる体重でそれぞれ健康な場合があります。`,
    },
    limitations: {
      heading: `限界`,
      body: `これらの式は現代の体組成研究以前に作られたもので、平均的な成人の体型を想定しています。アスリートや非常に背が高い・低い人、特殊な体格の人は想定されていません。使われているのは身長と性別だけなので、筋肉量と脂肪量が大きく異なる2人でも同じ数値になります。結果はおおまかな目安として捉え、達成すべき目標とは考えないでください。`,
    },
    related: {
      heading: `関連する計算機`,
      bmiLinkText: `BMI計算機`,
      bmiDescription: `— 体重と身長が標準的なBMI範囲とどう比較されるか確認できます。`,
      bodyfatLinkText: `体脂肪率計算機`,
      bodyfatDescription: `— 体重だけよりも直接的に体組成を確認できます。`,
    },
  },

  zh: {
    whatIsIdealWeight: {
      heading: `并不存在唯一的理想体重`,
      body: `「理想体重」公式最初是为临床用途开发的，比如估算药物剂量，而不是作为个人目标。下面特意并排展示了三种不同的公式：看到它们之间的差异，比选择其中一个当作唯一答案更诚实。`,
    },
    formulas: {
      heading: `三种公式`,
      intro: `这三种公式都是根据身高（换算为英寸）和性别来估算理想体重，适用于身高超过60英寸（152.4厘米）的情况：`,
      maleLabel: `男性：`,
      femaleLabel: `女性：`,
      devineLabel: `Devine公式（1974年）`,
      devineMaleCode: `IBW = 50 + 2.3 × (身高英寸 − 60) 千克`,
      devineFemaleCode: `IBW = 45.5 + 2.3 × (身高英寸 − 60) 千克`,
      robinsonLabel: `Robinson公式（1983年）`,
      robinsonMaleCode: `IBW = 52 + 1.9 × (身高英寸 − 60) 千克`,
      robinsonFemaleCode: `IBW = 49 + 1.7 × (身高英寸 − 60) 千克`,
      hamwiLabel: `Hamwi公式（1964年）`,
      hamwiMaleCode: `IBW = 48.0 + 2.7 × (身高英寸 − 60) 千克`,
      hamwiFemaleCode: `IBW = 45.5 + 2.2 × (身高英寸 − 60) 千克`,
    },
    disclaimer: {
      heading: `并非个人医疗建议`,
      body: `这些数字是群体层面的估算值，不是为你量身定制的目标。实际的健康体重取决于骨架大小、肌肉量，以及这些公式都无法反映的个人因素。身高相同的两个人，即使体重明显不同，也都可能是健康的。`,
    },
    limitations: {
      heading: `局限性`,
      body: `这些公式的提出早于现代身体成分研究，是针对普通成年人体型设计的，并未考虑运动员、身材特别高或矮的人，或体型特殊的人群。它们只使用身高和性别，因此肌肉量和脂肪量差异很大的两个人可能会得到相同的数字。请把结果当作一个大致的参考点，而不是必须达到的目标。`,
    },
    related: {
      heading: `相关计算器`,
      bmiLinkText: `BMI计算器`,
      bmiDescription: `— 看看你的体重和身高与标准BMI范围相比如何。`,
      bodyfatLinkText: `体脂率计算器`,
      bodyfatDescription: `— 比单纯的体重更直接地了解身体成分。`,
    },
  },

  ko: {
    whatIsIdealWeight: {
      heading: `단 하나의 이상적인 체중은 없습니다`,
      body: `"이상 체중" 공식은 원래 약물 용량을 추정하는 등 임상 목적으로 개발된 것이지, 개인의 목표로 만들어진 것이 아닙니다. 아래에는 의도적으로 세 가지 다른 공식을 나란히 보여줍니다. 하나를 골라 확정적인 답처럼 제시하는 것보다, 그 사이의 차이를 보여주는 편이 더 솔직하기 때문입니다.`,
    },
    formulas: {
      heading: `세 가지 공식`,
      intro: `세 공식 모두 키(인치로 환산)와 성별을 기준으로 이상 체중을 추정하며, 60인치(152.4cm)를 초과하는 키에 적용됩니다:`,
      maleLabel: `남성:`,
      femaleLabel: `여성:`,
      devineLabel: `Devine 공식 (1974년)`,
      devineMaleCode: `IBW = 50 + 2.3 × (키 인치 − 60) kg`,
      devineFemaleCode: `IBW = 45.5 + 2.3 × (키 인치 − 60) kg`,
      robinsonLabel: `Robinson 공식 (1983년)`,
      robinsonMaleCode: `IBW = 52 + 1.9 × (키 인치 − 60) kg`,
      robinsonFemaleCode: `IBW = 49 + 1.7 × (키 인치 − 60) kg`,
      hamwiLabel: `Hamwi 공식 (1964년)`,
      hamwiMaleCode: `IBW = 48.0 + 2.7 × (키 인치 − 60) kg`,
      hamwiFemaleCode: `IBW = 45.5 + 2.2 × (키 인치 − 60) kg`,
    },
    disclaimer: {
      heading: `개인 맞춤 의학적 조언이 아닙니다`,
      body: `이 수치는 인구 집단 수준의 추정치이지, 개인 맞춤 목표가 아닙니다. 실제 건강한 체중은 골격 크기, 근육량, 그리고 이 공식들이 반영하지 못하는 개인적 요인에 따라 달라집니다. 키가 같은 두 사람도 눈에 띄게 다른 체중에서 각자 건강할 수 있습니다.`,
    },
    limitations: {
      heading: `한계점`,
      body: `이 공식들은 현대적인 체구성 연구 이전에 만들어졌으며, 평균적인 성인 체형을 기준으로 설계되었습니다. 운동선수나 키가 매우 크거나 작은 사람, 특이한 체형을 고려해 만들어지지 않았습니다. 키와 성별만 사용하므로 근육량과 지방량이 매우 다른 두 사람도 같은 수치를 얻게 됩니다. 결과는 도달해야 할 목표가 아니라 대략적인 참고 수치로 받아들이세요.`,
    },
    related: {
      heading: `관련 계산기`,
      bmiLinkText: `BMI 계산기`,
      bmiDescription: `— 체중과 키가 표준 BMI 범위와 어떻게 비교되는지 확인해 보세요.`,
      bodyfatLinkText: `체지방률 계산기`,
      bodyfatDescription: `— 체중만 보는 것보다 체구성을 더 직접적으로 확인할 수 있습니다.`,
    },
  },

  hi: {
    whatIsIdealWeight: {
      heading: `कोई एक "सही" आदर्श वज़न नहीं होता`,
      body: `"आदर्श वज़न" के फ़ॉर्मूले शुरू में क्लिनिकल इस्तेमाल के लिए बनाए गए थे, जैसे दवा की खुराक का अनुमान लगाना, न कि व्यक्तिगत लक्ष्य के तौर पर। नीचे जानबूझकर तीन अलग-अलग फ़ॉर्मूले साथ-साथ दिखाए गए हैं: उनके बीच का फ़र्क देखना, किसी एक को चुनकर उसे अंतिम जवाब की तरह पेश करने से ज़्यादा ईमानदार तरीका है।`,
    },
    formulas: {
      heading: `तीन फ़ॉर्मूले`,
      intro: `तीनों फ़ॉर्मूले लंबाई (इंच में बदली गई) और लिंग के आधार पर आदर्श वज़न का अनुमान लगाते हैं, और यह 60 इंच (152.4 cm) से ज़्यादा लंबाई के लिए लागू होते हैं:`,
      maleLabel: `पुरुष:`,
      femaleLabel: `महिलाएं:`,
      devineLabel: `Devine फ़ॉर्मूला (1974)`,
      devineMaleCode: `IBW = 50 + 2.3 × (लंबाई इंच में − 60) kg`,
      devineFemaleCode: `IBW = 45.5 + 2.3 × (लंबाई इंच में − 60) kg`,
      robinsonLabel: `Robinson फ़ॉर्मूला (1983)`,
      robinsonMaleCode: `IBW = 52 + 1.9 × (लंबाई इंच में − 60) kg`,
      robinsonFemaleCode: `IBW = 49 + 1.7 × (लंबाई इंच में − 60) kg`,
      hamwiLabel: `Hamwi फ़ॉर्मूला (1964)`,
      hamwiMaleCode: `IBW = 48.0 + 2.7 × (लंबाई इंच में − 60) kg`,
      hamwiFemaleCode: `IBW = 45.5 + 2.2 × (लंबाई इंच में − 60) kg`,
    },
    disclaimer: {
      heading: `व्यक्तिगत मेडिकल सलाह नहीं है`,
      body: `ये आंकड़े जनसंख्या-स्तर के अनुमान हैं, कोई व्यक्तिगत लक्ष्य नहीं। असली सेहतमंद वज़न शरीर की बनावट, मांसपेशियों और उन व्यक्तिगत कारकों पर निर्भर करता है जिन्हें इनमें से कोई भी फ़ॉर्मूला नहीं देख सकता। एक जैसी लंबाई वाले दो लोग काफ़ी अलग-अलग वज़न पर भी स्वस्थ हो सकते हैं।`,
    },
    limitations: {
      heading: `सीमाएँ`,
      body: `ये फ़ॉर्मूले आधुनिक बॉडी कम्पोज़िशन साइंस से पहले बनाए गए थे और औसत वयस्क शरीर के प्रकारों के लिए डिज़ाइन किए गए थे। इन्हें एथलीट्स, बहुत लंबे या छोटे लोगों, या असामान्य शरीर बनावट को ध्यान में रखकर नहीं बनाया गया। ये सिर्फ़ लंबाई और लिंग का उपयोग करते हैं, इसलिए बहुत अलग मांसपेशी और फैट वाले दो लोगों को भी एक ही आंकड़ा मिलता है। नतीजे को एक मोटा-मोटा संदर्भ बिंदु मानें, हासिल करने का लक्ष्य नहीं।`,
    },
    related: {
      heading: `संबंधित कैलकुलेटर`,
      bmiLinkText: `BMI कैलकुलेटर`,
      bmiDescription: `— देखें कि आपका वज़न और लंबाई मानक BMI सीमाओं से कैसे तुलना करते हैं।`,
      bodyfatLinkText: `बॉडी फैट कैलकुलेटर`,
      bodyfatDescription: `— सिर्फ़ वज़न के बजाय शरीर की संरचना को ज़्यादा सीधे तरीके से देखें।`,
    },
  },

  id: {
    whatIsIdealWeight: {
      heading: `Tidak ada satu berat badan ideal yang pasti`,
      body: `Rumus "berat badan ideal" awalnya dikembangkan untuk penggunaan klinis, seperti memperkirakan dosis obat, bukan sebagai target pribadi. Tiga rumus berbeda sengaja ditampilkan berdampingan di bawah ini: melihat rentang di antara ketiganya lebih jujur daripada memilih satu dan menyajikannya sebagai jawaban pasti.`,
    },
    formulas: {
      heading: `Tiga rumus`,
      intro: `Ketiganya memperkirakan berat badan ideal dari tinggi badan (dikonversi ke inci) dan jenis kelamin, untuk tinggi badan di atas 60 inci (152,4 cm):`,
      maleLabel: `Pria:`,
      femaleLabel: `Wanita:`,
      devineLabel: `Rumus Devine (1974)`,
      devineMaleCode: `IBW = 50 + 2.3 × (tinggi dalam inci − 60) kg`,
      devineFemaleCode: `IBW = 45.5 + 2.3 × (tinggi dalam inci − 60) kg`,
      robinsonLabel: `Rumus Robinson (1983)`,
      robinsonMaleCode: `IBW = 52 + 1.9 × (tinggi dalam inci − 60) kg`,
      robinsonFemaleCode: `IBW = 49 + 1.7 × (tinggi dalam inci − 60) kg`,
      hamwiLabel: `Rumus Hamwi (1964)`,
      hamwiMaleCode: `IBW = 48.0 + 2.7 × (tinggi dalam inci − 60) kg`,
      hamwiFemaleCode: `IBW = 45.5 + 2.2 × (tinggi dalam inci − 60) kg`,
    },
    disclaimer: {
      heading: `Bukan panduan medis pribadi`,
      body: `Angka-angka ini adalah perkiraan tingkat populasi, bukan target yang dipersonalisasi. Berat badan sehat yang sebenarnya bergantung pada ukuran rangka tubuh, massa otot, dan faktor individu yang tidak bisa dilihat oleh rumus-rumus ini. Dua orang dengan tinggi badan yang sama bisa sama-sama sehat pada berat badan yang jauh berbeda.`,
    },
    limitations: {
      heading: `Keterbatasan`,
      body: `Rumus-rumus ini dibuat sebelum ilmu komposisi tubuh modern berkembang dan dirancang untuk bentuk tubuh orang dewasa rata-rata, bukan untuk atlet, orang yang sangat tinggi atau pendek, atau bentuk tubuh yang tidak biasa. Rumus ini hanya menggunakan tinggi badan dan jenis kelamin, jadi dua orang dengan jumlah otot dan lemak yang sangat berbeda bisa mendapatkan angka yang sama. Anggap hasilnya sebagai titik acuan kasar, bukan target yang harus dicapai.`,
    },
    related: {
      heading: `Kalkulator terkait`,
      bmiLinkText: `Kalkulator BMI`,
      bmiDescription: `— lihat bagaimana berat dan tinggi badanmu dibandingkan dengan rentang BMI standar.`,
      bodyfatLinkText: `Kalkulator Lemak Tubuh`,
      bodyfatDescription: `— cara yang lebih langsung untuk melihat komposisi tubuh dibandingkan berat badan saja.`,
    },
  },
};

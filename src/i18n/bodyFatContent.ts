export interface BodyFatContent {
  whatIsBodyFat: { heading: string; body: string };
  method: {
    heading: string;
    intro: string;
    maleLabel: string;
    femaleLabel: string;
    maleCode: string;
    femaleCode: string;
    note: string;
  };
  ranges: {
    heading: string;
    intro: string;
    categoryHeader: string;
    menHeader: string;
    womenHeader: string;
    rows: [string, string, string][];
  };
  limitations: { heading: string; body: string };
  related: { heading: string; linkText: string; description: string };
}

export const bodyFatContent: Record<string, BodyFatContent> = {
  sv: {
    whatIsBodyFat: {
      heading: `Kroppsfett jämfört med BMI`,
      body: `BMI jämför bara din vikt med din längd. Det kan inte avgöra om den vikten är muskler eller fett. Kroppsfettprocent mäter kroppssammansättningen direkt: hur mycket av din vikt som är fett, och hur mycket som är fettfri massa som muskler, skelett, organ och vatten. Det svarar på en fråga som BMI bara kan gissa sig till.`,
    },
    method: {
      heading: `US Navy-metoden`,
      intro: `Den här kalkylatorn använder US Navy-metoden för omkretsmätning, ursprungligen utvecklad för militära konditionstester. Den uppskattar kroppsfett utifrån några mått med måttband istället för specialutrustning.`,
      maleLabel: `Män:`,
      femaleLabel: `Kvinnor:`,
      maleCode: `BF% = 495 / (1.0324 − 0.19077 × log₁₀(midja − hals) + 0.15456 × log₁₀(längd)) − 450`,
      femaleCode: `BF% = 495 / (1.29579 − 0.35004 × log₁₀(midja + höft − hals) + 0.22100 × log₁₀(längd)) − 450`,
      note: `Kvinnors formel lägger till ett höftmått eftersom fettfördelningen skiljer sig så pass mycket mellan könen att hals och midja ensamma skulle underskatta det för de flesta kvinnor.`,
    },
    ranges: {
      heading: `Kroppsfettkategorier (ACE)`,
      intro: `De här referensintervallen kommer från American Council on Exercise och skiljer sig mellan könen:`,
      categoryHeader: `Kategori`,
      menHeader: `Män`,
      womenHeader: `Kvinnor`,
      rows: [
        [`Essentiellt fett`, `2 – 5%`, `10 – 13%`],
        [`Idrottare`, `6 – 13%`, `14 – 20%`],
        [`Vältränad`, `14 – 17%`, `21 – 24%`],
        [`Genomsnitt`, `18 – 24%`, `25 – 31%`],
        [`Fetma`, `Över 25%`, `Över 32%`],
      ],
    },
    limitations: {
      heading: `Begränsningar`,
      body: `Omkretsbaserade metoder som den här är uppskattningar, inte exakta mätningar. De är känsliga för mättekniken och kan bli missvisande för kroppsformer som formeln inte är kalibrerad för. DEXA-skanning och kaliper mäter kroppsfett mer exakt, men de kräver utrustning eller tränad personal som den här kalkylatorn inte kan ersätta. Den här metoden byter en del precision mot något vem som helst kan göra hemma med ett måttband.`,
    },
    related: {
      heading: `Relaterad kalkylator`,
      linkText: `BMI-kalkylator`,
      description: `— se hur din vikt och längd förhåller sig till standardintervallen för BMI.`,
    },
  },

  en: {
    whatIsBodyFat: {
      heading: `Body fat vs BMI`,
      body: `BMI only compares your weight to your height. It can't tell whether that weight is muscle or fat. Body fat percentage measures body composition directly: how much of your weight is fat, and how much is lean mass such as muscle, bone, organs, and water. It answers a question BMI can only estimate.`,
    },
    method: {
      heading: `The US Navy method`,
      intro: `This calculator uses the US Navy circumference method, developed for military fitness assessments. It estimates body fat from a few tape-measure readings instead of specialized equipment.`,
      maleLabel: `Men:`,
      femaleLabel: `Women:`,
      maleCode: `BF% = 495 / (1.0324 − 0.19077 × log₁₀(waist − neck) + 0.15456 × log₁₀(height)) − 450`,
      femaleCode: `BF% = 495 / (1.29579 − 0.35004 × log₁₀(waist + hip − neck) + 0.22100 × log₁₀(height)) − 450`,
      note: `Women's formula adds a hip measurement because fat distribution differs enough between men and women that neck and waist alone would underestimate it for most women.`,
    },
    ranges: {
      heading: `Body fat categories (ACE)`,
      intro: `These reference ranges come from the American Council on Exercise and differ by sex:`,
      categoryHeader: `Category`,
      menHeader: `Men`,
      womenHeader: `Women`,
      rows: [
        [`Essential fat`, `2 – 5%`, `10 – 13%`],
        [`Athletes`, `6 – 13%`, `14 – 20%`],
        [`Fitness`, `14 – 17%`, `21 – 24%`],
        [`Average`, `18 – 24%`, `25 – 31%`],
        [`Obese`, `Above 25%`, `Above 32%`],
      ],
    },
    limitations: {
      heading: `Limitations`,
      body: `Circumference-based methods like this one are estimates, not precise measurements. They're sensitive to measurement technique and can be thrown off by body shapes the formula wasn't tuned for. DEXA scans and skinfold calipers measure body fat more accurately, but they need equipment or trained hands this calculator can't replace. This method trades some precision for something anyone can do at home with a tape measure.`,
    },
    related: {
      heading: `Related calculator`,
      linkText: `BMI Calculator`,
      description: `— see how your weight and height compare to standard BMI ranges.`,
    },
  },

  pt: {
    whatIsBodyFat: {
      heading: `Gordura corporal vs IMC`,
      body: `O IMC só compara seu peso com sua altura. Ele não consegue dizer se esse peso é músculo ou gordura. O percentual de gordura corporal mede a composição corporal diretamente: quanto do seu peso é gordura, e quanto é massa magra, como músculo, ossos, órgãos e água. Ele responde a uma pergunta que o IMC só consegue estimar.`,
    },
    method: {
      heading: `O método da Marinha dos EUA`,
      intro: `Essa calculadora usa o método de circunferência da Marinha dos EUA, criado para avaliações de condicionamento físico militar. Ele estima a gordura corporal a partir de algumas medidas de fita métrica, sem precisar de equipamento especializado.`,
      maleLabel: `Homens:`,
      femaleLabel: `Mulheres:`,
      maleCode: `BF% = 495 / (1.0324 − 0.19077 × log₁₀(cintura − pescoço) + 0.15456 × log₁₀(altura)) − 450`,
      femaleCode: `BF% = 495 / (1.29579 − 0.35004 × log₁₀(cintura + quadril − pescoço) + 0.22100 × log₁₀(altura)) − 450`,
      note: `A fórmula das mulheres inclui a medida do quadril porque a distribuição de gordura difere o suficiente entre homens e mulheres para que pescoço e cintura sozinhos subestimem o valor na maioria das mulheres.`,
    },
    ranges: {
      heading: `Categorias de gordura corporal (ACE)`,
      intro: `Essas faixas de referência vêm do American Council on Exercise e variam por sexo:`,
      categoryHeader: `Categoria`,
      menHeader: `Homens`,
      womenHeader: `Mulheres`,
      rows: [
        [`Gordura essencial`, `2 – 5%`, `10 – 13%`],
        [`Atletas`, `6 – 13%`, `14 – 20%`],
        [`Em forma`, `14 – 17%`, `21 – 24%`],
        [`Média`, `18 – 24%`, `25 – 31%`],
        [`Obesidade`, `Acima de 25%`, `Acima de 32%`],
      ],
    },
    limitations: {
      heading: `Limitações`,
      body: `Métodos baseados em circunferência como esse são estimativas, não medições precisas. Eles são sensíveis à técnica de medição e podem ficar imprecisos para formatos corporais para os quais a fórmula não foi calibrada. Exames de DEXA e adipômetros medem a gordura corporal com mais precisão, mas exigem equipamento ou mãos treinadas que essa calculadora não substitui. Esse método troca um pouco de precisão por algo que qualquer pessoa consegue fazer em casa com uma fita métrica.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de IMC`,
      description: `— veja como seu peso e altura se comparam às faixas padrão de IMC.`,
    },
  },

  es: {
    whatIsBodyFat: {
      heading: `Grasa corporal frente a IMC`,
      body: `El IMC solo compara tu peso con tu estatura. No puede saber si ese peso es músculo o grasa. El porcentaje de grasa corporal mide la composición corporal directamente: cuánto de tu peso es grasa y cuánto es masa magra, como músculo, huesos, órganos y agua. Responde a una pregunta que el IMC solo puede estimar.`,
    },
    method: {
      heading: `El método de la Marina de EE. UU.`,
      intro: `Esta calculadora usa el método de circunferencia de la Marina de EE. UU., creado para evaluaciones de condición física militar. Estima la grasa corporal a partir de unas pocas medidas con cinta métrica, sin necesitar equipo especializado.`,
      maleLabel: `Hombres:`,
      femaleLabel: `Mujeres:`,
      maleCode: `BF% = 495 / (1.0324 − 0.19077 × log₁₀(cintura − cuello) + 0.15456 × log₁₀(estatura)) − 450`,
      femaleCode: `BF% = 495 / (1.29579 − 0.35004 × log₁₀(cintura + cadera − cuello) + 0.22100 × log₁₀(estatura)) − 450`,
      note: `La fórmula de las mujeres añade una medida de cadera porque la distribución de grasa difiere lo suficiente entre hombres y mujeres como para que cuello y cintura por sí solos subestimen el valor en la mayoría de las mujeres.`,
    },
    ranges: {
      heading: `Categorías de grasa corporal (ACE)`,
      intro: `Estos rangos de referencia provienen del American Council on Exercise y varían según el sexo:`,
      categoryHeader: `Categoría`,
      menHeader: `Hombres`,
      womenHeader: `Mujeres`,
      rows: [
        [`Grasa esencial`, `2 – 5%`, `10 – 13%`],
        [`Atletas`, `6 – 13%`, `14 – 20%`],
        [`En forma`, `14 – 17%`, `21 – 24%`],
        [`Promedio`, `18 – 24%`, `25 – 31%`],
        [`Obesidad`, `Más de 25%`, `Más de 32%`],
      ],
    },
    limitations: {
      heading: `Limitaciones`,
      body: `Los métodos basados en circunferencias como este son estimaciones, no mediciones precisas. Son sensibles a la técnica de medición y pueden fallar con formas corporales para las que la fórmula no fue ajustada. Los escáneres DEXA y los calibradores de pliegues cutáneos miden la grasa corporal con más precisión, pero requieren equipo o manos entrenadas que esta calculadora no puede sustituir. Este método cambia algo de precisión por algo que cualquiera puede hacer en casa con una cinta métrica.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de IMC`,
      description: `— comprueba cómo se comparan tu peso y estatura con los rangos estándar de IMC.`,
    },
  },

  de: {
    whatIsBodyFat: {
      heading: `Körperfett im Vergleich zum BMI`,
      body: `Der BMI vergleicht nur dein Gewicht mit deiner Größe. Er kann nicht erkennen, ob dieses Gewicht Muskeln oder Fett ist. Der Körperfettanteil misst die Körperzusammensetzung direkt: wie viel deines Gewichts Fett ist und wie viel fettfreie Masse wie Muskeln, Knochen, Organe und Wasser. Er beantwortet eine Frage, die der BMI nur schätzen kann.`,
    },
    method: {
      heading: `Die US-Navy-Methode`,
      intro: `Dieser Rechner nutzt die US-Navy-Umfangsmethode, die für militärische Fitnesstests entwickelt wurde. Sie schätzt den Körperfettanteil anhand weniger Maßband-Messungen statt Spezialgeräten.`,
      maleLabel: `Männer:`,
      femaleLabel: `Frauen:`,
      maleCode: `BF% = 495 / (1.0324 − 0.19077 × log₁₀(Taille − Hals) + 0.15456 × log₁₀(Größe)) − 450`,
      femaleCode: `BF% = 495 / (1.29579 − 0.35004 × log₁₀(Taille + Hüfte − Hals) + 0.22100 × log₁₀(Größe)) − 450`,
      note: `Die Formel für Frauen bezieht ein Hüftmaß mit ein, weil sich die Fettverteilung zwischen Männern und Frauen so stark unterscheidet, dass Hals und Taille allein den Wert bei den meisten Frauen unterschätzen würden.`,
    },
    ranges: {
      heading: `Körperfett-Kategorien (ACE)`,
      intro: `Diese Referenzbereiche stammen vom American Council on Exercise und unterscheiden sich nach Geschlecht:`,
      categoryHeader: `Kategorie`,
      menHeader: `Männer`,
      womenHeader: `Frauen`,
      rows: [
        [`Essentielles Fett`, `2 – 5%`, `10 – 13%`],
        [`Athleten`, `6 – 13%`, `14 – 20%`],
        [`Fit`, `14 – 17%`, `21 – 24%`],
        [`Durchschnitt`, `18 – 24%`, `25 – 31%`],
        [`Adipositas`, `Über 25%`, `Über 32%`],
      ],
    },
    limitations: {
      heading: `Einschränkungen`,
      body: `Umfangsbasierte Methoden wie diese sind Schätzungen, keine präzisen Messungen. Sie reagieren empfindlich auf die Messtechnik und können bei Körperformen daneben liegen, für die die Formel nicht kalibriert wurde. DEXA-Scans und Hautfaltenmessungen erfassen den Körperfettanteil genauer, erfordern aber Geräte oder geschulte Hände, die dieser Rechner nicht ersetzen kann. Diese Methode tauscht etwas Genauigkeit gegen etwas, das jeder zu Hause mit einem Maßband machen kann.`,
    },
    related: {
      heading: `Verwandter Rechner`,
      linkText: `BMI-Rechner`,
      description: `— sieh, wie dein Gewicht und deine Größe im Vergleich zu den Standard-BMI-Bereichen stehen.`,
    },
  },

  ja: {
    whatIsBodyFat: {
      heading: `体脂肪率とBMIの違い`,
      body: `BMIは体重と身長を比較するだけで、その体重が筋肉なのか脂肪なのかまでは分かりません。体脂肪率は体組成を直接測定します。体重のうちどれだけが脂肪で、どれだけが筋肉・骨・臓器・水分などの除脂肪量なのかということです。BMIでは推測しかできない問いに、より直接的な答えを出します。`,
    },
    method: {
      heading: `US Navy法`,
      intro: `この計算機は、米海軍の体力測定のために開発された周囲径測定法（US Navy法）を使用しています。特別な機器を使わず、メジャーによるいくつかの測定値から体脂肪率を推定します。`,
      maleLabel: `男性：`,
      femaleLabel: `女性：`,
      maleCode: `BF% = 495 / (1.0324 − 0.19077 × log₁₀(ウエスト − 首周り) + 0.15456 × log₁₀(身長)) − 450`,
      femaleCode: `BF% = 495 / (1.29579 − 0.35004 × log₁₀(ウエスト + ヒップ − 首周り) + 0.22100 × log₁₀(身長)) − 450`,
      note: `女性の式にヒップの測定値が加わっているのは、男女で脂肪の付き方が大きく異なり、首周りとウエストだけでは多くの女性で体脂肪率が過小評価されてしまうためです。`,
    },
    ranges: {
      heading: `体脂肪率の分類（ACE基準）`,
      intro: `この基準値はアメリカスポーツ医学協議会（ACE）によるもので、男女で異なります。`,
      categoryHeader: `分類`,
      menHeader: `男性`,
      womenHeader: `女性`,
      rows: [
        [`必須脂肪`, `2 – 5%`, `10 – 13%`],
        [`アスリート`, `6 – 13%`, `14 – 20%`],
        [`フィットネス`, `14 – 17%`, `21 – 24%`],
        [`平均`, `18 – 24%`, `25 – 31%`],
        [`肥満`, `25%超`, `32%超`],
      ],
    },
    limitations: {
      heading: `限界`,
      body: `この計算機のような周囲径ベースの方法は、あくまで推定値であり、正確な測定値ではありません。測定の仕方に影響を受けやすく、この計算式が想定していない体型では誤差が大きくなることがあります。DEXA法や皮下脂肪計測（キャリパー）はより正確に体脂肪率を測定できますが、専用の機器や訓練を受けた測定者が必要で、この計算機では代替できません。この方法は、精度の一部を引き換えに、誰でも自宅でメジャー一つで測定できる手軽さを提供しています。`,
    },
    related: {
      heading: `関連する計算機`,
      linkText: `BMI計算機`,
      description: `— 体重と身長が標準的なBMI範囲とどう比較されるか確認できます。`,
    },
  },

  zh: {
    whatIsBodyFat: {
      heading: `体脂率与BMI的区别`,
      body: `BMI只是比较你的体重和身高，无法判断这些体重究竟是肌肉还是脂肪。体脂率则直接衡量身体成分：你的体重中有多少是脂肪，又有多少是肌肉、骨骼、器官和水分等瘦体重。它能回答一个BMI只能大致估计的问题。`,
    },
    method: {
      heading: `美国海军法`,
      intro: `这个计算器使用的是美国海军围度测量法，最初为军队体能评估而设计。它只需几项卷尺测量数据即可估算体脂率，无需专业设备。`,
      maleLabel: `男性：`,
      femaleLabel: `女性：`,
      maleCode: `BF% = 495 / (1.0324 − 0.19077 × log₁₀(腰围 − 颈围) + 0.15456 × log₁₀(身高)) − 450`,
      femaleCode: `BF% = 495 / (1.29579 − 0.35004 × log₁₀(腰围 + 臀围 − 颈围) + 0.22100 × log₁₀(身高)) − 450`,
      note: `女性公式多了臀围这一项，是因为男女脂肪分布差异较大，仅凭颈围和腰围会低估大多数女性的体脂率。`,
    },
    ranges: {
      heading: `体脂率分类（ACE标准）`,
      intro: `以下参考区间来自美国运动委员会（ACE），男女标准不同：`,
      categoryHeader: `分类`,
      menHeader: `男性`,
      womenHeader: `女性`,
      rows: [
        [`必需脂肪`, `2 – 5%`, `10 – 13%`],
        [`运动员`, `6 – 13%`, `14 – 20%`],
        [`健美`, `14 – 17%`, `21 – 24%`],
        [`平均`, `18 – 24%`, `25 – 31%`],
        [`肥胖`, `高于25%`, `高于32%`],
      ],
    },
    limitations: {
      heading: `局限性`,
      body: `像这样基于围度的方法只是估算值，而非精确测量。它们对测量手法很敏感，对于公式未针对性校准的体型也可能出现偏差。DEXA扫描和皮褶卡尺能更精确地测量体脂率，但需要专业设备或训练有素的测量人员，这是这个计算器无法替代的。这种方法用一定的精度换取了任何人在家用卷尺就能完成测量的便利性。`,
    },
    related: {
      heading: `相关计算器`,
      linkText: `BMI计算器`,
      description: `— 看看你的体重和身高与标准BMI范围相比如何。`,
    },
  },

  ko: {
    whatIsBodyFat: {
      heading: `체지방률과 BMI의 차이`,
      body: `BMI는 체중과 키만 비교할 뿐, 그 체중이 근육인지 지방인지는 알려주지 않습니다. 체지방률은 체구성을 직접 측정합니다. 체중 중 얼마가 지방이고, 얼마가 근육·뼈·장기·수분 같은 제지방량인지를 보여줍니다. BMI가 추정만 할 수 있는 질문에 더 직접적인 답을 줍니다.`,
    },
    method: {
      heading: `미 해군 방식`,
      intro: `이 계산기는 군의 체력 평가를 위해 개발된 미 해군 둘레 측정법을 사용합니다. 특수 장비 없이 줄자로 몇 가지를 측정하는 것만으로 체지방률을 추정합니다.`,
      maleLabel: `남성:`,
      femaleLabel: `여성:`,
      maleCode: `BF% = 495 / (1.0324 − 0.19077 × log₁₀(허리 − 목) + 0.15456 × log₁₀(키)) − 450`,
      femaleCode: `BF% = 495 / (1.29579 − 0.35004 × log₁₀(허리 + 엉덩이 − 목) + 0.22100 × log₁₀(키)) − 450`,
      note: `여성 공식에 엉덩이 둘레가 추가되는 이유는 남녀 간 지방 분포 차이가 커서, 목과 허리만으로는 대부분의 여성에게서 체지방률이 과소평가되기 때문입니다.`,
    },
    ranges: {
      heading: `체지방률 분류 (ACE 기준)`,
      intro: `아래 기준치는 미국운동협의회(ACE)에서 제공하며 성별에 따라 다릅니다:`,
      categoryHeader: `분류`,
      menHeader: `남성`,
      womenHeader: `여성`,
      rows: [
        [`필수 지방`, `2 – 5%`, `10 – 13%`],
        [`운동선수`, `6 – 13%`, `14 – 20%`],
        [`피트니스`, `14 – 17%`, `21 – 24%`],
        [`평균`, `18 – 24%`, `25 – 31%`],
        [`비만`, `25% 초과`, `32% 초과`],
      ],
    },
    limitations: {
      heading: `한계점`,
      body: `이 계산기와 같은 둘레 기반 방법은 정확한 측정이 아니라 추정치입니다. 측정 방식에 민감하며, 공식이 고려하지 않은 체형에서는 오차가 커질 수 있습니다. DEXA 스캔이나 피부 두겹 캘리퍼는 체지방률을 더 정확하게 측정할 수 있지만, 이 계산기가 대신할 수 없는 장비나 숙련된 측정자가 필요합니다. 이 방법은 어느 정도의 정확도를 포기하는 대신, 누구나 집에서 줄자만으로 측정할 수 있다는 장점을 제공합니다.`,
    },
    related: {
      heading: `관련 계산기`,
      linkText: `BMI 계산기`,
      description: `— 체중과 키가 표준 BMI 범위와 어떻게 비교되는지 확인해 보세요.`,
    },
  },

  hi: {
    whatIsBodyFat: {
      heading: `बॉडी फैट बनाम BMI`,
      body: `BMI सिर्फ़ आपके वज़न की आपकी लंबाई से तुलना करता है। यह नहीं बता सकता कि वह वज़न मांसपेशियां है या फैट। बॉडी फैट प्रतिशत शरीर की संरचना को सीधे मापता है: आपके वज़न का कितना हिस्सा फैट है, और कितना हिस्सा मांसपेशियों, हड्डियों, अंगों और पानी जैसे लीन मास से बना है। यह उस सवाल का जवाब देता है जिसका BMI सिर्फ़ अंदाज़ा लगा सकता है।`,
    },
    method: {
      heading: `US नेवी विधि`,
      intro: `यह कैलकुलेटर US नेवी की सर्कमफेरेंस विधि का उपयोग करता है, जो सैन्य फिटनेस आकलन के लिए बनाई गई थी। यह किसी खास उपकरण के बजाय टेप से लिए गए कुछ माप से बॉडी फैट का अनुमान लगाता है।`,
      maleLabel: `पुरुष:`,
      femaleLabel: `महिलाएं:`,
      maleCode: `BF% = 495 / (1.0324 − 0.19077 × log₁₀(कमर − गर्दन) + 0.15456 × log₁₀(लंबाई)) − 450`,
      femaleCode: `BF% = 495 / (1.29579 − 0.35004 × log₁₀(कमर + कूल्हा − गर्दन) + 0.22100 × log₁₀(लंबाई)) − 450`,
      note: `महिलाओं के फ़ॉर्मूले में कूल्हे का माप इसलिए जोड़ा जाता है क्योंकि पुरुषों और महिलाओं में फैट जमा होने का तरीका काफ़ी अलग होता है, और अकेले गर्दन व कमर से ज़्यादातर महिलाओं के लिए यह कम आंका जाता।`,
    },
    ranges: {
      heading: `बॉडी फैट श्रेणियां (ACE)`,
      intro: `ये संदर्भ सीमाएं अमेरिकन काउंसिल ऑन एक्सरसाइज़ (ACE) से ली गई हैं और लिंग के हिसाब से अलग होती हैं:`,
      categoryHeader: `श्रेणी`,
      menHeader: `पुरुष`,
      womenHeader: `महिलाएं`,
      rows: [
        [`ज़रूरी फैट`, `2 – 5%`, `10 – 13%`],
        [`एथलीट`, `6 – 13%`, `14 – 20%`],
        [`फिट`, `14 – 17%`, `21 – 24%`],
        [`औसत`, `18 – 24%`, `25 – 31%`],
        [`मोटापा`, `25% से अधिक`, `32% से अधिक`],
      ],
    },
    limitations: {
      heading: `सीमाएँ`,
      body: `इस जैसी सर्कमफेरेंस पर आधारित विधियां अनुमान हैं, सटीक माप नहीं। ये मापने के तरीके पर निर्भर करती हैं और उन शरीर के आकारों के लिए गलत हो सकती हैं जिनके लिए यह फ़ॉर्मूला नहीं बनाया गया। DEXA स्कैन और स्किनफ़ोल्ड कैलिपर बॉडी फैट को ज़्यादा सटीकता से मापते हैं, लेकिन उनके लिए उपकरण या प्रशिक्षित हाथों की ज़रूरत होती है जिसकी जगह यह कैलकुलेटर नहीं ले सकता। यह तरीका कुछ सटीकता की कीमत पर वह चीज़ देता है जो कोई भी घर पर सिर्फ़ टेप से कर सकता है।`,
    },
    related: {
      heading: `संबंधित कैलकुलेटर`,
      linkText: `BMI कैलकुलेटर`,
      description: `— देखें कि आपका वज़न और लंबाई मानक BMI सीमाओं से कैसे तुलना करते हैं।`,
    },
  },

  id: {
    whatIsBodyFat: {
      heading: `Lemak tubuh vs BMI`,
      body: `BMI hanya membandingkan berat badanmu dengan tinggi badanmu. BMI tidak bisa mengetahui apakah berat itu otot atau lemak. Persentase lemak tubuh mengukur komposisi tubuh secara langsung: berapa banyak berat badanmu yang merupakan lemak, dan berapa banyak yang merupakan massa tanpa lemak seperti otot, tulang, organ, dan air. Ini menjawab pertanyaan yang hanya bisa diperkirakan oleh BMI.`,
    },
    method: {
      heading: `Metode Angkatan Laut AS`,
      intro: `Kalkulator ini menggunakan metode lingkar tubuh Angkatan Laut AS, yang dikembangkan untuk penilaian kebugaran militer. Metode ini memperkirakan lemak tubuh hanya dari beberapa ukuran pita pengukur, tanpa peralatan khusus.`,
      maleLabel: `Pria:`,
      femaleLabel: `Wanita:`,
      maleCode: `BF% = 495 / (1.0324 − 0.19077 × log₁₀(pinggang − leher) + 0.15456 × log₁₀(tinggi)) − 450`,
      femaleCode: `BF% = 495 / (1.29579 − 0.35004 × log₁₀(pinggang + pinggul − leher) + 0.22100 × log₁₀(tinggi)) − 450`,
      note: `Rumus untuk wanita menambahkan ukuran pinggul karena distribusi lemak cukup berbeda antara pria dan wanita, sehingga leher dan pinggang saja akan meremehkan hasilnya untuk sebagian besar wanita.`,
    },
    ranges: {
      heading: `Kategori lemak tubuh (ACE)`,
      intro: `Rentang referensi ini berasal dari American Council on Exercise dan berbeda menurut jenis kelamin:`,
      categoryHeader: `Kategori`,
      menHeader: `Pria`,
      womenHeader: `Wanita`,
      rows: [
        [`Lemak esensial`, `2 – 5%`, `10 – 13%`],
        [`Atlet`, `6 – 13%`, `14 – 20%`],
        [`Bugar`, `14 – 17%`, `21 – 24%`],
        [`Rata-rata`, `18 – 24%`, `25 – 31%`],
        [`Obesitas`, `Di atas 25%`, `Di atas 32%`],
      ],
    },
    limitations: {
      heading: `Keterbatasan`,
      body: `Metode berbasis lingkar tubuh seperti ini adalah perkiraan, bukan pengukuran yang presisi. Metode ini sensitif terhadap teknik pengukuran dan bisa meleset untuk bentuk tubuh yang tidak sesuai dengan kalibrasi rumusnya. Pemindaian DEXA dan kaliper lipatan kulit mengukur lemak tubuh dengan lebih akurat, tetapi memerlukan peralatan atau tenaga terlatih yang tidak bisa digantikan oleh kalkulator ini. Metode ini menukar sedikit presisi dengan sesuatu yang bisa dilakukan siapa saja di rumah dengan pita pengukur.`,
    },
    related: {
      heading: `Kalkulator terkait`,
      linkText: `Kalkulator BMI`,
      description: `— lihat bagaimana berat dan tinggi badanmu dibandingkan dengan rentang BMI standar.`,
    },
  },
};

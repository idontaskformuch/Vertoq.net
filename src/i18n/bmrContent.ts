export interface BmrContent {
  whatIsBmr: { heading: string; body: string };
  formula: {
    heading: string;
    label: string;
    note: string;
    maleLabel: string;
    femaleLabel: string;
    maleCode: string;
    femaleCode: string;
  };
  bmrVsTdee: { heading: string; body: string };
  factors: { heading: string; body: string };
  related: {
    heading: string;
    bmiLinkText: string;
    bmiDescription: string;
    tdeeLinkText: string;
    tdeeDescription: string;
  };
  resultCta: { text: string; linkText: string };
}

export const bmrContent: Record<string, BmrContent> = {
  sv: {
    whatIsBmr: {
      heading: `Vad är BMR?`,
      body: `Basal Metabolic Rate (BMR), eller basal ämnesomsättning, är antalet kalorier kroppen förbränner i fullständig vila, bara för att hålla organen igång: andning, blodcirkulation, cellreparation och allt annat som sker utan att du rör en muskel. Matsmältning och fysisk aktivitet räknas inte in.`,
    },
    formula: {
      heading: `Så räknas BMR ut`,
      label: `Mifflin-St Jeor:`,
      note: `Det är samma formel som TDEE-kalkylatorn ovan använder för att räkna fram sitt BMR-tal, här visad separat utan någon aktivitetsmultiplikator.`,
      maleLabel: `Män:`,
      femaleLabel: `Kvinnor:`,
      maleCode: `BMR = 10 × vikt (kg) + 6.25 × längd (cm) − 5 × ålder (år) + 5`,
      femaleCode: `BMR = 10 × vikt (kg) + 6.25 × längd (cm) − 5 × ålder (år) − 161`,
    },
    bmrVsTdee: {
      heading: `BMR jämfört med TDEE`,
      body: `BMR är utgångspunkten, inte hela bilden. Lägg till kalorierna som förbränns genom rörelse, träning och vardagsaktivitet ovanpå det, så får du ditt TDEE (Total Daily Energy Expenditure) — siffran som faktiskt speglar hur många kalorier du förbränner under en hel dag.`,
    },
    factors: {
      heading: `Vad som påverkar din BMR`,
      body: `Flera faktorer formar BMR: ålder (den sjunker ofta med åren), muskelmassa (muskler förbränner mer energi i vila än fett, så mer muskelmassa höjer BMR), kön (redan inbyggt i formeln ovan), genetik och hormonella faktorer som sköldkörtelfunktion. Inget av detta är något en kalkylator, eller ett snabbt trick, kan ändra på egen hand i någon större utsträckning.`,
    },
    related: {
      heading: `Relaterade kalkylatorer`,
      bmiLinkText: `BMI-kalkylator`,
      bmiDescription: `— se hur din vikt och längd förhåller sig till standardintervallen för BMI.`,
      tdeeLinkText: `TDEE-kalkylator`,
      tdeeDescription: `— omvandla den här vilosiffran till ditt fullständiga dagliga kaloribehov genom att lägga till din aktivitetsnivå.`,
    },
    resultCta: {
      text: `Det här är din vilosiffra.`,
      linkText: `Se ditt fullständiga dagliga kaloribehov med aktivitet inräknad → TDEE-kalkylator`,
    },
  },

  en: {
    whatIsBmr: {
      heading: `What is BMR?`,
      body: `Basal Metabolic Rate (BMR) is the number of calories your body burns at complete rest, just keeping your organs running: breathing, circulation, cell repair, and everything else that happens without you moving a muscle. It doesn't include digestion or any physical activity.`,
    },
    formula: {
      heading: `How BMR is calculated`,
      label: `Mifflin-St Jeor:`,
      note: `This is the same formula the TDEE calculator above uses to get its BMR number, shown here on its own, without any activity multiplier applied.`,
      maleLabel: `Men:`,
      femaleLabel: `Women:`,
      maleCode: `BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age (years) + 5`,
      femaleCode: `BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age (years) − 161`,
    },
    bmrVsTdee: {
      heading: `BMR vs TDEE`,
      body: `BMR is the starting point, not the finish line. Add the calories burned through movement, exercise, and everyday activity on top of it, and you get your TDEE (Total Daily Energy Expenditure), the number that actually reflects how many calories you burn in a full day.`,
    },
    factors: {
      heading: `What affects your BMR`,
      body: `Several factors shape BMR: age (it tends to decline over the years), muscle mass (muscle burns more energy at rest than fat, so more of it raises BMR), sex (already built into the formula above), genetics, and hormonal factors such as thyroid function. None of these are something a calculator, or a quick trick, can meaningfully override on their own.`,
    },
    related: {
      heading: `Related calculators`,
      bmiLinkText: `BMI Calculator`,
      bmiDescription: `— see how your weight and height compare to standard BMI ranges.`,
      tdeeLinkText: `TDEE Calculator`,
      tdeeDescription: `— turn this resting number into your full daily calorie needs by adding your activity level.`,
    },
    resultCta: {
      text: `This is your resting number.`,
      linkText: `See your full daily calorie needs with activity included → TDEE Calculator`,
    },
  },

  pt: {
    whatIsBmr: {
      heading: `O que é a TMB?`,
      body: `A Taxa Metabólica Basal (TMB) é o número de calorias que seu corpo queima em repouso total, apenas para manter os órgãos funcionando: respiração, circulação, reparo celular e tudo o mais que acontece sem você mover um músculo. Não inclui digestão nem nenhuma atividade física.`,
    },
    formula: {
      heading: `Como a TMB é calculada`,
      label: `Mifflin-St Jeor:`,
      note: `É a mesma fórmula que a calculadora de TDEE acima usa para chegar ao seu número de TMB, mostrada aqui sozinha, sem nenhum multiplicador de atividade aplicado.`,
      maleLabel: `Homens:`,
      femaleLabel: `Mulheres:`,
      maleCode: `TMB = 10 × peso (kg) + 6.25 × altura (cm) − 5 × idade (anos) + 5`,
      femaleCode: `TMB = 10 × peso (kg) + 6.25 × altura (cm) − 5 × idade (anos) − 161`,
    },
    bmrVsTdee: {
      heading: `TMB versus TDEE`,
      body: `A TMB é o ponto de partida, não o quadro completo. Some as calorias queimadas com movimento, exercício e atividade do dia a dia, e você chega ao seu TDEE (Gasto Energético Total Diário), o número que realmente reflete quantas calorias você queima em um dia inteiro.`,
    },
    factors: {
      heading: `O que influencia sua TMB`,
      body: `Vários fatores moldam a TMB: idade (costuma diminuir com o passar dos anos), massa muscular (o músculo queima mais energia em repouso do que a gordura, então mais massa muscular eleva a TMB), sexo (já incorporado na fórmula acima), genética e fatores hormonais, como a função da tireoide. Nada disso é algo que uma calculadora, ou um truque rápido, consiga mudar de forma significativa por conta própria.`,
    },
    related: {
      heading: `Calculadoras relacionadas`,
      bmiLinkText: `Calculadora de IMC`,
      bmiDescription: `— veja como seu peso e altura se comparam às faixas padrão de IMC.`,
      tdeeLinkText: `Calculadora de TDEE`,
      tdeeDescription: `— transforme esse número de repouso na sua necessidade calórica diária completa, somando seu nível de atividade.`,
    },
    resultCta: {
      text: `Esse é o seu número de repouso.`,
      linkText: `Veja sua necessidade calórica diária completa com a atividade incluída → Calculadora de TDEE`,
    },
  },

  es: {
    whatIsBmr: {
      heading: `¿Qué es la TMB?`,
      body: `La Tasa Metabólica Basal (TMB) es la cantidad de calorías que tu cuerpo quema en reposo total, solo para mantener tus órganos funcionando: respiración, circulación, reparación celular y todo lo demás que ocurre sin que muevas un músculo. No incluye la digestión ni ninguna actividad física.`,
    },
    formula: {
      heading: `Cómo se calcula la TMB`,
      label: `Mifflin-St Jeor:`,
      note: `Es la misma fórmula que usa la calculadora de TDEE de arriba para obtener su número de TMB, mostrada aquí por separado, sin ningún multiplicador de actividad aplicado.`,
      maleLabel: `Hombres:`,
      femaleLabel: `Mujeres:`,
      maleCode: `TMB = 10 × peso (kg) + 6.25 × estatura (cm) − 5 × edad (años) + 5`,
      femaleCode: `TMB = 10 × peso (kg) + 6.25 × estatura (cm) − 5 × edad (años) − 161`,
    },
    bmrVsTdee: {
      heading: `TMB frente a TDEE`,
      body: `La TMB es el punto de partida, no el panorama completo. Súmale las calorías que quemas con el movimiento, el ejercicio y la actividad diaria, y obtienes tu TDEE (Gasto Energético Total Diario), la cifra que realmente refleja cuántas calorías quemas en un día completo.`,
    },
    factors: {
      heading: `Qué influye en tu TMB`,
      body: `Varios factores determinan la TMB: la edad (suele bajar con los años), la masa muscular (el músculo quema más energía en reposo que la grasa, así que más masa muscular eleva la TMB), el sexo (ya incorporado en la fórmula de arriba), la genética y factores hormonales como la función tiroidea. Ninguno de estos es algo que una calculadora, o un truco rápido, pueda cambiar de forma significativa por sí solo.`,
    },
    related: {
      heading: `Calculadoras relacionadas`,
      bmiLinkText: `Calculadora de IMC`,
      bmiDescription: `— comprueba cómo se comparan tu peso y estatura con los rangos estándar de IMC.`,
      tdeeLinkText: `Calculadora de TDEE`,
      tdeeDescription: `— convierte esta cifra de reposo en tu necesidad calórica diaria completa sumando tu nivel de actividad.`,
    },
    resultCta: {
      text: `Esta es tu cifra de reposo.`,
      linkText: `Consulta tu necesidad calórica diaria completa con la actividad incluida → Calculadora de TDEE`,
    },
  },

  de: {
    whatIsBmr: {
      heading: `Was ist der Grundumsatz?`,
      body: `Der Grundumsatz (BMR) ist die Anzahl an Kalorien, die dein Körper in völliger Ruhe verbrennt, allein um die Organe am Laufen zu halten: Atmung, Kreislauf, Zellreparatur und alles andere, was passiert, ohne dass du einen Muskel bewegst. Verdauung und körperliche Aktivität sind darin nicht enthalten.`,
    },
    formula: {
      heading: `So wird der Grundumsatz berechnet`,
      label: `Mifflin-St Jeor:`,
      note: `Das ist dieselbe Formel, die der TDEE-Rechner oben für seinen Grundumsatz-Wert verwendet, hier für sich allein gezeigt, ohne angewendeten Aktivitätsfaktor.`,
      maleLabel: `Männer:`,
      femaleLabel: `Frauen:`,
      maleCode: `Grundumsatz = 10 × Gewicht (kg) + 6.25 × Größe (cm) − 5 × Alter (Jahre) + 5`,
      femaleCode: `Grundumsatz = 10 × Gewicht (kg) + 6.25 × Größe (cm) − 5 × Alter (Jahre) − 161`,
    },
    bmrVsTdee: {
      heading: `Grundumsatz vs. TDEE`,
      body: `Der Grundumsatz ist der Ausgangspunkt, nicht das ganze Bild. Kommen die Kalorien aus Bewegung, Sport und Alltagsaktivität hinzu, ergibt sich dein TDEE (Gesamtenergieumsatz), die Zahl, die tatsächlich widerspiegelt, wie viele Kalorien du an einem vollen Tag verbrennst.`,
    },
    factors: {
      heading: `Was deinen Grundumsatz beeinflusst`,
      body: `Mehrere Faktoren prägen den Grundumsatz: das Alter (er nimmt tendenziell mit den Jahren ab), die Muskelmasse (Muskeln verbrennen in Ruhe mehr Energie als Fett, mehr Muskelmasse erhöht also den Grundumsatz), das Geschlecht (bereits in der obigen Formel berücksichtigt), Genetik sowie hormonelle Faktoren wie die Schilddrüsenfunktion. Nichts davon lässt sich durch einen Rechner oder einen schnellen Trick allein nennenswert verändern.`,
    },
    related: {
      heading: `Verwandte Rechner`,
      bmiLinkText: `BMI-Rechner`,
      bmiDescription: `— sieh, wie dein Gewicht und deine Größe im Vergleich zu den Standard-BMI-Bereichen stehen.`,
      tdeeLinkText: `TDEE-Rechner`,
      tdeeDescription: `— mach aus dieser Ruhezahl deinen vollständigen täglichen Kalorienbedarf, indem du dein Aktivitätslevel hinzufügst.`,
    },
    resultCta: {
      text: `Das ist deine Ruhezahl.`,
      linkText: `Sieh deinen vollständigen täglichen Kalorienbedarf inklusive Aktivität → TDEE-Rechner`,
    },
  },

  ja: {
    whatIsBmr: {
      heading: `基礎代謝量とは？`,
      body: `基礎代謝量（BMR）とは、完全に安静な状態で体が消費するカロリーのことで、呼吸、血液循環、細胞の修復など、筋肉をまったく動かさなくても起こる、臓器を働かせ続けるためだけの消費量です。消化や身体活動は含まれません。`,
    },
    formula: {
      heading: `基礎代謝量の計算方法`,
      label: `Mifflin-St Jeor式：`,
      note: `上のTDEE計算機がBMRの値を求めるのに使っているのと同じ式で、ここでは活動係数をかけない状態でそのまま示しています。`,
      maleLabel: `男性：`,
      femaleLabel: `女性：`,
      maleCode: `BMR = 10 × 体重（kg）+ 6.25 × 身長（cm）− 5 × 年齢（歳）+ 5`,
      femaleCode: `BMR = 10 × 体重（kg）+ 6.25 × 身長（cm）− 5 × 年齢（歳）− 161`,
    },
    bmrVsTdee: {
      heading: `BMRとTDEEの関係`,
      body: `BMRは出発点であり、それだけがすべてではありません。そこに体を動かすこと、運動、日常の活動で消費するカロリーを足すとTDEE（総消費カロリー）になり、これが1日を通して実際に消費するカロリーを表す数値です。`,
    },
    factors: {
      heading: `基礎代謝量に影響する要因`,
      body: `基礎代謝量にはいくつかの要因が関係します。年齢（年を重ねるにつれて低下する傾向がある）、筋肉量（筋肉は安静時でも脂肪より多くのエネルギーを消費するため、筋肉量が多いほどBMRは高くなる）、性別（すでに上の式に組み込まれている）、遺伝、そして甲状腺機能などのホルモンの影響です。これらは計算機や手軽な方法だけで大きく変えられるものではありません。`,
    },
    related: {
      heading: `関連する計算機`,
      bmiLinkText: `BMI計算機`,
      bmiDescription: `— 体重と身長が標準的なBMI範囲とどう比較されるか確認できます。`,
      tdeeLinkText: `TDEE計算機`,
      tdeeDescription: `— 活動レベルを加えて、この安静時の数値を1日の総必要カロリーに変換できます。`,
    },
    resultCta: {
      text: `これはあなたの安静時の数値です。`,
      linkText: `活動量を加えた1日の総カロリー必要量を見る → TDEE計算機`,
    },
  },

  zh: {
    whatIsBmr: {
      heading: `什么是基础代谢率？`,
      body: `基础代谢率（BMR）是指身体在完全静息状态下消耗的热量，仅用于维持器官运转：呼吸、血液循环、细胞修复，以及所有在你不动一块肌肉的情况下发生的活动。它不包括消化或任何体力活动。`,
    },
    formula: {
      heading: `基础代谢率如何计算`,
      label: `Mifflin-St Jeor公式：`,
      note: `这与上方TDEE计算器用来得出BMR数值的公式完全相同，这里单独展示，未乘以任何活动系数。`,
      maleLabel: `男性：`,
      femaleLabel: `女性：`,
      maleCode: `BMR = 10 × 体重（kg）+ 6.25 × 身高（cm）− 5 × 年龄（岁）+ 5`,
      femaleCode: `BMR = 10 × 体重（kg）+ 6.25 × 身高（cm）− 5 × 年龄（岁）− 161`,
    },
    bmrVsTdee: {
      heading: `BMR与TDEE的关系`,
      body: `BMR只是起点，并不是全部。在此基础上加上运动、锻炼和日常活动所消耗的热量，就得到了你的TDEE（每日总能量消耗），这个数字才真正反映你一整天实际消耗的热量。`,
    },
    factors: {
      heading: `哪些因素会影响你的基础代谢率`,
      body: `有几个因素会影响基础代谢率：年龄（往往会随年龄增长而下降）、肌肉量（肌肉在静息状态下消耗的能量比脂肪多，因此肌肉量越多，BMR越高）、性别（已经内置在上面的公式中）、遗传，以及甲状腺功能等激素因素。这些都不是靠一个计算器或某种捷径就能轻易改变的。`,
    },
    related: {
      heading: `相关计算器`,
      bmiLinkText: `BMI计算器`,
      bmiDescription: `— 看看你的体重和身高与标准BMI范围相比如何。`,
      tdeeLinkText: `TDEE计算器`,
      tdeeDescription: `— 加上你的活动水平，把这个静息数值转化为完整的每日热量需求。`,
    },
    resultCta: {
      text: `这是你的静息热量。`,
      linkText: `查看包含活动量的完整每日热量需求 → TDEE计算器`,
    },
  },

  ko: {
    whatIsBmr: {
      heading: `기초대사량이란 무엇인가요?`,
      body: `기초대사량(BMR)은 완전한 휴식 상태에서 몸이 소비하는 칼로리로, 호흡, 혈액 순환, 세포 회복 등 근육을 전혀 움직이지 않아도 일어나는, 오직 장기를 유지하기 위한 소비량입니다. 소화나 신체 활동은 포함되지 않습니다.`,
    },
    formula: {
      heading: `기초대사량 계산 방법`,
      label: `Mifflin-St Jeor 공식:`,
      note: `위의 TDEE 계산기가 BMR 값을 구할 때 사용하는 것과 같은 공식으로, 여기서는 활동 계수를 곱하지 않은 상태 그대로 보여줍니다.`,
      maleLabel: `남성:`,
      femaleLabel: `여성:`,
      maleCode: `BMR = 10 × 체중(kg) + 6.25 × 키(cm) − 5 × 나이(세) + 5`,
      femaleCode: `BMR = 10 × 체중(kg) + 6.25 × 키(cm) − 5 × 나이(세) − 161`,
    },
    bmrVsTdee: {
      heading: `BMR과 TDEE의 관계`,
      body: `BMR은 출발점일 뿐, 전체 그림은 아닙니다. 여기에 움직임, 운동, 일상 활동으로 소비하는 칼로리를 더하면 TDEE(총 일일 에너지 소비량)가 되며, 이 수치가 하루 동안 실제로 소비하는 칼로리를 나타냅니다.`,
    },
    factors: {
      heading: `기초대사량에 영향을 주는 요인`,
      body: `기초대사량은 여러 요인의 영향을 받습니다: 나이(대개 나이가 들수록 감소하는 경향이 있음), 근육량(근육은 휴식 중에도 지방보다 더 많은 에너지를 소비하므로 근육량이 많을수록 BMR이 높아짐), 성별(이미 위 공식에 반영되어 있음), 유전, 그리고 갑상선 기능 같은 호르몬 요인입니다. 이 중 어느 것도 계산기나 간단한 방법만으로 크게 바꿀 수 있는 것은 없습니다.`,
    },
    related: {
      heading: `관련 계산기`,
      bmiLinkText: `BMI 계산기`,
      bmiDescription: `— 체중과 키가 표준 BMI 범위와 어떻게 비교되는지 확인해 보세요.`,
      tdeeLinkText: `TDEE 계산기`,
      tdeeDescription: `— 활동 수준을 더해 이 휴식 수치를 전체 일일 칼로리 필요량으로 바꿔보세요.`,
    },
    resultCta: {
      text: `이것은 당신의 휴식 칼로리입니다.`,
      linkText: `활동량을 포함한 전체 일일 칼로리 필요량 보기 → TDEE 계산기`,
    },
  },

  hi: {
    whatIsBmr: {
      heading: `बेसल मेटाबॉलिक रेट (BMR) क्या है?`,
      body: `बेसल मेटाबॉलिक रेट (BMR) वह कैलोरी है जो आपका शरीर पूरी तरह आराम की अवस्था में खर्च करता है, बस अंगों को चालू रखने के लिए: सांस लेना, रक्त संचार, कोशिकाओं की मरम्मत, और बाकी सब कुछ जो बिना एक भी मांसपेशी हिलाए होता रहता है। इसमें पाचन या किसी भी शारीरिक गतिविधि की कैलोरी शामिल नहीं है।`,
    },
    formula: {
      heading: `BMR कैसे निकाला जाता है`,
      label: `Mifflin-St Jeor:`,
      note: `यह वही फ़ॉर्मूला है जो ऊपर दिया गया TDEE कैलकुलेटर अपना BMR आंकड़ा निकालने के लिए इस्तेमाल करता है, यहां इसे अकेले, बिना किसी गतिविधि गुणक के दिखाया गया है।`,
      maleLabel: `पुरुष:`,
      femaleLabel: `महिलाएं:`,
      maleCode: `BMR = 10 × वज़न (kg) + 6.25 × लंबाई (cm) − 5 × उम्र (वर्ष) + 5`,
      femaleCode: `BMR = 10 × वज़न (kg) + 6.25 × लंबाई (cm) − 5 × उम्र (वर्ष) − 161`,
    },
    bmrVsTdee: {
      heading: `BMR बनाम TDEE`,
      body: `BMR बस शुरुआती बिंदु है, पूरी तस्वीर नहीं। इसमें हलचल, व्यायाम और रोज़मर्रा की गतिविधि से खर्च होने वाली कैलोरी जोड़ने पर आपका TDEE (कुल दैनिक ऊर्जा व्यय) मिलता है, जो असल में यह दिखाता है कि आप पूरे दिन में कितनी कैलोरी खर्च करते हैं।`,
    },
    factors: {
      heading: `आपके BMR को क्या प्रभावित करता है`,
      body: `कई कारक BMR को प्रभावित करते हैं: उम्र (यह अक्सर उम्र बढ़ने के साथ घटती है), मांसपेशियों का द्रव्यमान (मांसपेशियां आराम की अवस्था में भी फैट से ज़्यादा ऊर्जा खर्च करती हैं, इसलिए ज़्यादा मांसपेशियां BMR बढ़ाती हैं), लिंग (यह पहले से ऊपर दिए फ़ॉर्मूले में शामिल है), जेनेटिक्स, और थायरॉइड जैसे हार्मोनल कारक। इनमें से कोई भी चीज़ किसी कैलकुलेटर या किसी जल्दी वाले तरीके से अकेले बड़े पैमाने पर नहीं बदली जा सकती।`,
    },
    related: {
      heading: `संबंधित कैलकुलेटर`,
      bmiLinkText: `BMI कैलकुलेटर`,
      bmiDescription: `— देखें कि आपका वज़न और लंबाई मानक BMI सीमाओं से कैसे तुलना करते हैं।`,
      tdeeLinkText: `TDEE कैलकुलेटर`,
      tdeeDescription: `— अपनी गतिविधि स्तर जोड़कर इस आराम वाली कैलोरी को अपनी पूरी दैनिक कैलोरी ज़रूरत में बदलें।`,
    },
    resultCta: {
      text: `यह आपकी आराम वाली कैलोरी है।`,
      linkText: `गतिविधि शामिल करके अपनी पूरी दैनिक कैलोरी ज़रूरत देखें → TDEE कैलकुलेटर`,
    },
  },

  id: {
    whatIsBmr: {
      heading: `Apa itu BMR?`,
      body: `Basal Metabolic Rate (BMR) adalah jumlah kalori yang dibakar tubuhmu saat benar-benar istirahat, hanya untuk menjaga organ tetap bekerja: bernapas, sirkulasi darah, perbaikan sel, dan semua hal lain yang terjadi tanpa kamu menggerakkan satu otot pun. Ini tidak termasuk pencernaan atau aktivitas fisik apa pun.`,
    },
    formula: {
      heading: `Cara menghitung BMR`,
      label: `Mifflin-St Jeor:`,
      note: `Ini adalah rumus yang sama dengan yang digunakan kalkulator TDEE di atas untuk mendapatkan angka BMR-nya, ditampilkan di sini secara terpisah, tanpa pengali aktivitas apa pun.`,
      maleLabel: `Pria:`,
      femaleLabel: `Wanita:`,
      maleCode: `BMR = 10 × berat (kg) + 6.25 × tinggi (cm) − 5 × usia (tahun) + 5`,
      femaleCode: `BMR = 10 × berat (kg) + 6.25 × tinggi (cm) − 5 × usia (tahun) − 161`,
    },
    bmrVsTdee: {
      heading: `BMR vs TDEE`,
      body: `BMR hanyalah titik awal, bukan keseluruhan gambaran. Tambahkan kalori yang dibakar melalui gerakan, olahraga, dan aktivitas sehari-hari, maka kamu akan mendapatkan TDEE (Total Daily Energy Expenditure), angka yang benar-benar mencerminkan berapa banyak kalori yang kamu bakar dalam sehari penuh.`,
    },
    factors: {
      heading: `Apa yang memengaruhi BMR kamu`,
      body: `Beberapa faktor memengaruhi BMR: usia (cenderung menurun seiring bertambahnya usia), massa otot (otot membakar lebih banyak energi saat istirahat dibandingkan lemak, jadi semakin banyak massa otot semakin tinggi BMR), jenis kelamin (sudah diperhitungkan dalam rumus di atas), genetika, dan faktor hormon seperti fungsi tiroid. Tidak satu pun dari ini bisa diubah secara signifikan hanya dengan kalkulator atau trik cepat.`,
    },
    related: {
      heading: `Kalkulator terkait`,
      bmiLinkText: `Kalkulator BMI`,
      bmiDescription: `— lihat bagaimana berat dan tinggi badanmu dibandingkan dengan rentang BMI standar.`,
      tdeeLinkText: `Kalkulator TDEE`,
      tdeeDescription: `— ubah angka istirahat ini menjadi kebutuhan kalori harian lengkap dengan menambahkan tingkat aktivitasmu.`,
    },
    resultCta: {
      text: `Ini adalah angka istirahatmu.`,
      linkText: `Lihat kebutuhan kalori harian lengkap dengan aktivitas → Kalkulator TDEE`,
    },
  },
};

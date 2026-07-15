export interface CalorieContent {
  whatIsCalorie: { heading: string; body: string };
  rule: { heading: string; body: string };
  ranges: {
    heading: string;
    intro: string;
    goalHeader: string;
    rangeHeader: string;
    rows: [string, string][];
    note: string;
  };
  caution: { heading: string; body: string };
  limitations: { heading: string; body: string };
  related: {
    heading: string;
    tdeeLinkText: string;
    tdeeDescription: string;
    bmrLinkText: string;
    bmrDescription: string;
    bodyfatLinkText: string;
    bodyfatDescription: string;
  };
}

export const calorieContent: Record<string, CalorieContent> = {
  sv: {
    whatIsCalorie: {
      heading: `Hur många kalorier bör du äta?`,
      body: `Den här kalkylatorn bygger direkt på ditt TDEE (totala dagliga energiförbrukning) och använder ingen egen ny formel. Den räknar fram samma Mifflin-St Jeor-baserade uträkning, justerar för din aktivitetsnivå, och lägger sedan till eller drar bort kalorier beroende på det mål du väljer nedan: gå ner i vikt, gå upp i vikt, eller ligga still.`,
    },
    rule: {
      heading: `7,700 kcal-tumregeln`,
      body: `En vanligt citerad tumregel likställer ungefär 7,700 kcal med cirka 1 kg kroppsfett, så ett dagligt underskott på 500 kcal motsvarar grovt sett 0.5 kg viktnedgång i veckan. Det är ett användbart planeringstal, inte en exakt lag: verklig viktförändring är inte helt linjär, dag-till-dag-skillnader är ofta vätskevikt snarare än fett, och ämnesomsättningen tenderar att anpassa sig något när vikten förändras, så resultaten brukar sakta in över tid även vid ett jämnt underskott.`,
    },
    ranges: {
      heading: `Intervall för underskott och överskott`,
      intro: `Kalkylatorn ovan använder fasta justeringar, men ett realistiskt intervall ser ut så här:`,
      goalHeader: `Mål`,
      rangeHeader: `Daglig justering`,
      rows: [
        [`Måttligt underskott`, `-250 till -500 kcal/dag`],
        [`Aggressivt underskott`, `-500 till -1,000 kcal/dag`],
        [`Mager viktuppgång`, `+250 till +500 kcal/dag`],
      ],
      note: `Aggressiva underskott ger snabbare viktnedgång på pappret, men de är svårare att hålla och tar oftare med sig muskelmassa, inte bara fett. Ett måttligt underskott är oftast det mer hållbara valet.`,
    },
    caution: {
      heading: `När man bör vara försiktig`,
      body: `Väldigt lågt intag är inget att sträva efter utan vägledning. Som en generell riktlinje bör man inte gå under ungefär 1,200 kcal om dagen för kvinnor eller 1,500 kcal om dagen för män utan medicinsk uppsikt. Det här är inte medicinsk rådgivning, bara en allmänt citerad nedre gräns värd att känna till innan man drar ner kraftigt på kalorierna.`,
    },
    limitations: {
      heading: `Begränsningar`,
      body: `Den här siffran är bara så träffsäker som det TDEE den bygger på, och TDEE i sig är en uppskattning med en verklig felmarginal. Den tar inte heller hänsyn till individuella skillnader i hur kroppar svarar på ett underskott eller överskott, vätskeretention, eller förändringar i aktivitetsnivå över tid. Se den som en utgångspunkt och justera utifrån hur din vikt faktiskt utvecklas över några veckor.`,
    },
    related: {
      heading: `Relaterade kalkylatorer`,
      tdeeLinkText: `TDEE-kalkylator`,
      tdeeDescription: `— se underhållssiffran den här kalkylatorn bygger på, uppdelad efter aktivitetsnivå.`,
      bmrLinkText: `BMR-kalkylator`,
      bmrDescription: `— se din vilokalorinivå innan aktivitet räknas in.`,
      bodyfatLinkText: `Kroppsfettkalkylator`,
      bodyfatDescription: `— få en mer direkt bild av kroppssammansättningen att komplettera ditt kaloribehov med.`,
    },
  },

  en: {
    whatIsCalorie: {
      heading: `How many calories should you eat?`,
      body: `This calculator builds directly on your TDEE (Total Daily Energy Expenditure) and doesn't use a new formula of its own. It runs the same Mifflin-St Jeor-based calculation, adjusts it for your activity level, then adds or subtracts calories based on the goal you pick below: losing weight, gaining weight, or staying the same.`,
    },
    rule: {
      heading: `The 7,700 kcal rule of thumb`,
      body: `A commonly cited rule of thumb treats roughly 7,700 kcal as equal to about 1 kg of body fat, so a daily deficit of 500 kcal works out to roughly 0.5 kg of weight loss a week. It's a useful planning number, not a precise law: real weight change isn't perfectly linear, day-to-day shifts are often water weight rather than fat, and metabolism tends to adapt somewhat as weight changes, so results usually slow down over time even at a steady deficit.`,
    },
    ranges: {
      heading: `Deficit and surplus ranges`,
      intro: `The calculator above uses fixed adjustments, but a realistic range looks like this:`,
      goalHeader: `Goal`,
      rangeHeader: `Daily adjustment`,
      rows: [
        [`Mild deficit`, `-250 to -500 kcal/day`],
        [`Aggressive deficit`, `-500 to -1,000 kcal/day`],
        [`Lean bulk`, `+250 to +500 kcal/day`],
      ],
      note: `Aggressive deficits lose weight faster on paper, but they're harder to sustain and more likely to cost muscle along with fat. A mild deficit is usually the more durable choice.`,
    },
    caution: {
      heading: `When to be careful`,
      body: `Very low intakes aren't something to reach for without guidance. As a general rule, going below roughly 1,200 kcal a day for women or 1,500 kcal a day for men isn't recommended without medical supervision. This isn't medical advice, just a widely cited floor worth knowing before cutting calories aggressively.`,
    },
    limitations: {
      heading: `Limitations`,
      body: `This number is only as accurate as the TDEE it's built on, and TDEE itself is an estimate with a real-world margin of error. It also doesn't account for individual differences in how bodies respond to a deficit or surplus, water retention, or changes in activity level over time. Treat it as a starting point and adjust based on how your weight actually trends over a few weeks.`,
    },
    related: {
      heading: `Related calculators`,
      tdeeLinkText: `TDEE Calculator`,
      tdeeDescription: `— see the maintenance number this calculator is built on, broken down by activity level.`,
      bmrLinkText: `BMR Calculator`,
      bmrDescription: `— see the resting calorie baseline before activity is factored in.`,
      bodyfatLinkText: `Body Fat Calculator`,
      bodyfatDescription: `— get a more direct look at body composition to pair with your calorie target.`,
    },
  },

  pt: {
    whatIsCalorie: {
      heading: `Quantas calorias você deveria comer?`,
      body: `Essa calculadora se baseia diretamente no seu TDEE (Gasto Energético Total Diário) e não usa uma fórmula própria nova. Ela faz o mesmo cálculo baseado em Mifflin-St Jeor, ajusta pelo seu nível de atividade, e então soma ou subtrai calorias de acordo com o objetivo que você escolhe abaixo: perder peso, ganhar peso, ou manter.`,
    },
    rule: {
      heading: `A regra prática dos 7,700 kcal`,
      body: `Uma regra prática bastante citada considera cerca de 7,700 kcal equivalentes a aproximadamente 1 kg de gordura corporal, então um déficit diário de 500 kcal resulta em cerca de 0.5 kg de perda de peso por semana. É um número útil para planejamento, não uma lei exata: a mudança real de peso não é perfeitamente linear, variações de um dia para outro costumam ser retenção de líquidos e não gordura, e o metabolismo tende a se adaptar um pouco conforme o peso muda, então os resultados costumam desacelerar com o tempo mesmo com um déficit constante.`,
    },
    ranges: {
      heading: `Faixas de déficit e superávit`,
      intro: `A calculadora acima usa ajustes fixos, mas uma faixa realista é assim:`,
      goalHeader: `Objetivo`,
      rangeHeader: `Ajuste diário`,
      rows: [
        [`Déficit leve`, `-250 a -500 kcal/dia`],
        [`Déficit agressivo`, `-500 a -1,000 kcal/dia`],
        [`Ganho de massa magra`, `+250 a +500 kcal/dia`],
      ],
      note: `Déficits agressivos emagrecem mais rápido no papel, mas são mais difíceis de manter e mais propensos a custar massa muscular junto com a gordura. Um déficit leve costuma ser a escolha mais sustentável.`,
    },
    caution: {
      heading: `Quando ter cuidado`,
      body: `Ingestões muito baixas não são algo a buscar sem orientação. Como regra geral, ficar abaixo de cerca de 1,200 kcal por dia para mulheres ou 1,500 kcal por dia para homens não é recomendado sem acompanhamento médico. Isso não é um conselho médico, apenas um limite amplamente citado que vale a pena conhecer antes de cortar calorias de forma agressiva.`,
    },
    limitations: {
      heading: `Limitações`,
      body: `Esse número é tão preciso quanto o TDEE em que se baseia, e o próprio TDEE é uma estimativa com uma margem de erro real. Também não considera diferenças individuais em como os corpos respondem a um déficit ou superávit, retenção de líquidos, ou mudanças no nível de atividade ao longo do tempo. Use-o como ponto de partida e ajuste com base em como seu peso realmente evolui ao longo de algumas semanas.`,
    },
    related: {
      heading: `Calculadoras relacionadas`,
      tdeeLinkText: `Calculadora de TDEE`,
      tdeeDescription: `— veja o número de manutenção em que esta calculadora se baseia, detalhado por nível de atividade.`,
      bmrLinkText: `Calculadora de TMB`,
      bmrDescription: `— veja sua base calórica de repouso antes de considerar a atividade.`,
      bodyfatLinkText: `Calculadora de Gordura Corporal`,
      bodyfatDescription: `— tenha um olhar mais direto sobre a composição corporal para complementar sua meta calórica.`,
    },
  },

  es: {
    whatIsCalorie: {
      heading: `¿Cuántas calorías deberías comer?`,
      body: `Esta calculadora se basa directamente en tu TDEE (Gasto Energético Total Diario) y no usa una fórmula propia nueva. Realiza el mismo cálculo basado en Mifflin-St Jeor, lo ajusta según tu nivel de actividad, y luego suma o resta calorías según el objetivo que elijas abajo: perder peso, ganar peso o mantenerte igual.`,
    },
    rule: {
      heading: `La regla práctica de las 7,700 kcal`,
      body: `Una regla práctica muy citada equipara unas 7,700 kcal a aproximadamente 1 kg de grasa corporal, así que un déficit diario de 500 kcal equivale a cerca de 0.5 kg de pérdida de peso a la semana. Es una cifra útil para planificar, no una ley exacta: el cambio real de peso no es perfectamente lineal, las variaciones de un día a otro suelen ser retención de líquidos y no grasa, y el metabolismo tiende a adaptarse algo a medida que cambia el peso, por lo que los resultados suelen ralentizarse con el tiempo incluso con un déficit constante.`,
    },
    ranges: {
      heading: `Rangos de déficit y superávit`,
      intro: `La calculadora de arriba usa ajustes fijos, pero un rango realista se ve así:`,
      goalHeader: `Objetivo`,
      rangeHeader: `Ajuste diario`,
      rows: [
        [`Déficit leve`, `-250 a -500 kcal/día`],
        [`Déficit agresivo`, `-500 a -1,000 kcal/día`],
        [`Aumento de masa magra`, `+250 a +500 kcal/día`],
      ],
      note: `Los déficits agresivos adelgazan más rápido sobre el papel, pero son más difíciles de mantener y más propensos a costar músculo además de grasa. Un déficit leve suele ser la opción más sostenible.`,
    },
    caution: {
      heading: `Cuándo tener cuidado`,
      body: `Las ingestas muy bajas no son algo a lo que recurrir sin orientación. Como regla general, bajar de unas 1,200 kcal al día para mujeres o 1,500 kcal al día para hombres no se recomienda sin supervisión médica. Esto no es un consejo médico, solo un límite ampliamente citado que vale la pena conocer antes de recortar calorías de forma agresiva.`,
    },
    limitations: {
      heading: `Limitaciones`,
      body: `Esta cifra es tan precisa como el TDEE en el que se basa, y el propio TDEE es una estimación con un margen de error real. Tampoco tiene en cuenta las diferencias individuales en cómo responden los cuerpos a un déficit o superávit, la retención de líquidos, ni los cambios en el nivel de actividad con el tiempo. Trátala como punto de partida y ajústala según cómo evolucione realmente tu peso a lo largo de unas semanas.`,
    },
    related: {
      heading: `Calculadoras relacionadas`,
      tdeeLinkText: `Calculadora de TDEE`,
      tdeeDescription: `— consulta la cifra de mantenimiento en la que se basa esta calculadora, desglosada por nivel de actividad.`,
      bmrLinkText: `Calculadora de TMB`,
      bmrDescription: `— consulta tu base calórica en reposo antes de tener en cuenta la actividad.`,
      bodyfatLinkText: `Calculadora de Grasa Corporal`,
      bodyfatDescription: `— obtén una mirada más directa a tu composición corporal para complementar tu objetivo calórico.`,
    },
  },

  de: {
    whatIsCalorie: {
      heading: `Wie viele Kalorien solltest du essen?`,
      body: `Dieser Rechner baut direkt auf deinem TDEE (Gesamtenergieumsatz) auf und verwendet keine eigene neue Formel. Er führt dieselbe Mifflin-St-Jeor-basierte Berechnung durch, passt sie an dein Aktivitätslevel an und addiert oder subtrahiert dann Kalorien je nach dem Ziel, das du unten auswählst: abnehmen, zunehmen oder das Gewicht halten.`,
    },
    rule: {
      heading: `Die 7,700-kcal-Faustregel`,
      body: `Eine oft zitierte Faustregel setzt etwa 7,700 kcal mit rund 1 kg Körperfett gleich, sodass ein tägliches Defizit von 500 kcal ungefähr 0.5 kg Gewichtsverlust pro Woche entspricht. Das ist eine nützliche Planungszahl, kein exaktes Gesetz: Die tatsächliche Gewichtsveränderung verläuft nicht perfekt linear, Schwankungen von Tag zu Tag sind oft Wasser statt Fett, und der Stoffwechsel passt sich mit der Zeit etwas an, sodass sich die Ergebnisse selbst bei einem gleichbleibenden Defizit meist verlangsamen.`,
    },
    ranges: {
      heading: `Defizit- und Überschussbereiche`,
      intro: `Der Rechner oben nutzt feste Anpassungen, ein realistischer Bereich sieht aber so aus:`,
      goalHeader: `Ziel`,
      rangeHeader: `Tägliche Anpassung`,
      rows: [
        [`Leichtes Defizit`, `-250 bis -500 kcal/Tag`],
        [`Aggressives Defizit`, `-500 bis -1,000 kcal/Tag`],
        [`Definierter Muskelaufbau`, `+250 bis +500 kcal/Tag`],
      ],
      note: `Aggressive Defizite lassen das Gewicht auf dem Papier schneller sinken, sind aber schwerer durchzuhalten und gehen häufiger auch auf Kosten von Muskelmasse statt nur Fett. Ein leichtes Defizit ist meist die nachhaltigere Wahl.`,
    },
    caution: {
      heading: `Wann Vorsicht geboten ist`,
      body: `Sehr niedrige Kalorienzufuhr sollte man nicht ohne Anleitung anstreben. Als allgemeine Richtlinie gilt: weniger als etwa 1,200 kcal am Tag für Frauen oder 1,500 kcal am Tag für Männer wird ohne ärztliche Begleitung nicht empfohlen. Das ist keine medizinische Beratung, nur eine weit verbreitete Untergrenze, die man kennen sollte, bevor man die Kalorien stark reduziert.`,
    },
    limitations: {
      heading: `Einschränkungen`,
      body: `Diese Zahl ist nur so genau wie der TDEE, auf dem sie basiert, und der TDEE selbst ist eine Schätzung mit einer realen Fehlerspanne. Sie berücksichtigt auch nicht individuelle Unterschiede darin, wie Körper auf ein Defizit oder einen Überschuss reagieren, Wassereinlagerungen oder Änderungen des Aktivitätslevels über die Zeit. Behandle sie als Ausgangspunkt und passe sie anhand deines tatsächlichen Gewichtsverlaufs über einige Wochen an.`,
    },
    related: {
      heading: `Verwandte Rechner`,
      tdeeLinkText: `TDEE-Rechner`,
      tdeeDescription: `— sieh die Erhaltungskalorienzahl, auf der dieser Rechner basiert, aufgeschlüsselt nach Aktivitätslevel.`,
      bmrLinkText: `BMR-Rechner`,
      bmrDescription: `— sieh deinen Ruhekalorien-Basiswert, bevor Aktivität einberechnet wird.`,
      bodyfatLinkText: `Körperfett-Rechner`,
      bodyfatDescription: `— ein direkterer Blick auf die Körperzusammensetzung als Ergänzung zu deinem Kalorienziel.`,
    },
  },

  ja: {
    whatIsCalorie: {
      heading: `1日にどれくらいのカロリーを摂るべき？`,
      body: `この計算機はあなたのTDEE（総消費カロリー）をそのまま土台にしており、独自の新しい計算式は使っていません。同じMifflin-St Jeorベースの計算を行い、活動レベルで調整したうえで、下で選んだ目標——減量、増量、維持——に応じてカロリーを増減させます。`,
    },
    rule: {
      heading: `7,700kcalの目安ルール`,
      body: `よく引用される目安として、約7,700kcalを体脂肪約1kgに相当するとする考え方があります。そのため1日500kcalの不足は、おおよそ週0.5kgの減量に相当します。これはあくまで計画のための目安であり、正確な法則ではありません。実際の体重変化は完全に直線的ではなく、日々の変動の多くは脂肪ではなく水分によるものです。また、体重が変化するにつれて代謝もある程度適応するため、一定の不足を続けていても効果は徐々に緩やかになるのが普通です。`,
    },
    ranges: {
      heading: `不足・余剰カロリーの目安幅`,
      intro: `上の計算機では固定の調整値を使っていますが、現実的な幅は次のようになります。`,
      goalHeader: `目標`,
      rangeHeader: `1日あたりの調整`,
      rows: [
        [`軽度のカロリー不足`, `-250〜-500kcal/日`],
        [`積極的なカロリー不足`, `-500〜-1,000kcal/日`],
        [`除脂肪増量`, `+250〜+500kcal/日`],
      ],
      note: `積極的なカロリー不足は数字の上では減量が速く進みますが、続けるのが難しく、脂肪だけでなく筋肉も失いやすくなります。多くの場合、軽度のカロリー不足のほうが長続きしやすい選択です。`,
    },
    caution: {
      heading: `注意すべきとき`,
      body: `極端に低いカロリー摂取は、指導なしに目指すべきものではありません。一般的な目安として、女性で1日約1,200kcal、男性で1日約1,500kcalを下回る場合は、医療専門家の管理なしに行うべきではないとされています。これは医学的な助言ではなく、大幅にカロリーを減らす前に知っておく価値のある、広く引用されている下限の目安です。`,
    },
    limitations: {
      heading: `限界`,
      body: `この数値は、その土台となるTDEEと同程度の精度しかなく、TDEE自体も現実には誤差のある推定値です。また、不足・余剰カロリーへの体の反応の個人差、水分保持、時間の経過による活動レベルの変化なども考慮されていません。これを出発点として捉え、数週間の実際の体重の推移に応じて調整してください。`,
    },
    related: {
      heading: `関連する計算機`,
      tdeeLinkText: `TDEE計算機`,
      tdeeDescription: `— この計算機の土台となる維持カロリーを、活動レベル別に確認できます。`,
      bmrLinkText: `BMR計算機`,
      bmrDescription: `— 活動量を加える前の、安静時カロリーの基準値を確認できます。`,
      bodyfatLinkText: `体脂肪率計算機`,
      bodyfatDescription: `— カロリー目標と合わせて、より直接的に体組成を確認できます。`,
    },
  },

  zh: {
    whatIsCalorie: {
      heading: `你每天应该摄入多少热量？`,
      body: `这个计算器直接基于你的TDEE（每日总能量消耗），本身并不使用新的公式。它使用同样基于Mifflin-St Jeor的计算方式，根据你的活动水平进行调整，然后根据你在下方选择的目标——减重、增重或维持体重——增加或减少热量。`,
    },
    rule: {
      heading: `7,700千卡的经验法则`,
      body: `一个常被引用的经验法则认为，大约7,700千卡相当于1公斤体脂肪，因此每天500千卡的热量缺口大致相当于每周减重0.5公斤。这是一个有用的规划参考数字，而不是精确的定律：实际的体重变化并非完全线性，日常波动往往是水分而非脂肪的变化，而且随着体重变化，新陈代谢也会有一定程度的适应，因此即使保持稳定的热量缺口，效果通常也会随时间逐渐放缓。`,
    },
    ranges: {
      heading: `热量缺口与盈余的区间`,
      intro: `上方计算器使用的是固定的调整值，但更现实的区间大致如下：`,
      goalHeader: `目标`,
      rangeHeader: `每日调整量`,
      rows: [
        [`轻度热量缺口`, `-250至-500千卡/天`],
        [`大幅热量缺口`, `-500至-1,000千卡/天`],
        [`精瘦增肌`, `+250至+500千卡/天`],
      ],
      note: `从数字上看，大幅热量缺口能更快减重，但更难坚持，也更容易在减脂的同时流失肌肉。轻度热量缺口通常是更持久的选择。`,
    },
    caution: {
      heading: `需要谨慎的情况`,
      body: `非常低的热量摄入不应该在没有指导的情况下尝试。作为一般准则，女性每日摄入低于约1,200千卡、男性低于约1,500千卡，若无医疗监督则不建议这样做。这并非医疗建议，只是一个被广泛引用、在大幅削减热量之前值得了解的下限。`,
    },
    limitations: {
      heading: `局限性`,
      body: `这个数字的准确性取决于它所基于的TDEE，而TDEE本身就是一个存在实际误差的估算值。它也没有考虑身体对热量缺口或盈余反应的个体差异、水分潴留，以及活动水平随时间的变化。请把它当作一个起点，并根据几周内体重的实际变化趋势来调整。`,
    },
    related: {
      heading: `相关计算器`,
      tdeeLinkText: `TDEE计算器`,
      tdeeDescription: `— 查看这个计算器所基于的维持热量，并按活动水平细分。`,
      bmrLinkText: `BMR计算器`,
      bmrDescription: `— 查看未计入活动量之前的静息热量基准。`,
      bodyfatLinkText: `体脂率计算器`,
      bodyfatDescription: `— 结合你的热量目标，更直接地了解身体成分。`,
    },
  },

  ko: {
    whatIsCalorie: {
      heading: `하루에 칼로리를 얼마나 섭취해야 할까요?`,
      body: `이 계산기는 당신의 TDEE(총 일일 에너지 소비량)를 그대로 기반으로 하며, 별도의 새로운 공식을 사용하지 않습니다. 동일한 Mifflin-St Jeor 기반 계산을 수행하고 활동 수준에 맞게 조정한 다음, 아래에서 선택한 목표—체중 감량, 체중 증가, 유지—에 따라 칼로리를 더하거나 뺍니다.`,
    },
    rule: {
      heading: `7,700kcal 어림 법칙`,
      body: `흔히 인용되는 어림 법칙은 약 7,700kcal를 체지방 약 1kg에 해당한다고 봅니다. 그래서 하루 500kcal의 결손은 대략 주당 0.5kg의 체중 감량에 해당합니다. 이는 계획에 유용한 참고 수치일 뿐, 정확한 법칙은 아닙니다. 실제 체중 변화는 완전히 선형적이지 않고, 하루 단위의 변동은 지방보다는 수분인 경우가 많으며, 체중이 변하면서 대사도 어느 정도 적응하기 때문에 꾸준한 결손 상태를 유지해도 시간이 지나면서 효과가 대체로 느려집니다.`,
    },
    ranges: {
      heading: `결손 및 잉여 범위`,
      intro: `위 계산기는 고정된 조정값을 사용하지만, 현실적인 범위는 다음과 같습니다:`,
      goalHeader: `목표`,
      rangeHeader: `일일 조정량`,
      rows: [
        [`가벼운 칼로리 결손`, `-250 ~ -500kcal/일`],
        [`적극적인 칼로리 결손`, `-500 ~ -1,000kcal/일`],
        [`린 벌크업`, `+250 ~ +500kcal/일`],
      ],
      note: `적극적인 칼로리 결손은 수치상으로는 체중이 더 빨리 줄지만, 유지하기 어렵고 지방과 함께 근육도 잃기 쉽습니다. 대체로 가벼운 칼로리 결손이 더 오래 지속할 수 있는 선택입니다.`,
    },
    caution: {
      heading: `주의해야 할 때`,
      body: `매우 낮은 섭취량은 지도 없이 시도할 만한 것이 아닙니다. 일반적인 기준으로, 여성은 하루 약 1,200kcal, 남성은 하루 약 1,500kcal 미만으로 섭취하는 것은 의료진의 관리 없이는 권장되지 않습니다. 이는 의학적 조언이 아니라, 칼로리를 크게 줄이기 전에 알아둘 가치가 있는 널리 알려진 하한선입니다.`,
    },
    limitations: {
      heading: `한계점`,
      body: `이 수치는 그 기반이 되는 TDEE만큼만 정확하며, TDEE 자체도 실제 오차 범위를 가진 추정치입니다. 또한 결손이나 잉여에 대한 신체 반응의 개인차, 수분 저류, 시간에 따른 활동 수준 변화도 반영하지 않습니다. 이를 출발점으로 삼고, 몇 주간의 실제 체중 변화 추세에 따라 조정하세요.`,
    },
    related: {
      heading: `관련 계산기`,
      tdeeLinkText: `TDEE 계산기`,
      tdeeDescription: `— 이 계산기의 기반이 되는 유지 칼로리를 활동 수준별로 확인해 보세요.`,
      bmrLinkText: `BMR 계산기`,
      bmrDescription: `— 활동량을 반영하기 전의 휴식 칼로리 기준치를 확인해 보세요.`,
      bodyfatLinkText: `체지방률 계산기`,
      bodyfatDescription: `— 칼로리 목표와 함께 체구성을 더 직접적으로 확인해 보세요.`,
    },
  },

  hi: {
    whatIsCalorie: {
      heading: `आपको रोज़ कितनी कैलोरी खानी चाहिए?`,
      body: `यह कैलकुलेटर सीधे आपके TDEE (कुल दैनिक ऊर्जा व्यय) पर आधारित है और इसका अपना कोई नया फ़ॉर्मूला नहीं है। यह वही Mifflin-St Jeor पर आधारित गणना करता है, आपकी गतिविधि स्तर के हिसाब से इसे एडजस्ट करता है, और फिर नीचे चुने गए लक्ष्य के आधार पर कैलोरी जोड़ता या घटाता है: वज़न घटाना, वज़न बढ़ाना, या वज़न बनाए रखना।`,
    },
    rule: {
      heading: `7,700 kcal का अंदाज़ा-नियम`,
      body: `एक आम तौर पर बताया जाने वाला अंदाज़ा-नियम लगभग 7,700 kcal को करीब 1 kg शरीर के फैट के बराबर मानता है, इसलिए रोज़ाना 500 kcal की कमी लगभग हफ़्ते में 0.5 kg वज़न घटाने के बराबर होती है। यह एक उपयोगी योजना-आंकड़ा है, कोई सटीक नियम नहीं: असली वज़न परिवर्तन पूरी तरह रैखिक नहीं होता, दिन-प्रतिदिन के बदलाव अक्सर फैट के बजाय पानी के वज़न से जुड़े होते हैं, और वज़न बदलने के साथ मेटाबॉलिज्म भी कुछ हद तक ढल जाता है, इसलिए एक जैसी कमी बनाए रखने पर भी नतीजे आमतौर पर समय के साथ धीमे पड़ जाते हैं।`,
    },
    ranges: {
      heading: `कमी और अतिरिक्त कैलोरी की रेंज`,
      intro: `ऊपर दिया गया कैलकुलेटर तय की गई एडजस्टमेंट का उपयोग करता है, लेकिन एक व्यावहारिक रेंज कुछ ऐसी दिखती है:`,
      goalHeader: `लक्ष्य`,
      rangeHeader: `दैनिक एडजस्टमेंट`,
      rows: [
        [`हल्की कैलोरी कमी`, `-250 से -500 kcal/दिन`],
        [`ज़्यादा कैलोरी कमी`, `-500 से -1,000 kcal/दिन`],
        [`लीन बल्क`, `+250 से +500 kcal/दिन`],
      ],
      note: `ज़्यादा कैलोरी कमी कागज़ पर तेज़ी से वज़न घटाती है, लेकिन इसे बनाए रखना मुश्किल होता है और इससे फैट के साथ-साथ मांसपेशियां भी घटने की संभावना ज़्यादा रहती है। हल्की कैलोरी कमी अक्सर ज़्यादा टिकाऊ विकल्प होती है।`,
    },
    caution: {
      heading: `कब सावधानी बरतें`,
      body: `बहुत कम कैलोरी लेना बिना मार्गदर्शन के अपनाने वाली चीज़ नहीं है। एक सामान्य नियम के तौर पर, महिलाओं के लिए रोज़ाना लगभग 1,200 kcal या पुरुषों के लिए 1,500 kcal से कम जाना बिना मेडिकल निगरानी के सुझाया नहीं जाता। यह मेडिकल सलाह नहीं है, बस एक व्यापक रूप से बताई जाने वाली निचली सीमा है जो कैलोरी में बड़ी कटौती करने से पहले जान लेना अच्छा है।`,
    },
    limitations: {
      heading: `सीमाएँ`,
      body: `यह आंकड़ा उतना ही सटीक है जितना इसके आधार वाला TDEE, और TDEE खुद एक अनुमान है जिसमें असली फ़र्क की गुंजाइश होती है। यह शरीर के कैलोरी कमी या अतिरिक्त पर प्रतिक्रिया देने के तरीके में व्यक्तिगत अंतर, पानी के जमाव, या समय के साथ गतिविधि स्तर में बदलाव को भी ध्यान में नहीं रखता। इसे एक शुरुआती बिंदु मानें और कुछ हफ़्तों में अपने वज़न में आए असली बदलाव के हिसाब से इसे एडजस्ट करें।`,
    },
    related: {
      heading: `संबंधित कैलकुलेटर`,
      tdeeLinkText: `TDEE कैलकुलेटर`,
      tdeeDescription: `— वह मेंटेनेंस आंकड़ा देखें जिस पर यह कैलकुलेटर आधारित है, गतिविधि स्तर के हिसाब से विभाजित।`,
      bmrLinkText: `BMR कैलकुलेटर`,
      bmrDescription: `— गतिविधि जोड़ने से पहले अपनी आराम वाली कैलोरी का आधार देखें।`,
      bodyfatLinkText: `बॉडी फैट कैलकुलेटर`,
      bodyfatDescription: `— अपने कैलोरी लक्ष्य के साथ शरीर की संरचना को ज़्यादा सीधे तरीके से देखें।`,
    },
  },

  id: {
    whatIsCalorie: {
      heading: `Berapa banyak kalori yang harus kamu makan?`,
      body: `Kalkulator ini langsung dibangun berdasarkan TDEE-mu (Total Daily Energy Expenditure) dan tidak menggunakan rumus baru sendiri. Kalkulator ini menjalankan perhitungan berbasis Mifflin-St Jeor yang sama, menyesuaikannya dengan tingkat aktivitasmu, lalu menambah atau mengurangi kalori berdasarkan target yang kamu pilih di bawah: menurunkan berat badan, menambah berat badan, atau mempertahankannya.`,
    },
    rule: {
      heading: `Aturan praktis 7,700 kkal`,
      body: `Aturan praktis yang sering dikutip menganggap sekitar 7,700 kkal setara dengan sekitar 1 kg lemak tubuh, jadi defisit harian 500 kkal setara dengan sekitar 0.5 kg penurunan berat badan per minggu. Ini adalah angka perencanaan yang berguna, bukan hukum yang pasti: perubahan berat badan sebenarnya tidak sepenuhnya linear, perubahan dari hari ke hari sering kali berupa berat air, bukan lemak, dan metabolisme cenderung sedikit beradaptasi seiring perubahan berat badan, sehingga hasilnya biasanya melambat seiring waktu meski defisit tetap konsisten.`,
    },
    ranges: {
      heading: `Rentang defisit dan surplus`,
      intro: `Kalkulator di atas menggunakan penyesuaian tetap, tetapi rentang yang realistis kurang lebih seperti ini:`,
      goalHeader: `Target`,
      rangeHeader: `Penyesuaian harian`,
      rows: [
        [`Defisit ringan`, `-250 hingga -500 kkal/hari`],
        [`Defisit agresif`, `-500 hingga -1,000 kkal/hari`],
        [`Bulking ramping`, `+250 hingga +500 kkal/hari`],
      ],
      note: `Defisit agresif menurunkan berat badan lebih cepat di atas kertas, tetapi lebih sulit dipertahankan dan lebih berisiko mengurangi massa otot selain lemak. Defisit ringan biasanya menjadi pilihan yang lebih tahan lama.`,
    },
    caution: {
      heading: `Kapan harus berhati-hati`,
      body: `Asupan yang sangat rendah bukan sesuatu yang sebaiknya dicoba tanpa panduan. Sebagai aturan umum, mengonsumsi kurang dari sekitar 1,200 kkal per hari untuk wanita atau 1,500 kkal per hari untuk pria tidak disarankan tanpa pengawasan medis. Ini bukan nasihat medis, hanya batas bawah yang banyak dikutip dan layak diketahui sebelum memangkas kalori secara agresif.`,
    },
    limitations: {
      heading: `Keterbatasan`,
      body: `Angka ini hanya seakurat TDEE yang menjadi dasarnya, dan TDEE sendiri adalah perkiraan dengan margin kesalahan nyata. Angka ini juga tidak memperhitungkan perbedaan individu dalam cara tubuh merespons defisit atau surplus, retensi air, atau perubahan tingkat aktivitas dari waktu ke waktu. Anggap ini sebagai titik awal dan sesuaikan berdasarkan bagaimana berat badanmu benar-benar berubah selama beberapa minggu.`,
    },
    related: {
      heading: `Kalkulator terkait`,
      tdeeLinkText: `Kalkulator TDEE`,
      tdeeDescription: `— lihat angka pemeliharaan yang menjadi dasar kalkulator ini, dirinci berdasarkan tingkat aktivitas.`,
      bmrLinkText: `Kalkulator BMR`,
      bmrDescription: `— lihat kalori dasar saat istirahat sebelum aktivitas diperhitungkan.`,
      bodyfatLinkText: `Kalkulator Lemak Tubuh`,
      bodyfatDescription: `— lihat komposisi tubuh secara lebih langsung untuk melengkapi target kalorimu.`,
    },
  },
};

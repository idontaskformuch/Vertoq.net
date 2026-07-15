export interface BmiContent {
  whatIsBmi: { heading: string; body: string };
  whoTable: {
    heading: string;
    categoryHeader: string;
    rangeHeader: string;
    rows: [string, string][];
    source: string;
  };
  children: {
    heading: string;
    intro: string;
    categoryHeader: string;
    percentileHeader: string;
    rows: [string, string][];
    source: string;
  };
  formula: {
    heading: string;
    metricFormulaLabel: string;
    metricFormulaCode: string;
    usFormulaLabel: string;
    usFormulaCode: string;
    exampleHeading: string;
    metricExampleHtml: string;
    usExampleHtml: string;
  };
  bmiPrime: { heading: string; bodyHtml: string };
  healthRisk: { heading: string; body: string; source: string };
  limitations: {
    heading: string;
    adultsLabel: string;
    adultsBody: string;
    childrenLabel: string;
    childrenBody: string;
  };
  related: { heading: string; linkText: string; description: string };
}

export const bmiContent: Record<string, BmiContent> = {
  sv: {
    whatIsBmi: {
      heading: `Vad är BMI?`,
      body: `Body Mass Index (BMI) är ett enkelt screeningmått som uppskattar kroppens fettmängd utifrån vikt och längd. Det mäter inte kroppsfett direkt, men korrelerar tillräckligt väl med mer exakta mätmetoder för att fungera som en enkel och billig utgångspunkt när man följer sin vikt över tid.`,
    },
    whoTable: {
      heading: `BMI-klassificering för vuxna (WHO)`,
      categoryHeader: `Kategori`,
      rangeHeader: `BMI-intervall`,
      rows: [
        [`Svår undervikt`, `Under 16`],
        [`Måttlig undervikt`, `16 – 17`],
        [`Lindrig undervikt`, `17 – 18.5`],
        [`Normalvikt`, `18.5 – 25`],
        [`Övervikt`, `25 – 30`],
        [`Fetma klass I`, `30 – 35`],
        [`Fetma klass II`, `35 – 40`],
        [`Fetma klass III`, `Över 40`],
      ],
      source: `Källa: Världshälsoorganisationens (WHO) BMI-klassificering.`,
    },
    children: {
      heading: `BMI för barn och ungdomar (2–20 år)`,
      intro: `För barn och ungdomar fungerar inte fasta BMI-gränser på samma sätt. Växande kroppar förändrar form olika snabbt beroende på ålder och kön, så istället utgår CDC från BMI-percentiler kopplade till ålder och kön, jämfört med en referenspopulation:`,
      categoryHeader: `Kategori`,
      percentileHeader: `Percentil`,
      rows: [
        [`Undervikt`, `Under 5:e percentilen`],
        [`Hälsosam vikt`, `5:e–85:e percentilen`],
        [`Risk för övervikt`, `85:e–95:e percentilen`],
        [`Övervikt`, `Över 95:e percentilen`],
      ],
      source: `Källa: CDC:s tillväxtkurvor för BMI efter ålder.`,
    },
    formula: {
      heading: `Så räknas BMI ut`,
      metricFormulaLabel: `Metrisk formel:`,
      metricFormulaCode: `BMI = vikt (kg) / längd (m)²`,
      usFormulaLabel: `Amerikansk formel:`,
      usFormulaCode: `BMI = 703 × vikt (lb) / längd (in)²`,
      exampleHeading: `Uträknat exempel`,
      metricExampleHtml: `Metriskt: en person som väger 70 kg och är 175 cm (1.75 m) lång: 70 / (1.75 × 1.75) = 70 / 3.0625 ≈ <strong>22.9</strong>.`,
      usExampleHtml: `Amerikanska enheter: en person som väger 160 lb och är 5'8" (68 in) lång: 703 × 160 / (68 × 68) = 112,480 / 4,624 ≈ <strong>24.3</strong>.`,
    },
    bmiPrime: {
      heading: `BMI Prime`,
      bodyHtml: `BMI Prime uttrycker BMI som ett förhållande till normalintervallets övre gräns (25), istället för som ett absolut tal: <code>BMI Prime = BMI / 25</code>. Ett BMI Prime på 1.0 ligger exakt vid gränsen mellan normalvikt och övervikt, värden under 1.0 ligger inom normalintervallet och värden över 1.0 överstiger det. För exemplet med 22.9 ovan blir BMI Prime 22.9 / 25 ≈ 0.92.`,
    },
    healthRisk: {
      heading: `BMI och hälsorisker`,
      body: `Forskning på populationsnivå kopplar BMI utanför normalintervallet till högre sannolikhet för vissa hälsotillstånd. I den lägre änden är ett BMI under 18.5 förknippat med näringsbrist och försvagat immunförsvar. I den högre änden är ett BMI över 25, och än mer över 30, förknippat med högre sannolikhet för tillstånd som typ 2-diabetes, hjärt-kärlsjukdom och belastning på lederna. Det här är statistiska samband på populationsnivå, inte individuella diagnoser, och BMI ensamt avgör inte en enskild persons hälsotillstånd.`,
      source: `Källor: CDC, WHO.`,
    },
    limitations: {
      heading: `Begränsningar`,
      adultsLabel: `Vuxna:`,
      adultsBody: `BMI skiljer inte på muskler och fett, så muskulösa eller mycket vältränade personer kan klassas som överviktiga trots låg fettprocent. Måttet tar inte heller hänsyn till fettfördelning, åldersrelaterad muskelförlust eller skillnader mellan etniska grupper, och bör inte användas ensamt för att bedöma en persons hälsa.`,
      childrenLabel: `Barn och ungdomar:`,
      childrenBody: `eftersom kroppssammansättningen förändras kontinuerligt under uppväxten säger ett enskilt BMI-tal lite på egen hand för den här åldersgruppen. Det måste tolkas mot ålders- och könsspecifika percentilkurvor ovan, inte mot vuxentabellen.`,
    },
    related: {
      heading: `Relaterad kalkylator`,
      linkText: `TDEE-kalkylator`,
      description: `— använd din vikt och längd för att uppskatta ditt dagliga kaloribehov utifrån aktivitetsnivå.`,
    },
  },

  en: {
    whatIsBmi: {
      heading: `What is BMI?`,
      body: `Body Mass Index (BMI) is a simple screening measure that estimates body fatness from your weight and height. It doesn't measure body fat directly, but it correlates closely enough with more direct measures to be a useful, low-cost starting point for tracking weight status over time.`,
    },
    whoTable: {
      heading: `Adult BMI classification (WHO)`,
      categoryHeader: `Category`,
      rangeHeader: `BMI range`,
      rows: [
        [`Severe Thinness`, `Below 16`],
        [`Moderate Thinness`, `16 – 17`],
        [`Mild Thinness`, `17 – 18.5`],
        [`Normal`, `18.5 – 25`],
        [`Overweight`, `25 – 30`],
        [`Obese Class I`, `30 – 35`],
        [`Obese Class II`, `35 – 40`],
        [`Obese Class III`, `Above 40`],
      ],
      source: `Source: World Health Organization (WHO) BMI classification.`,
    },
    children: {
      heading: `BMI for children and teens (2–20 years)`,
      intro: `For children and teens, a single set of fixed BMI ranges doesn't work, growing bodies change shape at different rates by age and sex. Instead, the CDC plots BMI against age- and sex-specific percentiles from a reference population:`,
      categoryHeader: `Category`,
      percentileHeader: `Percentile`,
      rows: [
        [`Underweight`, `Below 5th percentile`],
        [`Healthy weight`, `5th – 85th percentile`],
        [`At risk of overweight`, `85th – 95th percentile`],
        [`Overweight`, `Above 95th percentile`],
      ],
      source: `Source: CDC BMI-for-age growth charts.`,
    },
    formula: {
      heading: `How BMI is calculated`,
      metricFormulaLabel: `Metric formula:`,
      metricFormulaCode: `BMI = weight (kg) / height (m)²`,
      usFormulaLabel: `US formula:`,
      usFormulaCode: `BMI = 703 × weight (lb) / height (in)²`,
      exampleHeading: `Worked example`,
      metricExampleHtml: `Metric: a person weighing 70 kg at 175 cm (1.75 m) tall: 70 / (1.75 × 1.75) = 70 / 3.0625 ≈ <strong>22.9</strong>.`,
      usExampleHtml: `US units: a person weighing 160 lb at 5'8" (68 in) tall: 703 × 160 / (68 × 68) = 112,480 / 4,624 ≈ <strong>24.3</strong>.`,
    },
    bmiPrime: {
      heading: `BMI Prime`,
      bodyHtml: `BMI Prime expresses BMI as a ratio to the upper bound of the normal range (25), rather than as an absolute number: <code>BMI Prime = BMI / 25</code>. A BMI Prime of 1.0 sits exactly at the normal/overweight boundary, values below 1.0 fall within the normal range, and values above 1.0 exceed it. For the 22.9 example above, BMI Prime is 22.9 / 25 ≈ 0.92.`,
    },
    healthRisk: {
      heading: `BMI and health risk`,
      body: `Population-level research associates BMI outside the normal range with a higher likelihood of certain health conditions. At the lower end, a BMI under 18.5 is associated with nutritional deficiency and weakened immune function. At the higher end, a BMI over 25, and more so over 30, is associated with a higher likelihood of conditions such as type 2 diabetes, cardiovascular disease, and joint strain. These are statistical associations across populations, not individual diagnoses, and BMI alone does not determine any one person's health status.`,
      source: `Sources: CDC, WHO.`,
    },
    limitations: {
      heading: `Limitations`,
      adultsLabel: `Adults:`,
      adultsBody: `BMI doesn't distinguish muscle from fat, so muscular or highly athletic individuals can register as overweight despite low body fat. It also doesn't account for fat distribution, age-related muscle loss, or differences across ethnic groups, and shouldn't be used alone to assess an individual's health.`,
      childrenLabel: `Children and teens:`,
      childrenBody: `because body composition changes continuously through growth, a raw BMI number means little on its own for this age group. It has to be read against the age- and sex-specific percentile charts above, not the adult category table.`,
    },
    related: {
      heading: `Related calculator`,
      linkText: `TDEE Calculator`,
      description: `— use your weight and height to estimate your daily calorie needs based on activity level.`,
    },
  },

  pt: {
    whatIsBmi: {
      heading: `O que é o IMC?`,
      body: `O Índice de Massa Corporal (IMC) é uma medida de triagem simples que estima a gordura corporal a partir do peso e da altura. Ele não mede a gordura corporal diretamente, mas se correlaciona o suficiente com medidas mais diretas para servir como um ponto de partida útil e de baixo custo para acompanhar o peso ao longo do tempo.`,
    },
    whoTable: {
      heading: `Classificação de IMC para adultos (OMS)`,
      categoryHeader: `Categoria`,
      rangeHeader: `Faixa de IMC`,
      rows: [
        [`Magreza grave`, `Abaixo de 16`],
        [`Magreza moderada`, `16 – 17`],
        [`Magreza leve`, `17 – 18.5`],
        [`Peso normal`, `18.5 – 25`],
        [`Sobrepeso`, `25 – 30`],
        [`Obesidade grau I`, `30 – 35`],
        [`Obesidade grau II`, `35 – 40`],
        [`Obesidade grau III`, `Acima de 40`],
      ],
      source: `Fonte: classificação de IMC da Organização Mundial da Saúde (OMS).`,
    },
    children: {
      heading: `IMC para crianças e adolescentes (2 a 20 anos)`,
      intro: `Para crianças e adolescentes, um conjunto fixo de faixas de IMC não funciona da mesma forma. Corpos em crescimento mudam de forma em ritmos diferentes conforme a idade e o sexo, por isso o CDC posiciona o IMC em percentis específicos por idade e sexo, com base em uma população de referência:`,
      categoryHeader: `Categoria`,
      percentileHeader: `Percentil`,
      rows: [
        [`Abaixo do peso`, `Abaixo do percentil 5`],
        [`Peso saudável`, `Percentil 5 a 85`],
        [`Risco de sobrepeso`, `Percentil 85 a 95`],
        [`Sobrepeso`, `Acima do percentil 95`],
      ],
      source: `Fonte: gráficos de crescimento de IMC por idade do CDC.`,
    },
    formula: {
      heading: `Como o IMC é calculado`,
      metricFormulaLabel: `Fórmula métrica:`,
      metricFormulaCode: `IMC = peso (kg) / altura (m)²`,
      usFormulaLabel: `Fórmula americana:`,
      usFormulaCode: `IMC = 703 × peso (lb) / altura (in)²`,
      exampleHeading: `Exemplo calculado`,
      metricExampleHtml: `Métrico: uma pessoa com 70 kg e 175 cm (1.75 m) de altura: 70 / (1.75 × 1.75) = 70 / 3.0625 ≈ <strong>22.9</strong>.`,
      usExampleHtml: `Unidades americanas: uma pessoa com 160 lb e 5'8" (68 in) de altura: 703 × 160 / (68 × 68) = 112,480 / 4,624 ≈ <strong>24.3</strong>.`,
    },
    bmiPrime: {
      heading: `IMC Prime`,
      bodyHtml: `O IMC Prime expressa o IMC como uma razão em relação ao limite superior da faixa normal (25), em vez de um número absoluto: <code>IMC Prime = IMC / 25</code>. Um IMC Prime de 1.0 fica exatamente na fronteira entre peso normal e sobrepeso, valores abaixo de 1.0 estão dentro da faixa normal, e valores acima de 1.0 a ultrapassam. Para o exemplo de 22.9 acima, o IMC Prime é 22.9 / 25 ≈ 0.92.`,
    },
    healthRisk: {
      heading: `IMC e risco à saúde`,
      body: `Pesquisas em nível populacional associam o IMC fora da faixa normal a uma maior probabilidade de certas condições de saúde. Na extremidade inferior, um IMC abaixo de 18.5 é associado a deficiência nutricional e enfraquecimento do sistema imunológico. Na extremidade superior, um IMC acima de 25, e ainda mais acima de 30, é associado a maior probabilidade de condições como diabetes tipo 2, doenças cardiovasculares e sobrecarga nas articulações. Essas são associações estatísticas em nível populacional, não diagnósticos individuais, e o IMC sozinho não determina o estado de saúde de uma pessoa.`,
      source: `Fontes: CDC, OMS.`,
    },
    limitations: {
      heading: `Limitações`,
      adultsLabel: `Adultos:`,
      adultsBody: `o IMC não diferencia músculo de gordura, então pessoas musculosas ou muito atléticas podem aparecer como acima do peso mesmo com baixo percentual de gordura. Também não considera a distribuição de gordura, a perda muscular relacionada à idade, ou diferenças entre grupos étnicos, e não deve ser usado isoladamente para avaliar a saúde de uma pessoa.`,
      childrenLabel: `Crianças e adolescentes:`,
      childrenBody: `como a composição corporal muda continuamente durante o crescimento, um número bruto de IMC diz pouco sozinho para essa faixa etária. Ele precisa ser interpretado junto com os gráficos de percentil por idade e sexo acima, não com a tabela de categorias de adultos.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de TDEE`,
      description: `— use seu peso e altura para estimar sua necessidade calórica diária com base no nível de atividade.`,
    },
  },

  es: {
    whatIsBmi: {
      heading: `¿Qué es el IMC?`,
      body: `El Índice de Masa Corporal (IMC) es una medida de detección sencilla que estima la grasa corporal a partir del peso y la estatura. No mide la grasa corporal directamente, pero se correlaciona lo suficiente con medidas más directas como para servir de punto de partida útil y económico para seguir el peso a lo largo del tiempo.`,
    },
    whoTable: {
      heading: `Clasificación de IMC para adultos (OMS)`,
      categoryHeader: `Categoría`,
      rangeHeader: `Rango de IMC`,
      rows: [
        [`Delgadez severa`, `Menos de 16`],
        [`Delgadez moderada`, `16 – 17`],
        [`Delgadez leve`, `17 – 18.5`],
        [`Normal`, `18.5 – 25`],
        [`Sobrepeso`, `25 – 30`],
        [`Obesidad clase I`, `30 – 35`],
        [`Obesidad clase II`, `35 – 40`],
        [`Obesidad clase III`, `Más de 40`],
      ],
      source: `Fuente: clasificación de IMC de la Organización Mundial de la Salud (OMS).`,
    },
    children: {
      heading: `IMC para niños y adolescentes (2 a 20 años)`,
      intro: `En niños y adolescentes, un conjunto fijo de rangos de IMC no funciona igual. Los cuerpos en crecimiento cambian de forma a distinto ritmo según la edad y el sexo, así que los CDC sitúan el IMC en percentiles específicos por edad y sexo frente a una población de referencia:`,
      categoryHeader: `Categoría`,
      percentileHeader: `Percentil`,
      rows: [
        [`Bajo peso`, `Por debajo del percentil 5`],
        [`Peso saludable`, `Percentil 5 a 85`],
        [`Riesgo de sobrepeso`, `Percentil 85 a 95`],
        [`Sobrepeso`, `Por encima del percentil 95`],
      ],
      source: `Fuente: gráficas de crecimiento de IMC por edad de los CDC.`,
    },
    formula: {
      heading: `Cómo se calcula el IMC`,
      metricFormulaLabel: `Fórmula métrica:`,
      metricFormulaCode: `IMC = peso (kg) / estatura (m)²`,
      usFormulaLabel: `Fórmula estadounidense:`,
      usFormulaCode: `IMC = 703 × peso (lb) / estatura (in)²`,
      exampleHeading: `Ejemplo resuelto`,
      metricExampleHtml: `Métrico: una persona que pesa 70 kg y mide 175 cm (1.75 m): 70 / (1.75 × 1.75) = 70 / 3.0625 ≈ <strong>22.9</strong>.`,
      usExampleHtml: `Unidades estadounidenses: una persona que pesa 160 lb y mide 5'8" (68 in): 703 × 160 / (68 × 68) = 112,480 / 4,624 ≈ <strong>24.3</strong>.`,
    },
    bmiPrime: {
      heading: `IMC Prime`,
      bodyHtml: `El IMC Prime expresa el IMC como una razón respecto al límite superior del rango normal (25), en lugar de como un número absoluto: <code>IMC Prime = IMC / 25</code>. Un IMC Prime de 1.0 se sitúa exactamente en el límite entre peso normal y sobrepeso, los valores por debajo de 1.0 caen dentro del rango normal, y los valores por encima de 1.0 lo superan. Para el ejemplo de 22.9 anterior, el IMC Prime es 22.9 / 25 ≈ 0.92.`,
    },
    healthRisk: {
      heading: `IMC y riesgo para la salud`,
      body: `La investigación a nivel poblacional asocia un IMC fuera del rango normal con una mayor probabilidad de ciertas afecciones de salud. En el extremo inferior, un IMC por debajo de 18.5 se asocia con deficiencias nutricionales y un sistema inmunitario debilitado. En el extremo superior, un IMC por encima de 25, y más aún por encima de 30, se asocia con mayor probabilidad de afecciones como diabetes tipo 2, enfermedad cardiovascular y sobrecarga articular. Se trata de asociaciones estadísticas a nivel poblacional, no diagnósticos individuales, y el IMC por sí solo no determina el estado de salud de una persona.`,
      source: `Fuentes: CDC, OMS.`,
    },
    limitations: {
      heading: `Limitaciones`,
      adultsLabel: `Adultos:`,
      adultsBody: `el IMC no distingue entre músculo y grasa, así que las personas musculosas o muy atléticas pueden aparecer con sobrepeso pese a tener poca grasa corporal. Tampoco tiene en cuenta la distribución de la grasa, la pérdida de masa muscular por la edad, ni las diferencias entre grupos étnicos, y no debería usarse por sí solo para evaluar la salud de una persona.`,
      childrenLabel: `Niños y adolescentes:`,
      childrenBody: `como la composición corporal cambia continuamente durante el crecimiento, un número de IMC aislado dice poco por sí solo en este grupo de edad. Debe interpretarse junto con las gráficas de percentiles por edad y sexo de arriba, no con la tabla de categorías de adultos.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de TDEE`,
      description: `— usa tu peso y estatura para estimar tus necesidades calóricas diarias según tu nivel de actividad.`,
    },
  },

  de: {
    whatIsBmi: {
      heading: `Was ist der BMI?`,
      body: `Der Body-Mass-Index (BMI) ist ein einfaches Screening-Maß, das den Körperfettanteil anhand von Gewicht und Größe schätzt. Er misst Körperfett nicht direkt, korreliert aber eng genug mit direkteren Messmethoden, um als einfacher, kostengünstiger Ausgangspunkt zur Beobachtung des Gewichtsverlaufs zu dienen.`,
    },
    whoTable: {
      heading: `BMI-Klassifikation für Erwachsene (WHO)`,
      categoryHeader: `Kategorie`,
      rangeHeader: `BMI-Bereich`,
      rows: [
        [`Starkes Untergewicht`, `Unter 16`],
        [`Mäßiges Untergewicht`, `16 – 17`],
        [`Leichtes Untergewicht`, `17 – 18.5`],
        [`Normalgewicht`, `18.5 – 25`],
        [`Übergewicht`, `25 – 30`],
        [`Adipositas Grad I`, `30 – 35`],
        [`Adipositas Grad II`, `35 – 40`],
        [`Adipositas Grad III`, `Über 40`],
      ],
      source: `Quelle: BMI-Klassifikation der Weltgesundheitsorganisation (WHO).`,
    },
    children: {
      heading: `BMI für Kinder und Jugendliche (2–20 Jahre)`,
      intro: `Bei Kindern und Jugendlichen funktionieren feste BMI-Bereiche nicht gleich gut. Wachsende Körper verändern ihre Form je nach Alter und Geschlecht unterschiedlich schnell, weshalb die CDC den BMI stattdessen alters- und geschlechtsspezifischen Perzentilen einer Referenzpopulation zuordnet:`,
      categoryHeader: `Kategorie`,
      percentileHeader: `Perzentile`,
      rows: [
        [`Untergewicht`, `Unter der 5. Perzentile`],
        [`Gesundes Gewicht`, `5. bis 85. Perzentile`],
        [`Risiko für Übergewicht`, `85. bis 95. Perzentile`],
        [`Übergewicht`, `Über der 95. Perzentile`],
      ],
      source: `Quelle: BMI-für-Alter-Wachstumskurven der CDC.`,
    },
    formula: {
      heading: `So wird der BMI berechnet`,
      metricFormulaLabel: `Metrische Formel:`,
      metricFormulaCode: `BMI = Gewicht (kg) / Größe (m)²`,
      usFormulaLabel: `US-Formel:`,
      usFormulaCode: `BMI = 703 × Gewicht (lb) / Größe (in)²`,
      exampleHeading: `Beispielrechnung`,
      metricExampleHtml: `Metrisch: eine Person mit 70 kg Gewicht und 175 cm (1.75 m) Größe: 70 / (1.75 × 1.75) = 70 / 3.0625 ≈ <strong>22.9</strong>.`,
      usExampleHtml: `US-Einheiten: eine Person mit 160 lb Gewicht und 5'8" (68 in) Größe: 703 × 160 / (68 × 68) = 112,480 / 4,624 ≈ <strong>24.3</strong>.`,
    },
    bmiPrime: {
      heading: `BMI Prime`,
      bodyHtml: `BMI Prime drückt den BMI als Verhältnis zur oberen Grenze des Normalbereichs (25) aus, statt als absolute Zahl: <code>BMI Prime = BMI / 25</code>. Ein BMI Prime von 1.0 liegt genau an der Grenze zwischen Normalgewicht und Übergewicht, Werte unter 1.0 liegen im Normalbereich, Werte über 1.0 überschreiten ihn. Für das Beispiel mit 22.9 oben ergibt sich ein BMI Prime von 22.9 / 25 ≈ 0.92.`,
    },
    healthRisk: {
      heading: `BMI und Gesundheitsrisiko`,
      body: `Forschung auf Bevölkerungsebene bringt einen BMI außerhalb des Normalbereichs mit einer höheren Wahrscheinlichkeit bestimmter Gesundheitsprobleme in Verbindung. Am unteren Ende ist ein BMI unter 18.5 mit Nährstoffmangel und einem geschwächten Immunsystem verbunden. Am oberen Ende ist ein BMI über 25, und noch mehr über 30, mit einer höheren Wahrscheinlichkeit für Erkrankungen wie Typ-2-Diabetes, Herz-Kreislauf-Erkrankungen und Gelenkbelastung verbunden. Dies sind statistische Zusammenhänge auf Bevölkerungsebene, keine individuellen Diagnosen, und der BMI allein bestimmt nicht den Gesundheitszustand einer einzelnen Person.`,
      source: `Quellen: CDC, WHO.`,
    },
    limitations: {
      heading: `Einschränkungen`,
      adultsLabel: `Erwachsene:`,
      adultsBody: `der BMI unterscheidet nicht zwischen Muskeln und Fett, sodass muskulöse oder sehr sportliche Menschen trotz niedrigem Körperfettanteil als übergewichtig eingestuft werden können. Er berücksichtigt auch nicht die Fettverteilung, altersbedingten Muskelabbau oder Unterschiede zwischen ethnischen Gruppen und sollte nicht allein zur Beurteilung der Gesundheit einer Person verwendet werden.`,
      childrenLabel: `Kinder und Jugendliche:`,
      childrenBody: `da sich die Körperzusammensetzung während des Wachstums ständig verändert, sagt eine reine BMI-Zahl für diese Altersgruppe für sich allein wenig aus. Sie muss anhand der alters- und geschlechtsspezifischen Perzentilkurven oben interpretiert werden, nicht anhand der Erwachsenentabelle.`,
    },
    related: {
      heading: `Verwandter Rechner`,
      linkText: `TDEE-Rechner`,
      description: `— nutze dein Gewicht und deine Größe, um deinen täglichen Kalorienbedarf anhand deines Aktivitätslevels zu schätzen.`,
    },
  },

  ja: {
    whatIsBmi: {
      heading: `BMIとは？`,
      body: `BMI（ボディマス指数）は、体重と身長から体脂肪の目安を推定する簡易的なスクリーニング指標です。体脂肪そのものを測定するわけではありませんが、より直接的な測定方法と十分に相関しているため、体重の変化を長期的に追う際の手軽で低コストな出発点として役立ちます。`,
    },
    whoTable: {
      heading: `成人のBMI分類（WHO）`,
      categoryHeader: `分類`,
      rangeHeader: `BMI範囲`,
      rows: [
        [`重度のやせ`, `16未満`],
        [`中等度のやせ`, `16 – 17`],
        [`軽度のやせ`, `17 – 18.5`],
        [`標準`, `18.5 – 25`],
        [`過体重`, `25 – 30`],
        [`肥満クラスI`, `30 – 35`],
        [`肥満クラスII`, `35 – 40`],
        [`肥満クラスIII`, `40超`],
      ],
      source: `出典：世界保健機関（WHO）のBMI分類。`,
    },
    children: {
      heading: `子供・10代のBMI（2〜20歳）`,
      intro: `子供や10代の場合、固定されたBMI範囲はそのまま使えません。成長期の体は年齢や性別によって変化の仕方が異なるためです。そこでCDCは、年齢・性別ごとの基準集団に対するBMIパーセンタイルを用いています。`,
      categoryHeader: `分類`,
      percentileHeader: `パーセンタイル`,
      rows: [
        [`低体重`, `5パーセンタイル未満`],
        [`適正体重`, `5〜85パーセンタイル`],
        [`過体重のリスクあり`, `85〜95パーセンタイル`],
        [`過体重`, `95パーセンタイル超`],
      ],
      source: `出典：CDCの年齢別BMI成長曲線。`,
    },
    formula: {
      heading: `BMIの計算方法`,
      metricFormulaLabel: `メートル法の計算式：`,
      metricFormulaCode: `BMI = 体重（kg）÷ 身長（m）²`,
      usFormulaLabel: `米国式の計算式：`,
      usFormulaCode: `BMI = 703 × 体重（lb）÷ 身長（in）²`,
      exampleHeading: `計算例`,
      metricExampleHtml: `メートル法：体重70kg、身長175cm（1.75m）の場合：70 / (1.75 × 1.75) = 70 / 3.0625 ≈ <strong>22.9</strong>。`,
      usExampleHtml: `米国単位：体重160lb、身長5'8"（68in）の場合：703 × 160 / (68 × 68) = 112,480 / 4,624 ≈ <strong>24.3</strong>。`,
    },
    bmiPrime: {
      heading: `BMIプライム`,
      bodyHtml: `BMIプライムは、BMIを絶対値ではなく、標準範囲の上限（25）に対する比率として表したものです：<code>BMIプライム = BMI ÷ 25</code>。BMIプライムが1.0のとき、ちょうど標準体重と過体重の境界にあたり、1.0未満は標準範囲内、1.0を超えると標準範囲を超えていることになります。上記の22.9の例では、BMIプライムは22.9 / 25 ≈ 0.92です。`,
    },
    healthRisk: {
      heading: `BMIと健康リスク`,
      body: `集団レベルの研究では、標準範囲から外れたBMIは特定の健康状態のリスク上昇と関連があるとされています。低い側では、18.5未満のBMIは栄養不足や免疫機能の低下と関連があります。高い側では、25を超えるBMI、特に30を超えるBMIは、2型糖尿病、心血管疾患、関節への負担といった状態のリスク上昇と関連があります。これらは集団レベルの統計的な関連であり、個人の診断ではありません。BMIだけで一人ひとりの健康状態が決まるわけではありません。`,
      source: `出典：CDC、WHO。`,
    },
    limitations: {
      heading: `限界`,
      adultsLabel: `成人：`,
      adultsBody: `BMIは筋肉と脂肪を区別できないため、筋肉質で運動量の多い人は体脂肪率が低くても過体重と判定されることがあります。また、脂肪の分布、加齢による筋肉量の減少、民族間の違いも考慮されないため、これだけで個人の健康状態を判断すべきではありません。`,
      childrenLabel: `子供・10代：`,
      childrenBody: `成長期は体組成が絶えず変化するため、この年齢層では単純なBMIの数値だけではあまり意味を持ちません。上記の年齢・性別別のパーセンタイル曲線と照らし合わせて解釈する必要があり、成人向けの分類表は使えません。`,
    },
    related: {
      heading: `関連する計算機`,
      linkText: `TDEE計算機`,
      description: `— 体重と身長から、活動レベルに応じた1日の必要カロリーを推定できます。`,
    },
  },

  zh: {
    whatIsBmi: {
      heading: `什么是BMI？`,
      body: `身体质量指数（BMI）是一种简单的筛查指标，通过体重和身高来估算体脂水平。它并不直接测量体脂，但与更直接的测量方法有足够高的相关性，可以作为长期追踪体重状况的一个简便、低成本的起点。`,
    },
    whoTable: {
      heading: `成人BMI分类（世界卫生组织）`,
      categoryHeader: `分类`,
      rangeHeader: `BMI范围`,
      rows: [
        [`重度消瘦`, `低于16`],
        [`中度消瘦`, `16 – 17`],
        [`轻度消瘦`, `17 – 18.5`],
        [`正常`, `18.5 – 25`],
        [`超重`, `25 – 30`],
        [`肥胖一级`, `30 – 35`],
        [`肥胖二级`, `35 – 40`],
        [`肥胖三级`, `高于40`],
      ],
      source: `来源：世界卫生组织（WHO）BMI分类标准。`,
    },
    children: {
      heading: `儿童与青少年BMI（2至20岁）`,
      intro: `对于儿童和青少年来说，固定的BMI范围并不适用，因为处于生长期的身体会随年龄和性别以不同速度发生变化。因此，美国疾控中心（CDC）改用相对于参照人群的、按年龄和性别划分的BMI百分位来评估：`,
      categoryHeader: `分类`,
      percentileHeader: `百分位`,
      rows: [
        [`体重过轻`, `低于第5百分位`],
        [`健康体重`, `第5至85百分位`],
        [`超重风险`, `第85至95百分位`],
        [`超重`, `高于第95百分位`],
      ],
      source: `来源：CDC按年龄划分的BMI生长曲线图。`,
    },
    formula: {
      heading: `BMI如何计算`,
      metricFormulaLabel: `公制公式：`,
      metricFormulaCode: `BMI = 体重（kg）/ 身高（m）²`,
      usFormulaLabel: `美制公式：`,
      usFormulaCode: `BMI = 703 × 体重（lb）/ 身高（in）²`,
      exampleHeading: `计算示例`,
      metricExampleHtml: `公制：一个体重70公斤、身高175厘米（1.75米）的人：70 / (1.75 × 1.75) = 70 / 3.0625 ≈ <strong>22.9</strong>。`,
      usExampleHtml: `美制单位：一个体重160磅、身高5'8"（68英寸）的人：703 × 160 / (68 × 68) = 112,480 / 4,624 ≈ <strong>24.3</strong>。`,
    },
    bmiPrime: {
      heading: `BMI Prime指数`,
      bodyHtml: `BMI Prime将BMI表示为相对于正常范围上限（25）的比值，而不是一个绝对数字：<code>BMI Prime = BMI / 25</code>。BMI Prime为1.0时正好处于正常体重与超重的分界点，低于1.0表示在正常范围内，高于1.0表示超出该范围。以上文22.9为例，其BMI Prime为22.9 / 25 ≈ 0.92。`,
    },
    healthRisk: {
      heading: `BMI与健康风险`,
      body: `群体层面的研究表明，BMI超出正常范围与某些健康问题的风险升高存在关联。在偏低的一端，BMI低于18.5与营养不良和免疫功能减弱有关。在偏高的一端，BMI高于25，尤其是高于30，与2型糖尿病、心血管疾病和关节负担增加等风险升高有关。这些都是群体层面的统计关联，并非针对个人的诊断，BMI本身并不能决定某个人的健康状况。`,
      source: `来源：CDC、WHO。`,
    },
    limitations: {
      heading: `局限性`,
      adultsLabel: `成人：`,
      adultsBody: `BMI无法区分肌肉和脂肪，因此肌肉发达或运动量很大的人即使体脂率很低，也可能被归类为超重。它也没有考虑脂肪分布、随年龄增长的肌肉流失，以及不同族群间的差异，因此不应单独用来评估一个人的健康状况。`,
      childrenLabel: `儿童与青少年：`,
      childrenBody: `由于身体成分在生长发育过程中不断变化，单独的BMI数值对这个年龄段的参考意义有限，需要结合上文按年龄和性别划分的百分位曲线来解读，而不是套用成人的分类表。`,
    },
    related: {
      heading: `相关计算器`,
      linkText: `TDEE计算器`,
      description: `— 利用你的体重和身高，根据活动水平估算每日所需热量。`,
    },
  },

  ko: {
    whatIsBmi: {
      heading: `BMI란 무엇인가요?`,
      body: `체질량지수(BMI)는 체중과 키를 이용해 체지방 수준을 추정하는 간단한 선별 지표입니다. 체지방을 직접 측정하지는 않지만, 더 직접적인 측정 방법과 충분히 상관관계가 있어 시간에 따른 체중 상태를 추적하는 간편하고 저렴한 출발점으로 활용됩니다.`,
    },
    whoTable: {
      heading: `성인 BMI 분류 (WHO)`,
      categoryHeader: `분류`,
      rangeHeader: `BMI 범위`,
      rows: [
        [`심한 저체중`, `16 미만`],
        [`중등도 저체중`, `16 – 17`],
        [`경도 저체중`, `17 – 18.5`],
        [`정상`, `18.5 – 25`],
        [`과체중`, `25 – 30`],
        [`비만 1단계`, `30 – 35`],
        [`비만 2단계`, `35 – 40`],
        [`비만 3단계`, `40 초과`],
      ],
      source: `출처: 세계보건기구(WHO) BMI 분류 기준.`,
    },
    children: {
      heading: `어린이·청소년 BMI (2~20세)`,
      intro: `어린이와 청소년의 경우 고정된 BMI 범위가 그대로 적용되지 않습니다. 성장 중인 몸은 나이와 성별에 따라 변화 속도가 다르기 때문에, CDC는 기준 인구 집단을 바탕으로 나이·성별별 BMI 백분위수를 사용합니다:`,
      categoryHeader: `분류`,
      percentileHeader: `백분위수`,
      rows: [
        [`저체중`, `5백분위수 미만`],
        [`건강 체중`, `5~85백분위수`],
        [`과체중 위험`, `85~95백분위수`],
        [`과체중`, `95백분위수 초과`],
      ],
      source: `출처: CDC 연령별 BMI 성장 곡선.`,
    },
    formula: {
      heading: `BMI 계산 방법`,
      metricFormulaLabel: `미터법 공식:`,
      metricFormulaCode: `BMI = 체중(kg) / 키(m)²`,
      usFormulaLabel: `미국식 공식:`,
      usFormulaCode: `BMI = 703 × 체중(lb) / 키(in)²`,
      exampleHeading: `계산 예시`,
      metricExampleHtml: `미터법: 체중 70kg, 키 175cm(1.75m)인 사람: 70 / (1.75 × 1.75) = 70 / 3.0625 ≈ <strong>22.9</strong>.`,
      usExampleHtml: `미국 단위: 체중 160lb, 키 5'8"(68in)인 사람: 703 × 160 / (68 × 68) = 112,480 / 4,624 ≈ <strong>24.3</strong>.`,
    },
    bmiPrime: {
      heading: `BMI 프라임`,
      bodyHtml: `BMI 프라임은 BMI를 절대 수치가 아니라 정상 범위 상한선(25)에 대한 비율로 나타낸 것입니다: <code>BMI 프라임 = BMI / 25</code>. BMI 프라임이 1.0이면 정상 체중과 과체중의 경계에 정확히 위치하며, 1.0 미만은 정상 범위 안, 1.0을 초과하면 정상 범위를 벗어난 것입니다. 위의 22.9 예시에서 BMI 프라임은 22.9 / 25 ≈ 0.92입니다.`,
    },
    healthRisk: {
      heading: `BMI와 건강 위험`,
      body: `인구 집단 수준의 연구에 따르면 정상 범위를 벗어난 BMI는 특정 건강 문제의 발생 가능성 증가와 관련이 있습니다. 낮은 쪽에서는 18.5 미만의 BMI가 영양 결핍과 면역 기능 저하와 관련이 있습니다. 높은 쪽에서는 25를 초과하는 BMI, 특히 30을 초과하는 경우 제2형 당뇨병, 심혈관 질환, 관절 부담과 같은 상태의 발생 가능성 증가와 관련이 있습니다. 이는 인구 집단 수준의 통계적 연관성이며 개인 진단이 아니고, BMI만으로 한 개인의 건강 상태를 판단할 수는 없습니다.`,
      source: `출처: CDC, WHO.`,
    },
    limitations: {
      heading: `한계점`,
      adultsLabel: `성인:`,
      adultsBody: `BMI는 근육과 지방을 구분하지 못하므로, 근육질이거나 운동량이 매우 많은 사람은 체지방률이 낮아도 과체중으로 표시될 수 있습니다. 또한 지방 분포, 나이에 따른 근육 손실, 인종 간 차이도 반영하지 않으므로 개인의 건강 상태를 판단하는 유일한 기준으로 사용해서는 안 됩니다.`,
      childrenLabel: `어린이·청소년:`,
      childrenBody: `성장기에는 체구성이 계속 변화하기 때문에 이 연령대에서는 단순한 BMI 수치만으로는 큰 의미가 없습니다. 위의 연령·성별별 백분위수 곡선과 함께 해석해야 하며, 성인용 분류표를 적용해서는 안 됩니다.`,
    },
    related: {
      heading: `관련 계산기`,
      linkText: `TDEE 계산기`,
      description: `— 체중과 키를 이용해 활동 수준에 따른 하루 필요 칼로리를 추정해 보세요.`,
    },
  },

  hi: {
    whatIsBmi: {
      heading: `BMI क्या है?`,
      body: `बॉडी मास इंडेक्स (BMI) एक सरल स्क्रीनिंग माप है जो वज़न और लंबाई के आधार पर शरीर में मौजूद फैट का अनुमान लगाता है। यह शरीर के फैट को सीधे नहीं मापता, लेकिन ज़्यादा सटीक तरीकों से इतना मेल खाता है कि यह समय के साथ वज़न की स्थिति पर नज़र रखने के लिए एक आसान और सस्ता शुरुआती बिंदु बन जाता है।`,
    },
    whoTable: {
      heading: `वयस्कों के लिए BMI वर्गीकरण (WHO)`,
      categoryHeader: `श्रेणी`,
      rangeHeader: `BMI सीमा`,
      rows: [
        [`अत्यधिक कम वज़न`, `16 से कम`],
        [`मध्यम कम वज़न`, `16 – 17`],
        [`हल्का कम वज़न`, `17 – 18.5`],
        [`सामान्य`, `18.5 – 25`],
        [`अधिक वज़न`, `25 – 30`],
        [`मोटापा श्रेणी I`, `30 – 35`],
        [`मोटापा श्रेणी II`, `35 – 40`],
        [`मोटापा श्रेणी III`, `40 से अधिक`],
      ],
      source: `स्रोत: विश्व स्वास्थ्य संगठन (WHO) का BMI वर्गीकरण।`,
    },
    children: {
      heading: `बच्चों और किशोरों के लिए BMI (2–20 वर्ष)`,
      intro: `बच्चों और किशोरों के लिए एक जैसी फिक्स्ड BMI सीमाएँ ठीक से काम नहीं करतीं। बढ़ते शरीर उम्र और लिंग के हिसाब से अलग-अलग रफ़्तार से आकार बदलते हैं, इसलिए CDC एक संदर्भ जनसंख्या के मुक़ाबले उम्र और लिंग के अनुसार BMI पर्सेंटाइल का उपयोग करता है:`,
      categoryHeader: `श्रेणी`,
      percentileHeader: `पर्सेंटाइल`,
      rows: [
        [`कम वज़न`, `5वें पर्सेंटाइल से कम`],
        [`स्वस्थ वज़न`, `5वें–85वें पर्सेंटाइल`],
        [`अधिक वज़न का जोखिम`, `85वें–95वें पर्सेंटाइल`],
        [`अधिक वज़न`, `95वें पर्सेंटाइल से अधिक`],
      ],
      source: `स्रोत: CDC के उम्र-अनुसार BMI ग्रोथ चार्ट।`,
    },
    formula: {
      heading: `BMI कैसे निकाला जाता है`,
      metricFormulaLabel: `मेट्रिक फ़ॉर्मूला:`,
      metricFormulaCode: `BMI = वज़न (kg) / लंबाई (m)²`,
      usFormulaLabel: `अमेरिकी फ़ॉर्मूला:`,
      usFormulaCode: `BMI = 703 × वज़न (lb) / लंबाई (in)²`,
      exampleHeading: `हल किया गया उदाहरण`,
      metricExampleHtml: `मेट्रिक: 70 kg वज़न और 175 cm (1.75 m) लंबाई वाला व्यक्ति: 70 / (1.75 × 1.75) = 70 / 3.0625 ≈ <strong>22.9</strong>।`,
      usExampleHtml: `अमेरिकी इकाइयाँ: 160 lb वज़न और 5'8" (68 in) लंबाई वाला व्यक्ति: 703 × 160 / (68 × 68) = 112,480 / 4,624 ≈ <strong>24.3</strong>।`,
    },
    bmiPrime: {
      heading: `BMI प्राइम`,
      bodyHtml: `BMI प्राइम, BMI को एक पूर्ण संख्या के बजाय सामान्य सीमा की ऊपरी सीमा (25) के अनुपात के रूप में दिखाता है: <code>BMI प्राइम = BMI / 25</code>। 1.0 का BMI प्राइम ठीक सामान्य और अधिक वज़न की सीमा पर होता है, 1.0 से कम मान सामान्य सीमा के भीतर आते हैं, और 1.0 से ज़्यादा मान उससे आगे निकल जाते हैं। ऊपर दिए 22.9 के उदाहरण के लिए, BMI प्राइम 22.9 / 25 ≈ 0.92 होता है।`,
    },
    healthRisk: {
      heading: `BMI और स्वास्थ्य जोखिम`,
      body: `जनसंख्या-स्तर के शोध सामान्य सीमा से बाहर के BMI को कुछ स्वास्थ्य स्थितियों की अधिक संभावना से जोड़ते हैं। निचले छोर पर, 18.5 से कम का BMI पोषण की कमी और कमज़ोर प्रतिरक्षा प्रणाली से जुड़ा है। ऊपरी छोर पर, 25 से अधिक और खासकर 30 से अधिक का BMI टाइप 2 डायबिटीज़, हृदय रोग और जोड़ों पर दबाव जैसी स्थितियों की अधिक संभावना से जुड़ा है। ये जनसंख्या-स्तर के सांख्यिकीय संबंध हैं, व्यक्तिगत निदान नहीं, और अकेले BMI किसी एक व्यक्ति की स्वास्थ्य स्थिति तय नहीं करता।`,
      source: `स्रोत: CDC, WHO।`,
    },
    limitations: {
      heading: `सीमाएँ`,
      adultsLabel: `वयस्क:`,
      adultsBody: `BMI मांसपेशियों और फैट में फ़र्क नहीं कर पाता, इसलिए मांसपेशियों वाले या बहुत एथलेटिक लोग कम बॉडी फैट होने के बावजूद अधिक वज़न वाले दिख सकते हैं। यह फैट के वितरण, उम्र के साथ मांसपेशियों की कमी, या अलग-अलग जातीय समूहों के बीच के अंतर को भी ध्यान में नहीं रखता, और इसे अकेले किसी व्यक्ति के स्वास्थ्य के आकलन के लिए इस्तेमाल नहीं करना चाहिए।`,
      childrenLabel: `बच्चे और किशोर:`,
      childrenBody: `क्योंकि शरीर की संरचना बढ़ने के दौरान लगातार बदलती रहती है, इस उम्र वर्ग के लिए अकेला BMI आंकड़ा ज़्यादा मायने नहीं रखता। इसे ऊपर दिए गए उम्र और लिंग के अनुसार पर्सेंटाइल चार्ट के मुक़ाबले पढ़ना ज़रूरी है, न कि वयस्कों की श्रेणी तालिका के मुक़ाबले।`,
    },
    related: {
      heading: `संबंधित कैलकुलेटर`,
      linkText: `TDEE कैलकुलेटर`,
      description: `— अपने वज़न और लंबाई का उपयोग करके गतिविधि स्तर के आधार पर अपनी दैनिक कैलोरी ज़रूरत का अनुमान लगाएँ।`,
    },
  },

  id: {
    whatIsBmi: {
      heading: `Apa itu BMI?`,
      body: `Indeks Massa Tubuh (BMI) adalah ukuran skrining sederhana yang memperkirakan kadar lemak tubuh berdasarkan berat dan tinggi badan. BMI tidak mengukur lemak tubuh secara langsung, tetapi cukup berkorelasi dengan metode pengukuran yang lebih langsung sehingga berguna sebagai titik awal yang sederhana dan murah untuk memantau status berat badan dari waktu ke waktu.`,
    },
    whoTable: {
      heading: `Klasifikasi BMI orang dewasa (WHO)`,
      categoryHeader: `Kategori`,
      rangeHeader: `Rentang BMI`,
      rows: [
        [`Sangat Kurus`, `Di bawah 16`],
        [`Kurus Sedang`, `16 – 17`],
        [`Kurus Ringan`, `17 – 18.5`],
        [`Normal`, `18.5 – 25`],
        [`Kelebihan Berat Badan`, `25 – 30`],
        [`Obesitas Kelas I`, `30 – 35`],
        [`Obesitas Kelas II`, `35 – 40`],
        [`Obesitas Kelas III`, `Di atas 40`],
      ],
      source: `Sumber: klasifikasi BMI Organisasi Kesehatan Dunia (WHO).`,
    },
    children: {
      heading: `BMI untuk anak dan remaja (2–20 tahun)`,
      intro: `Untuk anak-anak dan remaja, satu set rentang BMI tetap tidak berlaku dengan baik. Tubuh yang sedang tumbuh berubah bentuk dengan kecepatan berbeda tergantung usia dan jenis kelamin, karena itu CDC memetakan BMI ke persentil khusus usia dan jenis kelamin terhadap suatu populasi acuan:`,
      categoryHeader: `Kategori`,
      percentileHeader: `Persentil`,
      rows: [
        [`Berat badan kurang`, `Di bawah persentil ke-5`],
        [`Berat badan sehat`, `Persentil ke-5 hingga ke-85`],
        [`Berisiko kelebihan berat badan`, `Persentil ke-85 hingga ke-95`],
        [`Kelebihan berat badan`, `Di atas persentil ke-95`],
      ],
      source: `Sumber: grafik pertumbuhan BMI menurut usia dari CDC.`,
    },
    formula: {
      heading: `Cara menghitung BMI`,
      metricFormulaLabel: `Rumus metrik:`,
      metricFormulaCode: `BMI = berat (kg) / tinggi (m)²`,
      usFormulaLabel: `Rumus AS:`,
      usFormulaCode: `BMI = 703 × berat (lb) / tinggi (in)²`,
      exampleHeading: `Contoh perhitungan`,
      metricExampleHtml: `Metrik: seseorang dengan berat 70 kg dan tinggi 175 cm (1.75 m): 70 / (1.75 × 1.75) = 70 / 3.0625 ≈ <strong>22.9</strong>.`,
      usExampleHtml: `Satuan AS: seseorang dengan berat 160 lb dan tinggi 5'8" (68 in): 703 × 160 / (68 × 68) = 112,480 / 4,624 ≈ <strong>24.3</strong>.`,
    },
    bmiPrime: {
      heading: `BMI Prime`,
      bodyHtml: `BMI Prime menyatakan BMI sebagai rasio terhadap batas atas rentang normal (25), bukan sebagai angka mutlak: <code>BMI Prime = BMI / 25</code>. BMI Prime bernilai 1.0 berada tepat di batas antara berat normal dan kelebihan berat badan, nilai di bawah 1.0 berada dalam rentang normal, dan nilai di atas 1.0 melampauinya. Untuk contoh 22.9 di atas, BMI Prime-nya adalah 22.9 / 25 ≈ 0.92.`,
    },
    healthRisk: {
      heading: `BMI dan risiko kesehatan`,
      body: `Penelitian tingkat populasi mengaitkan BMI di luar rentang normal dengan kemungkinan lebih tinggi terjadinya kondisi kesehatan tertentu. Di sisi rendah, BMI di bawah 18.5 dikaitkan dengan kekurangan gizi dan melemahnya fungsi kekebalan tubuh. Di sisi tinggi, BMI di atas 25, dan lebih lagi di atas 30, dikaitkan dengan kemungkinan lebih tinggi terjadinya kondisi seperti diabetes tipe 2, penyakit kardiovaskular, dan beban pada persendian. Ini adalah hubungan statistik tingkat populasi, bukan diagnosis individu, dan BMI saja tidak menentukan status kesehatan seseorang.`,
      source: `Sumber: CDC, WHO.`,
    },
    limitations: {
      heading: `Keterbatasan`,
      adultsLabel: `Dewasa:`,
      adultsBody: `BMI tidak dapat membedakan otot dari lemak, sehingga orang yang berotot atau sangat atletis bisa tercatat sebagai kelebihan berat badan meski lemak tubuhnya rendah. BMI juga tidak memperhitungkan distribusi lemak, penurunan massa otot akibat usia, atau perbedaan antar kelompok etnis, dan sebaiknya tidak digunakan sendirian untuk menilai kesehatan seseorang.`,
      childrenLabel: `Anak dan remaja:`,
      childrenBody: `karena komposisi tubuh terus berubah selama masa pertumbuhan, angka BMI mentah tidak banyak berarti dengan sendirinya untuk kelompok usia ini. Angka tersebut harus dibaca berdasarkan grafik persentil khusus usia dan jenis kelamin di atas, bukan tabel kategori dewasa.`,
    },
    related: {
      heading: `Kalkulator terkait`,
      linkText: `Kalkulator TDEE`,
      description: `— gunakan berat dan tinggi badanmu untuk memperkirakan kebutuhan kalori harian berdasarkan tingkat aktivitas.`,
    },
  },
};

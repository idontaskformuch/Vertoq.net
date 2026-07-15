export const faqHeadings: Record<string, string> = {
  sv: 'Vanliga frågor',
  en: 'Frequently asked questions',
  pt: 'Perguntas frequentes',
  es: 'Preguntas frecuentes',
  de: 'Häufig gestellte Fragen',
  ja: 'よくある質問',
  zh: '常见问题',
  ko: '자주 묻는 질문',
  hi: 'अक्सर पूछे जाने वाले सवाल',
  id: 'Pertanyaan yang sering diajukan',
};

type FaqItem = { q: string; a: string };
type ToolFaqs = { units: FaqItem[]; time: FaqItem[]; percent: FaqItem[]; age: FaqItem[]; bmi: FaqItem[]; tdee: FaqItem[]; loan: FaqItem[]; loancost: FaqItem[] };

export const faqContent: Record<string, ToolFaqs> = {
  sv: {
    units: [
      { q: 'Hur fungerar enhetsomvandlaren?', a: 'Välj kategori, ange ett värde och se resultatet uppdateras direkt, inga knappar att trycka på.' },
      { q: 'Är omvandlingarna exakta?', a: 'Ja, de bygger på officiella SI-definitioner och ger matematiskt exakta resultat, avrundade till sex decimaler.' },
      { q: 'Hanteras både metriska och brittiska/amerikanska enheter?', a: 'Ja, varje kategori innehåller både metriska enheter (meter, kilogram, liter) och brittiska/amerikanska enheter (tum, pound, gallon).' },
    ],
    time: [
      { q: 'Vad är skillnaden mellan de två lägena?', a: '"Skillnad mellan tider" räknar ut tiden mellan två tidpunkter. "Lägg till / dra av" räknar fram ett nytt datum genom att addera eller subtrahera tid.' },
      { q: 'Tar beräkningen hänsyn till skottår?', a: 'Ja, alla beräkningar är kalenderkorrekta och hanterar skottår och olika månadslängder automatiskt.' },
    ],
    percent: [
      { q: 'Vilket läge ska jag använda för en rabatt?', a: 'Använd "Rabatt", ange pris och rabattprocent för att se nytt pris och hur mycket du sparar.' },
      { q: 'Hur räknar jag ut en procentuell ökning?', a: 'Använd "Procentuell förändring", ange ursprungsvärde och nytt värde för att se förändringen i procent.' },
      { q: 'Vad är skillnaden mellan "procent av tal" och "hur många procent"?', a: 'Det första räknar ut ett värde från en procentsats, det andra räknar ut vilken procentsats en del motsvarar av en helhet.' },
    ],
    age: [
      { q: 'Hur räknas min exakta ålder ut?', a: 'Kalenderkorrekt från ditt födelsedatum till valt datum, visat i fullständiga år, månader och dagar.' },
      { q: 'Vad visar "totalt antal dagar levda"?', a: 'Det exakta antalet dagar mellan ditt födelsedatum och valt datum, många uppmärksammar runda summor som 10 000 dagar.' },
      { q: 'Kan jag räkna ut min ålder vid ett annat datum?', a: 'Ja, ändra fältet "Räkna fram till" för att se din ålder vid valfritt datum, dåtid eller framtid.' },
    ],
    bmi: [
      { q: 'Stämmer BMI för muskulösa eller vältränade personer?', a: 'Mindre bra. BMI skiljer inte på muskler och fett, så en muskulös person kan visas som överviktig trots låg fettprocent. Se begränsningarna ovan för mer om detta.' },
      { q: 'Hur ofta bör jag mäta mitt BMI?', a: 'För de flesta räcker det att mäta var några månader för att se en trend. BMI förändras långsamt, och dagliga mätningar speglar mest vätskebalans, inte verklig förändring.' },
      { q: 'Vad är skillnaden mellan BMI och kroppsfettprocent?', a: 'BMI är ett förhållande mellan vikt och längd och säger inget om vad vikten består av. Kroppsfettprocent mäter den faktiska andelen fett i förhållande till muskelmassa, och är mer exakt, men kräver andra mätmetoder för att uppskattas.' },
    ],
    tdee: [
      { q: 'Vad är skillnaden mellan basalmetabolism och TDEE?', a: 'Basalmetabolism (BMR) är kalorierna kroppen förbränner i vila. TDEE lägger till kalorierna du förbränner genom vardagsaktivitet och träning.' },
      { q: 'Vilken formel används?', a: 'Mifflin St Jeor-formeln, som de flesta näringsexperter idag anser ge den mest tillförlitliga uppskattningen för de flesta kroppstyper.' },
    ],
    loan: [
      { q: 'Vad är ränta-på-ränta?', a: 'Räntan du tjänar läggs till kapitalet, så du tjänar ränta på både startbeloppet och tidigare intjänad ränta.' },
      { q: 'Hur ofta beräknas räntan?', a: 'Månadsvis, vilket är vanligt för sparkonton och fonder och ger en realistisk bild av tillväxten.' },
      { q: 'Tar kalkylatorn hänsyn till skatt eller inflation?', a: 'Nej, resultatet visar nominell tillväxt före skatt och inflation, tänkt som vägledning, inte finansiell rådgivning.' },
    ],
    loancost: [
      { q: 'Hur räknas månadskostnaden ut?', a: 'Med den vanliga annuitetsformeln för lån, som ger en jämn månadskostnad där andelen ränta minskar och andelen amortering ökar över tid.' },
      { q: 'Skiljer sig detta från sparkalkylatorn?', a: 'Ja, sparkalkylatorn visar hur ett sparat belopp växer. Den här kalkylatorn visar vad ett lån eller en avbetalning faktiskt kostar dig totalt.' },
    ],
  },

  en: {
    units: [
      { q: 'How does the unit converter work?', a: 'Pick a category, enter a value, and watch the result update instantly, no buttons to press.' },
      { q: 'Are the conversions exact?', a: "Yes, they're based on official SI definitions and give mathematically precise results, rounded to six decimals." },
      { q: 'Does it handle both metric and imperial units?', a: 'Yes, each category includes metric units (meters, kilograms, liters) and imperial/US units (inches, pounds, gallons).' },
    ],
    time: [
      { q: "What's the difference between the two modes?", a: '"Difference between times" calculates the time between two moments. "Add / subtract" works out a new date by adding or subtracting time.' },
      { q: 'Does the calculation account for leap years?', a: 'Yes, all calculations are calendar-correct and automatically handle leap years and varying month lengths.' },
    ],
    percent: [
      { q: 'Which mode should I use for a discount?', a: 'Use "Discount", enter the price and discount percentage to see the new price and how much you save.' },
      { q: 'How do I calculate a percentage increase?', a: 'Use "Percentage change", enter the original and new value to see the change as a percentage.' },
      { q: 'What\'s the difference between "percent of a number" and "what percentage"?', a: 'The first calculates a value from a percentage; the second works out what percentage a part represents of a whole.' },
    ],
    age: [
      { q: 'How is my exact age calculated?', a: 'Calendar-correct from your birth date to the chosen date, shown in full years, months, and days.' },
      { q: 'What does "total days lived" show?', a: 'The exact number of days between your birth date and the chosen date, many like marking round numbers like 10,000 days.' },
      { q: 'Can I calculate my age on a different date?', a: 'Yes, change the "Calculate as of" field to see your age on any date, past or future.' },
    ],
    bmi: [
      { q: 'Is BMI accurate for muscular or athletic people?', a: "Less so. BMI can't tell muscle from fat, so a muscular person may show as overweight despite low body fat. See the limitations above for more on this." },
      { q: 'How often should I check my BMI?', a: 'For most people, every few months is enough to spot a trend, BMI changes slowly and daily checks mostly reflect water weight, not real change.' },
      { q: "What's the difference between BMI and body fat percentage?", a: 'BMI is a ratio of weight to height and says nothing about what that weight is made of. Body fat percentage measures the actual proportion of fat versus lean mass, and is more precise, but needs different tools to estimate.' },
    ],
    tdee: [
      { q: 'What\'s the difference between BMR and TDEE?', a: 'Basal metabolic rate (BMR) is the calories your body burns at rest. TDEE adds the calories you burn through daily activity and exercise.' },
      { q: 'Which formula is used?', a: 'The Mifflin St Jeor formula, considered by most nutrition experts today to give the most reliable estimate for most body types.' },
    ],
    loan: [
      { q: 'What is compound interest?', a: 'The interest you earn each period is added to your balance, so you earn interest on both your starting amount and past interest.' },
      { q: 'How often is interest calculated?', a: 'Monthly, which is common for savings accounts and funds, giving a realistic picture of growth over time.' },
      { q: 'Does the calculator account for tax or inflation?', a: 'No, the result shows nominal growth before tax and inflation, intended as guidance, not financial advice.' },
    ],
    loancost: [
      { q: 'How is the monthly payment calculated?', a: 'Using the standard loan amortization formula, which gives an even monthly payment where the interest portion decreases and the principal portion increases over time.' },
      { q: 'How is this different from the savings calculator?', a: 'The savings calculator shows how a saved amount grows. This calculator shows what a loan or installment purchase actually costs you in total.' },
    ],
  },

  pt: {
    units: [
      { q: 'Como funciona o conversor de unidades?', a: 'Escolha uma categoria, digite um valor e veja o resultado atualizar instantaneamente, sem precisar clicar em nada.' },
      { q: 'As conversões são exatas?', a: 'Sim, baseiam-se em definições oficiais do SI e fornecem resultados matematicamente precisos, arredondados a seis decimais.' },
      { q: 'Funciona com unidades métricas e imperiais?', a: 'Sim, cada categoria inclui unidades métricas (metros, quilogramas, litros) e imperiais/americanas (polegadas, libras, galões).' },
    ],
    time: [
      { q: 'Qual a diferença entre os dois modos?', a: '"Diferença entre horários" calcula o tempo entre dois momentos. "Somar / subtrair" calcula uma nova data somando ou subtraindo tempo.' },
      { q: 'O cálculo considera anos bissextos?', a: 'Sim, todos os cálculos são corretos no calendário e tratam automaticamente anos bissextos e meses de tamanhos diferentes.' },
    ],
    percent: [
      { q: 'Qual modo usar para um desconto?', a: 'Use "Desconto", informe o preço e a porcentagem de desconto para ver o novo preço e quanto você economiza.' },
      { q: 'Como calculo um aumento percentual?', a: 'Use "Variação percentual", informe o valor original e o novo valor para ver a mudança em porcentagem.' },
      { q: 'Qual a diferença entre "porcentagem de um número" e "qual porcentagem"?', a: 'O primeiro calcula um valor a partir de uma porcentagem; o segundo calcula que porcentagem uma parte representa de um total.' },
    ],
    age: [
      { q: 'Como minha idade exata é calculada?', a: 'De forma correta no calendário, da sua data de nascimento até a data escolhida, em anos, meses e dias completos.' },
      { q: 'O que mostra "total de dias vividos"?', a: 'O número exato de dias entre seu nascimento e a data escolhida, muitos gostam de marcar números redondos como 10.000 dias.' },
      { q: 'Posso calcular minha idade em outra data?', a: 'Sim, altere o campo "Calcular até" para ver sua idade em qualquer data, passada ou futura.' },
    ],
    bmi: [
      { q: 'O IMC é preciso para pessoas musculosas ou atléticas?', a: 'Menos preciso. O IMC não diferencia músculo de gordura, então uma pessoa musculosa pode aparecer como acima do peso mesmo com baixo percentual de gordura. Veja as limitações acima para saber mais.' },
      { q: 'Com que frequência devo verificar meu IMC?', a: 'Para a maioria das pessoas, a cada poucos meses já é suficiente para notar uma tendência. O IMC muda devagar, e verificações diárias refletem principalmente retenção de líquidos, não uma mudança real.' },
      { q: 'Qual a diferença entre IMC e percentual de gordura corporal?', a: 'O IMC é uma relação entre peso e altura e não diz nada sobre do que esse peso é composto. O percentual de gordura corporal mede a proporção real de gordura em relação à massa magra, e é mais preciso, mas exige outras ferramentas para ser estimado.' },
    ],
    tdee: [
      { q: 'Qual a diferença entre TMB e TDEE?', a: 'A taxa metabólica basal (TMB) é o quanto seu corpo gasta em repouso. O TDEE soma as calorias gastas com atividade diária e exercício.' },
      { q: 'Qual fórmula é usada?', a: 'A fórmula de Mifflin St Jeor, considerada pela maioria dos especialistas em nutrição a mais confiável para a maioria dos tipos de corpo.' },
    ],
    loan: [
      { q: 'O que são juros compostos?', a: 'Os juros ganhos em cada período são somados ao saldo, então você ganha juros sobre o valor inicial e sobre os juros anteriores.' },
      { q: 'Com que frequência os juros são calculados?', a: 'Mensalmente, comum em contas de poupança e fundos, dando uma visão realista do crescimento ao longo do tempo.' },
      { q: 'A calculadora considera impostos ou inflação?', a: 'Não, o resultado mostra o crescimento nominal antes de impostos e inflação, é uma orientação, não consultoria financeira.' },
    ],
    loancost: [
      { q: 'Como a parcela mensal é calculada?', a: 'Usando a fórmula padrão de amortização de empréstimos, que dá uma parcela mensal uniforme onde a parte de juros diminui e a parte de amortização aumenta ao longo do tempo.' },
      { q: 'Qual a diferença em relação à calculadora de poupança?', a: 'A calculadora de poupança mostra como um valor poupado cresce. Esta calculadora mostra quanto um empréstimo ou compra parcelada realmente custa no total.' },
    ],
  },

  es: {
    units: [
      { q: '¿Cómo funciona el conversor de unidades?', a: 'Elige una categoría, escribe un valor y observa el resultado actualizarse al instante, sin botones que pulsar.' },
      { q: '¿Las conversiones son exactas?', a: 'Sí, se basan en definiciones oficiales del SI y dan resultados matemáticamente precisos, redondeados a seis decimales.' },
      { q: '¿Funciona con unidades métricas e imperiales?', a: 'Sí, cada categoría incluye unidades métricas (metros, kilogramos, litros) e imperiales/estadounidenses (pulgadas, libras, galones).' },
    ],
    time: [
      { q: '¿Cuál es la diferencia entre los dos modos?', a: '"Diferencia entre horas" calcula el tiempo entre dos momentos. "Sumar / restar" calcula una nueva fecha sumando o restando tiempo.' },
      { q: '¿El cálculo tiene en cuenta los años bisiestos?', a: 'Sí, todos los cálculos son correctos según el calendario y gestionan automáticamente los años bisiestos y meses de distinta duración.' },
    ],
    percent: [
      { q: '¿Qué modo debo usar para un descuento?', a: 'Usa "Descuento", introduce el precio y el porcentaje de descuento para ver el nuevo precio y cuánto ahorras.' },
      { q: '¿Cómo calculo un aumento porcentual?', a: 'Usa "Cambio porcentual", introduce el valor original y el nuevo para ver el cambio en porcentaje.' },
      { q: '¿Cuál es la diferencia entre "porcentaje de un número" y "qué porcentaje"?', a: 'El primero calcula un valor a partir de un porcentaje; el segundo calcula qué porcentaje representa una parte de un total.' },
    ],
    age: [
      { q: '¿Cómo se calcula mi edad exacta?', a: 'De forma correcta según el calendario, desde tu fecha de nacimiento hasta la fecha elegida, en años, meses y días completos.' },
      { q: '¿Qué muestra "total de días vividos"?', a: 'El número exacto de días entre tu nacimiento y la fecha elegida, a muchos les gusta celebrar cifras redondas como 10.000 días.' },
      { q: '¿Puedo calcular mi edad en otra fecha?', a: 'Sí, cambia el campo "Calcular a fecha de" para ver tu edad en cualquier fecha, pasada o futura.' },
    ],
    bmi: [
      { q: '¿El IMC es preciso para personas musculosas o atléticas?', a: 'Menos preciso. El IMC no distingue entre músculo y grasa, así que una persona musculosa puede aparecer con sobrepeso aunque tenga poca grasa corporal. Consulta las limitaciones arriba para más detalles.' },
      { q: '¿Con qué frecuencia debo medir mi IMC?', a: 'Para la mayoría de las personas, cada pocos meses es suficiente para detectar una tendencia. El IMC cambia lentamente, y las mediciones diarias reflejan sobre todo retención de líquidos, no un cambio real.' },
      { q: '¿Cuál es la diferencia entre el IMC y el porcentaje de grasa corporal?', a: 'El IMC es una relación entre peso y estatura y no dice nada sobre de qué está hecho ese peso. El porcentaje de grasa corporal mide la proporción real de grasa frente a masa magra, y es más preciso, pero requiere otras herramientas para estimarlo.' },
    ],
    tdee: [
      { q: '¿Cuál es la diferencia entre TMB y TDEE?', a: 'La tasa metabólica basal (TMB) es lo que tu cuerpo gasta en reposo. El TDEE suma las calorías que gastas con actividad diaria y ejercicio.' },
      { q: '¿Qué fórmula se utiliza?', a: 'La fórmula de Mifflin St Jeor, considerada por la mayoría de expertos en nutrición como la más fiable para la mayoría de tipos de cuerpo.' },
    ],
    loan: [
      { q: '¿Qué es el interés compuesto?', a: 'El interés que ganas cada periodo se suma al saldo, así ganas interés tanto sobre el monto inicial como sobre el interés anterior.' },
      { q: '¿Con qué frecuencia se calcula el interés?', a: 'Mensualmente, algo común en cuentas de ahorro y fondos, lo que da una imagen realista del crecimiento con el tiempo.' },
      { q: '¿La calculadora tiene en cuenta impuestos o inflación?', a: 'No, el resultado muestra el crecimiento nominal antes de impuestos e inflación, es una guía, no asesoría financiera.' },
    ],
    loancost: [
      { q: '¿Cómo se calcula la cuota mensual?', a: 'Con la fórmula estándar de amortización de préstamos, que da una cuota mensual uniforme donde la parte de interés disminuye y la parte de capital aumenta con el tiempo.' },
      { q: '¿En qué se diferencia de la calculadora de ahorro?', a: 'La calculadora de ahorro muestra cómo crece un monto ahorrado. Esta calculadora muestra cuánto cuesta en total un préstamo o una compra a plazos.' },
    ],
  },

  de: {
    units: [
      { q: 'Wie funktioniert der Einheitenumrechner?', a: 'Kategorie wählen, Wert eingeben und das Ergebnis sofort sehen, keine Schaltflächen nötig.' },
      { q: 'Sind die Umrechnungen exakt?', a: 'Ja, sie basieren auf offiziellen SI-Definitionen und liefern mathematisch genaue Ergebnisse, gerundet auf sechs Dezimalstellen.' },
      { q: 'Werden sowohl metrische als auch imperiale Einheiten unterstützt?', a: 'Ja, jede Kategorie enthält metrische Einheiten (Meter, Kilogramm, Liter) und imperiale/US-Einheiten (Zoll, Pfund, Gallonen).' },
    ],
    time: [
      { q: 'Was ist der Unterschied zwischen den beiden Modi?', a: '"Differenz zwischen Zeiten" berechnet die Zeit zwischen zwei Zeitpunkten. "Addieren / subtrahieren" berechnet ein neues Datum durch Hinzufügen oder Abziehen von Zeit.' },
      { q: 'Berücksichtigt die Berechnung Schaltjahre?', a: 'Ja, alle Berechnungen sind kalenderkorrekt und behandeln Schaltjahre und unterschiedliche Monatslängen automatisch.' },
    ],
    percent: [
      { q: 'Welchen Modus nutze ich für einen Rabatt?', a: 'Nutze "Rabatt", gib Preis und Rabattprozentsatz ein, um den neuen Preis und deine Ersparnis zu sehen.' },
      { q: 'Wie berechne ich eine prozentuale Steigerung?', a: 'Nutze "Prozentuale Veränderung", gib Ausgangs- und neuen Wert ein, um die Veränderung in Prozent zu sehen.' },
      { q: 'Was ist der Unterschied zwischen "Prozent einer Zahl" und "Wie viel Prozent"?', a: 'Ersteres berechnet einen Wert aus einem Prozentsatz, Letzteres berechnet, welchen Prozentsatz ein Teil eines Ganzen ausmacht.' },
    ],
    age: [
      { q: 'Wie wird mein exaktes Alter berechnet?', a: 'Kalenderkorrekt von deinem Geburtsdatum bis zum gewählten Datum, angezeigt in vollen Jahren, Monaten und Tagen.' },
      { q: 'Was zeigt "insgesamt gelebte Tage"?', a: 'Die exakte Anzahl der Tage zwischen deiner Geburt und dem gewählten Datum, viele markieren gerne runde Zahlen wie 10.000 Tage.' },
      { q: 'Kann ich mein Alter an einem anderen Datum berechnen?', a: 'Ja, ändere das Feld "Berechnen zum", um dein Alter an jedem beliebigen Datum zu sehen, vergangen oder zukünftig.' },
    ],
    bmi: [
      { q: 'Ist der BMI bei muskulösen oder sportlichen Menschen genau?', a: 'Weniger genau. Der BMI unterscheidet nicht zwischen Muskeln und Fett, sodass muskulöse Personen trotz niedrigem Körperfettanteil als übergewichtig eingestuft werden können. Mehr dazu in den Einschränkungen oben.' },
      { q: 'Wie oft sollte ich meinen BMI prüfen?', a: 'Für die meisten reicht es, alle paar Monate zu messen, um einen Trend zu erkennen. Der BMI ändert sich langsam, und tägliche Messungen spiegeln vor allem den Wasserhaushalt wider, keine echte Veränderung.' },
      { q: 'Was ist der Unterschied zwischen BMI und Körperfettanteil?', a: 'Der BMI ist ein Verhältnis von Gewicht zu Größe und sagt nichts darüber aus, woraus dieses Gewicht besteht. Der Körperfettanteil misst den tatsächlichen Anteil von Fett gegenüber Muskelmasse und ist genauer, erfordert aber andere Messmethoden.' },
    ],
    tdee: [
      { q: 'Was ist der Unterschied zwischen Grundumsatz und TDEE?', a: 'Der Grundumsatz ist, was dein Körper im Ruhezustand verbraucht. Der TDEE addiert die Kalorien, die du durch Alltagsaktivität und Training verbrauchst.' },
      { q: 'Welche Formel wird verwendet?', a: 'Die Mifflin St Jeor Formel, die von den meisten Ernährungsexperten heute als zuverlässigste Schätzung für die meisten Körpertypen angesehen wird.' },
    ],
    loan: [
      { q: 'Was ist Zinseszins?', a: 'Die Zinsen, die du jede Periode verdienst, werden dem Saldo hinzugefügt, sodass du Zinsen auf den Startbetrag und frühere Zinsen verdienst.' },
      { q: 'Wie oft werden die Zinsen berechnet?', a: 'Monatlich, üblich bei Sparkonten und Fonds, was ein realistisches Bild des Wachstums über die Zeit gibt.' },
      { q: 'Berücksichtigt der Rechner Steuern oder Inflation?', a: 'Nein, das Ergebnis zeigt das nominale Wachstum vor Steuern und Inflation, gedacht als Orientierung, keine Finanzberatung.' },
    ],
    loancost: [
      { q: 'Wie wird die monatliche Rate berechnet?', a: 'Mit der üblichen Tilgungsformel für Kredite, die eine gleichbleibende monatliche Rate ergibt, bei der der Zinsanteil sinkt und der Tilgungsanteil mit der Zeit steigt.' },
      { q: 'Wie unterscheidet sich das vom Sparrechner?', a: 'Der Sparrechner zeigt, wie ein gespartes Guthaben wächst. Dieser Rechner zeigt, was ein Kredit oder Ratenkauf dich insgesamt tatsächlich kostet.' },
    ],
  },

  ja: {
    units: [
      { q: '単位変換はどう使いますか？', a: 'カテゴリーを選び、値を入力するだけで結果がすぐに表示されます。' },
      { q: '変換結果は正確ですか？', a: 'はい、公式のSI定義に基づき、小数点以下6桁まで数学的に正確です。' },
      { q: 'メートル法とヤード・ポンド法の両方に対応していますか？', a: 'はい、各カテゴリーにメートル法（メートル、キログラム、リットル）と英米単位（インチ、ポンド、ガロン）の両方が含まれます。' },
    ],
    time: [
      { q: '2つのモードの違いは何ですか？', a: '「時間の差」は2つの時点間の時間を計算し、「加算・減算」は時間を加えたり引いたりして新しい日時を求めます。' },
      { q: 'うるう年は考慮されますか？', a: 'はい、すべての計算はカレンダーに基づいており、うるう年や月の長さの違いも自動的に処理されます。' },
    ],
    percent: [
      { q: '割引にはどのモードを使えばいいですか？', a: '「割引」モードを使い、価格と割引率を入力すると、新しい価格と節約額が表示されます。' },
      { q: '増加率はどう計算しますか？', a: '「変化率」モードを使い、元の値と新しい値を入力すると、変化率が表示されます。' },
      { q: '「数値のパーセント」と「何パーセントか」の違いは？', a: '前者はパーセントから値を計算し、後者は部分が全体の何パーセントかを計算します。' },
    ],
    age: [
      { q: '正確な年齢はどう計算されますか？', a: '生年月日から指定日までカレンダーに基づき正確に計算され、年・月・日で表示されます。' },
      { q: '「生きた日数の合計」は何を示しますか？', a: '生年月日から指定日までの正確な日数で、10,000日など節目の日を記念する人も多いです。' },
      { q: '別の日付での年齢も計算できますか？', a: 'はい、「基準日」を変更すれば過去や未来の任意の日付での年齢を確認できます。' },
    ],
    bmi: [
      { q: '筋肉質やアスリート体型の人にもBMIは正確ですか？', a: 'あまり正確ではありません。BMIは筋肉と脂肪を区別できないため、筋肉質な人は体脂肪率が低くても肥満と表示されることがあります。詳しくは上記の限界の説明をご覧ください。' },
      { q: 'BMIはどのくらいの頻度で確認すればいいですか？', a: '多くの場合、数か月ごとの確認で傾向をつかむには十分です。BMIはゆっくり変化するため、毎日の測定は実際の変化よりも水分量の変動を反映していることがほとんどです。' },
      { q: 'BMIと体脂肪率の違いは何ですか？', a: 'BMIは体重と身長の比率であり、その体重が何でできているかは示しません。体脂肪率は脂肪と除脂肪量の実際の割合を測定するためより正確ですが、算出には別の測定方法が必要です。' },
    ],
    tdee: [
      { q: '基礎代謝量とTDEEの違いは何ですか?', a: '基礎代謝量は安静時に消費するカロリーです。TDEEはそこに日常活動や運動で消費するカロリーを加えたものです。' },
      { q: 'どの計算式が使われていますか?', a: '多くの栄養専門家が現在多くの体型に対して最も信頼できると考えるMifflin St Jeor式を使用しています。' },
    ],
    loan: [
      { q: '複利とは何ですか？', a: '各期間で得た利息が元本に加算され、元本と過去の利息の両方に利息がつく仕組みです。' },
      { q: '利息はどのくらいの頻度で計算されますか？', a: '毎月計算され、預金や投資信託で一般的な方式で、時間とともに増える様子を現実的に示します。' },
      { q: '税金やインフレは考慮されますか？', a: 'いいえ、結果は税金やインフレ前の名目成長を示すもので、助言ではなく目安としてご利用ください。' },
    ],
    loancost: [
      { q: '月々の返済額はどう計算されますか?', a: '標準的なローン償却方式を使用しており、利息部分が減少し元金部分が時間とともに増加する、均等な月々の返済額が算出されます。' },
      { q: '積立計算機との違いは何ですか?', a: '積立計算機は積み立てた金額がどう増えるかを示します。このツールはローンや分割払いが実際に総額でいくらかかるかを示します。' },
    ],
  },

  zh: {
    units: [
      { q: '单位换算器如何使用？', a: '选择类别，输入数值，结果立即更新, 无需点击任何按钮。' },
      { q: '换算结果是否精确？', a: '是的，换算基于官方SI定义，结果在数学上精确，保留六位小数。' },
      { q: '是否同时支持公制和英制单位？', a: '是的，每个类别都包含公制单位（米、千克、升）和英制/美制单位（英寸、磅、加仑）。' },
    ],
    time: [
      { q: '两种模式有什么区别？', a: '"时间差"计算两个时间点之间的差值，"加减时间"通过加上或减去时间来得出新的日期。' },
      { q: '计算是否考虑闰年？', a: '是的，所有计算都符合日历规则，会自动处理闰年和不同月份的天数。' },
    ],
    percent: [
      { q: '计算折扣应使用哪种模式？', a: '使用"折扣"模式，输入价格和折扣百分比，即可查看新价格和节省金额。' },
      { q: '如何计算百分比增长？', a: '使用"百分比变化"模式，输入原值和新值，即可查看变化百分比。' },
      { q: '"数值的百分比"和"占百分之多少"有什么区别？', a: '前者根据百分比计算数值，后者计算部分占总数的百分比。' },
    ],
    age: [
      { q: '我的精确年龄是如何计算的？', a: '根据日历规则，从出生日期计算到指定日期，以完整的年、月、日显示。' },
      { q: '"已度过的总天数"显示什么？', a: '出生日期与指定日期之间的精确天数, 很多人喜欢纪念整数天数，比如一万天。' },
      { q: '可以计算其他日期的年龄吗？', a: '可以，更改"计算截止日期"字段即可查看过去或未来任意日期的年龄。' },
    ],
    bmi: [
      { q: 'BMI对肌肉发达或运动员体型的人准确吗？', a: '不太准确。BMI无法区分肌肉和脂肪，因此肌肉发达的人即使体脂率很低，也可能被归为超重。更多内容见上文的局限性说明。' },
      { q: '应该多久测一次BMI？', a: '对大多数人来说，每隔几个月测一次就足以观察趋势，BMI变化缓慢，每天测量的波动大多反映的是水分变化，而非真实变化。' },
      { q: 'BMI和体脂率有什么区别？', a: 'BMI是体重与身高的比值，无法说明这些体重具体由什么构成。体脂率衡量的是脂肪相对于瘦体重的实际比例，更精确，但需要其他工具才能估算。' },
    ],
    tdee: [
      { q: '基础代谢率和TDEE有什么区别?', a: '基础代谢率是身体在静息状态下消耗的热量。TDEE则加上了日常活动和运动消耗的热量。' },
      { q: '使用的是哪个公式?', a: 'Mifflin St Jeor公式，目前大多数营养专家认为它对大多数体型给出的估算最为可靠。' },
    ],
    loan: [
      { q: '什么是复利？', a: '每期获得的利息会计入本金，因此你既能从本金又能从之前的利息中获得利息。' },
      { q: '利息计算的频率是多少？', a: '按月计算，这在储蓄账户和基金中很常见，能更真实地反映长期增长情况。' },
      { q: '计算器是否考虑税收或通货膨胀？', a: '不考虑，结果显示的是税前和通胀前的名义增长, 仅供参考，非财务建议。' },
    ],
    loancost: [
      { q: '每月还款额是如何计算的?', a: '使用标准的贷款摊销公式, 得出一个均等的月还款额, 其中利息部分逐渐减少, 本金部分逐渐增加。' },
      { q: '这与储蓄计算器有什么不同?', a: '储蓄计算器显示存款金额如何增长。这个计算器显示贷款或分期付款实际总共要花费多少。' },
    ],
  },

  ko: {
    units: [
      { q: '단위 변환기는 어떻게 사용하나요?', a: '카테고리를 선택하고 값을 입력하면 결과가 즉시 업데이트됩니다, 버튼을 누를 필요가 없습니다.' },
      { q: '변환 결과는 정확한가요?', a: '네, 공식 SI 정의를 기반으로 하며 소수점 6자리까지 수학적으로 정확한 결과를 제공합니다.' },
      { q: '미터법과 야드파운드법을 모두 지원하나요?', a: '네, 각 카테고리에는 미터법 단위(미터, 킬로그램, 리터)와 야드파운드/US 단위(인치, 파운드, 갤런)가 모두 포함됩니다.' },
    ],
    time: [
      { q: '두 모드의 차이는 무엇인가요?', a: '"시간 차이"는 두 시점 사이의 시간을 계산하고, "더하기 / 빼기"는 시간을 더하거나 빼서 새로운 날짜를 구합니다.' },
      { q: '계산에 윤년이 반영되나요?', a: '네, 모든 계산은 달력 기준으로 정확하며 윤년과 월별 일수 차이를 자동으로 처리합니다.' },
    ],
    percent: [
      { q: '할인 계산에는 어떤 모드를 사용해야 하나요?', a: '"할인" 모드를 사용해 가격과 할인율을 입력하면 새 가격과 절약 금액을 확인할 수 있습니다.' },
      { q: '퍼센트 증가는 어떻게 계산하나요?', a: '"퍼센트 변화" 모드를 사용해 원래 값과 새 값을 입력하면 변화율을 확인할 수 있습니다.' },
      { q: '"숫자의 퍼센트"와 "몇 퍼센트인지"의 차이는 무엇인가요?', a: '전자는 퍼센트로 값을 계산하고, 후자는 부분이 전체의 몇 퍼센트인지를 계산합니다.' },
    ],
    age: [
      { q: '정확한 나이는 어떻게 계산되나요?', a: '생년월일부터 선택한 날짜까지 달력 기준으로 정확히 계산되어 년, 월, 일로 표시됩니다.' },
      { q: '"살아온 총 일수"는 무엇을 보여주나요?', a: '생년월일부터 선택한 날짜까지의 정확한 일수로, 많은 사람들이 10,000일과 같은 특별한 날을 기념합니다.' },
      { q: '다른 날짜의 나이도 계산할 수 있나요?', a: '네, "기준 날짜" 필드를 변경하면 과거나 미래의 어떤 날짜에서의 나이도 확인할 수 있습니다.' },
    ],
    bmi: [
      { q: '근육질이거나 운동선수 체형인 사람에게도 BMI가 정확한가요?', a: '덜 정확합니다. BMI는 근육과 지방을 구분하지 못하기 때문에, 체지방률이 낮아도 근육질인 사람은 과체중으로 표시될 수 있습니다. 자세한 내용은 위의 한계점을 참고하세요.' },
      { q: 'BMI는 얼마나 자주 확인해야 하나요?', a: '대부분의 경우 몇 달에 한 번씩 확인하는 것으로 추세를 파악하기에 충분합니다. BMI는 천천히 변하며, 매일 측정하면 실제 변화보다는 대부분 수분 변화를 반영합니다.' },
      { q: 'BMI와 체지방률의 차이는 무엇인가요?', a: 'BMI는 체중과 키의 비율일 뿐, 그 체중이 무엇으로 이루어져 있는지는 알려주지 않습니다. 체지방률은 지방과 제지방량의 실제 비율을 측정하므로 더 정확하지만, 추정하려면 다른 도구가 필요합니다.' },
    ],
    tdee: [
      { q: '기초대사량과 TDEE의 차이는 무엇인가요?', a: '기초대사량은 신체가 휴식 상태에서 소비하는 칼로리입니다. TDEE는 여기에 일상 활동과 운동으로 소비하는 칼로리를 더한 것입니다.' },
      { q: '어떤 공식이 사용되나요?', a: '대부분의 영양 전문가가 현재 대부분의 체형에 가장 신뢰할 수 있는 추정치를 제공한다고 보는 Mifflin St Jeor 공식입니다.' },
    ],
    loan: [
      { q: '복리란 무엇인가요?', a: '매 기간 얻은 이자가 잔액에 더해져, 원금과 이전 이자 모두에 대해 이자를 받게 됩니다.' },
      { q: '이자는 얼마나 자주 계산되나요?', a: '매월 계산되며, 이는 저축 계좌나 펀드에서 일반적이며 시간에 따른 성장을 현실적으로 보여줍니다.' },
      { q: '계산기가 세금이나 인플레이션을 고려하나요?', a: '아니요, 결과는 세금과 인플레이션 전의 명목 성장을 보여줍니다, 참고용이며 금융 자문이 아닙니다.' },
    ],
    loancost: [
      { q: '월 상환액은 어떻게 계산되나요?', a: '표준 대출 상환 공식을 사용하며, 시간이 지남에 따라 이자 비중은 줄고 원금 비중은 늘어나는 균등한 월 상환액을 계산합니다.' },
      { q: '저축 계산기와 어떻게 다른가요?', a: '저축 계산기는 저축한 금액이 어떻게 늘어나는지 보여줍니다. 이 계산기는 대출이나 할부 구매가 실제로 총 얼마나 드는지 보여줍니다.' },
    ],
  },

  hi: {
    units: [
      { q: 'यूनिट कन्वर्टर कैसे काम करता है?', a: 'श्रेणी चुनें, मान दर्ज करें, और परिणाम तुरंत अपडेट होते देखें, कोई बटन दबाने की ज़रूरत नहीं।' },
      { q: 'क्या रूपांतरण सटीक हैं?', a: 'हाँ, ये आधिकारिक SI परिभाषाओं पर आधारित हैं और छह दशमलव स्थानों तक गणितीय रूप से सटीक परिणाम देते हैं।' },
      { q: 'क्या यह मेट्रिक और इंपीरियल दोनों इकाइयों को संभालता है?', a: 'हाँ, हर श्रेणी में मेट्रिक इकाइयाँ (मीटर, किलोग्राम, लीटर) और इंपीरियल/US इकाइयाँ (इंच, पाउंड, गैलन) दोनों शामिल हैं।' },
    ],
    time: [
      { q: 'दोनों मोड में क्या अंतर है?', a: '"समय का अंतर" दो समयों के बीच का समय निकालता है, जबकि "जोड़ें / घटाएँ" समय जोड़कर या घटाकर नई तारीख़ निकालता है।' },
      { q: 'क्या गणना लीप वर्ष को ध्यान में रखती है?', a: 'हाँ, सभी गणनाएँ कैलेंडर के अनुसार सटीक हैं और लीप वर्ष व अलग-अलग महीनों की लंबाई को स्वतः संभालती हैं।' },
    ],
    percent: [
      { q: 'छूट के लिए कौन सा मोड उपयोग करें?', a: '"छूट" मोड का उपयोग करें, कीमत और छूट प्रतिशत दर्ज करें ताकि नई कीमत और बचत दिख सके।' },
      { q: 'प्रतिशत वृद्धि कैसे निकालें?', a: '"प्रतिशत परिवर्तन" मोड का उपयोग करें, मूल और नया मान दर्ज करें ताकि परिवर्तन प्रतिशत में दिखे।' },
      { q: '"संख्या का प्रतिशत" और "कितना प्रतिशत" में क्या अंतर है?', a: 'पहला प्रतिशत से एक मान निकालता है, दूसरा यह निकालता है कि कोई भाग पूर्ण का कितना प्रतिशत है।' },
    ],
    age: [
      { q: 'मेरी सटीक उम्र कैसे निकाली जाती है?', a: 'आपकी जन्मतिथि से चुनी गई तारीख़ तक कैलेंडर के अनुसार सटीक रूप से, पूर्ण वर्षों, महीनों और दिनों में दिखाई जाती है।' },
      { q: '"जीवित रहे कुल दिन" क्या दर्शाता है?', a: 'जन्मतिथि और चुनी गई तारीख़ के बीच के सटीक दिन, कई लोग 10,000 दिन जैसे गोल आंकड़ों को मनाना पसंद करते हैं।' },
      { q: 'क्या मैं किसी अन्य तारीख़ पर अपनी उम्र निकाल सकता हूँ?', a: 'हाँ, "किस तारीख़ तक गणना करें" फ़ील्ड बदलें ताकि किसी भी भूत या भविष्य की तारीख़ पर अपनी उम्र देख सकें।' },
    ],
    bmi: [
      { q: 'क्या मांसपेशियों वाले या एथलेटिक लोगों के लिए BMI सटीक है?', a: 'उतना सटीक नहीं। BMI मांसपेशियों और वसा में फ़र्क नहीं कर पाता, इसलिए मांसपेशियों वाला व्यक्ति कम फैट होने के बावजूद अधिक वज़न वाला दिख सकता है। ज़्यादा जानकारी के लिए ऊपर दी गई सीमाएँ देखें।' },
      { q: 'मुझे अपना BMI कितनी बार जाँचना चाहिए?', a: 'अधिकतर लोगों के लिए हर कुछ महीनों में एक बार जाँचना ट्रेंड देखने के लिए काफ़ी है। BMI धीरे-धीरे बदलता है, और रोज़ाना जाँच ज़्यादातर पानी के वज़न में बदलाव दिखाती है, असली बदलाव नहीं।' },
      { q: 'BMI और बॉडी फैट प्रतिशत में क्या अंतर है?', a: 'BMI वज़न और लंबाई का अनुपात है और यह नहीं बताता कि वह वज़न किससे बना है। बॉडी फैट प्रतिशत वसा और लीन मास के वास्तविक अनुपात को मापता है, और अधिक सटीक है, लेकिन इसे मापने के लिए अलग उपकरणों की ज़रूरत होती है।' },
    ],
    tdee: [
      { q: 'बेसल मेटाबॉलिक रेट और TDEE में क्या अंतर है?', a: 'बेसल मेटाबॉलिक रेट वह है जो आपका शरीर आराम की अवस्था में खर्च करता है। TDEE में दैनिक गतिविधि और व्यायाम से खर्च होने वाली कैलोरी भी जोड़ी जाती है।' },
      { q: 'कौन सा फ़ॉर्मूला उपयोग होता है?', a: 'Mifflin St Jeor फ़ॉर्मूला, जिसे अधिकांश पोषण विशेषज्ञ आज अधिकतर शरीर के प्रकारों के लिए सबसे भरोसेमंद अनुमान मानते हैं।' },
    ],
    loan: [
      { q: 'चक्रवृद्धि ब्याज क्या है?', a: 'हर अवधि में अर्जित ब्याज को मूलधन में जोड़ दिया जाता है, जिससे आपको मूलधन और पिछले ब्याज दोनों पर ब्याज मिलता है।' },
      { q: 'ब्याज की गणना कितनी बार होती है?', a: 'मासिक रूप से, जो बचत खातों और फंडों में सामान्य है और समय के साथ वृद्धि की एक यथार्थवादी तस्वीर देता है।' },
      { q: 'क्या कैलकुलेटर टैक्स या महंगाई को ध्यान में रखता है?', a: 'नहीं, परिणाम टैक्स और महंगाई से पहले की नाममात्र वृद्धि दिखाता है, यह केवल मार्गदर्शन है, वित्तीय सलाह नहीं।' },
    ],
    loancost: [
      { q: 'मासिक किस्त की गणना कैसे होती है?', a: 'मानक ऋण परिशोधन फ़ॉर्मूले से, जो एक समान मासिक किस्त देता है जिसमें ब्याज का हिस्सा घटता है और मूलधन का हिस्सा समय के साथ बढ़ता है।' },
      { q: 'यह बचत कैलकुलेटर से कैसे अलग है?', a: 'बचत कैलकुलेटर दिखाता है कि बचाई गई राशि कैसे बढ़ती है। यह कैलकुलेटर दिखाता है कि ऋण या किस्तों पर खरीदारी की वास्तविक कुल लागत कितनी है।' },
    ],
  },

  id: {
    units: [
      { q: 'Bagaimana cara kerja konverter satuan?', a: 'Pilih kategori, masukkan nilai, dan lihat hasilnya langsung diperbarui, tidak perlu menekan tombol apa pun.' },
      { q: 'Apakah konversinya akurat?', a: 'Ya, berdasarkan definisi SI resmi dan memberikan hasil yang matematis akurat, dibulatkan hingga enam desimal.' },
      { q: 'Apakah mendukung satuan metrik dan imperial?', a: 'Ya, setiap kategori mencakup satuan metrik (meter, kilogram, liter) dan satuan imperial/AS (inci, pon, galon).' },
    ],
    time: [
      { q: 'Apa perbedaan antara dua mode ini?', a: '"Selisih waktu" menghitung waktu antara dua momen, sedangkan "Tambah / kurang" menghitung tanggal baru dengan menambah atau mengurangi waktu.' },
      { q: 'Apakah perhitungan memperhitungkan tahun kabisat?', a: 'Ya, semua perhitungan akurat sesuai kalender dan secara otomatis menangani tahun kabisat serta panjang bulan yang berbeda.' },
    ],
    percent: [
      { q: 'Mode mana yang digunakan untuk diskon?', a: 'Gunakan "Diskon", masukkan harga dan persentase diskon untuk melihat harga baru dan jumlah yang kamu hemat.' },
      { q: 'Bagaimana cara menghitung kenaikan persentase?', a: 'Gunakan "Perubahan persen", masukkan nilai awal dan nilai baru untuk melihat perubahan dalam persentase.' },
      { q: 'Apa perbedaan antara "persen dari angka" dan "berapa persen"?', a: 'Yang pertama menghitung nilai dari persentase; yang kedua menghitung berapa persen suatu bagian dari keseluruhan.' },
    ],
    age: [
      { q: 'Bagaimana usia tepat saya dihitung?', a: 'Akurat sesuai kalender dari tanggal lahir hingga tanggal yang dipilih, ditampilkan dalam tahun, bulan, dan hari lengkap.' },
      { q: 'Apa yang ditunjukkan "total hari yang dijalani"?', a: 'Jumlah hari yang tepat antara tanggal lahir dan tanggal yang dipilih, banyak orang suka merayakan angka bulat seperti 10.000 hari.' },
      { q: 'Bisakah saya menghitung usia pada tanggal lain?', a: 'Ya, ubah kolom "Hitung sampai tanggal" untuk melihat usia kamu pada tanggal apa pun, di masa lalu atau masa depan.' },
    ],
    bmi: [
      { q: 'Apakah BMI akurat untuk orang berotot atau atletis?', a: 'Kurang akurat. BMI tidak bisa membedakan otot dari lemak, jadi orang yang berotot bisa saja tercatat sebagai kelebihan berat badan meski lemak tubuhnya rendah. Lihat batasan di atas untuk penjelasan lebih lanjut.' },
      { q: 'Seberapa sering saya harus memeriksa BMI saya?', a: 'Bagi kebanyakan orang, memeriksa setiap beberapa bulan sudah cukup untuk melihat tren. BMI berubah secara perlahan, dan pemeriksaan harian kebanyakan mencerminkan perubahan berat air, bukan perubahan yang sebenarnya.' },
      { q: 'Apa perbedaan antara BMI dan persentase lemak tubuh?', a: 'BMI adalah rasio antara berat dan tinggi badan, dan tidak menjelaskan apa yang menyusun berat tersebut. Persentase lemak tubuh mengukur proporsi lemak yang sebenarnya dibandingkan massa tanpa lemak, dan lebih akurat, tetapi memerlukan alat lain untuk memperkirakannya.' },
    ],
    tdee: [
      { q: 'Apa perbedaan antara BMR dan TDEE?', a: 'BMR adalah kalori yang dibakar tubuh saat istirahat. TDEE menambahkan kalori yang dibakar melalui aktivitas harian dan olahraga.' },
      { q: 'Rumus apa yang digunakan?', a: 'Rumus Mifflin St Jeor, yang dianggap sebagian besar ahli gizi saat ini memberikan perkiraan paling andal untuk sebagian besar bentuk tubuh.' },
    ],
    loan: [
      { q: 'Apa itu bunga berbunga?', a: 'Bunga yang diperoleh setiap periode ditambahkan ke saldo, sehingga kamu mendapatkan bunga dari jumlah awal maupun bunga sebelumnya.' },
      { q: 'Seberapa sering bunga dihitung?', a: 'Setiap bulan, yang umum untuk rekening tabungan dan dana investasi, memberikan gambaran realistis tentang pertumbuhan dari waktu ke waktu.' },
      { q: 'Apakah kalkulator memperhitungkan pajak atau inflasi?', a: 'Tidak, hasilnya menunjukkan pertumbuhan nominal sebelum pajak dan inflasi, dimaksudkan sebagai panduan, bukan nasihat keuangan.' },
    ],
    loancost: [
      { q: 'Bagaimana cicilan bulanan dihitung?', a: 'Menggunakan rumus amortisasi pinjaman standar, yang menghasilkan cicilan bulanan rata di mana porsi bunga menurun dan porsi pokok meningkat seiring waktu.' },
      { q: 'Apa bedanya dengan kalkulator tabungan?', a: 'Kalkulator tabungan menunjukkan bagaimana jumlah yang ditabung tumbuh. Kalkulator ini menunjukkan berapa total biaya sebenarnya dari pinjaman atau pembelian cicilan.' },
    ],
  },
};

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
type ToolFaqs = { units: FaqItem[]; time: FaqItem[]; percent: FaqItem[]; age: FaqItem[]; bmi: FaqItem[]; tdee: FaqItem[]; bmr: FaqItem[]; calorie: FaqItem[]; bodyfat: FaqItem[]; idealweight: FaqItem[]; loan: FaqItem[]; loancost: FaqItem[]; savingsgoal: FaqItem[]; tip: FaqItem[]; salary: FaqItem[]; fraction: FaqItem[]; ratio: FaqItem[]; stddev: FaqItem[] };

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
      { q: 'Är moms samma sak som rabatt, fast tvärtom?', a: 'Ja, rent matematiskt. Rabatt drar bort en procentsats från priset, moms lägger till en. Använd läget "Moms" för att lägga till en procentsats istället för att dra bort den.' },
    ],
    age: [
      { q: 'Hur räknas min exakta ålder ut?', a: 'Kalenderkorrekt från ditt födelsedatum till valt datum, visat i fullständiga år, månader och dagar.' },
      { q: 'Vad visar "totalt antal dagar levda"?', a: 'Det exakta antalet dagar mellan ditt födelsedatum och valt datum, många uppmärksammar runda summor som 10 000 dagar.' },
      { q: 'Kan jag räkna ut min ålder vid ett annat datum?', a: 'Ja, ändra fältet "Räkna fram till" för att se din ålder vid valfritt datum, dåtid eller framtid.' },
    ],
    bmi: [
      { q: 'Stämmer BMI för muskulösa eller vältränade personer?', a: 'Mindre bra. BMI skiljer inte på muskler och fett, så en muskulös person kan visas som överviktig trots låg fettprocent. Se begränsningarna ovan för mer om detta.' },
      { q: 'Hur ofta bör jag mäta mitt BMI?', a: 'För de flesta räcker det att mäta var några månader för att se en trend. BMI förändras långsamt, och dagliga mätningar speglar mest vätskebalans, inte verklig förändring.' },
      { q: 'Vad är skillnaden mellan BMI och kroppsfettprocent?', a: 'BMI är ett förhållande mellan vikt och längd och säger inget om vad vikten består av. Kroppsfettprocent mäter den faktiska andelen fett i förhållande till muskelmassa och är mer exakt — prova vår Kroppsfettkalkylator för en uppskattning baserad på kroppsmått.' },
    ],
    tdee: [
      { q: 'Hur exakt är TDEE?', a: 'Det är en bra uppskattning, inte en exakt mätning. Den individuella ämnesomsättningen varierar med ungefär 10 till 15 procent, så se begränsningarna ovan för hur du justerar den utifrån dina egna resultat.' },
      { q: 'Vilken aktivitetsnivå ska jag välja?', a: 'Välj det alternativ som stämmer med din vanliga vecka, inte din bästa eller sämsta dag. De flesta överskattar hur aktiva de faktiskt är, så välj hellre ett lägre alternativ om du är osäker.' },
      { q: 'Bör jag äta exakt mitt TDEE varje dag?', a: 'Nej, intaget varierar naturligt från dag till dag. Det som spelar roll är genomsnittet över en vecka eller två, så se TDEE som ett mål att sikta mot snarare än en siffra att träffa exakt varje dag.' },
    ],
    bmr: [
      { q: 'Är BMR samma för alla vid samma vikt?', a: 'Nej. Ålder, kön och muskelmassa påverkar alla värdet, vilket är därför formeln tar hänsyn till ålder och kön, och varför två personer med samma vikt kan ha märkbart olika BMR.' },
      { q: 'Bör jag äta exakt mitt BMR?', a: 'Nej, att äta på eller under ditt BMR under längre perioder är inget säkert mål. Kroppen behöver mer än så bara för att ta sig igenom en vanlig dag, så använd TDEE-kalkylatorn för ett realistiskt dagligt kaloritak som tar hänsyn till din aktivitetsnivå.' },
      { q: 'Kan jag höja mitt BMR?', a: 'Till viss del: att bygga muskler höjer det, eftersom muskler förbränner mer energi i vila än fett. Den åldersrelaterade minskningen ligger till stor del utanför din kontroll, och det finns ingen tillförlitlig genväg utöver konsekvent styrketräning och tillräckligt med protein över tid.' },
    ],
    calorie: [
      { q: 'Varför behövs mitt TDEE först?', a: 'Eftersom ett kalorimål bara är meningsfullt i förhållande till en baslinje. Utan att veta ungefär hur många kalorier du förbränner per dag kan en siffra som 1,800 kcal vara ett underskott för en person och ett överskott för en annan.' },
      { q: 'Vilket mål ska jag välja om jag är osäker?', a: 'Börja med bibehåll vikten eller måttligt underskott. Aggressivt underskott ger snabbare viktnedgång på pappret, men det är svårare att hålla i och tar oftare med sig muskler tillsammans med fettet, så det passar bättre som en kort, medveten push än som en långsiktig plan.' },
      { q: 'Är 1 kg verkligen exakt 7,700 kcal?', a: 'Inte exakt. Det är ett ungefärligt genomsnitt som används för planering snarare än en exakt omräkning, och verklig fettförlust varierar något mellan olika personer beroende på kroppssammansättning, så se alla prognoser från det som en uppskattning, inte en garanti.' },
    ],
    bodyfat: [
      { q: 'Hur exakt är US Navy-metoden?', a: 'Den ger en rimlig uppskattning för de flesta kroppstyper, oftast inom några procentenheter från mer exakta metoder som DEXA. Den tenderar att bli mindre exakt för ovanliga kroppsformer eller vid extremt låg eller hög kroppsfettprocent.' },
      { q: 'Var exakt ska jag mäta?', a: 'Mät halsen strax under struphuvudet, midjan vid den smalaste punkten (eller vid naveln om det inte finns någon tydlig smalaste punkt), och för kvinnor höften vid den bredaste punkten. Håll måttbandet stramt men utan att trycka in huden.' },
      { q: 'Varför behövs ett extra mått för kvinnor?', a: 'Formeln tar hänsyn till att fettfördelningen skiljer sig mellan män och kvinnor. Höftmåttet korrigerar för ett mönster som hals och midja ensamma skulle underskatta hos de flesta kvinnor.' },
    ],
    idealweight: [
      { q: 'Varför ger de tre formlerna olika siffror?', a: 'De togs fram oberoende av varandra, med olika referenspopulationer och under olika decennier. Ingen är mer "rätt" än de andra. Spridningen mellan dem är det ärliga svaret, inte en enskild siffra.' },
      { q: 'Vilken formel ska jag använda?', a: 'Det finns ingen given vinnare. Devine är mest citerad i kliniska sammanhang, men alla tre är populationsgenomsnitt, inte personliga mål. Se spridningen som svaret snarare än att välja en.' },
      { q: 'Tar den här hänsyn till muskelmassa eller kroppsbyggnad?', a: 'Nej, formlerna använder bara längd och kön. Någon muskulös eller med större kroppsbyggnad väger rimligen mer än de här siffrorna antyder utan att vara överviktig. Det är precis därför de inte är personlig medicinsk vägledning.' },
    ],
    loan: [
      { q: 'Vad är ränta-på-ränta?', a: 'Räntan du tjänar läggs till kapitalet, så du tjänar ränta på både startbeloppet och tidigare intjänad ränta.' },
      { q: 'Hur ofta beräknas räntan?', a: 'Månadsvis, vilket är vanligt för sparkonton och fonder och ger en realistisk bild av tillväxten.' },
      { q: 'Tar kalkylatorn hänsyn till skatt eller inflation?', a: 'Nej, resultatet visar nominell tillväxt före skatt och inflation, tänkt som vägledning, inte finansiell rådgivning.' },
      { q: 'Hur lång tid tar det för sparandet att dubblas?', a: 'Dela 72 med räntesatsen för en snabb uppskattning. Vid 6 procents ränta tar det ungefär 12 år, se 72-regeln ovan för mer.' },
    ],
    loancost: [
      { q: 'Hur räknas månadskostnaden ut?', a: 'Med den vanliga annuitetsformeln för lån, som ger en jämn månadskostnad där andelen ränta minskar och andelen amortering ökar över tid.' },
      { q: 'Skiljer sig detta från sparkalkylatorn?', a: 'Ja, sparkalkylatorn visar hur ett sparat belopp växer. Den här kalkylatorn visar vad ett lån eller en avbetalning faktiskt kostar dig totalt.' },
      { q: 'Ingår avgifter och försäkringar i totalkostnaden?', a: 'Nej, kalkylatorn visar bara ränte- och amorteringskostnaden utifrån belopp, ränta och löptid. Avgifter, försäkringar och skatter varierar för mycket mellan långivare och länder för att kunna räknas in generellt.' },
    ],
    savingsgoal: [
      { q: 'Vad gör jag om jag redan har tillräckligt sparat?', a: 'Då visas ett meddelande istället för en siffra — ditt nuvarande sparande räcker redan för att nå målet med den avkastning du angett, inget ytterligare månadssparande behövs.' },
      { q: 'Vad händer om jag sänker den förväntade avkastningen?', a: 'Det krävda månadsbeloppet ökar, eftersom en lägre avkastning gör mindre av jobbet åt dig och du behöver bidra med mer själv.' },
      { q: 'Kan jag använda den här för vilket sparmål som helst?', a: 'Ja, kalkylatorn räknar generellt utifrån belopp, tid och avkastning, oavsett om målet är en kontantinsats, en resa eller en buffert.' },
    ],
    tip: [
      { q: 'Är dricksen jag anger inklusive eller exklusive moms?', a: 'Kalkylatorn räknar bara på notans totalbelopp som du anger, oavsett om moms redan är inräknad. Ange det belopp du faktiskt ser på notan.' },
      { q: 'Delas dricksen jämnt även om vi beställde olika mycket?', a: 'Ja, delningen är alltid jämn över antalet personer. Om ni vill dela efter vad var och en åt, får ni räkna ut andelarna separat innan ni anger totalbeloppet.' },
      { q: 'Vad är en rimlig dricks om jag är osäker?', a: '15 procent är en vanlig utgångspunkt i många sammanhang, se referenstabellen ovan, men dricksnormer varierar mycket mellan länder, så det är värt att kolla vad som är brukligt just där du är.' },
    ],
    salary: [
      { q: 'Vilken skattesats ska jag ange?', a: 'Din effektiva skattesats, det vill säga hur stor andel av din totala bruttoinkomst som går till skatt, inte den högsta marginalskattesatsen. Se avsnittet ovan för skillnaden.' },
      { q: 'Räknar den in sociala avgifter eller pensionsavsättningar?', a: 'Nej, kalkylatorn drar bara av den enda procentsats du anger. Om du vill inkludera andra avdrag behöver du räkna in dem i skattesatsen själv, eller dra av dem separat från nettobeloppet.' },
      { q: 'Kan jag använda den här för att deklarera eller planera min skatt?', a: 'Nej, det här är en generell uppskattning, inte skatterådgivning för något specifikt land. Kontrollera alltid mot din lokala skattemyndighet för exakta siffror.' },
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
      { q: 'Is VAT just a discount in reverse?', a: 'Mathematically, yes. A discount subtracts a percentage from the price, VAT adds one. Use the "VAT" mode to add a percentage instead of subtracting it.' },
    ],
    age: [
      { q: 'How is my exact age calculated?', a: 'Calendar-correct from your birth date to the chosen date, shown in full years, months, and days.' },
      { q: 'What does "total days lived" show?', a: 'The exact number of days between your birth date and the chosen date, many like marking round numbers like 10,000 days.' },
      { q: 'Can I calculate my age on a different date?', a: 'Yes, change the "Calculate as of" field to see your age on any date, past or future.' },
    ],
    bmi: [
      { q: 'Is BMI accurate for muscular or athletic people?', a: "Less so. BMI can't tell muscle from fat, so a muscular person may show as overweight despite low body fat. See the limitations above for more on this." },
      { q: 'How often should I check my BMI?', a: 'For most people, every few months is enough to spot a trend, BMI changes slowly and daily checks mostly reflect water weight, not real change.' },
      { q: "What's the difference between BMI and body fat percentage?", a: 'BMI is a ratio of weight to height and says nothing about what that weight is made of. Body fat percentage measures the actual proportion of fat versus lean mass and is more precise — try our Body Fat Calculator for a measurement-based estimate.' },
    ],
    tdee: [
      { q: 'How accurate is TDEE?', a: "It's a solid estimate, not an exact measurement. Individual metabolism varies by roughly 10 to 15%, so see the limitations above for how to adjust it based on your own results." },
      { q: 'Which activity level should I choose?', a: 'Pick the option that matches your typical week, not your best or worst day. Most people overestimate how active they really are, so when in doubt, choose the lower option.' },
      { q: 'Should I eat exactly my TDEE every day?', a: 'No, day-to-day intake naturally varies. What matters is your average over a week or two, so treat TDEE as a target to aim near rather than a number to hit exactly every day.' },
    ],
    bmr: [
      { q: 'Is BMR the same for everyone at the same weight?', a: 'No. Age, sex, and muscle mass all shift it, which is why the formula accounts for age and sex, and why two people at the same weight can have noticeably different BMR.' },
      { q: 'Should I eat exactly my BMR?', a: "No, eating at or below your BMR for long periods isn't a safe target. Your body needs more than that just to get through a normal day, so use the TDEE Calculator to get a realistic daily calorie number that includes your activity level." },
      { q: 'Can I increase my BMR?', a: "To some extent: building muscle raises it, since muscle burns more energy at rest than fat does. Age-related decline is largely outside your control, and there's no reliable shortcut beyond consistent strength training and adequate protein over time." },
    ],
    calorie: [
      { q: 'Why does this need my TDEE first?', a: 'Because a calorie target only makes sense relative to a baseline. Without knowing roughly how many calories you burn in a day, a number like 1,800 kcal could be a deficit for one person and a surplus for another.' },
      { q: 'Which goal should I pick if I\'m not sure?', a: "Start with maintain or mild deficit. Aggressive deficit works faster on paper, but it's harder to sustain and more likely to cost muscle along with fat, so it fits a short, deliberate push better than an ongoing plan." },
      { q: 'Is 1 kg really equal to exactly 7,700 kcal?', a: 'Not exactly. It\'s a rough average used for planning rather than a precise conversion, and real fat loss varies somewhat between people depending on body composition, so treat any projection from it as an estimate, not a guarantee.' },
    ],
    bodyfat: [
      { q: 'How accurate is the US Navy method?', a: "It's a reasonable estimate for most body types, typically within a few percentage points of more precise methods like DEXA. It tends to be less accurate for people with unusual body shapes or body fat levels at the extremes." },
      { q: 'Where exactly should I measure?', a: "Measure your neck just below the larynx, your waist at the narrowest point (or at the navel if there isn't one), and, for women, your hip at the widest point. Keep the tape snug but not compressing the skin." },
      { q: 'Why is there an extra measurement for women?', a: 'The formula accounts for how fat distribution differs between men and women. Adding hip measurement corrects for a pattern that neck and waist alone would underestimate for most women.' },
    ],
    idealweight: [
      { q: 'Why do the three formulas give different numbers?', a: "They were developed independently, using different reference populations and decades. None is more 'correct' than the others. The range between them is the honest answer, not any single number." },
      { q: 'Which formula should I use?', a: "There's no clear winner. Devine is the most widely cited in clinical contexts, but all three are population averages, not personalized targets. Treat the spread as your answer rather than picking one." },
      { q: 'Does this account for muscle mass or body frame?', a: "No, these formulas only use height and sex. Someone muscular or with a larger frame will reasonably weigh more than these numbers suggest without being overweight. That's exactly why they're not personalized medical guidance." },
    ],
    loan: [
      { q: 'What is compound interest?', a: 'The interest you earn each period is added to your balance, so you earn interest on both your starting amount and past interest.' },
      { q: 'How often is interest calculated?', a: 'Monthly, which is common for savings accounts and funds, giving a realistic picture of growth over time.' },
      { q: 'Does the calculator account for tax or inflation?', a: 'No, the result shows nominal growth before tax and inflation, intended as guidance, not financial advice.' },
      { q: 'How long does it take savings to double?', a: 'Divide 72 by the interest rate for a quick estimate. At 6% interest, that’s roughly 12 years, see the Rule of 72 above for more.' },
    ],
    loancost: [
      { q: 'How is the monthly payment calculated?', a: 'Using the standard loan amortization formula, which gives an even monthly payment where the interest portion decreases and the principal portion increases over time.' },
      { q: 'How is this different from the savings calculator?', a: 'The savings calculator shows how a saved amount grows. This calculator shows what a loan or installment purchase actually costs you in total.' },
      { q: 'Does the total cost include fees and insurance?', a: "No, the calculator only shows the interest and principal cost based on amount, rate, and term. Fees, insurance, and taxes vary too much between lenders and countries to include as a general figure." },
    ],
    savingsgoal: [
      { q: 'What if I already have enough saved?', a: "Then a message is shown instead of a number, your current savings already reach the goal at the return you entered, no further monthly savings needed." },
      { q: 'What happens if I lower the expected return?', a: 'The required monthly amount goes up, because a lower return does less of the work for you and you need to contribute more yourself.' },
      { q: 'Can I use this for any savings goal?', a: 'Yes, the calculator works generically from amount, time, and return, whether the goal is a down payment, a trip, or an emergency fund.' },
    ],
    tip: [
      { q: 'Is the bill amount I enter including or excluding tax?', a: "The calculator just works with the total bill amount you enter, whether or not tax is already included. Enter whatever total you actually see on the bill." },
      { q: 'Is the tip split evenly even if we ordered different amounts?', a: 'Yes, the split is always even across the number of people. If you want to split by what each person ordered, work out the shares separately before entering the total.' },
      { q: "What's a reasonable tip if I'm not sure?", a: "15 percent is a common starting point in many contexts, see the reference table above, but tipping norms vary a lot by country, so it's worth checking what's customary where you are." },
    ],
    salary: [
      { q: 'What tax rate should I enter?', a: 'Your effective tax rate, meaning what share of your total gross income goes to tax, not the highest marginal rate. See the section above for the difference.' },
      { q: 'Does it account for social contributions or pension deductions?', a: 'No, the calculator only subtracts the single percentage you enter. If you want to include other deductions, factor them into the rate yourself, or subtract them separately from the net amount.' },
      { q: 'Can I use this to file or plan my taxes?', a: "No, this is a generic estimate, not tax advice for any specific country. Always check against your local tax authority for exact figures." },
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
      { q: 'Imposto é só um desconto ao contrário?', a: 'Matematicamente, sim. Um desconto subtrai uma porcentagem do preço, o imposto soma uma. Use o modo "Imposto" para somar uma porcentagem em vez de subtraí-la.' },
    ],
    age: [
      { q: 'Como minha idade exata é calculada?', a: 'De forma correta no calendário, da sua data de nascimento até a data escolhida, em anos, meses e dias completos.' },
      { q: 'O que mostra "total de dias vividos"?', a: 'O número exato de dias entre seu nascimento e a data escolhida, muitos gostam de marcar números redondos como 10.000 dias.' },
      { q: 'Posso calcular minha idade em outra data?', a: 'Sim, altere o campo "Calcular até" para ver sua idade em qualquer data, passada ou futura.' },
    ],
    bmi: [
      { q: 'O IMC é preciso para pessoas musculosas ou atléticas?', a: 'Menos preciso. O IMC não diferencia músculo de gordura, então uma pessoa musculosa pode aparecer como acima do peso mesmo com baixo percentual de gordura. Veja as limitações acima para saber mais.' },
      { q: 'Com que frequência devo verificar meu IMC?', a: 'Para a maioria das pessoas, a cada poucos meses já é suficiente para notar uma tendência. O IMC muda devagar, e verificações diárias refletem principalmente retenção de líquidos, não uma mudança real.' },
      { q: 'Qual a diferença entre IMC e percentual de gordura corporal?', a: 'O IMC é uma relação entre peso e altura e não diz nada sobre do que esse peso é composto. O percentual de gordura corporal mede a proporção real de gordura em relação à massa magra e é mais preciso — experimente nossa Calculadora de Gordura Corporal para uma estimativa baseada em medidas.' },
    ],
    tdee: [
      { q: 'Quão preciso é o TDEE?', a: 'É uma boa estimativa, não uma medição exata. O metabolismo individual varia cerca de 10 a 15%, então veja as limitações acima para saber como ajustá-lo com base nos seus próprios resultados.' },
      { q: 'Qual nível de atividade devo escolher?', a: 'Escolha a opção que corresponde à sua semana típica, não ao seu melhor ou pior dia. A maioria das pessoas superestima o quanto é ativa, então, na dúvida, escolha a opção mais baixa.' },
      { q: 'Devo comer exatamente meu TDEE todos os dias?', a: 'Não, a ingestão varia naturalmente de um dia para o outro. O que importa é a média ao longo de uma ou duas semanas, então trate o TDEE como uma meta a se aproximar, não um número a bater exatamente todo dia.' },
    ],
    bmr: [
      { q: 'A TMB é a mesma para todos com o mesmo peso?', a: 'Não. Idade, sexo e massa muscular influenciam o valor, por isso a fórmula considera idade e sexo, e por isso duas pessoas com o mesmo peso podem ter uma TMB bem diferente.' },
      { q: 'Devo comer exatamente minha TMB?', a: 'Não, comer na sua TMB ou abaixo dela por longos períodos não é uma meta segura. Seu corpo precisa de mais do que isso só para passar um dia normal, então use a Calculadora de TDEE para obter um número diário de calorias realista que inclua seu nível de atividade.' },
      { q: 'Posso aumentar minha TMB?', a: 'Até certo ponto: ganhar massa muscular a aumenta, já que o músculo queima mais energia em repouso do que a gordura. O declínio relacionado à idade está em grande parte fora do seu controle, e não existe atalho confiável além de treino de força consistente e proteína suficiente ao longo do tempo.' },
    ],
    calorie: [
      { q: 'Por que isso precisa do meu TDEE primeiro?', a: 'Porque uma meta calórica só faz sentido em relação a uma base. Sem saber aproximadamente quantas calorias você queima por dia, um número como 1,800 kcal pode ser um déficit para uma pessoa e um superávit para outra.' },
      { q: 'Qual objetivo devo escolher se não tenho certeza?', a: 'Comece com manter o peso ou déficit leve. O déficit agressivo emagrece mais rápido no papel, mas é mais difícil de manter e mais propenso a custar músculo junto com a gordura, então serve melhor para um esforço curto e deliberado do que para um plano contínuo.' },
      { q: '1 kg é realmente igual a exatamente 7,700 kcal?', a: 'Não exatamente. É uma média aproximada usada para planejamento, não uma conversão precisa, e a perda de gordura real varia um pouco entre as pessoas de acordo com a composição corporal, então trate qualquer projeção feita com ela como uma estimativa, não uma garantia.' },
    ],
    bodyfat: [
      { q: 'Quão precisa é a fórmula da Marinha dos EUA?', a: 'É uma estimativa razoável para a maioria dos tipos de corpo, geralmente dentro de alguns pontos percentuais de métodos mais precisos como o DEXA. Costuma ser menos precisa para formatos corporais incomuns ou níveis extremos de gordura corporal.' },
      { q: 'Onde exatamente devo medir?', a: 'Meça o pescoço logo abaixo da laringe, a cintura no ponto mais estreito (ou na altura do umbigo, se não houver um ponto claro) e, para mulheres, o quadril no ponto mais largo. Mantenha a fita justa, mas sem apertar a pele.' },
      { q: 'Por que há uma medida extra para mulheres?', a: 'A fórmula leva em conta como a distribuição de gordura difere entre homens e mulheres. A medida do quadril corrige um padrão que pescoço e cintura sozinhos subestimariam na maioria das mulheres.' },
    ],
    idealweight: [
      { q: 'Por que as três fórmulas dão números diferentes?', a: 'Elas foram desenvolvidas de forma independente, usando populações de referência e décadas diferentes. Nenhuma é mais "correta" que as outras. A variação entre elas é a resposta honesta, não um único número.' },
      { q: 'Qual fórmula devo usar?', a: 'Não há uma vencedora clara. A Devine é a mais citada em contextos clínicos, mas as três são médias populacionais, não metas personalizadas. Encare a variação como a resposta, em vez de escolher uma.' },
      { q: 'Isso considera massa muscular ou estrutura corporal?', a: 'Não, essas fórmulas usam apenas altura e sexo. Alguém musculoso ou com estrutura corporal maior pode pesar mais do que esses números sugerem sem estar acima do peso. É exatamente por isso que elas não são orientação médica personalizada.' },
    ],
    loan: [
      { q: 'O que são juros compostos?', a: 'Os juros ganhos em cada período são somados ao saldo, então você ganha juros sobre o valor inicial e sobre os juros anteriores.' },
      { q: 'Com que frequência os juros são calculados?', a: 'Mensalmente, comum em contas de poupança e fundos, dando uma visão realista do crescimento ao longo do tempo.' },
      { q: 'A calculadora considera impostos ou inflação?', a: 'Não, o resultado mostra o crescimento nominal antes de impostos e inflação, é uma orientação, não consultoria financeira.' },
      { q: 'Quanto tempo leva para a poupança dobrar?', a: 'Divida 72 pela taxa de juros para uma estimativa rápida. A 6% de juros, são cerca de 12 anos, veja a regra dos 72 acima para mais detalhes.' },
    ],
    loancost: [
      { q: 'Como a parcela mensal é calculada?', a: 'Usando a fórmula padrão de amortização de empréstimos, que dá uma parcela mensal uniforme onde a parte de juros diminui e a parte de amortização aumenta ao longo do tempo.' },
      { q: 'Qual a diferença em relação à calculadora de poupança?', a: 'A calculadora de poupança mostra como um valor poupado cresce. Esta calculadora mostra quanto um empréstimo ou compra parcelada realmente custa no total.' },
      { q: 'O custo total inclui taxas e seguros?', a: 'Não, a calculadora mostra apenas o custo de juros e amortização com base no valor, na taxa e no prazo. Taxas administrativas, seguros e impostos variam demais entre credores e países para entrar num cálculo geral.' },
    ],
    savingsgoal: [
      { q: 'E se eu já tiver o suficiente poupado?', a: 'Então uma mensagem é exibida em vez de um número, sua poupança atual já atinge a meta com o retorno que você informou, sem necessidade de poupança mensal adicional.' },
      { q: 'O que acontece se eu reduzir o retorno esperado?', a: 'O valor mensal necessário aumenta, porque um retorno menor faz menos do trabalho por você e você precisa contribuir mais por conta própria.' },
      { q: 'Posso usar isso para qualquer meta de poupança?', a: 'Sim, a calculadora funciona de forma genérica a partir de valor, prazo e retorno, seja a meta uma entrada, uma viagem ou uma reserva de emergência.' },
    ],
    tip: [
      { q: 'O valor da conta que informo já inclui imposto ou não?', a: 'A calculadora trabalha apenas com o valor total da conta que você informar, esteja o imposto já incluído ou não. Informe o total que você realmente vê na conta.' },
      { q: 'A gorjeta é dividida igualmente mesmo se pedimos quantias diferentes?', a: 'Sim, a divisão é sempre igual entre o número de pessoas. Se quiser dividir pelo que cada um pediu, calcule as partes separadamente antes de informar o total.' },
      { q: 'Qual é uma gorjeta razoável se eu não tiver certeza?', a: '15 por cento é um ponto de partida comum em muitos contextos, veja a tabela de referência acima, mas as normas de gorjeta variam muito entre países, então vale a pena checar o que é costume no lugar onde você está.' },
    ],
    salary: [
      { q: 'Qual alíquota devo informar?', a: 'Sua alíquota efetiva, ou seja, qual parcela da sua renda bruta total vai para impostos, não a maior alíquota marginal. Veja a seção acima para entender a diferença.' },
      { q: 'Ela considera contribuições sociais ou descontos de previdência?', a: 'Não, a calculadora só subtrai a única porcentagem que você informar. Se quiser incluir outras deduções, incorpore-as na alíquota você mesmo, ou subtraia-as separadamente do valor líquido.' },
      { q: 'Posso usar isso para declarar ou planejar meus impostos?', a: 'Não, isso é uma estimativa genérica, não é aconselhamento fiscal para nenhum país específico. Sempre confira com sua autoridade fiscal local para números exatos.' },
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
      { q: '¿El IVA es solo un descuento al revés?', a: 'Matemáticamente, sí. Un descuento resta un porcentaje del precio, el IVA suma uno. Usa el modo "IVA" para sumar un porcentaje en lugar de restarlo.' },
    ],
    age: [
      { q: '¿Cómo se calcula mi edad exacta?', a: 'De forma correcta según el calendario, desde tu fecha de nacimiento hasta la fecha elegida, en años, meses y días completos.' },
      { q: '¿Qué muestra "total de días vividos"?', a: 'El número exacto de días entre tu nacimiento y la fecha elegida, a muchos les gusta celebrar cifras redondas como 10.000 días.' },
      { q: '¿Puedo calcular mi edad en otra fecha?', a: 'Sí, cambia el campo "Calcular a fecha de" para ver tu edad en cualquier fecha, pasada o futura.' },
    ],
    bmi: [
      { q: '¿El IMC es preciso para personas musculosas o atléticas?', a: 'Menos preciso. El IMC no distingue entre músculo y grasa, así que una persona musculosa puede aparecer con sobrepeso aunque tenga poca grasa corporal. Consulta las limitaciones arriba para más detalles.' },
      { q: '¿Con qué frecuencia debo medir mi IMC?', a: 'Para la mayoría de las personas, cada pocos meses es suficiente para detectar una tendencia. El IMC cambia lentamente, y las mediciones diarias reflejan sobre todo retención de líquidos, no un cambio real.' },
      { q: '¿Cuál es la diferencia entre el IMC y el porcentaje de grasa corporal?', a: 'El IMC es una relación entre peso y estatura y no dice nada sobre de qué está hecho ese peso. El porcentaje de grasa corporal mide la proporción real de grasa frente a masa magra y es más preciso — prueba nuestra Calculadora de Grasa Corporal para una estimación basada en medidas.' },
    ],
    tdee: [
      { q: '¿Qué tan preciso es el TDEE?', a: 'Es una buena estimación, no una medición exacta. El metabolismo individual varía en torno a un 10 a 15%, así que consulta las limitaciones arriba para ver cómo ajustarlo según tus propios resultados.' },
      { q: '¿Qué nivel de actividad debo elegir?', a: 'Elige la opción que se ajuste a tu semana típica, no a tu mejor o peor día. La mayoría de la gente sobreestima lo activa que realmente es, así que, si tienes dudas, elige la opción más baja.' },
      { q: '¿Debo comer exactamente mi TDEE todos los días?', a: 'No, la ingesta varía de forma natural de un día a otro. Lo que importa es el promedio a lo largo de una o dos semanas, así que trata el TDEE como una meta a la que acercarte, no una cifra exacta que cumplir cada día.' },
    ],
    bmr: [
      { q: '¿La TMB es la misma para todos con el mismo peso?', a: 'No. La edad, el sexo y la masa muscular influyen en el valor, por eso la fórmula tiene en cuenta la edad y el sexo, y por eso dos personas con el mismo peso pueden tener una TMB bastante distinta.' },
      { q: '¿Debo comer exactamente mi TMB?', a: 'No, comer en tu TMB o por debajo de ella durante mucho tiempo no es una meta segura. Tu cuerpo necesita más que eso solo para pasar un día normal, así que usa la Calculadora de TDEE para obtener una cifra diaria de calorías realista que incluya tu nivel de actividad.' },
      { q: '¿Puedo aumentar mi TMB?', a: 'Hasta cierto punto: ganar masa muscular la aumenta, ya que el músculo quema más energía en reposo que la grasa. El descenso relacionado con la edad está en gran parte fuera de tu control, y no hay ningún atajo fiable más allá de entrenamiento de fuerza constante y suficiente proteína a lo largo del tiempo.' },
    ],
    calorie: [
      { q: '¿Por qué esto necesita primero mi TDEE?', a: 'Porque un objetivo calórico solo tiene sentido en relación con una base. Sin saber aproximadamente cuántas calorías quemas al día, una cifra como 1,800 kcal podría ser un déficit para una persona y un superávit para otra.' },
      { q: '¿Qué objetivo debo elegir si no estoy seguro?', a: 'Empieza con mantener el peso o déficit leve. El déficit agresivo adelgaza más rápido sobre el papel, pero es más difícil de mantener y más probable que cueste músculo además de grasa, así que encaja mejor con un empujón corto y deliberado que con un plan continuo.' },
      { q: '¿1 kg equivale realmente a exactamente 7,700 kcal?', a: 'No exactamente. Es un promedio aproximado usado para planificar, no una conversión precisa, y la pérdida de grasa real varía algo entre personas según la composición corporal, así que trata cualquier proyección basada en ella como una estimación, no una garantía.' },
    ],
    bodyfat: [
      { q: '¿Qué tan precisa es la fórmula de la Marina de EE. UU.?', a: 'Es una estimación razonable para la mayoría de los tipos de cuerpo, normalmente dentro de unos pocos puntos porcentuales de métodos más precisos como el DEXA. Suele ser menos precisa en formas corporales poco habituales o niveles extremos de grasa corporal.' },
      { q: '¿Dónde exactamente debo medir?', a: 'Mide el cuello justo debajo de la laringe, la cintura en el punto más estrecho (o a la altura del ombligo si no hay uno claro) y, en mujeres, la cadera en el punto más ancho. Mantén la cinta ajustada pero sin comprimir la piel.' },
      { q: '¿Por qué hay una medida extra para las mujeres?', a: 'La fórmula tiene en cuenta que la distribución de grasa difiere entre hombres y mujeres. La medida de la cadera corrige un patrón que el cuello y la cintura por sí solos subestimarían en la mayoría de las mujeres.' },
    ],
    idealweight: [
      { q: '¿Por qué las tres fórmulas dan números diferentes?', a: 'Se desarrollaron de forma independiente, con distintas poblaciones de referencia y en décadas diferentes. Ninguna es más "correcta" que las otras. El rango entre ellas es la respuesta honesta, no una cifra única.' },
      { q: '¿Qué fórmula debería usar?', a: 'No hay una ganadora clara. Devine es la más citada en contextos clínicos, pero las tres son promedios poblacionales, no objetivos personalizados. Toma el rango como la respuesta en lugar de elegir una.' },
      { q: '¿Esto tiene en cuenta la masa muscular o la complexión?', a: 'No, estas fórmulas solo usan la estatura y el sexo. Alguien musculoso o con una complexión más grande razonablemente pesará más de lo que sugieren estas cifras sin tener sobrepeso. Por eso mismo no son orientación médica personalizada.' },
    ],
    loan: [
      { q: '¿Qué es el interés compuesto?', a: 'El interés que ganas cada periodo se suma al saldo, así ganas interés tanto sobre el monto inicial como sobre el interés anterior.' },
      { q: '¿Con qué frecuencia se calcula el interés?', a: 'Mensualmente, algo común en cuentas de ahorro y fondos, lo que da una imagen realista del crecimiento con el tiempo.' },
      { q: '¿La calculadora tiene en cuenta impuestos o inflación?', a: 'No, el resultado muestra el crecimiento nominal antes de impuestos e inflación, es una guía, no asesoría financiera.' },
      { q: '¿Cuánto tarda en duplicarse un ahorro?', a: 'Divide 72 entre la tasa de interés para una estimación rápida. Con un 6% de interés, son unos 12 años, consulta la regla del 72 más arriba para más detalle.' },
    ],
    loancost: [
      { q: '¿Cómo se calcula la cuota mensual?', a: 'Con la fórmula estándar de amortización de préstamos, que da una cuota mensual uniforme donde la parte de interés disminuye y la parte de capital aumenta con el tiempo.' },
      { q: '¿En qué se diferencia de la calculadora de ahorro?', a: 'La calculadora de ahorro muestra cómo crece un monto ahorrado. Esta calculadora muestra cuánto cuesta en total un préstamo o una compra a plazos.' },
      { q: '¿El costo total incluye comisiones y seguros?', a: 'No, la calculadora solo muestra el costo de intereses y capital según el monto, la tasa y el plazo. Las comisiones, los seguros y los impuestos varían demasiado entre prestamistas y países para incluirlos en una cifra general.' },
    ],
    savingsgoal: [
      { q: '¿Qué pasa si ya tengo suficiente ahorrado?', a: 'Entonces se muestra un mensaje en lugar de una cifra, tu ahorro actual ya alcanza la meta con el rendimiento que indicaste, sin necesidad de ahorro mensual adicional.' },
      { q: '¿Qué pasa si bajo el rendimiento esperado?', a: 'El monto mensual necesario aumenta, porque un rendimiento menor hace menos trabajo por ti y necesitas aportar más por tu cuenta.' },
      { q: '¿Puedo usar esto para cualquier meta de ahorro?', a: 'Sí, la calculadora funciona de forma genérica a partir del monto, el tiempo y el rendimiento, ya sea la meta un enganche, un viaje o un fondo de emergencia.' },
    ],
    tip: [
      { q: '¿El monto de la cuenta que ingreso incluye o excluye impuestos?', a: 'La calculadora solo trabaja con el monto total de la cuenta que ingreses, ya sea que el impuesto esté incluido o no. Ingresa el total que realmente ves en la cuenta.' },
      { q: '¿La propina se divide en partes iguales aunque pedimos cosas distintas?', a: 'Sí, la división siempre es igual entre el número de personas. Si quieres dividir según lo que pidió cada uno, calcula las partes por separado antes de ingresar el total.' },
      { q: '¿Cuál es una propina razonable si no estoy seguro?', a: 'El 15 por ciento es un punto de partida común en muchos contextos, consulta la tabla de referencia arriba, pero las normas de propina varían mucho entre países, así que vale la pena verificar qué es costumbre donde estés.' },
    ],
    salary: [
      { q: '¿Qué tasa de impuesto debo indicar?', a: 'Tu tasa efectiva de impuesto, es decir, qué porción de tu ingreso bruto total va a impuestos, no la tasa marginal más alta. Consulta la sección anterior para ver la diferencia.' },
      { q: '¿Considera contribuciones sociales o descuentos de pensión?', a: 'No, la calculadora solo resta el único porcentaje que indiques. Si quieres incluir otras deducciones, incorpóralas tú mismo a la tasa, o réstalas por separado del monto neto.' },
      { q: '¿Puedo usar esto para declarar o planificar mis impuestos?', a: 'No, esto es una estimación genérica, no es asesoría fiscal para ningún país específico. Verifica siempre con tu autoridad fiscal local para cifras exactas.' },
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
      { q: 'Ist die MwSt. einfach ein umgekehrter Rabatt?', a: 'Mathematisch gesehen ja. Ein Rabatt zieht einen Prozentsatz vom Preis ab, die MwSt. addiert einen. Nutze den Modus "MwSt.", um einen Prozentsatz zu addieren statt abzuziehen.' },
    ],
    age: [
      { q: 'Wie wird mein exaktes Alter berechnet?', a: 'Kalenderkorrekt von deinem Geburtsdatum bis zum gewählten Datum, angezeigt in vollen Jahren, Monaten und Tagen.' },
      { q: 'Was zeigt "insgesamt gelebte Tage"?', a: 'Die exakte Anzahl der Tage zwischen deiner Geburt und dem gewählten Datum, viele markieren gerne runde Zahlen wie 10.000 Tage.' },
      { q: 'Kann ich mein Alter an einem anderen Datum berechnen?', a: 'Ja, ändere das Feld "Berechnen zum", um dein Alter an jedem beliebigen Datum zu sehen, vergangen oder zukünftig.' },
    ],
    bmi: [
      { q: 'Ist der BMI bei muskulösen oder sportlichen Menschen genau?', a: 'Weniger genau. Der BMI unterscheidet nicht zwischen Muskeln und Fett, sodass muskulöse Personen trotz niedrigem Körperfettanteil als übergewichtig eingestuft werden können. Mehr dazu in den Einschränkungen oben.' },
      { q: 'Wie oft sollte ich meinen BMI prüfen?', a: 'Für die meisten reicht es, alle paar Monate zu messen, um einen Trend zu erkennen. Der BMI ändert sich langsam, und tägliche Messungen spiegeln vor allem den Wasserhaushalt wider, keine echte Veränderung.' },
      { q: 'Was ist der Unterschied zwischen BMI und Körperfettanteil?', a: 'Der BMI ist ein Verhältnis von Gewicht zu Größe und sagt nichts darüber aus, woraus dieses Gewicht besteht. Der Körperfettanteil misst den tatsächlichen Anteil von Fett gegenüber Muskelmasse und ist genauer — probiere unseren Körperfett-Rechner für eine Schätzung anhand von Körpermaßen.' },
    ],
    tdee: [
      { q: 'Wie genau ist der TDEE?', a: 'Er ist eine solide Schätzung, keine exakte Messung. Der individuelle Stoffwechsel variiert um etwa 10 bis 15 Prozent, daher lohnt sich ein Blick auf die Einschränkungen oben, um ihn an die eigenen Ergebnisse anzupassen.' },
      { q: 'Welches Aktivitätslevel sollte ich wählen?', a: 'Wähle die Option, die zu deiner typischen Woche passt, nicht zu deinem besten oder schlechtesten Tag. Die meisten überschätzen, wie aktiv sie wirklich sind, also im Zweifel lieber die niedrigere Option wählen.' },
      { q: 'Sollte ich jeden Tag genau meinen TDEE essen?', a: 'Nein, die Kalorienzufuhr schwankt von Tag zu Tag ganz natürlich. Entscheidend ist der Durchschnitt über ein bis zwei Wochen, daher besser den TDEE als Richtwert sehen, dem man sich annähert, statt als exakten Wert, den man jeden Tag treffen muss.' },
    ],
    bmr: [
      { q: 'Ist der Grundumsatz bei gleichem Gewicht für alle gleich?', a: 'Nein. Alter, Geschlecht und Muskelmasse beeinflussen ihn alle, deshalb berücksichtigt die Formel Alter und Geschlecht, und deshalb können zwei Personen mit demselben Gewicht einen deutlich unterschiedlichen Grundumsatz haben.' },
      { q: 'Sollte ich genau meinen Grundumsatz essen?', a: 'Nein, dauerhaft auf oder unter dem Grundumsatz zu essen ist kein sicheres Ziel. Dein Körper braucht mehr als das, nur um durch einen normalen Tag zu kommen, nutze also den TDEE-Rechner für eine realistische tägliche Kalorienzahl inklusive deines Aktivitätslevels.' },
      { q: 'Kann ich meinen Grundumsatz erhöhen?', a: 'Bis zu einem gewissen Grad: Muskelaufbau erhöht ihn, weil Muskeln in Ruhe mehr Energie verbrennen als Fett. Der altersbedingte Rückgang liegt größtenteils außerhalb deiner Kontrolle, und es gibt keine verlässliche Abkürzung außer konsequentem Krafttraining und ausreichend Protein über die Zeit.' },
    ],
    calorie: [
      { q: 'Warum wird dafür zuerst mein TDEE benötigt?', a: 'Weil ein Kalorienziel nur im Verhältnis zu einer Ausgangsbasis Sinn ergibt. Ohne zu wissen, wie viele Kalorien du ungefähr am Tag verbrauchst, könnte eine Zahl wie 1,800 kcal für die eine Person ein Defizit und für eine andere ein Überschuss sein.' },
      { q: 'Welches Ziel sollte ich wählen, wenn ich mir nicht sicher bin?', a: 'Beginne mit Gewicht halten oder leichtem Defizit. Ein aggressives Defizit lässt das Gewicht auf dem Papier schneller sinken, ist aber schwerer durchzuhalten und geht eher auch auf Kosten von Muskelmasse statt nur Fett, daher passt es besser zu einem kurzen, bewussten Push als zu einem dauerhaften Plan.' },
      { q: 'Entspricht 1 kg wirklich genau 7,700 kcal?', a: 'Nicht genau. Es ist ein grober Durchschnittswert für die Planung, keine präzise Umrechnung, und der tatsächliche Fettabbau variiert je nach Körperzusammensetzung etwas von Person zu Person, daher solltest du jede daraus abgeleitete Prognose als Schätzung behandeln, nicht als Garantie.' },
    ],
    bodyfat: [
      { q: 'Wie genau ist die US-Navy-Methode?', a: 'Sie liefert für die meisten Körpertypen eine vernünftige Schätzung, meist innerhalb weniger Prozentpunkte genauerer Methoden wie DEXA. Bei ungewöhnlichen Körperformen oder sehr niedrigem oder hohem Körperfettanteil wird sie tendenziell ungenauer.' },
      { q: 'Wo genau soll ich messen?', a: 'Miss den Hals direkt unterhalb des Kehlkopfs, die Taille an der schmalsten Stelle (oder auf Bauchnabelhöhe, falls es keine eindeutig schmalste Stelle gibt) und bei Frauen die Hüfte an der breitesten Stelle. Halte das Maßband stramm, ohne die Haut einzudrücken.' },
      { q: 'Warum gibt es bei Frauen ein zusätzliches Maß?', a: 'Die Formel berücksichtigt, dass sich die Fettverteilung zwischen Männern und Frauen unterscheidet. Das Hüftmaß gleicht ein Muster aus, das Hals und Taille allein bei den meisten Frauen unterschätzen würden.' },
    ],
    idealweight: [
      { q: 'Warum ergeben die drei Formeln unterschiedliche Zahlen?', a: 'Sie wurden unabhängig voneinander entwickelt, mit unterschiedlichen Referenzpopulationen und in verschiedenen Jahrzehnten. Keine ist "richtiger" als die anderen. Die Spanne zwischen ihnen ist die ehrliche Antwort, keine einzelne Zahl.' },
      { q: 'Welche Formel sollte ich verwenden?', a: 'Es gibt keinen klaren Sieger. Devine wird im klinischen Kontext am häufigsten zitiert, aber alle drei sind Bevölkerungsdurchschnitte, keine personalisierten Ziele. Betrachte die Spanne als Antwort, statt eine auszuwählen.' },
      { q: 'Berücksichtigt das Muskelmasse oder Körperbau?', a: 'Nein, diese Formeln verwenden nur Größe und Geschlecht. Jemand Muskulöses oder mit größerem Körperbau wiegt vernünftigerweise mehr, als diese Zahlen nahelegen, ohne übergewichtig zu sein. Genau deshalb sind sie keine personalisierte medizinische Beratung.' },
    ],
    loan: [
      { q: 'Was ist Zinseszins?', a: 'Die Zinsen, die du jede Periode verdienst, werden dem Saldo hinzugefügt, sodass du Zinsen auf den Startbetrag und frühere Zinsen verdienst.' },
      { q: 'Wie oft werden die Zinsen berechnet?', a: 'Monatlich, üblich bei Sparkonten und Fonds, was ein realistisches Bild des Wachstums über die Zeit gibt.' },
      { q: 'Berücksichtigt der Rechner Steuern oder Inflation?', a: 'Nein, das Ergebnis zeigt das nominale Wachstum vor Steuern und Inflation, gedacht als Orientierung, keine Finanzberatung.' },
      { q: 'Wie lange dauert es, bis sich Erspartes verdoppelt?', a: 'Teile 72 durch den Zinssatz für eine schnelle Schätzung. Bei 6 % Zinsen sind das ungefähr 12 Jahre, siehe die 72er-Regel oben für mehr.' },
    ],
    loancost: [
      { q: 'Wie wird die monatliche Rate berechnet?', a: 'Mit der üblichen Tilgungsformel für Kredite, die eine gleichbleibende monatliche Rate ergibt, bei der der Zinsanteil sinkt und der Tilgungsanteil mit der Zeit steigt.' },
      { q: 'Wie unterscheidet sich das vom Sparrechner?', a: 'Der Sparrechner zeigt, wie ein gespartes Guthaben wächst. Dieser Rechner zeigt, was ein Kredit oder Ratenkauf dich insgesamt tatsächlich kostet.' },
      { q: 'Sind Gebühren und Versicherungen in den Gesamtkosten enthalten?', a: 'Nein, der Rechner zeigt nur die Zins- und Tilgungskosten basierend auf Betrag, Zinssatz und Laufzeit. Gebühren, Versicherungen und Steuern unterscheiden sich zu stark zwischen Kreditgebern und Ländern, um sie allgemein einzurechnen.' },
    ],
    savingsgoal: [
      { q: 'Was, wenn ich schon genug gespart habe?', a: 'Dann wird eine Meldung statt einer Zahl angezeigt, dein aktuelles Erspartes erreicht das Ziel bei der angegebenen Rendite bereits, kein weiteres monatliches Sparen nötig.' },
      { q: 'Was passiert, wenn ich die erwartete Rendite senke?', a: 'Der benötigte monatliche Betrag steigt, weil eine niedrigere Rendite weniger Arbeit für dich übernimmt und du selbst mehr beitragen musst.' },
      { q: 'Kann ich das für jedes Sparziel verwenden?', a: 'Ja, der Rechner funktioniert allgemein anhand von Betrag, Zeit und Rendite, egal ob das Ziel eine Anzahlung, eine Reise oder ein Notgroschen ist.' },
    ],
    tip: [
      { q: 'Ist der eingegebene Rechnungsbetrag inklusive oder exklusive Steuer?', a: 'Der Rechner arbeitet nur mit dem gesamten Rechnungsbetrag, den du eingibst, unabhängig davon, ob Steuer bereits enthalten ist. Gib den Betrag ein, den du tatsächlich auf der Rechnung siehst.' },
      { q: 'Wird das Trinkgeld gleich geteilt, auch wenn wir unterschiedlich viel bestellt haben?', a: 'Ja, die Teilung erfolgt immer gleichmäßig über die Personenzahl. Wenn du nach dem teilen willst, was jede Person bestellt hat, rechne die Anteile separat aus, bevor du den Gesamtbetrag eingibst.' },
      { q: 'Was ist ein angemessenes Trinkgeld, wenn ich unsicher bin?', a: '15 Prozent sind in vielen Zusammenhängen ein üblicher Ausgangspunkt, siehe die Referenztabelle oben, aber Trinkgeldnormen unterscheiden sich stark je nach Land, es lohnt sich also zu prüfen, was dort üblich ist, wo du bist.' },
    ],
    salary: [
      { q: 'Welchen Steuersatz sollte ich eingeben?', a: 'Deinen effektiven Steuersatz, also welcher Anteil deines gesamten Bruttoeinkommens an Steuern geht, nicht den höchsten Grenzsteuersatz. Siehe den Abschnitt oben für den Unterschied.' },
      { q: 'Berücksichtigt er Sozialabgaben oder Rentenbeiträge?', a: 'Nein, der Rechner zieht nur den einen Prozentsatz ab, den du eingibst. Wenn du weitere Abzüge einbeziehen willst, rechne sie selbst in den Satz ein oder ziehe sie separat vom Nettobetrag ab.' },
      { q: 'Kann ich das für meine Steuererklärung oder -planung nutzen?', a: 'Nein, das ist eine generische Schätzung, keine Steuerberatung für ein bestimmtes Land. Prüfe für genaue Zahlen immer bei deiner lokalen Steuerbehörde nach.' },
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
      { q: '消費税は割引の逆のようなものですか？', a: '計算としてはその通りです。割引は価格からパーセントを引き、消費税はパーセントを足します。パーセントを引くのではなく足したい場合は「消費税」モードを使ってください。' },
    ],
    age: [
      { q: '正確な年齢はどう計算されますか？', a: '生年月日から指定日までカレンダーに基づき正確に計算され、年・月・日で表示されます。' },
      { q: '「生きた日数の合計」は何を示しますか？', a: '生年月日から指定日までの正確な日数で、10,000日など節目の日を記念する人も多いです。' },
      { q: '別の日付での年齢も計算できますか？', a: 'はい、「基準日」を変更すれば過去や未来の任意の日付での年齢を確認できます。' },
    ],
    bmi: [
      { q: '筋肉質やアスリート体型の人にもBMIは正確ですか？', a: 'あまり正確ではありません。BMIは筋肉と脂肪を区別できないため、筋肉質な人は体脂肪率が低くても肥満と表示されることがあります。詳しくは上記の限界の説明をご覧ください。' },
      { q: 'BMIはどのくらいの頻度で確認すればいいですか？', a: '多くの場合、数か月ごとの確認で傾向をつかむには十分です。BMIはゆっくり変化するため、毎日の測定は実際の変化よりも水分量の変動を反映していることがほとんどです。' },
      { q: 'BMIと体脂肪率の違いは何ですか？', a: 'BMIは体重と身長の比率であり、その体重が何でできているかは示しません。体脂肪率は脂肪と除脂肪量の実際の割合を測定するためより正確です — 体のサイズから推定する体脂肪率計算機もぜひお試しください。' },
    ],
    tdee: [
      { q: 'TDEEはどのくらい正確ですか？', a: 'しっかりした推定値ではありますが、正確な測定値ではありません。個人の代謝は10〜15%ほど変動するため、自分の結果に合わせて調整する方法は上記の「限界」をご覧ください。' },
      { q: 'どの活動レベルを選べばいいですか？', a: '一番良い日や悪い日ではなく、普段の1週間に近い選択肢を選んでください。多くの人は自分の活動量を実際より高く見積もりがちなので、迷ったら低めの選択肢を選ぶのがおすすめです。' },
      { q: '毎日TDEEぴったりのカロリーを摂るべきですか？', a: 'いいえ、日々の摂取量は自然に変動します。大切なのは1〜2週間の平均であり、TDEEは毎日ぴったり合わせる数値ではなく、目安として近づけていく目標として捉えてください。' },
    ],
    bmr: [
      { q: '同じ体重なら誰でもBMRは同じですか？', a: 'いいえ。年齢、性別、筋肉量がすべてBMRに影響するため、式には年齢と性別が組み込まれており、同じ体重でも人によってBMRがかなり異なることがあります。' },
      { q: '自分のBMRぴったりの量を食べるべきですか？', a: 'いいえ、長期間BMR以下または同程度の量しか食べないのは安全な目標ではありません。普通の1日を過ごすだけでもそれ以上のカロリーが必要なので、活動レベルを考慮した現実的な1日の必要カロリーを知るにはTDEE計算機を使ってください。' },
      { q: 'BMRを上げることはできますか？', a: 'ある程度は可能です。筋肉は安静時でも脂肪より多くのエネルギーを消費するため、筋肉をつけるとBMRは上がります。加齢による低下の多くは自分でコントロールできませんが、継続的な筋力トレーニングと十分なタンパク質摂取以外に確実な近道はありません。' },
    ],
    calorie: [
      { q: 'なぜ最初にTDEEが必要なのですか？', a: 'カロリー目標は基準値との比較で初めて意味を持つからです。1日に燃焼するおおよそのカロリーが分からなければ、1,800kcalという数字も、ある人にとっては不足量になり、別の人にとっては余剰量になり得ます。' },
      { q: '迷ったらどの目標を選べばいいですか？', a: '維持または軽度のカロリー不足から始めてください。積極的なカロリー不足は数字の上では速く減量できますが、続けるのが難しく、脂肪と一緒に筋肉も失いやすいため、長期的な計画よりも短期集中の取り組みに向いています。' },
      { q: '1kgは本当にちょうど7,700kcalに相当するのですか？', a: '正確にはそうではありません。これは計画のためのおおまかな平均値であり、正確な換算式ではなく、実際の脂肪減少は体組成によって人によってある程度異なるため、そこから導いた予測はあくまで目安として捉え、保証と考えないでください。' },
    ],
    bodyfat: [
      { q: 'US Navy法はどのくらい正確ですか？', a: '多くの体型で妥当な推定値が得られ、DEXA法などより正確な方法との差は数パーセントポイント程度が一般的です。特殊な体型や、体脂肪率が極端に低い・高い場合は精度が下がる傾向があります。' },
      { q: '正確にはどこを測ればいいですか？', a: '首は喉頭のすぐ下、ウエストは最も細い部分（明確なくびれがない場合はへその高さ）、女性の場合はヒップを最も広い部分で測ってください。メジャーは肌に食い込ませず、ぴったりと沿わせてください。' },
      { q: 'なぜ女性だけ測定項目が一つ多いのですか？', a: 'この式は、男女で脂肪の付き方が異なることを考慮しています。ヒップの測定値を加えることで、首とウエストだけでは多くの女性で過小評価されてしまう部分を補正しています。' },
    ],
    idealweight: [
      { q: 'なぜ3つの式で数値が違うのですか？', a: 'それぞれ独立して、異なる基準集団と異なる年代に基づいて作られたためです。どれか一つが他より「正しい」ということはありません。単一の数値ではなく、それらの間のばらつきこそが誠実な答えです。' },
      { q: 'どの式を使えばいいですか？', a: '明確な正解はありません。Devine式は臨床の現場で最もよく引用されますが、3つとも集団の平均値であり、個人向けの目標値ではありません。一つを選ぶのではなく、ばらつき自体を答えとして捉えてください。' },
      { q: 'これは筋肉量や骨格の大きさを考慮していますか？', a: 'いいえ、これらの式は身長と性別しか使っていません。筋肉質な人や骨格が大きい人は、太りすぎでなくてもこれらの数値より妥当に重くなります。だからこそ、これは個人向けの医学的アドバイスではないのです。' },
    ],
    loan: [
      { q: '複利とは何ですか？', a: '各期間で得た利息が元本に加算され、元本と過去の利息の両方に利息がつく仕組みです。' },
      { q: '利息はどのくらいの頻度で計算されますか？', a: '毎月計算され、預金や投資信託で一般的な方式で、時間とともに増える様子を現実的に示します。' },
      { q: '税金やインフレは考慮されますか？', a: 'いいえ、結果は税金やインフレ前の名目成長を示すもので、助言ではなく目安としてご利用ください。' },
      { q: '貯蓄が2倍になるまでどれくらいかかりますか？', a: '72を金利で割ると素早く目安がわかります。金利6%なら約12年です。詳しくは上記の72の法則をご覧ください。' },
    ],
    loancost: [
      { q: '月々の返済額はどう計算されますか?', a: '標準的なローン償却方式を使用しており、利息部分が減少し元金部分が時間とともに増加する、均等な月々の返済額が算出されます。' },
      { q: '積立計算機との違いは何ですか?', a: '積立計算機は積み立てた金額がどう増えるかを示します。このツールはローンや分割払いが実際に総額でいくらかかるかを示します。' },
      { q: '総費用には手数料や保険料も含まれますか?', a: 'いいえ、この計算機は借入額・金利・返済期間に基づく利息と元金のコストのみを示します。手数料、保険料、税金は貸し手や国によって差が大きいため、一般的な数値としては含めていません。' },
    ],
    savingsgoal: [
      { q: 'すでに十分な貯蓄がある場合はどうなりますか?', a: 'その場合は数値の代わりにメッセージが表示されます。入力した利回りで現在の貯蓄額がすでに目標に達しているため、追加の毎月の貯蓄は必要ありません。' },
      { q: '期待利回りを下げるとどうなりますか?', a: '必要な毎月の金額が増えます。利回りが低いとそれだけ運用が担ってくれる部分が減り、自分で多く積み立てる必要があるからです。' },
      { q: 'どんな貯蓄目標にも使えますか?', a: 'はい、この計算機は金額・期間・利回りから一般的に計算するので、頭金でも旅行でも緊急資金でも目標として使えます。' },
    ],
    tip: [
      { q: '入力する会計金額は税込みですか、税抜きですか?', a: 'この計算機は、税込みかどうかにかかわらず、あなたが入力した会計の合計金額だけを扱います。実際に会計で目にする合計金額を入力してください。' },
      { q: '注文した内容が違っていてもチップは均等に割られますか?', a: 'はい、常に人数で均等に割られます。各自が注文したものに応じて分けたい場合は、合計金額を入力する前に別途それぞれの取り分を計算してください。' },
      { q: '迷ったときの目安となるチップの割合は?', a: '多くの場面で15%が一般的な出発点です（上記の参考表を参照）。ただしチップの習慣は国によって大きく異なるため、その土地の慣習を確認する価値があります。' },
    ],
    salary: [
      { q: 'どの税率を入力すればいいですか?', a: '最も高い限界税率ではなく、実効税率、つまり総支給額のうちどれだけの割合が税金になるかを入力してください。違いについては上記のセクションをご覧ください。' },
      { q: '社会保険料や年金の控除は考慮されますか?', a: 'いいえ、この計算機はあなたが入力した単一のパーセントのみを差し引きます。他の控除を含めたい場合は、税率に自分で織り込むか、手取り額から別途差し引いてください。' },
      { q: 'これを確定申告や税金の計画に使えますか?', a: 'いいえ、これは一般的な見積もりであり、特定の国の税務アドバイスではありません。正確な数値については、必ず現地の税務当局に確認してください。' },
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
      { q: '增值税是不是相当于反向的折扣？', a: '在数学上是的。折扣是从价格中减去一个百分比，增值税是加上一个百分比。使用"增值税"模式来加上百分比，而不是减去。' },
    ],
    age: [
      { q: '我的精确年龄是如何计算的？', a: '根据日历规则，从出生日期计算到指定日期，以完整的年、月、日显示。' },
      { q: '"已度过的总天数"显示什么？', a: '出生日期与指定日期之间的精确天数, 很多人喜欢纪念整数天数，比如一万天。' },
      { q: '可以计算其他日期的年龄吗？', a: '可以，更改"计算截止日期"字段即可查看过去或未来任意日期的年龄。' },
    ],
    bmi: [
      { q: 'BMI对肌肉发达或运动员体型的人准确吗？', a: '不太准确。BMI无法区分肌肉和脂肪，因此肌肉发达的人即使体脂率很低，也可能被归为超重。更多内容见上文的局限性说明。' },
      { q: '应该多久测一次BMI？', a: '对大多数人来说，每隔几个月测一次就足以观察趋势，BMI变化缓慢，每天测量的波动大多反映的是水分变化，而非真实变化。' },
      { q: 'BMI和体脂率有什么区别？', a: 'BMI是体重与身高的比值，无法说明这些体重具体由什么构成。体脂率衡量的是脂肪相对于瘦体重的实际比例，更加精确——可以试试我们的体脂率计算器，通过身体围度来估算。' },
    ],
    tdee: [
      { q: 'TDEE有多准确？', a: '它是一个可靠的估算值，而不是精确测量。个体代谢会有大约10%至15%的差异，具体如何根据自己的实际情况调整，可参考上文的局限性说明。' },
      { q: '应该选择哪个活动水平？', a: '选择最符合你日常一周状态的选项，而不是最好或最差的那一天。大多数人会高估自己的活跃程度，所以如果拿不准，选低一档更稳妥。' },
      { q: '每天摄入的热量必须刚好等于TDEE吗？', a: '不需要，每天的摄入量本来就会有自然波动。真正重要的是一到两周的平均值，把TDEE当作一个大致靠近的目标，而不是每天都要精确达到的数字。' },
    ],
    bmr: [
      { q: '体重相同的人BMR都一样吗？', a: '不一样。年龄、性别和肌肉量都会影响BMR，这也是公式中要考虑年龄和性别的原因，也是为什么体重相同的两个人BMR可能相差不小。' },
      { q: '我应该刚好摄入等于BMR的热量吗？', a: '不需要，长期只摄入等于或低于BMR的热量并不是一个安全的目标。你的身体即使只是度过普通的一天，也需要比这更多的热量，所以可以用TDEE计算器获得一个把活动水平也算进去的、更现实的每日热量数字。' },
      { q: '我能提高自己的BMR吗？', a: '在一定程度上可以：增加肌肉量能提高BMR，因为肌肉在静息状态下消耗的能量比脂肪多。随年龄增长而出现的下降大多不受你控制，除了持续的力量训练和长期摄入足够的蛋白质之外，没有什么可靠的捷径。' },
    ],
    calorie: [
      { q: '为什么需要先知道我的TDEE？', a: '因为热量目标只有相对于一个基准才有意义。如果不知道自己每天大致消耗多少热量，像1,800千卡这样的数字，对一个人来说可能是热量缺口，对另一个人来说却可能是热量盈余。' },
      { q: '如果不确定，应该选哪个目标？', a: '可以先从维持体重或轻度热量缺口开始。大幅热量缺口在数字上减重更快，但更难坚持，也更容易在减脂的同时流失肌肉，所以它更适合短期、有计划的冲刺，而不是长期方案。' },
      { q: '1公斤真的正好等于7,700千卡吗？', a: '并不完全精确。这只是一个用于规划的大致平均值，而不是精确的换算，实际的脂肪减少会因体成分不同而因人而异，所以任何基于它得出的预测都应视为估算，而不是保证。' },
    ],
    bodyfat: [
      { q: '美国海军法有多准确？', a: '对大多数体型来说，它能给出合理的估算，通常与DEXA等更精确方法相差几个百分点以内。对于体型特殊或体脂率处于极端水平的人，准确度会有所下降。' },
      { q: '具体应该在哪里测量？', a: '在喉结下方测量颈围，在最窄处测量腰围（如果没有明显最窄处，可在肚脐处测量），女性还需在最宽处测量臀围。卷尺要贴合但不要勒紧皮肤。' },
      { q: '为什么女性要多测一项？', a: '这个公式考虑了男女脂肪分布的差异。加入臀围测量，是为了修正仅凭颈围和腰围会对大多数女性造成的低估。' },
    ],
    idealweight: [
      { q: '为什么三个公式给出的数字不一样？', a: '它们是各自独立开发的，使用了不同的参考人群，也来自不同的年代。没有哪一个比其他更「正确」。它们之间的差异范围才是诚实的答案，而不是某一个具体数字。' },
      { q: '我应该用哪个公式？', a: '没有明确的最佳答案。Devine公式在临床场景中被引用最多，但三者都只是群体平均值，不是个人化的目标。与其挑选一个，不如把这个差异范围本身当作答案。' },
      { q: '这个计算考虑肌肉量或骨架大小吗？', a: '不考虑，这些公式只使用身高和性别。肌肉发达或骨架较大的人，体重合理地会比这些数字建议的更重，但并不代表超重。这正是它们不能作为个人医疗建议的原因。' },
    ],
    loan: [
      { q: '什么是复利？', a: '每期获得的利息会计入本金，因此你既能从本金又能从之前的利息中获得利息。' },
      { q: '利息计算的频率是多少？', a: '按月计算，这在储蓄账户和基金中很常见，能更真实地反映长期增长情况。' },
      { q: '计算器是否考虑税收或通货膨胀？', a: '不考虑，结果显示的是税前和通胀前的名义增长, 仅供参考，非财务建议。' },
      { q: '存款翻倍需要多长时间？', a: '用72除以利率即可快速估算。以6%的利率计算，大约需要12年，详见上面的72法则。' },
    ],
    loancost: [
      { q: '每月还款额是如何计算的?', a: '使用标准的贷款摊销公式, 得出一个均等的月还款额, 其中利息部分逐渐减少, 本金部分逐渐增加。' },
      { q: '这与储蓄计算器有什么不同?', a: '储蓄计算器显示存款金额如何增长。这个计算器显示贷款或分期付款实际总共要花费多少。' },
      { q: '总费用包含手续费和保险吗?', a: '不包含，这个计算器只显示基于金额、利率和期限的利息和本金成本。手续费、保险和税费在不同贷款机构和国家之间差异太大，无法计入一个通用数字。' },
    ],
    savingsgoal: [
      { q: '如果我已经存够了怎么办?', a: '那样会显示一条提示信息而不是数字——按照你输入的回报率，你目前的储蓄已经达到目标，不需要额外的月储蓄。' },
      { q: '如果我降低预期回报率会怎样?', a: '所需月储蓄额会增加，因为较低的回报率能为你完成的部分变少，你自己需要投入更多。' },
      { q: '这个可以用于任何储蓄目标吗?', a: '可以，这个计算器基于金额、时间和回报率通用计算，无论目标是首付款、旅行还是应急基金都适用。' },
    ],
    tip: [
      { q: '我输入的账单金额是含税还是不含税?', a: '这个计算器只处理你输入的账单总金额，不管是否已经含税。请输入你在账单上实际看到的总金额。' },
      { q: '即使我们点的东西不一样，小费也会平均分摊吗?', a: '是的，分摊始终按人数平均进行。如果你想按每个人实际点的东西来分摊，需要在输入总金额之前自行分别计算各自的份额。' },
      { q: '如果不确定，多少小费比较合理?', a: '在很多场合，15%是一个常见的起点，可参考上面的参考表，但不同国家的小费习惯差异很大，值得先了解你所在地方的通行做法。' },
    ],
    salary: [
      { q: '我应该输入什么税率?', a: '应输入你的实际税率，也就是总税前收入中有多少比例用于纳税，而不是最高边际税率。两者的区别请见上面的说明。' },
      { q: '它是否考虑社保或养老金扣除?', a: '不考虑，这个计算器只会减去你输入的那一个百分比。如果你想计入其他扣除项，需要自己把它们折算进税率，或者从净收入中单独减去。' },
      { q: '我可以用这个来报税或做税务规划吗?', a: '不可以，这只是一个通用估算，并非针对任何特定国家的税务建议。具体数字请务必咨询当地税务机关。' },
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
      { q: '부가세는 그냥 반대 방향의 할인인가요?', a: '수학적으로는 그렇습니다. 할인은 가격에서 퍼센트를 빼고, 부가세는 퍼센트를 더합니다. 퍼센트를 빼는 대신 더하려면 "부가세" 모드를 사용하세요.' },
    ],
    age: [
      { q: '정확한 나이는 어떻게 계산되나요?', a: '생년월일부터 선택한 날짜까지 달력 기준으로 정확히 계산되어 년, 월, 일로 표시됩니다.' },
      { q: '"살아온 총 일수"는 무엇을 보여주나요?', a: '생년월일부터 선택한 날짜까지의 정확한 일수로, 많은 사람들이 10,000일과 같은 특별한 날을 기념합니다.' },
      { q: '다른 날짜의 나이도 계산할 수 있나요?', a: '네, "기준 날짜" 필드를 변경하면 과거나 미래의 어떤 날짜에서의 나이도 확인할 수 있습니다.' },
    ],
    bmi: [
      { q: '근육질이거나 운동선수 체형인 사람에게도 BMI가 정확한가요?', a: '덜 정확합니다. BMI는 근육과 지방을 구분하지 못하기 때문에, 체지방률이 낮아도 근육질인 사람은 과체중으로 표시될 수 있습니다. 자세한 내용은 위의 한계점을 참고하세요.' },
      { q: 'BMI는 얼마나 자주 확인해야 하나요?', a: '대부분의 경우 몇 달에 한 번씩 확인하는 것으로 추세를 파악하기에 충분합니다. BMI는 천천히 변하며, 매일 측정하면 실제 변화보다는 대부분 수분 변화를 반영합니다.' },
      { q: 'BMI와 체지방률의 차이는 무엇인가요?', a: 'BMI는 체중과 키의 비율일 뿐, 그 체중이 무엇으로 이루어져 있는지는 알려주지 않습니다. 체지방률은 지방과 제지방량의 실제 비율을 측정하므로 더 정확합니다 — 신체 치수를 기반으로 추정하는 체지방률 계산기를 사용해 보세요.' },
    ],
    tdee: [
      { q: 'TDEE는 얼마나 정확한가요?', a: 'TDEE는 꽤 믿을 만한 추정치이지만 정확한 측정값은 아닙니다. 개인의 대사량은 약 10~15% 차이가 날 수 있으니, 자신의 실제 결과에 맞춰 조정하는 방법은 위의 한계점을 참고하세요.' },
      { q: '어떤 활동 수준을 선택해야 하나요?', a: '가장 컨디션이 좋았던 날이나 나빴던 날이 아니라, 평소 일주일을 기준으로 가장 가까운 옵션을 선택하세요. 대부분의 사람은 자신의 활동량을 실제보다 높게 평가하는 경향이 있으니, 확실하지 않다면 더 낮은 옵션을 선택하는 편이 좋습니다.' },
      { q: '매일 정확히 TDEE만큼 먹어야 하나요?', a: '아니요, 하루하루의 섭취량은 자연스럽게 달라집니다. 중요한 것은 1~2주간의 평균이므로, TDEE는 매일 정확히 맞춰야 하는 숫자가 아니라 대략적으로 가까워지려는 목표로 생각하세요.' },
    ],
    bmr: [
      { q: '체중이 같으면 BMR도 모두 같나요?', a: '아니요. 나이, 성별, 근육량이 모두 BMR에 영향을 미치기 때문에 공식에 나이와 성별이 포함되어 있으며, 체중이 같아도 사람마다 BMR이 꽤 다를 수 있습니다.' },
      { q: '제 BMR만큼만 먹어야 하나요?', a: '아니요, 장기간 BMR 이하 또는 그 정도로만 먹는 것은 안전한 목표가 아닙니다. 평범한 하루를 보내는 데도 그보다 더 많은 칼로리가 필요하니, 활동 수준까지 반영한 현실적인 일일 칼로리 수치를 알고 싶다면 TDEE 계산기를 사용하세요.' },
      { q: 'BMR을 높일 수 있나요?', a: '어느 정도는 가능합니다. 근육은 휴식 중에도 지방보다 더 많은 에너지를 소비하므로 근육을 키우면 BMR이 올라갑니다. 나이가 들면서 나타나는 감소는 대부분 스스로 조절하기 어려우며, 꾸준한 근력 운동과 충분한 단백질 섭취 외에는 확실한 지름길이 없습니다.' },
    ],
    calorie: [
      { q: '왜 먼저 제 TDEE가 필요한가요?', a: '칼로리 목표는 기준선과 비교했을 때만 의미가 있기 때문입니다. 하루에 대략 얼마나 많은 칼로리를 소비하는지 모르면, 1,800kcal 같은 수치도 어떤 사람에게는 결손이고 다른 사람에게는 잉여일 수 있습니다.' },
      { q: '잘 모르겠다면 어떤 목표를 선택해야 하나요?', a: '유지 또는 가벼운 칼로리 결손부터 시작하세요. 적극적인 칼로리 결손은 수치상으로는 더 빨리 체중을 줄이지만 유지하기 어렵고 지방과 함께 근육도 잃기 쉬워서, 장기 계획보다는 짧고 의도적인 집중 기간에 더 적합합니다.' },
      { q: '1kg이 정말 정확히 7,700kcal와 같나요?', a: '정확히는 아닙니다. 이는 계획을 위한 대략적인 평균값이지 정확한 환산값이 아니며, 실제 지방 감소는 체구성에 따라 사람마다 어느 정도 다르므로, 이를 바탕으로 한 예측은 보장이 아니라 추정치로 받아들이세요.' },
    ],
    bodyfat: [
      { q: '미 해군 방식은 얼마나 정확한가요?', a: '대부분의 체형에서 합리적인 추정치를 제공하며, 보통 DEXA 같은 더 정밀한 방법과 몇 퍼센트포인트 이내로 차이가 납니다. 체형이 특이하거나 체지방률이 극단적으로 낮거나 높은 경우에는 정확도가 떨어지는 경향이 있습니다.' },
      { q: '정확히 어디를 측정해야 하나요?', a: '목은 후두 바로 아래를, 허리는 가장 좁은 부분(뚜렷한 지점이 없다면 배꼽 높이)을, 여성의 경우 엉덩이는 가장 넓은 부분을 측정하세요. 줄자는 피부를 누르지 않으면서 밀착되게 감아주세요.' },
      { q: '왜 여성만 측정 항목이 하나 더 있나요?', a: '이 공식은 남녀 간 지방 분포 차이를 반영합니다. 엉덩이 측정값을 추가하면 목과 허리만으로는 대부분의 여성에게서 과소평가되는 부분을 보정할 수 있습니다.' },
    ],
    idealweight: [
      { q: '왜 세 공식의 결과가 다른가요?', a: '이 공식들은 서로 다른 기준 인구 집단과 서로 다른 시대를 기반으로 각각 독립적으로 개발되었습니다. 어느 것도 다른 것보다 더 "정확"하지 않습니다. 단일 숫자가 아니라 이들 사이의 범위 자체가 정직한 답입니다.' },
      { q: '어떤 공식을 사용해야 하나요?', a: '명확한 정답은 없습니다. Devine 공식이 임상에서 가장 많이 인용되지만, 세 공식 모두 인구 평균일 뿐 개인 맞춤 목표가 아닙니다. 하나를 고르기보다는 그 범위 자체를 답으로 받아들이세요.' },
      { q: '이 계산이 근육량이나 골격 크기를 반영하나요?', a: '아니요, 이 공식들은 키와 성별만 사용합니다. 근육질이거나 골격이 큰 사람은 과체중이 아니어도 이 수치보다 합리적으로 더 무거울 수 있습니다. 바로 그래서 이는 개인 맞춤 의학적 조언이 아닙니다.' },
    ],
    loan: [
      { q: '복리란 무엇인가요?', a: '매 기간 얻은 이자가 잔액에 더해져, 원금과 이전 이자 모두에 대해 이자를 받게 됩니다.' },
      { q: '이자는 얼마나 자주 계산되나요?', a: '매월 계산되며, 이는 저축 계좌나 펀드에서 일반적이며 시간에 따른 성장을 현실적으로 보여줍니다.' },
      { q: '계산기가 세금이나 인플레이션을 고려하나요?', a: '아니요, 결과는 세금과 인플레이션 전의 명목 성장을 보여줍니다, 참고용이며 금융 자문이 아닙니다.' },
      { q: '저축이 두 배가 되는 데 얼마나 걸리나요?', a: '72를 이자율로 나누면 빠르게 추정할 수 있습니다. 금리 6%라면 약 12년입니다. 자세한 내용은 위의 72의 법칙을 참고하세요.' },
    ],
    loancost: [
      { q: '월 상환액은 어떻게 계산되나요?', a: '표준 대출 상환 공식을 사용하며, 시간이 지남에 따라 이자 비중은 줄고 원금 비중은 늘어나는 균등한 월 상환액을 계산합니다.' },
      { q: '저축 계산기와 어떻게 다른가요?', a: '저축 계산기는 저축한 금액이 어떻게 늘어나는지 보여줍니다. 이 계산기는 대출이나 할부 구매가 실제로 총 얼마나 드는지 보여줍니다.' },
      { q: '총비용에 수수료와 보험료도 포함되나요?', a: '아니요, 이 계산기는 금액, 금리, 기간을 기준으로 한 이자와 원금 비용만 보여줍니다. 수수료, 보험료, 세금은 대출 기관과 국가마다 차이가 너무 커서 일반적인 수치로 포함하지 않습니다.' },
    ],
    savingsgoal: [
      { q: '이미 충분히 저축했다면 어떻게 되나요?', a: '그렇다면 숫자 대신 메시지가 표시됩니다. 입력한 수익률로 현재 저축액이 이미 목표에 도달했으며, 추가 월 저축이 필요하지 않습니다.' },
      { q: '예상 수익률을 낮추면 어떻게 되나요?', a: '필요한 월 저축액이 늘어납니다. 수익률이 낮을수록 수익이 대신해 주는 부분이 줄어들어 직접 더 많이 납입해야 하기 때문입니다.' },
      { q: '어떤 저축 목표에도 사용할 수 있나요?', a: '네, 이 계산기는 금액, 기간, 수익률을 기반으로 범용적으로 작동하므로 계약금, 여행, 비상금 등 어떤 목표에도 사용할 수 있습니다.' },
    ],
    tip: [
      { q: '입력하는 청구서 금액은 세금 포함인가요, 별도인가요?', a: '이 계산기는 세금 포함 여부와 상관없이 당신이 입력한 청구서 총액만 다룹니다. 실제로 청구서에 표시된 총액을 입력하세요.' },
      { q: '서로 다른 금액을 주문해도 팁이 균등하게 나뉘나요?', a: '네, 항상 인원수에 따라 균등하게 나뉩니다. 각자 주문한 내용에 따라 나누고 싶다면, 총액을 입력하기 전에 몫을 따로 계산해야 합니다.' },
      { q: '확신이 없을 때 적당한 팁은 얼마인가요?', a: '많은 상황에서 15%가 일반적인 시작점입니다(위 참고표 참조). 다만 팁 문화는 나라마다 크게 다르므로, 있는 곳의 관례를 확인해 보는 것이 좋습니다.' },
    ],
    salary: [
      { q: '어떤 세율을 입력해야 하나요?', a: '가장 높은 한계세율이 아니라, 총 세전 소득 중 세금으로 나가는 비율인 실효세율을 입력해야 합니다. 차이점은 위 섹션을 참고하세요.' },
      { q: '사회보험료나 연금 공제도 반영되나요?', a: '아니요, 이 계산기는 당신이 입력한 단일 비율만 차감합니다. 다른 공제를 포함하고 싶다면 직접 세율에 반영하거나, 실수령액에서 별도로 빼야 합니다.' },
      { q: '이걸로 세금 신고나 세무 계획을 세울 수 있나요?', a: '아니요, 이는 범용 추정치이며 특정 국가에 대한 세무 조언이 아닙니다. 정확한 수치는 반드시 현지 세무 당국에 확인하세요.' },
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
      { q: 'क्या टैक्स बस उल्टी दिशा में छूट जैसा है?', a: 'गणितीय रूप से, हां। छूट कीमत में से एक प्रतिशत घटाती है, टैक्स एक प्रतिशत जोड़ता है। घटाने के बजाय जोड़ने के लिए "टैक्स" मोड का उपयोग करें।' },
    ],
    age: [
      { q: 'मेरी सटीक उम्र कैसे निकाली जाती है?', a: 'आपकी जन्मतिथि से चुनी गई तारीख़ तक कैलेंडर के अनुसार सटीक रूप से, पूर्ण वर्षों, महीनों और दिनों में दिखाई जाती है।' },
      { q: '"जीवित रहे कुल दिन" क्या दर्शाता है?', a: 'जन्मतिथि और चुनी गई तारीख़ के बीच के सटीक दिन, कई लोग 10,000 दिन जैसे गोल आंकड़ों को मनाना पसंद करते हैं।' },
      { q: 'क्या मैं किसी अन्य तारीख़ पर अपनी उम्र निकाल सकता हूँ?', a: 'हाँ, "किस तारीख़ तक गणना करें" फ़ील्ड बदलें ताकि किसी भी भूत या भविष्य की तारीख़ पर अपनी उम्र देख सकें।' },
    ],
    bmi: [
      { q: 'क्या मांसपेशियों वाले या एथलेटिक लोगों के लिए BMI सटीक है?', a: 'उतना सटीक नहीं। BMI मांसपेशियों और वसा में फ़र्क नहीं कर पाता, इसलिए मांसपेशियों वाला व्यक्ति कम फैट होने के बावजूद अधिक वज़न वाला दिख सकता है। ज़्यादा जानकारी के लिए ऊपर दी गई सीमाएँ देखें।' },
      { q: 'मुझे अपना BMI कितनी बार जाँचना चाहिए?', a: 'अधिकतर लोगों के लिए हर कुछ महीनों में एक बार जाँचना ट्रेंड देखने के लिए काफ़ी है। BMI धीरे-धीरे बदलता है, और रोज़ाना जाँच ज़्यादातर पानी के वज़न में बदलाव दिखाती है, असली बदलाव नहीं।' },
      { q: 'BMI और बॉडी फैट प्रतिशत में क्या अंतर है?', a: 'BMI वज़न और लंबाई का अनुपात है और यह नहीं बताता कि वह वज़न किससे बना है। बॉडी फैट प्रतिशत वसा और लीन मास के वास्तविक अनुपात को मापता है और अधिक सटीक है — शरीर के माप से अनुमान लगाने वाला हमारा बॉडी फैट कैलकुलेटर आज़माएं।' },
    ],
    tdee: [
      { q: 'TDEE कितना सटीक है?', a: 'यह एक अच्छा अनुमान है, कोई सटीक माप नहीं। हर व्यक्ति का मेटाबॉलिज्म करीब 10 से 15% तक अलग हो सकता है, इसलिए अपने असली नतीजों के हिसाब से इसे कैसे एडजस्ट करें, यह जानने के लिए ऊपर दी गई सीमाएँ देखें।' },
      { q: 'मुझे कौन सी गतिविधि स्तर चुननी चाहिए?', a: 'अपने सबसे अच्छे या सबसे खराब दिन के बजाय, अपने सामान्य हफ़्ते से मेल खाने वाला विकल्प चुनें। ज़्यादातर लोग अपनी असल सक्रियता को ज़्यादा आंकते हैं, इसलिए अगर पक्का न हो तो कम वाला विकल्प चुनना बेहतर है।' },
      { q: 'क्या मुझे हर दिन बिल्कुल अपने TDEE जितना ही खाना चाहिए?', a: 'नहीं, रोज़ाना का सेवन स्वाभाविक रूप से थोड़ा घटता-बढ़ता रहता है। असली मायने रखता है एक या दो हफ़्ते का औसत, इसलिए TDEE को हर दिन बिल्कुल हासिल करने वाला आंकड़ा न मानकर, एक ऐसा लक्ष्य मानें जिसके करीब रहना है।' },
    ],
    bmr: [
      { q: 'क्या समान वज़न वाले सभी लोगों का BMR एक जैसा होता है?', a: 'नहीं। उम्र, लिंग और मांसपेशियों का द्रव्यमान सभी इसे प्रभावित करते हैं, इसलिए फ़ॉर्मूले में उम्र और लिंग शामिल किए गए हैं, और इसीलिए समान वज़न वाले दो लोगों का BMR काफ़ी अलग हो सकता है।' },
      { q: 'क्या मुझे बिल्कुल अपने BMR जितना ही खाना चाहिए?', a: 'नहीं, लंबे समय तक अपने BMR के बराबर या उससे कम खाना कोई सुरक्षित लक्ष्य नहीं है। एक सामान्य दिन बिताने के लिए भी आपके शरीर को इससे ज़्यादा कैलोरी चाहिए होती है, इसलिए अपनी गतिविधि स्तर को शामिल करते हुए एक असली दैनिक कैलोरी आंकड़ा जानने के लिए TDEE कैलकुलेटर का उपयोग करें।' },
      { q: 'क्या मैं अपना BMR बढ़ा सकता हूँ?', a: 'कुछ हद तक: मांसपेशियां बनाने से यह बढ़ता है, क्योंकि मांसपेशियां आराम की अवस्था में भी फैट से ज़्यादा ऊर्जा खर्च करती हैं। उम्र के साथ होने वाली गिरावट काफ़ी हद तक आपके नियंत्रण से बाहर होती है, और लगातार स्ट्रेंथ ट्रेनिंग और पर्याप्त प्रोटीन के अलावा कोई भरोसेमंद शॉर्टकट नहीं है।' },
    ],
    calorie: [
      { q: 'इसके लिए पहले मेरा TDEE क्यों चाहिए?', a: 'क्योंकि कैलोरी लक्ष्य सिर्फ़ एक बेसलाइन के मुक़ाबले ही मायने रखता है। आप रोज़ाना लगभग कितनी कैलोरी खर्च करते हैं यह जाने बिना, 1,800 kcal जैसा आंकड़ा किसी एक व्यक्ति के लिए कमी हो सकता है और किसी दूसरे के लिए अतिरिक्त।' },
      { q: 'अगर मुझे यक़ीन न हो तो कौन सा लक्ष्य चुनूं?', a: 'वज़न बनाए रखें या हल्की कैलोरी कमी से शुरू करें। ज़्यादा कैलोरी कमी कागज़ पर तेज़ी से वज़न घटाती है, लेकिन इसे बनाए रखना मुश्किल होता है और इससे फैट के साथ मांसपेशियां घटने की संभावना भी ज़्यादा रहती है, इसलिए यह लंबी योजना के बजाय छोटी, सोची-समझी पुश के लिए बेहतर है।' },
      { q: 'क्या 1 kg वाकई ठीक 7,700 kcal के बराबर होता है?', a: 'बिल्कुल सटीक नहीं। यह योजना बनाने के लिए एक अंदाज़न औसत है, कोई सटीक कन्वर्शन नहीं, और असली फैट लॉस शरीर की बनावट के हिसाब से हर व्यक्ति में थोड़ा अलग होता है, इसलिए इससे निकाला गया कोई भी अनुमान एक अंदाज़ा मानें, गारंटी नहीं।' },
    ],
    bodyfat: [
      { q: 'US नेवी विधि कितनी सटीक है?', a: 'यह ज़्यादातर शरीर के प्रकारों के लिए एक उचित अनुमान देती है, आमतौर पर DEXA जैसी ज़्यादा सटीक विधियों से कुछ प्रतिशत अंकों के भीतर। असामान्य शरीर आकार या बेहद कम या ज़्यादा बॉडी फैट वाले लोगों के लिए यह कम सटीक होती है।' },
      { q: 'मुझे ठीक कहां माप लेना चाहिए?', a: 'गर्दन को एडम्स ऐपल से थोड़ा नीचे, कमर को सबसे पतले हिस्से पर (या अगर कोई साफ़ पतला हिस्सा न हो तो नाभि के पास), और महिलाओं के लिए कूल्हे को सबसे चौड़े हिस्से पर मापें। टेप को कसकर लेकिन त्वचा को दबाए बिना रखें।' },
      { q: 'महिलाओं के लिए एक अतिरिक्त माप क्यों है?', a: 'यह फ़ॉर्मूला इस बात को ध्यान में रखता है कि पुरुषों और महिलाओं में फैट जमा होने का तरीका अलग होता है। कूल्हे का माप जोड़ने से उस पैटर्न की भरपाई होती है जिसे अकेले गर्दन और कमर ज़्यादातर महिलाओं के लिए कम आंकते।' },
    ],
    idealweight: [
      { q: 'तीनों फ़ॉर्मूले अलग-अलग आंकड़े क्यों देते हैं?', a: 'इन्हें अलग-अलग तरीके से बनाया गया था, अलग-अलग संदर्भ जनसंख्या और अलग-अलग दशकों के आधार पर। कोई भी दूसरे से ज़्यादा "सही" नहीं है। इनके बीच की रेंज ही ईमानदार जवाब है, कोई एक आंकड़ा नहीं।' },
      { q: 'मुझे कौन सा फ़ॉर्मूला इस्तेमाल करना चाहिए?', a: 'कोई साफ़ विजेता नहीं है। क्लिनिकल संदर्भों में Devine सबसे ज़्यादा इस्तेमाल होता है, लेकिन तीनों जनसंख्या के औसत हैं, व्यक्तिगत लक्ष्य नहीं। एक चुनने के बजाय, रेंज को ही अपना जवाब मानें।' },
      { q: 'क्या यह मांसपेशियों या शरीर की बनावट को ध्यान में रखता है?', a: 'नहीं, ये फ़ॉर्मूले सिर्फ़ लंबाई और लिंग का उपयोग करते हैं। मांसपेशियों वाला या बड़ी बनावट वाला व्यक्ति बिना ओवरवेट हुए इन आंकड़ों से वाजिब तौर पर ज़्यादा वज़न का हो सकता है। इसीलिए ये व्यक्तिगत मेडिकल सलाह नहीं हैं।' },
    ],
    loan: [
      { q: 'चक्रवृद्धि ब्याज क्या है?', a: 'हर अवधि में अर्जित ब्याज को मूलधन में जोड़ दिया जाता है, जिससे आपको मूलधन और पिछले ब्याज दोनों पर ब्याज मिलता है।' },
      { q: 'ब्याज की गणना कितनी बार होती है?', a: 'मासिक रूप से, जो बचत खातों और फंडों में सामान्य है और समय के साथ वृद्धि की एक यथार्थवादी तस्वीर देता है।' },
      { q: 'क्या कैलकुलेटर टैक्स या महंगाई को ध्यान में रखता है?', a: 'नहीं, परिणाम टैक्स और महंगाई से पहले की नाममात्र वृद्धि दिखाता है, यह केवल मार्गदर्शन है, वित्तीय सलाह नहीं।' },
      { q: 'बचत को दोगुना होने में कितना समय लगता है?', a: 'झटपट अंदाज़े के लिए 72 को ब्याज दर से भाग दें। 6% ब्याज पर, यह लगभग 12 साल है, ज़्यादा जानकारी के लिए ऊपर 72 का नियम देखें।' },
    ],
    loancost: [
      { q: 'मासिक किस्त की गणना कैसे होती है?', a: 'मानक ऋण परिशोधन फ़ॉर्मूले से, जो एक समान मासिक किस्त देता है जिसमें ब्याज का हिस्सा घटता है और मूलधन का हिस्सा समय के साथ बढ़ता है।' },
      { q: 'यह बचत कैलकुलेटर से कैसे अलग है?', a: 'बचत कैलकुलेटर दिखाता है कि बचाई गई राशि कैसे बढ़ती है। यह कैलकुलेटर दिखाता है कि ऋण या किस्तों पर खरीदारी की वास्तविक कुल लागत कितनी है।' },
      { q: 'क्या कुल लागत में फ़ीस और बीमा शामिल हैं?', a: 'नहीं, यह कैलकुलेटर सिर्फ़ राशि, दर और अवधि के आधार पर ब्याज और मूलधन की लागत दिखाता है। फ़ीस, बीमा और टैक्स ऋणदाताओं और देशों के बीच बहुत अलग-अलग होते हैं, इसलिए इन्हें एक सामान्य आंकड़े में शामिल नहीं किया गया है।' },
    ],
    savingsgoal: [
      { q: 'अगर मेरे पास पहले से ही पर्याप्त बचत है तो क्या होगा?', a: 'तब एक आंकड़े की जगह एक संदेश दिखाया जाएगा — आपके बताए गए रिटर्न पर आपकी मौजूदा बचत पहले ही लक्ष्य तक पहुंच चुकी है, किसी अतिरिक्त मासिक बचत की ज़रूरत नहीं है।' },
      { q: 'अगर मैं अनुमानित रिटर्न कम कर दूं तो क्या होगा?', a: 'ज़रूरी मासिक राशि बढ़ जाती है, क्योंकि कम रिटर्न आपके लिए कम काम करता है और आपको खुद ज़्यादा योगदान देना पड़ता है।' },
      { q: 'क्या मैं इसे किसी भी बचत लक्ष्य के लिए इस्तेमाल कर सकता हूं?', a: 'हां, यह कैलकुलेटर राशि, समय और रिटर्न के आधार पर सामान्य रूप से काम करता है, चाहे लक्ष्य डाउन पेमेंट हो, यात्रा हो, या आपातकालीन फंड हो।' },
    ],
    tip: [
      { q: 'मैं जो बिल राशि डालता हूं वह टैक्स सहित है या बिना टैक्स के?', a: 'यह कैलकुलेटर सिर्फ़ आपके डाले गए कुल बिल राशि पर काम करता है, चाहे टैक्स पहले से शामिल हो या नहीं। बिल पर जो कुल राशि आपको दिखे, वही दर्ज करें।' },
      { q: 'क्या अलग-अलग ऑर्डर करने पर भी टिप बराबर बंटती है?', a: 'हां, बंटवारा हमेशा लोगों की संख्या के हिसाब से बराबर होता है। अगर आप हर व्यक्ति के ऑर्डर के हिसाब से बांटना चाहते हैं, तो कुल राशि डालने से पहले हिस्से अलग से निकालें।' },
      { q: 'अगर मुझे यकीन नहीं है तो कितनी टिप उचित है?', a: 'कई जगहों पर 15 प्रतिशत एक सामान्य शुरुआती बिंदु है, ऊपर संदर्भ तालिका देखें, लेकिन टिप के रिवाज़ देशों में बहुत अलग होते हैं, इसलिए यह जांचना अच्छा रहेगा कि आपकी जगह पर क्या आम है।' },
    ],
    salary: [
      { q: 'मुझे कौन सी टैक्स दर डालनी चाहिए?', a: 'अपनी प्रभावी टैक्स दर, यानी आपकी कुल ग्रॉस इनकम का कितना हिस्सा टैक्स में जाता है, न कि सबसे ऊंची मार्जिनल दर। अंतर समझने के लिए ऊपर वाला भाग देखें।' },
      { q: 'क्या यह सामाजिक अंशदान या पेंशन कटौती को ध्यान में रखता है?', a: 'नहीं, यह कैलकुलेटर सिर्फ़ आपके डाले गए एक ही प्रतिशत को घटाता है। अगर आप अन्य कटौतियां शामिल करना चाहते हैं, तो उन्हें खुद दर में जोड़ें, या नेट राशि से अलग से घटाएं।' },
      { q: 'क्या मैं इसका उपयोग टैक्स फ़ाइल करने या योजना बनाने के लिए कर सकता हूं?', a: 'नहीं, यह एक सामान्य अनुमान है, किसी खास देश के लिए टैक्स सलाह नहीं। सटीक आंकड़ों के लिए हमेशा अपने स्थानीय टैक्स विभाग से जांच करें।' },
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
      { q: 'Apakah PPN hanya diskon yang dibalik?', a: 'Secara matematis, ya. Diskon mengurangi persentase dari harga, PPN menambahkannya. Gunakan mode "PPN" untuk menambahkan persentase alih-alih menguranginya.' },
    ],
    age: [
      { q: 'Bagaimana usia tepat saya dihitung?', a: 'Akurat sesuai kalender dari tanggal lahir hingga tanggal yang dipilih, ditampilkan dalam tahun, bulan, dan hari lengkap.' },
      { q: 'Apa yang ditunjukkan "total hari yang dijalani"?', a: 'Jumlah hari yang tepat antara tanggal lahir dan tanggal yang dipilih, banyak orang suka merayakan angka bulat seperti 10.000 hari.' },
      { q: 'Bisakah saya menghitung usia pada tanggal lain?', a: 'Ya, ubah kolom "Hitung sampai tanggal" untuk melihat usia kamu pada tanggal apa pun, di masa lalu atau masa depan.' },
    ],
    bmi: [
      { q: 'Apakah BMI akurat untuk orang berotot atau atletis?', a: 'Kurang akurat. BMI tidak bisa membedakan otot dari lemak, jadi orang yang berotot bisa saja tercatat sebagai kelebihan berat badan meski lemak tubuhnya rendah. Lihat batasan di atas untuk penjelasan lebih lanjut.' },
      { q: 'Seberapa sering saya harus memeriksa BMI saya?', a: 'Bagi kebanyakan orang, memeriksa setiap beberapa bulan sudah cukup untuk melihat tren. BMI berubah secara perlahan, dan pemeriksaan harian kebanyakan mencerminkan perubahan berat air, bukan perubahan yang sebenarnya.' },
      { q: 'Apa perbedaan antara BMI dan persentase lemak tubuh?', a: 'BMI adalah rasio antara berat dan tinggi badan, dan tidak menjelaskan apa yang menyusun berat tersebut. Persentase lemak tubuh mengukur proporsi lemak yang sebenarnya dibandingkan massa tanpa lemak dan lebih akurat — coba Kalkulator Lemak Tubuh kami untuk perkiraan berdasarkan ukuran tubuh.' },
    ],
    tdee: [
      { q: 'Seberapa akurat TDEE?', a: 'Ini perkiraan yang cukup baik, bukan pengukuran yang pasti. Metabolisme setiap orang bisa berbeda sekitar 10 hingga 15%, jadi lihat bagian keterbatasan di atas untuk cara menyesuaikannya dengan hasilmu sendiri.' },
      { q: 'Tingkat aktivitas mana yang harus saya pilih?', a: 'Pilih opsi yang sesuai dengan minggu normalmu, bukan hari terbaik atau terburukmu. Kebanyakan orang menilai aktivitas mereka lebih tinggi dari kenyataannya, jadi kalau ragu, pilih opsi yang lebih rendah.' },
      { q: 'Apakah saya harus makan tepat sesuai TDEE setiap hari?', a: 'Tidak, asupan harian secara alami akan bervariasi. Yang penting adalah rata-rata selama satu atau dua minggu, jadi anggap TDEE sebagai target untuk didekati, bukan angka yang harus dicapai persis setiap hari.' },
    ],
    bmr: [
      { q: 'Apakah BMR sama untuk semua orang dengan berat badan yang sama?', a: 'Tidak. Usia, jenis kelamin, dan massa otot semuanya memengaruhi BMR, itulah sebabnya rumusnya memperhitungkan usia dan jenis kelamin, dan mengapa dua orang dengan berat badan sama bisa memiliki BMR yang cukup berbeda.' },
      { q: 'Haruskah saya makan tepat sesuai BMR saya?', a: 'Tidak, makan pada atau di bawah BMR-mu dalam jangka panjang bukan target yang aman. Tubuhmu membutuhkan lebih dari itu hanya untuk menjalani hari yang normal, jadi gunakan Kalkulator TDEE untuk mendapatkan angka kalori harian yang realistis dan sudah memperhitungkan tingkat aktivitasmu.' },
      { q: 'Bisakah saya meningkatkan BMR saya?', a: 'Sampai batas tertentu: membangun otot akan meningkatkannya, karena otot membakar lebih banyak energi saat istirahat dibandingkan lemak. Penurunan akibat usia sebagian besar di luar kendalimu, dan tidak ada jalan pintas yang benar-benar bisa diandalkan selain latihan kekuatan yang konsisten dan asupan protein yang cukup dari waktu ke waktu.' },
    ],
    calorie: [
      { q: 'Kenapa ini butuh TDEE saya lebih dulu?', a: 'Karena target kalori hanya masuk akal jika dibandingkan dengan suatu dasar. Tanpa mengetahui kira-kira berapa banyak kalori yang kamu bakar dalam sehari, angka seperti 1,800 kkal bisa jadi defisit bagi satu orang dan surplus bagi orang lain.' },
      { q: 'Target mana yang sebaiknya saya pilih kalau belum yakin?', a: 'Mulailah dengan mempertahankan berat badan atau defisit ringan. Defisit agresif menurunkan berat badan lebih cepat di atas kertas, tetapi lebih sulit dipertahankan dan lebih berisiko mengurangi massa otot selain lemak, jadi lebih cocok untuk dorongan singkat dan terencana daripada rencana jangka panjang.' },
      { q: 'Apakah 1 kg benar-benar sama dengan tepat 7,700 kkal?', a: 'Tidak persis. Ini adalah rata-rata perkiraan yang digunakan untuk perencanaan, bukan konversi yang presisi, dan penurunan lemak sebenarnya sedikit bervariasi antar orang tergantung komposisi tubuh, jadi anggap perkiraan apa pun darinya sebagai estimasi, bukan jaminan.' },
    ],
    bodyfat: [
      { q: 'Seberapa akurat metode Angkatan Laut AS ini?', a: 'Ini memberikan perkiraan yang wajar untuk sebagian besar bentuk tubuh, biasanya hanya berbeda beberapa poin persentase dari metode yang lebih presisi seperti DEXA. Metode ini cenderung kurang akurat untuk bentuk tubuh yang tidak biasa atau tingkat lemak tubuh yang sangat rendah atau sangat tinggi.' },
      { q: 'Tepatnya di mana saya harus mengukur?', a: 'Ukur leher tepat di bawah jakun, pinggang di titik paling sempit (atau di sekitar pusar jika tidak ada titik yang jelas), dan untuk wanita, pinggul di titik paling lebar. Jaga agar pita pengukur pas tapi tidak menekan kulit.' },
      { q: 'Kenapa ada ukuran tambahan untuk wanita?', a: 'Rumus ini memperhitungkan bahwa distribusi lemak berbeda antara pria dan wanita. Menambahkan ukuran pinggul mengoreksi pola yang jika hanya mengandalkan leher dan pinggang akan meremehkan hasil untuk sebagian besar wanita.' },
    ],
    idealweight: [
      { q: 'Kenapa ketiga rumus memberikan angka yang berbeda?', a: 'Rumus-rumus ini dikembangkan secara terpisah, menggunakan populasi acuan dan dekade yang berbeda. Tidak ada satu pun yang lebih "benar" dari yang lain. Rentang di antara ketiganya adalah jawaban yang jujur, bukan satu angka tunggal.' },
      { q: 'Rumus mana yang sebaiknya saya gunakan?', a: 'Tidak ada pemenang yang jelas. Devine paling sering dikutip dalam konteks klinis, tetapi ketiganya adalah rata-rata populasi, bukan target yang dipersonalisasi. Anggap rentangnya sebagai jawabanmu, bukan memilih salah satu.' },
      { q: 'Apakah ini memperhitungkan massa otot atau ukuran rangka tubuh?', a: 'Tidak, rumus-rumus ini hanya menggunakan tinggi badan dan jenis kelamin. Orang yang berotot atau memiliki rangka tubuh lebih besar secara wajar akan lebih berat daripada yang disarankan angka-angka ini tanpa berarti kelebihan berat badan. Itulah sebabnya rumus ini bukan panduan medis yang dipersonalisasi.' },
    ],
    loan: [
      { q: 'Apa itu bunga berbunga?', a: 'Bunga yang diperoleh setiap periode ditambahkan ke saldo, sehingga kamu mendapatkan bunga dari jumlah awal maupun bunga sebelumnya.' },
      { q: 'Seberapa sering bunga dihitung?', a: 'Setiap bulan, yang umum untuk rekening tabungan dan dana investasi, memberikan gambaran realistis tentang pertumbuhan dari waktu ke waktu.' },
      { q: 'Apakah kalkulator memperhitungkan pajak atau inflasi?', a: 'Tidak, hasilnya menunjukkan pertumbuhan nominal sebelum pajak dan inflasi, dimaksudkan sebagai panduan, bukan nasihat keuangan.' },
      { q: 'Berapa lama waktu yang dibutuhkan tabungan untuk berlipat ganda?', a: 'Bagi 72 dengan suku bunga untuk perkiraan cepat. Pada bunga 6%, itu sekitar 12 tahun, lihat Aturan 72 di atas untuk selengkapnya.' },
    ],
    loancost: [
      { q: 'Bagaimana cicilan bulanan dihitung?', a: 'Menggunakan rumus amortisasi pinjaman standar, yang menghasilkan cicilan bulanan rata di mana porsi bunga menurun dan porsi pokok meningkat seiring waktu.' },
      { q: 'Apa bedanya dengan kalkulator tabungan?', a: 'Kalkulator tabungan menunjukkan bagaimana jumlah yang ditabung tumbuh. Kalkulator ini menunjukkan berapa total biaya sebenarnya dari pinjaman atau pembelian cicilan.' },
      { q: 'Apakah total biaya sudah termasuk biaya admin dan asuransi?', a: 'Tidak, kalkulator ini hanya menunjukkan biaya bunga dan pokok berdasarkan jumlah, suku bunga, dan jangka waktu. Biaya admin, asuransi, dan pajak terlalu bervariasi antar pemberi pinjaman dan negara untuk dimasukkan sebagai angka umum.' },
    ],
    savingsgoal: [
      { q: 'Bagaimana jika tabunganku sudah cukup?', a: 'Maka pesan akan ditampilkan alih-alih angka, tabungan saat ini sudah mencapai target pada imbal hasil yang kamu masukkan, tidak perlu tabungan bulanan tambahan.' },
      { q: 'Apa yang terjadi jika aku menurunkan perkiraan imbal hasil?', a: 'Jumlah bulanan yang dibutuhkan akan naik, karena imbal hasil yang lebih rendah mengerjakan lebih sedikit untukmu dan kamu perlu berkontribusi lebih banyak sendiri.' },
      { q: 'Bisakah ini dipakai untuk target tabungan apa saja?', a: 'Ya, kalkulator ini bekerja secara umum berdasarkan jumlah, waktu, dan imbal hasil, baik targetnya uang muka, liburan, maupun dana darurat.' },
    ],
    tip: [
      { q: 'Apakah jumlah tagihan yang saya masukkan sudah termasuk pajak atau belum?', a: 'Kalkulator ini hanya bekerja dengan jumlah total tagihan yang kamu masukkan, baik pajak sudah termasuk atau belum. Masukkan total yang benar-benar kamu lihat di tagihan.' },
      { q: 'Apakah tip dibagi rata meski kami memesan jumlah yang berbeda?', a: 'Ya, pembagian selalu rata berdasarkan jumlah orang. Jika ingin membagi sesuai pesanan masing-masing, hitung bagiannya secara terpisah sebelum memasukkan total.' },
      { q: 'Berapa tip yang wajar jika saya tidak yakin?', a: '15 persen adalah titik awal yang umum di banyak konteks, lihat tabel referensi di atas, tapi kebiasaan memberi tip sangat berbeda antar negara, jadi ada baiknya memeriksa apa yang lazim di tempatmu.' },
    ],
    salary: [
      { q: 'Tarif pajak apa yang harus saya masukkan?', a: 'Tarif pajak efektifmu, yaitu berapa persen dari total pendapatan kotormu yang menjadi pajak, bukan tarif marjinal tertinggi. Lihat bagian di atas untuk perbedaannya.' },
      { q: 'Apakah ini memperhitungkan iuran sosial atau potongan pensiun?', a: 'Tidak, kalkulator ini hanya mengurangi satu persentase yang kamu masukkan. Jika ingin memasukkan potongan lain, hitung sendiri ke dalam tarifnya, atau kurangi secara terpisah dari jumlah bersih.' },
      { q: 'Bisakah saya menggunakan ini untuk lapor atau merencanakan pajak saya?', a: 'Tidak, ini adalah perkiraan generik, bukan nasihat pajak untuk negara tertentu. Selalu periksa dengan otoritas pajak setempat untuk angka yang tepat.' },
    ],
  },
};

export interface UnitsContent {
  whatIsConverter: { heading: string; body: string };
  categoriesOverview: { heading: string; body: string };
  temperature: { heading: string; body: string; code: string };
  accuracy: { heading: string; body: string };
  related: { heading: string; linkText: string; description: string };
}

export const unitsContent: Record<string, UnitsContent> = {
  sv: {
    whatIsConverter: {
      heading: `Om enhetsomvandlaren`,
      body: `Omvandlaren täcker sex kategorier av enheter: längd, vikt, volym, temperatur, tryck och vridmoment. Välj kategori, ange ett värde i valfri enhet, och resultatet i den andra enheten uppdateras direkt utan att du behöver trycka på någon knapp.`,
    },
    categoriesOverview: {
      heading: `Metriska och brittiska/amerikanska enheter i samma verktyg`,
      body: `Varje kategori blandar metriska enheter (som meter, kilogram och liter) med brittiska/amerikanska enheter (som tum, pound och gallon), eftersom de flesta som behöver omvandla gör det just för att gå mellan de två systemen. Du väljer själv vilken enhet du omvandlar från och till, i valfri kombination inom samma kategori.`,
    },
    temperature: {
      heading: `Temperatur är specialfallet`,
      body: `Till skillnad från längd, vikt och volym, som omvandlas genom att multiplicera med en fast faktor, kräver temperatur en formel med både multiplikation och addition eftersom skalorna har olika nollpunkter. Celsius till Fahrenheit räknas till exempel så här:`,
      code: `°F = (°C × 9/5) + 32`,
    },
    accuracy: {
      heading: `Hur exakta är omvandlingarna`,
      body: `Alla omvandlingar bygger på officiella SI-definitioner och andra standardiserade omräkningsfaktorer, och visas avrundade till sex decimaler för läsbarhet. För de allra flesta vardagliga och praktiska syften är det mer precision än man behöver.`,
    },
    related: {
      heading: `Relaterad kalkylator`,
      linkText: `Procenträknare`,
      description: `— för procentberäkningar som rabatt, moms och procentuell förändring.`,
    },
  },

  en: {
    whatIsConverter: {
      heading: `About the unit converter`,
      body: `The converter covers six categories of units: length, weight, volume, temperature, pressure, and torque. Pick a category, enter a value in either unit, and the result in the other unit updates instantly without pressing any button.`,
    },
    categoriesOverview: {
      heading: `Metric and imperial units in one tool`,
      body: `Each category mixes metric units (like meters, kilograms, and liters) with imperial/US units (like inches, pounds, and gallons), since most people who need to convert are doing so precisely to move between the two systems. You choose which unit to convert from and to, in any combination within the same category.`,
    },
    temperature: {
      heading: `Temperature is the special case`,
      body: `Unlike length, weight, and volume, which convert by multiplying by a fixed factor, temperature requires a formula with both multiplication and addition, since the scales have different zero points. Celsius to Fahrenheit, for example, works like this:`,
      code: `°F = (°C × 9/5) + 32`,
    },
    accuracy: {
      heading: `How accurate are the conversions`,
      body: `All conversions are based on official SI definitions and other standardized conversion factors, shown rounded to six decimal places for readability. For the vast majority of everyday and practical purposes, that's more precision than you'll ever need.`,
    },
    related: {
      heading: `Related calculator`,
      linkText: `Percentage Calculator`,
      description: `— for percentage math like discounts, VAT, and percentage change.`,
    },
  },

  pt: {
    whatIsConverter: {
      heading: `Sobre o conversor de unidades`,
      body: `O conversor cobre seis categorias de unidades: comprimento, peso, volume, temperatura, pressão e torque. Escolha uma categoria, informe um valor em qualquer uma das unidades, e o resultado na outra unidade se atualiza instantaneamente, sem precisar clicar em nada.`,
    },
    categoriesOverview: {
      heading: `Unidades métricas e imperiais numa só ferramenta`,
      body: `Cada categoria mistura unidades métricas (como metros, quilogramas e litros) com unidades imperiais/americanas (como polegadas, libras e galões), já que a maioria das pessoas que precisa converter está justamente tentando transitar entre os dois sistemas. Você escolhe de qual unidade converter e para qual, em qualquer combinação dentro da mesma categoria.`,
    },
    temperature: {
      heading: `Temperatura é o caso especial`,
      body: `Ao contrário de comprimento, peso e volume, que se convertem multiplicando por um fator fixo, temperatura exige uma fórmula com multiplicação e soma, já que as escalas têm pontos zero diferentes. Celsius para Fahrenheit, por exemplo, funciona assim:`,
      code: `°F = (°C × 9/5) + 32`,
    },
    accuracy: {
      heading: `Qual a precisão das conversões`,
      body: `Todas as conversões se baseiam em definições oficiais do SI e outros fatores de conversão padronizados, exibidos arredondados para seis casas decimais para facilitar a leitura. Para a grande maioria dos propósitos práticos do dia a dia, isso é mais precisão do que você jamais precisará.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de Porcentagem`,
      description: `— para cálculos percentuais como descontos, impostos e variação percentual.`,
    },
  },

  es: {
    whatIsConverter: {
      heading: `Sobre el conversor de unidades`,
      body: `El conversor cubre seis categorías de unidades: longitud, peso, volumen, temperatura, presión y torque. Elige una categoría, introduce un valor en cualquiera de las unidades, y el resultado en la otra unidad se actualiza al instante sin necesidad de pulsar ningún botón.`,
    },
    categoriesOverview: {
      heading: `Unidades métricas e imperiales en una sola herramienta`,
      body: `Cada categoría combina unidades métricas (como metros, kilogramos y litros) con unidades imperiales/estadounidenses (como pulgadas, libras y galones), ya que la mayoría de quienes necesitan convertir lo hacen precisamente para pasar de un sistema a otro. Tú eliges de qué unidad convertir y a cuál, en cualquier combinación dentro de la misma categoría.`,
    },
    temperature: {
      heading: `La temperatura es el caso especial`,
      body: `A diferencia de la longitud, el peso y el volumen, que se convierten multiplicando por un factor fijo, la temperatura requiere una fórmula con multiplicación y suma, ya que las escalas tienen puntos cero distintos. Celsius a Fahrenheit, por ejemplo, funciona así:`,
      code: `°F = (°C × 9/5) + 32`,
    },
    accuracy: {
      heading: `Qué tan precisas son las conversiones`,
      body: `Todas las conversiones se basan en definiciones oficiales del SI y otros factores de conversión estandarizados, mostrados redondeados a seis decimales para facilitar la lectura. Para la gran mayoría de los propósitos prácticos y cotidianos, eso es más precisión de la que necesitarás jamás.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de Porcentaje`,
      description: `— para cálculos porcentuales como descuentos, IVA y cambio porcentual.`,
    },
  },

  de: {
    whatIsConverter: {
      heading: `Über den Einheitenumrechner`,
      body: `Der Umrechner deckt sechs Einheitenkategorien ab: Länge, Gewicht, Volumen, Temperatur, Druck und Drehmoment. Wähle eine Kategorie, gib einen Wert in einer der Einheiten ein, und das Ergebnis in der anderen Einheit aktualisiert sich sofort, ohne dass du einen Knopf drücken musst.`,
    },
    categoriesOverview: {
      heading: `Metrische und imperiale Einheiten in einem Werkzeug`,
      body: `Jede Kategorie mischt metrische Einheiten (wie Meter, Kilogramm und Liter) mit imperialen/US-Einheiten (wie Zoll, Pound und Gallone), da die meisten Menschen, die umrechnen müssen, genau zwischen diesen beiden Systemen wechseln wollen. Du wählst selbst, von welcher Einheit in welche umgerechnet wird, in beliebiger Kombination innerhalb derselben Kategorie.`,
    },
    temperature: {
      heading: `Temperatur ist der Sonderfall`,
      body: `Anders als Länge, Gewicht und Volumen, die durch Multiplikation mit einem festen Faktor umgerechnet werden, braucht Temperatur eine Formel mit sowohl Multiplikation als auch Addition, da die Skalen unterschiedliche Nullpunkte haben. Celsius zu Fahrenheit funktioniert zum Beispiel so:`,
      code: `°F = (°C × 9/5) + 32`,
    },
    accuracy: {
      heading: `Wie genau sind die Umrechnungen`,
      body: `Alle Umrechnungen basieren auf offiziellen SI-Definitionen und anderen standardisierten Umrechnungsfaktoren und werden zur besseren Lesbarkeit auf sechs Dezimalstellen gerundet angezeigt. Für die allermeisten alltäglichen und praktischen Zwecke ist das mehr Genauigkeit, als du je brauchen wirst.`,
    },
    related: {
      heading: `Verwandter Rechner`,
      linkText: `Prozentrechner`,
      description: `— für Prozentrechnungen wie Rabatte, MwSt. und prozentuale Veränderung.`,
    },
  },

  ja: {
    whatIsConverter: {
      heading: `単位変換ツールについて`,
      body: `この変換ツールは、長さ、重さ、体積、温度、圧力、トルクの6つのカテゴリーをカバーしています。カテゴリーを選び、どちらかの単位に値を入力すると、ボタンを押さなくても、もう一方の単位の結果がすぐに更新されます。`,
    },
    categoriesOverview: {
      heading: `メートル法とヤード・ポンド法を1つのツールで`,
      body: `各カテゴリーには、メートル法の単位（メートル、キログラム、リットルなど）とヤード・ポンド法の単位（インチ、ポンド、ガロンなど）の両方が含まれています。変換が必要な人の多くは、まさにこの2つの単位系の間を行き来したいからです。同じカテゴリー内であれば、変換元と変換先の単位を自由に組み合わせて選べます。`,
    },
    temperature: {
      heading: `温度は特殊なケース`,
      body: `長さ、重さ、体積は固定の係数を掛けるだけで変換できますが、温度は目盛りのゼロ点が異なるため、掛け算と足し算の両方を使う式が必要です。たとえば摂氏から華氏への変換は次のようになります。`,
      code: `°F = (°C × 9/5) + 32`,
    },
    accuracy: {
      heading: `変換の精度について`,
      body: `すべての変換は公式のSI定義やその他の標準化された換算係数に基づいており、見やすさのため小数点以下6桁に丸めて表示しています。日常的な実用目的のほとんどにおいて、これは必要以上の精度です。`,
    },
    related: {
      heading: `関連する計算機`,
      linkText: `パーセント計算機`,
      description: `— 割引、消費税、変化率などのパーセント計算に使えます。`,
    },
  },

  zh: {
    whatIsConverter: {
      heading: `关于单位换算器`,
      body: `这个换算器涵盖六大类单位：长度、重量、体积、温度、压力和扭矩。选择一个类别，在任意一个单位中输入数值，另一个单位的结果就会立即更新，无需点击任何按钮。`,
    },
    categoriesOverview: {
      heading: `公制和英制单位集于一个工具`,
      body: `每个类别都同时包含公制单位（如米、千克、升）和英制/美制单位（如英寸、磅、加仑），因为大多数需要换算的人正是想在这两套体系之间转换。你可以在同一类别内自由选择换算的起始单位和目标单位。`,
    },
    temperature: {
      heading: `温度是特殊情况`,
      body: `长度、重量和体积只需乘以一个固定系数即可换算，但温度需要同时用到乘法和加法，因为不同温标的零点不同。例如，摄氏度换算成华氏度的公式是：`,
      code: `°F = (°C × 9/5) + 32`,
    },
    accuracy: {
      heading: `换算结果有多精确`,
      body: `所有换算都基于官方的国际单位制（SI）定义和其他标准化换算系数，为便于阅读，结果四舍五入到小数点后六位显示。对于绝大多数日常和实际用途来说，这已经远超所需的精度。`,
    },
    related: {
      heading: `相关计算器`,
      linkText: `百分比计算器`,
      description: `— 用于折扣、增值税、百分比变化等百分比计算。`,
    },
  },

  ko: {
    whatIsConverter: {
      heading: `단위 변환기 소개`,
      body: `이 변환기는 길이, 무게, 부피, 온도, 압력, 토크의 여섯 가지 단위 범주를 다룹니다. 범주를 선택하고 어느 한쪽 단위에 값을 입력하면, 버튼을 누르지 않아도 다른 쪽 단위의 결과가 즉시 업데이트됩니다.`,
    },
    categoriesOverview: {
      heading: `미터법과 야드파운드법을 하나의 도구로`,
      body: `각 범주는 미터법 단위(미터, 킬로그램, 리터 등)와 야드파운드법/미국 단위(인치, 파운드, 갤런 등)를 함께 제공합니다. 변환이 필요한 대부분의 사람들이 바로 이 두 체계 사이를 오가고 싶어 하기 때문입니다. 같은 범주 안에서 어떤 단위로든 자유롭게 변환할 수 있습니다.`,
    },
    temperature: {
      heading: `온도는 특별한 경우`,
      body: `고정된 계수를 곱해서 변환하는 길이, 무게, 부피와 달리, 온도는 눈금의 0점이 서로 다르기 때문에 곱셈과 덧셈이 모두 필요한 공식을 사용합니다. 예를 들어 섭씨를 화씨로 바꾸는 방법은 다음과 같습니다.`,
      code: `°F = (°C × 9/5) + 32`,
    },
    accuracy: {
      heading: `변환은 얼마나 정확한가`,
      body: `모든 변환은 공식 SI 정의와 기타 표준화된 변환 계수를 기반으로 하며, 가독성을 위해 소수점 6자리로 반올림하여 표시됩니다. 대부분의 일상적이고 실용적인 목적에는 이 이상의 정밀도가 필요하지 않습니다.`,
    },
    related: {
      heading: `관련 계산기`,
      linkText: `퍼센트 계산기`,
      description: `— 할인, 부가세, 퍼센트 변화 등의 계산에 사용할 수 있습니다.`,
    },
  },

  hi: {
    whatIsConverter: {
      heading: `यूनिट कन्वर्टर के बारे में`,
      body: `यह कन्वर्टर छह तरह की इकाइयों को कवर करता है: लंबाई, वज़न, आयतन, तापमान, दबाव और टॉर्क। एक श्रेणी चुनें, किसी भी इकाई में एक मान डालें, और दूसरी इकाई में नतीजा बिना किसी बटन दबाए तुरंत अपडेट हो जाता है।`,
    },
    categoriesOverview: {
      heading: `मेट्रिक और इंपीरियल इकाइयां एक ही टूल में`,
      body: `हर श्रेणी में मेट्रिक इकाइयां (जैसे मीटर, किलोग्राम और लीटर) और इंपीरियल/अमेरिकी इकाइयां (जैसे इंच, पाउंड और गैलन) दोनों शामिल हैं, क्योंकि ज़्यादातर लोग जिन्हें कन्वर्ट करने की ज़रूरत होती है, वे इन्हीं दो व्यवस्थाओं के बीच जाना चाहते हैं। आप एक ही श्रेणी के भीतर किसी भी संयोजन में इकाई चुन सकते हैं।`,
    },
    temperature: {
      heading: `तापमान एक खास मामला है`,
      body: `लंबाई, वज़न और आयतन के विपरीत, जिन्हें एक स्थिर गुणांक से गुणा करके बदला जाता है, तापमान के लिए गुणा और जोड़ दोनों वाला फ़ॉर्मूला चाहिए, क्योंकि पैमानों के शून्य बिंदु अलग-अलग होते हैं। उदाहरण के लिए, सेल्सियस से फ़ारेनहाइट में बदलाव इस तरह होता है:`,
      code: `°F = (°C × 9/5) + 32`,
    },
    accuracy: {
      heading: `कन्वर्जन कितने सटीक हैं`,
      body: `सभी कन्वर्जन आधिकारिक SI परिभाषाओं और अन्य मानकीकृत रूपांतरण कारकों पर आधारित हैं, और पढ़ने में आसानी के लिए छह दशमलव स्थानों तक पूर्णांकित दिखाए जाते हैं। ज़्यादातर रोज़मर्रा और व्यावहारिक ज़रूरतों के लिए, यह आपकी ज़रूरत से कहीं ज़्यादा सटीक है।`,
    },
    related: {
      heading: `संबंधित कैलकुलेटर`,
      linkText: `प्रतिशत कैलकुलेटर`,
      description: `— छूट, टैक्स और प्रतिशत परिवर्तन जैसी प्रतिशत गणनाओं के लिए।`,
    },
  },

  id: {
    whatIsConverter: {
      heading: `Tentang konverter satuan`,
      body: `Konverter ini mencakup enam kategori satuan: panjang, berat, volume, suhu, tekanan, dan torsi. Pilih kategori, masukkan nilai di salah satu satuan, dan hasil di satuan lainnya langsung diperbarui tanpa perlu menekan tombol apa pun.`,
    },
    categoriesOverview: {
      heading: `Satuan metrik dan imperial dalam satu alat`,
      body: `Setiap kategori menggabungkan satuan metrik (seperti meter, kilogram, dan liter) dengan satuan imperial/AS (seperti inci, pon, dan galon), karena kebanyakan orang yang perlu mengonversi memang ingin berpindah antara kedua sistem tersebut. Kamu bisa memilih satuan asal dan tujuan dalam kombinasi apa pun dalam kategori yang sama.`,
    },
    temperature: {
      heading: `Suhu adalah kasus khusus`,
      body: `Berbeda dari panjang, berat, dan volume yang dikonversi dengan mengalikan faktor tetap, suhu memerlukan rumus dengan perkalian sekaligus penjumlahan, karena skalanya memiliki titik nol yang berbeda. Celsius ke Fahrenheit, misalnya, dihitung seperti ini:`,
      code: `°F = (°C × 9/5) + 32`,
    },
    accuracy: {
      heading: `Seberapa akurat konversinya`,
      body: `Semua konversi didasarkan pada definisi SI resmi dan faktor konversi standar lainnya, ditampilkan dibulatkan hingga enam angka desimal agar mudah dibaca. Untuk sebagian besar keperluan sehari-hari dan praktis, itu jauh lebih presisi daripada yang kamu perlukan.`,
    },
    related: {
      heading: `Kalkulator terkait`,
      linkText: `Kalkulator Persen`,
      description: `— untuk perhitungan persentase seperti diskon, PPN, dan perubahan persen.`,
    },
  },
};

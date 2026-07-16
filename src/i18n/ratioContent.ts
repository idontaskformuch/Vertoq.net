export interface RatioContent {
  whatIsRatio: { heading: string; body: string };
  simplifying: { heading: string; body: string };
  proportions: { heading: string; body: string };
  useCases: { heading: string; body: string };
  related: { heading: string; linkText: string; description: string };
}

export const ratioContent: Record<string, RatioContent> = {
  sv: {
    whatIsRatio: {
      heading: `Vad ett förhållande visar`,
      body: `Ett förhållande, skrivet a:b, jämför storleken på två mängder. 2:3 betyder att för varje 2 enheter av det första finns det 3 enheter av det andra, oavsett de faktiska storlekarna, ett förhållande på 200:300 betyder exakt samma sak som 2:3.`,
    },
    simplifying: {
      heading: `Att förenkla ett förhållande`,
      body: `Precis som ett bråk förenklas ett förhållande genom att dela båda talen med deras största gemensamma delare. 4:6 har SGD 2, så både 4 och 6 delas med 2 för att ge 2:3, samma förhållande i sin enklaste form.`,
    },
    proportions: {
      heading: `Att lösa en proportion`,
      body: `En proportion säger att två förhållanden är lika: A:B = C:X. För att lösa ut det saknade talet X, multiplicera B med C och dela med A: X = (B × C) / A. Om ett recept till exempel kräver mjöl och socker i förhållandet 2:3, och du har 5 koppar mjöl, blir sockermängden (3 × 5) / 2 = 7,5 koppar.`,
    },
    useCases: {
      heading: `Vanliga användningsområden`,
      body: `Förhållanden och proportioner används för att skala recept, blanda färg eller kemikalier i rätt koncentration, räkna om kartskalor, och jämföra storleksförhållanden i allt från finans till design.`,
    },
    related: {
      heading: `Relaterad kalkylator`,
      linkText: `Bråkräknare`,
      description: `— för att addera, subtrahera, multiplicera och dividera bråk.`,
    },
  },

  en: {
    whatIsRatio: {
      heading: `What a ratio shows`,
      body: `A ratio, written a:b, compares the size of two quantities. 2:3 means that for every 2 units of the first thing, there are 3 units of the second, regardless of the actual sizes involved, a ratio of 200:300 means exactly the same thing as 2:3.`,
    },
    simplifying: {
      heading: `Simplifying a ratio`,
      body: `Just like a fraction, a ratio is simplified by dividing both numbers by their greatest common divisor. 4:6 has a GCD of 2, so both 4 and 6 divide by 2 to give 2:3, the same ratio in its simplest form.`,
    },
    proportions: {
      heading: `Solving a proportion`,
      body: `A proportion states that two ratios are equal: A:B = C:X. To solve for the missing number X, multiply B by C and divide by A: X = (B × C) / A. For example, if a recipe calls for flour and sugar in a 2:3 ratio, and you have 5 cups of flour, the sugar amount is (3 × 5) / 2 = 7.5 cups.`,
    },
    useCases: {
      heading: `Common uses`,
      body: `Ratios and proportions are used to scale recipes, mix paint or chemicals to the right concentration, convert map scales, and compare size relationships in everything from finance to design.`,
    },
    related: {
      heading: `Related calculator`,
      linkText: `Fraction Calculator`,
      description: `— to add, subtract, multiply, and divide fractions.`,
    },
  },

  pt: {
    whatIsRatio: {
      heading: `O que uma proporção mostra`,
      body: `Uma proporção, escrita a:b, compara o tamanho de duas quantidades. 2:3 significa que para cada 2 unidades da primeira coisa, há 3 unidades da segunda, independente dos tamanhos reais envolvidos, uma proporção de 200:300 significa exatamente o mesmo que 2:3.`,
    },
    simplifying: {
      heading: `Simplificando uma proporção`,
      body: `Assim como uma fração, uma proporção é simplificada dividindo os dois números pelo seu máximo divisor comum. 4:6 tem MDC 2, então tanto 4 quanto 6 se dividem por 2, resultando em 2:3, a mesma proporção na sua forma mais simples.`,
    },
    proportions: {
      heading: `Resolvendo uma proporção`,
      body: `Uma proporção afirma que duas razões são iguais: A:B = C:X. Para calcular o número X que falta, multiplique B por C e divida por A: X = (B × C) / A. Por exemplo, se uma receita pede farinha e açúcar na proporção 2:3, e você tem 5 xícaras de farinha, a quantidade de açúcar é (3 × 5) / 2 = 7,5 xícaras.`,
    },
    useCases: {
      heading: `Usos comuns`,
      body: `Proporções são usadas para ajustar receitas, misturar tinta ou produtos químicos na concentração certa, converter escalas de mapas, e comparar relações de tamanho em áreas que vão das finanças ao design.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de Frações`,
      description: `— para somar, subtrair, multiplicar e dividir frações.`,
    },
  },

  es: {
    whatIsRatio: {
      heading: `Qué muestra una proporción`,
      body: `Una proporción, escrita a:b, compara el tamaño de dos cantidades. 2:3 significa que por cada 2 unidades de lo primero, hay 3 unidades de lo segundo, sin importar los tamaños reales involucrados, una proporción de 200:300 significa exactamente lo mismo que 2:3.`,
    },
    simplifying: {
      heading: `Simplificar una proporción`,
      body: `Igual que una fracción, una proporción se simplifica dividiendo ambos números entre su máximo común divisor. 4:6 tiene un MCD de 2, así que tanto 4 como 6 se dividen entre 2 para dar 2:3, la misma proporción en su forma más simple.`,
    },
    proportions: {
      heading: `Resolver una proporción`,
      body: `Una proporción establece que dos razones son iguales: A:B = C:X. Para calcular el número X que falta, multiplica B por C y divide entre A: X = (B × C) / A. Por ejemplo, si una receta pide harina y azúcar en proporción 2:3, y tienes 5 tazas de harina, la cantidad de azúcar es (3 × 5) / 2 = 7,5 tazas.`,
    },
    useCases: {
      heading: `Usos comunes`,
      body: `Las proporciones se usan para ajustar recetas, mezclar pintura o químicos en la concentración correcta, convertir escalas de mapas, y comparar relaciones de tamaño en áreas que van de las finanzas al diseño.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de Fracciones`,
      description: `— para sumar, restar, multiplicar y dividir fracciones.`,
    },
  },

  de: {
    whatIsRatio: {
      heading: `Was ein Verhältnis zeigt`,
      body: `Ein Verhältnis, geschrieben a:b, vergleicht die Größe zweier Mengen. 2:3 bedeutet, dass es für je 2 Einheiten der ersten Sache 3 Einheiten der zweiten gibt, unabhängig von den tatsächlichen Größen, ein Verhältnis von 200:300 bedeutet genau dasselbe wie 2:3.`,
    },
    simplifying: {
      heading: `Ein Verhältnis kürzen`,
      body: `Genau wie ein Bruch wird ein Verhältnis gekürzt, indem beide Zahlen durch ihren größten gemeinsamen Teiler geteilt werden. 4:6 hat den ggT 2, also ergeben sowohl 4 als auch 6 geteilt durch 2 den Wert 2:3, dasselbe Verhältnis in seiner einfachsten Form.`,
    },
    proportions: {
      heading: `Eine Proportion lösen`,
      body: `Eine Proportion besagt, dass zwei Verhältnisse gleich sind: A:B = C:X. Um die fehlende Zahl X zu berechnen, multipliziere B mit C und teile durch A: X = (B × C) / A. Verlangt ein Rezept zum Beispiel Mehl und Zucker im Verhältnis 2:3, und du hast 5 Tassen Mehl, beträgt die Zuckermenge (3 × 5) / 2 = 7,5 Tassen.`,
    },
    useCases: {
      heading: `Häufige Anwendungen`,
      body: `Verhältnisse und Proportionen werden verwendet, um Rezepte zu skalieren, Farbe oder Chemikalien in der richtigen Konzentration zu mischen, Kartenmaßstäbe umzurechnen und Größenverhältnisse zu vergleichen, von Finanzen bis Design.`,
    },
    related: {
      heading: `Verwandter Rechner`,
      linkText: `Bruchrechner`,
      description: `— zum Addieren, Subtrahieren, Multiplizieren und Dividieren von Brüchen.`,
    },
  },

  ja: {
    whatIsRatio: {
      heading: `比が示すもの`,
      body: `a:b と書かれる比は、2つの量の大きさを比較します。2:3は、最初のものが2単位あるごとに、2番目のものが3単位あることを意味し、実際の大きさに関係なく、200:300という比は2:3とまったく同じことを意味します。`,
    },
    simplifying: {
      heading: `比を約分する`,
      body: `分数と同じように、比は両方の数を最大公約数で割ることで約分できます。4:6の最大公約数は2なので、4と6をそれぞれ2で割ると2:3になり、同じ比をより簡単な形で表せます。`,
    },
    proportions: {
      heading: `比例式を解く`,
      body: `比例式は、2つの比が等しいことを表します：A:B = C:X。未知の数Xを求めるには、BにCを掛けてAで割ります：X = (B × C) / A。例えば、レシピで小麦粉と砂糖の比が2:3で、小麦粉が5カップある場合、砂糖の量は (3 × 5) / 2 = 7.5カップになります。`,
    },
    useCases: {
      heading: `よくある使い道`,
      body: `比と比例は、レシピの分量を調整したり、絵の具や薬品を正しい濃度で混ぜたり、地図の縮尺を変換したり、金融からデザインまであらゆる分野でサイズの関係を比較したりするために使われます。`,
    },
    related: {
      heading: `関連する計算機`,
      linkText: `分数計算機`,
      description: `— 分数の足し算、引き算、掛け算、割り算に使えます。`,
    },
  },

  zh: {
    whatIsRatio: {
      heading: `比例表示的是什么`,
      body: `比例写作a:b，用于比较两个数量的大小。2:3表示第一个量每有2份，第二个量就有3份，无论实际数值多大，200:300这个比例和2:3的含义完全相同。`,
    },
    simplifying: {
      heading: `化简比例`,
      body: `和分数一样，比例可以通过把两个数都除以它们的最大公约数来化简。4:6的最大公约数是2，所以4和6都除以2，得到2:3，这是同一比例的最简形式。`,
    },
    proportions: {
      heading: `求解比例式`,
      body: `比例式表示两个比相等：A:B = C:X。要求出缺失的数X，用B乘以C再除以A：X = (B × C) / A。例如，如果一个食谱要求面粉和糖的比例是2:3，而你有5杯面粉，那么糖的用量就是 (3 × 5) / 2 = 7.5杯。`,
    },
    useCases: {
      heading: `常见应用场景`,
      body: `比例被用来调整食谱用量、按正确浓度混合颜料或化学品、换算地图比例尺，以及在金融、设计等各个领域比较大小关系。`,
    },
    related: {
      heading: `相关计算器`,
      linkText: `分数计算器`,
      description: `— 用于分数的加减乘除运算。`,
    },
  },

  ko: {
    whatIsRatio: {
      heading: `비율이 보여주는 것`,
      body: `a:b로 표기하는 비율은 두 수량의 크기를 비교합니다. 2:3은 첫 번째 것이 2단위일 때마다 두 번째 것이 3단위 있다는 뜻이며, 실제 크기와 상관없이 200:300이라는 비율도 2:3과 정확히 같은 의미입니다.`,
    },
    simplifying: {
      heading: `비율 약분하기`,
      body: `분수와 마찬가지로, 두 숫자를 최대공약수로 나누면 비율이 약분됩니다. 4:6의 최대공약수는 2이므로, 4와 6을 각각 2로 나누면 2:3이 되며, 이는 같은 비율을 가장 간단한 형태로 나타낸 것입니다.`,
    },
    proportions: {
      heading: `비례식 풀기`,
      body: `비례식은 두 비율이 같다는 것을 나타냅니다: A:B = C:X. 빠진 값 X를 구하려면 B에 C를 곱하고 A로 나눕니다: X = (B × C) / A. 예를 들어 레시피에서 밀가루와 설탕의 비율이 2:3이고 밀가루가 5컵 있다면, 설탕의 양은 (3 × 5) / 2 = 7.5컵입니다.`,
    },
    useCases: {
      heading: `흔한 활용 사례`,
      body: `비율과 비례식은 레시피의 양을 조절하거나, 페인트나 화학 물질을 올바른 농도로 섞거나, 지도의 축척을 변환하거나, 금융부터 디자인까지 다양한 분야에서 크기 관계를 비교하는 데 사용됩니다.`,
    },
    related: {
      heading: `관련 계산기`,
      linkText: `분수 계산기`,
      description: `— 분수의 덧셈, 뺄셈, 곱셈, 나눗셈에 사용할 수 있습니다.`,
    },
  },

  hi: {
    whatIsRatio: {
      heading: `अनुपात क्या दिखाता है`,
      body: `a:b के रूप में लिखा गया अनुपात दो मात्राओं के आकार की तुलना करता है। 2:3 का मतलब है कि पहली चीज़ की हर 2 इकाई के लिए, दूसरी चीज़ की 3 इकाइयां होती हैं, चाहे असली आकार कुछ भी हो, 200:300 का अनुपात बिल्कुल वही बात कहता है जो 2:3 कहता है।`,
    },
    simplifying: {
      heading: `अनुपात को सरल बनाना`,
      body: `भिन्न की तरह ही, अनुपात को दोनों संख्याओं को उनके महत्तम समापवर्तक से भाग देकर सरल बनाया जाता है। 4:6 का GCD 2 है, इसलिए 4 और 6 दोनों को 2 से भाग देने पर 2:3 मिलता है, वही अनुपात लेकिन सबसे सरल रूप में।`,
    },
    proportions: {
      heading: `समानुपात हल करना`,
      body: `एक समानुपात बताता है कि दो अनुपात बराबर हैं: A:B = C:X। लापता संख्या X निकालने के लिए, B को C से गुणा करें और A से भाग दें: X = (B × C) / A। उदाहरण के लिए, अगर किसी रेसिपी में आटे और चीनी का अनुपात 2:3 है, और आपके पास 5 कप आटा है, तो चीनी की मात्रा (3 × 5) / 2 = 7.5 कप होगी।`,
    },
    useCases: {
      heading: `आम इस्तेमाल`,
      body: `अनुपात और समानुपात का इस्तेमाल रेसिपी की मात्रा बदलने, सही सांद्रता में पेंट या रसायन मिलाने, नक्शे के पैमाने बदलने, और वित्त से लेकर डिज़ाइन तक हर क्षेत्र में आकार के संबंधों की तुलना करने के लिए किया जाता है।`,
    },
    related: {
      heading: `संबंधित कैलकुलेटर`,
      linkText: `भिन्न कैलकुलेटर`,
      description: `— भिन्नों को जोड़ने, घटाने, गुणा करने और भाग करने के लिए।`,
    },
  },

  id: {
    whatIsRatio: {
      heading: `Apa yang ditunjukkan rasio`,
      body: `Rasio, ditulis a:b, membandingkan besarnya dua kuantitas. 2:3 berarti untuk setiap 2 unit hal pertama, ada 3 unit hal kedua, terlepas dari besaran sebenarnya, rasio 200:300 memiliki arti yang sama persis dengan 2:3.`,
    },
    simplifying: {
      heading: `Menyederhanakan rasio`,
      body: `Sama seperti pecahan, rasio disederhanakan dengan membagi kedua angka dengan faktor persekutuan terbesarnya. 4:6 memiliki FPB 2, jadi 4 dan 6 sama-sama dibagi 2 untuk menghasilkan 2:3, rasio yang sama dalam bentuk paling sederhana.`,
    },
    proportions: {
      heading: `Menyelesaikan proporsi`,
      body: `Proporsi menyatakan bahwa dua rasio itu sama: A:B = C:X. Untuk mencari angka X yang hilang, kalikan B dengan C lalu bagi dengan A: X = (B × C) / A. Misalnya, jika sebuah resep membutuhkan tepung dan gula dengan rasio 2:3, dan kamu punya 5 cangkir tepung, jumlah gulanya adalah (3 × 5) / 2 = 7,5 cangkir.`,
    },
    useCases: {
      heading: `Penggunaan umum`,
      body: `Rasio dan proporsi digunakan untuk menyesuaikan takaran resep, mencampur cat atau bahan kimia dengan konsentrasi yang tepat, mengonversi skala peta, dan membandingkan hubungan ukuran di berbagai bidang mulai dari keuangan hingga desain.`,
    },
    related: {
      heading: `Kalkulator terkait`,
      linkText: `Kalkulator Pecahan`,
      description: `— untuk menjumlahkan, mengurangkan, mengalikan, dan membagi pecahan.`,
    },
  },
};

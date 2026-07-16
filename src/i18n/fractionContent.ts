export interface FractionContent {
  whatIsFraction: { heading: string; body: string };
  operations: { heading: string; addSub: string; mulDiv: string };
  simplifying: { heading: string; body: string };
  mixedNumbers: { heading: string; body: string };
  related: { heading: string; linkText: string; description: string };
}

export const fractionContent: Record<string, FractionContent> = {
  sv: {
    whatIsFraction: {
      heading: `Att räkna med bråk`,
      body: `Bråk räknas annorlunda beroende på om du adderar/subtraherar eller multiplicerar/dividerar, och kalkylatorn ovan förenklar automatiskt svaret till minsta möjliga täljare och nämnare.`,
    },
    operations: {
      heading: `Metoderna bakom räknesätten`,
      addSub: `Addition och subtraktion kräver gemensam nämnare först. 1/2 + 1/3 blir 3/6 + 2/6 = 5/6, genom att skala varje bråk så att nämnarna matchar innan täljarna läggs ihop eller dras ifrån.`,
      mulDiv: `Multiplikation är enklast av alla: multiplicera täljare med täljare och nämnare med nämnare, som i 1/2 × 1/3 = 1/6. Division vänder på det andra bråket och multiplicerar istället, så 1/2 ÷ 1/3 blir 1/2 × 3/1 = 3/2.`,
    },
    simplifying: {
      heading: `Att förenkla ett bråk`,
      body: `Ett bråk förenklas genom att dela täljare och nämnare med deras största gemensamma delare (SGD). 12/16 har SGD 4, så både 12 och 16 delas med 4 för att ge 3/4, samma värde men i sin enklaste form.`,
    },
    mixedNumbers: {
      heading: `Blandad form och oäkta bråk`,
      body: `Ett blandat tal som 1½ kan skrivas om som ett oäkta bråk (täljaren större än nämnaren) genom att multiplicera heltalet med nämnaren och lägga till täljaren: 1½ = (1×2+1)/2 = 3/2. Kalkylatorn ovan arbetar med oäkta bråk, så skriv om blandade tal på det sättet innan du matar in dem.`,
    },
    related: {
      heading: `Relaterad kalkylator`,
      linkText: `Procenträknare`,
      description: `— för procent, rabatt och andra typer av procentberäkningar.`,
    },
  },

  en: {
    whatIsFraction: {
      heading: `Working with fractions`,
      body: `Fractions are calculated differently depending on whether you're adding/subtracting or multiplying/dividing, and the calculator above automatically simplifies the answer to the smallest possible numerator and denominator.`,
    },
    operations: {
      heading: `The methods behind each operation`,
      addSub: `Addition and subtraction require a common denominator first. 1/2 + 1/3 becomes 3/6 + 2/6 = 5/6, by scaling each fraction so the denominators match before adding or subtracting the numerators.`,
      mulDiv: `Multiplication is the simplest of all: multiply numerator by numerator and denominator by denominator, as in 1/2 × 1/3 = 1/6. Division flips the second fraction and multiplies instead, so 1/2 ÷ 1/3 becomes 1/2 × 3/1 = 3/2.`,
    },
    simplifying: {
      heading: `Simplifying a fraction`,
      body: `A fraction is simplified by dividing the numerator and denominator by their greatest common divisor (GCD). 12/16 has a GCD of 4, so both 12 and 16 divide by 4 to give 3/4, the same value in its simplest form.`,
    },
    mixedNumbers: {
      heading: `Mixed numbers and improper fractions`,
      body: `A mixed number like 1½ can be rewritten as an improper fraction (numerator larger than denominator) by multiplying the whole number by the denominator and adding the numerator: 1½ = (1×2+1)/2 = 3/2. The calculator above works with improper fractions, so convert mixed numbers this way before entering them.`,
    },
    related: {
      heading: `Related calculator`,
      linkText: `Percentage Calculator`,
      description: `— for percent, discounts, and other percentage math.`,
    },
  },

  pt: {
    whatIsFraction: {
      heading: `Trabalhando com frações`,
      body: `As frações são calculadas de forma diferente dependendo se você está somando/subtraindo ou multiplicando/dividindo, e a calculadora acima simplifica automaticamente a resposta para o menor numerador e denominador possíveis.`,
    },
    operations: {
      heading: `Os métodos por trás de cada operação`,
      addSub: `Soma e subtração exigem um denominador comum primeiro. 1/2 + 1/3 vira 3/6 + 2/6 = 5/6, ajustando cada fração para que os denominadores coincidam antes de somar ou subtrair os numeradores.`,
      mulDiv: `A multiplicação é a mais simples de todas: multiplique numerador por numerador e denominador por denominador, como em 1/2 × 1/3 = 1/6. A divisão inverte a segunda fração e multiplica, então 1/2 ÷ 1/3 vira 1/2 × 3/1 = 3/2.`,
    },
    simplifying: {
      heading: `Simplificando uma fração`,
      body: `Uma fração é simplificada dividindo o numerador e o denominador pelo máximo divisor comum (MDC). 12/16 tem MDC 4, então tanto 12 quanto 16 se dividem por 4, resultando em 3/4, o mesmo valor na sua forma mais simples.`,
    },
    mixedNumbers: {
      heading: `Números mistos e frações impróprias`,
      body: `Um número misto como 1½ pode ser reescrito como uma fração imprópria (numerador maior que o denominador) multiplicando o número inteiro pelo denominador e somando o numerador: 1½ = (1×2+1)/2 = 3/2. A calculadora acima trabalha com frações impróprias, então converta números mistos dessa forma antes de digitá-los.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de Porcentagem`,
      description: `— para porcentagem, descontos e outros cálculos percentuais.`,
    },
  },

  es: {
    whatIsFraction: {
      heading: `Trabajar con fracciones`,
      body: `Las fracciones se calculan de forma distinta según si estás sumando/restando o multiplicando/dividiendo, y la calculadora de arriba simplifica automáticamente la respuesta al numerador y denominador más pequeños posibles.`,
    },
    operations: {
      heading: `Los métodos detrás de cada operación`,
      addSub: `La suma y la resta requieren un denominador común primero. 1/2 + 1/3 se convierte en 3/6 + 2/6 = 5/6, ajustando cada fracción para que los denominadores coincidan antes de sumar o restar los numeradores.`,
      mulDiv: `La multiplicación es la más sencilla de todas: multiplica numerador por numerador y denominador por denominador, como en 1/2 × 1/3 = 1/6. La división invierte la segunda fracción y multiplica en su lugar, así que 1/2 ÷ 1/3 se convierte en 1/2 × 3/1 = 3/2.`,
    },
    simplifying: {
      heading: `Simplificar una fracción`,
      body: `Una fracción se simplifica dividiendo el numerador y el denominador entre su máximo común divisor (MCD). 12/16 tiene un MCD de 4, así que tanto 12 como 16 se dividen entre 4 para dar 3/4, el mismo valor en su forma más simple.`,
    },
    mixedNumbers: {
      heading: `Números mixtos y fracciones impropias`,
      body: `Un número mixto como 1½ puede reescribirse como una fracción impropia (numerador mayor que el denominador) multiplicando el número entero por el denominador y sumando el numerador: 1½ = (1×2+1)/2 = 3/2. La calculadora de arriba trabaja con fracciones impropias, así que convierte los números mixtos de esta forma antes de introducirlos.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de Porcentaje`,
      description: `— para porcentajes, descuentos y otros cálculos porcentuales.`,
    },
  },

  de: {
    whatIsFraction: {
      heading: `Mit Brüchen rechnen`,
      body: `Brüche werden unterschiedlich berechnet, je nachdem, ob du addierst/subtrahierst oder multiplizierst/dividierst, und der Rechner oben kürzt das Ergebnis automatisch auf den kleinstmöglichen Zähler und Nenner.`,
    },
    operations: {
      heading: `Die Methoden hinter jeder Rechenart`,
      addSub: `Addition und Subtraktion brauchen zuerst einen gemeinsamen Nenner. 1/2 + 1/3 wird zu 3/6 + 2/6 = 5/6, indem jeder Bruch so skaliert wird, dass die Nenner übereinstimmen, bevor die Zähler addiert oder subtrahiert werden.`,
      mulDiv: `Multiplikation ist die einfachste von allen: Zähler mal Zähler und Nenner mal Nenner, wie bei 1/2 × 1/3 = 1/6. Division dreht den zweiten Bruch um und multipliziert stattdessen, sodass 1/2 ÷ 1/3 zu 1/2 × 3/1 = 3/2 wird.`,
    },
    simplifying: {
      heading: `Einen Bruch kürzen`,
      body: `Ein Bruch wird gekürzt, indem Zähler und Nenner durch ihren größten gemeinsamen Teiler (ggT) geteilt werden. 12/16 hat den ggT 4, also ergeben sowohl 12 als auch 16 geteilt durch 4 den Wert 3/4, denselben Wert in seiner einfachsten Form.`,
    },
    mixedNumbers: {
      heading: `Gemischte Zahlen und unechte Brüche`,
      body: `Eine gemischte Zahl wie 1½ lässt sich als unechter Bruch (Zähler größer als Nenner) umschreiben, indem man die ganze Zahl mit dem Nenner multipliziert und den Zähler addiert: 1½ = (1×2+1)/2 = 3/2. Der Rechner oben arbeitet mit unechten Brüchen, also wandle gemischte Zahlen auf diese Weise um, bevor du sie eingibst.`,
    },
    related: {
      heading: `Verwandter Rechner`,
      linkText: `Prozentrechner`,
      description: `— für Prozent, Rabatte und andere Prozentrechnungen.`,
    },
  },

  ja: {
    whatIsFraction: {
      heading: `分数の計算について`,
      body: `分数は、足し算・引き算をする場合と、掛け算・割り算をする場合とで計算方法が異なります。上の計算機は、答えを自動的に最も簡単な分子と分母に約分します。`,
    },
    operations: {
      heading: `各計算方法の仕組み`,
      addSub: `足し算と引き算は、まず分母をそろえる必要があります。1/2 + 1/3 は、それぞれの分数を分母が一致するように変形してから分子を足したり引いたりすることで、3/6 + 2/6 = 5/6 になります。`,
      mulDiv: `掛け算はすべての中で最もシンプルです。1/2 × 1/3 = 1/6 のように、分子同士、分母同士をそれぞれ掛け合わせます。割り算は2つ目の分数を逆にしてから掛け算するので、1/2 ÷ 1/3 は 1/2 × 3/1 = 3/2 になります。`,
    },
    simplifying: {
      heading: `分数を約分する`,
      body: `分数は、分子と分母を最大公約数（GCD）で割ることで約分できます。12/16の最大公約数は4なので、12と16をそれぞれ4で割ると3/4になり、同じ値をより簡単な形で表せます。`,
    },
    mixedNumbers: {
      heading: `帯分数と仮分数`,
      body: `1½のような帯分数は、整数部分に分母を掛けて分子を足すことで、仮分数（分子が分母より大きい分数）に書き換えられます。1½ = (1×2+1)/2 = 3/2 です。上の計算機は仮分数で計算するため、帯分数を入力する前にこの方法で変換してください。`,
    },
    related: {
      heading: `関連する計算機`,
      linkText: `パーセント計算機`,
      description: `— パーセント、割引など、その他のパーセント計算に使えます。`,
    },
  },

  zh: {
    whatIsFraction: {
      heading: `分数运算`,
      body: `分数的计算方式取决于是加减法还是乘除法，上面的计算器会自动把答案化简为最简的分子和分母。`,
    },
    operations: {
      heading: `每种运算背后的方法`,
      addSub: `加法和减法需要先通分。1/2 + 1/3 会先把每个分数变换成分母相同的形式，再对分子进行加减，得到 3/6 + 2/6 = 5/6。`,
      mulDiv: `乘法是所有运算中最简单的：分子乘分子，分母乘分母，如 1/2 × 1/3 = 1/6。除法则是把第二个分数上下颠倒后再相乘，所以 1/2 ÷ 1/3 变成 1/2 × 3/1 = 3/2。`,
    },
    simplifying: {
      heading: `化简分数`,
      body: `将分子和分母同时除以它们的最大公约数（GCD），即可化简分数。12/16的最大公约数是4，所以12和16都除以4，得到3/4，数值相同但是最简形式。`,
    },
    mixedNumbers: {
      heading: `带分数与假分数`,
      body: `像1½这样的带分数，可以通过把整数部分乘以分母再加上分子，改写成假分数（分子大于分母）：1½ = (1×2+1)/2 = 3/2。上面的计算器使用假分数进行计算，所以输入前请先按这个方法把带分数转换过来。`,
    },
    related: {
      heading: `相关计算器`,
      linkText: `百分比计算器`,
      description: `— 用于百分比、折扣等其他百分比计算。`,
    },
  },

  ko: {
    whatIsFraction: {
      heading: `분수 계산에 대하여`,
      body: `분수는 덧셈/뺄셈을 하는지, 곱셈/나눗셈을 하는지에 따라 계산 방식이 다르며, 위 계산기는 답을 자동으로 가장 간단한 분자와 분모로 약분합니다.`,
    },
    operations: {
      heading: `각 연산 방식의 원리`,
      addSub: `덧셈과 뺄셈은 먼저 공통 분모가 필요합니다. 1/2 + 1/3은 각 분수를 분모가 같아지도록 변형한 다음 분자를 더하거나 빼서 3/6 + 2/6 = 5/6이 됩니다.`,
      mulDiv: `곱셈은 모든 연산 중 가장 간단합니다. 1/2 × 1/3 = 1/6처럼 분자는 분자끼리, 분모는 분모끼리 곱합니다. 나눗셈은 두 번째 분수를 뒤집어 곱하는 것과 같아서, 1/2 ÷ 1/3은 1/2 × 3/1 = 3/2가 됩니다.`,
    },
    simplifying: {
      heading: `분수 약분하기`,
      body: `분자와 분모를 최대공약수(GCD)로 나누면 분수가 약분됩니다. 12/16의 최대공약수는 4이므로, 12와 16을 각각 4로 나누면 3/4가 되며, 이는 같은 값을 가장 간단한 형태로 나타낸 것입니다.`,
    },
    mixedNumbers: {
      heading: `대분수와 가분수`,
      body: `1½ 같은 대분수는 정수 부분에 분모를 곱하고 분자를 더해 가분수(분자가 분모보다 큰 분수)로 바꿀 수 있습니다: 1½ = (1×2+1)/2 = 3/2. 위 계산기는 가분수로 계산하므로, 입력하기 전에 대분수를 이 방식으로 변환하세요.`,
    },
    related: {
      heading: `관련 계산기`,
      linkText: `퍼센트 계산기`,
      description: `— 퍼센트, 할인 등 다른 퍼센트 계산에 사용할 수 있습니다.`,
    },
  },

  hi: {
    whatIsFraction: {
      heading: `भिन्नों के साथ काम करना`,
      body: `भिन्नों की गणना इस बात पर निर्भर करती है कि आप जोड़/घटाव कर रहे हैं या गुणा/भाग, और ऊपर का कैलकुलेटर नतीजे को अपने आप सबसे छोटे संभव अंश और हर में सरल कर देता है।`,
    },
    operations: {
      heading: `हर क्रिया के पीछे की विधि`,
      addSub: `जोड़ और घटाव के लिए पहले समान हर चाहिए। 1/2 + 1/3, 3/6 + 2/6 = 5/6 बन जाता है, हर भिन्न को इस तरह बदलकर कि हर बराबर हो जाएं, उसके बाद अंशों को जोड़ा या घटाया जाता है।`,
      mulDiv: `गुणा सबसे आसान है: अंश को अंश से और हर को हर से गुणा करें, जैसे 1/2 × 1/3 = 1/6। भाग में दूसरे भिन्न को उल्टा करके गुणा किया जाता है, इसलिए 1/2 ÷ 1/3, 1/2 × 3/1 = 3/2 बन जाता है।`,
    },
    simplifying: {
      heading: `भिन्न को सरल बनाना`,
      body: `अंश और हर को उनके महत्तम समापवर्तक (GCD) से भाग देकर भिन्न को सरल बनाया जाता है। 12/16 का GCD 4 है, इसलिए 12 और 16 दोनों को 4 से भाग देने पर 3/4 मिलता है, वही मान लेकिन सबसे सरल रूप में।`,
    },
    mixedNumbers: {
      heading: `मिश्रित संख्याएं और विषम भिन्न`,
      body: `1½ जैसी मिश्रित संख्या को पूर्णांक को हर से गुणा करके और अंश जोड़कर विषम भिन्न (अंश हर से बड़ा) में बदला जा सकता है: 1½ = (1×2+1)/2 = 3/2। ऊपर का कैलकुलेटर विषम भिन्नों के साथ काम करता है, इसलिए दर्ज करने से पहले मिश्रित संख्याओं को इस तरह बदल लें।`,
    },
    related: {
      heading: `संबंधित कैलकुलेटर`,
      linkText: `प्रतिशत कैलकुलेटर`,
      description: `— प्रतिशत, छूट और अन्य प्रतिशत गणनाओं के लिए।`,
    },
  },

  id: {
    whatIsFraction: {
      heading: `Bekerja dengan pecahan`,
      body: `Pecahan dihitung dengan cara berbeda tergantung apakah kamu menjumlahkan/mengurangkan atau mengalikan/membagi, dan kalkulator di atas otomatis menyederhanakan jawaban ke pembilang dan penyebut sekecil mungkin.`,
    },
    operations: {
      heading: `Metode di balik setiap operasi`,
      addSub: `Penjumlahan dan pengurangan memerlukan penyebut yang sama terlebih dahulu. 1/2 + 1/3 menjadi 3/6 + 2/6 = 5/6, dengan menyesuaikan setiap pecahan agar penyebutnya sama sebelum menjumlahkan atau mengurangkan pembilangnya.`,
      mulDiv: `Perkalian adalah yang paling sederhana: kalikan pembilang dengan pembilang dan penyebut dengan penyebut, seperti pada 1/2 × 1/3 = 1/6. Pembagian membalik pecahan kedua lalu mengalikannya, jadi 1/2 ÷ 1/3 menjadi 1/2 × 3/1 = 3/2.`,
    },
    simplifying: {
      heading: `Menyederhanakan pecahan`,
      body: `Pecahan disederhanakan dengan membagi pembilang dan penyebut dengan faktor persekutuan terbesar (FPB) keduanya. 12/16 memiliki FPB 4, jadi 12 dan 16 sama-sama dibagi 4 untuk menghasilkan 3/4, nilai yang sama dalam bentuk paling sederhana.`,
    },
    mixedNumbers: {
      heading: `Bilangan campuran dan pecahan tidak biasa`,
      body: `Bilangan campuran seperti 1½ bisa ditulis ulang sebagai pecahan tidak biasa (pembilang lebih besar dari penyebut) dengan mengalikan bilangan bulat dengan penyebut lalu menambahkan pembilang: 1½ = (1×2+1)/2 = 3/2. Kalkulator di atas bekerja dengan pecahan tidak biasa, jadi ubah bilangan campuran dengan cara ini sebelum memasukkannya.`,
    },
    related: {
      heading: `Kalkulator terkait`,
      linkText: `Kalkulator Persen`,
      description: `— untuk persentase, diskon, dan perhitungan persentase lainnya.`,
    },
  },
};

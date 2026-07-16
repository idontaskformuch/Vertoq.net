export interface PercentContent {
  whatIsPercent: { heading: string; body: string };
  variants: {
    heading: string;
    percentOf: string;
    isWhatPercent: string;
    change: string;
    discount: string;
    vat: string;
  };
  commonMistakes: { heading: string; body: string };
  useCases: { heading: string; body: string };
}

export const percentContent: Record<string, PercentContent> = {
  sv: {
    whatIsPercent: {
      heading: `Fem sätt att räkna med procent`,
      body: `Procenträkning täcker fler frågor än den enda "vad är X procent av Y". Den här kalkylatorn samlar de fem vanligaste varianterna på en plats, så du slipper leta efter rätt formel för just din fråga.`,
    },
    variants: {
      heading: `De fem varianterna med exempel`,
      percentOf: `Procent av tal: 15% av 850 = (15/100) × 850 = 127,5. Används för att räkna ut en andel av ett värde, till exempel provision eller andel av en budget.`,
      isWhatPercent: `Hur många procent: 200 av 850 = (200/850) × 100 ≈ 23,5%. Vänder på frågan — du har delen och helheten, och vill veta hur stor andel det är.`,
      change: `Procentuell förändring: från 850 till 920 = ((920−850)/850) × 100 ≈ 8,2% ökning. Jämför två värden och visar förändringen i procent, med riktning (ökning eller minskning).`,
      discount: `Rabatt: 850 kr med 15% rabatt = 850 − (850 × 0,15) = 722,5 kr. Drar av en procentsats från ett pris och visar både nytt pris och besparingen.`,
      vat: `Moms: 850 kr exklusive moms med 25% moms = 850 + (850 × 0,25) = 1 062,5 kr. Lägger till en procentsats på ett pris, motsatsen till rabatt.`,
    },
    commonMistakes: {
      heading: `Vanligt misstag: procent vs procentenheter`,
      body: `Om en ränta går från 5% till 7% har den ökat med 2 procentenheter, men med 40% i relativ ökning (2/5 × 100). De två sätten att uttrycka samma förändring blandas ofta ihop, och vilket som är rätt beror på sammanhanget — var tydlig med vilket du menar.`,
    },
    useCases: {
      heading: `Vanliga användningsområden`,
      body: `Procenträkning dyker upp överallt: rabatter och moms vid köp, dricks på restaurang, betygssättning i skolan, ränta på lån och sparande, och statistik i nyheter och rapporter. Samma fem grundformer täcker de allra flesta av dessa situationer.`,
    },
  },

  en: {
    whatIsPercent: {
      heading: `Five ways to work with percentages`,
      body: `Percentage math covers more than just "what is X percent of Y." This calculator brings together the five most common variants in one place, so you don't have to hunt for the right formula for your specific question.`,
    },
    variants: {
      heading: `The five variants, with examples`,
      percentOf: `Percent of a number: 15% of 850 = (15/100) × 850 = 127.5. Used to find a share of a value, like a commission or a portion of a budget.`,
      isWhatPercent: `What percentage: 200 of 850 = (200/850) × 100 ≈ 23.5%. Flips the question, you have the part and the whole, and want to know how large a share that is.`,
      change: `Percentage change: from 850 to 920 = ((920−850)/850) × 100 ≈ 8.2% increase. Compares two values and shows the change as a percentage, with direction (increase or decrease).`,
      discount: `Discount: 850 at a 15% discount = 850 − (850 × 0.15) = 722.5. Subtracts a percentage from a price and shows both the new price and the amount saved.`,
      vat: `VAT: 850 excluding VAT with 25% VAT = 850 + (850 × 0.25) = 1,062.5. Adds a percentage on top of a price, the opposite of a discount.`,
    },
    commonMistakes: {
      heading: `Common mistake: percent vs percentage points`,
      body: `If a rate goes from 5% to 7%, it has risen by 2 percentage points, but by 40% in relative terms (2/5 × 100). The two ways of describing the same change get mixed up often, and which one is correct depends on context, so be explicit about which you mean.`,
    },
    useCases: {
      heading: `Common uses`,
      body: `Percentage math shows up everywhere: discounts and VAT when shopping, tips at restaurants, grading in school, interest on loans and savings, and statistics in news and reports. These same five basic forms cover the vast majority of those situations.`,
    },
  },

  pt: {
    whatIsPercent: {
      heading: `Cinco formas de trabalhar com porcentagens`,
      body: `O cálculo de porcentagem cobre mais do que apenas "quanto é X por cento de Y". Esta calculadora reúne as cinco variantes mais comuns num só lugar, para você não precisar procurar a fórmula certa para sua pergunta específica.`,
    },
    variants: {
      heading: `As cinco variantes, com exemplos`,
      percentOf: `Porcentagem de um número: 15% de 850 = (15/100) × 850 = 127,5. Usado para encontrar uma parte de um valor, como uma comissão ou parte de um orçamento.`,
      isWhatPercent: `Qual porcentagem: 200 de 850 = (200/850) × 100 ≈ 23,5%. Inverte a pergunta, você tem a parte e o total, e quer saber quão grande é essa fatia.`,
      change: `Variação percentual: de 850 para 920 = ((920−850)/850) × 100 ≈ 8,2% de aumento. Compara dois valores e mostra a mudança em porcentagem, com direção (aumento ou redução).`,
      discount: `Desconto: 850 com 15% de desconto = 850 − (850 × 0,15) = 722,5. Subtrai uma porcentagem de um preço e mostra tanto o novo preço quanto o valor economizado.`,
      vat: `Imposto: 850 sem imposto com 25% de imposto = 850 + (850 × 0,25) = 1.062,5. Soma uma porcentagem ao preço, o oposto de um desconto.`,
    },
    commonMistakes: {
      heading: `Erro comum: porcentagem vs pontos percentuais`,
      body: `Se uma taxa vai de 5% para 7%, ela subiu 2 pontos percentuais, mas 40% em termos relativos (2/5 × 100). As duas formas de descrever a mesma mudança costumam ser confundidas, e qual está correta depende do contexto, então seja claro sobre qual você quer dizer.`,
    },
    useCases: {
      heading: `Usos comuns`,
      body: `O cálculo de porcentagem aparece em toda parte: descontos e impostos em compras, gorjetas em restaurantes, notas na escola, juros de empréstimos e poupanças, e estatísticas em notícias e relatórios. Essas mesmas cinco formas básicas cobrem a grande maioria dessas situações.`,
    },
  },

  es: {
    whatIsPercent: {
      heading: `Cinco formas de trabajar con porcentajes`,
      body: `El cálculo de porcentajes abarca más que solo "cuánto es X por ciento de Y". Esta calculadora reúne las cinco variantes más comunes en un solo lugar, para que no tengas que buscar la fórmula correcta para tu pregunta específica.`,
    },
    variants: {
      heading: `Las cinco variantes, con ejemplos`,
      percentOf: `Porcentaje de un número: 15% de 850 = (15/100) × 850 = 127,5. Se usa para hallar una parte de un valor, como una comisión o una porción de un presupuesto.`,
      isWhatPercent: `Qué porcentaje: 200 de 850 = (200/850) × 100 ≈ 23,5%. Invierte la pregunta, tienes la parte y el total, y quieres saber qué tan grande es esa fracción.`,
      change: `Cambio porcentual: de 850 a 920 = ((920−850)/850) × 100 ≈ 8,2% de aumento. Compara dos valores y muestra el cambio en porcentaje, con dirección (aumento o disminución).`,
      discount: `Descuento: 850 con 15% de descuento = 850 − (850 × 0,15) = 722,5. Resta un porcentaje de un precio y muestra tanto el precio nuevo como lo ahorrado.`,
      vat: `IVA: 850 sin IVA con 25% de IVA = 850 + (850 × 0,25) = 1.062,5. Suma un porcentaje al precio, lo opuesto de un descuento.`,
    },
    commonMistakes: {
      heading: `Error común: porcentaje vs puntos porcentuales`,
      body: `Si una tasa pasa del 5% al 7%, subió 2 puntos porcentuales, pero un 40% en términos relativos (2/5 × 100). Las dos formas de describir el mismo cambio suelen confundirse, y cuál es correcta depende del contexto, así que sé explícito sobre cuál quieres decir.`,
    },
    useCases: {
      heading: `Usos comunes`,
      body: `El cálculo de porcentajes aparece en todas partes: descuentos e IVA al comprar, propinas en restaurantes, calificaciones en la escuela, intereses de préstamos y ahorros, y estadísticas en noticias e informes. Estas mismas cinco formas básicas cubren la gran mayoría de esas situaciones.`,
    },
  },

  de: {
    whatIsPercent: {
      heading: `Fünf Arten, mit Prozenten zu rechnen`,
      body: `Prozentrechnung umfasst mehr als nur "wie viel sind X Prozent von Y". Dieser Rechner bringt die fünf häufigsten Varianten an einem Ort zusammen, damit du nicht nach der richtigen Formel für deine konkrete Frage suchen musst.`,
    },
    variants: {
      heading: `Die fünf Varianten mit Beispielen`,
      percentOf: `Prozent einer Zahl: 15 % von 850 = (15/100) × 850 = 127,5. Wird verwendet, um einen Anteil eines Werts zu finden, etwa eine Provision oder einen Teil eines Budgets.`,
      isWhatPercent: `Wie viel Prozent: 200 von 850 = (200/850) × 100 ≈ 23,5 %. Dreht die Frage um, du hast den Teil und das Ganze und willst wissen, wie groß dieser Anteil ist.`,
      change: `Prozentuale Veränderung: von 850 auf 920 = ((920−850)/850) × 100 ≈ 8,2 % Anstieg. Vergleicht zwei Werte und zeigt die Veränderung in Prozent, mit Richtung (Anstieg oder Rückgang).`,
      discount: `Rabatt: 850 mit 15 % Rabatt = 850 − (850 × 0,15) = 722,5. Zieht einen Prozentsatz von einem Preis ab und zeigt sowohl den neuen Preis als auch die Ersparnis.`,
      vat: `MwSt.: 850 ohne MwSt. bei 25 % MwSt. = 850 + (850 × 0,25) = 1.062,5. Addiert einen Prozentsatz auf einen Preis, das Gegenteil eines Rabatts.`,
    },
    commonMistakes: {
      heading: `Häufiger Fehler: Prozent vs. Prozentpunkte`,
      body: `Steigt ein Satz von 5 % auf 7 %, ist er um 2 Prozentpunkte gestiegen, aber um 40 % relativ gesehen (2/5 × 100). Die beiden Arten, dieselbe Veränderung zu beschreiben, werden oft verwechselt, und welche richtig ist, hängt vom Kontext ab, also sei eindeutig, welche du meinst.`,
    },
    useCases: {
      heading: `Häufige Anwendungen`,
      body: `Prozentrechnung taucht überall auf: Rabatte und MwSt. beim Einkaufen, Trinkgeld im Restaurant, Notengebung in der Schule, Zinsen bei Krediten und Ersparnissen, und Statistiken in Nachrichten und Berichten. Diese fünf Grundformen decken die meisten dieser Situationen ab.`,
    },
  },

  ja: {
    whatIsPercent: {
      heading: `パーセント計算の5つの方法`,
      body: `パーセント計算は「XのY%はいくつか」だけではありません。この計算機では、よく使われる5つのパターンを1か所にまとめているので、自分の疑問に合った式を探し回る必要がありません。`,
    },
    variants: {
      heading: `5つのパターンと計算例`,
      percentOf: `数値のパーセント：850の15% = (15/100) × 850 = 127.5。歩合や予算の一部など、値のある割合を求めるときに使います。`,
      isWhatPercent: `何パーセントか：850のうち200 = (200/850) × 100 ≈ 23.5%。問いを逆にしたもので、部分と全体がわかっていて、その割合を知りたいときに使います。`,
      change: `変化率：850から920へ = ((920−850)/850) × 100 ≈ 8.2%の増加。2つの値を比較し、増加か減少かの方向とともにパーセントで変化を示します。`,
      discount: `割引：850に15%の割引 = 850 − (850 × 0.15) = 722.5。価格からパーセントを差し引き、新しい価格と節約額の両方を表示します。`,
      vat: `消費税：税抜850に25%の税率 = 850 + (850 × 0.25) = 1,062.5。価格にパーセントを上乗せするもので、割引の逆の計算です。`,
    },
    commonMistakes: {
      heading: `よくある間違い：パーセントとパーセントポイント`,
      body: `ある割合が5%から7%になった場合、上昇したのは2パーセントポイントですが、相対的には40%の増加です（2/5 × 100）。同じ変化を表す2つの表現はよく混同されるため、状況に応じてどちらを指しているのかを明確にしましょう。`,
    },
    useCases: {
      heading: `よくある使い道`,
      body: `パーセント計算はあらゆる場面で登場します。買い物での割引や消費税、レストランでのチップ、学校の成績評価、ローンや貯蓄の利息、ニュースやレポートの統計などです。ここで紹介した5つの基本形で、そのほとんどをカバーできます。`,
    },
  },

  zh: {
    whatIsPercent: {
      heading: `五种百分比计算方式`,
      body: `百分比计算不只是"Y的X%是多少"这么简单。这个计算器把五种最常见的计算方式集中在一个地方，这样你就不用为具体问题四处寻找正确的公式了。`,
    },
    variants: {
      heading: `五种方式及示例`,
      percentOf: `数值的百分比：850的15% = (15/100) × 850 = 127.5。用于求某个值的一部分，比如提成或预算的一部分。`,
      isWhatPercent: `占百分之多少：200占850的比例 = (200/850) × 100 ≈ 23.5%。把问题反过来问——你已知部分和总数，想知道这部分占多大比例。`,
      change: `百分比变化：从850到920 = ((920−850)/850) × 100 ≈ 增加8.2%。比较两个数值，用百分比和方向（增加或减少）显示变化。`,
      discount: `折扣：850打85折（15%折扣）= 850 − (850 × 0.15) = 722.5。从价格中减去一个百分比，同时显示新价格和节省的金额。`,
      vat: `增值税：不含税850，税率25% = 850 + (850 × 0.25) = 1,062.5。在价格上加上一个百分比，与折扣正好相反。`,
    },
    commonMistakes: {
      heading: `常见错误：百分比与百分点`,
      body: `如果利率从5%涨到7%，那是上升了2个百分点，但相对增幅是40%（2/5 × 100）。这两种描述同一变化的方式经常被混淆，哪种说法正确取决于具体语境，所以要明确说明你指的是哪一种。`,
    },
    useCases: {
      heading: `常见应用场景`,
      body: `百分比计算无处不在：购物时的折扣和税费、餐厅小费、学校评分、贷款和储蓄的利息，以及新闻报道和报告中的统计数据。这五种基本形式覆盖了绝大多数这类场景。`,
    },
  },

  ko: {
    whatIsPercent: {
      heading: `퍼센트를 계산하는 다섯 가지 방법`,
      body: `퍼센트 계산은 단순히 "Y의 X퍼센트는 얼마인가"에 그치지 않습니다. 이 계산기는 가장 흔한 다섯 가지 유형을 한곳에 모아, 특정 질문에 맞는 공식을 따로 찾아다닐 필요가 없게 해줍니다.`,
    },
    variants: {
      heading: `다섯 가지 유형과 예시`,
      percentOf: `숫자의 퍼센트: 850의 15% = (15/100) × 850 = 127.5. 수수료나 예산의 일부처럼 값의 비율을 구할 때 사용합니다.`,
      isWhatPercent: `몇 퍼센트인지: 850 중 200 = (200/850) × 100 ≈ 23.5%. 질문을 뒤집은 형태로, 부분과 전체를 알고 그 비율을 알고 싶을 때 사용합니다.`,
      change: `퍼센트 변화: 850에서 920으로 = ((920−850)/850) × 100 ≈ 8.2% 증가. 두 값을 비교해 증가 또는 감소 방향과 함께 퍼센트로 변화를 보여줍니다.`,
      discount: `할인: 850에서 15% 할인 = 850 − (850 × 0.15) = 722.5. 가격에서 퍼센트를 빼서 할인된 가격과 절약 금액을 모두 보여줍니다.`,
      vat: `부가세: 부가세 제외 850에 25% 부가세 = 850 + (850 × 0.25) = 1,062.5. 가격에 퍼센트를 더하는 것으로, 할인과 반대되는 계산입니다.`,
    },
    commonMistakes: {
      heading: `흔한 실수: 퍼센트와 퍼센트포인트`,
      body: `어떤 비율이 5%에서 7%로 오르면 2퍼센트포인트 오른 것이지만, 상대적으로는 40% 증가한 것입니다(2/5 × 100). 같은 변화를 나타내는 이 두 표현은 자주 혼동되므로, 문맥에 따라 어느 쪽을 말하는지 명확히 해야 합니다.`,
    },
    useCases: {
      heading: `흔한 활용 사례`,
      body: `퍼센트 계산은 어디에나 등장합니다. 쇼핑할 때의 할인과 부가세, 식당에서의 팁, 학교 성적, 대출과 저축의 이자, 뉴스와 보고서의 통계 등입니다. 여기서 소개한 다섯 가지 기본 형태가 이런 상황의 대부분을 다룹니다.`,
    },
  },

  hi: {
    whatIsPercent: {
      heading: `प्रतिशत निकालने के पांच तरीके`,
      body: `प्रतिशत गणना सिर्फ़ "Y का X प्रतिशत कितना है" तक सीमित नहीं है। यह कैलकुलेटर पांच सबसे आम तरीकों को एक जगह लाता है, ताकि आपको अपने सवाल के लिए सही फ़ॉर्मूला ढूंढते फिरना न पड़े।`,
    },
    variants: {
      heading: `पांच तरीके, उदाहरणों के साथ`,
      percentOf: `संख्या का प्रतिशत: 850 का 15% = (15/100) × 850 = 127.5। किसी मूल्य का हिस्सा निकालने के लिए इस्तेमाल होता है, जैसे कमीशन या बजट का हिस्सा।`,
      isWhatPercent: `कितना प्रतिशत: 850 में से 200 = (200/850) × 100 ≈ 23.5%। सवाल को उलट देता है — आपके पास भाग और पूर्ण दोनों हैं, और आप जानना चाहते हैं कि वह हिस्सा कितना बड़ा है।`,
      change: `प्रतिशत परिवर्तन: 850 से 920 तक = ((920−850)/850) × 100 ≈ 8.2% वृद्धि। दो मानों की तुलना करता है और दिशा (वृद्धि या कमी) के साथ परिवर्तन प्रतिशत में दिखाता है।`,
      discount: `छूट: 850 पर 15% छूट = 850 − (850 × 0.15) = 722.5। कीमत से एक प्रतिशत घटाता है और नई कीमत तथा बचत, दोनों दिखाता है।`,
      vat: `टैक्स: बिना टैक्स 850 पर 25% टैक्स = 850 + (850 × 0.25) = 1,062.5। कीमत में एक प्रतिशत जोड़ता है, जो छूट का उल्टा है।`,
    },
    commonMistakes: {
      heading: `आम गलती: प्रतिशत बनाम प्रतिशत अंक`,
      body: `अगर कोई दर 5% से 7% हो जाती है, तो वह 2 प्रतिशत अंक बढ़ी है, लेकिन सापेक्ष रूप से 40% बढ़ी है (2/5 × 100)। एक ही बदलाव को बताने के इन दो तरीकों में अक्सर उलझन हो जाती है, और कौन सा सही है यह संदर्भ पर निर्भर करता है, इसलिए साफ़ बताएं कि आपका मतलब कौन सा है।`,
    },
    useCases: {
      heading: `आम इस्तेमाल`,
      body: `प्रतिशत गणना हर जगह दिखती है: खरीदारी में छूट और टैक्स, रेस्तरां में टिप, स्कूल में ग्रेडिंग, लोन और बचत पर ब्याज, और खबरों व रिपोर्ट्स में आंकड़े। यही पांच बुनियादी तरीके इनमें से ज़्यादातर स्थितियों को कवर करते हैं।`,
    },
  },

  id: {
    whatIsPercent: {
      heading: `Lima cara menghitung persentase`,
      body: `Perhitungan persentase mencakup lebih dari sekadar "berapa X persen dari Y". Kalkulator ini mengumpulkan lima jenis perhitungan paling umum di satu tempat, jadi kamu tidak perlu mencari-cari rumus yang tepat untuk pertanyaan spesifikmu.`,
    },
    variants: {
      heading: `Lima jenis perhitungan, dengan contoh`,
      percentOf: `Persen dari angka: 15% dari 850 = (15/100) × 850 = 127,5. Digunakan untuk mencari bagian dari suatu nilai, seperti komisi atau bagian dari anggaran.`,
      isWhatPercent: `Berapa persen: 200 dari 850 = (200/850) × 100 ≈ 23,5%. Membalik pertanyaan, kamu punya bagian dan totalnya, dan ingin tahu seberapa besar porsi itu.`,
      change: `Perubahan persen: dari 850 ke 920 = ((920−850)/850) × 100 ≈ kenaikan 8,2%. Membandingkan dua nilai dan menunjukkan perubahan dalam persen, dengan arah (naik atau turun).`,
      discount: `Diskon: 850 dengan diskon 15% = 850 − (850 × 0,15) = 722,5. Mengurangi persentase dari harga dan menunjukkan harga baru sekaligus jumlah yang dihemat.`,
      vat: `PPN: 850 sebelum PPN dengan tarif 25% = 850 + (850 × 0,25) = 1.062,5. Menambahkan persentase ke harga, kebalikan dari diskon.`,
    },
    commonMistakes: {
      heading: `Kesalahan umum: persen vs poin persentase`,
      body: `Jika suatu tingkat naik dari 5% menjadi 7%, itu naik 2 poin persentase, tetapi naik 40% secara relatif (2/5 × 100). Dua cara menjelaskan perubahan yang sama ini sering tertukar, dan mana yang benar tergantung konteksnya, jadi jelaskan secara eksplisit mana yang kamu maksud.`,
    },
    useCases: {
      heading: `Penggunaan umum`,
      body: `Perhitungan persentase muncul di mana-mana: diskon dan PPN saat belanja, tip di restoran, penilaian di sekolah, bunga pinjaman dan tabungan, serta statistik dalam berita dan laporan. Kelima bentuk dasar ini mencakup sebagian besar situasi tersebut.`,
    },
  },
};

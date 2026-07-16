export interface TipContent {
  whatIsTip: { heading: string; body: string };
  norms: { heading: string; body: string };
  reference: { heading: string; intro: string; rows: [string, string][]; goalHeader: string; rangeHeader: string };
  splitting: { heading: string; body: string };
  related: { heading: string; linkText: string; description: string };
}

export const tipContent: Record<string, TipContent> = {
  sv: {
    whatIsTip: {
      heading: `Hur kalkylatorn räknar`,
      body: `Dricksen räknas ut som en procentandel av notans belopp, läggs sedan till för att ge totalsumman, som slutligen delas jämnt mellan antalet personer du anger. Alla tre siffror uppdateras direkt när du ändrar något av fälten.`,
    },
    norms: {
      heading: `Dricksnormer varierar stort mellan länder`,
      body: `Hur mycket, eller om alls, man dricksar skiljer sig mycket mellan olika länder och kulturer. I vissa länder är dricks en betydande del av personalens inkomst och 15 till 20 procent är standard, i andra ingår serviceavgift redan i priset och extra dricks är ovanligt. Kalkylatorn tar inget ställning till vad som är rätt där du befinner dig, den räknar bara ut siffrorna för den procentsats du väljer.`,
    },
    reference: {
      heading: `Vanliga dricksnivåer som referens`,
      intro: `En grov referens för vad olika procentsatser brukar motsvara, där dricks är vanligt förekommande:`,
      goalHeader: `Nivå`,
      rangeHeader: `Ungefärlig procent`,
      rows: [
        [`Minimal / vid tveksam service`, `10 %`],
        [`Standard`, `15 %`],
        [`God service`, `18–20 %`],
        [`Utmärkt service`, `20–25 %`],
      ],
    },
    splitting: {
      heading: `Att dela notan`,
      body: `Fältet för antal personer delar den totala summan, inklusive dricks, jämnt över alla. Det är en enkel jämn delning, inte en uppdelning efter vad var och en faktiskt beställde, vilket är värt att komma ihåg om sällskapet beställde olika mycket.`,
    },
    related: {
      heading: `Relaterad kalkylator`,
      linkText: `Procenträknare`,
      description: `— för fler typer av procentberäkningar, som rabatt, moms och procentuell förändring.`,
    },
  },

  en: {
    whatIsTip: {
      heading: `How the calculator works`,
      body: `The tip is calculated as a percentage of the bill amount, then added to give the total, which is finally split evenly across the number of people you enter. All three figures update instantly as you change any field.`,
    },
    norms: {
      heading: `Tipping norms vary widely by country`,
      body: `How much, or whether at all, people tip differs a lot between countries and cultures. In some places tipping is a significant part of staff income and 15 to 20 percent is standard, in others a service charge is already included in the price and extra tipping is uncommon. The calculator doesn't take a position on what's right where you are, it just works out the numbers for whatever percentage you choose.`,
    },
    reference: {
      heading: `Common tip levels as a reference`,
      intro: `A rough reference for what different percentages tend to represent, in places where tipping is common:`,
      goalHeader: `Level`,
      rangeHeader: `Approximate percentage`,
      rows: [
        [`Minimal / questionable service`, `10%`],
        [`Standard`, `15%`],
        [`Good service`, `18-20%`],
        [`Excellent service`, `20-25%`],
      ],
    },
    splitting: {
      heading: `Splitting the bill`,
      body: `The number of people field splits the total, including tip, evenly across everyone. That's a simple even split, not a breakdown of what each person actually ordered, worth keeping in mind if the group ordered very different amounts.`,
    },
    related: {
      heading: `Related calculator`,
      linkText: `Percentage Calculator`,
      description: `— for more types of percentage math, like discounts, VAT, and percentage change.`,
    },
  },

  pt: {
    whatIsTip: {
      heading: `Como a calculadora funciona`,
      body: `A gorjeta é calculada como uma porcentagem do valor da conta, depois somada para dar o total, que por fim é dividido igualmente pelo número de pessoas que você informar. Os três valores são atualizados instantaneamente ao alterar qualquer campo.`,
    },
    norms: {
      heading: `As normas de gorjeta variam muito entre países`,
      body: `Quanto, ou se, as pessoas dão gorjeta varia muito entre países e culturas. Em alguns lugares a gorjeta é parte importante da renda dos funcionários e 15 a 20 por cento é padrão, em outros a taxa de serviço já está incluída no preço e gorjeta extra é incomum. A calculadora não toma partido sobre o que é certo onde você está, ela apenas calcula os números para a porcentagem que você escolher.`,
    },
    reference: {
      heading: `Níveis comuns de gorjeta como referência`,
      intro: `Uma referência aproximada do que diferentes porcentagens costumam representar, em lugares onde dar gorjeta é comum:`,
      goalHeader: `Nível`,
      rangeHeader: `Porcentagem aproximada`,
      rows: [
        [`Mínima / serviço questionável`, `10%`],
        [`Padrão`, `15%`],
        [`Bom serviço`, `18-20%`],
        [`Serviço excelente`, `20-25%`],
      ],
    },
    splitting: {
      heading: `Dividindo a conta`,
      body: `O campo de número de pessoas divide o total, incluindo a gorjeta, igualmente entre todos. Essa é uma divisão simples e igual, não um detalhamento do que cada pessoa realmente pediu, vale lembrar se o grupo pediu quantidades muito diferentes.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de Porcentagem`,
      description: `— para mais tipos de cálculo percentual, como descontos, impostos e variação percentual.`,
    },
  },

  es: {
    whatIsTip: {
      heading: `Cómo funciona la calculadora`,
      body: `La propina se calcula como un porcentaje del monto de la cuenta, luego se suma para dar el total, que finalmente se divide en partes iguales entre el número de personas que indiques. Las tres cifras se actualizan al instante al cambiar cualquier campo.`,
    },
    norms: {
      heading: `Las normas de propina varían mucho según el país`,
      body: `Cuánto, o si acaso, se da propina varía mucho entre países y culturas. En algunos lugares la propina es una parte importante del ingreso del personal y el 15 al 20 por ciento es lo habitual, en otros el servicio ya está incluido en el precio y la propina extra es poco común. La calculadora no toma postura sobre qué es correcto donde estés, solo calcula las cifras para el porcentaje que elijas.`,
    },
    reference: {
      heading: `Niveles comunes de propina como referencia`,
      intro: `Una referencia aproximada de lo que suelen representar distintos porcentajes, en lugares donde dar propina es habitual:`,
      goalHeader: `Nivel`,
      rangeHeader: `Porcentaje aproximado`,
      rows: [
        [`Mínima / servicio cuestionable`, `10%`],
        [`Estándar`, `15%`],
        [`Buen servicio`, `18-20%`],
        [`Servicio excelente`, `20-25%`],
      ],
    },
    splitting: {
      heading: `Dividir la cuenta`,
      body: `El campo de número de personas divide el total, incluyendo la propina, en partes iguales entre todos. Es una división simple e igualitaria, no un desglose de lo que cada persona pidió realmente, algo a tener en cuenta si el grupo pidió cantidades muy distintas.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de Porcentaje`,
      description: `— para más tipos de cálculos porcentuales, como descuentos, IVA y cambio porcentual.`,
    },
  },

  de: {
    whatIsTip: {
      heading: `So rechnet der Rechner`,
      body: `Das Trinkgeld wird als Prozentsatz des Rechnungsbetrags berechnet, dann addiert, um den Gesamtbetrag zu ergeben, der schließlich gleichmäßig auf die eingegebene Personenzahl aufgeteilt wird. Alle drei Werte aktualisieren sich sofort, wenn du ein Feld änderst.`,
    },
    norms: {
      heading: `Trinkgeldnormen unterscheiden sich stark je nach Land`,
      body: `Wie viel, oder ob überhaupt, Trinkgeld gegeben wird, unterscheidet sich stark zwischen Ländern und Kulturen. An manchen Orten ist Trinkgeld ein wesentlicher Teil des Personaleinkommens und 15 bis 20 Prozent sind üblich, an anderen ist eine Servicegebühr bereits im Preis enthalten und zusätzliches Trinkgeld ist unüblich. Der Rechner bezieht keine Position dazu, was bei dir vor Ort richtig ist, er berechnet nur die Zahlen für den von dir gewählten Prozentsatz.`,
    },
    reference: {
      heading: `Übliche Trinkgeldhöhen als Orientierung`,
      intro: `Eine grobe Orientierung, wofür unterschiedliche Prozentsätze üblicherweise stehen, an Orten, wo Trinkgeld üblich ist:`,
      goalHeader: `Niveau`,
      rangeHeader: `Ungefährer Prozentsatz`,
      rows: [
        [`Minimal / fragwürdiger Service`, `10 %`],
        [`Standard`, `15 %`],
        [`Guter Service`, `18-20 %`],
        [`Ausgezeichneter Service`, `20-25 %`],
      ],
    },
    splitting: {
      heading: `Die Rechnung teilen`,
      body: `Das Feld für die Personenzahl teilt den Gesamtbetrag, inklusive Trinkgeld, gleichmäßig auf alle auf. Das ist eine einfache gleiche Teilung, keine Aufschlüsselung dessen, was jede Person tatsächlich bestellt hat, was zu bedenken ist, wenn die Gruppe sehr unterschiedlich viel bestellt hat.`,
    },
    related: {
      heading: `Verwandter Rechner`,
      linkText: `Prozentrechner`,
      description: `— für weitere Arten von Prozentrechnungen, wie Rabatte, MwSt. und prozentuale Veränderung.`,
    },
  },

  ja: {
    whatIsTip: {
      heading: `計算機の仕組み`,
      body: `チップは会計金額に対する割合として計算され、それを足して合計金額を出し、最後に入力した人数で均等に割ります。いずれかの項目を変更すると、3つの数値がすぐに更新されます。`,
    },
    norms: {
      heading: `チップの習慣は国によって大きく異なる`,
      body: `どのくらい、あるいはそもそもチップを渡すかどうかは、国や文化によって大きく異なります。チップがスタッフの収入の重要な部分を占め、15〜20%が標準的な地域もあれば、サービス料がすでに価格に含まれていて追加のチップが一般的でない地域もあります。この計算機は、あなたのいる場所で何が適切かについては判断せず、選んだ割合に基づいて数値を計算するだけです。`,
    },
    reference: {
      heading: `参考：一般的なチップの水準`,
      intro: `チップが一般的な地域で、それぞれの割合が何を意味することが多いかのおおよその目安です。`,
      goalHeader: `レベル`,
      rangeHeader: `おおよその割合`,
      rows: [
        [`最低限／サービスに疑問がある場合`, `10%`],
        [`標準`, `15%`],
        [`良いサービス`, `18〜20%`],
        [`優れたサービス`, `20〜25%`],
      ],
    },
    splitting: {
      heading: `会計を割り勘する`,
      body: `人数の項目は、チップを含めた合計金額を全員で均等に割ります。これは単純な均等割りであり、各人が実際に注文した内容に基づく振り分けではありません。グループの注文内容に大きな差がある場合は注意してください。`,
    },
    related: {
      heading: `関連する計算機`,
      linkText: `パーセント計算機`,
      description: `— 割引、消費税、変化率など、その他のパーセント計算に使えます。`,
    },
  },

  zh: {
    whatIsTip: {
      heading: `计算器的计算方式`,
      body: `小费按账单金额的百分比计算，然后加到账单上得出总额，最后按你输入的人数平均分摊。修改任意一项，三个数值都会立即更新。`,
    },
    norms: {
      heading: `不同国家的小费习惯差异很大`,
      body: `给多少小费，甚至是否需要给小费，在不同国家和文化中差异很大。在一些地方，小费是员工收入的重要组成部分，15%到20%是常见标准；在另一些地方，服务费已经包含在价格里，额外给小费并不常见。这个计算器不会评判你所在地区什么才是"正确"的做法，它只是按你选择的百分比计算出数字。`,
    },
    reference: {
      heading: `常见小费水平参考`,
      intro: `在小费文化普遍的地方，不同百分比大致对应的含义：`,
      goalHeader: `水平`,
      rangeHeader: `大致百分比`,
      rows: [
        [`最低 / 服务有问题`, `10%`],
        [`标准`, `15%`],
        [`服务良好`, `18-20%`],
        [`服务优秀`, `20-25%`],
      ],
    },
    splitting: {
      heading: `分摊账单`,
      body: `人数字段会把包含小费的总金额平均分给每个人。这只是简单的平均分摊，并不是按每个人实际点的东西来分配，如果大家点的东西差异很大，这一点值得注意。`,
    },
    related: {
      heading: `相关计算器`,
      linkText: `百分比计算器`,
      description: `— 用于折扣、增值税、百分比变化等更多百分比计算。`,
    },
  },

  ko: {
    whatIsTip: {
      heading: `계산기의 계산 방식`,
      body: `팁은 청구서 금액의 백분율로 계산된 다음 더해져 총액이 되고, 마지막으로 입력한 인원수만큼 균등하게 나뉩니다. 어느 필드든 값을 바꾸면 세 수치가 즉시 업데이트됩니다.`,
    },
    norms: {
      heading: `팁 문화는 나라마다 크게 다르다`,
      body: `얼마를 주는지, 심지어 팁을 주는지 여부조차 국가와 문화에 따라 크게 다릅니다. 어떤 곳에서는 팁이 직원 수입의 상당 부분을 차지해 15~20%가 표준이고, 다른 곳에서는 서비스 요금이 이미 가격에 포함되어 있어 추가 팁이 흔하지 않습니다. 이 계산기는 당신이 있는 곳에서 무엇이 옳은지에 대해 판단하지 않으며, 그저 선택한 비율에 따라 숫자를 계산할 뿐입니다.`,
    },
    reference: {
      heading: `참고용 일반적인 팁 수준`,
      intro: `팁이 일반적인 곳에서 각 비율이 대략 무엇을 의미하는지에 대한 참고 자료입니다.`,
      goalHeader: `수준`,
      rangeHeader: `대략적인 비율`,
      rows: [
        [`최소 / 서비스가 의심스러운 경우`, `10%`],
        [`표준`, `15%`],
        [`좋은 서비스`, `18-20%`],
        [`훌륭한 서비스`, `20-25%`],
      ],
    },
    splitting: {
      heading: `계산서 나누기`,
      body: `인원수 필드는 팁을 포함한 총액을 모두에게 균등하게 나눕니다. 이는 단순한 균등 분배이며, 각자 실제로 주문한 내용에 따른 분배가 아니므로 일행이 서로 다른 금액을 주문했다면 참고해야 합니다.`,
    },
    related: {
      heading: `관련 계산기`,
      linkText: `퍼센트 계산기`,
      description: `— 할인, 부가세, 퍼센트 변화 등 더 다양한 퍼센트 계산에 사용할 수 있습니다.`,
    },
  },

  hi: {
    whatIsTip: {
      heading: `कैलकुलेटर कैसे गणना करता है`,
      body: `टिप की गणना बिल राशि के प्रतिशत के रूप में की जाती है, फिर उसे जोड़कर कुल राशि निकाली जाती है, जिसे अंत में आपके बताए गए लोगों की संख्या में बराबर बांटा जाता है। किसी भी फ़ील्ड को बदलते ही तीनों आंकड़े तुरंत अपडेट हो जाते हैं।`,
    },
    norms: {
      heading: `टिप देने के रिवाज़ देश-दर-देश बहुत अलग होते हैं`,
      body: `कितनी टिप दी जाए, या दी भी जाए या नहीं, यह देशों और संस्कृतियों में बहुत अलग होता है। कुछ जगहों पर टिप स्टाफ़ की आय का एक बड़ा हिस्सा होती है और 15 से 20 प्रतिशत सामान्य माना जाता है, वहीं कुछ जगहों पर सर्विस चार्ज पहले से ही कीमत में शामिल होता है और अतिरिक्त टिप देना आम नहीं है। यह कैलकुलेटर इस बारे में कोई राय नहीं रखता कि आपकी जगह पर क्या सही है, यह बस आपके चुने गए प्रतिशत के हिसाब से आंकड़े निकालता है।`,
    },
    reference: {
      heading: `संदर्भ के लिए सामान्य टिप स्तर`,
      intro: `उन जगहों के लिए एक मोटा संदर्भ जहां टिप देना आम है, कि अलग-अलग प्रतिशत आमतौर पर क्या दर्शाते हैं:`,
      goalHeader: `स्तर`,
      rangeHeader: `अनुमानित प्रतिशत`,
      rows: [
        [`न्यूनतम / संदिग्ध सेवा पर`, `10%`],
        [`सामान्य`, `15%`],
        [`अच्छी सेवा`, `18-20%`],
        [`बेहतरीन सेवा`, `20-25%`],
      ],
    },
    splitting: {
      heading: `बिल बांटना`,
      body: `लोगों की संख्या वाला फ़ील्ड टिप सहित कुल राशि को सभी में बराबर बांट देता है। यह एक सीधा बराबर बंटवारा है, न कि यह हिसाब कि हर व्यक्ति ने असल में क्या ऑर्डर किया, अगर समूह ने बहुत अलग-अलग मात्रा में ऑर्डर किया हो तो यह ध्यान रखने वाली बात है।`,
    },
    related: {
      heading: `संबंधित कैलकुलेटर`,
      linkText: `प्रतिशत कैलकुलेटर`,
      description: `— छूट, टैक्स और प्रतिशत परिवर्तन जैसी अन्य प्रतिशत गणनाओं के लिए।`,
    },
  },

  id: {
    whatIsTip: {
      heading: `Cara kerja kalkulator`,
      body: `Tip dihitung sebagai persentase dari jumlah tagihan, lalu ditambahkan untuk mendapatkan total, yang akhirnya dibagi rata sesuai jumlah orang yang kamu masukkan. Ketiga angka ini langsung diperbarui saat kamu mengubah salah satu kolom.`,
    },
    norms: {
      heading: `Kebiasaan memberi tip sangat berbeda antar negara`,
      body: `Berapa banyak, atau apakah perlu memberi tip sama sekali, sangat bervariasi antar negara dan budaya. Di beberapa tempat, tip adalah bagian penting dari pendapatan staf dan 15 hingga 20 persen adalah standar, di tempat lain biaya layanan sudah termasuk dalam harga dan tip tambahan jarang diberikan. Kalkulator ini tidak menentukan apa yang benar di tempatmu, ia hanya menghitung angka untuk persentase yang kamu pilih.`,
    },
    reference: {
      heading: `Tingkat tip umum sebagai referensi`,
      intro: `Referensi kasar tentang apa yang biasanya diwakili oleh persentase berbeda, di tempat-tempat di mana memberi tip itu umum:`,
      goalHeader: `Tingkat`,
      rangeHeader: `Persentase perkiraan`,
      rows: [
        [`Minimal / layanan meragukan`, `10%`],
        [`Standar`, `15%`],
        [`Layanan baik`, `18-20%`],
        [`Layanan sangat baik`, `20-25%`],
      ],
    },
    splitting: {
      heading: `Membagi tagihan`,
      body: `Kolom jumlah orang membagi total, termasuk tip, secara merata ke semua orang. Ini adalah pembagian rata yang sederhana, bukan rincian berdasarkan apa yang sebenarnya dipesan tiap orang, layak diingat jika kelompok memesan dalam jumlah yang sangat berbeda.`,
    },
    related: {
      heading: `Kalkulator terkait`,
      linkText: `Kalkulator Persen`,
      description: `— untuk jenis perhitungan persentase lainnya, seperti diskon, PPN, dan perubahan persen.`,
    },
  },
};

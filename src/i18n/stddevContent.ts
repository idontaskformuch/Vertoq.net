export interface StdDevContent {
  whatIsStdDev: { heading: string; body: string };
  populationVsSample: { heading: string; body: string };
  formulas: { heading: string; populationCode: string; sampleCode: string; note: string };
  workedExample: { heading: string; body: string };
  variance: { heading: string; body: string };
  related: { heading: string; linkText: string; description: string };
}

export const stddevContent: Record<string, StdDevContent> = {
  sv: {
    whatIsStdDev: {
      heading: `Vad standardavvikelse mäter`,
      body: `Standardavvikelse mäter hur spridda värdena i en datamängd är kring medelvärdet. En låg standardavvikelse betyder att värdena ligger nära medelvärdet, en hög standardavvikelse betyder att de sprider sig mycket mer.`,
    },
    populationVsSample: {
      heading: `Population eller stickprov, vilken ska jag använda`,
      body: `Om din datamängd är hela populationen du är intresserad av, alla värden som finns, använd populationens standardavvikelse. Om din datamängd bara är ett stickprov taget från en större population, som du vill dra slutsatser om, använd stickprovets standardavvikelse. Skillnaden ligger i nämnaren: population delar med n (antal värden), stickprov delar med n−1, vilket ger ett något större värde för att kompensera för osäkerheten i att bara ha ett urval.`,
    },
    formulas: {
      heading: `Formlerna`,
      populationCode: `σ = √(Σ(x − x̄)² / n)`,
      sampleCode: `s = √(Σ(x − x̄)² / (n−1))`,
      note: `x̄ är medelvärdet, x är varje enskilt värde, och n är antalet värden. Båda formlerna summerar den kvadrerade skillnaden mellan varje värde och medelvärdet, sedan tas kvadratroten av genomsnittet.`,
    },
    workedExample: {
      heading: `Räkneexempel steg för steg`,
      body: `För datamängden 2, 4, 4, 4, 5, 5, 7, 9 (8 värden) är medelvärdet 5. Skillnaderna från medelvärdet är −3, −1, −1, −1, 0, 0, 2, 4, och kvadraterna av dessa är 9, 1, 1, 1, 0, 0, 4, 16, som summerar till 32. Populationens standardavvikelse blir √(32/8) = √4 = 2. Stickprovets standardavvikelse blir √(32/7) ≈ 2,14.`,
    },
    variance: {
      heading: `Kopplingen till varians`,
      body: `Varians är standardavvikelsen i kvadrat, det vill säga precis den summan innan kvadratroten tas. I exemplet ovan är populationens varians 4 (kvadraten av 2). Varians används ofta i statistiska beräkningar, men är svårare att tolka direkt eftersom enheten blir kvadrerad, därför är standardavvikelse oftast mer intuitiv att presentera.`,
    },
    related: {
      heading: `Relaterad kalkylator`,
      linkText: `Procenträknare`,
      description: `— för procent, rabatt och andra typer av procentberäkningar.`,
    },
  },

  en: {
    whatIsStdDev: {
      heading: `What standard deviation measures`,
      body: `Standard deviation measures how spread out the values in a dataset are around the mean. A low standard deviation means the values sit close to the mean, a high standard deviation means they spread out much more widely.`,
    },
    populationVsSample: {
      heading: `Population or sample, which one to use`,
      body: `If your dataset is the entire population you care about, every value that exists, use the population standard deviation. If your dataset is just a sample drawn from a larger population, which you want to draw conclusions about, use the sample standard deviation. The difference lies in the denominator: population divides by n (the count), sample divides by n−1, giving a slightly larger value to compensate for the uncertainty of only having a sample.`,
    },
    formulas: {
      heading: `The formulas`,
      populationCode: `σ = √(Σ(x − x̄)² / n)`,
      sampleCode: `s = √(Σ(x − x̄)² / (n−1))`,
      note: `x̄ is the mean, x is each individual value, and n is the count of values. Both formulas sum the squared difference between each value and the mean, then take the square root of the average.`,
    },
    workedExample: {
      heading: `Worked example, step by step`,
      body: `For the dataset 2, 4, 4, 4, 5, 5, 7, 9 (8 values), the mean is 5. The differences from the mean are −3, −1, −1, −1, 0, 0, 2, 4, and their squares are 9, 1, 1, 1, 0, 0, 4, 16, which sum to 32. The population standard deviation is √(32/8) = √4 = 2. The sample standard deviation is √(32/7) ≈ 2.14.`,
    },
    variance: {
      heading: `The connection to variance`,
      body: `Variance is standard deviation squared, meaning it's exactly that sum before the square root is taken. In the example above, the population variance is 4 (the square of 2). Variance is used often in statistical calculations, but it's harder to interpret directly since its unit is squared, which is why standard deviation is usually more intuitive to present.`,
    },
    related: {
      heading: `Related calculator`,
      linkText: `Percentage Calculator`,
      description: `— for percent, discounts, and other percentage math.`,
    },
  },

  pt: {
    whatIsStdDev: {
      heading: `O que o desvio padrão mede`,
      body: `O desvio padrão mede o quanto os valores de um conjunto de dados estão dispersos em torno da média. Um desvio padrão baixo significa que os valores ficam próximos da média, um desvio padrão alto significa que eles se espalham muito mais.`,
    },
    populationVsSample: {
      heading: `Populacional ou amostral, qual usar`,
      body: `Se seu conjunto de dados é a população inteira que te interessa, todos os valores que existem, use o desvio padrão populacional. Se seu conjunto de dados é apenas uma amostra retirada de uma população maior, sobre a qual você quer tirar conclusões, use o desvio padrão amostral. A diferença está no denominador: o populacional divide por n (a contagem), o amostral divide por n−1, dando um valor ligeiramente maior para compensar a incerteza de ter apenas uma amostra.`,
    },
    formulas: {
      heading: `As fórmulas`,
      populationCode: `σ = √(Σ(x − x̄)² / n)`,
      sampleCode: `s = √(Σ(x − x̄)² / (n−1))`,
      note: `x̄ é a média, x é cada valor individual, e n é a quantidade de valores. As duas fórmulas somam a diferença ao quadrado entre cada valor e a média, depois tiram a raiz quadrada da média dessas diferenças.`,
    },
    workedExample: {
      heading: `Exemplo resolvido, passo a passo`,
      body: `Para o conjunto de dados 2, 4, 4, 4, 5, 5, 7, 9 (8 valores), a média é 5. As diferenças em relação à média são −3, −1, −1, −1, 0, 0, 2, 4, e seus quadrados são 9, 1, 1, 1, 0, 0, 4, 16, que somam 32. O desvio padrão populacional é √(32/8) = √4 = 2. O desvio padrão amostral é √(32/7) ≈ 2,14.`,
    },
    variance: {
      heading: `A ligação com a variância`,
      body: `Variância é o desvio padrão ao quadrado, ou seja, é exatamente aquela soma antes de tirar a raiz quadrada. No exemplo acima, a variância populacional é 4 (o quadrado de 2). Variância é usada com frequência em cálculos estatísticos, mas é mais difícil de interpretar diretamente porque sua unidade fica ao quadrado, por isso o desvio padrão costuma ser mais intuitivo de apresentar.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de Porcentagem`,
      description: `— para porcentagem, descontos e outros cálculos percentuais.`,
    },
  },

  es: {
    whatIsStdDev: {
      heading: `Qué mide la desviación estándar`,
      body: `La desviación estándar mide qué tan dispersos están los valores de un conjunto de datos alrededor de la media. Una desviación estándar baja significa que los valores están cerca de la media, una desviación estándar alta significa que se dispersan mucho más.`,
    },
    populationVsSample: {
      heading: `Poblacional o muestral, cuál usar`,
      body: `Si tu conjunto de datos es toda la población que te interesa, todos los valores que existen, usa la desviación estándar poblacional. Si tu conjunto de datos es solo una muestra tomada de una población más grande, sobre la que quieres sacar conclusiones, usa la desviación estándar muestral. La diferencia está en el denominador: la poblacional divide entre n (el conteo), la muestral divide entre n−1, dando un valor ligeramente mayor para compensar la incertidumbre de tener solo una muestra.`,
    },
    formulas: {
      heading: `Las fórmulas`,
      populationCode: `σ = √(Σ(x − x̄)² / n)`,
      sampleCode: `s = √(Σ(x − x̄)² / (n−1))`,
      note: `x̄ es la media, x es cada valor individual, y n es la cantidad de valores. Ambas fórmulas suman la diferencia al cuadrado entre cada valor y la media, y luego sacan la raíz cuadrada del promedio.`,
    },
    workedExample: {
      heading: `Ejemplo resuelto, paso a paso`,
      body: `Para el conjunto de datos 2, 4, 4, 4, 5, 5, 7, 9 (8 valores), la media es 5. Las diferencias respecto a la media son −3, −1, −1, −1, 0, 0, 2, 4, y sus cuadrados son 9, 1, 1, 1, 0, 0, 4, 16, que suman 32. La desviación estándar poblacional es √(32/8) = √4 = 2. La desviación estándar muestral es √(32/7) ≈ 2,14.`,
    },
    variance: {
      heading: `La relación con la varianza`,
      body: `La varianza es la desviación estándar al cuadrado, es decir, es exactamente esa suma antes de sacar la raíz cuadrada. En el ejemplo anterior, la varianza poblacional es 4 (el cuadrado de 2). La varianza se usa a menudo en cálculos estadísticos, pero es más difícil de interpretar directamente porque su unidad queda al cuadrado, por eso la desviación estándar suele ser más intuitiva de presentar.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de Porcentaje`,
      description: `— para porcentajes, descuentos y otros cálculos porcentuales.`,
    },
  },

  de: {
    whatIsStdDev: {
      heading: `Was die Standardabweichung misst`,
      body: `Die Standardabweichung misst, wie stark die Werte eines Datensatzes um den Mittelwert streuen. Eine niedrige Standardabweichung bedeutet, dass die Werte nah am Mittelwert liegen, eine hohe Standardabweichung bedeutet, dass sie viel stärker streuen.`,
    },
    populationVsSample: {
      heading: `Grundgesamtheit oder Stichprobe, was verwenden`,
      body: `Wenn dein Datensatz die gesamte Grundgesamtheit ist, die dich interessiert, also jeder existierende Wert, verwende die Standardabweichung der Grundgesamtheit. Wenn dein Datensatz nur eine Stichprobe aus einer größeren Grundgesamtheit ist, über die du Schlüsse ziehen willst, verwende die Stichproben-Standardabweichung. Der Unterschied liegt im Nenner: die Grundgesamtheit teilt durch n (die Anzahl), die Stichprobe teilt durch n−1, was einen etwas größeren Wert ergibt, um die Unsicherheit auszugleichen, nur eine Stichprobe zu haben.`,
    },
    formulas: {
      heading: `Die Formeln`,
      populationCode: `σ = √(Σ(x − x̄)² / n)`,
      sampleCode: `s = √(Σ(x − x̄)² / (n−1))`,
      note: `x̄ ist der Mittelwert, x ist jeder einzelne Wert, und n ist die Anzahl der Werte. Beide Formeln summieren die quadrierte Differenz zwischen jedem Wert und dem Mittelwert und ziehen dann die Quadratwurzel aus dem Durchschnitt.`,
    },
    workedExample: {
      heading: `Rechenbeispiel, Schritt für Schritt`,
      body: `Für den Datensatz 2, 4, 4, 4, 5, 5, 7, 9 (8 Werte) beträgt der Mittelwert 5. Die Abweichungen vom Mittelwert sind −3, −1, −1, −1, 0, 0, 2, 4, und ihre Quadrate sind 9, 1, 1, 1, 0, 0, 4, 16, was zusammen 32 ergibt. Die Standardabweichung der Grundgesamtheit ist √(32/8) = √4 = 2. Die Stichproben-Standardabweichung ist √(32/7) ≈ 2,14.`,
    },
    variance: {
      heading: `Der Zusammenhang mit der Varianz`,
      body: `Die Varianz ist die quadrierte Standardabweichung, also genau jene Summe, bevor die Quadratwurzel gezogen wird. Im obigen Beispiel beträgt die Varianz der Grundgesamtheit 4 (das Quadrat von 2). Varianz wird oft in statistischen Berechnungen verwendet, ist aber direkt schwerer zu interpretieren, da ihre Einheit quadriert ist, weshalb die Standardabweichung meist anschaulicher zu präsentieren ist.`,
    },
    related: {
      heading: `Verwandter Rechner`,
      linkText: `Prozentrechner`,
      description: `— für Prozent, Rabatte und andere Prozentrechnungen.`,
    },
  },

  ja: {
    whatIsStdDev: {
      heading: `標準偏差が測るもの`,
      body: `標準偏差は、データセットの値が平均値の周りにどれだけ散らばっているかを示します。標準偏差が小さいほど値は平均値の近くに集まっており、大きいほど値はより広く散らばっています。`,
    },
    populationVsSample: {
      heading: `母集団と標本、どちらを使うべきか`,
      body: `データセットが関心のある対象すべて、つまり存在するすべての値である場合は、母集団の標準偏差を使います。データセットがより大きな母集団から取り出した標本にすぎず、その母集団について結論を出したい場合は、標本の標準偏差を使います。違いは分母にあります。母集団はn（データ数）で割り、標本はn−1で割ります。これは標本だけしかないという不確実性を補うため、やや大きな値になります。`,
    },
    formulas: {
      heading: `計算式`,
      populationCode: `σ = √(Σ(x − x̄)² / n)`,
      sampleCode: `s = √(Σ(x − x̄)² / (n−1))`,
      note: `x̄は平均値、xは個々の値、nはデータ数です。どちらの式も、各値と平均値の差の2乗を合計し、その平均の平方根を取ります。`,
    },
    workedExample: {
      heading: `計算例（段階を追って）`,
      body: `データセット 2, 4, 4, 4, 5, 5, 7, 9（8個の値）の場合、平均は5です。平均との差は −3, −1, −1, −1, 0, 0, 2, 4 で、それぞれの2乗は 9, 1, 1, 1, 0, 0, 4, 16 となり、合計32になります。母集団の標準偏差は √(32/8) = √4 = 2 です。標本の標準偏差は √(32/7) ≈ 2.14 です。`,
    },
    variance: {
      heading: `分散との関係`,
      body: `分散は標準偏差の2乗、つまり平方根を取る前のあの合計そのものです。上の例では、母集団の分散は4（2の2乗）です。分散は統計計算でよく使われますが、単位が2乗になるため直接解釈しづらく、そのため標準偏差のほうが提示するには直感的であることが多いです。`,
    },
    related: {
      heading: `関連する計算機`,
      linkText: `パーセント計算機`,
      description: `— パーセント、割引など、その他のパーセント計算に使えます。`,
    },
  },

  zh: {
    whatIsStdDev: {
      heading: `标准差衡量的是什么`,
      body: `标准差衡量的是数据集中的数值围绕平均值的离散程度。标准差小说明数值都聚集在平均值附近，标准差大说明数值分布得更分散。`,
    },
    populationVsSample: {
      heading: `总体还是样本，该用哪一个`,
      body: `如果你的数据集就是你关心的整个总体，也就是所有存在的数值，就使用总体标准差。如果你的数据集只是从更大的总体中抽取的一个样本，而你想据此对总体做出推断，就使用样本标准差。区别在于分母：总体除以n（数据个数），样本除以n−1，这样得到的值会略大一些，用来弥补只有样本数据带来的不确定性。`,
    },
    formulas: {
      heading: `计算公式`,
      populationCode: `σ = √(Σ(x − x̄)² / n)`,
      sampleCode: `s = √(Σ(x − x̄)² / (n−1))`,
      note: `x̄是平均值，x是每个单独的数值，n是数值的个数。两个公式都是先求每个数值与平均值之差的平方和，再对这个平均值取平方根。`,
    },
    workedExample: {
      heading: `逐步计算示例`,
      body: `对于数据集 2, 4, 4, 4, 5, 5, 7, 9（共8个数值），平均值是5。与平均值的差分别是 −3, −1, −1, −1, 0, 0, 2, 4，它们的平方是 9, 1, 1, 1, 0, 0, 4, 16，总和为32。总体标准差是 √(32/8) = √4 = 2。样本标准差是 √(32/7) ≈ 2.14。`,
    },
    variance: {
      heading: `与方差的关系`,
      body: `方差就是标准差的平方，也就是取平方根之前的那个和本身。在上面的例子中，总体方差是4（2的平方）。方差在统计计算中经常用到，但由于单位是平方形式，直接理解起来比较困难，所以通常标准差更直观、更适合展示。`,
    },
    related: {
      heading: `相关计算器`,
      linkText: `百分比计算器`,
      description: `— 用于百分比、折扣等其他百分比计算。`,
    },
  },

  ko: {
    whatIsStdDev: {
      heading: `표준편차가 측정하는 것`,
      body: `표준편차는 데이터셋의 값들이 평균을 중심으로 얼마나 퍼져 있는지를 나타냅니다. 표준편차가 작으면 값들이 평균에 가깝게 모여 있다는 뜻이고, 표준편차가 크면 값들이 훨씬 더 넓게 퍼져 있다는 뜻입니다.`,
    },
    populationVsSample: {
      heading: `모집단 vs 표본, 어느 것을 사용해야 하나`,
      body: `데이터셋이 관심 있는 전체 모집단, 즉 존재하는 모든 값이라면 모집단 표준편차를 사용하세요. 데이터셋이 더 큰 모집단에서 뽑은 표본일 뿐이고 그 모집단에 대해 결론을 내리고 싶다면 표본 표준편차를 사용하세요. 차이는 분모에 있습니다. 모집단은 n(개수)으로 나누고, 표본은 n−1로 나누어, 표본만 있다는 불확실성을 보정하기 위해 약간 더 큰 값을 줍니다.`,
    },
    formulas: {
      heading: `계산식`,
      populationCode: `σ = √(Σ(x − x̄)² / n)`,
      sampleCode: `s = √(Σ(x − x̄)² / (n−1))`,
      note: `x̄는 평균, x는 각 개별 값, n은 값의 개수입니다. 두 공식 모두 각 값과 평균의 차이를 제곱해 합산한 다음, 그 평균의 제곱근을 구합니다.`,
    },
    workedExample: {
      heading: `단계별 계산 예시`,
      body: `데이터셋 2, 4, 4, 4, 5, 5, 7, 9(8개 값)의 경우, 평균은 5입니다. 평균과의 차이는 −3, −1, −1, −1, 0, 0, 2, 4이고, 이를 제곱하면 9, 1, 1, 1, 0, 0, 4, 16이 되며 합은 32입니다. 모집단 표준편차는 √(32/8) = √4 = 2입니다. 표본 표준편차는 √(32/7) ≈ 2.14입니다.`,
    },
    variance: {
      heading: `분산과의 관계`,
      body: `분산은 표준편차의 제곱, 즉 제곱근을 구하기 전의 바로 그 합입니다. 위 예시에서 모집단 분산은 4(2의 제곱)입니다. 분산은 통계 계산에서 자주 사용되지만, 단위가 제곱이라 직접 해석하기 어려워서 표준편차가 보통 더 직관적으로 제시됩니다.`,
    },
    related: {
      heading: `관련 계산기`,
      linkText: `퍼센트 계산기`,
      description: `— 퍼센트, 할인 등 다른 퍼센트 계산에 사용할 수 있습니다.`,
    },
  },

  hi: {
    whatIsStdDev: {
      heading: `मानक विचलन क्या मापता है`,
      body: `मानक विचलन यह मापता है कि किसी डेटासेट के मान माध्य के इर्द-गिर्द कितने फैले हुए हैं। कम मानक विचलन का मतलब है कि मान माध्य के करीब हैं, ज़्यादा मानक विचलन का मतलब है कि वे कहीं ज़्यादा फैले हुए हैं।`,
    },
    populationVsSample: {
      heading: `जनसंख्या या नमूना, कौन सा इस्तेमाल करें`,
      body: `अगर आपका डेटासेट पूरी वह जनसंख्या है जिसमें आपकी दिलचस्पी है, यानी मौजूद हर मान, तो जनसंख्या मानक विचलन का उपयोग करें। अगर आपका डेटासेट सिर्फ़ एक बड़ी जनसंख्या से लिया गया नमूना है, जिसके बारे में आप निष्कर्ष निकालना चाहते हैं, तो नमूना मानक विचलन का उपयोग करें। अंतर हर में है: जनसंख्या n (गिनती) से भाग देती है, नमूना n−1 से भाग देता है, जिससे सिर्फ़ नमूना होने की अनिश्चितता की भरपाई के लिए थोड़ा बड़ा मान मिलता है।`,
    },
    formulas: {
      heading: `फ़ॉर्मूले`,
      populationCode: `σ = √(Σ(x − x̄)² / n)`,
      sampleCode: `s = √(Σ(x − x̄)² / (n−1))`,
      note: `x̄ माध्य है, x हर अलग मान है, और n मानों की संख्या है। दोनों फ़ॉर्मूले हर मान और माध्य के बीच के अंतर के वर्ग को जोड़ते हैं, फिर उस औसत का वर्गमूल निकालते हैं।`,
    },
    workedExample: {
      heading: `चरण-दर-चरण उदाहरण`,
      body: `डेटासेट 2, 4, 4, 4, 5, 5, 7, 9 (8 मान) के लिए, माध्य 5 है। माध्य से अंतर −3, −1, −1, −1, 0, 0, 2, 4 हैं, और इनके वर्ग 9, 1, 1, 1, 0, 0, 4, 16 हैं, जिनका योग 32 होता है। जनसंख्या मानक विचलन √(32/8) = √4 = 2 है। नमूना मानक विचलन √(32/7) ≈ 2.14 है।`,
    },
    variance: {
      heading: `प्रसरण से संबंध`,
      body: `प्रसरण मानक विचलन का वर्ग है, यानी वर्गमूल निकालने से पहले वाला वही योग। ऊपर के उदाहरण में, जनसंख्या प्रसरण 4 है (2 का वर्ग)। प्रसरण का उपयोग सांख्यिकीय गणनाओं में अक्सर होता है, लेकिन इसे सीधे समझना मुश्किल होता है क्योंकि इसकी इकाई वर्ग में होती है, इसीलिए मानक विचलन को पेश करना आमतौर पर ज़्यादा सहज होता है।`,
    },
    related: {
      heading: `संबंधित कैलकुलेटर`,
      linkText: `प्रतिशत कैलकुलेटर`,
      description: `— प्रतिशत, छूट और अन्य प्रतिशत गणनाओं के लिए।`,
    },
  },

  id: {
    whatIsStdDev: {
      heading: `Apa yang diukur simpangan baku`,
      body: `Simpangan baku mengukur seberapa tersebar nilai-nilai dalam sebuah kumpulan data di sekitar rata-ratanya. Simpangan baku yang kecil berarti nilai-nilai berada dekat dengan rata-rata, simpangan baku yang besar berarti nilai-nilai tersebar jauh lebih luas.`,
    },
    populationVsSample: {
      heading: `Populasi atau sampel, mana yang harus digunakan`,
      body: `Jika kumpulan datamu adalah seluruh populasi yang kamu pedulikan, yaitu semua nilai yang ada, gunakan simpangan baku populasi. Jika kumpulan datamu hanya sampel yang diambil dari populasi yang lebih besar, yang ingin kamu buat kesimpulannya, gunakan simpangan baku sampel. Perbedaannya ada pada penyebut: populasi dibagi dengan n (jumlah data), sampel dibagi dengan n−1, menghasilkan nilai yang sedikit lebih besar untuk mengompensasi ketidakpastian karena hanya memiliki sampel.`,
    },
    formulas: {
      heading: `Rumusnya`,
      populationCode: `σ = √(Σ(x − x̄)² / n)`,
      sampleCode: `s = √(Σ(x − x̄)² / (n−1))`,
      note: `x̄ adalah rata-rata, x adalah setiap nilai individual, dan n adalah jumlah nilai. Kedua rumus menjumlahkan selisih kuadrat antara setiap nilai dan rata-rata, lalu mengambil akar kuadrat dari rata-ratanya.`,
    },
    workedExample: {
      heading: `Contoh perhitungan langkah demi langkah`,
      body: `Untuk kumpulan data 2, 4, 4, 4, 5, 5, 7, 9 (8 nilai), rata-ratanya adalah 5. Selisih dari rata-rata adalah −3, −1, −1, −1, 0, 0, 2, 4, dan kuadratnya adalah 9, 1, 1, 1, 0, 0, 4, 16, yang jumlahnya 32. Simpangan baku populasi adalah √(32/8) = √4 = 2. Simpangan baku sampel adalah √(32/7) ≈ 2,14.`,
    },
    variance: {
      heading: `Hubungan dengan varians`,
      body: `Varians adalah simpangan baku kuadrat, artinya persis jumlah tersebut sebelum akar kuadratnya diambil. Pada contoh di atas, varians populasi adalah 4 (kuadrat dari 2). Varians sering digunakan dalam perhitungan statistik, tapi lebih sulit ditafsirkan secara langsung karena satuannya menjadi kuadrat, itulah sebabnya simpangan baku biasanya lebih intuitif untuk disajikan.`,
    },
    related: {
      heading: `Kalkulator terkait`,
      linkText: `Kalkulator Persen`,
      description: `— untuk persentase, diskon, dan perhitungan persentase lainnya.`,
    },
  },
};

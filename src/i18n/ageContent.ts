export interface AgeContent {
  whatItCalculates: { heading: string; body: string };
  howItWorks: {
    heading: string;
    leapYearLabel: string;
    leapYearBody: string;
    monthLengthLabel: string;
    monthLengthBody: string;
    comparisonDateLabel: string;
    comparisonDateBody: string;
  };
  useCases: { heading: string; body: string };
  limitations: { heading: string; body: string };
  related: { heading: string; linkText: string; description: string };
}

export const ageContent: Record<string, AgeContent> = {
  sv: {
    whatItCalculates: {
      heading: `Vad kalkylatorn räknar ut`,
      body: `Utifrån ett födelsedatum och ett valfritt jämförelsedatum (som förvalt är dagens datum) räknar kalkylatorn ut den exakta åldern i år, månader och dagar, det totala antalet dagar som har levts mellan de två datumen, samt hur många dagar det är kvar till nästa födelsedag.`,
    },
    howItWorks: {
      heading: `Så räknas det ut`,
      leapYearLabel: `Skottår:`,
      leapYearBody: `Beräkningen tar hänsyn till skottår automatiskt. Är någon född den 29 februari räknas den dagen som en vanlig födelsedag i skottår, och antalet dagar till nästa födelsedag baseras alltid på den faktiska kalendern.`,
      monthLengthLabel: `Olika långa månader:`,
      monthLengthBody: `Antalet hela månader räknas utifrån kalendermånadernas faktiska längd (28–31 dagar), inte som ett genomsnitt. Det gör att åldern i år, månader och dagar alltid landar exakt, oavsett vilka månader som ingår i perioden.`,
      comparisonDateLabel: `Jämförelsedatum:`,
      comparisonDateBody: `Som standard visas dagens datum som jämförelsedatum, men du kan ändra det till valfritt datum, till exempel för att räkna ut exakt ålder vid ett visst evenemang eller på ett dokument.`,
    },
    useCases: {
      heading: `Vanliga användningsområden`,
      body: `Åldersräknaren används ofta för att räkna ut exakt ålder inför ansökningar och formulär som kräver ålder i år och månader, för att se hur många dagar det är kvar till en födelsedag, eller för att räkna ut åldern vid ett specifikt datum i det förflutna eller framtiden, till exempel examensdagen eller ett bröllop.`,
    },
    limitations: {
      heading: `Begränsningar`,
      body: `Beräkningen utgår från den gregorianska kalendern och gäller hela dagar, den tar inte hänsyn till klockslag. Om jämförelsedatumet ligger före födelsedatumet visas inget resultat, eftersom en ålder då inte kan räknas ut.`,
    },
    related: {
      heading: `Relaterad kalkylator`,
      linkText: `Tidsräknare`,
      description: `— räkna ut skillnaden mellan två valfria tidpunkter, eller lägg till och dra av tid från ett datum.`,
    },
  },

  en: {
    whatItCalculates: {
      heading: `What the calculator works out`,
      body: `Based on a date of birth and an optional comparison date (today's date by default), the calculator works out the exact age in years, months and days, the total number of days lived between the two dates, and how many days remain until the next birthday.`,
    },
    howItWorks: {
      heading: `How the calculation works`,
      leapYearLabel: `Leap years:`,
      leapYearBody: `The calculation accounts for leap years automatically. If someone is born on February 29th, that date counts as a normal birthday in leap years, and the number of days until the next birthday is always based on the actual calendar.`,
      monthLengthLabel: `Months of different lengths:`,
      monthLengthBody: `Whole months are counted by the calendar months' actual length (28 to 31 days), not as an average. That means the age shown in years, months and days is always exact, regardless of which months fall within the period.`,
      comparisonDateLabel: `Comparison date:`,
      comparisonDateBody: `The calculator defaults to today's date as the comparison date, but you can change it to any date, for example to work out an exact age at a specific event or on a document.`,
    },
    useCases: {
      heading: `Common uses`,
      body: `The age calculator is often used to work out an exact age for applications and forms that require age in years and months, to see how many days remain until a birthday, or to work out someone's age on a specific date in the past or future, such as a graduation day or a wedding.`,
    },
    limitations: {
      heading: `Limitations`,
      body: `The calculation is based on the Gregorian calendar and works in whole days, it doesn't account for the time of day. If the comparison date falls before the birth date, no result is shown, since an age can't be worked out in that case.`,
    },
    related: {
      heading: `Related calculator`,
      linkText: `Time calculator`,
      description: `— work out the difference between any two points in time, or add and subtract time from a date.`,
    },
  },

  pt: {
    whatItCalculates: {
      heading: `O que a calculadora calcula`,
      body: `Com base numa data de nascimento e numa data de comparação opcional (por padrão, a data de hoje), a calculadora determina a idade exata em anos, meses e dias, o número total de dias vividos entre as duas datas, e quantos dias faltam para o próximo aniversário.`,
    },
    howItWorks: {
      heading: `Como o cálculo funciona`,
      leapYearLabel: `Anos bissextos:`,
      leapYearBody: `O cálculo considera os anos bissextos automaticamente. Se alguém nasceu em 29 de fevereiro, essa data conta como um aniversário normal nos anos bissextos, e o número de dias até o próximo aniversário é sempre baseado no calendário real.`,
      monthLengthLabel: `Meses com durações diferentes:`,
      monthLengthBody: `Os meses completos são contados pela duração real de cada mês do calendário (28 a 31 dias), não como uma média. Isso faz com que a idade mostrada em anos, meses e dias seja sempre exata, independentemente dos meses incluídos no período.`,
      comparisonDateLabel: `Data de comparação:`,
      comparisonDateBody: `Por padrão, a calculadora usa a data de hoje como data de comparação, mas você pode alterá-la para qualquer data, por exemplo para calcular a idade exata num evento específico ou num documento.`,
    },
    useCases: {
      heading: `Usos comuns`,
      body: `A calculadora de idade costuma ser usada para calcular a idade exata em formulários e inscrições que exigem idade em anos e meses, para ver quantos dias faltam para um aniversário, ou para calcular a idade de alguém numa data específica no passado ou no futuro, como uma formatura ou um casamento.`,
    },
    limitations: {
      heading: `Limitações`,
      body: `O cálculo é baseado no calendário gregoriano e considera dias inteiros, não leva em conta a hora do dia. Se a data de comparação for anterior à data de nascimento, nenhum resultado é exibido, já que não é possível calcular uma idade nesse caso.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de tempo`,
      description: `— calcule a diferença entre dois momentos quaisquer, ou some e subtraia tempo de uma data.`,
    },
  },

  es: {
    whatItCalculates: {
      heading: `Qué calcula la calculadora`,
      body: `A partir de una fecha de nacimiento y una fecha de comparación opcional (por defecto, la fecha de hoy), la calculadora obtiene la edad exacta en años, meses y días, el número total de días vividos entre las dos fechas, y cuántos días quedan hasta el próximo cumpleaños.`,
    },
    howItWorks: {
      heading: `Cómo funciona el cálculo`,
      leapYearLabel: `Años bisiestos:`,
      leapYearBody: `El cálculo tiene en cuenta los años bisiestos automáticamente. Si alguien nació el 29 de febrero, esa fecha cuenta como un cumpleaños normal en los años bisiestos, y el número de días hasta el próximo cumpleaños siempre se basa en el calendario real.`,
      monthLengthLabel: `Meses de distinta duración:`,
      monthLengthBody: `Los meses completos se cuentan según la duración real de cada mes del calendario (de 28 a 31 días), no como un promedio. Así, la edad mostrada en años, meses y días es siempre exacta, sin importar qué meses queden dentro del periodo.`,
      comparisonDateLabel: `Fecha de comparación:`,
      comparisonDateBody: `Por defecto, la calculadora usa la fecha de hoy como fecha de comparación, pero puedes cambiarla a cualquier fecha, por ejemplo para calcular la edad exacta en un evento concreto o en un documento.`,
    },
    useCases: {
      heading: `Usos habituales`,
      body: `La calculadora de edad se usa a menudo para calcular la edad exacta en solicitudes y formularios que piden la edad en años y meses, para ver cuántos días quedan hasta un cumpleaños, o para calcular la edad de alguien en una fecha concreta del pasado o del futuro, como una graduación o una boda.`,
    },
    limitations: {
      heading: `Limitaciones`,
      body: `El cálculo se basa en el calendario gregoriano y trabaja con días completos, no tiene en cuenta la hora del día. Si la fecha de comparación es anterior a la fecha de nacimiento, no se muestra ningún resultado, ya que en ese caso no se puede calcular una edad.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de tiempo`,
      description: `— calcula la diferencia entre dos momentos cualesquiera, o suma y resta tiempo a una fecha.`,
    },
  },

  de: {
    whatItCalculates: {
      heading: `Was der Rechner berechnet`,
      body: `Ausgehend von einem Geburtsdatum und einem optionalen Vergleichsdatum (standardmäßig das heutige Datum) berechnet der Rechner das genaue Alter in Jahren, Monaten und Tagen, die Gesamtzahl der zwischen den beiden Daten gelebten Tage sowie die Anzahl der Tage bis zum nächsten Geburtstag.`,
    },
    howItWorks: {
      heading: `So funktioniert die Berechnung`,
      leapYearLabel: `Schaltjahre:`,
      leapYearBody: `Die Berechnung berücksichtigt Schaltjahre automatisch. Wurde jemand am 29. Februar geboren, zählt dieses Datum in Schaltjahren als normaler Geburtstag, und die Anzahl der Tage bis zum nächsten Geburtstag basiert stets auf dem tatsächlichen Kalender.`,
      monthLengthLabel: `Unterschiedlich lange Monate:`,
      monthLengthBody: `Volle Monate werden anhand der tatsächlichen Länge der Kalendermonate (28 bis 31 Tage) gezählt, nicht als Durchschnitt. Dadurch ist das in Jahren, Monaten und Tagen angezeigte Alter immer exakt, unabhängig davon, welche Monate in den Zeitraum fallen.`,
      comparisonDateLabel: `Vergleichsdatum:`,
      comparisonDateBody: `Standardmäßig verwendet der Rechner das heutige Datum als Vergleichsdatum, du kannst es aber auf ein beliebiges Datum ändern, zum Beispiel um das genaue Alter bei einem bestimmten Ereignis oder auf einem Dokument zu berechnen.`,
    },
    useCases: {
      heading: `Häufige Anwendungen`,
      body: `Der Altersrechner wird oft genutzt, um das genaue Alter für Anträge und Formulare zu berechnen, die das Alter in Jahren und Monaten verlangen, um zu sehen, wie viele Tage bis zu einem Geburtstag verbleiben, oder um jemandes Alter an einem bestimmten Datum in der Vergangenheit oder Zukunft zu berechnen, etwa an einem Abschlusstag oder einer Hochzeit.`,
    },
    limitations: {
      heading: `Einschränkungen`,
      body: `Die Berechnung basiert auf dem gregorianischen Kalender und arbeitet mit ganzen Tagen, die Uhrzeit wird nicht berücksichtigt. Liegt das Vergleichsdatum vor dem Geburtsdatum, wird kein Ergebnis angezeigt, da in diesem Fall kein Alter berechnet werden kann.`,
    },
    related: {
      heading: `Verwandter Rechner`,
      linkText: `Zeitrechner`,
      description: `— berechne die Differenz zwischen zwei beliebigen Zeitpunkten oder addiere und subtrahiere Zeit von einem Datum.`,
    },
  },

  ja: {
    whatItCalculates: {
      heading: `この計算機が計算する内容`,
      body: `生年月日と任意の比較日(初期設定は今日の日付)をもとに、年・月・日単位の正確な年齢、2つの日付の間に生きた総日数、そして次の誕生日までの日数を計算します。`,
    },
    howItWorks: {
      heading: `計算の仕組み`,
      leapYearLabel: `うるう年:`,
      leapYearBody: `計算はうるう年を自動的に考慮します。2月29日生まれの場合、その日はうるう年には通常の誕生日として扱われ、次の誕生日までの日数は常に実際のカレンダーに基づいて計算されます。`,
      monthLengthLabel: `月ごとの日数の違い:`,
      monthLengthBody: `満月数はカレンダー上の各月の実際の日数(28〜31日)で数えられ、平均値では計算されません。そのため、年・月・日で表示される年齢は、期間に含まれる月にかかわらず常に正確です。`,
      comparisonDateLabel: `比較日:`,
      comparisonDateBody: `初期設定では今日の日付が比較日として使われますが、任意の日付に変更できます。たとえば特定のイベント時点や書類上の正確な年齢を調べたいときに便利です。`,
    },
    useCases: {
      heading: `よくある使い方`,
      body: `年齢計算機は、年・月単位での正確な年齢が必要な申請書や書類のため、誕生日までの残り日数を確認するため、あるいは過去や未来の特定の日付(卒業式や結婚式など)における年齢を計算するためによく使われます。`,
    },
    limitations: {
      heading: `制限事項`,
      body: `この計算はグレゴリオ暦に基づき、日単位で計算されるため、時刻は考慮されません。比較日が生年月日より前の場合、その組み合わせでは年齢を計算できないため、結果は表示されません。`,
    },
    related: {
      heading: `関連する計算機`,
      linkText: `時間計算機`,
      description: `— 任意の2つの時点の差を計算したり、日時に対して時間を加算・減算したりできます。`,
    },
  },

  zh: {
    whatItCalculates: {
      heading: `计算器可以计算什么`,
      body: `根据出生日期和一个可选的比较日期(默认为今天),计算器会算出以年、月、日表示的精确年龄、两个日期之间实际生活的总天数,以及距离下一个生日还有多少天。`,
    },
    howItWorks: {
      heading: `计算原理`,
      leapYearLabel: `闰年:`,
      leapYearBody: `计算会自动考虑闰年。如果某人出生于2月29日,在闰年中这一天会被当作正常的生日来计算,而距离下一个生日的天数始终基于实际日历计算。`,
      monthLengthLabel: `月份长度不同:`,
      monthLengthBody: `整月数是按日历上各月的实际天数(28到31天)计算的,而不是按平均值计算。这意味着以年、月、日显示的年龄总是精确的,无论期间涉及哪些月份。`,
      comparisonDateLabel: `比较日期:`,
      comparisonDateBody: `计算器默认使用今天的日期作为比较日期,但你可以将其改为任意日期,例如用来计算某个特定事件当天或某份文件上的精确年龄。`,
    },
    useCases: {
      heading: `常见用途`,
      body: `年龄计算器常用于计算申请表和文件中要求以年、月表示的精确年龄、查看距离生日还有多少天,或计算某人在过去或未来某个特定日期(例如毕业当天或婚礼当天)的年龄。`,
    },
    limitations: {
      heading: `局限性`,
      body: `该计算基于公历,以整天为单位,不考虑具体时刻。如果比较日期早于出生日期,则不会显示结果,因为这种情况下无法计算年龄。`,
    },
    related: {
      heading: `相关计算器`,
      linkText: `时间计算器`,
      description: `— 计算任意两个时间点之间的差值,或对某个日期进行时间的加减。`,
    },
  },

  ko: {
    whatItCalculates: {
      heading: `이 계산기가 계산하는 것`,
      body: `생년월일과 선택적인 비교 날짜(기본값은 오늘 날짜)를 기준으로, 연·월·일 단위의 정확한 나이, 두 날짜 사이에 산 총 일수, 그리고 다음 생일까지 남은 일수를 계산합니다.`,
    },
    howItWorks: {
      heading: `계산 방식`,
      leapYearLabel: `윤년:`,
      leapYearBody: `계산은 윤년을 자동으로 반영합니다. 2월 29일에 태어난 경우, 윤년에는 이 날짜가 일반적인 생일로 계산되며, 다음 생일까지 남은 일수는 항상 실제 달력을 기준으로 계산됩니다.`,
      monthLengthLabel: `월마다 다른 길이:`,
      monthLengthBody: `만 개월 수는 평균이 아니라 달력상 각 달의 실제 일수(28~31일)를 기준으로 계산됩니다. 그래서 연·월·일로 표시되는 나이는 기간에 어떤 달이 포함되든 항상 정확합니다.`,
      comparisonDateLabel: `비교 날짜:`,
      comparisonDateBody: `계산기는 기본적으로 오늘 날짜를 비교 날짜로 사용하지만, 원하는 날짜로 바꿀 수 있습니다. 예를 들어 특정 행사 시점이나 서류상의 정확한 나이를 계산할 때 유용합니다.`,
    },
    useCases: {
      heading: `일반적인 활용 사례`,
      body: `나이 계산기는 연·월 단위의 정확한 나이를 요구하는 신청서나 서류를 위해, 생일까지 남은 일수를 확인하기 위해, 또는 졸업식이나 결혼식처럼 과거나 미래의 특정 날짜에 누군가의 나이를 계산하기 위해 자주 사용됩니다.`,
    },
    limitations: {
      heading: `제한 사항`,
      body: `이 계산은 그레고리력을 기준으로 하며 하루 단위로 작동하므로 시각은 고려하지 않습니다. 비교 날짜가 생년월일보다 이전이면 나이를 계산할 수 없으므로 결과가 표시되지 않습니다.`,
    },
    related: {
      heading: `관련 계산기`,
      linkText: `시간 계산기`,
      description: `— 임의의 두 시점 사이의 차이를 계산하거나, 특정 날짜에 시간을 더하거나 뺄 수 있습니다.`,
    },
  },

  hi: {
    whatItCalculates: {
      heading: `यह कैलकुलेटर क्या गणना करता है`,
      body: `जन्मतिथि और एक वैकल्पिक तुलना तिथि (डिफ़ॉल्ट रूप से आज की तारीख) के आधार पर, यह कैलकुलेटर वर्षों, महीनों और दिनों में सटीक आयु, दोनों तारीखों के बीच जीए गए कुल दिनों की संख्या, और अगले जन्मदिन तक बचे दिनों की गणना करता है।`,
    },
    howItWorks: {
      heading: `गणना कैसे काम करती है`,
      leapYearLabel: `लीप वर्ष:`,
      leapYearBody: `यह गणना लीप वर्षों को स्वतः ध्यान में रखती है। यदि किसी का जन्म 29 फरवरी को हुआ हो, तो लीप वर्षों में यह तारीख एक सामान्य जन्मदिन के रूप में गिनी जाती है, और अगले जन्मदिन तक के दिनों की संख्या हमेशा वास्तविक कैलेंडर पर आधारित होती है।`,
      monthLengthLabel: `अलग-अलग लंबाई के महीने:`,
      monthLengthBody: `पूरे महीनों की गिनती औसत के बजाय कैलेंडर महीनों की वास्तविक लंबाई (28 से 31 दिन) के आधार पर होती है। इसका मतलब है कि वर्षों, महीनों और दिनों में दिखाई गई आयु हमेशा सटीक होती है, चाहे अवधि में कोई भी महीने शामिल हों।`,
      comparisonDateLabel: `तुलना तिथि:`,
      comparisonDateBody: `कैलकुलेटर डिफ़ॉल्ट रूप से आज की तारीख को तुलना तिथि के रूप में उपयोग करता है, लेकिन आप इसे किसी भी तारीख में बदल सकते हैं, जैसे किसी विशेष कार्यक्रम या दस्तावेज़ पर सटीक आयु जानने के लिए।`,
    },
    useCases: {
      heading: `सामान्य उपयोग`,
      body: `आयु कैलकुलेटर का उपयोग अक्सर उन आवेदनों और फ़ॉर्मों के लिए सटीक आयु निकालने के लिए किया जाता है जिनमें वर्षों और महीनों में आयु चाहिए होती है, किसी जन्मदिन तक बचे दिनों को देखने के लिए, या भूतकाल या भविष्य की किसी विशेष तारीख, जैसे स्नातक समारोह या शादी के दिन, किसी की आयु जानने के लिए।`,
    },
    limitations: {
      heading: `सीमाएं`,
      body: `यह गणना ग्रेगोरियन कैलेंडर पर आधारित है और पूरे दिनों के हिसाब से काम करती है, यह दिन के समय को ध्यान में नहीं रखती। यदि तुलना तिथि जन्मतिथि से पहले की है, तो कोई परिणाम नहीं दिखाया जाता, क्योंकि उस स्थिति में आयु की गणना नहीं की जा सकती।`,
    },
    related: {
      heading: `संबंधित कैलकुलेटर`,
      linkText: `समय कैलकुलेटर`,
      description: `— किन्हीं दो समय बिंदुओं के बीच का अंतर निकालें, या किसी तारीख में समय जोड़ें या घटाएं।`,
    },
  },

  id: {
    whatItCalculates: {
      heading: `Apa yang dihitung kalkulator ini`,
      body: `Berdasarkan tanggal lahir dan tanggal pembanding opsional (secara default tanggal hari ini), kalkulator ini menghitung usia yang tepat dalam tahun, bulan, dan hari, jumlah total hari yang telah dijalani di antara kedua tanggal tersebut, serta berapa hari lagi hingga ulang tahun berikutnya.`,
    },
    howItWorks: {
      heading: `Cara kerja perhitungan`,
      leapYearLabel: `Tahun kabisat:`,
      leapYearBody: `Perhitungan ini memperhitungkan tahun kabisat secara otomatis. Jika seseorang lahir pada 29 Februari, tanggal tersebut dihitung sebagai ulang tahun biasa pada tahun kabisat, dan jumlah hari hingga ulang tahun berikutnya selalu didasarkan pada kalender yang sebenarnya.`,
      monthLengthLabel: `Bulan dengan panjang berbeda-beda:`,
      monthLengthBody: `Jumlah bulan penuh dihitung berdasarkan panjang sebenarnya dari setiap bulan kalender (28 hingga 31 hari), bukan rata-rata. Ini berarti usia yang ditampilkan dalam tahun, bulan, dan hari selalu tepat, apa pun bulan yang termasuk dalam periode tersebut.`,
      comparisonDateLabel: `Tanggal pembanding:`,
      comparisonDateBody: `Secara default, kalkulator menggunakan tanggal hari ini sebagai tanggal pembanding, tetapi kamu bisa mengubahnya ke tanggal apa pun, misalnya untuk menghitung usia yang tepat pada acara tertentu atau pada sebuah dokumen.`,
    },
    useCases: {
      heading: `Penggunaan umum`,
      body: `Kalkulator usia sering digunakan untuk menghitung usia yang tepat untuk formulir dan aplikasi yang memerlukan usia dalam tahun dan bulan, untuk melihat berapa hari lagi hingga ulang tahun, atau untuk menghitung usia seseorang pada tanggal tertentu di masa lalu atau masa depan, misalnya hari kelulusan atau pernikahan.`,
    },
    limitations: {
      heading: `Keterbatasan`,
      body: `Perhitungan ini didasarkan pada kalender Gregorian dan bekerja dalam hitungan hari penuh, tidak memperhitungkan waktu dalam sehari. Jika tanggal pembanding jatuh sebelum tanggal lahir, tidak ada hasil yang ditampilkan, karena usia tidak dapat dihitung dalam kasus tersebut.`,
    },
    related: {
      heading: `Kalkulator terkait`,
      linkText: `Kalkulator waktu`,
      description: `— hitung selisih antara dua titik waktu mana pun, atau tambah dan kurangi waktu dari suatu tanggal.`,
    },
  },
};

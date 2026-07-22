export interface TimeContent {
  whatItCalculates: { heading: string; body: string };
  howItWorks: {
    heading: string;
    leapYearLabel: string;
    leapYearBody: string;
    monthLengthLabel: string;
    monthLengthBody: string;
    timezoneLabel: string;
    timezoneBody: string;
  };
  useCases: { heading: string; body: string };
  limitations: { heading: string; body: string };
  related: { heading: string; linkText: string; description: string };
}

export const timeContent: Record<string, TimeContent> = {
  sv: {
    whatItCalculates: {
      heading: `Vad kalkylatorn räknar ut`,
      body: `Kalkylatorn har två lägen. I läget Skillnad mellan tider räknar den ut exakt hur lång tid det är mellan två tidpunkter, angivet i dagar, timmar, minuter och sekunder (eller i en sammanhängande enhet, beroende på hur stor skillnaden är). I läget Lägg till / dra av utgår den från ett startdatum och lägger till eller drar av ett antal år, månader, dagar, timmar, minuter eller sekunder, för att räkna fram ett nytt datum och en ny tidpunkt.`,
    },
    howItWorks: {
      heading: `Så räknas det ut`,
      leapYearLabel: `Skottår:`,
      leapYearBody: `Beräkningen tar hänsyn till skottår automatiskt. Den 29 februari finns med i skottår (vart fjärde år, med undantag för sekelår som inte är delbara med 400), och det påverkar hur många dagar som ligger mellan två datum.`,
      monthLengthLabel: `Olika långa månader:`,
      monthLengthBody: `När resultatet visas i år och månader räknas varje månad utifrån sitt faktiska antal dagar (28–31), inte som ett genomsnitt. Det gör att till exempel "ett år och två månader" från ett visst datum landar exakt på samma dag och månad nästa gång, snarare än på ett ungefärligt antal dagar.`,
      timezoneLabel: `Tidszon:`,
      timezoneBody: `Alla tider tolkas i din lokala tidszon, den som din enhet är inställd på. Kalkylatorn omvandlar inte mellan tidszoner. Om du jämför tidpunkter i olika tidszoner behöver du själv räkna om dem till samma tidszon innan du fyller i dem.`,
    },
    useCases: {
      heading: `Vanliga användningsområden`,
      body: `Tidsräknaren används ofta för att räkna ut hur många dagar som är kvar till en deadline eller ett event, hur länge en anställning, ett kontrakt eller ett abonnemang har varat, eller för att räkna fram ett exakt slutdatum genom att lägga till en viss tid på ett startdatum, till exempel en 90-dagars uppsägningstid eller en projektperiod på 6 månader.`,
    },
    limitations: {
      heading: `Begränsningar`,
      body: `Beräkningen utgår från den gregorianska kalendern och tar inte hänsyn till skottsekunder eller lokala kalenderavvikelser (till exempel andra kalendersystem). Eftersom tiderna tolkas i din enhets lokala tidszon och inte omvandlas automatiskt, bör du dubbelkolla resultatet manuellt om du jämför tidpunkter över sommartidsskiften eller mellan olika tidszoner.`,
    },
    related: {
      heading: `Relaterad kalkylator`,
      linkText: `Åldersräknare`,
      description: `— räkna ut en exakt ålder i år, månader och dagar, samt hur långt det är kvar till nästa födelsedag.`,
    },
  },

  en: {
    whatItCalculates: {
      heading: `What the calculator works out`,
      body: `The calculator has two modes. In Difference between times mode, it works out exactly how much time separates two points in time, shown in days, hours, minutes and seconds (or in a single combined unit, depending on how large the difference is). In Add / subtract mode, it starts from a given date and time and adds or subtracts a number of years, months, days, hours, minutes or seconds, to work out a new date and time.`,
    },
    howItWorks: {
      heading: `How the calculation works`,
      leapYearLabel: `Leap years:`,
      leapYearBody: `The calculation accounts for leap years automatically. February 29th is included in leap years (every four years, except century years not divisible by 400), and this affects how many days fall between two dates.`,
      monthLengthLabel: `Months of different lengths:`,
      monthLengthBody: `When the result is shown in years and months, each month is counted by its actual number of days (28 to 31), not as an average. That means, for example, "one year and two months" from a given date lands on exactly the same day and month next time round, rather than an approximate number of days.`,
      timezoneLabel: `Time zone:`,
      timezoneBody: `All times are interpreted in your local time zone, the one your device is set to. The calculator doesn't convert between time zones. If you're comparing times across different zones, you'll need to convert them to a shared zone yourself before entering them.`,
    },
    useCases: {
      heading: `Common uses`,
      body: `The time calculator is often used to work out how many days remain until a deadline or event, how long a job, contract or subscription has lasted, or to work out an exact end date by adding a set amount of time to a start date, for example a 90-day notice period or a 6-month project.`,
    },
    limitations: {
      heading: `Limitations`,
      body: `The calculation is based on the Gregorian calendar and doesn't account for leap seconds or local calendar variations (for example other calendar systems). Because times are read in your device's local time zone and not converted automatically, double-check the result manually if you're comparing times across a daylight saving change or between different time zones.`,
    },
    related: {
      heading: `Related calculator`,
      linkText: `Age calculator`,
      description: `— work out an exact age in years, months and days, plus how long until the next birthday.`,
    },
  },

  pt: {
    whatItCalculates: {
      heading: `O que a calculadora calcula`,
      body: `A calculadora tem dois modos. No modo Diferença entre horários, ela calcula exatamente quanto tempo separa dois momentos, mostrado em dias, horas, minutos e segundos (ou numa única unidade combinada, dependendo do tamanho da diferença). No modo Somar/subtrair, ela parte de uma data e hora informadas e soma ou subtrai um número de anos, meses, dias, horas, minutos ou segundos, para calcular uma nova data e horário.`,
    },
    howItWorks: {
      heading: `Como o cálculo funciona`,
      leapYearLabel: `Anos bissextos:`,
      leapYearBody: `O cálculo considera os anos bissextos automaticamente. O dia 29 de fevereiro é incluído nos anos bissextos (a cada quatro anos, exceto anos de século não divisíveis por 400), e isso afeta quantos dias há entre duas datas.`,
      monthLengthLabel: `Meses com durações diferentes:`,
      monthLengthBody: `Quando o resultado é mostrado em anos e meses, cada mês é contado pelo seu número real de dias (28 a 31), não como uma média. Isso faz com que, por exemplo, "um ano e dois meses" a partir de uma data caia exatamente no mesmo dia e mês na próxima vez, em vez de um número aproximado de dias.`,
      timezoneLabel: `Fuso horário:`,
      timezoneBody: `Todos os horários são interpretados no seu fuso horário local, o que está configurado no seu dispositivo. A calculadora não converte entre fusos horários; se você estiver comparando horários em fusos diferentes, é preciso convertê-los para um fuso comum antes de inserir os valores.`,
    },
    useCases: {
      heading: `Usos comuns`,
      body: `A calculadora de tempo costuma ser usada para saber quantos dias faltam para um prazo ou evento, quanto tempo durou um emprego, contrato ou assinatura, ou para calcular uma data final exata somando um período determinado a uma data inicial, por exemplo um aviso prévio de 90 dias ou um projeto de 6 meses.`,
    },
    limitations: {
      heading: `Limitações`,
      body: `O cálculo é baseado no calendário gregoriano e não considera segundos bissextos nem variações de calendário local (por exemplo, outros sistemas de calendário). Como os horários são interpretados no fuso horário local do seu dispositivo e não são convertidos automaticamente, confira o resultado manualmente se estiver comparando horários entre uma mudança de horário de verão ou entre fusos diferentes.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de idade`,
      description: `— calcule uma idade exata em anos, meses e dias, além de quanto falta para o próximo aniversário.`,
    },
  },

  es: {
    whatItCalculates: {
      heading: `Qué calcula la calculadora`,
      body: `La calculadora tiene dos modos. En el modo Diferencia entre horas, calcula exactamente cuánto tiempo separa dos momentos, mostrado en días, horas, minutos y segundos (o en una sola unidad combinada, según el tamaño de la diferencia). En el modo Sumar/restar, parte de una fecha y hora dadas y suma o resta una cantidad de años, meses, días, horas, minutos o segundos, para obtener una nueva fecha y hora.`,
    },
    howItWorks: {
      heading: `Cómo funciona el cálculo`,
      leapYearLabel: `Años bisiestos:`,
      leapYearBody: `El cálculo tiene en cuenta los años bisiestos automáticamente. El 29 de febrero se incluye en los años bisiestos (cada cuatro años, salvo los años de siglo no divisibles entre 400), y esto afecta cuántos días hay entre dos fechas.`,
      monthLengthLabel: `Meses de distinta duración:`,
      monthLengthBody: `Cuando el resultado se muestra en años y meses, cada mes se cuenta según su número real de días (de 28 a 31), no como un promedio. Así, por ejemplo, "un año y dos meses" desde una fecha determinada cae exactamente en el mismo día y mes la próxima vez, en lugar de un número aproximado de días.`,
      timezoneLabel: `Zona horaria:`,
      timezoneBody: `Todas las horas se interpretan en tu zona horaria local, la configurada en tu dispositivo. La calculadora no convierte entre zonas horarias; si estás comparando horas de zonas distintas, tendrás que convertirlas tú mismo a una zona común antes de introducirlas.`,
    },
    useCases: {
      heading: `Usos habituales`,
      body: `La calculadora de tiempo se usa a menudo para saber cuántos días quedan hasta una fecha límite o un evento, cuánto ha durado un empleo, un contrato o una suscripción, o para calcular una fecha final exacta sumando un periodo determinado a una fecha de inicio, por ejemplo un preaviso de 90 días o un proyecto de 6 meses.`,
    },
    limitations: {
      heading: `Limitaciones`,
      body: `El cálculo se basa en el calendario gregoriano y no tiene en cuenta los segundos intercalares ni variaciones de calendarios locales (por ejemplo, otros sistemas de calendario). Como las horas se interpretan en la zona horaria local de tu dispositivo y no se convierten automáticamente, conviene comprobar el resultado manualmente si comparas horas entre un cambio de horario de verano o entre zonas distintas.`,
    },
    related: {
      heading: `Calculadora relacionada`,
      linkText: `Calculadora de edad`,
      description: `— calcula una edad exacta en años, meses y días, y cuánto falta para el próximo cumpleaños.`,
    },
  },

  de: {
    whatItCalculates: {
      heading: `Was der Rechner berechnet`,
      body: `Der Rechner hat zwei Modi. Im Modus Zeitdifferenz berechnet er genau, wie viel Zeit zwischen zwei Zeitpunkten liegt, angegeben in Tagen, Stunden, Minuten und Sekunden (oder in einer einzigen zusammengefassten Einheit, je nach Größe der Differenz). Im Modus Addieren/Subtrahieren geht er von einem angegebenen Datum und einer Uhrzeit aus und addiert oder subtrahiert eine Anzahl an Jahren, Monaten, Tagen, Stunden, Minuten oder Sekunden, um ein neues Datum und eine neue Uhrzeit zu berechnen.`,
    },
    howItWorks: {
      heading: `So funktioniert die Berechnung`,
      leapYearLabel: `Schaltjahre:`,
      leapYearBody: `Die Berechnung berücksichtigt Schaltjahre automatisch. Der 29. Februar wird in Schaltjahren einbezogen (alle vier Jahre, außer bei Jahrhundertjahren, die nicht durch 400 teilbar sind), was beeinflusst, wie viele Tage zwischen zwei Daten liegen.`,
      monthLengthLabel: `Unterschiedlich lange Monate:`,
      monthLengthBody: `Wenn das Ergebnis in Jahren und Monaten angezeigt wird, wird jeder Monat anhand seiner tatsächlichen Anzahl an Tagen (28 bis 31) gezählt, nicht als Durchschnitt. Dadurch landet zum Beispiel "ein Jahr und zwei Monate" ab einem bestimmten Datum beim nächsten Mal genau auf demselben Tag und Monat, statt auf einer ungefähren Anzahl an Tagen.`,
      timezoneLabel: `Zeitzone:`,
      timezoneBody: `Alle Zeiten werden in deiner lokalen Zeitzone interpretiert, also der, auf die dein Gerät eingestellt ist. Der Rechner rechnet nicht zwischen Zeitzonen um. Wenn du Zeitpunkte aus verschiedenen Zeitzonen vergleichst, musst du sie vorher selbst auf eine gemeinsame Zeitzone umrechnen.`,
    },
    useCases: {
      heading: `Häufige Anwendungen`,
      body: `Der Zeitrechner wird oft genutzt, um herauszufinden, wie viele Tage bis zu einer Frist oder einem Ereignis verbleiben, wie lange eine Anstellung, ein Vertrag oder ein Abo schon dauert, oder um ein genaues Enddatum zu berechnen, indem eine bestimmte Zeitspanne zu einem Startdatum addiert wird, zum Beispiel eine 90-tägige Kündigungsfrist oder ein 6-monatiges Projekt.`,
    },
    limitations: {
      heading: `Einschränkungen`,
      body: `Die Berechnung basiert auf dem gregorianischen Kalender und berücksichtigt keine Schaltsekunden oder lokale Kalenderabweichungen (zum Beispiel andere Kalendersysteme). Da die Zeiten in der lokalen Zeitzone deines Geräts interpretiert und nicht automatisch umgerechnet werden, solltest du das Ergebnis manuell prüfen, wenn du Zeitpunkte über eine Zeitumstellung hinweg oder zwischen verschiedenen Zeitzonen vergleichst.`,
    },
    related: {
      heading: `Verwandter Rechner`,
      linkText: `Altersrechner`,
      description: `— berechne ein exaktes Alter in Jahren, Monaten und Tagen sowie die verbleibende Zeit bis zum nächsten Geburtstag.`,
    },
  },

  ja: {
    whatItCalculates: {
      heading: `この計算機が計算する内容`,
      body: `この計算機には2つのモードがあります。「時間差」モードでは、2つの時点の間の正確な時間を、日・時間・分・秒(差の大きさによっては単一の単位)で計算します。「加算/減算」モードでは、指定した日時を起点に、年・月・日・時間・分・秒の数を加算または減算して、新しい日時を計算します。`,
    },
    howItWorks: {
      heading: `計算の仕組み`,
      leapYearLabel: `うるう年:`,
      leapYearBody: `計算はうるう年を自動的に考慮します。2月29日はうるう年(4年に一度、ただし400で割り切れない世紀年を除く)に含まれ、2つの日付の間の日数に影響します。`,
      monthLengthLabel: `月ごとの日数の違い:`,
      monthLengthBody: `結果が年と月で表示される場合、各月は平均値ではなく実際の日数(28〜31日)で数えられます。そのため、たとえばある日付から「1年と2ヶ月」は、おおよその日数ではなく、次に来るときにちょうど同じ日と月になります。`,
      timezoneLabel: `タイムゾーン:`,
      timezoneBody: `すべての時刻はお使いの端末に設定されているローカルのタイムゾーンで解釈されます。この計算機はタイムゾーン間の変換は行わないため、異なるタイムゾーンの時刻を比較する場合は、入力前にご自身で同じタイムゾーンに変換する必要があります。`,
    },
    useCases: {
      heading: `よくある使い方`,
      body: `この時間計算機は、締め切りやイベントまでの残り日数を調べたり、仕事・契約・サブスクリプションの継続期間を調べたり、開始日に一定の期間(たとえば90日間の予告期間や6ヶ月間のプロジェクト)を加算して正確な終了日を求めるためによく使われます。`,
    },
    limitations: {
      heading: `制限事項`,
      body: `この計算はグレゴリオ暦に基づいており、うるう秒や他の暦法など、地域独自の暦の違いは考慮されていません。時刻はお使いの端末のローカルタイムゾーンで解釈され、自動的には変換されないため、サマータイムの切り替えをまたぐ場合や異なるタイムゾーンを比較する場合は、結果を手動で確認することをおすすめします。`,
    },
    related: {
      heading: `関連する計算機`,
      linkText: `年齢計算機`,
      description: `— 年・月・日単位の正確な年齢と、次の誕生日までの日数を計算します。`,
    },
  },

  zh: {
    whatItCalculates: {
      heading: `计算器可以计算什么`,
      body: `该计算器有两种模式。在"时间差"模式下,它会精确计算两个时间点之间相隔多久,以天、小时、分钟和秒显示(根据差值大小,也可能只显示单一的合并单位)。在"加/减"模式下,它会以指定的日期和时间为起点,加上或减去若干年、月、日、小时、分钟或秒,从而算出一个新的日期和时间。`,
    },
    howItWorks: {
      heading: `计算原理`,
      leapYearLabel: `闰年:`,
      leapYearBody: `计算会自动考虑闰年。2月29日包含在闰年中(每四年一次,但不能被400整除的世纪年除外),这会影响两个日期之间的天数。`,
      monthLengthLabel: `月份长度不同:`,
      monthLengthBody: `当结果以年和月显示时,每个月都是按实际天数(28到31天)计算的,而不是按平均值计算。这意味着,例如从某个日期起的"一年零两个月",下次会正好落在相同的日期和月份,而不是一个大概的天数。`,
      timezoneLabel: `时区:`,
      timezoneBody: `所有时间都按你设备设置的本地时区来解读。计算器不会在不同时区之间进行转换;如果你要比较不同时区的时间,需要自己先把它们换算到同一个时区再输入。`,
    },
    useCases: {
      heading: `常见用途`,
      body: `时间计算器常用于计算距离某个截止日期或事件还有多少天、某份工作、合同或订阅已经持续了多久,或者通过在起始日期上加上一段固定时长来算出确切的结束日期,例如90天的通知期或为期6个月的项目。`,
    },
    limitations: {
      heading: `局限性`,
      body: `该计算基于公历,不考虑闰秒或其他历法体系等本地差异。由于时间是按你设备的本地时区解读的,并不会自动转换,如果你要比较跨夏令时或不同时区的时间,建议手动核对结果。`,
    },
    related: {
      heading: `相关计算器`,
      linkText: `年龄计算器`,
      description: `— 计算以年、月、日为单位的精确年龄,以及距离下一个生日还有多久。`,
    },
  },

  ko: {
    whatItCalculates: {
      heading: `이 계산기가 계산하는 것`,
      body: `이 계산기에는 두 가지 모드가 있습니다. '시간 차이' 모드에서는 두 시점 사이의 정확한 시간을 일, 시간, 분, 초 단위로 계산합니다(차이의 크기에 따라 하나의 단위로 합쳐서 표시되기도 합니다). '더하기/빼기' 모드에서는 지정한 날짜와 시간을 기준으로 연, 월, 일, 시간, 분, 초를 더하거나 빼서 새로운 날짜와 시간을 계산합니다.`,
    },
    howItWorks: {
      heading: `계산 방식`,
      leapYearLabel: `윤년:`,
      leapYearBody: `계산은 윤년을 자동으로 반영합니다. 2월 29일은 윤년(4년마다, 단 400으로 나누어떨어지지 않는 세기년은 제외)에 포함되며, 이는 두 날짜 사이의 일수에 영향을 줍니다.`,
      monthLengthLabel: `월마다 다른 길이:`,
      monthLengthBody: `결과가 연과 월로 표시될 때, 각 달은 평균이 아니라 실제 일수(28~31일)를 기준으로 계산됩니다. 그래서 예를 들어 특정 날짜로부터 '1년 2개월'은 대략적인 일수가 아니라, 다음에 정확히 같은 날짜와 달에 도달하게 됩니다.`,
      timezoneLabel: `시간대:`,
      timezoneBody: `모든 시간은 기기에 설정된 현지 시간대를 기준으로 해석됩니다. 이 계산기는 시간대 간 변환을 하지 않으므로, 서로 다른 시간대의 시간을 비교하려면 입력 전에 직접 동일한 시간대로 변환해야 합니다.`,
    },
    useCases: {
      heading: `일반적인 활용 사례`,
      body: `시간 계산기는 마감일이나 이벤트까지 남은 일수를 확인하거나, 직장, 계약, 구독이 지속된 기간을 계산하거나, 시작일에 특정 기간(예: 90일 통지 기간이나 6개월짜리 프로젝트)을 더해 정확한 종료일을 구하는 데 자주 사용됩니다.`,
    },
    limitations: {
      heading: `제한 사항`,
      body: `이 계산은 그레고리력을 기준으로 하며, 윤초나 다른 달력 체계 같은 지역별 차이는 고려하지 않습니다. 시간은 기기의 현지 시간대를 기준으로 해석되고 자동으로 변환되지 않으므로, 일광 절약 시간 전환이나 서로 다른 시간대 사이의 시간을 비교할 때는 결과를 직접 확인하는 것이 좋습니다.`,
    },
    related: {
      heading: `관련 계산기`,
      linkText: `나이 계산기`,
      description: `— 연, 월, 일 단위의 정확한 나이와 다음 생일까지 남은 기간을 계산합니다.`,
    },
  },

  hi: {
    whatItCalculates: {
      heading: `यह कैलकुलेटर क्या गणना करता है`,
      body: `इस कैलकुलेटर में दो मोड हैं। 'समय अंतर' मोड में, यह दो समय बिंदुओं के बीच का सटीक अंतर दिनों, घंटों, मिनटों और सेकंडों में (या अंतर के आकार के अनुसार एक ही संयुक्त इकाई में) दिखाता है। 'जोड़ें/घटाएं' मोड में, यह किसी दी गई तारीख और समय से शुरू होकर वर्षों, महीनों, दिनों, घंटों, मिनटों या सेकंडों की संख्या जोड़ता या घटाता है, ताकि एक नई तारीख और समय निकाला जा सके।`,
    },
    howItWorks: {
      heading: `गणना कैसे काम करती है`,
      leapYearLabel: `लीप वर्ष:`,
      leapYearBody: `यह गणना लीप वर्षों को स्वतः ध्यान में रखती है। 29 फरवरी लीप वर्षों में शामिल होती है (हर चार साल में एक बार, सिवाय उन शताब्दी वर्षों के जो 400 से पूर्णतः विभाज्य नहीं होते), और यह दो तारीखों के बीच के दिनों की संख्या को प्रभावित करती है।`,
      monthLengthLabel: `अलग-अलग लंबाई के महीने:`,
      monthLengthBody: `जब परिणाम वर्षों और महीनों में दिखाया जाता है, तो हर महीने की गिनती उसके वास्तविक दिनों की संख्या (28 से 31) के आधार पर होती है, न कि औसत के आधार पर। इसका मतलब है कि, उदाहरण के लिए, किसी तारीख से 'एक साल और दो महीने' अगली बार ठीक उसी दिन और महीने पर पड़ता है, न कि दिनों की एक अनुमानित संख्या पर।`,
      timezoneLabel: `समय क्षेत्र:`,
      timezoneBody: `सभी समय आपके डिवाइस में सेट किए गए स्थानीय समय क्षेत्र के अनुसार समझे जाते हैं। यह कैलकुलेटर समय क्षेत्रों के बीच रूपांतरण नहीं करता; यदि आप अलग-अलग समय क्षेत्रों के समय की तुलना कर रहे हैं, तो आपको इन्हें दर्ज करने से पहले खुद एक ही समय क्षेत्र में बदलना होगा।`,
    },
    useCases: {
      heading: `सामान्य उपयोग`,
      body: `समय कैलकुलेटर का उपयोग अक्सर यह जानने के लिए किया जाता है कि किसी समय-सीमा या कार्यक्रम में कितने दिन शेष हैं, कोई नौकरी, अनुबंध या सदस्यता कितने समय से चल रही है, या किसी शुरुआती तारीख में एक निश्चित अवधि (जैसे 90 दिन की सूचना अवधि या 6 महीने की परियोजना) जोड़कर एक सटीक समाप्ति तिथि निकालने के लिए।`,
    },
    limitations: {
      heading: `सीमाएं`,
      body: `यह गणना ग्रेगोरियन कैलेंडर पर आधारित है और लीप सेकंड या स्थानीय कैलेंडर भिन्नताओं (जैसे अन्य कैलेंडर प्रणालियों) को ध्यान में नहीं रखती। चूंकि समय आपके डिवाइस के स्थानीय समय क्षेत्र में समझा जाता है और स्वतः रूपांतरित नहीं होता, इसलिए यदि आप डेलाइट सेविंग परिवर्तन के आर-पार या अलग-अलग समय क्षेत्रों के बीच समय की तुलना कर रहे हैं, तो परिणाम को स्वयं जांच लें।`,
    },
    related: {
      heading: `संबंधित कैलकुलेटर`,
      linkText: `आयु कैलकुलेटर`,
      description: `— वर्षों, महीनों और दिनों में सटीक आयु, साथ ही अगले जन्मदिन तक बचा समय जानें।`,
    },
  },

  id: {
    whatItCalculates: {
      heading: `Apa yang dihitung kalkulator ini`,
      body: `Kalkulator ini memiliki dua mode. Pada mode Selisih waktu, kalkulator menghitung secara tepat berapa lama jarak antara dua titik waktu, ditampilkan dalam hari, jam, menit, dan detik (atau dalam satu satuan gabungan, tergantung besarnya selisih). Pada mode Tambah/kurangi, kalkulator berangkat dari tanggal dan waktu tertentu lalu menambahkan atau mengurangkan sejumlah tahun, bulan, hari, jam, menit, atau detik, untuk menghasilkan tanggal dan waktu baru.`,
    },
    howItWorks: {
      heading: `Cara kerja perhitungan`,
      leapYearLabel: `Tahun kabisat:`,
      leapYearBody: `Perhitungan ini memperhitungkan tahun kabisat secara otomatis. Tanggal 29 Februari termasuk dalam tahun kabisat (setiap empat tahun sekali, kecuali tahun abad yang tidak habis dibagi 400), dan ini memengaruhi jumlah hari di antara dua tanggal.`,
      monthLengthLabel: `Bulan dengan panjang berbeda-beda:`,
      monthLengthBody: `Saat hasil ditampilkan dalam tahun dan bulan, setiap bulan dihitung berdasarkan jumlah hari sebenarnya (28 hingga 31), bukan rata-rata. Artinya, misalnya, "satu tahun dua bulan" dari suatu tanggal akan jatuh tepat pada hari dan bulan yang sama pada kesempatan berikutnya, bukan pada jumlah hari yang perkiraan.`,
      timezoneLabel: `Zona waktu:`,
      timezoneBody: `Semua waktu ditafsirkan dalam zona waktu lokal perangkatmu. Kalkulator ini tidak melakukan konversi antar zona waktu; jika kamu membandingkan waktu dari zona yang berbeda, kamu perlu mengonversinya sendiri ke zona waktu yang sama sebelum memasukkannya.`,
    },
    useCases: {
      heading: `Penggunaan umum`,
      body: `Kalkulator waktu sering digunakan untuk mengetahui berapa hari tersisa hingga suatu tenggat atau acara, berapa lama suatu pekerjaan, kontrak, atau langganan telah berlangsung, atau untuk menghitung tanggal akhir yang tepat dengan menambahkan jangka waktu tertentu ke tanggal mulai, misalnya masa pemberitahuan 90 hari atau proyek 6 bulan.`,
    },
    limitations: {
      heading: `Keterbatasan`,
      body: `Perhitungan ini didasarkan pada kalender Gregorian dan tidak memperhitungkan detik kabisat atau variasi kalender lokal (misalnya sistem kalender lain). Karena waktu ditafsirkan dalam zona waktu lokal perangkatmu dan tidak dikonversi secara otomatis, periksa hasilnya secara manual jika kamu membandingkan waktu yang melewati perubahan waktu musim panas atau antar zona waktu yang berbeda.`,
    },
    related: {
      heading: `Kalkulator terkait`,
      linkText: `Kalkulator usia`,
      description: `— hitung usia yang tepat dalam tahun, bulan, dan hari, serta berapa lama lagi hingga ulang tahun berikutnya.`,
    },
  },
};

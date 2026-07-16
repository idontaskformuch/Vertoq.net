export interface AboutContent {
  mission: { heading: string; body: string };
  howItWorks: { heading: string; body: string };
  languages: { heading: string; body: string };
  whyFree: { heading: string; body: string };
}

export const aboutContent: Record<string, AboutContent> = {
  sv: {
    mission: {
      heading: `Varför Vertoq finns`,
      body: `Vertoq byggdes för att lösa ett enkelt irritationsmoment: att behöva klicka igenom annonser, popup-fönster och skapa konton bara för att räkna ut ett BMI eller omvandla en måttenhet. Varje kalkylator här är byggd för att ge dig svaret snabbt, med tillräckligt med förklarande text runt omkring för att du ska förstå formeln, inte bara siffran.`,
    },
    howItWorks: {
      heading: `Hur det fungerar`,
      body: `Alla beräkningar sker direkt i din webbläsare, inget skickas till en server för att räkna ut ditt resultat. Det gör verktygen snabba och betyder att vi aldrig ser vad du faktiskt matar in i kalkylatorerna. Du behöver inget konto, ingen app att ladda ner, bara sidan du redan är på.`,
    },
    languages: {
      heading: `Byggt för fler språk än engelska`,
      body: `Vertoq finns på 10 språk, inte som maskinöversatt engelska med en språkväljare på toppen, utan med formler, tabeller och förklaringar skrivna för att fungera naturligt på varje språk. Innehållet uppdateras och granskas per språk, inte bara en gång vid lansering.`,
    },
    whyFree: {
      heading: `Varför siten är gratis`,
      body: `Vertoq finansieras av annonser, inte av användardata som säljs vidare. Vi samlar inte in personlig information för att visa annonser, se vår integritetspolicy för exakt vilka cookies som används och när.`,
    },
  },

  en: {
    mission: {
      heading: `Why Vertoq exists`,
      body: `Vertoq was built to solve a simple frustration: having to click through ads, pop-ups, and account creation just to work out a BMI or convert a unit of measurement. Every calculator here is built to give you the answer quickly, with enough explanatory text around it that you understand the formula, not just the number.`,
    },
    howItWorks: {
      heading: `How it works`,
      body: `All calculations happen directly in your browser, nothing is sent to a server to compute your result. That keeps the tools fast and means we never see what you actually enter into the calculators. No account needed, no app to download, just the page you're already on.`,
    },
    languages: {
      heading: `Built for more than just English`,
      body: `Vertoq is available in 10 languages, not as machine-translated English with a language picker bolted on top, but with formulas, tables, and explanations written to read naturally in each language. Content gets updated and reviewed per language, not just once at launch.`,
    },
    whyFree: {
      heading: `Why the site is free`,
      body: `Vertoq is funded by advertising, not by reselling user data. We don't collect personal information to show ads, see our privacy policy for exactly which cookies are used and when.`,
    },
  },

  pt: {
    mission: {
      heading: `Por que a Vertoq existe`,
      body: `A Vertoq foi criada para resolver uma frustração simples: ter que passar por anúncios, pop-ups e criação de conta só para calcular um IMC ou converter uma unidade de medida. Cada calculadora aqui é feita para te dar a resposta rapidamente, com texto explicativo suficiente ao redor para você entender a fórmula, não só o número.`,
    },
    howItWorks: {
      heading: `Como funciona`,
      body: `Todos os cálculos acontecem diretamente no seu navegador, nada é enviado a um servidor para calcular seu resultado. Isso mantém as ferramentas rápidas e significa que nunca vemos o que você realmente digita nas calculadoras. Sem necessidade de conta, sem app para baixar, só a página em que você já está.`,
    },
    languages: {
      heading: `Feito para mais do que só inglês`,
      body: `A Vertoq está disponível em 10 idiomas, não como um inglês traduzido por máquina com um seletor de idioma colado em cima, mas com fórmulas, tabelas e explicações escritas para soar naturais em cada idioma. O conteúdo é atualizado e revisado por idioma, não só uma vez no lançamento.`,
    },
    whyFree: {
      heading: `Por que o site é gratuito`,
      body: `A Vertoq é financiada por publicidade, não pela revenda de dados de usuários. Não coletamos informações pessoais para exibir anúncios, veja nossa política de privacidade para saber exatamente quais cookies são usados e quando.`,
    },
  },

  es: {
    mission: {
      heading: `Por qué existe Vertoq`,
      body: `Vertoq se creó para resolver una frustración simple: tener que pasar por anuncios, ventanas emergentes y creación de cuentas solo para calcular un IMC o convertir una unidad de medida. Cada calculadora aquí está hecha para darte la respuesta rápidamente, con suficiente texto explicativo alrededor para que entiendas la fórmula, no solo el número.`,
    },
    howItWorks: {
      heading: `Cómo funciona`,
      body: `Todos los cálculos ocurren directamente en tu navegador, nada se envía a un servidor para calcular tu resultado. Eso mantiene las herramientas rápidas y significa que nunca vemos lo que realmente ingresas en las calculadoras. No necesitas cuenta, ni una app que descargar, solo la página en la que ya estás.`,
    },
    languages: {
      heading: `Hecho para más que solo inglés`,
      body: `Vertoq está disponible en 10 idiomas, no como inglés traducido por máquina con un selector de idioma pegado encima, sino con fórmulas, tablas y explicaciones escritas para sonar naturales en cada idioma. El contenido se actualiza y revisa por idioma, no solo una vez al lanzarlo.`,
    },
    whyFree: {
      heading: `Por qué el sitio es gratuito`,
      body: `Vertoq se financia con publicidad, no revendiendo datos de usuarios. No recopilamos información personal para mostrar anuncios, consulta nuestra política de privacidad para saber exactamente qué cookies se usan y cuándo.`,
    },
  },

  de: {
    mission: {
      heading: `Warum es Vertoq gibt`,
      body: `Vertoq wurde gebaut, um ein einfaches Ärgernis zu lösen: sich durch Werbung, Pop-ups und Kontoerstellung klicken zu müssen, nur um einen BMI zu berechnen oder eine Maßeinheit umzurechnen. Jeder Rechner hier ist so gebaut, dass er dir schnell die Antwort gibt, mit genug erklärendem Text drumherum, damit du die Formel verstehst, nicht nur die Zahl.`,
    },
    howItWorks: {
      heading: `Wie es funktioniert`,
      body: `Alle Berechnungen finden direkt in deinem Browser statt, nichts wird an einen Server gesendet, um dein Ergebnis zu berechnen. Das hält die Werkzeuge schnell und bedeutet, dass wir nie sehen, was du tatsächlich in die Rechner eingibst. Kein Konto nötig, keine App zum Herunterladen, nur die Seite, auf der du schon bist.`,
    },
    languages: {
      heading: `Gebaut für mehr als nur Englisch`,
      body: `Vertoq ist in 10 Sprachen verfügbar, nicht als maschinenübersetztes Englisch mit einem Sprachwähler obendrauf, sondern mit Formeln, Tabellen und Erklärungen, die in jeder Sprache natürlich klingen sollen. Inhalte werden pro Sprache aktualisiert und überprüft, nicht nur einmal beim Start.`,
    },
    whyFree: {
      heading: `Warum die Seite kostenlos ist`,
      body: `Vertoq finanziert sich durch Werbung, nicht durch den Weiterverkauf von Nutzerdaten. Wir sammeln keine persönlichen Informationen, um Werbung anzuzeigen, sieh dir unsere Datenschutzerklärung an, um genau zu erfahren, welche Cookies wann verwendet werden.`,
    },
  },

  ja: {
    mission: {
      heading: `Vertoqが存在する理由`,
      body: `Vertoqは、ちょっとした不満を解消するために作られました。BMIを計算したり単位を変換したりするだけなのに、広告やポップアップをクリックしたり、アカウントを作成したりする必要がある、という不満です。ここにある計算機はどれも、数字だけでなく計算式も理解できるよう十分な説明文を添えながら、素早く答えを出せるように作られています。`,
    },
    howItWorks: {
      heading: `仕組み`,
      body: `すべての計算はお使いのブラウザ内で直接行われ、結果を計算するために何かがサーバーに送信されることはありません。これによりツールは高速に動作し、あなたが実際に計算機に入力した内容を私たちが見ることは決してありません。アカウントは不要で、アプリのダウンロードも不要、今見ているこのページだけで完結します。`,
    },
    languages: {
      heading: `英語だけでなく、より多くの言語のために`,
      body: `Vertoqは10の言語で利用できます。機械翻訳された英語に言語選択メニューを付け足しただけではなく、各言語で自然に読めるように書かれた計算式、表、説明を用意しています。コンテンツは公開時に一度だけでなく、言語ごとに更新・見直しが行われています。`,
    },
    whyFree: {
      heading: `サイトが無料である理由`,
      body: `Vertoqは、ユーザーデータの転売ではなく広告によって運営されています。広告を表示するために個人情報を収集することはありません。どのクッキーがいつ使われるかについて詳しくは、プライバシーポリシーをご覧ください。`,
    },
  },

  zh: {
    mission: {
      heading: `Vertoq为什么存在`,
      body: `Vertoq的创建是为了解决一个简单却烦人的问题：只是想算个BMI或换算一个计量单位，却要先点掉广告、关闭弹窗、还得注册账户。这里的每个计算器都力求快速给出答案，同时配有足够的说明文字，让你理解背后的公式，而不只是看到一个数字。`,
    },
    howItWorks: {
      heading: `工作原理`,
      body: `所有计算都直接在你的浏览器中完成，不会把任何内容发送到服务器来计算结果。这让工具运行更快，也意味着我们永远不会看到你实际输入到计算器里的内容。不需要账户，不需要下载应用，只需要你现在所在的这个页面。`,
    },
    languages: {
      heading: `不只是为英语用户打造`,
      body: `Vertoq提供10种语言版本，不是在机器翻译的英文上简单加一个语言切换按钮，而是针对每种语言重新撰写公式、表格和说明，力求自然易读。内容会按语言分别更新和审核，而不是上线时翻译一次就不再管了。`,
    },
    whyFree: {
      heading: `为什么这个网站是免费的`,
      body: `Vertoq依靠广告收入运营，而不是转卖用户数据。我们不会为了展示广告而收集个人信息，具体使用哪些Cookie以及何时使用，请查看我们的隐私政策。`,
    },
  },

  ko: {
    mission: {
      heading: `Vertoq가 존재하는 이유`,
      body: `Vertoq는 간단한 불편함을 해결하기 위해 만들어졌습니다. BMI를 계산하거나 단위를 변환하려는 것뿐인데 광고와 팝업을 클릭해서 넘기고 계정까지 만들어야 하는 불편함 말입니다. 여기 있는 모든 계산기는 단순히 숫자만 보여주는 것이 아니라 공식을 이해할 수 있도록 충분한 설명과 함께 빠르게 답을 제공하도록 만들어졌습니다.`,
    },
    howItWorks: {
      heading: `작동 방식`,
      body: `모든 계산은 사용자의 브라우저에서 직접 이루어지며, 결과를 계산하기 위해 서버로 아무것도 전송되지 않습니다. 덕분에 도구가 빠르게 작동하며, 여러분이 계산기에 실제로 입력한 내용을 저희가 보는 일은 절대 없습니다. 계정도 필요 없고, 다운로드할 앱도 없이, 지금 보고 있는 이 페이지만으로 충분합니다.`,
    },
    languages: {
      heading: `영어만이 아니라 더 많은 언어를 위해`,
      body: `Vertoq는 10개 언어로 제공됩니다. 기계 번역된 영어 위에 언어 선택 메뉴만 붙인 것이 아니라, 각 언어에서 자연스럽게 읽히도록 공식, 표, 설명을 새로 작성했습니다. 콘텐츠는 출시 시점에 한 번만이 아니라 언어별로 지속적으로 업데이트되고 검토됩니다.`,
    },
    whyFree: {
      heading: `사이트가 무료인 이유`,
      body: `Vertoq는 사용자 데이터를 재판매하는 대신 광고로 운영 자금을 마련합니다. 광고를 표시하기 위해 개인정보를 수집하지 않으며, 어떤 쿠키가 언제 사용되는지 정확히 알고 싶다면 개인정보처리방침을 참고하세요.`,
    },
  },

  hi: {
    mission: {
      heading: `Vertoq क्यों बनाया गया`,
      body: `Vertoq एक आसान सी दिक्कत को हल करने के लिए बनाया गया था: सिर्फ़ BMI निकालने या किसी माप की इकाई बदलने के लिए विज्ञापनों, पॉप-अप और अकाउंट बनाने की झंझट से गुज़रना। यहां का हर कैलकुलेटर आपको जल्दी जवाब देने के लिए बनाया गया है, साथ ही इतना समझाने वाला टेक्स्ट भी दिया गया है कि आप सिर्फ़ आंकड़ा नहीं, बल्कि फ़ॉर्मूला भी समझ सकें।`,
    },
    howItWorks: {
      heading: `यह कैसे काम करता है`,
      body: `सारी गणना सीधे आपके ब्राउज़र में होती है, नतीजा निकालने के लिए कुछ भी सर्वर पर नहीं भेजा जाता। इससे टूल तेज़ रहते हैं और इसका मतलब है कि आप कैलकुलेटर में असल में क्या डालते हैं, यह हम कभी नहीं देखते। किसी अकाउंट की ज़रूरत नहीं, कोई ऐप डाउनलोड करने की ज़रूरत नहीं, बस वही पेज जिस पर आप पहले से हैं।`,
    },
    languages: {
      heading: `सिर्फ़ अंग्रेज़ी से कहीं आगे के लिए बनाया गया`,
      body: `Vertoq 10 भाषाओं में उपलब्ध है, ऊपर भाषा चुनने का विकल्प चिपकाई गई मशीन-अनुवादित अंग्रेज़ी के तौर पर नहीं, बल्कि हर भाषा में स्वाभाविक रूप से पढ़े जा सकें ऐसे फ़ॉर्मूलों, तालिकाओं और व्याख्याओं के साथ। कंटेंट को लॉन्च के समय सिर्फ़ एक बार नहीं, बल्कि हर भाषा के हिसाब से अपडेट और समीक्षा किया जाता है।`,
    },
    whyFree: {
      heading: `साइट मुफ़्त क्यों है`,
      body: `Vertoq विज्ञापनों से चलता है, यूज़र डेटा को आगे बेचकर नहीं। हम विज्ञापन दिखाने के लिए व्यक्तिगत जानकारी इकट्ठा नहीं करते, कौन सी कुकीज़ कब इस्तेमाल होती हैं यह ठीक-ठीक जानने के लिए हमारी गोपनीयता नीति देखें।`,
    },
  },

  id: {
    mission: {
      heading: `Mengapa Vertoq ada`,
      body: `Vertoq dibuat untuk menyelesaikan gangguan sederhana: harus mengklik iklan, pop-up, dan membuat akun hanya untuk menghitung BMI atau mengonversi satuan ukuran. Setiap kalkulator di sini dibuat untuk memberimu jawaban dengan cepat, dengan teks penjelasan yang cukup di sekitarnya agar kamu memahami rumusnya, bukan hanya angkanya.`,
    },
    howItWorks: {
      heading: `Cara kerjanya`,
      body: `Semua perhitungan terjadi langsung di browser kamu, tidak ada yang dikirim ke server untuk menghitung hasilmu. Itu membuat alat-alat ini tetap cepat dan berarti kami tidak pernah melihat apa yang sebenarnya kamu masukkan ke dalam kalkulator. Tidak perlu akun, tidak perlu aplikasi untuk diunduh, cukup halaman yang sedang kamu buka ini.`,
    },
    languages: {
      heading: `Dibuat untuk lebih dari sekadar bahasa Inggris`,
      body: `Vertoq tersedia dalam 10 bahasa, bukan sebagai bahasa Inggris hasil terjemahan mesin dengan pemilih bahasa yang ditempel di atasnya, tetapi dengan rumus, tabel, dan penjelasan yang ditulis agar terasa alami di setiap bahasa. Konten diperbarui dan ditinjau per bahasa, bukan hanya sekali saat peluncuran.`,
    },
    whyFree: {
      heading: `Mengapa situs ini gratis`,
      body: `Vertoq didanai oleh iklan, bukan dengan menjual kembali data pengguna. Kami tidak mengumpulkan informasi pribadi untuk menampilkan iklan, lihat kebijakan privasi kami untuk mengetahui persis cookie apa yang digunakan dan kapan.`,
    },
  },
};

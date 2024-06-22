import { CurrencyCode, GroupName, LocaleCode, QuestionSlug } from "~/types";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: LocaleCode.USEnglish,
  messages: {
    [LocaleCode.USEnglish]: {
      landing: {
        featuredApplications: {
          title: "Featured Applications",
          caption:
            "A featured set of applications for the TI-84 Plus CE calculator.",
          tabs: {
            pageSize: "Page Size",
          },
        },
        groupLink: {
          tooltipText: "{size} {label} Applications",
        },
        overview: {
          title: "Learn Faster",
          caption: "A better workflow",
          description:
            "Leverage Python scripts in your calculator to solve problems, double check work, and learn faster.",
          tested: {
            title: "Tested",
            description: "Unit Test coverage with open source visibility",
          },
          lean: {
            title: "Lean",
            description: "Small downloaded file sizes with no dependencies",
          },
          comprehensive: {
            title: "Comprehensive",
            description:
              "The largest archive of Python scripts for the TI-84 Plus CE",
          },
        },
        info: {
          highlight: {
            applications: "Highlight",
            fields: "Fields of Mathematics",
            users: "of Users",
            applicationsTooltip: "Over {value} Applications in the Library",
            fieldsTooltip:
              "The Applications Span at Least {value} Fields of Mathematics",
            usersTooltip:
              "{value}'s of people are using the applications right now!",
          },
          faqTitle: "Frequently Asked Questions",
          faqQuestions: {
            [QuestionSlug.HowToUsePythonApplications]:
              "How do I use the Python applications with my TI-84 Plus CE calculator?",
            [QuestionSlug.SizeLimitPythonApplications]:
              "Is there a size limit to the Python applications?",
            [QuestionSlug.DependenciesPythonApplications]:
              "Is it possible to use Python package dependencies in the applications?",
            [QuestionSlug.UploadApplications]:
              "How many applications can I upload onto my computer?",
            [QuestionSlug.UseApplicationsInClass]:
              "Am I allowed to use these applications in class?",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "How are you able to verify the accuracy of the Python applications?",
          },
          faqAnswers: {
            [QuestionSlug.HowToUsePythonApplications]:
              "Using Python applications with your TI-84 Plus CE is straightforward. First, ensure your calculator is updated with the latest operating system that supports Python. Then, download the Python scripts from our website, transfer them to your calculator using TI Connect CE software, and follow the instructions provided with each script.",
            [QuestionSlug.SizeLimitPythonApplications]:
              "Yes, there is a size limit imposed by the calculator's memory. However, our Python applications are optimized to be compact while delivering powerful functionality. Each script's size is indicated on our website for transparency.",
            [QuestionSlug.DependenciesPythonApplications]:
              "Due to the calculator's limited environment, Python applications for the TI-84 Plus typically do not support external dependencies like traditional Python packages. However, our scripts are self-contained and designed to operate independently on the calculator.",
            [QuestionSlug.UploadApplications]:
              "You can upload multiple Python applications to your calculator as long as they fit within the available memory. We recommend managing your applications based on your calculator's storage capacity to ensure optimal performance.",
            [QuestionSlug.UseApplicationsInClass]:
              "Generally, the use of calculator applications in class depends on your school's policies. Our Python scripts are educational tools designed to aid in learning pre-calculus, trigonometry, and calculus. Check with your teacher or school administration for specific guidelines on calculator use during class.",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "Ensuring accuracy is paramount to us. Our Python applications undergo rigorous testing and verification by experienced mathematics educators and software developers. We also encourage user feedback to continuously improve and refine our scripts.",
          },
        },
        donate: {
          title1: "Help grow the library.",
          title2: "Share your insights.",
          caption:
            "Donate today or access the Github repository to contribute to the library.",
          donate: "Donate",
          repository: "Repository",
        },
        contact: {
          title: "Get Connected",
          caption:
            "Have questions or suggestions? Enter your email and be updated with information about releases and projects!",
          email: "Email",
          highlight: {
            openSource: {
              title: "Open Source",
              caption: "Contribute to the open source repository.",
            },
            requests: {
              title: "Feature Requests",
              caption: "Offer requests for applications or features.",
            },
          },
          form: {
            send: "Send",
          },
        },
      },
      group: {
        calculus: "Calculus",
        trigonometry: "Trigonometry",
        preCalculus: "Pre Calculus",
      },
      footer: {
        copyRight: "Copyright © {year} - All right reserved by",
      },
      hero: {
        blurb: "Understand how your TI-84 can serve you better",
        title: "Improving the Scientific Calculator Experience",
        subTitle:
          "The largest and most developer-friendly collection of continuously growing, open-source, and tested and verified Python applications for your TI-84.",
      },
      navigation: {
        applications: "Applications",
        info: "Info",
        donate: "Donate",
        compiler: "Compiler",
      },
      donate: {
        title: "Donate",
        caption: "Help support the development of these applications.",
        secondary: {
          title: "Supporting Developers",
          caption:
            "Support for the time and effort attended towards these projects is forever appreciated. It facilitates more open work with the aim of benefiting everyone.",
        },
        content: {
          title: "Discover the Why",
          future: "Enable Future Projects",
          speed: "Speed Up Development",
          visibility: "Enhance Project Visibility",
          openSource: "Support Open Source Development",
        },
        chooseYourDonation: "Choose your donation",
        donate: "Donate",
        policyText:
          "Refunds are not available except in circumstances granted.",
        createDonation: "Create Donation",
        grateful: "We are grateful for your support.",
        privacy: "No personal information is collected during donations.",
      },
      error: {
        pageNotFound: "Page Not Found",
        pageNotFoundDescription:
          "Sorry, we couldn’t find the page you’re looking for.",
        goBackHome: "Go back home",
      },
      currencyTexts: {
        [CurrencyCode.USD]: "US Dollar",
        [CurrencyCode.EUR]: "Euro",
        [CurrencyCode.JPY]: "Japanese Yen",
        [CurrencyCode.GBP]: "British Pound Sterling",
        [CurrencyCode.AUD]: "Australian Dollar",
        [CurrencyCode.CAD]: "Canadian Dollar",
        [CurrencyCode.CHF]: "Swiss Franc",
        [CurrencyCode.CNY]: "Chinese Yuan",
        [CurrencyCode.SEK]: "Swedish Krona",
        [CurrencyCode.NZD]: "New Zealand Dollar",
        [CurrencyCode.KRW]: "South Korean Won",
        [CurrencyCode.SGD]: "Singapore Dollar",
        [CurrencyCode.NOK]: "Norwegian Krone",
        [CurrencyCode.MXN]: "Mexican Peso",
        [CurrencyCode.INR]: "Indian Rupee",
        [CurrencyCode.RUB]: "Russian Ruble",
        [CurrencyCode.ZAR]: "South African Rand",
        [CurrencyCode.TRY]: "Turkish Lira",
        [CurrencyCode.BRL]: "Brazilian Real",
      },
      localeTexts: {
        [LocaleCode.USEnglish]: "English (United States)",
        [LocaleCode.ESSpanish]: "Spanish (Spain)",
        [LocaleCode.FRFrench]: "French (France)",
        [LocaleCode.DEGerman]: "German (Germany)",
        [LocaleCode.CNChinese]: "Chinese (Simplified, China)",
        [LocaleCode.JPJapanese]: "Japanese (Japan)",
        [LocaleCode.RURussian]: "Russian (Russia)",
        [LocaleCode.BRPortuguese]: "Portuguese (Brazil)",
      },
      seeMore: "See More",
      getApplication: "Get Application",
      readMore: "Read more",
      getStarted: "Get started",
      learnMore: "Learn more",
      all: "All",
      createDownload: "Create Download",
      category: "Category",
      description: "Description",
      testCoverage: "Test Coverage",
      files: "Files",
      showing: "Showing",
      to: "to",
      of: "of",
      results: "results",
      views: "{count} views",
      downloads: "{count} downloads",
      created: "Created {date}",
      ratings: "{count} ratings",
      share: "Share",
      github: "Github",
      groupNames: {
        [GroupName.Calculus]: "Calculus",
        [GroupName.Trigonometry]: "Trigonometry",
        [GroupName.PreCalculus]: "Pre Calculus",
      },
      application: {
        info: {
          applicationInformation: "Application Information",
          documentationCaption: "Documentation for {name} application.",
        },
      },
    },
    [LocaleCode.FRFrench]: {
      landing: {
        featuredApplications: {
          title: "Applications en vedette",
          caption:
            "Un ensemble d'applications en vedette pour la calculatrice TI-84 Plus CE.",
          tabs: {
            pageSize: "Taille de la page",
          },
        },
        groupLink: {
          tooltipText: "{size} Applications {label}",
        },
        overview: {
          title: "Apprenez plus vite",
          caption: "Un meilleur flux de travail",
          description:
            "Utilisez des scripts Python dans votre calculatrice pour résoudre des problèmes, vérifier des travaux et apprendre plus rapidement.",
          tested: {
            title: "Testé",
            description:
              "Couverture des tests unitaires avec visibilité open source",
          },
          lean: {
            title: "Lean",
            description:
              "Petites tailles de fichiers téléchargés sans dépendances",
          },
          comprehensive: {
            title: "Complet",
            description:
              "La plus grande archive de scripts Python pour la TI-84 Plus CE",
          },
        },
        info: {
          highlight: {
            applications: "Surligner",
            fields: "Champs des mathématiques",
            users: "d'utilisateurs",
            applicationsTooltip:
              "Plus de {value} Applications dans la bibliothèque",
            fieldsTooltip:
              "Les applications couvrent au moins {value} champs des mathématiques",
            usersTooltip:
              "{value} de personnes utilisent les applications en ce moment !",
          },
          faqTitle: "Questions fréquemment posées",
          faqQuestions: {
            [QuestionSlug.HowToUsePythonApplications]:
              "Comment utiliser les applications Python avec ma calculatrice TI-84 Plus CE ?",
            [QuestionSlug.SizeLimitPythonApplications]:
              "Y a-t-il une limite de taille pour les applications Python ?",
            [QuestionSlug.DependenciesPythonApplications]:
              "Est-il possible d'utiliser des dépendances de paquets Python dans les applications ?",
            [QuestionSlug.UploadApplications]:
              "Combien d'applications puis-je télécharger sur mon ordinateur ?",
            [QuestionSlug.UseApplicationsInClass]:
              "Puis-je utiliser ces applications en classe ?",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "Comment pouvez-vous vérifier l'exactitude des applications Python ?",
          },
          faqAnswers: {
            [QuestionSlug.HowToUsePythonApplications]:
              "Utiliser des applications Python avec votre TI-84 Plus CE est simple. Tout d'abord, assurez-vous que votre calculatrice est mise à jour avec le dernier système d'exploitation prenant en charge Python. Ensuite, téléchargez les scripts Python depuis notre site web, transférez-les dans votre calculatrice à l'aide du logiciel TI Connect CE, et suivez les instructions fournies avec chaque script.",
            [QuestionSlug.SizeLimitPythonApplications]:
              "Oui, il y a une limite de taille imposée par la mémoire de la calculatrice. Cependant, nos applications Python sont optimisées pour être compactes tout en offrant des fonctionnalités puissantes. La taille de chaque script est indiquée sur notre site web pour plus de transparence.",
            [QuestionSlug.DependenciesPythonApplications]:
              "En raison de l'environnement limité de la calculatrice, les applications Python pour la TI-84 Plus ne prennent généralement pas en charge les dépendances externes comme les paquets Python traditionnels. Cependant, nos scripts sont autonomes et conçus pour fonctionner indépendamment sur la calculatrice.",
            [QuestionSlug.UploadApplications]:
              "Vous pouvez télécharger plusieurs applications Python sur votre calculatrice tant qu'elles tiennent dans la mémoire disponible. Nous vous recommandons de gérer vos applications en fonction de la capacité de stockage de votre calculatrice pour assurer des performances optimales.",
            [QuestionSlug.UseApplicationsInClass]:
              "En général, l'utilisation des applications de calculatrice en classe dépend des politiques de votre école. Nos scripts Python sont des outils éducatifs conçus pour aider à apprendre la pré-calcul, la trigonométrie et le calcul. Vérifiez avec votre professeur ou l'administration de votre école les directives spécifiques sur l'utilisation de la calculatrice en classe.",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "Assurer l'exactitude est primordial pour nous. Nos applications Python sont soumises à des tests et des vérifications rigoureuses par des éducateurs en mathématiques expérimentés et des développeurs de logiciels. Nous encourageons également les retours des utilisateurs pour améliorer et affiner continuellement nos scripts.",
          },
        },
        donate: {
          title1: "Aidez à développer la bibliothèque.",
          title2: "Partagez vos idées.",
          caption:
            "Faites un don aujourd'hui ou accédez au dépôt Github pour contribuer à la bibliothèque.",
          donate: "Faire un don",
          repository: "Dépôt",
        },
        contact: {
          title: "Restez connecté",
          caption:
            "Vous avez des questions ou des suggestions ? Entrez votre email et soyez informé des nouvelles versions et projets !",
          email: "Email",
          highlight: {
            openSource: {
              title: "Open Source",
              caption: "Contribuez au dépôt open source.",
            },
            requests: {
              title: "Demandes de fonctionnalités",
              caption:
                "Proposez des demandes d'applications ou de fonctionnalités.",
            },
          },
          form: {
            send: "Envoyer",
          },
        },
      },
      group: {
        calculus: "Calcul",
        trigonometry: "Trigonométrie",
        preCalculus: "Pré Calcul",
      },
      footer: {
        copyRight: "Copyright © {year} - Tous droits réservés par",
      },
      hero: {
        blurb: "Comprenez comment votre TI-84 peut mieux vous servir",
        title: "TI PY",
        subTitle:
          "Collections d'applications Python testées et vérifiées pour votre TI-84.",
      },
      navigation: {
        applications: "Applications",
        info: "Infos",
        donate: "Faire un don",
        compiler: "Compilateur",
      },
      donate: {
        title: "Faire un don",
        caption: "Aidez à soutenir le développement de ces applications.",
        secondary: {
          title: "Soutenir les développeurs",
          caption:
            "Le soutien pour le temps et les efforts consacrés à ces projets est toujours apprécié. Cela facilite un travail plus ouvert dans le but de bénéficier à tout le monde.",
        },
        content: {
          title: "Découvrez pourquoi",
          future: "Permettre des projets futurs",
          speed: "Accélérer le développement",
          visibility: "Améliorer la visibilité du projet",
          openSource: "Soutenir le développement open source",
        },
        chooseYourDonation: "Choisissez votre don",
        donate: "Faire un don",
        policyText:
          "Les remboursements ne sont pas disponibles sauf dans des circonstances accordées.",
        createDonation: "Créer un don",
        grateful: "Nous sommes reconnaissants pour votre soutien.",
        privacy:
          "Aucune information personnelle n'est collectée pendant les dons.",
      },
      currencyTexts: {
        [CurrencyCode.USD]: "Dollar américain",
        [CurrencyCode.EUR]: "Euro",
        [CurrencyCode.JPY]: "Yen japonais",
        [CurrencyCode.GBP]: "Livre sterling",
        [CurrencyCode.AUD]: "Dollar australien",
        [CurrencyCode.CAD]: "Dollar canadien",
        [CurrencyCode.CHF]: "Franc suisse",
        [CurrencyCode.CNY]: "Yuan chinois",
        [CurrencyCode.SEK]: "Couronne suédoise",
        [CurrencyCode.NZD]: "Dollar néo-zélandais",
        [CurrencyCode.KRW]: "Won sud-coréen",
        [CurrencyCode.SGD]: "Dollar de Singapour",
        [CurrencyCode.NOK]: "Couronne norvégienne",
        [CurrencyCode.MXN]: "Peso mexicain",
        [CurrencyCode.INR]: "Roupie indienne",
        [CurrencyCode.RUB]: "Rouble russe",
        [CurrencyCode.ZAR]: "Rand sud-africain",
        [CurrencyCode.TRY]: "Livre turque",
        [CurrencyCode.BRL]: "Réal brésilien",
      },
      localeTexts: {
        [LocaleCode.USEnglish]: "Anglais (États-Unis)",
        [LocaleCode.ESSpanish]: "Espagnol (Espagne)",
        [LocaleCode.FRFrench]: "Français (France)",
        [LocaleCode.DEGerman]: "Allemand (Allemagne)",
        [LocaleCode.CNChinese]: "Chinois (simplifié, Chine)",
        [LocaleCode.JPJapanese]: "Japonais (Japon)",
        [LocaleCode.RURussian]: "Russe (Russie)",
        [LocaleCode.BRPortuguese]: "Portugais (Brésil)",
      },
      seeMore: "Voir plus",
      getApplication: "Obtenir l'application",
      readMore: "Lire la suite",
      getStarted: "Commencer",
      learnMore: "En savoir plus",
      all: "Tout",
      createDownload: "Créer un téléchargement",
      category: "Catégorie",
      description: "Description",
      testCoverage: "Couverture des tests",
      files: "Fichiers",
      showing: "Affichage de",
      to: "à",
      of: "de",
      results: "résultats",
      views: "{count} vues",
      downloads: "{count} téléchargements",
      created: "Créé {date}",
      ratings: "{count} évaluations",
      share: "Partager",
      github: "Github",
      groupNames: {
        [GroupName.Calculus]: "Calcul",
        [GroupName.Trigonometry]: "Trigonométrie",
        [GroupName.PreCalculus]: "Pré Calcul",
      },
      application: {
        info: {
          applicationInformation: "Informations sur l'application",
          documentationCaption: "Documentation pour l'application {name}.",
        },
      },
    },
    [LocaleCode.RURussian]: {
      landing: {
        featuredApplications: {
          title: "Рекомендуемые приложения",
          caption:
            "Рекомендуемый набор приложений для калькулятора TI-84 Plus CE.",
          tabs: {
            pageSize: "Размер страницы",
          },
        },
        groupLink: {
          tooltipText: "{size} {label} Приложения",
        },
        overview: {
          title: "Учитесь быстрее",
          caption: "Лучший рабочий процесс",
          description:
            "Используйте Python-скрипты в вашем калькуляторе для решения задач, проверки работы и ускорения обучения.",
          tested: {
            title: "Тестировано",
            description:
              "Покрытие модульными тестами с открытым исходным кодом",
          },
          lean: {
            title: "Легкость",
            description: "Малый размер загружаемых файлов без зависимостей",
          },
          comprehensive: {
            title: "Всеобъемлющий",
            description: "Крупнейший архив Python-скриптов для TI-84 Plus CE",
          },
        },
        info: {
          highlight: {
            applications: "Выделить",
            fields: "Области математики",
            users: "пользователей",
            applicationsTooltip: "Более {value} приложений в библиотеке",
            fieldsTooltip:
              "Приложения охватывают как минимум {value} областей математики",
            usersTooltip: "{value} людей используют приложения прямо сейчас!",
          },
          faqTitle: "Часто задаваемые вопросы",
          faqQuestions: {
            [QuestionSlug.HowToUsePythonApplications]:
              "Как использовать Python-приложения с моим калькулятором TI-84 Plus CE?",
            [QuestionSlug.SizeLimitPythonApplications]:
              "Есть ли ограничение по размеру для Python-приложений?",
            [QuestionSlug.DependenciesPythonApplications]:
              "Можно ли использовать зависимости пакетов Python в приложениях?",
            [QuestionSlug.UploadApplications]:
              "Сколько приложений я могу загрузить на свой компьютер?",
            [QuestionSlug.UseApplicationsInClass]:
              "Могу ли я использовать эти приложения в классе?",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "Как вы проверяете точность Python-приложений?",
          },
          faqAnswers: {
            [QuestionSlug.HowToUsePythonApplications]:
              "Использовать Python-приложения с вашим TI-84 Plus CE просто. Сначала убедитесь, что ваш калькулятор обновлен до последней версии операционной системы, поддерживающей Python. Затем загрузите Python-скрипты с нашего сайта, перенесите их на калькулятор с помощью программы TI Connect CE и следуйте инструкциям, приведенным с каждым скриптом.",
            [QuestionSlug.SizeLimitPythonApplications]:
              "Да, есть ограничение по размеру, налагаемое памятью калькулятора. Однако наши Python-приложения оптимизированы, чтобы быть компактными, но мощными. Размер каждого скрипта указан на нашем сайте для большей прозрачности.",
            [QuestionSlug.DependenciesPythonApplications]:
              "Из-за ограниченного окружения калькулятора, Python-приложения для TI-84 Plus обычно не поддерживают внешние зависимости, такие как традиционные пакеты Python. Однако наши скрипты автономны и предназначены для самостоятельной работы на калькуляторе.",
            [QuestionSlug.UploadApplications]:
              "Вы можете загрузить несколько Python-приложений на ваш калькулятор, если они умещаются в доступной памяти. Мы рекомендуем управлять вашими приложениями в зависимости от емкости памяти вашего калькулятора для обеспечения оптимальной производительности.",
            [QuestionSlug.UseApplicationsInClass]:
              "Вообще, использование приложений на калькуляторе в классе зависит от политики вашей школы. Наши Python-скрипты являются образовательными инструментами, предназначенными для помощи в изучении предвычислений, тригонометрии и вычислений. Проверьте с вашим учителем или администрацией школы конкретные руководства по использованию калькуляторов в классе.",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "Для нас важно обеспечить точность. Наши Python-приложения проходят тщательное тестирование и проверку опытными преподавателями математики и разработчиками программного обеспечения. Мы также поощряем обратную связь от пользователей для непрерывного улучшения и совершенствования наших скриптов.",
          },
        },
        donate: {
          title1: "Помогите развивать библиотеку.",
          title2: "Поделитесь своими идеями.",
          caption:
            "Сделайте пожертвование сегодня или посетите репозиторий Github, чтобы внести свой вклад в библиотеку.",
          donate: "Пожертвовать",
          repository: "Репозиторий",
        },
        contact: {
          title: "Свяжитесь с нами",
          caption:
            "Есть вопросы или предложения? Введите свою электронную почту, чтобы получать информацию о новых выпусках и проектах!",
          email: "Электронная почта",
          highlight: {
            openSource: {
              title: "Открытый исходный код",
              caption: "Внесите вклад в репозиторий с открытым исходным кодом.",
            },
            requests: {
              title: "Запросы функций",
              caption: "Предлагайте запросы на приложения или функции.",
            },
          },
          form: {
            send: "Отправить",
          },
        },
      },
      group: {
        calculus: "Вычисления",
        trigonometry: "Тригонометрия",
        preCalculus: "Предвычисления",
      },
      footer: {
        copyRight: "Авторские права © {year} - Все права защищены",
      },
      hero: {
        blurb: "Поймите, как ваш TI-84 может лучше служить вам",
        title: "TI PY",
        subTitle:
          "Коллекции протестированных и проверенных Python-приложений для вашего TI-84.",
      },
      navigation: {
        applications: "Приложения",
        info: "Информация",
        donate: "Пожертвовать",
        compiler: "Компилятор",
      },
      donate: {
        title: "Пожертвовать",
        caption: "Помогите поддержать разработку этих приложений.",
        secondary: {
          title: "Поддержка разработчиков",
          caption:
            "Поддержка за время и усилия, вложенные в эти проекты, всегда ценится. Это способствует более открытому труду с целью пользы для всех.",
        },
        content: {
          title: "Узнайте почему",
          future: "Поддержка будущих проектов",
          speed: "Ускорение разработки",
          visibility: "Улучшение видимости проекта",
          openSource: "Поддержка разработки с открытым исходным кодом",
        },
        chooseYourDonation: "Выберите ваше пожертвование",
        donate: "Пожертвовать",
        policyText:
          "Возврат средств не предусмотрен, за исключением особых обстоятельств.",
        createDonation: "Создать пожертвование",
        grateful: "Мы благодарны за вашу поддержку.",
        privacy: "Персональная информация не собирается при пожертвованиях.",
      },
      currencyTexts: {
        [CurrencyCode.USD]: "Доллар США",
        [CurrencyCode.EUR]: "Евро",
        [CurrencyCode.JPY]: "Японская иена",
        [CurrencyCode.GBP]: "Британский фунт стерлингов",
        [CurrencyCode.AUD]: "Австралийский доллар",
        [CurrencyCode.CAD]: "Канадский доллар",
        [CurrencyCode.CHF]: "Швейцарский франк",
        [CurrencyCode.CNY]: "Китайский юань",
        [CurrencyCode.SEK]: "Шведская крона",
        [CurrencyCode.NZD]: "Новозеландский доллар",
        [CurrencyCode.KRW]: "Южнокорейская вона",
        [CurrencyCode.SGD]: "Сингапурский доллар",
        [CurrencyCode.NOK]: "Норвежская крона",
        [CurrencyCode.MXN]: "Мексиканское песо",
        [CurrencyCode.INR]: "Индийская рупия",
        [CurrencyCode.RUB]: "Российский рубль",
        [CurrencyCode.ZAR]: "Южноафриканский рэнд",
        [CurrencyCode.TRY]: "Турецкая лира",
        [CurrencyCode.BRL]: "Бразильский реал",
      },
      localeTexts: {
        [LocaleCode.USEnglish]: "Английский (США)",
        [LocaleCode.ESSpanish]: "Испанский (Испания)",
        [LocaleCode.FRFrench]: "Французский (Франция)",
        [LocaleCode.DEGerman]: "Немецкий (Германия)",
        [LocaleCode.CNChinese]: "Китайский (упрощенный, Китай)",
        [LocaleCode.JPJapanese]: "Японский (Япония)",
        [LocaleCode.RURussian]: "Русский (Россия)",
        [LocaleCode.BRPortuguese]: "Португальский (Бразилия)",
      },
      seeMore: "Узнать больше",
      getApplication: "Получить приложение",
      readMore: "Читать далее",
      getStarted: "Начать",
      learnMore: "Узнать больше",
      all: "Все",
      createDownload: "Создать загрузку",
      category: "Категория",
      description: "Описание",
      testCoverage: "Покрытие тестов",
      files: "Файлы",
      showing: "Показаны",
      to: "до",
      of: "из",
      results: "результатов",
      views: "{count} просмотров",
      downloads: "{count} загрузок",
      created: "Создано {date}",
      ratings: "{count} оценок",
      share: "Поделиться",
      github: "Github",
      groupNames: {
        [GroupName.Calculus]: "Вычисления",
        [GroupName.Trigonometry]: "Тригонометрия",
        [GroupName.PreCalculus]: "Предвычисления",
      },
      application: {
        info: {
          applicationInformation: "Информация о приложении",
          documentationCaption: "Документация для приложения {name}.",
        },
      },
    },
    [LocaleCode.ESSpanish]: {
      landing: {
        featuredApplications: {
          title: "Aplicaciones destacadas",
          caption:
            "Un conjunto de aplicaciones destacadas para la calculadora TI-84 Plus CE.",
          tabs: {
            pageSize: "Tamaño de página",
          },
        },
        groupLink: {
          tooltipText: "{size} {label} Aplicaciones",
        },
        overview: {
          title: "Aprende más rápido",
          caption: "Un mejor flujo de trabajo",
          description:
            "Aprovecha los scripts de Python en tu calculadora para resolver problemas, verificar el trabajo y aprender más rápido.",
          tested: {
            title: "Probado",
            description:
              "Cobertura de pruebas unitarias con visibilidad de código abierto",
          },
          lean: {
            title: "Ligero",
            description:
              "Pequeños tamaños de archivo descargados sin dependencias",
          },
          comprehensive: {
            title: "Integral",
            description:
              "El archivo más grande de scripts de Python para la TI-84 Plus CE",
          },
        },
        info: {
          highlight: {
            applications: "Destacar",
            fields: "Campos de las Matemáticas",
            users: "de Usuarios",
            applicationsTooltip: "Más de {value} Aplicaciones en la Biblioteca",
            fieldsTooltip:
              "Las Aplicaciones Abarcan al Menos {value} Campos de las Matemáticas",
            usersTooltip:
              "¡Miles de personas están usando las aplicaciones ahora mismo!",
          },
          faqTitle: "Preguntas Frecuentes",
          faqQuestions: {
            [QuestionSlug.HowToUsePythonApplications]:
              "¿Cómo uso las aplicaciones de Python con mi calculadora TI-84 Plus CE?",
            [QuestionSlug.SizeLimitPythonApplications]:
              "¿Hay un límite de tamaño para las aplicaciones de Python?",
            [QuestionSlug.DependenciesPythonApplications]:
              "¿Es posible usar dependencias de paquetes de Python en las aplicaciones?",
            [QuestionSlug.UploadApplications]:
              "¿Cuántas aplicaciones puedo cargar en mi calculadora?",
            [QuestionSlug.UseApplicationsInClass]:
              "¿Puedo usar estas aplicaciones en clase?",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "¿Cómo pueden verificar la precisión de las aplicaciones de Python?",
          },
          faqAnswers: {
            [QuestionSlug.HowToUsePythonApplications]:
              "Usar aplicaciones de Python con tu TI-84 Plus CE es sencillo. Primero, asegúrate de que tu calculadora esté actualizada con el último sistema operativo que soporte Python. Luego, descarga los scripts de Python desde nuestro sitio web, transfiérelos a tu calculadora usando el software TI Connect CE y sigue las instrucciones proporcionadas con cada script.",
            [QuestionSlug.SizeLimitPythonApplications]:
              "Sí, hay un límite de tamaño impuesto por la memoria de la calculadora. Sin embargo, nuestras aplicaciones de Python están optimizadas para ser compactas y ofrecer funcionalidad poderosa. El tamaño de cada script se indica en nuestro sitio web para mayor transparencia.",
            [QuestionSlug.DependenciesPythonApplications]:
              "Debido al entorno limitado de la calculadora, las aplicaciones de Python para la TI-84 Plus generalmente no soportan dependencias externas como los paquetes de Python tradicionales. Sin embargo, nuestros scripts son autónomos y están diseñados para operar independientemente en la calculadora.",
            [QuestionSlug.UploadApplications]:
              "Puedes cargar múltiples aplicaciones de Python en tu calculadora siempre que quepan en la memoria disponible. Recomendamos gestionar tus aplicaciones según la capacidad de almacenamiento de tu calculadora para asegurar un rendimiento óptimo.",
            [QuestionSlug.UseApplicationsInClass]:
              "En general, el uso de aplicaciones de calculadora en clase depende de las políticas de tu escuela. Nuestros scripts de Python son herramientas educativas diseñadas para ayudar en el aprendizaje de precálculo, trigonometría y cálculo. Consulta con tu profesor o la administración de tu escuela para obtener directrices específicas sobre el uso de calculadoras en clase.",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "Asegurar la precisión es primordial para nosotros. Nuestras aplicaciones de Python pasan por pruebas rigurosas y verificación por parte de educadores de matemáticas experimentados y desarrolladores de software. También alentamos la retroalimentación de los usuarios para mejorar y refinar continuamente nuestros scripts.",
          },
        },
        donate: {
          title1: "Ayuda a crecer la biblioteca.",
          title2: "Comparte tus ideas.",
          caption:
            "Dona hoy o accede al repositorio de Github para contribuir a la biblioteca.",
          donate: "Donar",
          repository: "Repositorio",
        },
        contact: {
          title: "Conéctate",
          caption:
            "¿Tienes preguntas o sugerencias? Ingresa tu correo electrónico y recibe información sobre lanzamientos y proyectos!",
          email: "Correo electrónico",
          highlight: {
            openSource: {
              title: "Código abierto",
              caption: "Contribuye al repositorio de código abierto.",
            },
            requests: {
              title: "Solicitudes de características",
              caption:
                "Ofrece solicitudes para aplicaciones o características.",
            },
          },
          form: {
            send: "Enviar",
          },
        },
      },
      group: {
        calculus: "Cálculo",
        trigonometry: "Trigonometría",
        preCalculus: "Precálculo",
      },
      footer: {
        copyRight:
          "Derechos de autor © {year} - Todos los derechos reservados por",
      },
      hero: {
        blurb: "Entiende cómo tu TI-84 puede servirte mejor",
        title: "TI PY",
        subTitle:
          "Colecciones de aplicaciones Python probadas y verificadas para tu TI-84.",
      },
      navigation: {
        applications: "Aplicaciones",
        info: "Información",
        donate: "Donar",
        compiler: "Compilador",
      },
      donate: {
        title: "Donar",
        caption: "Ayuda a apoyar el desarrollo de estas aplicaciones.",
        secondary: {
          title: "Apoyando a los desarrolladores",
          caption:
            "El apoyo por el tiempo y el esfuerzo dedicados a estos proyectos siempre es apreciado. Facilita un trabajo más abierto con el objetivo de beneficiar a todos.",
        },
        content: {
          title: "Descubre el por qué",
          future: "Habilitar proyectos futuros",
          speed: "Acelerar el desarrollo",
          visibility: "Mejorar la visibilidad del proyecto",
          openSource: "Apoyar el desarrollo de código abierto",
        },
        chooseYourDonation: "Elige tu donación",
        donate: "Donar",
        policyText:
          "No se realizan reembolsos excepto en circunstancias concedidas.",
        createDonation: "Crear donación",
        grateful: "Estamos agradecidos por tu apoyo.",
        privacy: "No se recopila información personal durante las donaciones.",
      },
      currencyTexts: {
        [CurrencyCode.USD]: "Dólar estadounidense",
        [CurrencyCode.EUR]: "Euro",
        [CurrencyCode.JPY]: "Yen japonés",
        [CurrencyCode.GBP]: "Libra esterlina",
        [CurrencyCode.AUD]: "Dólar australiano",
        [CurrencyCode.CAD]: "Dólar canadiense",
        [CurrencyCode.CHF]: "Franco suizo",
        [CurrencyCode.CNY]: "Yuan chino",
        [CurrencyCode.SEK]: "Corona sueca",
        [CurrencyCode.NZD]: "Dólar neozelandés",
        [CurrencyCode.KRW]: "Won surcoreano",
        [CurrencyCode.SGD]: "Dólar de Singapur",
        [CurrencyCode.NOK]: "Corona noruega",
        [CurrencyCode.MXN]: "Peso mexicano",
        [CurrencyCode.INR]: "Rupia india",
        [CurrencyCode.RUB]: "Rublo ruso",
        [CurrencyCode.ZAR]: "Rand sudafricano",
        [CurrencyCode.TRY]: "Lira turca",
        [CurrencyCode.BRL]: "Real brasileño",
      },
      localeTexts: {
        [LocaleCode.USEnglish]: "Inglés (Estados Unidos)",
        [LocaleCode.ESSpanish]: "Español (España)",
        [LocaleCode.FRFrench]: "Francés (Francia)",
        [LocaleCode.DEGerman]: "Alemán (Alemania)",
        [LocaleCode.CNChinese]: "Chino (simplificado, China)",
        [LocaleCode.JPJapanese]: "Japonés (Japón)",
        [LocaleCode.RURussian]: "Ruso (Rusia)",
        [LocaleCode.BRPortuguese]: "Portugués (Brasil)",
      },
      seeMore: "Ver más",
      getApplication: "Obtener aplicación",
      readMore: "Leer más",
      getStarted: "Empezar",
      learnMore: "Aprender más",
      all: "Todo",
      createDownload: "Crear descarga",
      category: "Categoría",
      description: "Descripción",
      testCoverage: "Cobertura de pruebas",
      files: "Archivos",
      showing: "Mostrando",
      to: "a",
      of: "de",
      results: "resultados",
      views: "{count} vistas",
      downloads: "{count} descargas",
      created: "Creado {date}",
      ratings: "{count} calificaciones",
      share: "Compartir",
      github: "Github",
      groupNames: {
        [GroupName.Calculus]: "Cálculo",
        [GroupName.Trigonometry]: "Trigonometría",
        [GroupName.PreCalculus]: "Precálculo",
      },
      application: {
        info: {
          applicationInformation: "Información de la aplicación",
          documentationCaption: "Documentación para la aplicación {name}.",
        },
      },
    },
    [LocaleCode.DEGerman]: {
      landing: {
        featuredApplications: {
          title: "Empfohlene Anwendungen",
          caption:
            "Ein empfohlenes Set von Anwendungen für den TI-84 Plus CE Taschenrechner.",
          tabs: {
            pageSize: "Seitengröße",
          },
        },
        groupLink: {
          tooltipText: "{size} {label} Anwendungen",
        },
        overview: {
          title: "Schneller lernen",
          caption: "Ein besserer Arbeitsablauf",
          description:
            "Nutzen Sie Python-Skripte in Ihrem Taschenrechner, um Probleme zu lösen, Arbeit zu überprüfen und schneller zu lernen.",
          tested: {
            title: "Getestet",
            description:
              "Abdeckung von Unit-Tests mit Open-Source-Sichtbarkeit",
          },
          lean: {
            title: "Schlank",
            description:
              "Kleine heruntergeladene Dateigrößen ohne Abhängigkeiten",
          },
          comprehensive: {
            title: "Umfassend",
            description:
              "Das größte Archiv von Python-Skripten für den TI-84 Plus CE",
          },
        },
        info: {
          highlight: {
            applications: "Hervorheben",
            fields: "Fachgebiete der Mathematik",
            users: "von Benutzern",
            applicationsTooltip: "Über {value} Anwendungen in der Bibliothek",
            fieldsTooltip:
              "Die Anwendungen decken mindestens {value} Fachgebiete der Mathematik ab",
            usersTooltip:
              "{value} von Menschen nutzen die Anwendungen gerade jetzt!",
          },
          faqTitle: "Häufig gestellte Fragen",
          faqQuestions: {
            [QuestionSlug.HowToUsePythonApplications]:
              "Wie verwende ich die Python-Anwendungen mit meinem TI-84 Plus CE Taschenrechner?",
            [QuestionSlug.SizeLimitPythonApplications]:
              "Gibt es eine Größenbeschränkung für die Python-Anwendungen?",
            [QuestionSlug.DependenciesPythonApplications]:
              "Ist es möglich, Python-Paketabhängigkeiten in den Anwendungen zu verwenden?",
            [QuestionSlug.UploadApplications]:
              "Wie viele Anwendungen kann ich auf meinen Rechner hochladen?",
            [QuestionSlug.UseApplicationsInClass]:
              "Darf ich diese Anwendungen im Unterricht verwenden?",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "Wie können Sie die Genauigkeit der Python-Anwendungen überprüfen?",
          },
          faqAnswers: {
            [QuestionSlug.HowToUsePythonApplications]:
              "Die Verwendung von Python-Anwendungen mit Ihrem TI-84 Plus CE ist einfach. Stellen Sie zunächst sicher, dass Ihr Taschenrechner mit dem neuesten Betriebssystem aktualisiert ist, das Python unterstützt. Laden Sie dann die Python-Skripte von unserer Website herunter, übertragen Sie sie mit der TI Connect CE Software auf Ihren Taschenrechner und befolgen Sie die mit jedem Skript bereitgestellten Anweisungen.",
            [QuestionSlug.SizeLimitPythonApplications]:
              "Ja, es gibt eine Größenbeschränkung, die durch den Speicher des Taschenrechners vorgegeben ist. Unsere Python-Anwendungen sind jedoch optimiert, um kompakt zu sein und dennoch leistungsstarke Funktionen zu bieten. Die Größe jedes Skripts ist auf unserer Website zur Transparenz angegeben.",
            [QuestionSlug.DependenciesPythonApplications]:
              "Aufgrund der eingeschränkten Umgebung des Taschenrechners unterstützen Python-Anwendungen für den TI-84 Plus normalerweise keine externen Abhängigkeiten wie traditionelle Python-Pakete. Unsere Skripte sind jedoch eigenständig und so konzipiert, dass sie unabhängig auf dem Taschenrechner funktionieren.",
            [QuestionSlug.UploadApplications]:
              "Sie können mehrere Python-Anwendungen auf Ihren Taschenrechner hochladen, solange sie in den verfügbaren Speicher passen. Wir empfehlen, Ihre Anwendungen basierend auf der Speicherkapazität Ihres Taschenrechners zu verwalten, um eine optimale Leistung zu gewährleisten.",
            [QuestionSlug.UseApplicationsInClass]:
              "In der Regel hängt die Verwendung von Taschenrechneranwendungen im Unterricht von den Richtlinien Ihrer Schule ab. Unsere Python-Skripte sind Bildungstools, die das Lernen von Vorkalkül, Trigonometrie und Kalkül unterstützen sollen. Fragen Sie Ihren Lehrer oder die Schulleitung nach spezifischen Richtlinien zur Verwendung von Taschenrechnern im Unterricht.",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "Die Gewährleistung der Genauigkeit ist für uns von größter Bedeutung. Unsere Python-Anwendungen werden von erfahrenen Mathematiklehrern und Softwareentwicklern rigoros getestet und überprüft. Wir ermutigen auch das Feedback der Benutzer, um unsere Skripte kontinuierlich zu verbessern und zu verfeinern.",
          },
        },
        donate: {
          title1: "Helfen Sie, die Bibliothek zu erweitern.",
          title2: "Teilen Sie Ihre Erkenntnisse.",
          caption:
            "Spenden Sie noch heute oder greifen Sie auf das Github-Repository zu, um zur Bibliothek beizutragen.",
          donate: "Spenden",
          repository: "Repository",
        },
        contact: {
          title: "Bleiben Sie verbunden",
          caption:
            "Haben Sie Fragen oder Anregungen? Geben Sie Ihre E-Mail-Adresse ein und erhalten Sie Informationen zu Veröffentlichungen und Projekten!",
          email: "E-Mail",
          highlight: {
            openSource: {
              title: "Open Source",
              caption: "Tragen Sie zum Open-Source-Repository bei.",
            },
            requests: {
              title: "Funktionsanfragen",
              caption:
                "Bieten Sie Anfragen für Anwendungen oder Funktionen an.",
            },
          },
          form: {
            send: "Senden",
          },
        },
      },
      group: {
        calculus: "Kalkül",
        trigonometry: "Trigonometrie",
        preCalculus: "Vorkalkül",
      },
      footer: {
        copyRight: "Urheberrecht © {year} - Alle Rechte vorbehalten von",
      },
      hero: {
        blurb: "Verstehen Sie, wie Ihr TI-84 Ihnen besser dienen kann",
        title: "TI PY",
        subTitle:
          "Sammlungen getesteter und verifizierter Python-Anwendungen für Ihren TI-84.",
      },
      navigation: {
        applications: "Anwendungen",
        info: "Information",
        donate: "Spenden",
        compiler: "Compiler",
      },
      donate: {
        title: "Spenden",
        caption:
          "Helfen Sie, die Entwicklung dieser Anwendungen zu unterstützen.",
        secondary: {
          title: "Unterstützung der Entwickler",
          caption:
            "Die Unterstützung für die Zeit und die Bemühungen, die in diese Projekte investiert werden, wird immer geschätzt. Es erleichtert eine offenere Arbeit mit dem Ziel, allen zu nützen.",
        },
        content: {
          title: "Entdecken Sie das Warum",
          future: "Zukunftsprojekte ermöglichen",
          speed: "Entwicklung beschleunigen",
          visibility: "Sichtbarkeit des Projekts verbessern",
          openSource: "Open-Source-Entwicklung unterstützen",
        },
        chooseYourDonation: "Wählen Sie Ihre Spende",
        donate: "Spenden",
        policyText:
          "Rückerstattungen sind nur unter bestimmten Umständen möglich.",
        createDonation: "Spende erstellen",
        grateful: "Wir sind dankbar für Ihre Unterstützung.",
        privacy: "Bei Spenden werden keine persönlichen Daten gesammelt.",
      },
      currencyTexts: {
        [CurrencyCode.USD]: "US-Dollar",
        [CurrencyCode.EUR]: "Euro",
        [CurrencyCode.JPY]: "Japanischer Yen",
        [CurrencyCode.GBP]: "Britisches Pfund",
        [CurrencyCode.AUD]: "Australischer Dollar",
        [CurrencyCode.CAD]: "Kanadischer Dollar",
        [CurrencyCode.CHF]: "Schweizer Franken",
        [CurrencyCode.CNY]: "Chinesischer Yuan",
        [CurrencyCode.SEK]: "Schwedische Krone",
        [CurrencyCode.NZD]: "Neuseeländischer Dollar",
        [CurrencyCode.KRW]: "Südkoreanischer Won",
        [CurrencyCode.SGD]: "Singapur-Dollar",
        [CurrencyCode.NOK]: "Norwegische Krone",
        [CurrencyCode.MXN]: "Mexikanischer Peso",
        [CurrencyCode.INR]: "Indische Rupie",
        [CurrencyCode.RUB]: "Russischer Rubel",
        [CurrencyCode.ZAR]: "Südafrikanischer Rand",
        [CurrencyCode.TRY]: "Türkische Lira",
        [CurrencyCode.BRL]: "Brasilianischer Real",
      },
      localeTexts: {
        [LocaleCode.USEnglish]: "Englisch (Vereinigte Staaten)",
        [LocaleCode.ESSpanish]: "Spanisch (Spanien)",
        [LocaleCode.FRFrench]: "Französisch (Frankreich)",
        [LocaleCode.DEGerman]: "Deutsch (Deutschland)",
        [LocaleCode.CNChinese]: "Chinesisch (vereinfacht, China)",
        [LocaleCode.JPJapanese]: "Japanisch (Japan)",
        [LocaleCode.RURussian]: "Russisch (Russland)",
        [LocaleCode.BRPortuguese]: "Portugiesisch (Brasilien)",
      },
      seeMore: "Mehr sehen",
      getApplication: "Anwendung holen",
      readMore: "Mehr lesen",
      getStarted: "Loslegen",
      learnMore: "Mehr erfahren",
      all: "Alle",
      createDownload: "Download erstellen",
      category: "Kategorie",
      description: "Beschreibung",
      testCoverage: "Testabdeckung",
      files: "Dateien",
      showing: "Zeige",
      to: "bis",
      of: "von",
      results: "Ergebnisse",
      views: "{count} Ansichten",
      downloads: "{count} Downloads",
      created: "Erstellt {date}",
      ratings: "{count} Bewertungen",
      share: "Teilen",
      github: "Github",
      groupNames: {
        [GroupName.Calculus]: "Kalkül",
        [GroupName.Trigonometry]: "Trigonometrie",
        [GroupName.PreCalculus]: "Vorkalkül",
      },
      application: {
        info: {
          applicationInformation: "Anwendungsinformationen",
          documentationCaption: "Dokumentation für die {name} Anwendung.",
        },
      },
    },
    [LocaleCode.CNChinese]: {
      landing: {
        featuredApplications: {
          title: "推荐应用程序",
          caption: "为 TI-84 Plus CE 计算器推荐的一组应用程序。",
          tabs: {
            pageSize: "页面大小",
          },
        },
        groupLink: {
          tooltipText: "{size} {label} 应用程序",
        },
        overview: {
          title: "更快学习",
          caption: "更好的工作流程",
          description:
            "利用计算器中的 Python 脚本解决问题、检查作业并更快学习。",
          tested: {
            title: "已测试",
            description: "具有开源可见性的单元测试覆盖率",
          },
          lean: {
            title: "精简",
            description: "小文件大小，无依赖项",
          },
          comprehensive: {
            title: "全面",
            description: "TI-84 Plus CE 的最大 Python 脚本档案",
          },
        },
        info: {
          highlight: {
            applications: "突出",
            fields: "数学领域",
            users: "用户",
            applicationsTooltip: "库中超过 {value} 个应用程序",
            fieldsTooltip: "应用程序涵盖至少 {value} 个数学领域",
            usersTooltip: "{value} 的人们正在使用这些应用程序！",
          },
          faqTitle: "常见问题",
          faqQuestions: {
            [QuestionSlug.HowToUsePythonApplications]:
              "如何在 TI-84 Plus CE 计算器上使用 Python 应用程序？",
            [QuestionSlug.SizeLimitPythonApplications]:
              "Python 应用程序有大小限制吗？",
            [QuestionSlug.DependenciesPythonApplications]:
              "应用程序中可以使用 Python 包依赖吗？",
            [QuestionSlug.UploadApplications]:
              "可以上传多少个应用程序到我的计算器上？",
            [QuestionSlug.UseApplicationsInClass]:
              "可以在课堂上使用这些应用程序吗？",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "你们如何验证 Python 应用程序的准确性？",
          },
          faqAnswers: {
            [QuestionSlug.HowToUsePythonApplications]:
              "使用 TI-84 Plus CE 计算器的 Python 应用程序非常简单。首先，确保你的计算器已更新到支持 Python 的最新操作系统。然后，从我们的网站下载 Python 脚本，通过 TI Connect CE 软件将其传输到你的计算器，并按照每个脚本提供的说明操作。",
            [QuestionSlug.SizeLimitPythonApplications]:
              "是的，计算器内存对应用程序有大小限制。然而，我们的 Python 应用程序经过优化，既紧凑又强大。每个脚本的大小在我们的网站上都有标示，以便透明。",
            [QuestionSlug.DependenciesPythonApplications]:
              "由于计算器环境的限制，TI-84 Plus 的 Python 应用程序通常不支持外部依赖项如传统 Python 包。然而，我们的脚本是自包含的，设计为在计算器上独立运行。",
            [QuestionSlug.UploadApplications]:
              "你可以在计算器上上传多个 Python 应用程序，只要它们在可用内存范围内。我们建议根据计算器的存储容量管理你的应用程序，以确保最佳性能。",
            [QuestionSlug.UseApplicationsInClass]:
              "一般来说，在课堂上使用计算器应用程序取决于学校的政策。我们的 Python 脚本是教育工具，旨在帮助学习预备微积分、三角学和微积分。请咨询你的老师或学校管理部门，了解课堂上使用计算器的具体指南。",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "确保准确性对我们至关重要。我们的 Python 应用程序经过经验丰富的数学教育者和软件开发人员的严格测试和验证。我们也鼓励用户反馈，以不断改进和优化我们的脚本。",
          },
        },
        donate: {
          title1: "帮助扩展图书馆。",
          title2: "分享你的见解。",
          caption: "今天捐赠或访问 Github 仓库，为图书馆做出贡献。",
          donate: "捐赠",
          repository: "仓库",
        },
        contact: {
          title: "保持联系",
          caption:
            "有问题或建议？输入你的电子邮件，以获取有关版本和项目的信息更新！",
          email: "电子邮件",
          highlight: {
            openSource: {
              title: "开源",
              caption: "为开源仓库做出贡献。",
            },
            requests: {
              title: "功能请求",
              caption: "提供应用程序或功能请求。",
            },
          },
          form: {
            send: "发送",
          },
        },
      },
      group: {
        [GroupName.Calculus]: "微积分",
        [GroupName.Trigonometry]: "三角学",
        [GroupName.PreCalculus]: "预备微积分",
      },
      footer: {
        copyRight: "版权所有 © {year} - 保留所有权利",
      },
      hero: {
        blurb: "了解你的 TI-84 如何更好地为你服务",
        title: "TI PY",
        subTitle: "为你的 TI-84 收集的已测试和验证的 Python 应用程序。",
      },
      navigation: {
        applications: "应用程序",
        info: "信息",
        donate: "捐赠",
        compiler: "编译器",
      },
      donate: {
        title: "捐赠",
        caption: "帮助支持这些应用程序的开发。",
        secondary: {
          title: "支持开发者",
          caption:
            "对这些项目投入的时间和精力的支持将永远被感谢。这有助于进行更多开放的工作，以造福所有人。",
        },
        content: {
          title: "发现原因",
          future: "支持未来项目",
          speed: "加快开发速度",
          visibility: "提升项目可见性",
          openSource: "支持开源开发",
        },
        chooseYourDonation: "选择你的捐赠",
        donate: "捐赠",
        policyText: "除非在特殊情况下，不提供退款。",
        createDonation: "创建捐赠",
        grateful: "我们感谢你的支持。",
        privacy: "在捐赠过程中不收集任何个人信息。",
      },
      currencyTexts: {
        [CurrencyCode.USD]: "美元",
        [CurrencyCode.EUR]: "欧元",
        [CurrencyCode.JPY]: "日元",
        [CurrencyCode.GBP]: "英镑",
        [CurrencyCode.AUD]: "澳大利亚元",
        [CurrencyCode.CAD]: "加拿大元",
        [CurrencyCode.CHF]: "瑞士法郎",
        [CurrencyCode.CNY]: "人民币",
        [CurrencyCode.SEK]: "瑞典克朗",
        [CurrencyCode.NZD]: "新西兰元",
        [CurrencyCode.KRW]: "韩元",
        [CurrencyCode.SGD]: "新加坡元",
        [CurrencyCode.NOK]: "挪威克朗",
        [CurrencyCode.MXN]: "墨西哥比索",
        [CurrencyCode.INR]: "印度卢比",
        [CurrencyCode.RUB]: "俄罗斯卢布",
        [CurrencyCode.ZAR]: "南非兰特",
        [CurrencyCode.TRY]: "土耳其里拉",
        [CurrencyCode.BRL]: "巴西雷亚尔",
      },
      localeTexts: {
        [LocaleCode.USEnglish]: "英语（美国）",
        [LocaleCode.ESSpanish]: "西班牙语（西班牙）",
        [LocaleCode.FRFrench]: "法语（法国）",
        [LocaleCode.DEGerman]: "德语（德国）",
        [LocaleCode.CNChinese]: "中文（简体，中国）",
        [LocaleCode.JPJapanese]: "日语（日本）",
        [LocaleCode.RURussian]: "俄语（俄罗斯）",
        [LocaleCode.BRPortuguese]: "葡萄牙语（巴西）",
      },
      seeMore: "查看更多",
      getApplication: "获取应用程序",
      readMore: "阅读更多",
      getStarted: "开始",
      learnMore: "了解更多",
      all: "全部",
      createDownload: "创建下载",
      category: "类别",
      description: "描述",
      testCoverage: "测试覆盖率",
      files: "文件",
      showing: "显示",
      to: "到",
      of: "的",
      results: "结果",
      views: "{count} 查看",
      downloads: "{count} 下载",
      created: "创建于 {date}",
      ratings: "{count} 评分",
      share: "分享",
      github: "Github",
      groupNames: {
        [GroupName.Calculus]: "微积分",
        [GroupName.Trigonometry]: "三角学",
        [GroupName.PreCalculus]: "预备微积分",
      },
      application: {
        info: {
          applicationInformation: "应用程序信息",
          documentationCaption: "{name} 应用程序的文档。",
        },
      },
    },
    [LocaleCode.JPJapanese]: {
      landing: {
        featuredApplications: {
          title: "注目のアプリケーション",
          caption: "TI-84 Plus CE 電卓の注目アプリケーションセット。",
          tabs: {
            pageSize: "ページサイズ",
          },
        },
        groupLink: {
          tooltipText: "{size} {label} アプリケーション",
        },
        overview: {
          title: "より早く学ぶ",
          caption: "より良いワークフロー",
          description:
            "電卓内の Python スクリプトを利用して問題を解決し、作業を確認し、より早く学びましょう。",
          tested: {
            title: "テスト済み",
            description: "オープンソースの可視性を持つ単体テストのカバレッジ",
          },
          lean: {
            title: "軽量",
            description: "依存関係なしの小さなダウンロードファイルサイズ",
          },
          comprehensive: {
            title: "包括的",
            description: "TI-84 Plus CE の最大の Python スクリプトアーカイブ",
          },
        },
        info: {
          highlight: {
            applications: "ハイライト",
            fields: "数学の分野",
            users: "ユーザーの",
            applicationsTooltip:
              "ライブラリに {value} を超えるアプリケーション",
            fieldsTooltip:
              "アプリケーションは少なくとも {value} の数学の分野をカバーしています",
            usersTooltip:
              "{value} 人が今すぐアプリケーションを使用しています！",
          },
          faqTitle: "よくある質問",
          faqQuestions: {
            [QuestionSlug.HowToUsePythonApplications]:
              "TI-84 Plus CE 電卓で Python アプリケーションを使用するにはどうすればよいですか？",
            [QuestionSlug.SizeLimitPythonApplications]:
              "Python アプリケーションにサイズ制限はありますか？",
            [QuestionSlug.DependenciesPythonApplications]:
              "アプリケーションで Python パッケージの依存関係を使用できますか？",
            [QuestionSlug.UploadApplications]:
              "コンピューターに何個のアプリケーションをアップロードできますか？",
            [QuestionSlug.UseApplicationsInClass]:
              "これらのアプリケーションを授業で使用してもよいですか？",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "Python アプリケーションの正確性をどのように確認しますか？",
          },
          faqAnswers: {
            [QuestionSlug.HowToUsePythonApplications]:
              "TI-84 Plus CE 電卓で Python アプリケーションを使用するのは簡単です。まず、Python をサポートする最新のオペレーティングシステムに電卓を更新してください。その後、当社のウェブサイトから Python スクリプトをダウンロードし、TI Connect CE ソフトウェアを使用して電卓に転送し、各スクリプトに提供されている指示に従ってください。",
            [QuestionSlug.SizeLimitPythonApplications]:
              "はい、電卓のメモリにはサイズ制限があります。しかし、当社の Python アプリケーションはコンパクトでありながら強力な機能を提供するように最適化されています。各スクリプトのサイズは、透明性のために当社のウェブサイトに示されています。",
            [QuestionSlug.DependenciesPythonApplications]:
              "電卓の制限された環境のため、TI-84 Plus の Python アプリケーションは通常、従来の Python パッケージのような外部依存関係をサポートしていません。しかし、当社のスクリプトは自己完結型であり、電卓上で独立して動作するように設計されています。",
            [QuestionSlug.UploadApplications]:
              "利用可能なメモリに収まる限り、電卓に複数の Python アプリケーションをアップロードできます。最適なパフォーマンスを確保するために、電卓のストレージ容量に基づいてアプリケーションを管理することをお勧めします。",
            [QuestionSlug.UseApplicationsInClass]:
              "通常、授業での電卓アプリケーションの使用は学校の方針によります。当社の Python スクリプトは、プレカルキュラス、三角法、および微積分の学習を支援する教育ツールです。授業中の電卓の使用に関する具体的なガイドラインについては、教師または学校管理者に確認してください。",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "正確性の確保は私たちにとって非常に重要です。当社の Python アプリケーションは、経験豊富な数学教育者およびソフトウェア開発者によって厳格なテストと検証を受けています。また、ユーザーのフィードバックを奨励し、スクリプトを継続的に改善および洗練するよう努めています。",
          },
        },
        donate: {
          title1: "ライブラリの拡充を手助けしてください。",
          title2: "あなたの洞察を共有してください。",
          caption:
            "今日寄付するか、Github リポジトリにアクセスしてライブラリに貢献してください。",
          donate: "寄付",
          repository: "リポジトリ",
        },
        contact: {
          title: "つながる",
          caption:
            "質問や提案がありますか？メールアドレスを入力して、リリースやプロジェクトに関する情報を更新してください！",
          email: "メール",
          highlight: {
            openSource: {
              title: "オープンソース",
              caption: "オープンソースリポジトリに貢献してください。",
            },
            requests: {
              title: "機能リクエスト",
              caption: "アプリケーションや機能のリクエストを提供してください。",
            },
          },
          form: {
            send: "送信",
          },
        },
      },
      group: {
        [GroupName.Calculus]: "微積分",
        [GroupName.Trigonometry]: "三角法",
        [GroupName.PreCalculus]: "プレカルキュラス",
      },
      footer: {
        copyRight: "著作権 © {year} - すべての権利を保有",
      },
      hero: {
        blurb: "TI-84 がどのようによりよく機能するかを理解する",
        title: "TI PY",
        subTitle:
          "TI-84 のためにテストされ、検証された Python アプリケーションのコレクション。",
      },
      navigation: {
        applications: "アプリケーション",
        info: "情報",
        donate: "寄付",
        compiler: "コンパイラ",
      },
      donate: {
        title: "寄付",
        caption: "これらのアプリケーションの開発をサポートしてください。",
        secondary: {
          title: "開発者の支援",
          caption:
            "これらのプロジェクトに費やされた時間と努力への支援は常に感謝されます。それはすべての人に利益をもたらすためのよりオープンな作業を促進します。",
        },
        content: {
          title: "理由を見つける",
          future: "将来のプロジェクトをサポートする",
          speed: "開発のスピードを上げる",
          visibility: "プロジェクトの可視性を高める",
          openSource: "オープンソースの開発を支援する",
        },
        chooseYourDonation: "寄付を選択",
        donate: "寄付",
        policyText: "特定の状況を除いて、払い戻しはできません。",
        createDonation: "寄付を作成",
        grateful: "ご支援に感謝します。",
        privacy: "寄付中に個人情報は収集されません。",
      },
      currencyTexts: {
        [CurrencyCode.USD]: "米ドル",
        [CurrencyCode.EUR]: "ユーロ",
        [CurrencyCode.JPY]: "日本円",
        [CurrencyCode.GBP]: "イギリス・ポンド",
        [CurrencyCode.AUD]: "オーストラリア・ドル",
        [CurrencyCode.CAD]: "カナダ・ドル",
        [CurrencyCode.CHF]: "スイス・フラン",
        [CurrencyCode.CNY]: "中国人民元",
        [CurrencyCode.SEK]: "スウェーデン・クローナ",
        [CurrencyCode.NZD]: "ニュージーランド・ドル",
        [CurrencyCode.KRW]: "韓国ウォン",
        [CurrencyCode.SGD]: "シンガポール・ドル",
        [CurrencyCode.NOK]: "ノルウェー・クローネ",
        [CurrencyCode.MXN]: "メキシコ・ペソ",
        [CurrencyCode.INR]: "インド・ルピー",
        [CurrencyCode.RUB]: "ロシア・ルーブル",
        [CurrencyCode.ZAR]: "南アフリカ・ランド",
        [CurrencyCode.TRY]: "トルコ・リラ",
        [CurrencyCode.BRL]: "ブラジル・レアル",
      },
      localeTexts: {
        [LocaleCode.USEnglish]: "英語（アメリカ）",
        [LocaleCode.ESSpanish]: "スペイン語（スペイン）",
        [LocaleCode.FRFrench]: "フランス語（フランス）",
        [LocaleCode.DEGerman]: "ドイツ語（ドイツ）",
        [LocaleCode.CNChinese]: "中国語（簡体、中国）",
        [LocaleCode.JPJapanese]: "日本語（日本）",
        [LocaleCode.RURussian]: "ロシア語（ロシア）",
        [LocaleCode.BRPortuguese]: "ポルトガル語（ブラジル）",
      },
      seeMore: "もっと見る",
      getApplication: "アプリケーションを入手",
      readMore: "続きを読む",
      getStarted: "開始する",
      learnMore: "さらに詳しく",
      all: "すべて",
      createDownload: "ダウンロードを作成",
      category: "カテゴリー",
      description: "説明",
      testCoverage: "テストカバレッジ",
      files: "ファイル",
      showing: "表示",
      to: "に",
      of: "の",
      results: "結果",
      views: "{count} 回の表示",
      downloads: "{count} 回のダウンロード",
      created: "{date} に作成",
      ratings: "{count} の評価",
      share: "共有する",
      github: "Github",
      groupNames: {
        [GroupName.Calculus]: "微積分",
        [GroupName.Trigonometry]: "三角法",
        [GroupName.PreCalculus]: "プレカルキュラス",
      },
      application: {
        info: {
          applicationInformation: "アプリケーション情報",
          documentationCaption: "{name} アプリケーションのドキュメント。",
        },
      },
    },
    [LocaleCode.BRPortuguese]: {
      landing: {
        featuredApplications: {
          title: "Aplicativos em destaque",
          caption:
            "Um conjunto de aplicativos em destaque para a calculadora TI-84 Plus CE.",
          tabs: {
            pageSize: "Tamanho da página",
          },
        },
        groupLink: {
          tooltipText: "{size} Aplicativos {label}",
        },
        overview: {
          title: "Aprenda mais rápido",
          caption: "Um melhor fluxo de trabalho",
          description:
            "Utilize scripts Python na sua calculadora para resolver problemas, verificar trabalhos e aprender mais rápido.",
          tested: {
            title: "Testado",
            description:
              "Cobertura de testes unitários com visibilidade de código aberto",
          },
          lean: {
            title: "Leve",
            description:
              "Pequenos tamanhos de arquivo baixados sem dependências",
          },
          comprehensive: {
            title: "Abrangente",
            description:
              "O maior arquivo de scripts Python para a TI-84 Plus CE",
          },
        },
        info: {
          highlight: {
            applications: "Destaque",
            fields: "Campos da Matemática",
            users: "de Usuários",
            applicationsTooltip: "Mais de {value} Aplicativos na Biblioteca",
            fieldsTooltip:
              "Os aplicativos abrangem pelo menos {value} campos da Matemática",
            usersTooltip:
              "{value} de pessoas estão usando os aplicativos agora!",
          },
          faqTitle: "Perguntas Frequentes",
          faqQuestions: {
            [QuestionSlug.HowToUsePythonApplications]:
              "Como eu uso os aplicativos Python na minha calculadora TI-84 Plus CE?",
            [QuestionSlug.SizeLimitPythonApplications]:
              "Há um limite de tamanho para os aplicativos Python?",
            [QuestionSlug.DependenciesPythonApplications]:
              "É possível usar dependências de pacotes Python nos aplicativos?",
            [QuestionSlug.UploadApplications]:
              "Quantos aplicativos eu posso fazer upload no meu computador?",
            [QuestionSlug.UseApplicationsInClass]:
              "Posso usar esses aplicativos em sala de aula?",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "Como você pode verificar a precisão dos aplicativos Python?",
          },
          faqAnswers: {
            [QuestionSlug.HowToUsePythonApplications]:
              "Usar aplicativos Python na sua TI-84 Plus CE é simples. Primeiro, certifique-se de que sua calculadora está atualizada com o sistema operacional mais recente que suporta Python. Em seguida, baixe os scripts Python do nosso site, transfira-os para sua calculadora usando o software TI Connect CE e siga as instruções fornecidas com cada script.",
            [QuestionSlug.SizeLimitPythonApplications]:
              "Sim, há um limite de tamanho imposto pela memória da calculadora. No entanto, nossos aplicativos Python são otimizados para serem compactos, mas oferecem funcionalidades poderosas. O tamanho de cada script é indicado em nosso site para transparência.",
            [QuestionSlug.DependenciesPythonApplications]:
              "Devido ao ambiente limitado da calculadora, os aplicativos Python para a TI-84 Plus geralmente não suportam dependências externas como pacotes Python tradicionais. No entanto, nossos scripts são autossuficientes e projetados para operar de forma independente na calculadora.",
            [QuestionSlug.UploadApplications]:
              "Você pode fazer upload de vários aplicativos Python para sua calculadora, desde que eles caibam na memória disponível. Recomendamos gerenciar seus aplicativos com base na capacidade de armazenamento da sua calculadora para garantir um desempenho ideal.",
            [QuestionSlug.UseApplicationsInClass]:
              "Em geral, o uso de aplicativos de calculadora em sala de aula depende das políticas da sua escola. Nossos scripts Python são ferramentas educacionais projetadas para ajudar no aprendizado de pré-cálculo, trigonometria e cálculo. Verifique com seu professor ou administração escolar as diretrizes específicas sobre o uso da calculadora durante as aulas.",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "Garantir a precisão é fundamental para nós. Nossos aplicativos Python passam por testes rigorosos e verificação por educadores de matemática experientes e desenvolvedores de software. Também incentivamos o feedback dos usuários para melhorar continuamente e refinar nossos scripts.",
          },
        },
        donate: {
          title1: "Ajude a crescer a biblioteca.",
          title2: "Compartilhe suas ideias.",
          caption:
            "Doe hoje ou acesse o repositório do Github para contribuir com a biblioteca.",
          donate: "Doar",
          repository: "Repositório",
        },
        contact: {
          title: "Conecte-se",
          caption:
            "Tem perguntas ou sugestões? Insira seu e-mail e receba atualizações sobre lançamentos e projetos!",
          email: "E-mail",
          highlight: {
            openSource: {
              title: "Código Aberto",
              caption: "Contribua para o repositório de código aberto.",
            },
            requests: {
              title: "Solicitações de Funcionalidades",
              caption:
                "Ofereça solicitações de aplicativos ou funcionalidades.",
            },
          },
          form: {
            send: "Enviar",
          },
        },
      },
      group: {
        [GroupName.Calculus]: "Cálculo",
        [GroupName.Trigonometry]: "Trigonometria",
        [GroupName.PreCalculus]: "Pré-Cálculo",
      },
      footer: {
        copyRight:
          "Direitos autorais © {year} - Todos os direitos reservados por",
      },
      hero: {
        blurb: "Entenda como sua TI-84 pode te servir melhor",
        title: "TI PY",
        subTitle:
          "Coleções de aplicativos Python testados e verificados para sua TI-84.",
      },
      navigation: {
        applications: "Aplicativos",
        info: "Informações",
        donate: "Doar",
        compiler: "Compilador",
      },
      donate: {
        title: "Doar",
        caption: "Ajude a apoiar o desenvolvimento desses aplicativos.",
        secondary: {
          title: "Apoiando os Desenvolvedores",
          caption:
            "O apoio pelo tempo e esforço dedicados a esses projetos é sempre apreciado. Facilita um trabalho mais aberto com o objetivo de beneficiar a todos.",
        },
        content: {
          title: "Descubra o Porquê",
          future: "Permitir Projetos Futuros",
          speed: "Acelerar o Desenvolvimento",
          visibility: "Melhorar a Visibilidade do Projeto",
          openSource: "Apoiar o Desenvolvimento de Código Aberto",
        },
        chooseYourDonation: "Escolha sua doação",
        donate: "Doar",
        policyText:
          "Reembolsos não estão disponíveis exceto em circunstâncias concedidas.",
        createDonation: "Criar Doação",
        grateful: "Somos gratos pelo seu apoio.",
        privacy: "Nenhuma informação pessoal é coletada durante as doações.",
      },
      currencyTexts: {
        [CurrencyCode.USD]: "Dólar americano",
        [CurrencyCode.EUR]: "Euro",
        [CurrencyCode.JPY]: "Iene japonês",
        [CurrencyCode.GBP]: "Libra esterlina",
        [CurrencyCode.AUD]: "Dólar australiano",
        [CurrencyCode.CAD]: "Dólar canadense",
        [CurrencyCode.CHF]: "Franco suíço",
        [CurrencyCode.CNY]: "Yuan chinês",
        [CurrencyCode.SEK]: "Coroa sueca",
        [CurrencyCode.NZD]: "Dólar neozelandês",
        [CurrencyCode.KRW]: "Won sul-coreano",
        [CurrencyCode.SGD]: "Dólar de Singapura",
        [CurrencyCode.NOK]: "Coroa norueguesa",
        [CurrencyCode.MXN]: "Peso mexicano",
        [CurrencyCode.INR]: "Rupia indiana",
        [CurrencyCode.RUB]: "Rublo russo",
        [CurrencyCode.ZAR]: "Rand sul-africano",
        [CurrencyCode.TRY]: "Lira turca",
        [CurrencyCode.BRL]: "Real brasileiro",
      },
      localeTexts: {
        [LocaleCode.USEnglish]: "Inglês (Estados Unidos)",
        [LocaleCode.ESSpanish]: "Espanhol (Espanha)",
        [LocaleCode.FRFrench]: "Francês (França)",
        [LocaleCode.DEGerman]: "Alemão (Alemanha)",
        [LocaleCode.CNChinese]: "Chinês (simplificado, China)",
        [LocaleCode.JPJapanese]: "Japonês (Japão)",
        [LocaleCode.RURussian]: "Russo (Rússia)",
        [LocaleCode.BRPortuguese]: "Português (Brasil)",
      },
      seeMore: "Veja mais",
      getApplication: "Obter Aplicativo",
      readMore: "Leia mais",
      getStarted: "Começar",
      learnMore: "Saber mais",
      all: "Todos",
      createDownload: "Criar Download",
      category: "Categoria",
      description: "Descrição",
      testCoverage: "Cobertura de Testes",
      files: "Arquivos",
      showing: "Mostrando",
      to: "a",
      of: "de",
      results: "resultados",
      views: "{count} visualizações",
      downloads: "{count} downloads",
      created: "Criado {date}",
      ratings: "{count} avaliações",
      share: "Compartilhar",
      github: "Github",
      groupNames: {
        [GroupName.Calculus]: "Cálculo",
        [GroupName.Trigonometry]: "Trigonometria",
        [GroupName.PreCalculus]: "Pré-Cálculo",
      },
      application: {
        info: {
          applicationInformation: "Informações do Aplicativo",
          documentationCaption: "Documentação para o aplicativo {name}.",
        },
      },
    },
  },
}));

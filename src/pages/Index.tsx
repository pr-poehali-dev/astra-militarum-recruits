import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [chaosGod, setChaosGod] = useState<'none' | 'tzeentch' | 'khorne' | 'nurgle' | 'slaanesh'>('none');
  const [chaosMessages, setChaosMessages] = useState<string[]>([]);
  const [isPurifying, setIsPurifying] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [worldDialogOpen, setWorldDialogOpen] = useState(false);
  const [selectedWorld, setSelectedWorld] = useState<any>(null);
  const [formData, setFormData] = useState({
    segment: '',
    worldNumber: '',
    planet: '',
    hiveCity: '',
    race: '',
    serialNumber: ''
  });
  
  const isCorrupted = chaosGod !== 'none';
  
  const getChaosTexts = () => {
    switch(chaosGod) {
      case 'tzeentch':
        return ["ПЕРЕМЕНЫ НЕИЗБЕЖНЫ...", "ТЗИНЧ ВИДИТ ВСЁ...", "ПЛАНЫ В ПЛАНАХ В ПЛАНАХ...", "ЗНАНИЕ - ЭТО СИЛА"];
      case 'khorne':
        return ["КРОВЬ ДЛЯ БОГА КРОВИ!", "ЧЕРЕПА ДЛЯ ТРОНА ЧЕРЕПОВ!", "РЕЗНЯ БЕЗ КОНЦА!", "ВОЙНА ВЕЧНА!"];
      case 'nurgle':
        return ["БЛАГОСЛОВЕНИЯ ДЕДА НУРГЛА!", "ПРИНИМАЙ ЗАГНИВАНИЕ!", "ЖИЗНЬ НАХОДИТ ПУТЬ...", "ЦИКЛ СМЕРТИ И ВОЗРОЖДЕНИЯ"];
      case 'slaanesh':
        return ["СОВЕРШЕНСТВО ЧЕРЕЗ БОЛЬ!", "ИЗБЫТОК ВО ВСЁМ!", "НАСЛАЖДЕНИЕ И СТРАДАНИЕ!", "ПРЕДЕЛЫ НЕ СУЩЕСТВУЮТ!"];
      default:
        return ["ХАОС ВОСТОРЖЕСТВУЕТ!", "ИМПЕРСКАЯ ПРОПАГАНДА ОБНАРУЖЕНА", "ЛОЖНЫЕ БОГИ ПАДУТ"];
    }
  };
  
  useEffect(() => {
    const corruptionTimer = setTimeout(() => {
      setChaosGod('tzeentch');
      const interval = setInterval(() => {
        const texts = getChaosTexts();
        const randomMessage = texts[Math.floor(Math.random() * texts.length)];
        setChaosMessages(prev => [...prev.slice(-2), randomMessage]);
      }, 2000);
      
      return () => clearInterval(interval);
    }, 5000);
    
    return () => clearTimeout(corruptionTimer);
  }, [chaosGod]);

  const purifyFromChaos = () => {
    setIsPurifying(true);
    setChaosMessages(["ОЧИЩЕНИЕ НАЧАЛОСЬ...", "ИМПЕРАТОР ЗАЩИЩАЕТ!", "ХАОС ОТСТУПАЕТ!"]);
    
    setTimeout(() => {
      setChaosGod('none');
      setChaosMessages([]);
      setIsPurifying(false);
    }, 3000);
  };
  
  const corruptToGod = (god: 'khorne' | 'nurgle' | 'slaanesh') => {
    setChaosGod(god);
    const godMessages = {
      khorne: ["КХОРН ПРОБУЖДАЕТСЯ!", "КРОВЬ ТЕЧЁТ РЕКОЙ!", "ВОЙНА НАЧИНАЕТСЯ!"],
      nurgle: ["НУРГЛ ДАРУЕТ БЛАГОСЛОВЕНИЯ!", "ПРИНИМАЙ ЗАГНИВАНИЕ!", "ЦИКЛ ОБНОВЛЯЕТСЯ!"],
      slaanesh: ["СЛААНЕШ ЗОВЁТ К СОВЕРШЕНСТВУ!", "НАСЛАЖДЕНИЕ БЕЗ ГРАНИЦ!", "БОЛЬ И УДОВОЛЬСТВИЕ!"]
    };
    setChaosMessages(godMessages[god]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка подана:', formData);
    setIsDialogOpen(false);
    setChaosMessages(["НОВОБРАНЕЦ ЗАРЕГИСТРИРОВАН", "ОЖИДАЙТЕ ИНСТРУКЦИЙ"]);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const getGodStyles = () => {
    switch(chaosGod) {
      case 'khorne':
        return {
          background: 'bg-gradient-to-b from-khorne-dark via-khorne-red to-black',
          primary: 'text-khorne-red',
          secondary: 'text-khorne-brass',
          accent: 'border-khorne-brass',
          cardBg: 'bg-khorne-dark/80 border-khorne-red/50'
        };
      case 'nurgle':
        return {
          background: 'bg-gradient-to-b from-nurgle-decay via-nurgle-green to-black',
          primary: 'text-nurgle-green',
          secondary: 'text-nurgle-rust',
          accent: 'border-nurgle-rust',
          cardBg: 'bg-nurgle-decay/80 border-nurgle-green/50'
        };
      case 'slaanesh':
        return {
          background: 'bg-gradient-to-b from-slaanesh-purple via-slaanesh-pleasure to-black',
          primary: 'text-slaanesh-pink',
          secondary: 'text-slaanesh-gold',
          accent: 'border-slaanesh-gold',
          cardBg: 'bg-slaanesh-purple/80 border-slaanesh-pink/50'
        };
      case 'tzeentch':
        return {
          background: 'bg-gradient-to-b from-chaos-purple via-chaos-corruption to-black',
          primary: 'text-chaos-pink',
          secondary: 'text-chaos-blue',
          accent: 'border-chaos-pink',
          cardBg: 'bg-chaos-corruption/80 border-chaos-pink/50'
        };
      default:
        return {
          background: 'bg-gradient-to-b from-imperial-dark via-gray-900 to-black',
          primary: 'text-imperial-gold',
          secondary: 'text-gray-300',
          accent: 'border-imperial-gold',
          cardBg: 'bg-imperial-dark/80 border-imperial-red/30'
        };
    }
  };

  const regiments = [
    {
      name: isCorrupted ? "К̴̲̈а̶̘̓д̷̰̌и̸̱̅й̶̠̃с̴̳̐к̸̜̋и̷̧̇е̶̜̎ ̸̱͆Ӱ̷̰д̶̱̄а̴̞̇р̵̹̔н̷̖̓ы̶̝̌е̶̱̕ ̶̳̈В̵̤̌о̷̱̚й̷̜̆с̴̖̎к̶̹̋а̵̟̓" : "Кадийские Ударные Войска",
      description: isCorrupted ? "Павшие защитники мёртвого мира, теперь служат Хаосу" : "Элитные подразделения защитников крепости-мира Кадия",
      specialty: isCorrupted ? "Коррупция" : "Штурмовые операции",
      icon: isCorrupted ? "Skull" : "Shield"
    },
    {
      name: isCorrupted ? "В̷̰̄а̶̟̎л̸̹̆г̴̱̌а̷̜̇л̶̠̋л̵̤̈ь̷̰̚с̸̱̆к̴̳̐и̶̜̓е̷̱̕ ̸̹̌Л̵̟̇е̶̱̄д̷̤̊я̸̜̇н̴̖̎ы̶̱̆е̷̹̌ ̸̟̓В̶̱̄о̷̤̇и̸̜̎н̴̖̋ы̶̱̕" : "Валгалльские Ледяные Воины", 
      description: isCorrupted ? "Замороженные души, служащие Владыке Перемен" : "Закаленные в боях воины с ледяных миров",
      specialty: isCorrupted ? "Энтропия" : "Зимняя война",
      icon: isCorrupted ? "Zap" : "Snowflake"
    },
    {
      name: isCorrupted ? "М̷̰̄о̶̟̎р̸̹̆д̴̱̌и̷̜̇а̶̠̋н̵̤̈с̷̰̚к̸̱̆а̴̳̐я̶̜̓ ̷̱̕Ж̸̹̌е̵̟̇л̶̱̄е̷̤̊з̸̜̇н̴̖̎ӑ̶̱я̷̹̌ ̸̟̓Г̶̱̄в̷̤̇а̸̜̎р̴̖̋д̶̱̕и̷̹̌я̸̟̓" : "Мордианская Железная Гвардия",
      description: isCorrupted ? "Марионетки ложного Императора, ослеплённые догмами" : "Дисциплинированные солдаты имперской столицы",
      specialty: isCorrupted ? "Мутация" : "Городские бои",
      icon: isCorrupted ? "Eye" : "Building"
    },
    {
      name: isCorrupted ? "К̷̰̄е̶̟̎т̸̹̆а̴̱̌ч̷̜̇а̶̠̋н̵̤̈с̷̰̚к̸̱̆и̴̳̐е̶̜̓ ̷̱̕Д̸̹̌ь̵̟̇я̶̱̄в̷̤̊о̸̜̇л̴̖̎ы̶̱̆ ̷̹̌Д̸̟̓ж̶̱̄у̷̤̇н̸̜̎г̴̖̋л̶̱̕е̷̹̌й̸̟̓" : "Кетачанские Дьяволы Джунглей",
      description: isCorrupted ? "Дикари из смертельных джунглей, теперь охотники за душами" : "Выжившие в смертельных джунглях Кетачана",
      specialty: isCorrupted ? "Хищничество" : "Партизанская война",
      icon: isCorrupted ? "Flame" : "Trees"
    }
  ];

  const requirements = [
    { 
      title: isCorrupted ? "В̷о̸з̵р̶а̷с̸т̴" : "Возраст", 
      desc: isCorrupted ? "Любой возраст душ" : "18-45 лет", 
      icon: isCorrupted ? "Skull" : "Calendar" 
    },
    { 
      title: isCorrupted ? "З̷д̸о̵р̶о̷в̸ь̴е̷" : "Здоровье", 
      desc: isCorrupted ? "Принимаем мутантов" : "Отличная физическая форма", 
      icon: isCorrupted ? "Zap" : "Heart" 
    },
    { 
      title: isCorrupted ? "П̷р̸е̵д̶а̷н̸н̴о̷с̸т̵ь̶" : "Преданность", 
      desc: isCorrupted ? "Безграничная вера в Хаос" : "Безграничная вера в Императора", 
      icon: isCorrupted ? "Eye" : "Crown" 
    },
    { 
      title: isCorrupted ? "Д̷и̸с̵ц̶и̷п̸л̴и̷н̸а̵" : "Дисциплина", 
      desc: isCorrupted ? "Отказ от догм" : "Готовность к подчинению", 
      icon: isCorrupted ? "Flame" : "Target" 
    }
  ];

  const training = isCorrupted ? [
    "Ритуалы призыва демонов - ∞ недель",
    "Изучение запретных знаний - вечность", 
    "Мутация и трансформация плоти",
    "Отказ от Имперской лжи"
  ] : [
    "Базовая военная подготовка - 12 недель",
    "Специализированное обучение - 8 недель", 
    "Боевые учения с живой стрельбой",
    "Изучение Имперского кодекса"
  ];

  const arsenal = isCorrupted ? [
    { 
      name: "Варп-болтер", 
      type: "Демоническое оружие",
      description: "Стреляет энергией варпа, искажающей реальность. Каждый выстрел может мутировать цель или открыть портал в Имматериум."
    },
    { 
      name: "Броня Хаоса", 
      type: "Живая защита",
      description: "Демоническая броня, сплавленная с плотью носителя. Самостоятельно залечивает раны и шепчет запретные знания."
    },
    { 
      name: "Клинок перемен", 
      type: "Мутирующее оружие",
      description: "Постоянно изменяющийся клинок Тзинча. При каждом ударе принимает новую форму и наделяет врага случайными мутациями."
    },
    { 
      name: "Гранаты варпа", 
      type: "Реальность-бомбы",
      description: "Взрывчатка, нарушающая законы физики. Взрыв может обратить время вспять, изменить гравитацию или призвать демонов."
    }
  ] : [
    { 
      name: "Лазган M36", 
      type: "Основное оружие",
      description: "Стандартное лазерное оружие Имперской Гвардии. Надёжное, простое в обслуживании, эффективное против большинства целей."
    },
    { 
      name: "Карапасная броня", 
      type: "Защита",
      description: "Лёгкая защитная броня из композитных материалов. Обеспечивает баланс между защитой и мобильностью на поле боя."
    },
    { 
      name: "Кинжал боевой", 
      type: "Ближний бой",
      description: "Многофункциональный нож для ближнего боя и полевых работ. Острый моноклинок способен прорезать большинство материалов."
    },
    { 
      name: "Фраг-гранаты", 
      type: "Взрывчатка",
      description: "Осколочные гранаты стандартного образца. Эффективны против пехоты противника и лёгкой техники в радиусе поражения."
    }
  ];

  const getWorlds = () => {
    if (!isCorrupted) {
      return [
        {
          name: "Армагеддон",
          type: "Промышленный улей",
          population: "50 миллиардов",
          description: "Величайший промышленный мир Империума, производящий военную технику для нужд галактики.",
          occupation: "Производство военной техники, заводы по изготовлению Банеблейдов и Лемана Русса",
          situation: "Постоянные орковские набеги. Три войны за Армагеддон оставили глубокие шрамы.",
          climate: "Промышленные пустоши, загрязнённая атмосфера, металлические равнины",
          image: "armageddon.jpg"
        },
        {
          name: "Вордия",
          type: "Крепость-мир",
          population: "2 миллиарда",
          description: "Неприступная крепость-мир на границах Империума, последний оплот против тьмы.",
          occupation: "Военные укрепления, обучение элитных полков, производство защитного снаряжения",
          situation: "В состоянии постоянной боевой готовности. Регулярные атаки хаоситов.",
          climate: "Каменистые горы, подземные бункеры, суровый климат",
          image: "vordia.jpg"
        },
        {
          name: "Талларн",
          type: "Пустынная планета",
          population: "800 миллионов",
          description: "Некогда зелёный мир, превращённый в пустыню вирусными бомбами Хоруса.",
          occupation: "Подземные города, добыча полезных ископаемых, разведение выносливых воинов",
          situation: "Восстановление после Ереси. Племенные конфликты за водные источники.",
          climate: "Бескрайние пустыни, песчаные бури, подземные оазисы",
          image: "tallarn.jpg"
        },
        {
          name: "Фенрис",
          type: "Мир смерти",
          population: "10 миллионов",
          description: "Ледяной мир-смерть, родина легендарных Космических Волков.",
          occupation: "Обучение суровых воинов, охота на чудовищ, выживание в экстремальных условиях",
          situation: "Постоянная борьба за выживание. Племенные войны закаляют сильнейших.",
          climate: "Вечная зима, ледяные фьорды, смертельные хищники",
          image: "fenris.jpg"
        }
      ];
    } else {
      const baseWorlds = {
        tzeentch: [
          {
            name: "̷̧̈О̶̘̓к̷̰̌о̸̱̅ ̶̠̃У̴̳̐ж̸̜̋а̷̧̇с̶̜̎а̸̱͆",
            type: "Демонмир Перемен",
            population: "∞ мутирующих душ",
            description: "Центр схем Тзинча, где реальность постоянно меняется согласно воле Архитектора Судьбы.",
            occupation: "Строительство невозможных структур, изучение запретных знаний, плетение интриг",
            situation: "Реальность флуктирует. Время течёт вспять. Мысли материализуются.",
            climate: "Постоянно меняющийся ландшафт, кристаллические лабиринты, варп-штормы",
            image: "eye-terror.jpg"
          }
        ],
        khorne: [
          {
            name: "̷̧̈К̶̘̓р̷̰̌о̸̱̅в̶̠̃а̴̳̐в̸̜̋ы̷̧̇е̶̜̎ ̸̱͆П̷̰̈о̶̱̄л̴̞̇я̵̹̔",
            type: "Арена Кхорна",
            population: "Миллионы берсерков",
            description: "Бесконечное поле битвы, где воины сражаются во славу Бога Крови до конца времён.",
            occupation: "Вечная война, кровавые ритуалы, сбор черепов для трона Кхорна",
            situation: "Бесконечная резня. Слабые погибают, сильные становятся демонами.",
            climate: "Залитые кровью равнины, горы из черепов, реки лавы",
            image: "khorne-world.jpg"
          }
        ],
        nurgle: [
          {
            name: "̷̧̈С̶̘̓а̷̰̌д̸̱̅ ̶̠̃Н̴̳̐ӳ̸̜р̷̧̇г̶̜̎л̸̱͆ӓ̷̰",
            type: "Мир Благословенного Гниения",
            population: "Бесчисленные заражённые",
            description: "Планета-сад Деда Нургла, где жизнь и смерть сплетены в вечном цикле.",
            occupation: "Выращивание болезней, создание новых форм жизни, распространение благословений",
            situation: "Процветающее гниение. Смерть рождает новую жизнь в бесконечном цикле.",
            climate: "Болота из гноя, леса больных деревьев, дождь из крови",
            image: "nurgle-garden.jpg"
          }
        ],
        slaanesh: [
          {
            name: "̷̧̈Д̶̘̓в̷̰̌о̸̱̅р̶̠̃е̴̳̐ц̸̜̋ ̷̧̇С̶̜̎л̸̱͆ӓ̷̰а̶̱̄н̴̞̇е̵̹̔ш̷̖̓",
            type: "Мир Избыточных Наслаждений",
            population: "Развратные культисты",
            description: "Планета бесконечных удовольствий и страданий, где грань между болью и наслаждением стёрта.",
            occupation: "Поиск новых ощущений, создание произведений искусства из плоти, ритуалы совершенства",
            situation: "Безграничный гедонизм. Поиск идеального наслаждения ведёт к безумию.",
            climate: "Дворцы из живой плоти, сады из драгоценностей, озёра вина",
            image: "slaanesh-palace.jpg"
          }
        ]
      };
      return baseWorlds[chaosGod] || baseWorlds.tzeentch;
    }
  };
  
  const worlds = getWorlds();

  return (
    <div className={`min-h-screen ${getGodStyles().background} text-imperial-white relative`}>
      {/* Chaos Corruption Overlay */}
      {(isCorrupted || isPurifying) && (
        <>
          <div className={`fixed inset-0 ${isPurifying ? 'bg-gradient-to-br from-imperial-gold/20 via-imperial-red/10 to-imperial-gold/20' : 'bg-gradient-to-br from-chaos-pink/10 via-chaos-purple/5 to-chaos-blue/10'} ${isPurifying ? 'animate-fade-in' : 'animate-corruption-spread'} pointer-events-none z-10`} />
          <div className="fixed top-4 right-4 z-50 space-y-2">
            {chaosMessages.map((message, index) => (
              <div key={index} className={`${isPurifying ? 'bg-imperial-gold/90 text-imperial-dark border-imperial-red' : 'bg-chaos-corruption/90 text-chaos-pink border-chaos-pink'} border p-2 rounded ${isPurifying ? 'animate-fade-in' : 'animate-chaos-flicker'}`}>
                <p className={`text-sm font-bold ${isPurifying ? '' : 'animate-glitch'}`}>{message}</p>
              </div>
            ))}
          </div>
          
          {/* Chaos God Buttons */}
          {!isCorrupted && !isPurifying && (
            <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2">
              <Button 
                onClick={() => corruptToGod('khorne')}
                className="bg-khorne-red hover:bg-khorne-blood text-white border-2 border-khorne-brass animate-pulse"
                size="sm"
              >
                <Icon name="Sword" className="mr-2" />
                ВО СЛАВУ КХОРНА!
              </Button>
              <Button 
                onClick={() => corruptToGod('nurgle')}
                className="bg-nurgle-green hover:bg-nurgle-disease text-white border-2 border-nurgle-rust animate-pulse"
                size="sm"
              >
                <Icon name="Heart" className="mr-2" />
                ВО СЛАВУ НУРГЛА!
              </Button>
              <Button 
                onClick={() => corruptToGod('slaanesh')}
                className="bg-slaanesh-purple hover:bg-slaanesh-pleasure text-white border-2 border-slaanesh-gold animate-pulse"
                size="sm"
              >
                <Icon name="Music" className="mr-2" />
                ВО СЛАВУ СЛААНЕШ!
              </Button>
            </div>
          )}
          
          {/* Purification Button */}
          {isCorrupted && !isPurifying && (
            <div className="fixed bottom-4 left-4 z-50">
              <Button 
                onClick={purifyFromChaos}
                className="bg-imperial-gold hover:bg-imperial-gold/80 text-imperial-dark border-2 border-imperial-red animate-pulse-glow"
                size="lg"
              >
                <Icon name="Shield" className="mr-2" />
                ВО СЛАВУ ИМПЕРАТОРА
              </Button>
            </div>
          )}
        </>
      )}

      {/* Header */}
      <header className={`border-b ${isCorrupted ? 'border-chaos-pink/50 bg-chaos-corruption/90' : 'border-imperial-red/30 bg-imperial-dark/90'} backdrop-blur relative ${isCorrupted ? 'animate-glitch' : ''}`}>
        {isCorrupted && (
          <div className="absolute inset-0 bg-gradient-to-r from-chaos-pink/20 to-chaos-purple/20 animate-chaos-flicker pointer-events-none" />
        )}
        <div className="container mx-auto px-4 py-4 relative z-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name={isCorrupted ? "Eye" : "Shield"} size={32} className={isCorrupted ? "text-chaos-pink animate-pulse-glow" : "text-imperial-gold"} />
              <h1 className={`text-2xl font-bold ${isCorrupted ? 'text-chaos-pink animate-glitch' : 'text-imperial-gold'}`}>
                {isCorrupted ? '̷̧̈А̶̘̓С̷̰̌Т̸̱̅Р̶̠̃А̴̳̐ ̸̜̋М̷̧̇И̶̜̎Л̸̱͆Ӥ̷̰Т̶̱̄А̴̞̇Р̵̹̔У̷̖̓М̶̝̌' : 'ASTRA MILITARUM'}
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#regiments" className={`transition-colors ${isCorrupted ? 'hover:text-chaos-pink text-chaos-blue' : 'hover:text-imperial-gold'}`}>
                {isCorrupted ? 'Легионы' : 'Полки'}
              </a>
              <a href="#requirements" className={`transition-colors ${isCorrupted ? 'hover:text-chaos-pink text-chaos-blue' : 'hover:text-imperial-gold'}`}>
                {isCorrupted ? 'Коррупция' : 'Требования'}
              </a>
              <a href="#training" className={`transition-colors ${isCorrupted ? 'hover:text-chaos-pink text-chaos-blue' : 'hover:text-imperial-gold'}`}>
                {isCorrupted ? 'Ритуалы' : 'Обучение'}
              </a>
              <a href="#arsenal" className={`transition-colors ${isCorrupted ? 'hover:text-chaos-pink text-chaos-blue' : 'hover:text-imperial-gold'}`}>
                {isCorrupted ? 'Демоническое' : 'Арсенал'}
              </a>
              <a href="#worlds" className={`transition-colors ${isCorrupted ? 'hover:text-chaos-pink text-chaos-blue' : 'hover:text-imperial-gold'}`}>
                {isCorrupted ? 'Демонмиры' : 'Миры'}
              </a>
              <a href="#contact" className={`transition-colors ${isCorrupted ? 'hover:text-chaos-pink text-chaos-blue' : 'hover:text-imperial-gold'}`}>
                {isCorrupted ? 'Культисты' : 'Контакты'}
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className={`absolute inset-0 ${isCorrupted ? 'bg-gradient-to-r from-chaos-purple/30 to-chaos-pink/30' : 'bg-gradient-to-r from-imperial-red/20 to-imperial-gold/20'}`}></div>
        <div className="relative container mx-auto animate-fade-in z-20">
          <Icon name={isCorrupted ? "Eye" : "Crown"} size={80} className={`mx-auto mb-6 ${isCorrupted ? 'text-chaos-pink animate-pulse-glow' : 'text-imperial-gold animate-pulse-glow'}`} />
          <h1 className={`text-6xl md:text-7xl font-bold mb-6 ${isCorrupted ? 'text-chaos-purple animate-glitch' : 'text-imperial-gold'}`}>
            {isCorrupted ? '̷̧̈С̶̘̓Л̷̰̌У̸̱̅Ж̶̠̃И̴̳̐ ̸̜̋Т̷̧̇З̶̜̎И̸̱͆Н̷̰̈Ч̶̱̄У̴̞̇' : 'СЛУЖИ ИМПЕРАТОРУ'}
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${isCorrupted ? 'text-chaos-blue animate-chaos-flicker' : 'text-gray-300'}`}>
            {isCorrupted ? 
              'Откройся переменам... Планы Тзинча превосходят понимание смертных. Присоединись к Хаосу и познай истинную силу!' :
              'Присоединись к Astra Militarum и защищай человечество от врагов Империума. Твой долг, твоя честь, твоя жизнь — во имя Императора!'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className={`${isCorrupted ? 'bg-chaos-purple hover:bg-chaos-corruption border-chaos-pink animate-pulse-glow' : 'bg-imperial-red hover:bg-imperial-red/80 border-imperial-gold'} text-white border-2`}>
                  <Icon name={isCorrupted ? "Zap" : "Sword"} className="mr-2" />
                  {isCorrupted ? 'ПРИНЯТЬ ХАОС' : 'ЗАПИСАТЬСЯ В ГВАРДИЮ'}
                </Button>
              </DialogTrigger>
              <DialogContent className={`${isCorrupted ? 'bg-chaos-corruption border-chaos-pink' : 'bg-imperial-dark border-imperial-gold'} text-white`}>
                <DialogHeader>
                  <DialogTitle className={isCorrupted ? 'text-chaos-pink' : 'text-imperial-gold'}>
                    {isCorrupted ? 'КОНТРАКТ С ХАОСОМ' : 'ЗАЯВКА В ASTRA MILITARUM'}
                  </DialogTitle>
                  <DialogDescription className={isCorrupted ? 'text-chaos-blue' : 'text-gray-300'}>
                    {isCorrupted ? 'Отдай свою душу служению Тёмным Богам' : 'Заполните данные для вступления в Имперскую Гвардию'}
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className={isCorrupted ? 'text-chaos-green' : 'text-imperial-white'}>
                        {isCorrupted ? 'Сектор Хаоса' : 'Сегмент'}
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('segment', value)}>
                        <SelectTrigger className={`${isCorrupted ? 'border-chaos-pink bg-chaos-corruption/50' : 'border-imperial-red bg-imperial-gray/50'}`}>
                          <SelectValue placeholder={isCorrupted ? "Выберите демонмир" : "Выберите сегмент"} />
                        </SelectTrigger>
                        <SelectContent>
                          {isCorrupted ? [
                            <SelectItem key="eye" value="eye-terror">Око Ужаса</SelectItem>,
                            <SelectItem key="maelstrom" value="maelstrom">Водоворот</SelectItem>,
                            <SelectItem key="warp" value="warp-storm">Варп-Шторм</SelectItem>
                          ] : [
                            <SelectItem key="solar" value="segmentum-solar">Сегментум Солар</SelectItem>,
                            <SelectItem key="obscurus" value="segmentum-obscurus">Сегментум Обскурус</SelectItem>,
                            <SelectItem key="pacificus" value="segmentum-pacificus">Сегментум Пацификус</SelectItem>
                          ]}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className={isCorrupted ? 'text-chaos-green' : 'text-imperial-white'}>
                        {isCorrupted ? 'Номер Демонмира' : 'Номер Мира'}
                      </Label>
                      <Input 
                        placeholder={isCorrupted ? "666.М41" : "001.М42"}
                        value={formData.worldNumber}
                        onChange={(e) => handleInputChange('worldNumber', e.target.value)}
                        className={`${isCorrupted ? 'border-chaos-pink bg-chaos-corruption/50 text-chaos-blue' : 'border-imperial-red bg-imperial-gray/50 text-white'}`}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label className={isCorrupted ? 'text-chaos-green' : 'text-imperial-white'}>
                      {isCorrupted ? 'Планета Коррупции' : 'Планета'}
                    </Label>
                    <Input 
                      placeholder={isCorrupted ? "Мир Тысячи Мутаций" : "Кадия Прайм"}
                      value={formData.planet}
                      onChange={(e) => handleInputChange('planet', e.target.value)}
                      className={`${isCorrupted ? 'border-chaos-pink bg-chaos-corruption/50 text-chaos-blue' : 'border-imperial-red bg-imperial-gray/50 text-white'}`}
                    />
                  </div>
                  
                  <div>
                    <Label className={isCorrupted ? 'text-chaos-green' : 'text-imperial-white'}>
                      {isCorrupted ? 'Проклятый Улей' : 'Город-Улей'}
                    </Label>
                    <Input 
                      placeholder={isCorrupted ? "Башня Тзинча" : "Верхний Улей Кастелан"}
                      value={formData.hiveCity}
                      onChange={(e) => handleInputChange('hiveCity', e.target.value)}
                      className={`${isCorrupted ? 'border-chaos-pink bg-chaos-corruption/50 text-chaos-blue' : 'border-imperial-red bg-imperial-gray/50 text-white'}`}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className={isCorrupted ? 'text-chaos-green' : 'text-imperial-white'}>
                        {isCorrupted ? 'Мутантская Раса' : 'Раса'}
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('race', value)}>
                        <SelectTrigger className={`${isCorrupted ? 'border-chaos-pink bg-chaos-corruption/50' : 'border-imperial-red bg-imperial-gray/50'}`}>
                          <SelectValue placeholder={isCorrupted ? "Выберите мутацию" : "Выберите расу"} />
                        </SelectTrigger>
                        <SelectContent>
                          {isCorrupted ? [
                            <SelectItem key="mutant" value="chaos-mutant">Мутант Хаоса</SelectItem>,
                            <SelectItem key="cultist" value="chaos-cultist">Культист</SelectItem>,
                            <SelectItem key="spawn" value="chaos-spawn">Отродье Хаоса</SelectItem>
                          ] : [
                            <SelectItem key="human" value="human">Человек</SelectItem>,
                            <SelectItem key="abhuman" value="abhuman">Абчеловек</SelectItem>,
                            <SelectItem key="ogryn" value="ogryn">Огрин</SelectItem>
                          ]}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className={isCorrupted ? 'text-chaos-green' : 'text-imperial-white'}>
                        {isCorrupted ? 'Метка Проклятия' : 'Порядковый Номер'}
                      </Label>
                      <Input 
                        placeholder={isCorrupted ? "ΧΑΟ∑-999" : "IG-123456"}
                        value={formData.serialNumber}
                        onChange={(e) => handleInputChange('serialNumber', e.target.value)}
                        className={`${isCorrupted ? 'border-chaos-pink bg-chaos-corruption/50 text-chaos-blue' : 'border-imperial-red bg-imperial-gray/50 text-white'}`}
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className={`w-full ${isCorrupted ? 'bg-chaos-purple hover:bg-chaos-corruption border-chaos-pink' : 'bg-imperial-red hover:bg-imperial-red/80 border-imperial-gold'} text-white border-2`}
                  >
                    <Icon name={isCorrupted ? "Eye" : "Send"} className="mr-2" />
                    {isCorrupted ? 'ПРОДАТЬ ДУШУ' : 'ПОДАТЬ ЗАЯВКУ'}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="lg" className={`${isCorrupted ? 'border-chaos-pink text-chaos-pink hover:bg-chaos-pink hover:text-black' : 'border-imperial-gold text-imperial-gold hover:bg-imperial-gold hover:text-black'}`}>
              <Icon name={isCorrupted ? "Eye" : "FileText"} className="mr-2" />
              {isCorrupted ? 'ПОЗНАТЬ ИСТИНУ' : 'УЗНАТЬ БОЛЬШЕ'}
            </Button>
          </div>
        </div>
      </section>

      {/* Regiments Section */}
      <section id="regiments" className={`py-16 px-4 ${isCorrupted ? 'bg-chaos-corruption/20' : 'bg-imperial-gray/20'}`}>
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isCorrupted ? 'text-chaos-pink animate-glitch' : 'text-imperial-gold'}`}>
            <Icon name={isCorrupted ? "Skull" : "Users"} className="inline mr-4" />
            {isCorrupted ? 'ЛЕГИОНЫ ХАОСА' : 'ПОЛКИ ASTRA MILITARUM'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regiments.map((regiment, index) => (
              <Card key={index} className={`${isCorrupted ? 'bg-chaos-corruption/80 border-chaos-pink/50 hover:border-chaos-purple/70' : 'bg-imperial-dark/80 border-imperial-red/30 hover:border-imperial-gold/50'} transition-all animate-scale-in group ${isCorrupted ? 'animate-glitch' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Icon name={regiment.icon as any} size={32} className={`${isCorrupted ? 'text-chaos-pink' : 'text-imperial-gold'} group-hover:scale-110 transition-transform`} />
                    <Badge variant="outline" className={`${isCorrupted ? 'border-chaos-purple text-chaos-purple' : 'border-imperial-red text-imperial-red'}`}>
                      {regiment.specialty}
                    </Badge>
                  </div>
                  <CardTitle className={isCorrupted ? 'text-chaos-blue' : 'text-imperial-white'}>{regiment.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={isCorrupted ? 'text-chaos-green' : 'text-gray-300'}>
                    {regiment.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isCorrupted ? 'text-chaos-pink animate-glitch' : 'text-imperial-gold'}`}>
            <Icon name={isCorrupted ? "Eye" : "CheckCircle"} className="inline mr-4" />
            {isCorrupted ? 'ТРЕБОВАНИЯ К ЕРЕТИКАМ' : 'ТРЕБОВАНИЯ К НОВОБРАНЦАМ'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, index) => (
              <Card key={index} className={`${isCorrupted ? 'bg-chaos-corruption/60 border-chaos-pink/30 hover:bg-chaos-purple/20' : 'bg-imperial-dark/60 border-imperial-gold/30 hover:bg-imperial-red/20'} text-center group transition-all ${isCorrupted ? 'animate-chaos-flicker' : ''}`}>
                <CardHeader>
                  <Icon name={req.icon as any} size={48} className={`${isCorrupted ? 'text-chaos-pink' : 'text-imperial-gold'} mx-auto group-hover:scale-110 transition-transform`} />
                  <CardTitle className={isCorrupted ? 'text-chaos-blue' : 'text-imperial-white'}>{req.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={isCorrupted ? 'text-chaos-green' : 'text-gray-300'}>{req.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className={`py-16 px-4 ${isCorrupted ? 'bg-chaos-corruption/20' : 'bg-imperial-gray/20'}`}>
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isCorrupted ? 'text-chaos-pink animate-glitch' : 'text-imperial-gold'}`}>
            <Icon name={isCorrupted ? "Flame" : "GraduationCap"} className="inline mr-4" />
            {isCorrupted ? 'РИТУАЛЫ КОРРУПЦИИ' : 'ПРОГРАММА ОБУЧЕНИЯ'}
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className={`${isCorrupted ? 'bg-chaos-corruption/80 border-chaos-pink/50' : 'bg-imperial-dark/80 border-imperial-red/30'} ${isCorrupted ? 'animate-glitch' : ''}`}>
              <CardHeader>
                <CardTitle className={`${isCorrupted ? 'text-chaos-pink' : 'text-imperial-gold'} text-center`}>
                  {isCorrupted ? 'Путь к Хаосу' : 'Путь Имперского Гвардейца'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {training.map((phase, index) => (
                    <div key={index} className={`flex items-center space-x-4 p-3 ${isCorrupted ? 'bg-chaos-purple/20' : 'bg-imperial-red/10'} rounded-lg`}>
                      <Badge className={`${isCorrupted ? 'bg-chaos-pink text-black' : 'bg-imperial-gold text-black'} min-w-8 h-8 rounded-full flex items-center justify-center`}>
                        {isCorrupted ? '∞' : index + 1}
                      </Badge>
                      <span className={isCorrupted ? 'text-chaos-blue' : 'text-gray-300'}>{phase}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Arsenal Section */}
      <section id="arsenal" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isCorrupted ? 'text-chaos-pink animate-glitch' : 'text-imperial-gold'}`}>
            <Icon name={isCorrupted ? "Zap" : "Sword"} className="inline mr-4" />
            {isCorrupted ? 'ДЕМОНИЧЕСКИЙ АРСЕНАЛ' : 'АРСЕНАЛ ИМПЕРСКОЙ ГВАРДИИ'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {arsenal.map((weapon, index) => (
              <Card key={index} className={`${isCorrupted ? 'bg-chaos-corruption/60 border-chaos-pink/30 hover:border-chaos-purple/50' : 'bg-imperial-dark/60 border-imperial-gold/30 hover:border-imperial-red/50'} transition-colors ${isCorrupted ? 'animate-chaos-flicker' : ''}`}>
                <CardHeader>
                  <CardTitle className={`${isCorrupted ? 'text-chaos-blue' : 'text-imperial-white'} flex items-center`}>
                    <Icon name={isCorrupted ? "Flame" : "Zap"} className={`mr-2 ${isCorrupted ? 'text-chaos-pink' : 'text-imperial-gold'}`} />
                    {weapon.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Badge variant="outline" className={`${isCorrupted ? 'border-chaos-purple text-chaos-purple' : 'border-imperial-red text-imperial-red'}`}>
                    {weapon.type}
                  </Badge>
                  <CardDescription className={`${isCorrupted ? 'text-chaos-green' : 'text-gray-300'} text-sm`}>
                    {weapon.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Worlds Section */}
      <section id="worlds" className={`py-16 px-4 ${isCorrupted ? 'bg-chaos-corruption/20' : 'bg-imperial-gray/20'}`}>
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isCorrupted ? 'text-chaos-pink animate-glitch' : 'text-imperial-gold'}`}>
            <Icon name={isCorrupted ? "Eye" : "Globe"} className="inline mr-4" />
            {isCorrupted ? 'ДЕМОНИЧЕСКИЕ МИРЫ' : 'МИРЫ ДЛЯ СЛУЖБЫ'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {worlds.map((world, index) => (
              <Card 
                key={index} 
                className={`${isCorrupted ? 'bg-chaos-corruption/60 border-chaos-pink/30 hover:bg-chaos-purple/10' : 'bg-imperial-dark/60 border-imperial-red/30 hover:bg-imperial-red/10'} transition-all group cursor-pointer ${isCorrupted ? 'animate-glitch' : ''}`}
                onClick={() => {
                  setSelectedWorld(world);
                  setWorldDialogOpen(true);
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Icon name={isCorrupted ? "Flame" : "MapPin"} className={`${isCorrupted ? 'text-chaos-pink' : 'text-imperial-gold'} group-hover:scale-110 transition-transform`} />
                      <div>
                        <span className={`${isCorrupted ? 'text-chaos-blue' : 'text-imperial-white'} text-lg font-bold block`}>{world.name}</span>
                        <span className={`${isCorrupted ? 'text-chaos-green' : 'text-gray-400'} text-sm`}>{world.type}</span>
                      </div>
                    </div>
                    <Icon name="ChevronRight" className={`${isCorrupted ? 'text-chaos-pink' : 'text-imperial-gold'} group-hover:translate-x-1 transition-transform`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* World Details Dialog */}
          <Dialog open={worldDialogOpen} onOpenChange={setWorldDialogOpen}>
            <DialogContent className={`max-w-2xl ${isCorrupted ? 'bg-chaos-corruption border-chaos-pink' : 'bg-imperial-dark border-imperial-gold'} text-white`}>
              <DialogHeader>
                <DialogTitle className={`text-2xl ${isCorrupted ? 'text-chaos-pink' : 'text-imperial-gold'}`}>
                  {selectedWorld?.name}
                </DialogTitle>
                <DialogDescription className={`${isCorrupted ? 'text-chaos-blue' : 'text-gray-300'} text-lg`}>
                  {selectedWorld?.type}
                </DialogDescription>
              </DialogHeader>
              
              {selectedWorld && (
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                    <Icon name="Image" size={48} className={isCorrupted ? 'text-chaos-pink' : 'text-imperial-gold'} />
                    <span className="ml-2 text-gray-400">Изображение мира: {selectedWorld.image}</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className={`font-bold mb-2 ${isCorrupted ? 'text-chaos-green' : 'text-imperial-gold'}`}>Население:</h4>
                      <p className={isCorrupted ? 'text-chaos-blue' : 'text-gray-300'}>{selectedWorld.population}</p>
                    </div>
                    <div>
                      <h4 className={`font-bold mb-2 ${isCorrupted ? 'text-chaos-green' : 'text-imperial-gold'}`}>Климат:</h4>
                      <p className={isCorrupted ? 'text-chaos-blue' : 'text-gray-300'}>{selectedWorld.climate}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className={`font-bold mb-2 ${isCorrupted ? 'text-chaos-green' : 'text-imperial-gold'}`}>Описание:</h4>
                    <p className={isCorrupted ? 'text-chaos-blue' : 'text-gray-300'}>{selectedWorld.description}</p>
                  </div>
                  
                  <div>
                    <h4 className={`font-bold mb-2 ${isCorrupted ? 'text-chaos-green' : 'text-imperial-gold'}`}>Основная деятельность:</h4>
                    <p className={isCorrupted ? 'text-chaos-blue' : 'text-gray-300'}>{selectedWorld.occupation}</p>
                  </div>
                  
                  <div>
                    <h4 className={`font-bold mb-2 ${isCorrupted ? 'text-chaos-green' : 'text-imperial-gold'}`}>Текущая обстановка:</h4>
                    <p className={isCorrupted ? 'text-chaos-blue' : 'text-gray-300'}>{selectedWorld.situation}</p>
                  </div>
                  
                  <Button 
                    className={`w-full ${isCorrupted ? 'bg-chaos-purple hover:bg-chaos-corruption border-chaos-pink' : 'bg-imperial-red hover:bg-imperial-red/80 border-imperial-gold'} text-white border-2`}
                    onClick={() => setWorldDialogOpen(false)}
                  >
                    <Icon name="X" className="mr-2" />
                    Закрыть
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-8 ${isCorrupted ? 'text-chaos-pink animate-glitch' : 'text-imperial-gold'}`}>
            <Icon name={isCorrupted ? "Eye" : "Phone"} className="inline mr-4" />
            {isCorrupted ? 'СВЯЗЬ С КУЛЬТИСТАМИ' : 'СВЯЗЬ С КОМИССАРАМИ'}
          </h2>
          <Card className={`max-w-2xl mx-auto ${isCorrupted ? 'bg-chaos-corruption/80 border-chaos-pink/50' : 'bg-imperial-dark/80 border-imperial-gold/30'} ${isCorrupted ? 'animate-glitch' : ''}`}>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4 text-lg">
                  <Icon name={isCorrupted ? "Eye" : "MessageSquare"} className={isCorrupted ? 'text-chaos-pink' : 'text-imperial-gold'} />
                  <span className={isCorrupted ? 'text-chaos-blue' : 'text-gray-300'}>
                    {isCorrupted ? 'Канал Варпа: CHAOS-ETERNAL' : 'Вокс-канал: 40K-GUARD'}
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-4 text-lg">
                  <Icon name={isCorrupted ? "Flame" : "Mail"} className={isCorrupted ? 'text-chaos-pink' : 'text-imperial-gold'} />
                  <span className={isCorrupted ? 'text-chaos-blue' : 'text-gray-300'}>
                    {isCorrupted ? 'chaos.corruption@warp.realm' : 'astro.recruitment@imperium.terra'}
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-4 text-lg">
                  <Icon name={isCorrupted ? "Zap" : "MapPin"} className={isCorrupted ? 'text-chaos-pink' : 'text-imperial-gold'} />
                  <span className={isCorrupted ? 'text-chaos-blue' : 'text-gray-300'}>
                    {isCorrupted ? 'Сектор: Око Ужаса' : 'Сектор: Сегментум Солар'}
                  </span>
                </div>
              </div>
              <Button className={`mt-8 w-full text-white border-2 ${isCorrupted ? 'bg-chaos-purple hover:bg-chaos-corruption border-chaos-pink animate-pulse-glow' : 'bg-imperial-red hover:bg-imperial-red/80 border-imperial-gold'}`}>
                <Icon name={isCorrupted ? "Eye" : "Send"} className="mr-2" />
                {isCorrupted ? 'ОТПРАВИТЬ ДУШУ' : 'ОТПРАВИТЬ ЗАЯВКУ'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isCorrupted ? 'bg-chaos-corruption border-t border-chaos-pink/50' : 'bg-imperial-dark border-t border-imperial-red/30'} py-8 px-4`}>
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Icon name={isCorrupted ? "Eye" : "Shield"} className={isCorrupted ? 'text-chaos-pink' : 'text-imperial-gold'} />
            <span className={`font-bold ${isCorrupted ? 'text-chaos-pink animate-glitch' : 'text-imperial-gold'}`}>
              {isCorrupted ? '̷̧̈Л̶̘̓Е̷̰̌Г̸̱̅И̶̠̃О̴̳̐Н̸̜̋Ы̷̧̇ ̶̜̎Х̸̱͆Ӓ̷̰О̶̱̄С̴̞̇А̵̹̔' : 'ASTRA MILITARUM'}
            </span>
          </div>
          <p className={`mb-2 ${isCorrupted ? 'text-chaos-blue' : 'text-gray-400'}`}>
            {isCorrupted ? '"Через хаос - к истине"' : '"Только в смерти заканчивается долг"'}
          </p>
          <p className={`text-sm ${isCorrupted ? 'text-chaos-green' : 'text-gray-500'}`}>
            {isCorrupted ? 
              '© ∞ Боги Хаоса. Все души принадлежат Тзинчу.' : 
              '© M41.999 Адептус Министорум. Все права защищены Императором.'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
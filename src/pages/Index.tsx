import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const regiments = [
    {
      name: "Кадийские Ударные Войска",
      description: "Элитные подразделения защитников крепости-мира Кадия",
      specialty: "Штурмовые операции",
      icon: "Shield"
    },
    {
      name: "Валгалльские Ледяные Воины", 
      description: "Закаленные в боях воины с ледяных миров",
      specialty: "Зимняя война",
      icon: "Snowflake"
    },
    {
      name: "Мордианская Железная Гвардия",
      description: "Дисциплинированные солдаты имперской столицы",
      specialty: "Городские бои",
      icon: "Building"
    },
    {
      name: "Кетачанские Дьяволы Джунглей",
      description: "Выжившие в смертельных джунглях Кетачана",
      specialty: "Партизанская война",
      icon: "Trees"
    }
  ];

  const requirements = [
    { title: "Возраст", desc: "18-45 лет", icon: "Calendar" },
    { title: "Здоровье", desc: "Отличная физическая форма", icon: "Heart" },
    { title: "Преданность", desc: "Безграничная вера в Императора", icon: "Crown" },
    { title: "Дисциплина", desc: "Готовность к подчинению", icon: "Target" }
  ];

  const training = [
    "Базовая военная подготовка - 12 недель",
    "Специализированное обучение - 8 недель", 
    "Боевые учения с живой стрельбой",
    "Изучение Имперского кодекса"
  ];

  const arsenal = [
    { name: "Лазган M36", type: "Основное оружие" },
    { name: "Карапасная броня", type: "Защита" },
    { name: "Кинжал боевой", type: "Ближний бой" },
    { name: "Фраг-гранаты", type: "Взрывчатка" }
  ];

  const worlds = [
    "Армагеддон - Промышленный улей",
    "Вордия - Крепость-мир",
    "Талларн - Пустынная планета",
    "Фенрис - Мир смерти"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-imperial-dark via-gray-900 to-black text-imperial-white">
      {/* Header */}
      <header className="border-b border-imperial-red/30 bg-imperial-dark/90 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="Shield" size={32} className="text-imperial-gold" />
              <h1 className="text-2xl font-bold text-imperial-gold">ASTRA MILITARUM</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#regiments" className="hover:text-imperial-gold transition-colors">Полки</a>
              <a href="#requirements" className="hover:text-imperial-gold transition-colors">Требования</a>
              <a href="#training" className="hover:text-imperial-gold transition-colors">Обучение</a>
              <a href="#arsenal" className="hover:text-imperial-gold transition-colors">Арсенал</a>
              <a href="#worlds" className="hover:text-imperial-gold transition-colors">Миры</a>
              <a href="#contact" className="hover:text-imperial-gold transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-imperial-red/20 to-imperial-gold/20"></div>
        <div className="relative container mx-auto animate-fade-in">
          <Icon name="Crown" size={80} className="text-imperial-gold mx-auto mb-6 animate-pulse-glow" />
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-imperial-gold">
            СЛУЖИ ИМПЕРАТОРУ
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Присоединись к Astra Militarum и защищай человечество от врагов Империума. 
            Твой долг, твоя честь, твоя жизнь — во имя Императора!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-imperial-red hover:bg-imperial-red/80 text-white border-2 border-imperial-gold">
              <Icon name="Sword" className="mr-2" />
              ЗАПИСАТЬСЯ В ГВАРДИЮ
            </Button>
            <Button variant="outline" size="lg" className="border-imperial-gold text-imperial-gold hover:bg-imperial-gold hover:text-black">
              <Icon name="FileText" className="mr-2" />
              УЗНАТЬ БОЛЬШЕ
            </Button>
          </div>
        </div>
      </section>

      {/* Regiments Section */}
      <section id="regiments" className="py-16 px-4 bg-imperial-gray/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-imperial-gold">
            <Icon name="Users" className="inline mr-4" />
            ПОЛКИ ASTRA MILITARUM
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regiments.map((regiment, index) => (
              <Card key={index} className="bg-imperial-dark/80 border-imperial-red/30 hover:border-imperial-gold/50 transition-all animate-scale-in group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Icon name={regiment.icon as any} size={32} className="text-imperial-gold group-hover:scale-110 transition-transform" />
                    <Badge variant="outline" className="border-imperial-red text-imperial-red">
                      {regiment.specialty}
                    </Badge>
                  </div>
                  <CardTitle className="text-imperial-white">{regiment.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
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
          <h2 className="text-4xl font-bold text-center mb-12 text-imperial-gold">
            <Icon name="CheckCircle" className="inline mr-4" />
            ТРЕБОВАНИЯ К НОВОБРАНЦАМ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, index) => (
              <Card key={index} className="bg-imperial-dark/60 border-imperial-gold/30 text-center group hover:bg-imperial-red/20 transition-all">
                <CardHeader>
                  <Icon name={req.icon as any} size={48} className="text-imperial-gold mx-auto group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-imperial-white">{req.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{req.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-16 px-4 bg-imperial-gray/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-imperial-gold">
            <Icon name="GraduationCap" className="inline mr-4" />
            ПРОГРАММА ОБУЧЕНИЯ
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-imperial-dark/80 border-imperial-red/30">
              <CardHeader>
                <CardTitle className="text-imperial-gold text-center">Путь Имперского Гвардейца</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {training.map((phase, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-imperial-red/10 rounded-lg">
                      <Badge className="bg-imperial-gold text-black min-w-8 h-8 rounded-full flex items-center justify-center">
                        {index + 1}
                      </Badge>
                      <span className="text-gray-300">{phase}</span>
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
          <h2 className="text-4xl font-bold text-center mb-12 text-imperial-gold">
            <Icon name="Sword" className="inline mr-4" />
            АРСЕНАЛ ИМПЕРСКОЙ ГВАРДИИ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {arsenal.map((weapon, index) => (
              <Card key={index} className="bg-imperial-dark/60 border-imperial-gold/30 hover:border-imperial-red/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-imperial-white flex items-center">
                    <Icon name="Zap" className="mr-2 text-imperial-gold" />
                    {weapon.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="border-imperial-red text-imperial-red">
                    {weapon.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Worlds Section */}
      <section id="worlds" className="py-16 px-4 bg-imperial-gray/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-imperial-gold">
            <Icon name="Globe" className="inline mr-4" />
            МИРЫ ДЛЯ СЛУЖБЫ
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {worlds.map((world, index) => (
              <Card key={index} className="bg-imperial-dark/60 border-imperial-red/30 hover:bg-imperial-red/10 transition-all group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="MapPin" className="text-imperial-gold group-hover:scale-110 transition-transform" />
                    <span className="text-imperial-white text-lg">{world}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-imperial-gold">
            <Icon name="Phone" className="inline mr-4" />
            СВЯЗЬ С КОМИССАРАМИ
          </h2>
          <Card className="max-w-2xl mx-auto bg-imperial-dark/80 border-imperial-gold/30">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4 text-lg">
                  <Icon name="MessageSquare" className="text-imperial-gold" />
                  <span className="text-gray-300">Вокс-канал: 40K-GUARD</span>
                </div>
                <div className="flex items-center justify-center space-x-4 text-lg">
                  <Icon name="Mail" className="text-imperial-gold" />
                  <span className="text-gray-300">astro.recruitment@imperium.terra</span>
                </div>
                <div className="flex items-center justify-center space-x-4 text-lg">
                  <Icon name="MapPin" className="text-imperial-gold" />
                  <span className="text-gray-300">Сектор: Сегментум Солар</span>
                </div>
              </div>
              <Button className="mt-8 bg-imperial-red hover:bg-imperial-red/80 text-white border-2 border-imperial-gold w-full">
                <Icon name="Send" className="mr-2" />
                ОТПРАВИТЬ ЗАЯВКУ
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-imperial-dark border-t border-imperial-red/30 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Icon name="Shield" className="text-imperial-gold" />
            <span className="text-imperial-gold font-bold">ASTRA MILITARUM</span>
          </div>
          <p className="text-gray-400 mb-2">
            "Только в смерти заканчивается долг"
          </p>
          <p className="text-sm text-gray-500">
            © M41.999 Адептус Министорум. Все права защищены Императором.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
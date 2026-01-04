import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'Анна П.', message: 'Подскажите, где найти материалы по новой методике?', time: '10:30', avatar: 'АП' },
    { id: 2, user: 'Методист', message: 'Все материалы в разделе "Методические материалы" → Новое', time: '10:32', avatar: 'М' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const materials = [
    { id: 1, title: 'Инновационные методы преподавания', category: 'Педагогика', comments: 12, likes: 45 },
    { id: 2, title: 'Цифровые технологии в образовании', category: 'Технологии', comments: 8, likes: 32 },
    { id: 3, title: 'Психология детского развития', category: 'Психология', comments: 15, likes: 58 },
    { id: 4, title: 'Адаптивные программы обучения', category: 'Методология', comments: 10, likes: 41 },
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, {
        id: chatMessages.length + 1,
        user: 'Вы',
        message: newMessage,
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        avatar: 'В'
      }]);
      setNewMessage('');
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-16">
            <section className="relative min-h-[70vh] flex items-center overflow-hidden">
              <div className="absolute inset-0 bg-secondary/30" />
              
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative z-10 animate-slide-up">
                    <Badge className="mb-6 text-sm px-6 py-2 bg-accent hover:bg-accent/90">
                      Платформа нового поколения
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                      Online Методист
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8">
                      Современная образовательная платформа для обучения и методического сопровождения
                    </p>
                    <div className="flex gap-4 flex-wrap">
                      <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                        <Icon name="Rocket" className="mr-2" size={20} />
                        Начать обучение
                      </Button>
                      <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform border-2">
                        <Icon name="BookOpen" className="mr-2" size={20} />
                        Узнать больше
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative animate-fade-in">
                    <img 
                      src="https://cdn.poehali.dev/projects/c34c982a-d1c7-408c-81af-f078146dd9ef/files/469c8a60-eb31-46a8-bfa5-caa691f194b6.jpg" 
                      alt="Образовательная платформа"
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-secondary/50 py-20">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div className="order-2 md:order-1">
                    <img 
                      src="https://cdn.poehali.dev/projects/c34c982a-d1c7-408c-81af-f078146dd9ef/files/760ecc46-2fca-4058-b25e-922807b6d5bb.jpg" 
                      alt="Методические материалы"
                      className="w-full h-auto rounded-2xl shadow-xl"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h2 className="text-4xl font-bold mb-6">
                      Возможности платформы
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      Набор инструментов для эффективного обучения и профессионального развития педагогов
                    </p>
                    <div className="space-y-4">
                      {[
                        { icon: 'Lightbulb', title: 'Инновационные методы', desc: 'Современные подходы к обучению' },
                        { icon: 'Users', title: 'Сообщество', desc: 'Общение с коллегами и экспертами' },
                        { icon: 'Award', title: 'Сертификация', desc: 'Подтверждение компетенций' },
                      ].map((feature, i) => (
                        <div key={i} className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon name={feature.icon as any} className="text-white" size={24} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      case 'materials':
        return (
          <div className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-5xl font-bold mb-8 animate-fade-in">Методические материалы</h2>
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in">
              Коллекция проверенных материалов от ведущих экспертов
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {materials.map((material, i) => (
                <Card key={material.id} className="group hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary" className="group-hover:bg-accent group-hover:text-white transition-colors">
                        {material.category}
                      </Badge>
                      <Icon name="BookmarkPlus" className="text-muted-foreground hover:text-accent transition-colors" size={20} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                      {material.title}
                    </h3>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Icon name="MessageCircle" size={16} />
                        {material.comments}
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Heart" size={16} />
                        {material.likes}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-16 py-12">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-5xl font-bold mb-8 animate-fade-in">О платформе</h2>
                  <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground animate-slide-up">
                    <p className="text-xl leading-relaxed">
                      Online Методист — это современная образовательная платформа, созданная для профессионального развития педагогов и методистов.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Мы объединяем лучшие практики, инновационные методики и активное сообщество специалистов, которые стремятся к постоянному развитию и обмену опытом.
                    </p>
                  </div>
                </div>
                <div className="animate-fade-in">
                  <img 
                    src="https://cdn.poehali.dev/projects/c34c982a-d1c7-408c-81af-f078146dd9ef/files/118b1c78-1535-4e6b-9827-f9a0963a3c39.jpg" 
                    alt="Сообщество педагогов"
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/50 py-16">
              <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-3xl font-bold text-center mb-12">Платформа в цифрах</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { number: '500+', label: 'Пользователей' },
                    { number: '200+', label: 'Материалов' },
                    { number: '50+', label: 'Экспертов' },
                    { number: '98%', label: 'Удовлетворённость' },
                  ].map((stat, i) => (
                    <Card key={i} className="text-center p-8 hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                      <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'contacts':
        return (
          <div className="max-w-2xl mx-auto px-6 py-12">
            <h2 className="text-5xl font-bold mb-8 animate-fade-in">Контакты</h2>
            <Card className="p-8 animate-scale-in">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@online-metodist.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">Москва, ул. Образования, д. 10</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Online Методист
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-2">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'materials', label: 'Материалы', icon: 'BookOpen' },
                { id: 'about', label: 'О платформе', icon: 'Info' },
                { id: 'contacts', label: 'Контакты', icon: 'Mail' },
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className="gap-2"
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </Button>
              ))}
            </div>

            <Button className="gap-2">
              <Icon name="User" size={18} />
              Личный кабинет
            </Button>
          </div>
        </div>
      </nav>

      <main>
        {renderContent()}
      </main>

      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50"
      >
        <Icon name={isChatOpen ? 'X' : 'MessageCircle'} className="text-white" size={24} />
      </button>

      {isChatOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[500px] shadow-2xl animate-scale-in z-50">
          <div className="h-full flex flex-col">
            <div className="p-4 border-b bg-gradient-to-r from-primary to-accent">
              <h3 className="font-bold text-white flex items-center gap-2">
                <Icon name="Users" size={20} />
                Чат сообщества
              </h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg) => (
                <div key={msg.id} className="flex gap-3 animate-fade-in">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-primary text-white text-sm">
                      {msg.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-bold text-sm">{msg.user}</span>
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                    </div>
                    <div className="bg-secondary/50 rounded-2xl rounded-tl-none p-3 text-sm">
                      {msg.message}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t space-y-2">
              <Textarea
                placeholder="Написать сообщение..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), sendMessage())}
                className="min-h-[60px] resize-none"
              />
              <Button onClick={sendMessage} className="w-full gap-2">
                <Icon name="Send" size={18} />
                Отправить
              </Button>
            </div>
          </div>
        </Card>
      )}

      <footer className="mt-24 border-t bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-bold mb-4">О проекте</h4>
              <p className="text-sm text-muted-foreground">
                Образовательная платформа для профессионального развития педагогов
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <p className="text-sm text-muted-foreground">
                info@online-metodist.ru<br />
                +7 (495) 123-45-67
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Следите за нами</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Icon name="Facebook" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={20} />
                <Icon name="Instagram" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={20} />
                <Icon name="Linkedin" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={20} />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2026 Online Методист. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
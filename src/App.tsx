import React, { useState } from 'react';
import { Home, MapPin, Wallet, Bell, User, Clock, CheckCircle2, Navigation, Trash2, Camera, ShieldCheck, CreditCard, ChevronRight, FileText, Settings, LogOut, Search } from 'lucide-react';

type Screen = 'splash' | 'onboarding' | 'home' | 'sos-flow' | 'wallet' | 'success' | 'tracking' | 'requests' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [sosStep, setSosStep] = useState(1);
  const [wasteSize, setWasteSize] = useState('Medium');
  const [requestTab, setRequestTab] = useState('All');

  // Auto transition splash
  React.useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => setCurrentScreen('onboarding'), 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900 p-4">
      {/* Mobile Device Frame Container */}
      <div className="w-full max-w-[400px] h-[850px] max-h-full bg-background rounded-[40px] overflow-hidden shadow-2xl relative border-[8px] border-slate-800 flex flex-col font-sans">
        
        {currentScreen === 'splash' && (
          <div className="flex-1 flex flex-col items-center justify-center bg-primary text-primary-foreground">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-lg">
              <Trash2 className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-display font-bold tracking-tight mb-2">KÓLẸ̀</h1>
            <p className="text-primary-foreground/80 font-medium">Waste cleared. Life cleaner.</p>
          </div>
        )}

        {currentScreen === 'onboarding' && (
          <div className="flex-1 flex flex-col bg-background relative pb-8">
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center mt-12">
              <div className="w-64 h-64 bg-emerald-50 rounded-full mb-12 flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-emerald-100/50 rounded-full animate-ping opacity-50"></div>
                 <Trash2 className="w-24 h-24 text-primary relative z-10" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Waste pickup when you need it</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Don't wait for the next municipal collection. Request a verified collector whenever your waste piles up.
              </p>
            </div>
            <div className="px-6 space-y-3 w-full">
              <button 
                onClick={() => setCurrentScreen('home')}
                className="w-full h-14 bg-primary text-primary-foreground rounded-2xl font-semibold text-lg shadow-md shadow-primary/20 active:scale-[0.98] transition-all"
              >
                Get Started
              </button>
              <button 
                onClick={() => setCurrentScreen('home')}
                className="w-full h-14 bg-secondary text-secondary-foreground rounded-2xl font-semibold text-lg active:scale-[0.98] transition-all"
              >
                Log In
              </button>
            </div>
          </div>
        )}

        {currentScreen === 'home' && (
          <div className="flex-1 flex flex-col bg-background pb-20">
            {/* Header */}
            <div className="bg-primary px-6 pt-12 pb-6 text-primary-foreground rounded-b-[32px] shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-primary-foreground/80 font-medium mb-1">Good morning, Matthew 👋</p>
                  <div className="flex items-center gap-1.5 font-semibold">
                    <MapPin className="w-4 h-4" />
                    <span>Osogbo, Osun State</span>
                  </div>
                </div>
                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-primary"></span>
                </button>
              </div>

              {/* Hero Card */}
              <div className="bg-white text-card-foreground p-6 rounded-[24px] shadow-xl shadow-primary/10">
                <h3 className="font-display font-bold text-xl mb-2">Need your waste cleared?</h3>
                <p className="text-muted-foreground text-sm mb-5">Request an on-demand pickup from a verified collector.</p>
                <button 
                  onClick={() => { setSosStep(1); setCurrentScreen('sos-flow'); }}
                  className="w-full h-14 bg-red-500 hover:bg-red-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-red-500/30 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
                >
                  <Bell className="w-5 h-5" />
                  SOS PICKUP
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 pb-24 space-y-6">
              
              {/* Active Pickup (Empty State) */}
              <div>
                <h4 className="font-bold text-lg mb-3">Active Pickup</h4>
                <div className="bg-secondary p-5 rounded-2xl border border-border flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h5 className="font-semibold text-foreground">You're all clear!</h5>
                  <p className="text-sm text-muted-foreground mt-1">Your next pickup will appear here.</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h4 className="font-bold text-lg mb-3">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Navigation, label: 'Track Pickup', color: 'text-blue-500', bg: 'bg-blue-50', act: () => setCurrentScreen('tracking') },
                    { icon: CreditCard, label: 'Payment', color: 'text-purple-500', bg: 'bg-purple-50', act: () => setCurrentScreen('wallet') },
                    { icon: Clock, label: 'History', color: 'text-orange-500', bg: 'bg-orange-50', act: () => setCurrentScreen('requests') },
                    { icon: ShieldCheck, label: 'Support', color: 'text-teal-500', bg: 'bg-teal-50', act: () => setCurrentScreen('profile') },
                  ].map((item, i) => (
                    <button key={i} onClick={item.act} className="bg-card p-4 rounded-2xl border border-border shadow-sm flex flex-col items-start gap-3 active:scale-95 transition-transform text-left">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.bg}`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <span className="font-semibold text-sm">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-lg">Recent Activity</h4>
                  <button onClick={() => setCurrentScreen('requests')} className="text-primary text-sm font-semibold active:opacity-70">See All</button>
                </div>
                <div className="space-y-3">
                  {[1, 2].map((_, i) => (
                    <div key={i} className="bg-card p-4 rounded-2xl border border-border flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                          <Trash2 className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold">Waste Pickup</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{i === 0 ? 'Sept 5, 2026' : 'Aug 30, 2026'}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-foreground">₦1,500</p>
                        <span className="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md text-[10px] font-bold mt-1">COMPLETED</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <BottomNav current="home" onNav={setCurrentScreen} />
          </div>
        )}

        {currentScreen === 'sos-flow' && (
          <div className="flex-1 flex flex-col bg-secondary">
            <div className="bg-card px-4 pt-12 pb-4 flex items-center gap-4 shadow-sm z-10">
              <button onClick={() => sosStep > 1 ? setSosStep(sosStep - 1) : setCurrentScreen('home')} className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full">
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <h2 className="font-display font-bold text-lg flex-1 text-center pr-10">
                {sosStep === 1 ? 'Location' : sosStep === 2 ? 'Waste Details' : sosStep === 3 ? 'Review Pickup' : 'Payment'}
              </h2>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              {sosStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-display">Where should we pick up your waste?</h3>
                  <div className="bg-card p-4 rounded-2xl border border-border shadow-sm flex items-center gap-4 border-primary/50 ring-2 ring-primary/20">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Current Location</p>
                      <p className="font-semibold text-sm">12, Hospital Road, Oke-Fia</p>
                      <p className="text-xs text-muted-foreground">Osogbo, Osun State</p>
                    </div>
                  </div>
                  
                  <div className="h-48 bg-emerald-50 rounded-2xl border border-border relative overflow-hidden flex items-center justify-center">
                    {/* Fake Map */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <div className="w-10 h-10 bg-primary/20 rounded-full animate-ping absolute"></div>
                    <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-md relative z-10"></div>
                  </div>
                </div>
              )}

              {sosStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-display">Tell us about the waste</h3>
                  <div className="space-y-3">
                    {[
                      { title: 'Small', desc: '1–2 bags' },
                      { title: 'Medium', desc: '3–5 bags' },
                      { title: 'Large', desc: '6+ bags' }
                    ].map((item, i) => {
                      const isActive = wasteSize === item.title;
                      return (
                        <button key={i} onClick={() => setWasteSize(item.title)} className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all active:scale-[0.98] ${isActive ? 'border-primary ring-2 ring-primary/20 bg-primary/5' : 'border-border bg-card'}`}>
                          <div>
                            <p className="font-bold text-lg">{item.title}</p>
                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isActive ? 'border-primary bg-primary' : 'border-slate-300'}`}>
                            {isActive && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <button className="w-full p-4 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center gap-2 bg-card text-muted-foreground hover:bg-secondary">
                    <Camera className="w-8 h-8" />
                    <span className="font-semibold">Upload Photo (Optional)</span>
                  </button>
                </div>
              )}

              {sosStep === 3 && (
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-3xl border border-border shadow-sm">
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <span className="text-muted-foreground font-medium">Service</span>
                      <span className="font-bold text-red-500">SOS Waste Pickup</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-border">
                      <span className="text-muted-foreground font-medium">Location</span>
                      <span className="font-bold text-right">Oke-Fia, Osogbo</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-border">
                      <span className="text-muted-foreground font-medium">Volume</span>
                      <span className="font-bold">{wasteSize} ({wasteSize === 'Small' ? '1-2 bags' : wasteSize === 'Medium' ? '3-5 bags' : '6+ bags'})</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-border">
                      <span className="text-muted-foreground font-medium">Time</span>
                      <span className="font-bold bg-primary/10 text-primary px-3 py-1 rounded-lg">ASAP</span>
                    </div>
                    
                    <div className="pt-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">Service fee</span>
                        <span className="font-medium">₦1,500</span>
                      </div>
                      <div className="flex justify-between items-center text-xl mt-4">
                        <span className="font-bold text-foreground">Total</span>
                        <span className="font-bold font-display text-primary">₦1,500</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-center text-muted-foreground font-medium flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    Payment required before dispatch
                  </p>
                </div>
              )}
            </div>

            <div className="p-6 bg-card border-t border-border">
              <button 
                onClick={() => sosStep < 3 ? setSosStep(sosStep + 1) : setCurrentScreen('success')}
                className="w-full h-14 bg-primary text-primary-foreground rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 active:scale-[0.98] transition-all"
              >
                {sosStep === 3 ? 'Pay ₦1,500' : 'Continue'}
              </button>
            </div>
          </div>
        )}

        {currentScreen === 'success' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-background">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-3">Pickup Request Received!</h2>
            <p className="text-muted-foreground text-lg mb-8">We're finding a verified collector near you.</p>
            
            <div className="w-full bg-secondary p-4 rounded-2xl mb-8 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Request ID</span>
                <span className="font-semibold text-sm">KL-20260907</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Amount</span>
                <span className="font-semibold text-sm">₦1,500</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-border">
                <span className="text-muted-foreground text-sm">Status</span>
                <span className="font-bold text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md animate-pulse">SEARCHING...</span>
              </div>
            </div>

            <button 
              onClick={() => setCurrentScreen('tracking')}
              className="w-full h-14 bg-primary text-primary-foreground rounded-2xl font-bold text-lg active:scale-[0.98] transition-all mb-4"
            >
              Track Pickup
            </button>
            <button 
              onClick={() => setCurrentScreen('home')}
              className="w-full h-14 bg-transparent text-muted-foreground font-semibold active:scale-[0.98] transition-all"
            >
              Back to Home
            </button>
          </div>
        )}

        {currentScreen === 'tracking' && (
          <div className="flex-1 flex flex-col bg-background">
            {/* Fake Map Area */}
            <div className="h-64 bg-slate-200 relative overflow-hidden shrink-0">
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
               {/* Route Line */}
               <div className="absolute top-1/2 left-1/4 right-1/4 h-1 bg-primary/50"></div>
               {/* Points */}
               <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-4 border-primary shadow-lg z-10 flex items-center justify-center">
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
               </div>
               <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl z-10 flex items-center justify-center text-xl">
                 🛺
               </div>
               
               <button onClick={() => setCurrentScreen('home')} className="absolute top-12 left-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-20">
                 <ChevronRight className="w-5 h-5 rotate-180" />
               </button>
            </div>

            <div className="flex-1 bg-card rounded-t-3xl -mt-6 z-10 p-6 flex flex-col shadow-[0_-8px_30px_rgba(0,0,0,0.05)]">
              <div className="w-12 h-1.5 bg-border rounded-full mx-auto mb-6"></div>
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-display font-bold text-2xl mb-1">In Transit</h3>
                  <p className="text-muted-foreground">Arriving in <span className="font-bold text-primary">12 mins</span></p>
                </div>
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-xl ring-4 ring-white shadow-sm">
                  KL
                </div>
              </div>

              {/* Collector Info */}
              <div className="bg-secondary p-4 rounded-2xl flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-slate-300 rounded-full overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop" alt="Collector" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-foreground">Adebayo Ibrahim</h4>
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <span>4.8</span>
                    <span className="text-yellow-400">⭐</span>
                    <span className="mx-1">•</span>
                    <span>Waste Tricycle</span>
                  </p>
                </div>
                <button className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <User className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Steps */}
              <div className="space-y-6 pl-2 relative flex-1">
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border"></div>
                {[
                  { title: 'Request Accepted', desc: '10:42 AM', done: true },
                  { title: 'Collector In Transit', desc: '10:45 AM', active: true },
                  { title: 'Waste Collected', desc: 'Pending' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 relative z-10">
                    <div className={`w-5 h-5 rounded-full mt-1 flex-shrink-0 flex items-center justify-center ${step.done ? 'bg-primary' : step.active ? 'bg-white border-4 border-primary shadow-[0_0_0_4px_rgba(5,150,105,0.1)]' : 'bg-slate-200'}`}>
                      {step.done && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                    <div>
                      <p className={`font-semibold ${step.active ? 'text-primary text-lg' : step.done ? 'text-foreground' : 'text-muted-foreground'}`}>{step.title}</p>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentScreen === 'wallet' && (
          <div className="flex-1 flex flex-col bg-background pb-20">
            <div className="bg-slate-900 px-6 pt-14 pb-8 text-white rounded-b-[32px] shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <button onClick={() => setCurrentScreen('home')} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </button>
                <h2 className="font-display font-bold text-xl">Payment History</h2>
              </div>

              <div className="relative z-10">
                <p className="text-white/70 font-medium mb-1">Total Spent</p>
                <h3 className="text-4xl font-display font-bold mb-4">₦7,500</h3>
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <Trash2 className="w-4 h-4" />
                  <span className="font-semibold text-sm">5 Pickups Completed</span>
                </div>
              </div>
            </div>

            <div className="flex-1 px-6 py-6 overflow-y-auto">
              <h4 className="font-bold text-lg mb-4">Recent Transactions</h4>
              <div className="space-y-4">
                {[
                  { date: 'Sept 7, 2026', time: '10:45 AM' },
                  { date: 'Sept 1, 2026', time: '02:15 PM' },
                  { date: 'Aug 24, 2026', time: '09:30 AM' },
                  { date: 'Aug 10, 2026', time: '11:20 AM' },
                  { date: 'Aug 02, 2026', time: '04:50 PM' },
                ].map((item, i) => (
                  <div key={i} className="bg-card p-4 rounded-2xl border border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                        <Trash2 className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">SOS Pickup</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.date} • {item.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">-₦1,500</p>
                      <p className="text-[10px] font-bold text-emerald-600 mt-1 uppercase">Successful</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <BottomNav current="wallet" onNav={setCurrentScreen} />
          </div>
        )}

        {currentScreen === 'requests' && (
          <div className="flex-1 flex flex-col bg-background pb-20">
            <div className="bg-card px-6 pt-12 pb-4 shadow-sm relative z-10 border-b border-border">
              <h2 className="font-display font-bold text-2xl mb-4">My Requests</h2>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {['All', 'Active', 'Completed', 'Cancelled'].map((tab, i) => (
                  <button key={i} onClick={() => setRequestTab(tab)} className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${requestTab === tab ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {[
                { id: 'KL-20260907-001', date: 'Sept 7, 2026', status: 'Completed', amount: '₦1,500', color: 'text-emerald-700 bg-emerald-100' },
                { id: 'KL-20260830-045', date: 'Aug 30, 2026', status: 'Completed', amount: '₦1,500', color: 'text-emerald-700 bg-emerald-100' },
                { id: 'KL-20260812-112', date: 'Aug 12, 2026', status: 'Cancelled', amount: '₦0', color: 'text-red-700 bg-red-100' },
              ].map((req, i) => (
                <div key={i} className="bg-card p-5 rounded-2xl border border-border shadow-sm flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold font-display text-foreground">{req.id}</p>
                      <p className="text-sm text-muted-foreground">{req.date}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase ${req.color}`}>
                      {req.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-end pt-3 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>Adebayo Ibrahim</span>
                    </div>
                    <p className="font-bold text-foreground">{req.amount}</p>
                  </div>
                </div>
              ))}
            </div>
            <BottomNav current="requests" onNav={setCurrentScreen} />
          </div>
        )}

        {currentScreen === 'profile' && (
          <div className="flex-1 flex flex-col bg-background pb-20">
            <div className="bg-card px-6 pt-12 pb-6 shadow-sm border-b border-border flex flex-col items-center text-center relative z-10">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary relative">
                <User className="w-10 h-10" />
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-white border border-border rounded-full flex items-center justify-center text-foreground shadow-sm">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <h2 className="font-display font-bold text-xl">Matthew O.</h2>
              <p className="text-muted-foreground text-sm">+234 801 234 5678</p>
              <p className="text-muted-foreground text-sm">matthew@example.com</p>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wider px-2">Account</h4>
                <div className="bg-card rounded-2xl border border-border overflow-hidden">
                  {[
                    { icon: User, label: 'Personal Information' },
                    { icon: MapPin, label: 'Saved Addresses' },
                    { icon: CreditCard, label: 'Payment Methods' },
                  ].map((item, i) => (
                    <button key={i} className="w-full p-4 flex items-center gap-4 hover:bg-secondary active:bg-secondary/70 transition-colors border-b border-border last:border-0 text-left">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-foreground" />
                      </div>
                      <span className="flex-1 font-medium">{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wider px-2">Preferences</h4>
                <div className="bg-card rounded-2xl border border-border overflow-hidden">
                  {[
                    { icon: Bell, label: 'Notifications' },
                    { icon: ShieldCheck, label: 'Help & Support' },
                    { icon: FileText, label: 'Terms & Privacy' },
                  ].map((item, i) => (
                    <button key={i} className="w-full p-4 flex items-center gap-4 hover:bg-secondary active:bg-secondary/70 transition-colors border-b border-border last:border-0 text-left">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-foreground" />
                      </div>
                      <span className="flex-1 font-medium">{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={() => setCurrentScreen('splash')} className="w-full p-4 flex items-center gap-4 hover:bg-red-50 text-red-600 transition-colors bg-card rounded-2xl border border-red-100">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <LogOut className="w-4 h-4" />
                </div>
                <span className="flex-1 font-bold">Logout</span>
              </button>
            </div>
            <BottomNav current="profile" onNav={setCurrentScreen} />
          </div>
        )}

      </div>
    </div>
  );
}

function BottomNav({ current, onNav }: { current: string, onNav: (s: Screen) => void }) {
  const items = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'requests', icon: Clock, label: 'Requests' },
    { id: 'wallet', icon: Wallet, label: 'Wallet' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-card border-t border-border flex items-center justify-around px-2 pb-2 z-50 rounded-b-[32px]">
      {items.map(item => {
        const isActive = current === item.id;
        const Icon = item.icon;
        return (
          <button 
            key={item.id} 
            onClick={() => onNav(item.id as Screen)}
            className={`flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <div className={`relative p-1 ${isActive ? 'scale-110' : ''} transition-transform`}>
              <Icon className={`w-6 h-6 ${isActive ? 'fill-primary/20' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
              {isActive && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>}
            </div>
            <span className="text-[10px] font-semibold">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

import { Shield, MapPin, Users, ClipboardCheck, Crosshair, Bell, Search, Filter, Chrome as Home, Calendar, Activity, CircleAlert as AlertCircle, FileText, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Create custom icons for the map
const blueIcon = L.divIcon({
  className: 'custom-icon',
  html: '<div class="w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-md flex items-center justify-center relative group-hover:scale-110 transition-transform"><div class="absolute -inset-1 bg-blue-500/20 rounded-full animate-pulse"></div><div class="w-2 h-2 bg-white rounded-full relative z-10"></div></div>',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const emeraldIcon = L.divIcon({
  className: 'custom-icon',
  html: '<div class="w-6 h-6 bg-emerald-500 rounded-full border-2 border-white shadow-md flex items-center justify-center relative group-hover:scale-110 transition-transform"><div class="absolute -inset-1 bg-emerald-500/20 rounded-full animate-pulse delay-75"></div><div class="w-2 h-2 bg-white rounded-full relative z-10"></div></div>',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const purpleIcon = L.divIcon({
  className: 'custom-icon',
  html: '<div class="w-6 h-6 bg-purple-500 rounded-full border-2 border-white shadow-md flex items-center justify-center relative group-hover:scale-110 transition-transform"><div class="absolute -inset-1 bg-purple-500/20 rounded-full animate-pulse delay-150"></div><div class="w-2 h-2 bg-white rounded-full relative z-10"></div></div>',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

export function DashboardMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        setScale(containerRef.current.offsetWidth / 1440);
      }
    };
    
    // Initial scale
    updateScale();
    
    // Create a resize observer for the container
    const observer = new ResizeObserver(() => updateScale());
    if (containerRef.current) observer.observe(containerRef.current);
    
    window.addEventListener('resize', updateScale);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full rounded-[1.5rem] border border-slate-200/50 bg-white/80 shadow-[0_40px_100px_rgba(0,0,0,0.15)] ring-1 ring-slate-200/50 backdrop-blur-3xl overflow-hidden" style={{ aspectRatio: '1440 / 1000' }}>
      <div className="w-full h-full relative overflow-hidden">
        <div className="absolute top-0 left-0 origin-top-left" style={{ width: '1440px', height: '1000px', transform: `scale(${scale})` }}>
          
          <div className="w-[1440px] h-[1000px] bg-slate-50 overflow-hidden flex flex-col font-sans">
            
            {/* Window Header (Browser mockup) */}
            <div className="h-10 bg-white border-b border-slate-200 flex items-center px-6 gap-4 justify-between shrink-0 relative z-30 shadow-sm">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              <div className="w-1/2 max-w-sm h-6 bg-white border border-slate-300 rounded-md shadow-inner flex items-center justify-center">
                <span className="text-[10px] text-slate-500 font-medium tracking-wide">district.copmap.in</span>
              </div>
              <div className="w-16"></div>
            </div>

            {/* App Content */}
            <div className="flex flex-1 w-full overflow-hidden">
              
              {/* SIDEBAR */}
              <div className="w-[240px] bg-gradient-to-b from-[#0f172a] to-[#020617] shrink-0 flex flex-col border-r border-slate-800/50 z-20 text-slate-300 relative shadow-2xl">
                
                {/* Logo Area */}
                <div className="flex items-center gap-3 px-5 py-6">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 border border-white/10">
                    <Shield className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold leading-tight text-lg tracking-tight">CopMap</h3>
                    <p className="text-slate-400 text-[10px] tracking-wide uppercase">District Portal</p>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto px-3 py-2 space-y-6 no-scrollbar">
                  {/* Category 1 */}
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-3 block">Tactical Ops</span>
                    <div className="space-y-1">
                      <div className="bg-blue-600 text-white px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-3 shadow-[0_2px_10px_rgba(37,99,235,0.4)]">
                        <Home size={16} /> Control Center
                      </div>
                      <div className="hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 font-medium transition-colors cursor-pointer">
                        <MapPin size={16} /> Live Patrols
                      </div>
                      <div className="hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 font-medium transition-colors cursor-pointer">
                        <Shield size={16} /> Crowd Control
                      </div>
                      <div className="hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 font-medium transition-colors cursor-pointer">
                        <Users size={16} /> Force Deployment
                      </div>
                      <div className="hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 font-medium transition-colors cursor-pointer">
                        <Calendar size={16} /> Ops Calendar
                      </div>
                      <div className="hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 font-medium transition-colors cursor-pointer">
                        <Activity size={16} /> Event Logs
                      </div>
                      <div className="hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 font-medium transition-colors cursor-pointer">
                        <Crosshair size={16} /> Intercepts
                      </div>
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-3 block">Administration</span>
                    <div className="space-y-1">
                      <div className="hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 font-medium transition-colors cursor-pointer"><Shield size={16} /> Zones & Sectors</div>
                      <div className="hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 font-medium transition-colors cursor-pointer"><Users size={16} /> Personnel</div>
                      <div className="hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 font-medium transition-colors cursor-pointer"><ClipboardCheck size={16} /> Duty Rosters</div>
                      <div className="hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 font-medium transition-colors cursor-pointer"><FileText size={16} /> Dispatches</div>
                    </div>
                  </div>

                  {/* Category 3 */}
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-3 block">Field Assets</span>
                    <div className="space-y-1">
                      <div className="hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 font-medium transition-colors cursor-pointer"><MapPin size={16} /> Fixed Outposts</div>
                      <div className="hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 font-medium transition-colors cursor-pointer"><Crosshair size={16} /> Fleet Tracking</div>
                      <div className="hover:bg-white/5 hover:text-white px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 font-medium transition-colors cursor-pointer"><Shield size={16} /> Equipment</div>
                    </div>
                  </div>
                </div>

                {/* Sidebar Footer User */}
                <div className="mt-auto p-4 border-t border-white/10 flex items-center gap-3 cursor-pointer hover:bg-white/5 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Shield className="text-blue-400" size={14} />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h4 className="text-slate-200 font-semibold text-xs truncate">Command Center...</h4>
                  </div>
                  <ChevronDown size={14} className="text-slate-500 shrink-0" />
                </div>
              </div>

              {/* MAIN CONTENT PANE */}
              <div className="flex-1 flex flex-col overflow-hidden relative bg-[#f8fafc]">
                
                {/* Top Navbar */}
                <div className="h-[72px] bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 relative z-20">
                  <div className="flex items-center gap-4">
                    <div>
                      <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                        Overview
                        <span className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-md text-[9px] font-bold border border-emerald-200 shadow-sm ml-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>LIVE
                        </span>
                      </h1>
                      <p className="text-[11px] text-slate-500 mt-0.5">Real-time snapshot of policing operations and activities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {/* Search Input */}
                    <div className="flex items-center gap-2 bg-slate-100 rounded-lg px-4 py-2 w-72 text-slate-500">
                      <Search size={14} />
                      <span className="text-[13px]">Search locations, units, officers...</span>
                    </div>
                    {/* Filter */}
                    <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-4 py-2 text-slate-600 cursor-pointer hover:bg-slate-50 text-[13px] font-medium">
                      <Filter size={14} /> Filter
                    </div>
                    {/* Date */}
                    <div className="text-[13px] font-bold text-slate-700 px-2">
                      {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    {/* Actions */}
                    <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 cursor-pointer relative hover:bg-slate-50">
                      <Bell size={14} />
                      <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
                    </div>
                    {/* Profile */}
                    <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
                      <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
                        <img src="https://i.pravatar.cc/100?img=11" alt="Profile" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-slate-900 leading-tight">Officer A12</span>
                        <span className="text-[10px] text-slate-500 leading-tight">Sector 99 Supervisor</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Body */}
                <div className="flex-1 overflow-hidden p-8 flex flex-col gap-6">
                  
                  {/* Top Stats Row */}
                  <div className="grid grid-cols-5 gap-4 shrink-0">
                    {[
                      { title: "Active Units", value: "124", change: "+12%", color: "blue", icon: Shield },
                      { title: "Patrol Coverage", value: "78%", change: "+8%", color: "emerald", icon: Activity },
                      { title: "Active Checkpoints", value: "18", change: "+20%", color: "amber", icon: MapPin },
                      { title: "Events Today", value: "32", change: "+5%", color: "purple", icon: Calendar },
                      { title: "Incidents Reported", value: "7", change: "-13%", color: "cyan", icon: AlertCircle, down: true },
                    ].map((stat, i) => (
                      <div key={i} className="rounded-xl border p-5 flex flex-col justify-between h-32 relative overflow-hidden group hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer bg-white border-slate-200 shadow-sm">
                        <div className="flex items-start justify-between relative z-10">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${stat.color}-50 text-${stat.color}-600 border border-${stat.color}-100`}>
                            <stat.icon size={20} />
                          </div>
                          <div className={`text-[11px] font-bold flex items-center gap-1 px-2 py-1 rounded-full ${stat.down ? "bg-emerald-50 text-emerald-600" : "bg-emerald-50 text-emerald-600"}`}>
                            {stat.down ? "↓" : "↑"} {stat.change}
                          </div>
                        </div>
                        <div className="relative z-10">
                          <div className="text-3xl font-black tracking-tight text-slate-900">{stat.value}</div>
                          <div className="text-[10px] font-bold uppercase tracking-wider mt-1 text-slate-500">{stat.title}</div>
                        </div>
                        {/* Fake sparkline background */}
                        <div className="absolute bottom-0 left-0 right-0 h-12 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
                          <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                            <path d={`M0 40 L0 ${30 - i*5} Q 25 ${10 + i*10}, 50 ${25 - i*2} T 100 ${15 + i*3} L100 40 Z`} fill={`var(--tw-colors-${stat.color}-500)`} className={`fill-${stat.color}-500`} />
                            <path d={`M0 ${30 - i*5} Q 25 ${10 + i*10}, 50 ${25 - i*2} T 100 ${15 + i*3}`} fill="none" stroke={`var(--tw-colors-${stat.color}-500)`} strokeWidth="2" className={`stroke-${stat.color}-500`} />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Middle Row */}
                  <div className="grid grid-cols-3 gap-6 h-[400px] shrink-0">
                    
                    {/* Live Patrol Map */}
                    <div className="col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden group relative">
                      <div className="px-6 py-4 flex justify-between items-center border-b border-slate-200 z-10 bg-white absolute top-0 left-0 right-0">
                        <div className="flex items-center gap-3">
                          <h2 className="text-[15px] font-bold text-slate-900 tracking-tight">Live Patrol Map</h2>
                          <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                          </span>
                        </div>
                        <div className="flex gap-2 bg-slate-100 p-1 rounded-lg border border-slate-200/50">
                          <div className="px-4 py-1.5 bg-white text-blue-600 rounded-md text-[11px] font-bold cursor-pointer shadow-sm border border-slate-200">All Units</div>
                          <div className="px-4 py-1.5 text-slate-500 rounded-md text-[11px] font-bold cursor-pointer hover:bg-slate-200 transition-colors">Patrol</div>
                          <div className="px-4 py-1.5 text-slate-500 rounded-md text-[11px] font-bold cursor-pointer hover:bg-slate-200 transition-colors">Stations</div>
                        </div>
                      </div>
                      <div className="flex-1 relative overflow-hidden z-0 bg-slate-100 mt-[61px]">
                        <MapContainer center={[18.5204, 73.8567]} zoom={13} style={{ height: '100%', width: '100%', zIndex: 0 }} zoomControl={false}>
                          <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                            attribution='&copy; OpenStreetMap contributors'
                          />
                          <Marker position={[18.5204, 73.8567]} icon={blueIcon}>
                            <Popup className="rounded-xl overflow-hidden shadow-lg border-0">
                              <div className="p-1">
                                <div className="text-[12px] font-bold text-slate-900 mb-0.5">Patrol Unit Alpha</div>
                                <div className="text-[10px] text-slate-500 flex items-center gap-1"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Status: Active Patrolling</div>
                              </div>
                            </Popup>
                          </Marker>
                          <Marker position={[18.5300, 73.8600]} icon={emeraldIcon}>
                            <Popup className="rounded-xl overflow-hidden shadow-lg border-0">
                              <div className="p-1">
                                <div className="text-[12px] font-bold text-slate-900 mb-0.5">Interceptor Vehicle 4</div>
                                <div className="text-[10px] text-slate-500 flex items-center gap-1"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Status: In Transit</div>
                              </div>
                            </Popup>
                          </Marker>
                          <Marker position={[18.5100, 73.8700]} icon={purpleIcon}>
                            <Popup className="rounded-xl overflow-hidden shadow-lg border-0">
                              <div className="p-1">
                                <div className="text-[12px] font-bold text-slate-900 mb-0.5">Checkpoint Charlie</div>
                                <div className="text-[10px] text-slate-500 flex items-center gap-1"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Status: High Alert Verification</div>
                              </div>
                            </Popup>
                          </Marker>
                        </MapContainer>

                        {/* Data Overlay */}
                        <div className="absolute bottom-6 right-6 bg-white border border-slate-200 rounded-xl p-4 shadow-md w-56 z-20">
                          <div className="text-[10px] text-blue-600 font-mono mb-2 uppercase tracking-wider flex items-center justify-between"><span>Live Scan</span><Activity size={10} className="animate-pulse" /></div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center"><span className="text-slate-500 text-[11px]">Active Units</span><span className="text-slate-900 font-mono text-[11px]">124</span></div>
                            <div className="flex justify-between items-center"><span className="text-slate-500 text-[11px]">Anomalies</span><span className="text-rose-500 font-mono text-[11px]">0</span></div>
                            <div className="flex justify-between items-center"><span className="text-slate-500 text-[11px]">Network</span><span className="text-emerald-500 font-mono text-[11px]">99.8%</span></div>
                          </div>
                        </div>

                        {/* Map Legend Overlay */}
                        <div className="absolute bottom-6 left-6 bg-white border border-slate-200 rounded-xl p-4 shadow-md w-48 z-20">
                          <div className="flex items-center gap-3 mb-3"><div className="w-3 h-0.5 bg-blue-500"></div><span className="text-[10px] font-bold text-slate-700 tracking-wide">Patrol Route</span></div>
                          <div className="flex items-center gap-3 mb-3"><div className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm"></div><span className="text-[10px] font-bold text-slate-700 tracking-wide">Live Vehicle</span></div>
                          <div className="flex items-center gap-3 mb-3"><div className="w-2 h-2 rounded-full bg-purple-500 shadow-sm"></div><span className="text-[10px] font-bold text-slate-700 tracking-wide">Checkpoint</span></div>
                          <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-600 border border-white shadow-sm"></div><span className="text-[10px] font-bold text-slate-700 tracking-wide">Police Station</span></div>
                        </div>
                      </div>
                    </div>

                    {/* Alerts & Notifications */}
                    <div className="col-span-1 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden relative">
                      <div className="px-6 py-4 flex justify-between items-center border-b border-slate-200 bg-white z-10 absolute top-0 left-0 right-0">
                        <h2 className="text-[15px] font-bold text-slate-900 flex items-center gap-2 tracking-tight">
                          Alerts
                          <span className="bg-rose-100 text-rose-600 text-[9px] px-1.5 py-0.5 rounded font-black border border-rose-200">3 NEW</span>
                        </h2>
                        <span className="text-[11px] font-bold text-blue-600 cursor-pointer hover:text-blue-700 hover:underline transition-colors">View all</span>
                      </div>
                      <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-slate-50 pt-[61px]">
                        
                        <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex gap-4 hover:-translate-y-0.5 hover:shadow-md transition-all cursor-pointer relative overflow-hidden group">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"></div>
                          <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 shrink-0 group-hover:scale-110 transition-transform"><AlertCircle size={18} /></div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="text-[13px] font-bold text-slate-900 group-hover:text-rose-600 transition-colors leading-tight">VIP Movement at 04:00 PM</h4>
                              <span className="text-[9px] font-black text-rose-600 bg-rose-100 border border-rose-200 px-1.5 py-0.5 rounded uppercase tracking-wider">High</span>
                            </div>
                            <p className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5"><MapPin size={10} className="text-slate-400" /> Route 5 • Today 03:15 PM</p>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex gap-4 hover:-translate-y-0.5 hover:shadow-md transition-all cursor-pointer relative overflow-hidden group">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 group-hover:scale-110 transition-transform"><Users size={18} /></div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="text-[13px] font-bold text-slate-900 group-hover:text-purple-600 transition-colors leading-tight">Crowd Gathering Detected</h4>
                              <span className="text-[9px] font-black text-purple-600 bg-purple-100 border border-purple-200 px-1.5 py-0.5 rounded uppercase tracking-wider">Medium</span>
                            </div>
                            <p className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5"><MapPin size={10} className="text-slate-400" /> Main Market • Today 02:45 PM</p>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex gap-4 hover:-translate-y-0.5 hover:shadow-md transition-all cursor-pointer relative overflow-hidden group">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform"><Shield size={18} /></div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="text-[13px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">Checkpoint 7 Needs Attention</h4>
                              <span className="text-[9px] font-black text-blue-600 bg-blue-100 border border-blue-200 px-1.5 py-0.5 rounded uppercase tracking-wider">Low</span>
                            </div>
                            <p className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5"><MapPin size={10} className="text-slate-400" /> Ring Road • Today 02:20 PM</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="grid grid-cols-3 gap-6 shrink-0 h-64 pb-8">
                    
                    {/* Patrol Status */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-10 -mt-10 pointer-events-none transition-transform duration-700 group-hover:scale-125"></div>
                      <h2 className="text-[15px] font-bold text-slate-900 mb-6 relative z-10 tracking-tight">Patrol Status</h2>
                      <div className="flex items-center gap-8 flex-1 relative z-10">
                        {/* Fake Donut Chart */}
                        <div className="relative w-28 h-28 shrink-0">
                          {/* Outer glowing ring */}
                          <div className="absolute inset-[-4px] rounded-full border border-slate-100 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]"></div>
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            {/* Background circle */}
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#f1f5f9" strokeWidth="12" />
                            {/* Segments */}
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#f43f5e" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="0" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.4)]" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="25" className="drop-shadow-[0_0_4px_rgba(245,158,11,0.4)]" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="60" className="drop-shadow-[0_0_4px_rgba(59,130,246,0.4)]" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="130" className="drop-shadow-[0_0_4px_rgba(16,185,129,0.4)] transition-all duration-1000" />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-black text-slate-900 leading-none tracking-tighter">124</span>
                            <span className="text-[8px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Total</span>
                          </div>
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex justify-between items-center text-[11px] font-bold group/item hover:translate-x-1 transition-transform cursor-default"><span className="flex items-center gap-2 text-slate-500"><div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_5px_#10b981]"></div>On Patrol</span><span className="text-slate-900 group-hover/item:text-emerald-600">68</span></div>
                          <div className="flex justify-between items-center text-[11px] font-bold group/item hover:translate-x-1 transition-transform cursor-default"><span className="flex items-center gap-2 text-slate-500"><div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_5px_#3b82f6]"></div>In Transit</span><span className="text-slate-900 group-hover/item:text-blue-600">36</span></div>
                          <div className="flex justify-between items-center text-[11px] font-bold group/item hover:translate-x-1 transition-transform cursor-default"><span className="flex items-center gap-2 text-slate-500"><div className="w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_5px_#f59e0b]"></div>On Break</span><span className="text-slate-900 group-hover/item:text-amber-500">12</span></div>
                          <div className="flex justify-between items-center text-[11px] font-bold group/item hover:translate-x-1 transition-transform cursor-default"><span className="flex items-center gap-2 text-slate-500"><div className="w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_5px_#f43f5e]"></div>Offline</span><span className="text-slate-900 group-hover/item:text-rose-500">8</span></div>
                        </div>
                      </div>
                    </div>

                    {/* Requirements Overview */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-10 -mt-10 pointer-events-none transition-transform duration-700 group-hover:scale-125"></div>
                      <div className="flex justify-between items-center mb-6 relative z-10">
                        <h2 className="text-[15px] font-bold text-slate-900 tracking-tight">Requirements</h2>
                        <span className="text-[11px] font-bold text-blue-600 cursor-pointer hover:underline transition-colors">View all</span>
                      </div>
                      <div className="space-y-3.5 flex-1 relative z-10">
                        <div className="flex justify-between items-center bg-slate-50 p-3.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer group/req">
                          <div className="flex items-center gap-3"><div className="p-2 bg-white text-blue-600 rounded-lg shadow-sm border border-slate-200 group-hover/req:bg-blue-600 group-hover/req:text-white transition-colors"><FileText size={14} /></div><span className="text-[12px] font-bold text-slate-900">Total Requirements</span></div>
                          <span className="text-[14px] font-black text-slate-900">33</span>
                        </div>
                        <div className="flex justify-between items-center bg-rose-50/50 p-3.5 rounded-xl border border-rose-200 hover:border-rose-300 hover:shadow-sm transition-all cursor-pointer group/req">
                          <div className="flex items-center gap-3"><div className="p-2 bg-white text-rose-600 rounded-lg shadow-sm border border-rose-200 group-hover/req:bg-rose-600 group-hover/req:text-white transition-colors"><AlertCircle size={14} /></div><span className="text-[12px] font-bold text-slate-900">Pending Action</span></div>
                          <span className="text-[14px] font-black text-rose-600">2</span>
                        </div>
                        <div className="flex justify-between items-center bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-200 hover:border-emerald-300 hover:shadow-sm transition-all cursor-pointer group/req">
                          <div className="flex items-center gap-3"><div className="p-2 bg-white text-emerald-600 rounded-lg shadow-sm border border-emerald-200 group-hover/req:bg-emerald-600 group-hover/req:text-white transition-colors"><Shield size={14} /></div><span className="text-[12px] font-bold text-slate-900">Concluded</span></div>
                          <span className="text-[14px] font-black text-emerald-600">28</span>
                        </div>
                      </div>
                    </div>

                    {/* Top Activity */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-10 -mt-10 pointer-events-none transition-transform duration-700 group-hover:scale-125"></div>
                      <div className="flex justify-between items-center mb-6 relative z-10">
                        <h2 className="text-[15px] font-bold text-slate-900 tracking-tight">Top Activity</h2>
                        <span className="text-[11px] font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded cursor-pointer transition-colors border border-slate-300">Today</span>
                      </div>
                      <div className="space-y-6 flex-1 relative z-10">
                        <div className="group/bar cursor-pointer">
                          <div className="flex justify-between text-[11px] font-bold mb-2"><span className="text-slate-700 group-hover/bar:text-blue-600 transition-colors">Patrolling</span><span className="text-slate-900 group-hover/bar:scale-110 origin-right transition-transform">46%</span></div>
                          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden shadow-inner"><div className="w-[46%] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full relative"><div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 skew-x-[-20deg] group-hover/bar:translate-x-4 transition-transform"></div></div></div>
                        </div>
                        <div className="group/bar cursor-pointer">
                          <div className="flex justify-between text-[11px] font-bold mb-2"><span className="text-slate-700 group-hover/bar:text-purple-600 transition-colors">Bandobast</span><span className="text-slate-900 group-hover/bar:scale-110 origin-right transition-transform">28%</span></div>
                          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden shadow-inner"><div className="w-[28%] h-full bg-gradient-to-r from-purple-600 to-fuchsia-400 rounded-full relative"><div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 skew-x-[-20deg] group-hover/bar:translate-x-4 transition-transform"></div></div></div>
                        </div>
                        <div className="group/bar cursor-pointer">
                          <div className="flex justify-between text-[11px] font-bold mb-2"><span className="text-slate-700 group-hover/bar:text-emerald-600 transition-colors">Traffic Control</span><span className="text-slate-900 group-hover/bar:scale-110 origin-right transition-transform">16%</span></div>
                          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden shadow-inner"><div className="w-[16%] h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full relative"><div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 skew-x-[-20deg] group-hover/bar:translate-x-4 transition-transform"></div></div></div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

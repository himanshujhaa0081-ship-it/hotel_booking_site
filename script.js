// ===================== DATA =====================

const HOTELS = [
  // ================= MUMBAI =================
  {
    id: 1, name: "The Taj Mahal Palace", city: "Mumbai", type: "Luxury", rating: 4.9, reviews: 2340, 
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80", badge: "Featured", priceFrom: 8500, 
    amenities: ["Pool", "Spa", "Gym", "Restaurant", "WiFi"], desc: "An iconic landmark overlooking the Arabian Sea.",
    rooms: [
      { id: "r1", name: "Standard Room", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80", price: 8500, size: "35 sqm", beds: "Twin Beds", view: "City View", tags: ["AC", "WiFi", "Minibar"] },
      { id: "r2", name: "Executive Room", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80", price: 12000, size: "45 sqm", beds: "King Bed", view: "Sea View", tags: ["AC", "WiFi", "Lounge Access"] },
      { id: "r3", name: "Luxury Suite", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80", price: 18500, size: "90 sqm", beds: "King Bed", view: "Sea View", tags: ["AC", "WiFi", "Jacuzzi", "Butler"] }
    ]
  },
  {
    id: 2, name: "Novotel Mumbai Juhu Beach", city: "Mumbai", type: "Business", rating: 4.5, reviews: 3200, 
    img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80", badge: "Business", priceFrom: 5500, 
    amenities: ["Beachfront", "Pool", "Restaurant", "WiFi"], desc: "Modern business hotel located right on Juhu Beach.",
    rooms: [
      { id: "r4", name: "Standard Room", img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80", price: 5500, size: "30 sqm", beds: "Queen Bed", view: "City View", tags: ["AC", "WiFi", "Work Desk"] },
      { id: "r5", name: "Executive Room", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80", price: 7500, size: "40 sqm", beds: "King Bed", view: "Ocean View", tags: ["AC", "WiFi", "Breakfast"] },
      { id: "r6", name: "Executive Suite", img: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&q=80", price: 11000, size: "60 sqm", beds: "King Bed", view: "Ocean View", tags: ["AC", "WiFi", "Lounge"] }
    ]
  },
  {
    id: 3, name: "Trident Nariman Point", city: "Mumbai", type: "Luxury", rating: 4.7, reviews: 2100, 
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", badge: "Popular", priceFrom: 7000, 
    amenities: ["Spa", "Pool", "Gym", "WiFi"], desc: "Five-star luxury with stunning views of the Marine Drive.",
    rooms: [
      { id: "r7", name: "Standard Room", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80", price: 7000, size: "32 sqm", beds: "Queen Bed", view: "City View", tags: ["AC", "WiFi"] },
      { id: "r8", name: "Executive Room", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80", price: 9500, size: "42 sqm", beds: "King Bed", view: "Ocean View", tags: ["AC", "WiFi", "Breakfast"] },
      { id: "r9", name: "Trident Suite", img: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=600&q=80", price: 15000, size: "75 sqm", beds: "King Bed", view: "Ocean View", tags: ["AC", "WiFi", "Butler"] }
    ]
  },

  // ================= DELHI =================
  {
    id: 4, name: "ITC Grand Bharat", city: "Delhi", type: "Luxury", rating: 4.8, reviews: 1870, 
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80", badge: "Best Seller", priceFrom: 8000, 
    amenities: ["Golf", "Spa", "Pool", "Restaurant", "WiFi"], desc: "Pristine natural surroundings offering an ultimate luxury retreat.",
    rooms: [
      { id: "r10", name: "Standard Room", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80", price: 8000, size: "40 sqm", beds: "Queen Bed", view: "Garden View", tags: ["AC", "WiFi"] },
      { id: "r11", name: "Premium Room", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80", price: 11000, size: "50 sqm", beds: "King Bed", view: "Golf Course View", tags: ["AC", "WiFi", "Bathtub"] },
      { id: "r12", name: "Presidential Suite", img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80", price: 22000, size: "120 sqm", beds: "King Bed", view: "Golf Course View", tags: ["AC", "WiFi", "Butler", "Jacuzzi"] }
    ]
  },
  {
    id: 5, name: "The Leela Palace", city: "Delhi", type: "Heritage", rating: 4.9, reviews: 2400, 
    img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80", badge: "Heritage", priceFrom: 9500, 
    amenities: ["Spa", "Pool", "Fine Dining", "WiFi"], desc: "Experience the grandeur of Indian architecture and royal hospitality.",
    rooms: [
      { id: "r13", name: "Standard Room", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80", price: 9500, size: "45 sqm", beds: "King Bed", view: "City View", tags: ["AC", "WiFi"] },
      { id: "r14", name: "Executive Room", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80", price: 13000, size: "55 sqm", beds: "King Bed", view: "Garden View", tags: ["AC", "WiFi", "Lounge"] },
      { id: "r15", name: "Royal Suite", img: "https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=600&q=80", price: 25000, size: "100 sqm", beds: "King Bed", view: "Palace Garden", tags: ["AC", "WiFi", "Butler"] }
    ]
  },
  {
    id: 6, name: "Radisson Blu Plaza", city: "Delhi", type: "Business", rating: 4.6, reviews: 1500, 
    img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80", badge: "Business", priceFrom: 6000, 
    amenities: ["Airport Shuttle", "Pool", "Gym", "WiFi"], desc: "Conveniently located near the airport, perfect for transit and business.",
    rooms: [
      { id: "r16", name: "Standard Room", img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80", price: 6000, size: "35 sqm", beds: "Queen Bed", view: "City View", tags: ["AC", "WiFi"] },
      { id: "r17", name: "Executive Room", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80", price: 8500, size: "45 sqm", beds: "King Bed", view: "Pool View", tags: ["AC", "WiFi", "Breakfast"] },
      { id: "r18", name: "Plaza Suite", img: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&q=80", price: 14000, size: "65 sqm", beds: "King Bed", view: "Pool View", tags: ["AC", "WiFi", "Lounge"] }
    ]
  },

  // ================= AHMEDABAD =================
  {
    id: 7, name: "Hyatt Regency", city: "Ahmedabad", type: "Luxury", rating: 4.6, reviews: 1200, 
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", badge: "Popular", priceFrom: 5500, 
    amenities: ["Pool", "Gym", "Restaurant", "WiFi"], desc: "Luxury stay in Ahmedabad with beautiful riverfront views.",
    rooms: [
      { id: "r19", name: "Standard Room", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80", price: 5500, size: "38 sqm", beds: "Twin Beds", view: "City View", tags: ["AC", "WiFi", "Minibar"] },
      { id: "r20", name: "Club Room", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80", price: 8000, size: "45 sqm", beds: "King Bed", view: "River View", tags: ["AC", "WiFi", "Lounge Access"] },
      { id: "r21", name: "Regency Suite", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80", price: 14000, size: "75 sqm", beds: "King Bed", view: "River View", tags: ["AC", "WiFi", "Bathtub"] }
    ]
  },
  {
    id: 8, name: "Courtyard by Marriott", city: "Ahmedabad", type: "Business", rating: 4.6, reviews: 860, 
    img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80", badge: "Business", priceFrom: 4600, 
    amenities: ["Gym", "Restaurant", "Conference", "WiFi"], desc: "Perfect stay for business travellers located in the commercial hub.",
    rooms: [
      { id: "r22", name: "Standard Room", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80", price: 4600, size: "35 sqm", beds: "Queen Bed", view: "City View", tags: ["AC", "WiFi", "Work Desk"] },
      { id: "r23", name: "Executive Room", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80", price: 6500, size: "42 sqm", beds: "King Bed", view: "City View", tags: ["AC", "WiFi", "Breakfast"] },
      { id: "r24", name: "Courtyard Suite", img: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=600&q=80", price: 11000, size: "65 sqm", beds: "King Bed", view: "City Skyline", tags: ["AC", "WiFi", "Lounge"] }
    ]
  },
  {
    id: 9, name: "Taj Skyline", city: "Ahmedabad", type: "Luxury", rating: 4.8, reviews: 950, 
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80", badge: "Top Rated", priceFrom: 6500, 
    amenities: ["Pool", "Spa", "Fine Dining", "WiFi"], desc: "Experience the signature Taj hospitality in the heart of Gujarat.",
    rooms: [
      { id: "r25", name: "Standard Room", img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80", price: 6500, size: "40 sqm", beds: "King Bed", view: "City View", tags: ["AC", "WiFi"] },
      { id: "r26", name: "Executive Room", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80", price: 9000, size: "50 sqm", beds: "King Bed", view: "Skyline View", tags: ["AC", "WiFi", "Lounge Access"] },
      { id: "r27", name: "Skyline Suite", img: "https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=600&q=80", price: 16000, size: "85 sqm", beds: "King Bed", view: "Panoramic View", tags: ["AC", "WiFi", "Bathtub", "Butler"] }
    ]
  },

  // ================= GOA =================
  {
    id: 10, name: "W Goa Resort", city: "Goa", type: "Resort", rating: 4.7, reviews: 2100, 
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80", badge: "Hot Deal", priceFrom: 8500, 
    amenities: ["Beach", "Pool", "Spa", "Nightclub", "WiFi"], desc: "A bold, design-forward resort right on the shores of Vagator Beach.",
    rooms: [
      { id: "r28", name: "Standard Room", img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80", price: 8500, size: "40 sqm", beds: "King Bed", view: "Garden View", tags: ["AC", "WiFi", "Balcony"] },
      { id: "r29", name: "Executive Room", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80", price: 12000, size: "55 sqm", beds: "King Bed", view: "Pool View", tags: ["AC", "WiFi", "Balcony"] },
      { id: "r30", name: "Spectacular Suite", img: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=600&q=80", price: 18000, size: "80 sqm", beds: "King Bed", view: "Ocean View", tags: ["AC", "WiFi", "Plunge Pool"] }
    ]
  },
  {
    id: 11, name: "Taj Exotica Resort & Spa", city: "Goa", type: "Resort", rating: 4.9, reviews: 3000, 
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80", badge: "Luxury", priceFrom: 11000, 
    amenities: ["Private Beach", "Golf", "Spa", "WiFi"], desc: "Mediterranean-style resort set across 56 acres of lush gardens.",
    rooms: [
      { id: "r31", name: "Standard Room", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80", price: 11000, size: "45 sqm", beds: "King Bed", view: "Garden View", tags: ["AC", "WiFi"] },
      { id: "r32", name: "Executive Room", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80", price: 15000, size: "60 sqm", beds: "King Bed", view: "Sea View", tags: ["AC", "WiFi", "Patio"] },
      { id: "r33", name: "Presidential Villa", img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80", price: 35000, size: "150 sqm", beds: "King Bed", view: "Sea View", tags: ["AC", "WiFi", "Private Pool"] }
    ]
  },
  {
    id: 12, name: "Hard Rock Hotel", city: "Goa", type: "Resort", rating: 4.5, reviews: 1800, 
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80", badge: "Popular", priceFrom: 6500, 
    amenities: ["Live Music", "Pool", "Bar", "WiFi"], desc: "Feel like a rockstar in this energetic and musically themed hotel.",
    rooms: [
      { id: "r34", name: "Standard Room", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80", price: 6500, size: "35 sqm", beds: "Queen Bed", view: "Pool View", tags: ["AC", "WiFi"] },
      { id: "r35", name: "Executive Room", img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80", price: 8500, size: "45 sqm", beds: "King Bed", view: "Pool View", tags: ["AC", "WiFi", "Breakfast"] },
      { id: "r36", name: "Rock Star Suite", img: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&q=80", price: 14000, size: "70 sqm", beds: "King Bed", view: "Pool View", tags: ["AC", "WiFi", "Lounge"] }
    ]
  },

  // ================= BENGALURU =================
  {
    id: 13, name: "The Leela Palace", city: "Bengaluru", type: "Luxury", rating: 4.8, reviews: 1980, 
    img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80", badge: "Top Rated", priceFrom: 9000, 
    amenities: ["Spa", "Pool", "Gym", "Rooftop Bar", "WiFi"], desc: "An urban oasis offering world-class service in the tech capital.",
    rooms: [
      { id: "r37", name: "Standard Room", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80", price: 9000, size: "45 sqm", beds: "King Bed", view: "City View", tags: ["AC", "WiFi"] },
      { id: "r38", name: "Executive Room", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80", price: 12500, size: "55 sqm", beds: "King Bed", view: "Garden View", tags: ["AC", "WiFi", "Lounge Access"] },
      { id: "r39", name: "Royal Suite", img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80", price: 21000, size: "95 sqm", beds: "King Bed", view: "Garden View", tags: ["AC", "WiFi", "Jacuzzi"] }
    ]
  },
  {
    id: 14, name: "ITC Gardenia", city: "Bengaluru", type: "Luxury", rating: 4.7, reviews: 1650, 
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", badge: "Eco-Friendly", priceFrom: 7500, 
    amenities: ["Pool", "Helipad", "Fine Dining", "WiFi"], desc: "A luxury hotel inspired by the magnificent gardens of the city.",
    rooms: [
      { id: "r40", name: "Standard Room", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80", price: 7500, size: "40 sqm", beds: "Queen Bed", view: "City View", tags: ["AC", "WiFi"] },
      { id: "r41", name: "Executive Room", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80", price: 10500, size: "50 sqm", beds: "King Bed", view: "Garden View", tags: ["AC", "WiFi", "Breakfast"] },
      { id: "r42", name: "Peacock Suite", img: "https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=600&q=80", price: 18000, size: "85 sqm", beds: "King Bed", view: "Garden View", tags: ["AC", "WiFi", "Butler"] }
    ]
  },
  {
    id: 15, name: "Taj MG Road", city: "Bengaluru", type: "Business", rating: 4.6, reviews: 1400, 
    img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80", badge: "Business", priceFrom: 6500, 
    amenities: ["Gym", "Pool", "Restaurant", "WiFi"], desc: "Located right in the center of the city's business and shopping district.",
    rooms: [
      { id: "r43", name: "Standard Room", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80", price: 6500, size: "35 sqm", beds: "Twin Beds", view: "City View", tags: ["AC", "WiFi", "Work Desk"] },
      { id: "r44", name: "Executive Room", img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80", price: 8500, size: "45 sqm", beds: "King Bed", view: "Lake View", tags: ["AC", "WiFi", "Lounge"] },
      { id: "r45", name: "Executive Suite", img: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&q=80", price: 13500, size: "65 sqm", beds: "King Bed", view: "Lake View", tags: ["AC", "WiFi", "Living Area"] }
    ]
  }
];

let state = {
  currentUser: null,
  users: [],
  bookings: [],
  currentHotel: null,
  currentRoom: null,
  cancelBookingId: null,
  paymentMethod: 'card',
  pendingBooking: null // Remembers what the user wanted to book before logging in
};

// Safety check for LocalStorage
try {
  state.currentUser = JSON.parse(localStorage.getItem('si_user')) || null;
  state.users = JSON.parse(localStorage.getItem('si_users')) || [];
  state.bookings = JSON.parse(localStorage.getItem('si_bookings')) || [];
} catch (e) {
  localStorage.clear();
}

// Init admin if not exists
if (!state.users.find(u => u.email === 'admin@stayindia.com')) {
  state.users.push({id:'admin_001',email:'admin@stayindia.com',password:'admin123',fname:'Admin',lname:'User',phone:'+91 00000 00000',role:'admin'});
  localStorage.setItem('si_users', JSON.stringify(state.users));
}

function save(){
  localStorage.setItem('si_users',JSON.stringify(state.users));
  localStorage.setItem('si_bookings',JSON.stringify(state.bookings));
  if(state.currentUser) localStorage.setItem('si_user',JSON.stringify(state.currentUser));
}

// ===================== UI HELPERS =====================
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
  updateNavState();
}

function toast(msg, type='success'){
  const t=document.getElementById('toast');
  t.textContent=msg;
  t.className='show '+(type==='success'?'success':'error');
  setTimeout(()=>t.className='',3000);
}

function updateNavState(){
  const u=state.currentUser;
  ['topbar-auth','nav-auth-btns'].forEach(id=>{const el=document.getElementById(id);if(el)el.classList.toggle('hidden',!!u)});
  ['topbar-user','nav-user-btn','nav-dashboard-link'].forEach(id=>{const el=document.getElementById(id);if(el)el.classList.toggle('hidden',!u)});
  const adminLink=document.getElementById('nav-admin-link');
  if(adminLink) adminLink.classList.toggle('hidden',!(u&&u.role==='admin'));
  if(u){
    const tn=document.getElementById('topbar-username');
    if(tn) tn.textContent='Hi, '+u.fname;
    const nn=document.getElementById('nav-user-name');
    if(nn) nn.textContent=u.fname;
    const hpu=document.getElementById('hotel-page-user-btn');
    if(hpu){hpu.textContent=u.fname;hpu.style.display='inline-flex'}
    const htu=document.getElementById('hotel-topbar-user');
    if(htu) htu.innerHTML='Hi, '+u.fname+' | <a href="#" onclick="logout()" style="color:#b8c4d8">Logout</a>';
  }
}

// ===================== AUTH =====================
function doLogin(){
  const email=document.getElementById('login-email').value.trim();
  const pass=document.getElementById('login-password').value;
  if(!email||!pass){toast('Please fill all fields','error');return}
  const user=state.users.find(u=>u.email===email&&u.password===pass);
  if(!user){toast('Invalid email or password','error');return}
  
  state.currentUser=user;
  localStorage.setItem('si_user',JSON.stringify(user));
  toast('Welcome back, '+user.fname+'!');
  
  if(user.role==='admin') {
    showPage('page-admin');
    renderAdminPage();
  } else if (state.pendingBooking) {
    // If they were trying to book a room, take them right back to it!
    openBooking(state.pendingBooking.hotelId, state.pendingBooking.roomId);
    state.pendingBooking = null; 
  } else {
    showDashboard();
  }
}

function doRegister(){
  const fname=document.getElementById('reg-fname').value.trim();
  const lname=document.getElementById('reg-lname').value.trim();
  const email=document.getElementById('reg-email').value.trim();
  const phone=document.getElementById('reg-phone').value.trim();
  const pass=document.getElementById('reg-password').value;
  if(!fname||!lname||!email||!phone||!pass){toast('Please fill all fields','error');return}
  if(pass.length<6){toast('Password must be at least 6 characters','error');return}
  if(state.users.find(u=>u.email===email)){toast('Email already registered','error');return}
  
  const user={id:'u_'+Date.now(),email,password:pass,fname,lname,phone,role:'user'};
  state.users.push(user);
  state.currentUser=user;
  save();
  toast('Account created! Welcome, '+fname+'!');
  
  if (state.pendingBooking) {
    openBooking(state.pendingBooking.hotelId, state.pendingBooking.roomId);
    state.pendingBooking = null;
  } else {
    showDashboard();
  }
}

function logout(){
  state.currentUser=null;
  localStorage.removeItem('si_user');
  showPage('page-home');
  toast('Logged out successfully');
}

// ===================== HOTELS & SEARCH =====================
function renderHotels(hotels){
  const grid=document.getElementById('hotels-grid');
  if(!grid) return;
  if(hotels.length===0){grid.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-sub)"><i class="fa fa-search" style="font-size:32px;margin-bottom:12px;display:block;color:var(--text-light)"></i>No hotels found. Try a different city.</div>';return}
  grid.innerHTML=hotels.map(h=>`
    <div class="hotel-card" onclick="openHotel(${h.id})">
      <div class="hotel-img">
        <img src="${h.img}" alt="${h.name}" loading="lazy">
        <span class="hotel-badge">${h.badge}</span>
        <div class="hotel-rating"><i class="fa fa-star"></i> ${h.rating} (${(h.reviews/1000).toFixed(1)}k)</div>
      </div>
      <div class="hotel-body">
        <div class="hotel-city"><i class="fa fa-map-marker-alt"></i> ${h.city}</div>
        <h3>${h.name}</h3>
        <div class="hotel-meta">
          <span><i class="fa fa-tag"></i> ${h.type}</span>
          <span><i class="fa fa-wifi"></i> Free WiFi</span>
          <span><i class="fa fa-utensils"></i> Breakfast</span>
        </div>
        <div class="hotel-footer">
          <div class="hotel-price">₹${h.priceFrom.toLocaleString()} <small>/ night</small></div>
          <button class="btn btn-primary btn-sm">View Rooms</button>
        </div>
      </div>
    </div>`).join('');
}

function executeSearch(doScroll = false) {
  const cityQuery = document.getElementById('search-city').value.toLowerCase().trim();
  let filtered = HOTELS;
  
  if(cityQuery) {
     filtered = HOTELS.filter(h => h.city.toLowerCase().includes(cityQuery));
  }
  
  renderHotels(filtered);
  if(doScroll) scrollToHotels();
}

function filterByCity(city){
  document.getElementById('search-city').value=city;
  executeSearch(true);
}

function filterByType(type){
  renderHotels(HOTELS.filter(h=>h.type===type));
  scrollToHotels();
}

function scrollToHotels(){
  const isHome = document.getElementById('page-home').classList.contains('active');
  if (!isHome) showPage('page-home');
  const el=document.getElementById('hotels-section');
  if(el){setTimeout(()=>el.scrollIntoView({behavior:'smooth', block: 'start'}),100)}
}

function scrollToCities(){
  const isHome = document.getElementById('page-home').classList.contains('active');
  if (!isHome) showPage('page-home');
  const el=document.getElementById('cities-section');
  if(el){setTimeout(()=>el.scrollIntoView({behavior:'smooth', block: 'start'}),100)}
}

// ===================== HOTEL DETAIL =====================
function openHotel(id){
  const hotel=HOTELS.find(h=>h.id===id);
  if(!hotel) return;
  state.currentHotel=hotel;
  const content=document.getElementById('hotel-detail-content');
  content.innerHTML=`
    <div class="hotel-detail-hero">
      <img src="${hotel.img}" alt="${hotel.name}">
      <div class="hotel-detail-hero-overlay"></div>
      <div class="hotel-detail-info container">
        <h1>${hotel.name}</h1>
        <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap">
          <span style="color:#fbbf24"><i class="fa fa-star"></i> ${hotel.rating} (${hotel.reviews.toLocaleString()} reviews)</span>
          <span style="color:#b8c4d8"><i class="fa fa-map-marker-alt"></i> ${hotel.city}, India</span>
          <span style="background:var(--orange);padding:3px 12px;border-radius:20px;font-size:12px;font-weight:700;color:#fff">${hotel.type}</span>
        </div>
      </div>
    </div>
    <div class="container" style="padding-top:32px;padding-bottom:60px">
      <p style="color:var(--text-sub);font-size:15px;max-width:700px;line-height:1.8;margin-bottom:24px">${hotel.desc}</p>
      <div class="amenities-bar">
        ${hotel.amenities.map(a=>`<div class="am-item"><i class="fa fa-check-circle"></i> ${a}</div>`).join('')}
      </div>
      <h2 style="font-family:'Playfair Display',serif;font-size:26px;color:var(--navy);margin:28px 0 20px">Available Rooms</h2>
      <div class="room-grid">
        ${hotel.rooms.map(r=>`
          <div class="room-card">
            <div class="room-img"><img src="${r.img}" alt="${r.name}" loading="lazy"></div>
            <div class="room-body">
              <h4>${r.name}</h4>
              <div style="font-size:12.5px;color:var(--text-sub);margin-bottom:10px">
                <span><i class="fa fa-expand-arrows-alt"></i> ${r.size}</span> &nbsp;·&nbsp;
                <span><i class="fa fa-bed"></i> ${r.beds}</span> &nbsp;·&nbsp;
                <span><i class="fa fa-eye"></i> ${r.view}</span>
              </div>
              <div class="room-amenities">${r.tags.map(t=>`<span class="amenity-tag">${t}</span>`).join('')}</div>
              <div style="display:flex;align-items:center;justify-content:space-between;padding-top:12px;border-top:1px solid var(--gray-border)">
                <div style="font-size:20px;font-weight:700;color:var(--navy)">₹${r.price.toLocaleString()} <small style="font-size:12px;font-weight:400;color:var(--text-sub)">/night</small></div>
                <button class="btn btn-primary btn-sm" onclick="openBooking(${hotel.id},'${r.id}')"><i class="fa fa-calendar-check"></i> Book Now</button>
              </div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
  updateNavState();
  showPage('page-hotel');
}

// ===================== BOOKING & PAYMENT =====================
function openBooking(hotelId, roomId){
  if(!state.currentUser){
    toast('Please login to book a room','error');
    state.pendingBooking = {hotelId, roomId}; // Remember what they wanted to book
    showPage('page-login');
    return;
  }
  const hotel=HOTELS.find(h=>h.id===hotelId);
  const room=hotel.rooms.find(r=>r.id===roomId);
  state.currentHotel=hotel;
  state.currentRoom=room;

  const today=new Date().toISOString().split('T')[0];
  const tomorrow=new Date(Date.now()+86400000).toISOString().split('T')[0];
  document.getElementById('book-checkin').value=today;
  document.getElementById('book-checkout').value=tomorrow;
  document.getElementById('book-fname').value=state.currentUser.fname||'';
  document.getElementById('book-lname').value=state.currentUser.lname||'';
  document.getElementById('book-email').value=state.currentUser.email||'';
  document.getElementById('book-phone').value=state.currentUser.phone||'';

  document.getElementById('back-to-hotel-btn').onclick=()=>openHotel(hotelId);
  updateBookingSummary();
  showPage('page-booking');
}

function updateBookingSummary(){
  const h=state.currentHotel, r=state.currentRoom;
  if(!h||!r) return;
  const checkin=document.getElementById('book-checkin')?.value;
  const checkout=document.getElementById('book-checkout')?.value;
  let nights=1;
  if(checkin&&checkout){
    const d1=new Date(checkin),d2=new Date(checkout);
    if(d2>d1) nights=Math.round((d2-d1)/86400000);
  }
  const subtotal=r.price*nights;
  const tax=Math.round(subtotal*0.12);
  const total=subtotal+tax;
  document.getElementById('booking-summary-box').innerHTML=`
    <h3>Booking Summary</h3>
    <img src="${h.img}" style="width:100%;border-radius:10px;margin-bottom:14px;height:140px;object-fit:cover" alt="">
    <div class="summary-row"><span>${h.name}</span></div>
    <div class="summary-row"><span>Room</span><span>${r.name}</span></div>
    <div class="summary-row"><span>City</span><span>${h.city}</span></div>
    <div class="summary-row"><span>Check-in</span><span>${checkin||'-'}</span></div>
    <div class="summary-row"><span>Check-out</span><span>${checkout||'-'}</span></div>
    <div class="summary-row"><span>Duration</span><span>${nights} night(s)</span></div>
    <div class="summary-row"><span>₹${r.price.toLocaleString()} × ${nights} night(s)</span><span>₹${subtotal.toLocaleString()}</span></div>
    <div class="summary-row"><span>Taxes (12%)</span><span>₹${tax.toLocaleString()}</span></div>
    <div class="summary-row"><span>Total Amount</span><span style="color:var(--orange)">₹${total.toLocaleString()}</span></div>`;
}

function selectPayment(el, method){
  document.querySelectorAll('.pay-method').forEach(m=>m.classList.remove('selected'));
  el.classList.add('selected');
  state.paymentMethod=method;
  const pf=document.getElementById('payment-fields');
  if(method==='card') pf.innerHTML=`<div class="form-group"><label>Card Number</label><input type="text" id="book-card" placeholder="1234 5678 9012 3456" maxlength="19"></div><div class="form-row"><div class="form-group"><label>Expiry</label><input type="text" id="book-expiry" placeholder="MM/YY"></div><div class="form-group"><label>CVV</label><input type="text" id="book-cvv" placeholder="123" maxlength="3"></div></div>`;
  else if(method==='upi') pf.innerHTML=`<div class="form-group"><label>UPI ID</label><input type="text" id="book-upi" placeholder="yourname@upi"></div>`;
  else pf.innerHTML=`<div class="form-group"><label>Bank</label><select><option>Select Bank</option><option>State Bank of India</option><option>HDFC Bank</option><option>ICICI Bank</option><option>Axis Bank</option><option>Kotak Mahindra</option></select></div>`;
}

function confirmBooking(){
  const checkin=document.getElementById('book-checkin').value;
  const checkout=document.getElementById('book-checkout').value;
  const fname=document.getElementById('book-fname').value.trim();
  const email=document.getElementById('book-email').value.trim();
  if(!checkin||!checkout||!fname||!email){toast('Please fill all required fields','error');return}
  if(new Date(checkout)<=new Date(checkin)){toast('Check-out must be after check-in','error');return}

  const h=state.currentHotel, r=state.currentRoom;
  const nights=Math.round((new Date(checkout)-new Date(checkin))/86400000);
  const subtotal=r.price*nights;
  const tax=Math.round(subtotal*0.12);
  const total=subtotal+tax;

  const booking={
    id:'BK'+String(Date.now()).slice(-6),
    userId:state.currentUser.id,
    hotel:h.name,
    room:r.name,
    city:h.city,
    checkin,checkout,
    guests:document.getElementById('book-guests').value,
    amount:total,
    status:'confirmed',
    payMethod:state.paymentMethod==='card'?'Credit Card':state.paymentMethod==='upi'?'UPI':'Net Banking',
    bookedAt:new Date().toISOString().split('T')[0]
  };
  state.bookings.push(booking);
  save();
  toast('🎉 Booking confirmed! Booking ID: '+booking.id);
  showDashboard();
}

// ===================== DASHBOARD =====================
function showDashboard(){
  if(!state.currentUser){showPage('page-login');return}
  showPage('page-dashboard');
  const u=state.currentUser;
  document.getElementById('dash-username').textContent=u.fname;
  const myBookings=state.bookings.filter(b=>b.userId===u.id);

  const conf=myBookings.filter(b=>b.status==='confirmed').length;
  const canc=myBookings.filter(b=>b.status==='cancelled').length;
  const spent=myBookings.filter(b=>b.status==='confirmed').reduce((s,b)=>s+b.amount,0);
  document.getElementById('dash-stats').innerHTML=`
    <div class="stat-card"><div class="stat-icon" style="background:#dbeafe;color:#2563eb"><i class="fa fa-calendar-check"></i></div><h3>${conf}</h3><p>Confirmed Bookings</p></div>
    <div class="stat-card"><div class="stat-icon" style="background:#fee2e2;color:#dc2626"><i class="fa fa-times-circle"></i></div><h3>${canc}</h3><p>Cancelled Bookings</p></div>
    <div class="stat-card"><div class="stat-icon" style="background:#fef9c3;color:#a16207"><i class="fa fa-rupee-sign"></i></div><h3>₹${(spent/1000).toFixed(0)}k</h3><p>Total Spent</p></div>
    <div class="stat-card"><div class="stat-icon" style="background:#dcfce7;color:#15803d"><i class="fa fa-hotel"></i></div><h3>${myBookings.length}</h3><p>Total Bookings</p></div>`;

  renderBookingsTable(myBookings.slice(-5), 'dash-recent-table');
  renderBookingsTable(myBookings, 'all-bookings-table');
  document.getElementById('booking-count-badge').textContent=myBookings.length+' Bookings';

  document.getElementById('profile-form').innerHTML=`
    <div class="form-group"><label>First Name</label><input type="text" id="pf-fname" value="${u.fname}"></div>
    <div class="form-group"><label>Last Name</label><input type="text" id="pf-lname" value="${u.lname}"></div>
    <div class="form-group"><label>Email</label><input type="email" id="pf-email" value="${u.email}"></div>
    <div class="form-group"><label>Phone</label><input type="tel" id="pf-phone" value="${u.phone||''}"></div>`;

  showTab('tab-overview');
}

function renderBookingsTable(bookings, containerId){
  const el=document.getElementById(containerId);
  if(!el) return;
  if(!bookings.length){el.innerHTML='<div style="padding:32px;text-align:center;color:var(--text-sub)"><i class="fa fa-calendar" style="font-size:28px;margin-bottom:10px;display:block;color:var(--text-light)"></i>No bookings found.</div>';return}
  el.innerHTML=`<table><thead><tr><th>Booking ID</th><th>Hotel</th><th>City</th><th>Room</th><th>Check-in</th><th>Check-out</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead>
  <tbody>${bookings.map(b=>`<tr>
    <td><strong>${b.id}</strong></td>
    <td>${b.hotel}</td>
    <td><i class="fa fa-map-marker-alt" style="color:var(--orange)"></i> ${b.city}</td>
    <td>${b.room}</td>
    <td>${b.checkin}</td>
    <td>${b.checkout}</td>
    <td><strong>₹${b.amount.toLocaleString()}</strong></td>
    <td><span class="status-badge status-${b.status}">${b.status.charAt(0).toUpperCase()+b.status.slice(1)}</span></td>
    <td>${b.status==='confirmed'?`<button class="btn btn-sm" style="background:#fee2e2;color:#dc2626;border:none;cursor:pointer;border-radius:8px;padding:5px 12px;font-size:12px;font-weight:600" onclick="cancelBooking('${b.id}')">Cancel</button>`:'<span style="color:var(--text-light);font-size:12px">—</span>'}</td>
  </tr>`).join('')}</tbody></table>`;
}

function showTab(id){
  document.querySelectorAll('#page-dashboard .tab-content').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('#page-dashboard .sidebar-link').forEach((l,i)=>{
    const tabs=['tab-overview','tab-bookings','tab-profile'];
    l.classList.toggle('active',tabs.indexOf(id)===i);
  });
  const el=document.getElementById(id);
  if(el){el.classList.add('active');el.classList.add('fade-in')}
}

function saveProfile(){
  if(!state.currentUser) return;
  state.currentUser.fname=document.getElementById('pf-fname').value;
  state.currentUser.lname=document.getElementById('pf-lname').value;
  state.currentUser.email=document.getElementById('pf-email').value;
  state.currentUser.phone=document.getElementById('pf-phone').value;
  const idx=state.users.findIndex(u=>u.id===state.currentUser.id);
  if(idx>-1) state.users[idx]=state.currentUser;
  save();
  toast('Profile updated successfully!');
}

// ===================== CANCEL =====================
function cancelBooking(id){
  state.cancelBookingId=id;
  document.getElementById('cancelModal').classList.add('show');
}
function closeModal(){
  document.getElementById('cancelModal').classList.remove('show');
  state.cancelBookingId=null;
}
function confirmCancel(){
  const b=state.bookings.find(b=>b.id===state.cancelBookingId);
  if(b) b.status='cancelled';
  save();
  closeModal();
  toast('Booking '+state.cancelBookingId+' cancelled');
  showDashboard();
  showTab('tab-bookings');
}

// ===================== ADMIN =====================
function showAdminTab(id){
  document.querySelectorAll('#page-admin .tab-content').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('#page-admin .sidebar-link').forEach((l,i)=>{
    const tabs=['admin-tab-overview','admin-tab-bookings','admin-tab-users','admin-tab-hotels'];
    l.classList.toggle('active',tabs.indexOf(id)===i);
  });
  const el=document.getElementById(id);
  if(el){el.classList.add('active');el.classList.add('fade-in')}
  if(id==='admin-tab-bookings') renderAdminBookings();
  if(id==='admin-tab-users') renderAdminUsers();
  if(id==='admin-tab-hotels') renderAdminHotels();
}

function renderAdminPage(){
  const total=state.bookings.length;
  const conf=state.bookings.filter(b=>b.status==='confirmed').length;
  const rev=state.bookings.filter(b=>b.status==='confirmed').reduce((s,b)=>s+b.amount,0);
  const users=state.users.filter(u=>u.role!=='admin').length;
  document.getElementById('admin-stats').innerHTML=`
    <div class="stat-card"><div class="stat-icon" style="background:#dbeafe;color:#2563eb"><i class="fa fa-list-alt"></i></div><h3>${total}</h3><p>Total Bookings</p></div>
    <div class="stat-card"><div class="stat-icon" style="background:#dcfce7;color:#15803d"><i class="fa fa-check-circle"></i></div><h3>${conf}</h3><p>Confirmed</p></div>
    <div class="stat-card"><div class="stat-icon" style="background:#fef9c3;color:#a16207"><i class="fa fa-rupee-sign"></i></div><h3>₹${(rev/100000).toFixed(1)}L</h3><p>Total Revenue</p></div>
    <div class="stat-card"><div class="stat-icon" style="background:#f3e8ff;color:#7c3aed"><i class="fa fa-users"></i></div><h3>${users}</h3><p>Registered Users</p></div>
    <div class="stat-card"><div class="stat-icon" style="background:#ffedd5;color:var(--orange)"><i class="fa fa-hotel"></i></div><h3>${HOTELS.length}</h3><p>Hotels Listed</p></div>`;
  renderAdminBookingsInContainer(state.bookings.slice(-8),'admin-recent-table');
}

function renderAdminBookings(){
  renderAdminBookingsInContainer(state.bookings,'admin-all-bookings-table');
}

function renderAdminBookingsInContainer(bookings, containerId){
  const el=document.getElementById(containerId);
  if(!el) return;
  if(!bookings.length){el.innerHTML='<div style="padding:32px;text-align:center;color:var(--text-sub)">No bookings found.</div>';return}
  el.innerHTML=`<table><thead><tr><th>ID</th><th>User</th><th>Hotel</th><th>City</th><th>Dates</th><th>Amount</th><th>Payment</th><th>Status</th><th>Booked</th></tr></thead>
  <tbody>${bookings.map(b=>{
    const user=state.users.find(u=>u.id===b.userId);
    return`<tr>
    <td><strong>${b.id}</strong></td>
    <td>${user?user.fname+' '+user.lname:'Guest'}</td>
    <td>${b.hotel}</td>
    <td>${b.city}</td>
    <td>${b.checkin} → ${b.checkout}</td>
    <td><strong>₹${b.amount.toLocaleString()}</strong></td>
    <td>${b.payMethod||'—'}</td>
    <td><span class="status-badge status-${b.status}">${b.status.charAt(0).toUpperCase()+b.status.slice(1)}</span></td>
    <td>${b.bookedAt}</td>
  </tr>`}).join('')}</tbody></table>`;
}

function renderAdminUsers(){
  const el=document.getElementById('admin-users-table');
  const users=state.users.filter(u=>u.role!=='admin');
  if(!users.length){el.innerHTML='<div style="padding:32px;text-align:center;color:var(--text-sub)">No users registered yet.</div>';return}
  el.innerHTML=`<table><thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Bookings</th><th>Total Spent</th></tr></thead>
  <tbody>${users.map(u=>{
    const bks=state.bookings.filter(b=>b.userId===u.id&&b.status==='confirmed');
    const spent=bks.reduce((s,b)=>s+b.amount,0);
    return`<tr>
    <td>${u.id}</td><td><strong>${u.fname} ${u.lname}</strong></td><td>${u.email}</td><td>${u.phone||'—'}</td>
    <td><span style="background:var(--orange-light);color:var(--orange);padding:2px 8px;border-radius:10px;font-weight:700">${state.bookings.filter(b=>b.userId===u.id).length}</span></td>
    <td>₹${spent.toLocaleString()}</td></tr>`}).join('')}</tbody></table>`;
}

function renderAdminHotels(){
  const el=document.getElementById('admin-hotels-table');
  el.innerHTML=`<table><thead><tr><th>Hotel</th><th>City</th><th>Type</th><th>Rating</th><th>Price From</th><th>Rooms</th><th>Bookings</th></tr></thead>
  <tbody>${HOTELS.map(h=>`<tr>
    <td><strong>${h.name}</strong></td><td>${h.city}</td><td><span class="amenity-tag">${h.type}</span></td>
    <td><i class="fa fa-star" style="color:#fbbf24"></i> ${h.rating}</td>
    <td>₹${h.priceFrom.toLocaleString()}</td>
    <td>${h.rooms.length}</td>
    <td>${state.bookings.filter(b=>b.hotel===h.name).length}</td></tr>`).join('')}</tbody></table>`;
}

// ===================== INIT =====================
function init(){
  const today=new Date();
  const checkin=today.toISOString().split('T')[0];
  const checkout=new Date(today.getTime()+86400000*2).toISOString().split('T')[0];
  ['search-checkin','search-checkout'].forEach((id,i)=>{const el=document.getElementById(id);if(el)el.value=i===0?checkin:checkout});

  updateNavState();
  renderHotels(HOTELS); // Shows all hotels on first load

  if(state.currentUser && document.getElementById('page-admin').classList.contains('active')){
    renderAdminPage();
  }

  ['book-checkin','book-checkout'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.addEventListener('change',updateBookingSummary);
  });
}

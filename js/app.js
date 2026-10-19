/**
 * ============================================================================
 * DỰ ÁN WEB TƯƠNG TÁC 20/10 - PHIÊN BẢN MULTI-PROFILE (?id=x)
 * Hỗ trợ cá nhân hóa: Giao diện, Lời chúc, Album ảnh & Nhạc theo URL Parameter
 * ============================================================================
 */

/* ============================================================================
   1. KHO DỮ LIỆU ĐA CẤU HÌNH (PROFILES DATABASE)
   Cách dùng:
   - Truy cập: index.html?id=1 (Dành cho Bà)
   - Truy cập: index.html?id=2 (Dành cho Mẹ)
   - Truy cập: index.html?id=3 (Dành cho Dì)
   - Truy cập: index.html?id=4 (Dành cho Mợ)
   - Truy cập: index.html?id=5 (Dành cho Tiểu Kê - Mafia Pepsi)
   - Truy cập: index.html?id=6 (Dành cho Yến Cocacola)
   - Truy cập: index.html?id=7 (Dành cho Nguyễn Như Tú)
   - Nếu không truyền ?id=... hoặc truyền id không tồn tại -> Tự động dùng 'default'
   ============================================================================ */
const PROFILES_DB = {
  // --------------------------------------------------------------------------
  // MẶC ĐỊNH (Khi vào trang không có ?id= hoặc id không khớp)
  // --------------------------------------------------------------------------
  default: {
    pageTitle: 'Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10',
    theme: {
      '--color-accent': '#d92658',
      '--color-neon-pink': '#ff2a6d',
      '--color-light-bg-1': '#ffdde1',
      '--color-light-bg-2': '#ffecd2',
      '--color-light-bg-3': '#fcb69f',
    },
    hook: {
      badge: 'Special Gift • 20/10',
      title: 'Trạm Nạp Năng Lượng Yêu Thương',
      subtitle: 'Nhấn hoặc giữ trái tim để mở khóa món quà đặc biệt',
    },
    greeting: {
      tag: "Happy Vietnamese Women's Day",
      title: 'Gửi Người Phụ Nữ Tuyệt Vời Nhất',
      message:
        'Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn rạng rỡ như những đóa hoa ban mai, luôn hạnh phúc, bình an và được yêu thương trọn vẹn.\n\nCảm ơn bạn vì đã luôn dịu dàng, kiên cường và mang đến thật nhiều điều ấm áp cho thế giới này!',
      signature: 'Thương gửi ngàn lời chúc tốt đẹp nhất ♥',
      typingSpeedMs: 38,
    },
    audio: {
      src: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3',
      volume: 0.65,
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=900&q=80',
        alt: 'Hoa hồng lãng mạn ngày 20/10',
        caption: 'Luôn rạng rỡ và tỏa hương như những đóa hoa tươi thắm 🌸',
      },
      {
        url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
        alt: 'Cánh đồng hoa mùa xuân',
        caption: 'Mỗi ngày trôi qua đều ngập tràn niềm vui và tiếng cười ✨',
      },
      {
        url: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80',
        alt: 'Bó hoa pastel dịu dàng',
        caption: 'Dịu dàng, tự tin và luôn là phiên bản hạnh phúc nhất 💖',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // LOẠI 1: DÀNH CHO BÀ (?id=1 hoặc ?id=ba)
  // Tone màu: Vàng đồng & Đỏ trầm sang trọng, ấm cúng
  // --------------------------------------------------------------------------
  1: {
    pageTitle: 'Món Quà 20/10 Kính Tặng Bà Kính Yêu ♥',
    theme: {
      '--color-accent': '#993300',
      '--color-neon-pink': '#d4af37',
      '--color-light-bg-1': '#fdf0ed',
      '--color-light-bg-2': '#fae1dd',
      '--color-light-bg-3': '#f4acb7',
    },
    hook: {
      badge: 'Kính Tặng Bà • 20/10',
      title: 'Món Quà Nhỏ Kính Sức Khỏe Của Bà',
      subtitle: 'Bà nhấn vào trái tim bên dưới để mở hộp quà của cháu nhé!',
    },
    greeting: {
      tag: 'Cội Nguồn Yêu Thương',
      title: 'Chúc Mừng 20/10 Bà Kính Yêu!',
      message:
        'Nhân ngày Phụ nữ Việt Nam 20/10, cháu xin gửi lời chúc chân thành nhất đến Bà. Kính chúc Bà luôn thật nhiều sức khỏe, sống lâu trăm tuổi, tâm hồn luôn an vui và mãi là chỗ dựa tinh thần ấm áp cho con cháu.\n\nChúng cháu yêu Bà rất nhiều!',
      signature: 'Cháu kính tặng Bà ♥',
      typingSpeedMs: 42,
    },
    audio: {
      src: 'nhac01.mp3',
      volume: 0.65,
    },
    gallery: [
      {
        url: './images/anhba01.jpg',
        alt: 'Hoa kính tặng Bà',
        caption: 'Kính chúc Bà luôn mạnh khỏe và bình an mỗi ngày 🌷',
      },
      {
        url: './images/anhba02.jpg',
        alt: 'Sắc hoa ấm áp',
        caption: 'Cảm ơn Bà vì luôn là cội nguồn yêu thương của gia đình 🏡',
      },
      {
        url: './images/anhba03.jpg',
        alt: 'Yêu thương đong đầy',
        alt: 'Yêu thương đong đầy',
        caption: 'Mong Bà luôn mỉm cười và hạnh phúc bên con cháu 💖',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // LOẠI 2: DÀNH CHO MẸ (?id=2 hoặc ?id=me)
  // Tone màu: Đỏ Ruby ấm áp & Vàng Hoàng Kim
  // --------------------------------------------------------------------------
  2: {
    pageTitle: 'Món Quà 20/10 Gửi Mẹ Yêu ♥',
    theme: {
      '--color-accent': '#b5173e',
      '--color-neon-pink': '#e63946',
      '--color-light-bg-1': '#ffe5d9',
      '--color-light-bg-2': '#ffcad4',
      '--color-light-bg-3': '#f4acb7',
    },
    hook: {
      badge: 'Gửi Mẹ Yêu • 20/10',
      title: 'Món Quà Nhỏ Dành Riêng Cho Mẹ',
      subtitle: 'Mẹ nhấn vào trái tim bên dưới để mở hộp quà của con nhé!',
    },
    greeting: {
      tag: 'Người Phụ Nữ Vĩ Đại Nhất Đời Con',
      title: 'Chúc Mừng 20/10 Mẹ Yêu!',
      message:
        'Nhân ngày Phụ nữ Việt Nam 20/10, con chúc Mẹ luôn thật nhiều sức khỏe, tâm hồn luôn an nhiên và nụ cười mãi nở trên môi.\n\nCảm ơn Mẹ vì những hy sinh thầm lặng, vì vòng tay ấm áp luôn che chở cho chúng con. Con yêu Mẹ thật nhiều!',
      signature: 'Con của Mẹ ♥',
      typingSpeedMs: 42,
    },
    audio: {
      src: 'nhac02.mp3',
      volume: 0.65,
    },
    gallery: [
      {
        url: './images/anhme01.jpg',
        alt: 'Hoa tặng Mẹ',
        caption: 'Chúc Mẹ yêu luôn mạnh khỏe và bình an mỗi ngày 🌷',
      },
      {
        url: './images/anhme02.jpg',
        alt: 'Sắc hoa ấm áp',
        caption: 'Cảm ơn Mẹ vì luôn là điểm tựa vững chắc nhất của con 🏡',
      },
      {
        url: './images/anhme03.jpg',
        alt: 'Yêu thương đong đầy',
        caption: 'Mãi nở nụ cười thật tươi Mẹ nhé! 💖',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // LOẠI 3: DÀNH CHO DÌ (?id=3 hoặc ?id=di)
  // Tone màu: Hồng cam đào trẻ trung, tươi tắn
  // --------------------------------------------------------------------------
  3: {
    pageTitle: 'Món Quà 20/10 Gửi Dì Yêu ✨',
    theme: {
      '--color-accent': '#ff6b6b',
      '--color-neon-pink': '#ff8e53',
      '--color-light-bg-1': '#fff1ed',
      '--color-light-bg-2': '#ffe3de',
      '--color-light-bg-3': '#ffd1cb',
    },
    hook: {
      badge: 'Gửi Dì Yêu • 20/10',
      title: 'Món Quà Tinh Tế Dành Tặng Dì',
      subtitle: 'Dì nhấn vào trái tim để mở hộp quà bất ngờ nhé!',
    },
    greeting: {
      tag: 'Người Dì Tâm Sáng Tươi Vui',
      title: 'Chúc Mừng 20/10 Dì Yêu!',
      message:
        'Nhân dịp 20/10, con chúc Dì luôn luôn trẻ trung, xinh đẹp, gặp nhiều may mắn và luôn tràn đầy năng lượng tích cực trong cuộc sống.\n\nCảm ơn Dì vì luôn quan tâm và yêu thương chúng con!',
      signature: 'Con gửi ngàn lời chúc đến Dì ♥',
      typingSpeedMs: 38,
    },
    audio: {
      src: 'nhac03.mp3',
      volume: 0.65,
    },
    gallery: [
      {
        url: './images/anhdi01.jpg',
        alt: 'Hoa tươi thắm',
        caption: 'Chúc Dì ngày 20/10 ngập tràn hoa tươi và niềm vui 💐',
      },
      {
        url: './images/anhdi02.jpg',
        alt: 'Rạng ngời hạnh phúc',
        caption: 'Chúc Dì luôn giữ mãi nét rạng rỡ và nụ cười tươi tắn ✨',
      },
      {
        url: './images/anhdi03.jpg',
        alt: 'Yêu thương',
        caption: 'Mọi điều tốt đẹp nhất sẽ đến với Dì trong hôm nay và mãi mãi 💕',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // LOẠI 4: DÀNH CHO MỢ (?id=4 hoặc ?id=mo)
  // Tone màu: Xanh ngọc / Xanh mint nhẹ nhàng, thanh lịch
  // --------------------------------------------------------------------------
  4: {
    pageTitle: 'Món Quà 20/10 Gửi Mợ Yêu 🌿',
    theme: {
      '--color-accent': '#007f5f',
      '--color-neon-pink': '#2b9348',
      '--color-light-bg-1': '#e8f5e9',
      '--color-light-bg-2': '#c8e6c9',
      '--color-light-bg-3': '#a5d6a7',
    },
    hook: {
      badge: 'Gửi Mợ Yêu • 20/10',
      title: 'Món Quà Nhỏ Tặng Mợ',
      subtitle: 'Mợ nhấn vào trái tim để mở hộp quà chúc mừng nhé!',
    },
    greeting: {
      tag: 'Người Mợ Thân Thương',
      title: 'Chúc Mừng 20/10 Mợ Yêu!',
      message:
        'Nhân ngày 20/10, con chúc Mợ luôn luôn xinh đẹp, hạnh phúc, công việc hanh thông và gia đình nhỏ lúc nào cũng ngập tràn tiếng cười.\n\nChúc Mợ một ngày lễ thật ý nghĩa và trọn vẹn!',
      signature: 'Con gửi lời chúc tốt đẹp nhất đến Mợ ♥',
      typingSpeedMs: 38,
    },
    audio: {
      src: 'nhac03.mp3',
      volume: 0.65,
    },
    gallery: [
      {
        url: './images/anhmo01.jpg',
        alt: 'Sắc xanh tươi mát',
        caption: 'Chúc Mợ luôn tươi trẻ, bình an và gặp nhiều may mắn 🌱',
      },
      {
        url: './images/anhmo02.jpg',
        alt: 'Hoa tươi',
        caption: 'Happy Vietnamese Women’s Day đến Mợ! 🌸',
      },
      {
        url: './images/anhmo03.jpg',
        alt: 'Hạnh phúc đong đầy',
        caption: 'Mong mọi điều tốt lành nhất sẽ luôn đồng hành cùng Mợ ✨',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // LOẠI 5: DÀNH CHO TIEUKE (MAFIA PEPSI) - A.R.M.Y (?id=5 hoặc ?id=tieuke)
  // Tone màu: Tím đặc trưng của A.R.M.Y kết hợp Xanh đậm Pepsi cá tính
  // --------------------------------------------------------------------------
  5: {
    pageTitle: 'Happy 20/10 Tieu Ke (Mafia Pepsi) • A.R.M.Y 💜',
    theme: {
      '--color-accent': '#560bad',
      '--color-neon-pink': '#b5179e',
      '--color-light-bg-1': '#f3e8ff',
      '--color-light-bg-2': '#e0aaff',
      '--color-light-bg-3': '#c77dff',
    },
    hook: {
      badge: 'Mafia Pepsi x A.R.M.Y • 20/10',
      title: 'Khui Quà Đi Đại Tỷ Tieu Ke!',
      subtitle: 'Nhấn vào trái tim tím để nhận năng lượng A.R.M.Y nào!',
    },
    greeting: {
      tag: 'A.R.M.Y 💜 Tieu Ke’!',
      title: 'Chúc Mừng 20/10 Mafia Pepsi!',
      message:
        'Nhân ngày 20/10, chúc Đại tỷ Tieu Ke (Mafia Pepsi) kiêm đồng chí của văn phòng hành chính. Chân cứng đá mềm, luôn ngập tràn năng lượng, bão giông không sợ chỉ sợ không có ARMY.\n\nChúc đại tỷ ngày càng xinh đẹp, slay hết nấc và luôn giữ vững tinh thần "Army with lốp"! 💜',
      signature: 'Từ một chiến hữu A.R.M.Y cốt cán Pad Atis 🤝',
      typingSpeedMs: 34,
    },
    audio: {
      src: 'nhac05.mp3',
      volume: 0.7,
    },
    gallery: [
      {
        url: './images/anhtk01.jpg',
        alt: 'Sắc tím A.R.M.Y',
        caption: '💜 Chúc Tiểu Kê 20/10 ngập tràn sắc tím yêu thương!',
      },
      {
        url: './images/anhtk02.jpg',
        alt: 'Cá tính và năng động',
        caption: 'Mafia Pepsi – Luôn bùng nổ và tỏa sáng theo cách riêng! 🔥',
      },
      {
        url: './images/anhtk03.jpg',
        alt: 'Thành công rực rỡ',
        caption: 'Chúc cậu mọi dự định đều thành công mĩ mãn! ✨',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // LOẠI 6: DÀNH CHO YENCOCACOLA - CHUNG A.R.M.Y (?id=6 hoặc ?id=yencocacola)
  // Tone màu: Đỏ Cocacola truyền thống kết hợp Tím A.R.M.Y cực cháy
  // --------------------------------------------------------------------------
  6: {
    pageTitle: 'Happy 20/10 Yến Cocacola • A.R.M.Y 💜',
    theme: {
      '--color-accent': '#d90429',
      '--color-neon-pink': '#7209b7',
      '--color-light-bg-1': '#ffe3e3',
      '--color-light-bg-2': '#f3e8ff',
      '--color-light-bg-3': '#b5179e',
    },
    hook: {
      badge: 'Yến Cocacola x A.R.M.Y • 20/10',
      title: 'Mở Hộp Quà 20/10 Cực Cháy Thôi Nào!',
      subtitle: 'Bấm hoặc giữ trái tim để xem điều bất ngờ dành riêng cho Yến nhé!',
    },
    greeting: {
      tag: 'Refresh Your Life 🥤💜',
      title: 'Chúc Mừng 20/10 Yến Cocacola!',
      message:
       'Nhân ngày 20/10, chúc cô nàng Yến của chúng ta luôn tràn đầy năng lượng tươi vui như một lon Coca mát lạnh ngày hè, lúc nào cũng rạng rỡ và gặt hái thật nhiều thành công rực rỡ trên con đường sự nghiệp!\n\nChúc công việc luôn thuận buồm xuôi gió, thăng tiến vèo vèo và lúc nào cũng giữ được tinh thần chill hết nấc, yêu đời thế này nhé!💜',
      signature: 'Đồng chí A.R.M.Y | Pad Atis gửi tặng 🌟',
      typingSpeedMs: 34,
    },
    audio: {
      src: 'nhac05.mp3',
      volume: 0.7,
    },
    gallery: [
      {
        url: './images/anhyc01.jpg',
        alt: 'Năng lượng tươi trẻ',
        caption: 'Sảng khoái, bừng sức sống như Cocacola mỗi ngày! 🥤',
      },
      {
        url: './images/anhyc02.jpg',
        alt: 'Tình yêu A.R.M.Y',
        caption: '💜 Chúc Yến 20/10 ngập tràn niềm vui và hạnh phúc!',
      },
      {
        url: './images/anhyc03.jpg',
        alt: 'Tỏa sáng rực rỡ',
        caption: 'Luôn tự tin, xinh đẹp và tỏa sáng rực rỡ nhé! ✨',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // LOẠI 7: DÀNH CHO NGUYỄN NHƯ TÚ (?id=7 hoặc ?id=nguyennhutu)
  // Tone màu: Xanh dương đậm & Vàng nắng tinh tế, tri thức
  // --------------------------------------------------------------------------
  7: {
    pageTitle: 'Happy 20/10 Nguyễn Như Tú ✨',
    theme: {
      '--color-accent': '#1d3557',
      '--color-neon-pink': '#457b9d',
      '--color-light-bg-1': '#e0fbfc',
      '--color-light-bg-2': '#caf0f8',
      '--color-light-bg-3': '#ade8f4',
    },
    hook: {
      badge: 'Special Gift For You • 20/10',
      title: 'Món Quà Đặc Biệt Dành Cho Nguyễn Như Tú',
      subtitle: 'Nhấn vào trái tim để mở hộp quà chúc mừng 20/10 nhé!',
    },
    greeting: {
      tag: 'Shine Bright & Be Happy 🌟',
      title: 'Chúc Mừng 20/10 Nguyễn Như Tú!',
      message:
        'Nhân ngày Phụ nữ Việt Nam 20/10, chúc Nguyễn Như Tú luôn luôn xinh đẹp, vui vẻ, tràn đầy năng lượng tích cực và gặt hái được thật nhiều thành công trên con đường mình đã chọn.\n\nMong rằng mọi dự định và ước mơ của cậu đều sẽ trở thành hiện thực!',
      signature: 'Happy Vietnamese Women’s Day! ♥',
      typingSpeedMs: 35,
    },
    audio: {
      src: 'nhac05.mp3',
      volume: 0.65,
    },
    gallery: [
      {
        url: './images/anhtu01.jpg',
        alt: 'Hoa tươi thắm',
        caption: 'Chúc Như Tú ngày 20/10 ngập tràn hoa và những lời chúc ngọt ngào 🌷',
      },
      {
        url: './images/anhtu02.jpg',
        alt: 'Rạng ngời thành công',
        caption: 'Luôn tự tin, kiêu hãnh và tỏa sáng rực rỡ nhé! ✨',
      },
      {
        url: './images/anhtu03.jpg',
        alt: 'Hạnh phúc trọn vẹn',
        caption: 'Chúc 365 ngày trong năm của cậu đều là những ngày vui trọn vẹn 💖',
      },
    ],
  },
};

// Ánh xạ bí danh (Alias) giúp bạn dùng được cả số (?id=1) lẫn chữ
const PROFILE_ALIASES = {
  ba: '1',
  me: '2',
  di: '3',
  mo: '4',
  tieuke: '5',
  yencocacola: '6',
  nguyennhutu: '7',
};

// Cấu hình thông số tương tác chung
const INTERACTION_CONFIG = {
  stepPerClick: 10,
  holdIntervalMs: 85,
  stepPerHoldTick: 4,
  carouselIntervalMs: 3000,
};

/* ============================================================================
   2. PROFILE RESOLVER (BỘ ĐỊNH TUYẾN ĐỌC ?id=x TỪ URL)
   ============================================================================ */
const ProfileResolver = {
  /**
   * Đọc tham số ?id= từ thanh địa chỉ trình duyệt và trả về cấu hình tương ứng
   */
  getActiveProfile() {
    const params = new URLSearchParams(window.location.search);
    const rawId = (params.get('id') || '').trim().toLowerCase();

    // Kiểm tra xem rawId có nằm trong danh sách bí danh không
    const resolvedKey = PROFILE_ALIASES[rawId] || rawId;

    // Trả về profile tương ứng, nếu không tìm thấy thì fallback về 'default'
    return PROFILES_DB[resolvedKey] || PROFILES_DB.default;
  },
};

// Lấy dữ liệu Profile hiện tại ngay khi khởi chạy
const ACTIVE_PROFILE = ProfileResolver.getActiveProfile();

/* ============================================================================
   3. APPLICATION STATE (QUẢN LÝ TRẠNG THÁI)
   ============================================================================ */
const AppState = {
  progress: 0,
  isRevealed: false,
  holdTimerId: null,
  shakeTimeoutId: null,
  currentSlideIndex: 0,
  carouselTimerId: null,
  isAudioMuted: false,
};

/* ============================================================================
   4. DOM ELEMENTS & UI MODULE (XỬ LÝ GIAO DIỆN)
   ============================================================================ */
const DOM = {
  appRoot: document.querySelector('#app-root'),
  starCanvas: document.querySelector('#starfield-canvas'),
  phaseHook: document.querySelector('#phase-hook'),
  phaseReveal: document.querySelector('#phase-reveal'),
  hookBadge: document.querySelector('#hook-badge'),
  hookTitle: document.querySelector('#hook-title'),
  hookSubtitle: document.querySelector('#hook-subtitle'),
  giftBox: document.querySelector('#gift-box'),
  progressText: document.querySelector('#progress-text'),
  progressTrack: document.querySelector('#progress-track'),
  heartBtn: document.querySelector('#heart-btn'),
  cardTag: document.querySelector('#card-tag'),
  cardTitle: document.querySelector('#card-title'),
  typewriterText: document.querySelector('#typewriter-text'),
  typewriterCursor: document.querySelector('#typewriter-cursor'),
  cardSignature: document.querySelector('#card-signature'),
  carousel: document.querySelector('#image-carousel'),
  carouselTrack: document.querySelector('#carousel-track'),
  carouselPrevBtn: document.querySelector('#carousel-prev'),
  carouselNextBtn: document.querySelector('#carousel-next'),
  carouselDots: document.querySelector('#carousel-dots'),
  bgMusic: document.querySelector('#bg-music'),
  audioToggleBtn: document.querySelector('#audio-toggle-btn'),
  audioIcon: document.querySelector('#audio-icon'),
};

const UIController = {
  /**
   * Áp dụng Theme màu sắc và nội dung văn bản của Profile hiện tại lên giao diện
   */
  applyProfileThemeAndText(profile) {
    if (profile.pageTitle) {
      document.title = profile.pageTitle;
    }

    if (profile.theme) {
      Object.entries(profile.theme).forEach(([cssVar, value]) => {
        document.documentElement.style.setProperty(cssVar, value);
      });
    }

    DOM.hookBadge.textContent = profile.hook.badge;
    DOM.hookTitle.textContent = profile.hook.title;
    DOM.hookSubtitle.textContent = profile.hook.subtitle;

    DOM.cardTag.textContent = profile.greeting.tag;
    DOM.cardTitle.textContent = profile.greeting.title;
    DOM.cardSignature.textContent = profile.greeting.signature;
  },

  updateProgressUI(percent) {
    const ratio = percent / 100;
    const shakePx = (2 + ratio * 10).toFixed(1);
    const shakeDeg = (1.5 + ratio * 7).toFixed(1);

    DOM.appRoot.style.setProperty('--progress-ratio', ratio.toFixed(3));
    DOM.appRoot.style.setProperty('--shake-offset', `${shakePx}px`);
    DOM.appRoot.style.setProperty('--shake-rotate', `${shakeDeg}deg`);

    DOM.progressText.textContent = `${Math.round(percent)}%`;
    DOM.progressTrack.setAttribute('aria-valuenow', Math.round(percent));
  },

  triggerPulseAndShake() {
    DOM.heartBtn.classList.remove('hook__heart-btn--pulsing');
    void DOM.heartBtn.offsetWidth;
    DOM.heartBtn.classList.add('hook__heart-btn--pulsing');

    DOM.giftBox.classList.add('hook__gift-box--shaking');
    clearTimeout(AppState.shakeTimeoutId);
    AppState.shakeTimeoutId = setTimeout(() => {
      DOM.giftBox.classList.remove('hook__gift-box--shaking');
    }, 260);
  },

  transitionToRevealPhase(onTransitionComplete) {
    DOM.phaseHook.classList.add('hook--hidden');
    DOM.appRoot.classList.add('app--phase-reveal');

    DOM.phaseReveal.classList.add('reveal--visible');
    DOM.phaseReveal.setAttribute('aria-hidden', 'false');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        DOM.phaseReveal.classList.add('reveal--active');
      });
    });

    setTimeout(() => {
      DOM.phaseHook.style.display = 'none';
      if (typeof onTransitionComplete === 'function') {
        onTransitionComplete();
      }
    }, 650);
  },

  renderCarousel(slidesData) {
    const slidesHTML = slidesData
      .map(
        (item, index) => `
        <div class="carousel__slide ${index === 0 ? 'carousel__slide--active' : ''}" role="group" aria-roledescription="slide" aria-label="${index + 1} / ${slidesData.length}">
          <img class="carousel__image" src="${item.url}" alt="${item.alt}" loading="${index === 0 ? 'eager' : 'lazy'}" />
          <div class="carousel__caption">${item.caption}</div>
        </div>
      `
      )
      .join('');

    const dotsHTML = slidesData
      .map(
        (_, index) => `
        <button
          class="carousel__dot ${index === 0 ? 'carousel__dot--active' : ''}"
          type="button"
          role="tab"
          aria-label="Chuyển tới ảnh ${index + 1}"
          aria-selected="${index === 0 ? 'true' : 'false'}"
          data-index="${index}"
        ></button>
      `
      )
      .join('');

    DOM.carouselTrack.innerHTML = slidesHTML;
    DOM.carouselDots.innerHTML = dotsHTML;
  },

  updateCarouselSlide(activeIndex) {
    DOM.carouselTrack.style.transform = `translate3d(-${activeIndex * 100}%, 0, 0)`;

    const slides = DOM.carouselTrack.querySelectorAll('.carousel__slide');
    const dots = DOM.carouselDots.querySelectorAll('.carousel__dot');

    slides.forEach((slide, idx) => {
      slide.classList.toggle('carousel__slide--active', idx === activeIndex);
    });

    dots.forEach((dot, idx) => {
      const isCurrent = idx === activeIndex;
      dot.classList.toggle('carousel__dot--active', isCurrent);
      dot.setAttribute('aria-selected', String(isCurrent));
    });
  },

  updateAudioButton(isMuted) {
    DOM.audioIcon.textContent = isMuted ? '🔇' : '🔊';
  },
};

/* ============================================================================
   5. STARFIELD BACKGROUND MODULE (CANVAS PHASE 1)
   ============================================================================ */
const StarfieldController = {
  ctx: null,
  stars: [],
  animationFrameId: null,

  init() {
    if (!DOM.starCanvas) return;
    this.ctx = DOM.starCanvas.getContext('2d');
    this.resize();
    this.createStars(95);
    this.animate();

    window.addEventListener('resize', () => this.resize());
  },

  resize() {
    DOM.starCanvas.width = window.innerWidth;
    DOM.starCanvas.height = window.innerHeight;
  },

  createStars(count) {
    this.stars = Array.from({ length: count }, () => ({
      x: Math.random() * DOM.starCanvas.width,
      y: Math.random() * DOM.starCanvas.height,
      radius: Math.random() * 1.8 + 0.4,
      alpha: Math.random(),
      deltaAlpha: (Math.random() * 0.015 + 0.004) * (Math.random() < 0.5 ? 1 : -1),
    }));
  },

  animate() {
    if (AppState.isRevealed) {
      cancelAnimationFrame(this.animationFrameId);
      return;
    }

    const { ctx } = this;
    const { width, height } = DOM.starCanvas;
    ctx.clearRect(0, 0, width, height);

    this.stars.forEach((star) => {
      star.alpha += star.deltaAlpha;
      if (star.alpha <= 0.15 || star.alpha >= 1) {
        star.deltaAlpha *= -1;
      }

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 235, 245, ${star.alpha.toFixed(2)})`;
      ctx.fill();
    });

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  },
};

/* ============================================================================
   6. CONFETTI, TYPEWRITER, AUDIO & CAROUSEL CONTROLLERS (PHASE 2 LOGIC)
   ============================================================================ */
const EffectsController = {
  launchCelebrationConfetti() {
    if (typeof window.confetti !== 'function') return;

    const accentColor = ACTIVE_PROFILE.theme?.['--color-accent'] || '#ff2a6d';
    const neonColor = ACTIVE_PROFILE.theme?.['--color-neon-pink'] || '#ff7597';
    const palette = [accentColor, neonColor, '#ffd166', '#ffb3c6', '#ffffff'];

    window.confetti({
      particleCount: 110,
      spread: 85,
      origin: { y: 0.6 },
      colors: palette,
    });

    const duration = 3200;
    const endTime = Date.now() + duration;

    const frame = () => {
      window.confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.65 },
        colors: palette,
      });
      window.confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.65 },
        colors: palette,
      });

      if (Date.now() < endTime) {
        requestAnimationFrame(frame);
      }
    };

    requestAnimationFrame(frame);
  },

  startTypewriter() {
    const { message, typingSpeedMs } = ACTIVE_PROFILE.greeting;
    DOM.typewriterText.textContent = '';

    let charIndex = 0;
    const typeNextChar = () => {
      if (charIndex < message.length) {
        DOM.typewriterText.textContent += message.charAt(charIndex);
        charIndex += 1;
        setTimeout(typeNextChar, typingSpeedMs);
      } else {
        setTimeout(() => {
          DOM.typewriterCursor.classList.add('card__cursor--hidden');
        }, 2000);
      }
    };

    typeNextChar();
  },
};

const AudioController = {
  init() {
    DOM.bgMusic.src = ACTIVE_PROFILE.audio.src;
    DOM.bgMusic.volume = ACTIVE_PROFILE.audio.volume;

    DOM.audioToggleBtn.addEventListener('click', () => this.toggleMute());
  },

  playMusic() {
    const playPromise = DOM.bgMusic.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        AppState.isAudioMuted = true;
        UIController.updateAudioButton(true);
      });
    }
  },

  toggleMute() {
    AppState.isAudioMuted = !AppState.isAudioMuted;
    DOM.bgMusic.muted = AppState.isAudioMuted;
    UIController.updateAudioButton(AppState.isAudioMuted);
  },
};

const CarouselController = {
  totalSlides: ACTIVE_PROFILE.gallery.length,

  init() {
    UIController.renderCarousel(ACTIVE_PROFILE.gallery);
    this.bindEvents();
  },

  goToSlide(index) {
    AppState.currentSlideIndex = (index + this.totalSlides) % this.totalSlides;
    UIController.updateCarouselSlide(AppState.currentSlideIndex);
  },

  nextSlide() {
    this.goToSlide(AppState.currentSlideIndex + 1);
  },

  prevSlide() {
    this.goToSlide(AppState.currentSlideIndex - 1);
  },

  startAutoPlay() {
    this.stopAutoPlay();
    AppState.carouselTimerId = setInterval(() => {
      this.nextSlide();
    }, INTERACTION_CONFIG.carouselIntervalMs);
  },

  stopAutoPlay() {
    if (AppState.carouselTimerId) {
      clearInterval(AppState.carouselTimerId);
      AppState.carouselTimerId = null;
    }
  },

  bindEvents() {
    DOM.carouselNextBtn.addEventListener('click', () => {
      this.nextSlide();
      this.startAutoPlay();
    });

    DOM.carouselPrevBtn.addEventListener('click', () => {
      this.prevSlide();
      this.startAutoPlay();
    });

    DOM.carouselDots.addEventListener('click', (event) => {
      const dotBtn = event.target.closest('.carousel__dot');
      if (!dotBtn) return;

      const targetIndex = Number(dotBtn.dataset.index);
      this.goToSlide(targetIndex);
      this.startAutoPlay();
    });

    DOM.carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
    DOM.carousel.addEventListener('mouseleave', () => this.startAutoPlay());
  },
};

/* ============================================================================
   7. MAIN INTERACTION CONTROLLER (ĐIỀU PHỐI PHASE 1 -> PHASE 2)
   ============================================================================ */
const AppController = {
  init() {
    UIController.applyProfileThemeAndText(ACTIVE_PROFILE);
    StarfieldController.init();
    AudioController.init();
    CarouselController.init();
    this.bindHookEvents();
  },

  addLoveEnergy(amount) {
    if (AppState.isRevealed) return;

    AppState.progress = Math.min(100, AppState.progress + amount);
    UIController.updateProgressUI(AppState.progress);
    UIController.triggerPulseAndShake();

    if (AppState.progress >= 100) {
      this.triggerPhaseReveal();
    }
  },

  startHolding() {
    if (AppState.isRevealed || AppState.holdTimerId) return;

    AppState.holdTimerId = setInterval(() => {
      this.addLoveEnergy(INTERACTION_CONFIG.stepPerHoldTick);
    }, INTERACTION_CONFIG.holdIntervalMs);
  },

  stopHolding() {
    if (AppState.holdTimerId) {
      clearInterval(AppState.holdTimerId);
      AppState.holdTimerId = null;
    }
  },

  triggerPhaseReveal() {
    AppState.isRevealed = true;
    this.stopHolding();

    AudioController.playMusic();
    EffectsController.launchCelebrationConfetti();

    UIController.transitionToRevealPhase(() => {
      EffectsController.startTypewriter();
      CarouselController.startAutoPlay();
    });
  },

  bindHookEvents() {
    const { heartBtn } = DOM;

    heartBtn.addEventListener('click', () => {
      this.addLoveEnergy(INTERACTION_CONFIG.stepPerClick);
    });

    heartBtn.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      this.startHolding();
    });

    window.addEventListener('pointerup', () => this.stopHolding());
    window.addEventListener('pointercancel', () => this.stopHolding());
  },
};

document.addEventListener('DOMContentLoaded', () => {
  AppController.init();
});
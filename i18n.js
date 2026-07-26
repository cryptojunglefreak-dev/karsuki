/* =========================================================
   KARSUKI — internationalisation
   Default: English (from the HTML). Switch: JA / ZH / VI / TH / KO.
   Product names, brand names and specs stay in the original form.
   ========================================================= */
(function () {
  "use strict";

  var META = {
    en: { flag: "🇬🇧", code: "EN" },
    ja: { flag: "🇯🇵", code: "JA" },
    zh: { flag: "🇨🇳", code: "ZH" },
    vi: { flag: "🇻🇳", code: "VI" },
    th: { flag: "🇹🇭", code: "TH" },
    ko: { flag: "🇰🇷", code: "KO" }
  };

  var T = {
    ja: {
      navAbout: "会社概要", navProducts: "製品", navWhy: "KARSUKIの理由", navGallery: "ギャラリー", navContact: "お問い合わせ",
      getQuote: "見積もり", contactKarsuki: "KARSUKIに連絡",
      heroEyebrow: "アジア正規ディストリビューター",
      heroTitle: 'プレミアム スチール ボディキット<br /><span class="accent-line">スバルの名車のために。</span>',
      heroSub: "レストア品質のスチールパネル。Zeton Garage製、伝説のスバル・インプレッサWRCとスバル22Bクーペのために。",
      exploreProducts: "製品を見る", contactUs: "お問い合わせ",
      aboutEyebrow: "KARSUKIについて", aboutTitle: "スバル・ピュリストのために",
      aboutP1: "KARSUKIは、最も象徴的なスバル車のためにZeton Garageが製造するプレミアム・スチール・ボディパネルを供給します。すべてのパネルは亜鉛メッキ鋼板からプレス成形され、実車の精密スキャンをもとに造形されています。",
      aboutP2: "私たちは、アジアのスバル愛好家に本物のレストア品質パーツを届けることに注力しています。各パネルは隠しフランジ溶接と正確な工場ジオメトリーで設計され、組み上がりもフィットも本来あるべき姿になります。",
      statPlatforms: "象徴的プラットフォーム · 22B & WRC", statSteel: "スチール構造", statDist: "独占販売",
      prodEyebrow: "ラインナップ", prodTitle: "精密フィットのスチールパネル",
      prodLead: "スバル22BクーペとWRCクーペのための完全なメタルボディ・プログラム。プレス、フランジ加工、レストア基準で仕上げ。",
      galleryWord: "ギャラリー", photosWord: "枚", viewGallery: "キットとギャラリーを見る",
      prodWrcDesc: "WRC S5/6の完全メタルボディキット。本物のプレス鋼板によるフル・ワイドボディ化。",
      prod22bDesc: "完全プレス鋼板メタルボディキット。実車22Bをスキャンしたフロントフェンダーとリアクォーター。",
      prodBumpDesc: "スバル・インプレッサ22B用のフロント&リア・プレス鋼板バンパー。開発中。",
      prodWingDesc: "象徴的な22Bリアウイング。プレス鋼板成形。開発中。",
      prodFullDesc: "22Bメタル・フルプログラム。すべてのスチールパネルとバンパーを一つのキットに。",
      comingSoon: "近日公開", soonBig: "近日発売", inDev: "開発中",
      whyEyebrow: "KARSUKIの理由", whyTitle: "ピュリストが求める基準",
      whyT1: "アジア正規ディストリビューター", whyD1: "この地域におけるZeton Garageスチールパネルの正規供給元。本物の製品を直接供給。",
      whyT2: "プレミアム・スチール構造", whyD2: "0.8mm Zincore亜鉛メッキ鋼板。成形ではなくプレス。本物の強度と仕上がり。",
      whyT3: "精密フィッティング", whyD3: "実車をデジタル化し、フランジを一体化。溶接は隠れ、パネルは正確に揃います。",
      whyT4: "世界配送", whyD4: "梱包・保護のうえ、本気のビルダーへ世界中どこへでも発送します。",
      galleryEyebrow: "ギャラリー", galleryTitle: "鋼の実物", galleryLead: "実物のパネル、実際のビルド。プレス直後から完成ワイドボディまで。",
      contactEyebrow: "お問い合わせ", contactTitle: "ビルドを始めよう",
      contactP: "プラットフォームと仕様をお知らせください。Zeton Garageプレミアム・スチールパネルの在庫・納期・発送を、アジアおよびその先まで確認します。",
      labelEmail: "メール", labelLocation: "所在地",
      panelTitle: "アジア正規販売", panelText: "KARSUKIはアジア全域におけるZeton Garageスチールパネルの唯一の供給窓口です。",
      rowPlatforms: "プラットフォーム", rowMaterial: "素材", rowFitment: "フィット", rowShipping: "配送", worldwide: "世界対応",
      footerTagline: "アジア正規ディストリビューター。スバル・インプレッサWRCと22BクーペのためのZeton Garage製プレミアム・スチール・ボディパネル。"
    },
    zh: {
      navAbout: "关于", navProducts: "产品", navWhy: "为何选择KARSUKI", navGallery: "图库", navContact: "联系",
      getQuote: "获取报价", contactKarsuki: "联系KARSUKI",
      heroEyebrow: "亚洲官方经销商",
      heroTitle: '顶级钢制车身套件<br /><span class="accent-line">致敬传奇斯巴鲁。</span>',
      heroSub: "由Zeton Garage制造的复原级钢制板件，专为传奇的斯巴鲁翼豹WRC与斯巴鲁22B Coupe打造。",
      exploreProducts: "浏览产品", contactUs: "联系我们",
      aboutEyebrow: "关于KARSUKI", aboutTitle: "为斯巴鲁纯粹主义者而生",
      aboutP1: "KARSUKI 供应由 Zeton Garage 制造、面向最具标志性斯巴鲁车型的顶级钢制车身板件。每块板件均由镀锌钢板冲压成型，并依据实车的精密扫描打造。",
      aboutP2: "我们专注于为亚洲的斯巴鲁爱好者提供正品、复原级部件。每块板件均采用隐藏式翻边焊接与精准的原厂几何造型，令成品外观与装配一如原厂。",
      statPlatforms: "标志性平台 · 22B & WRC", statSteel: "全钢结构", statDist: "独家分销",
      prodEyebrow: "产品系列", prodTitle: "钢制板件，精准贴合",
      prodLead: "面向斯巴鲁22B Coupe与WRC Coupe的完整金属车身方案，冲压、翻边并以复原标准精修。",
      galleryWord: "图库", photosWord: "张", viewGallery: "查看套件与图库",
      prodWrcDesc: "完整的WRC S5/6金属车身套件，以真正冲压钢板实现整车宽体改装。",
      prod22bDesc: "完整的冲压钢制金属车身套件，前翼子板与后翼子板取自原厂22B扫描。",
      prodBumpDesc: "适用于斯巴鲁翼豹22B的前后冲压钢制保险杠，开发中。",
      prodWingDesc: "标志性的22B尾翼，冲压钢板成型，开发中。",
      prodFullDesc: "完整的22B金属方案，将所有钢制板件与保险杠合为一套。",
      comingSoon: "即将推出", soonBig: "即将上市", inDev: "开发中",
      whyEyebrow: "为何选择KARSUKI", whyTitle: "纯粹主义者期待的标准",
      whyT1: "亚洲官方经销商", whyD1: "本地区Zeton Garage钢制板件的授权来源，正品，直接供货。",
      whyT2: "顶级钢制结构", whyD2: "0.8mm Zincore镀锌钢板，冲压而非模压，带来真实的强度与质感。",
      whyT3: "精准贴合", whyD3: "由实车数字化并集成翻边，焊缝隐藏，板件对位精准。",
      whyT4: "全球配送", whyD4: "精心装箱、妥善防护，发往世界各地认真打造的车主。",
      galleryEyebrow: "图库", galleryTitle: "钢铁实感", galleryLead: "真实的板件，真实的改装，从初压到成品宽体。",
      contactEyebrow: "联系", contactTitle: "开启你的改装",
      contactP: "告诉我们您的车型与规格，我们将确认Zeton Garage顶级钢制板件的库存、交期与配送，覆盖亚洲及更广地区。",
      labelEmail: "邮箱", labelLocation: "所在地",
      panelTitle: "亚洲官方分销", panelText: "KARSUKI是Zeton Garage钢制板件在整个亚洲的唯一供货渠道。",
      rowPlatforms: "平台", rowMaterial: "材料", rowFitment: "适配", rowShipping: "配送", worldwide: "全球",
      footerTagline: "亚洲官方经销商。Zeton Garage为斯巴鲁翼豹WRC与22B Coupe打造的顶级钢制车身板件。"
    },
    vi: {
      navAbout: "Giới thiệu", navProducts: "Sản phẩm", navWhy: "Vì sao KARSUKI", navGallery: "Thư viện", navContact: "Liên hệ",
      getQuote: "Nhận báo giá", contactKarsuki: "Liên hệ KARSUKI",
      heroEyebrow: "Nhà phân phối chính thức tại châu Á",
      heroTitle: 'Bộ thân vỏ thép cao cấp<br /><span class="accent-line">cho biểu tượng Subaru.</span>',
      heroSub: "Tấm thép đạt chuẩn phục chế do Zeton Garage sản xuất cho Subaru Impreza WRC và Subaru 22B Coupe huyền thoại.",
      exploreProducts: "Xem sản phẩm", contactUs: "Liên hệ",
      aboutEyebrow: "Về KARSUKI", aboutTitle: "Dành cho tín đồ Subaru",
      aboutP1: "KARSUKI cung cấp tấm thân vỏ thép cao cấp do Zeton Garage sản xuất cho những mẫu Subaru biểu tượng nhất. Mỗi tấm được dập từ thép mạ kẽm và tạo hình từ bản quét chính xác của xe thật.",
      aboutP2: "Chúng tôi tập trung mang đến linh kiện chính hãng, đạt chuẩn phục chế cho người đam mê Subaru khắp châu Á. Mỗi tấm được thiết kế với mối hàn gờ ẩn và hình học đúng chuẩn nhà máy, để xe hoàn thiện trông và lắp vừa đúng như phải thế.",
      statPlatforms: "Nền tảng biểu tượng · 22B & WRC", statSteel: "Kết cấu thép", statDist: "Phân phối độc quyền",
      prodEyebrow: "Dòng sản phẩm", prodTitle: "Tấm thép, chuẩn khớp từng chi tiết",
      prodLead: "Chương trình thân vỏ kim loại hoàn chỉnh cho Subaru 22B Coupe và WRC Coupe, được dập, tạo gờ và hoàn thiện theo chuẩn phục chế.",
      galleryWord: "Thư viện", photosWord: "ảnh", viewGallery: "Xem bộ kit & thư viện",
      prodWrcDesc: "Bộ kit thân vỏ kim loại WRC S5/6 hoàn chỉnh, độ widebody trọn gói bằng thép dập nguyên bản.",
      prod22bDesc: "Bộ kit thân vỏ thép dập hoàn chỉnh, vè trước và hông sau quét từ chiếc 22B nguyên bản.",
      prodBumpDesc: "Cản trước và sau bằng thép dập cho Subaru Impreza 22B, đang phát triển.",
      prodWingDesc: "Cánh gió sau 22B biểu tượng, tạo hình từ thép dập, đang phát triển.",
      prodFullDesc: "Trọn bộ chương trình kim loại 22B, mọi tấm thép cùng cản trong một bộ kit.",
      comingSoon: "Sắp ra mắt", soonBig: "Sắp có hàng", inDev: "Đang phát triển",
      whyEyebrow: "Vì sao KARSUKI", whyTitle: "Tiêu chuẩn mà tín đồ mong đợi",
      whyT1: "Nhà phân phối chính thức tại châu Á", whyD1: "Nguồn cung chính thức tấm thép Zeton Garage trong khu vực, hàng chính hãng, cung cấp trực tiếp.",
      whyT2: "Kết cấu thép cao cấp", whyD2: "Thép mạ kẽm Zincore 0.8mm, dập chứ không đúc, cho độ bền và hoàn thiện đúng chất.",
      whyT3: "Lắp khít chính xác", whyD3: "Số hóa từ xe nguyên bản với gờ tích hợp, mối hàn được giấu kín và các tấm khớp chuẩn.",
      whyT4: "Giao hàng toàn cầu", whyD4: "Đóng thùng, bảo vệ kỹ và gửi đến những người chơi nghiêm túc ở bất cứ đâu.",
      galleryEyebrow: "Thư viện", galleryTitle: "Thép trong thực tế", galleryLead: "Tấm thật, xe thật, từ lúc mới dập đến widebody hoàn thiện.",
      contactEyebrow: "Liên hệ", contactTitle: "Bắt đầu dự án của bạn",
      contactP: "Cho chúng tôi biết dòng xe và thông số của bạn. Chúng tôi sẽ xác nhận tình trạng hàng, thời gian và vận chuyển tấm thép Zeton Garage cao cấp khắp châu Á và hơn thế.",
      labelEmail: "Email", labelLocation: "Địa điểm",
      panelTitle: "Phân phối chính thức tại châu Á", panelText: "KARSUKI là đầu mối cung cấp duy nhất tấm thép Zeton Garage khắp châu Á.",
      rowPlatforms: "Nền tảng", rowMaterial: "Vật liệu", rowFitment: "Độ khớp", rowShipping: "Vận chuyển", worldwide: "Toàn cầu",
      footerTagline: "Nhà phân phối chính thức tại châu Á. Tấm thân vỏ thép cao cấp của Zeton Garage cho Subaru Impreza WRC và 22B Coupe."
    },
    th: {
      navAbout: "เกี่ยวกับ", navProducts: "สินค้า", navWhy: "ทำไมต้อง KARSUKI", navGallery: "แกลเลอรี", navContact: "ติดต่อ",
      getQuote: "ขอใบเสนอราคา", contactKarsuki: "ติดต่อ KARSUKI",
      heroEyebrow: "ตัวแทนจำหน่ายอย่างเป็นทางการในเอเชีย",
      heroTitle: 'ชุดตัวถังเหล็กระดับพรีเมียม<br /><span class="accent-line">เพื่อ Subaru ในตำนาน</span>',
      heroSub: "แผงเหล็กระดับงานบูรณะ ผลิตโดย Zeton Garage สำหรับ Subaru Impreza WRC และ Subaru 22B Coupe ในตำนาน",
      exploreProducts: "ดูสินค้า", contactUs: "ติดต่อเรา",
      aboutEyebrow: "เกี่ยวกับ KARSUKI", aboutTitle: "สร้างเพื่อคนรัก Subaru ตัวจริง",
      aboutP1: "KARSUKI จัดจำหน่ายแผงตัวถังเหล็กระดับพรีเมียมที่ผลิตโดย Zeton Garage สำหรับรถ Subaru ที่เป็นสัญลักษณ์ที่สุด ทุกแผงขึ้นรูปจากเหล็กชุบสังกะสีและออกแบบจากการสแกนรถจริงอย่างแม่นยำ",
      aboutP2: "เรามุ่งมอบชิ้นส่วนแท้ระดับงานบูรณะให้แก่คนรัก Subaru ทั่วเอเชีย ทุกแผงออกแบบด้วยรอยเชื่อมแบบซ่อนขอบและรูปทรงตรงตามโรงงาน เพื่อให้งานออกมาสวยและพอดีอย่างที่ควรเป็น",
      statPlatforms: "แพลตฟอร์มระดับไอคอน · 22B & WRC", statSteel: "โครงสร้างเหล็ก", statDist: "จัดจำหน่ายแต่เพียงผู้เดียว",
      prodEyebrow: "กลุ่มสินค้า", prodTitle: "แผงเหล็กที่ออกแบบให้พอดี",
      prodLead: "โปรแกรมตัวถังโลหะครบชุดสำหรับ Subaru 22B Coupe และ WRC Coupe ขึ้นรูป ทำขอบ และเก็บงานตามมาตรฐานงานบูรณะ",
      galleryWord: "แกลเลอรี", photosWord: "รูป", viewGallery: "ดูชุดและแกลเลอรี",
      prodWrcDesc: "ชุดตัวถังโลหะ WRC S5/6 แบบครบชุด แปลงร่างไวด์บอดี้เต็มรูปแบบด้วยเหล็กปั๊มแท้",
      prod22bDesc: "ชุดตัวถังโลหะเหล็กปั๊มครบชุด แก้มหน้าและบังโคลนหลังสแกนจาก 22B คันจริง",
      prodBumpDesc: "กันชนหน้าและหลังเหล็กปั๊มสำหรับ Subaru Impreza 22B กำลังพัฒนา",
      prodWingDesc: "สปอยเลอร์หลัง 22B อันเป็นเอกลักษณ์ ขึ้นรูปด้วยเหล็กปั๊ม กำลังพัฒนา",
      prodFullDesc: "โปรแกรมโลหะ 22B แบบเต็ม ทุกแผงเหล็กพร้อมกันชนในชุดเดียว",
      comingSoon: "เร็ว ๆ นี้", soonBig: "เร็ว ๆ นี้", inDev: "กำลังพัฒนา",
      whyEyebrow: "ทำไมต้อง KARSUKI", whyTitle: "มาตรฐานที่คนรักตัวจริงคาดหวัง",
      whyT1: "ตัวแทนจำหน่ายอย่างเป็นทางการในเอเชีย", whyD1: "แหล่งจำหน่ายแผงเหล็ก Zeton Garage อย่างเป็นทางการในภูมิภาค สินค้าแท้ ส่งตรง",
      whyT2: "โครงสร้างเหล็กพรีเมียม", whyD2: "เหล็กชุบสังกะสี Zincore 0.8 มม. ขึ้นรูปด้วยการปั๊มไม่ใช่การหล่อ เพื่อความแข็งแรงและงานเก็บที่แท้จริง",
      whyT3: "การประกอบที่แม่นยำ", whyD3: "ทำดิจิทัลจากรถจริงพร้อมขอบพับในตัว รอยเชื่อมจึงถูกซ่อนและแผงเรียงตรงพอดี",
      whyT4: "จัดส่งทั่วโลก", whyD4: "บรรจุลัง ป้องกันอย่างดี และจัดส่งถึงนักสร้างตัวจริงทุกที่ที่โปรเจกต์อยู่",
      galleryEyebrow: "แกลเลอรี", galleryTitle: "เหล็กของจริง", galleryLead: "แผงจริง งานสร้างจริง ตั้งแต่แผ่นปั๊มดิบจนถึงไวด์บอดี้ที่เสร็จสมบูรณ์",
      contactEyebrow: "ติดต่อ", contactTitle: "เริ่มโปรเจกต์ของคุณ",
      contactP: "บอกแพลตฟอร์มและสเปกของคุณ แล้วเราจะยืนยันสถานะสินค้า ระยะเวลา และการจัดส่งแผงเหล็ก Zeton Garage ระดับพรีเมียมทั่วเอเชียและไกลกว่านั้น",
      labelEmail: "อีเมล", labelLocation: "ที่ตั้ง",
      panelTitle: "การจัดจำหน่ายอย่างเป็นทางการในเอเชีย", panelText: "KARSUKI คือจุดจัดจำหน่ายแผงเหล็ก Zeton Garage เพียงหนึ่งเดียวทั่วเอเชีย",
      rowPlatforms: "แพลตฟอร์ม", rowMaterial: "วัสดุ", rowFitment: "การประกอบ", rowShipping: "การจัดส่ง", worldwide: "ทั่วโลก",
      footerTagline: "ตัวแทนจำหน่ายอย่างเป็นทางการในเอเชีย แผงตัวถังเหล็กระดับพรีเมียมจาก Zeton Garage สำหรับ Subaru Impreza WRC และ 22B Coupe"
    },
    ko: {
      navAbout: "소개", navProducts: "제품", navWhy: "왜 KARSUKI인가", navGallery: "갤러리", navContact: "문의",
      getQuote: "견적 요청", contactKarsuki: "KARSUKI 문의",
      heroEyebrow: "아시아 공식 유통사",
      heroTitle: '프리미엄 스틸 바디 키트<br /><span class="accent-line">스바루 아이콘을 위해.</span>',
      heroSub: "전설적인 스바루 임프레자 WRC와 스바루 22B 쿠페를 위한 Zeton Garage 제작 복원 등급 스틸 패널.",
      exploreProducts: "제품 보기", contactUs: "문의하기",
      aboutEyebrow: "KARSUKI 소개", aboutTitle: "스바루 순수주의자를 위해",
      aboutP1: "KARSUKI는 가장 상징적인 스바루 모델을 위해 Zeton Garage가 제작한 프리미엄 스틸 바디 패널을 공급합니다. 모든 패널은 아연도금 강판을 프레스로 성형하고 실제 차량의 정밀 스캔을 바탕으로 만듭니다.",
      aboutP2: "우리는 아시아 전역의 스바루 애호가에게 정품 복원 등급 부품을 제공하는 데 집중합니다. 모든 패널은 숨겨진 플랜지 용접과 정확한 공장 지오메트리로 설계되어, 완성된 차량이 마땅히 그래야 할 모습과 핏을 갖춥니다.",
      statPlatforms: "아이코닉 플랫폼 · 22B & WRC", statSteel: "스틸 구조", statDist: "독점 유통",
      prodEyebrow: "제품 라인업", prodTitle: "정확한 핏을 위한 스틸 패널",
      prodLead: "스바루 22B 쿠페와 WRC 쿠페를 위한 완전한 메탈 바디 프로그램. 프레스, 플랜지 가공, 복원 기준 마감.",
      galleryWord: "갤러리", photosWord: "장", viewGallery: "키트 및 갤러리 보기",
      prodWrcDesc: "정품 프레스 강판으로 완성하는 풀 와이드바디, WRC S5/6 완전 메탈 바디 키트.",
      prod22bDesc: "실제 22B를 스캔한 프런트 펜더와 리어 쿼터, 완전한 프레스 강판 메탈 바디 키트.",
      prodBumpDesc: "스바루 임프레자 22B용 프런트 및 리어 프레스 강판 범퍼. 개발 중.",
      prodWingDesc: "상징적인 22B 리어 윙, 프레스 강판 성형. 개발 중.",
      prodFullDesc: "22B 메탈 풀 프로그램, 모든 스틸 패널과 범퍼를 하나의 키트로.",
      comingSoon: "출시 예정", soonBig: "출시 예정", inDev: "개발 중",
      whyEyebrow: "왜 KARSUKI인가", whyTitle: "순수주의자가 기대하는 기준",
      whyT1: "아시아 공식 유통사", whyD1: "역내 Zeton Garage 스틸 패널의 공식 공급처. 정품, 직접 공급.",
      whyT2: "프리미엄 스틸 구조", whyD2: "0.8mm Zincore 아연도금 강판, 몰딩이 아닌 프레스 방식으로 진정한 강도와 마감.",
      whyT3: "정밀 피팅", whyD3: "실제 차량을 디지털화하고 플랜지를 일체화하여 용접부는 감춰지고 패널은 정확히 정렬됩니다.",
      whyT4: "전 세계 배송", whyD4: "견고히 포장하고 보호하여, 프로젝트가 있는 곳 어디로든 진지한 빌더에게 배송합니다.",
      galleryEyebrow: "갤러리", galleryTitle: "강철, 그 실체", galleryLead: "진짜 패널, 진짜 빌드. 프레스 직후부터 완성된 와이드바디까지.",
      contactEyebrow: "문의", contactTitle: "당신의 빌드를 시작하세요",
      contactP: "차종과 사양을 알려주세요. Zeton Garage 프리미엄 스틸 패널의 재고, 리드타임, 배송을 아시아 및 그 너머까지 확인해 드립니다.",
      labelEmail: "이메일", labelLocation: "위치",
      panelTitle: "아시아 공식 유통", panelText: "KARSUKI는 아시아 전역에서 Zeton Garage 스틸 패널의 단일 공급 창구입니다.",
      rowPlatforms: "플랫폼", rowMaterial: "소재", rowFitment: "피팅", rowShipping: "배송", worldwide: "전 세계",
      footerTagline: "아시아 공식 유통사. 스바루 임프레자 WRC와 22B 쿠페를 위한 Zeton Garage 프리미엄 스틸 바디 패널."
    }
  };

  // Collect translatable nodes and capture English originals
  var nodes = [];
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    nodes.push({ el: el, key: el.getAttribute("data-i18n"), html: false });
  });
  document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
    nodes.push({ el: el, key: el.getAttribute("data-i18n-html"), html: true });
  });
  var orig = {};
  nodes.forEach(function (n) {
    if (orig[n.key] == null) orig[n.key] = n.html ? n.el.innerHTML.trim() : n.el.textContent.trim();
  });

  function apply(lang) {
    var dict = T[lang] || null;
    nodes.forEach(function (n) {
      var val = (lang === "en" || !dict) ? orig[n.key] : (dict[n.key] != null ? dict[n.key] : orig[n.key]);
      if (val == null) return;
      if (n.html) n.el.innerHTML = val; else n.el.textContent = val;
    });
    document.documentElement.setAttribute("lang", lang);
    var m = META[lang] || META.en;
    var f = document.getElementById("langFlag"), c = document.getElementById("langCode");
    if (f) f.textContent = m.flag;
    if (c) c.textContent = m.code;
    document.querySelectorAll("#langMenu [data-lang]").forEach(function (b) {
      b.setAttribute("aria-selected", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem("karsuki_lang", lang); } catch (e) {}
  }

  // Switcher UI
  var sw = document.getElementById("langSwitch");
  var btn = document.getElementById("langBtn");
  var menu = document.getElementById("langMenu");
  function setOpen(o) { if (!sw) return; sw.classList.toggle("open", o); if (btn) btn.setAttribute("aria-expanded", String(o)); }
  if (btn) btn.addEventListener("click", function (e) { e.stopPropagation(); setOpen(!sw.classList.contains("open")); });
  if (menu) menu.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); setOpen(false); });
  });
  document.addEventListener("click", function () { setOpen(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });

  var saved = null;
  try { saved = localStorage.getItem("karsuki_lang"); } catch (e) {}
  apply(saved && META[saved] ? saved : "en");
})();

import "./app.css"
import Navbar from "./components/Navbar";
import { 
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Anasayfa from "./pages/Anasayfa"
import Hizmetlerimiz from "./pages/Hizmetlerimiz/Hizmetlerimiz"
import TeknikHizmetlerimiz from "./pages/Hizmetlerimiz/TeknikHizmetlerimiz/TeknikHizmetlerimiz"
import FrontendTeknolojileri from "./pages/Hizmetlerimiz/TeknikHizmetlerimiz/FrontendTeknolojileri";
import BackendTeknolojileri from "./pages/Hizmetlerimiz/TeknikHizmetlerimiz/BackendTeknolojileri";
import AWSHizmetleri from "./pages/Hizmetlerimiz/TeknikHizmetlerimiz/AWSHizmetleri";
import DanismanlikHizmetleri from "./pages/Hizmetlerimiz/DanismanlikHizmetlerimiz/DanismanlikHizmetleri";
import TeknikDestek from "./pages/Hizmetlerimiz/DanismanlikHizmetlerimiz/TeknikDestek";
import BilgilendirmeHizmetleri from "./pages/Hizmetlerimiz/DanismanlikHizmetlerimiz/BilgilendirmeHizmetleri";
import MentorlukHizmetleri from "./pages/Hizmetlerimiz/DanismanlikHizmetlerimiz/MentorlukHizmetleri";
import DanismanlikEgitimleri from "./pages/Hizmetlerimiz/DanismanlikHizmetlerimiz/DanismanlikEgitimleri";
import SertifikaliDanismanlikHizmeti from "./pages/Hizmetlerimiz/DanismanlikHizmetlerimiz/DanismanlikEgitimleri/SertifikaliDanismanlikHizmeti";
import KurumsalDanismanlikHizmetleri from "./pages/Hizmetlerimiz/DanismanlikHizmetlerimiz/DanismanlikEgitimleri/KurumsalDanismanlikHizmetleri";
import EgitimOgretimPlanlama from "./pages/Hizmetlerimiz/DanismanlikHizmetlerimiz/EgitimOgretimPlanlama";
import YazilimDanismanligi from "./pages/Hizmetlerimiz/DanismanlikHizmetlerimiz/YazilimDanismanligi";
import ProjeDanismanligi from "./pages/Hizmetlerimiz/DanismanlikHizmetlerimiz/ProjeDanismanligi";
import HataliAltyapiOnarimi from "./pages/Hizmetlerimiz/HataliAltyapiOnarimi";
import Hakkimizda from "./pages/Hakkimizda/Hakkimizda";
import BizKimiz from "./pages/Hakkimizda/BizKimiz";
import Kurumsal from "./pages/Hakkimizda/Kurumsal";
import Referanslarimiz from "./pages/Hakkimizda/Referanslarimiz/Referanslarimiz";
import GecmisReferanslar from "./pages/Hakkimizda/Referanslarimiz/GecmisReferanslar/GecmisReferanslar";
import XReferansi from "./pages/Hakkimizda/Referanslarimiz/GecmisReferanslar/XReferansi";
import YReferansi from "./pages/Hakkimizda/Referanslarimiz/GecmisReferanslar/YReferansi";
import ZReferansi from "./pages/Hakkimizda/Referanslarimiz/GecmisReferanslar/ZReferansi";
import GelecekReferanslar from "./pages/Hakkimizda/Referanslarimiz/GelecekReferanslar/GelecekReferanslar";
import AReferansi from "./pages/Hakkimizda/Referanslarimiz/GelecekReferanslar/AReferansi";
import BReferansi from "./pages/Hakkimizda/Referanslarimiz/GelecekReferanslar/BReferansi";
import CReferansi from "./pages/Hakkimizda/Referanslarimiz/GelecekReferanslar/CReferansi";
import Vizyon from "./pages/Hakkimizda/Vizyon";
import Misyon from "./pages/Hakkimizda/Misyon";
import Iletisim from "./pages/Iletisim";
import KayitOl from "./pages/KayitOl";
import GirisYap from "./pages/GirisYap";


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Anasayfa/>} />
        <Route path="/hizmetlerimiz" element={<Hizmetlerimiz/>} />
        <Route path="/hizmetlerimiz/teknik-hizmetlerimiz" element={<TeknikHizmetlerimiz/>} />
        <Route path="/hizmetlerimiz/teknik-hizmetlerimiz/frotend-teknolojileri" element={<FrontendTeknolojileri/>} />
        <Route path="/hizmetlerimiz/teknik-hizmetlerimiz/backend-teknolojileri" element={<BackendTeknolojileri />} />
        <Route path="/hizmetlerimiz/teknik-hizmetlerimiz/aws-hizmetleri" element={<AWSHizmetleri />} />
        <Route path="/hizmetlerimiz/danismanlik-hizmetlerimiz/danismanlik-hizmetleri" element={<DanismanlikHizmetleri />} />
        <Route path="/hizmetlerimiz/danismanlik-hizmetlerimiz/teknik-destek" element={<TeknikDestek />} />
        <Route path="/hizmetlerimiz/danismanlik-hizmetlerimiz/bilgilendirme-hizmetleri" element={<BilgilendirmeHizmetleri />} />
        <Route path="/hizmetlerimiz/danismanlik-hizmetlerimiz/mentorluk-hizmetleri" element={<MentorlukHizmetleri />} />
        <Route path="/hizmetlerimiz/danismanlik-hizmetlerimiz/danismanlik-egitimleri" element={<DanismanlikEgitimleri />} />
        <Route path="/hizmetlerimiz/danismanlik-hizmetlerimiz/danismanlik-egitimleri/sertifikali-danismanlik-hizmetleri" element={<SertifikaliDanismanlikHizmeti />} />
        <Route path="/hizmetlerimiz/danismanlik-hizmetlerimiz/danismanlik-egitimleri/kurumsal-danismanlik-hizmetleri" element={<KurumsalDanismanlikHizmetleri />} />
        <Route path="/hizmetlerimiz/danismanlik-hizmetlerimiz/egitim-ogretim-planlama" element={<EgitimOgretimPlanlama />} />
        <Route path="/hizmetlerimiz/danismanlik-hizmetlerimiz/yazilim-danismanligi" element={<YazilimDanismanligi />} />
        <Route path="/hizmetlerimiz/danismanlik-hizmetlerimiz/proje-danismanligi" element={<ProjeDanismanligi />} />
        <Route path="/hizmetlerimiz/danismanlik-hizmetlerimiz/hatali-altyapi-onarimi" element={<HataliAltyapiOnarimi />} />
        <Route path="/hakkimizda" element={<Hakkimizda/>} />
        <Route path="/hakkimizda/biz-kimiz" element={<BizKimiz/>} />
        <Route path="/hakkimizda/kurumsal" element={<Kurumsal/>} />
        <Route path="/hakkimizda/referanslarimiz" element={<Referanslarimiz/>} />
        <Route path="/hakkimizda/referanslarimiz/gecmis-referanslarimiz" element={<GecmisReferanslar/>} />
        <Route path="/hakkimizda/referanslarimiz/gecmis-referanslarimiz/x-referansi" element={<XReferansi/>} />
        <Route path="/hakkimizda/referanslarimiz/gecmis-referanslarimiz/y-referansi" element={<YReferansi/>} />
        <Route path="/hakkimizda/referanslarimiz/gecmis-referanslarimiz/z-referansi" element={<ZReferansi/>} />
        <Route path="/hakkimizda/referanslarimiz/gelecek-referanslarimiz" element={<GelecekReferanslar/>} />
        <Route path="/hakkimizda/referanslarimiz/gelecek-referanslarimiz/a-referansi" element={<AReferansi/>} />
        <Route path="/hakkimizda/referanslarimiz/gelecek-referanslarimiz/b-referansi" element={<BReferansi/>} />
        <Route path="/hakkimizda/referanslarimiz/gelecek-referanslarimiz/c-referansi" element={<CReferansi/>} />
        <Route path="/hakkimizda/vizyon" element={<Vizyon/>} />
        <Route path="/hakkimizda/misyon" element={<Misyon/>} />
        <Route path="/iletisim" element={<Iletisim/>} />
        <Route path="/kayit-ol" element={<KayitOl/>} />
        <Route path="/giris-yap" element={<GirisYap/>} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-foreground"
    >
      <h1 className="text-4xl font-extrabold mb-8 text-primary">Gizlilik Politikası</h1>
      <p className="mb-6 text-muted-foreground"><strong>Son Güncelleme:</strong> {currentDate}</p>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">1. Giriş</h2>
          <p className="text-muted-foreground">
            Web sitemize hoş geldiniz. Gizliliğinizi korumayı taahhüt ediyoruz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde, hizmetlerimizi kullandığınızda veya ürünlerimizi satın aldığınızda bilgilerinizi nasıl topladığımızı, kullandığımızı, ifşa ettiğimizi ve koruduğumuzu açıklar. Lütfen bu politikayı dikkatlice okuyun. Bu gizlilik politikasının şartlarını kabul etmiyorsanız, lütfen siteye erişmeyin.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">2. Topladığımız Bilgiler</h2>
          <p className="text-muted-foreground mb-3">Sizinle ilgili çeşitli yollarla bilgi toplayabiliriz. Sitede toplayabileceğimiz bilgiler şunları içerir:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <strong>Kişisel Veriler:</strong> İletişim veya rezervasyon formlarımızı kullandığınızda bize gönüllü olarak verdiğiniz adınız, e-posta adresiniz ve telefon numaranız gibi kişisel olarak tanımlanabilir bilgiler ve yaşınız, cinsiyetiniz ve fitness hedefleriniz gibi demografik bilgiler.
            </li>
            <li>
              <strong>Ödeme Verileri:</strong> İşlemleri gerçekleştirmek için üçüncü taraf ödeme işlemcileri (ör. Stripe, Gumroad) kullanıyoruz. Kredi kartı bilgilerinizi saklamıyoruz. Tüm ödeme verileri işlemcilerimiz tarafından güvenli bir şekilde işlenir. Daha fazla bilgi için lütfen onların gizlilik politikalarını inceleyin.
            </li>
            <li>
              <strong>Zamanlama Verileri:</strong> Calendly gibi üçüncü taraf araçlar aracılığıyla bir seans rezervasyonu yaptığınızda, adınız, e-postanız ve seçilen zaman aralığı gibi randevunuzu planlamak için gerekli bilgileri toplarız.
            </li>
            <li>
              <strong>Kullanım Verileri:</strong> Cihazınız ve web sitemizle nasıl etkileşimde bulunduğunuz hakkında bilgi toplamak için çerezler ve benzeri izleme teknolojilerini kullanabiliriz. Bu, sitemizi ve deneyiminizi geliştirmemize yardımcı olur.
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">3. Bilgilerinizi Nasıl Kullanırız</h2>
          <p className="text-muted-foreground">Topladığımız bilgileri şu amaçlarla kullanırız:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Hizmetlerimizi sağlamak, işletmek ve sürdürmek.</li>
            <li>İşlemlerinizi işlemek ve siparişlerinizi yönetmek.</li>
            <li>Sorularınıza yanıt vermek ve size hizmetle ilgili bilgiler göndermek de dahil olmak üzere sizinle iletişim kurmak.</li>
            <li>Web sitemizdeki deneyiminizi iyileştirmek ve kişiselleştirmek.</li>
            <li>İşlevselliği artırmak için web sitemizi nasıl kullandığınızı anlamak ve analiz etmek.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">4. Veri Depolama ve Güvenlik</h2>
          <p className="text-muted-foreground">
            Kişisel bilgilerinizi korumaya yardımcı olmak için idari, teknik ve fiziksel güvenlik önlemleri kullanıyoruz. Bize sağladığınız kişisel bilgileri güvence altına almak için makul adımlar atmış olsak da, çabalarımıza rağmen hiçbir güvenlik önleminin mükemmel veya aşılmaz olmadığını lütfen unutmayın.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">5. Üçüncü Taraf Hizmetleri</h2>
          <p className="text-muted-foreground">
            Web sitemiz ödemeler (Stripe, Gumroad) ve zamanlama (Calendly) için üçüncü taraf hizmetleri kullanmaktadır. Bu üçüncü tarafların gizlilik uygulamalarından sorumlu değiliz. Gizlilik politikalarını incelemenizi öneririz.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">6. Çerezler</h2>
          <p className="text-muted-foreground">
            Deneyiminizi geliştirmek için çerezler kullanıyoruz. Tarayıcı ayarlarınız aracılığıyla çerezleri devre dışı bırakmayı seçebilirsiniz, ancak bu sitenin işlevselliğini etkileyebilir.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">7. Haklarınız</h2>
          <p className="text-muted-foreground">
            Bulunduğunuz yere bağlı olarak, bilgilerinize erişme, düzeltme veya silme hakkı gibi kişisel verilerinizle ilgili haklarınız olabilir. Bu hakları kullanmak için lütfen bizimle iletişime geçin.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">8. Bu Politikadaki Değişiklikler</h2>
          <p className="text-muted-foreground">
            Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Yeni politikayı bu sayfada yayınlayarak herhangi bir değişiklik hakkında sizi bilgilendireceğiz.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">9. Bize Ulaşın</h2>
          <p className="text-muted-foreground">
            Bu Gizlilik Politikası hakkında herhangi bir sorunuz veya endişeniz varsa, lütfen iletişim sayfamızda verilen bilgiler aracılığıyla bizimle iletişime geçin.
          </p>
        </div>

      </div>
    </motion.div>
  );
};
export default PrivacyPolicy;
